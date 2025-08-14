import { render, screen } from '@testing-library/react';
import App from './App';
 
test('Verificar que el botón está deshabilitado al iniciar', () => {
    render(<App />);
    const button = screen.getByText('Iniciar Sesión');
    expect(button).toBeDisabled();
});

test('Verificar que el botón se habilita solo cuando los tres campos están completos', () => {
    render(<App />);

    let button = screen.getByText('Iniciar Sesión');
    expect(button).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText('Código de cliente'), { target: { value: '12345' } });
    fireEvent.change(screen.getByPlaceholderText('Usuario'), { target: { value: 'user123' } });
    button = screen.getByText('Iniciar Sesión');
    expect(button).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'pass123' } });
    button = screen.getByText('Iniciar Sesión');
    expect(button).not.toBeDisabled();
});