import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import Second from '../components/Second';


describe('Second component', () => {
  test('should render the component with the expected HTML structure', () => {
    render(<Second />);
    expect(screen.getByText(/Ejercicio 2: Filtrar Palabras Repetidas/i)).toBeInTheDocument();
    expect(screen.getByText(/Input:/i)).toBeInTheDocument();
    expect(screen.getByText(/output:/i)).toBeInTheDocument();
  });

  test('should render \'Este es un ejemplo de prueba\' for output when \'Este es un ejemplo ejemplo de prueba prueba\' is passed as input', () => {
    render(<Second textToFilter="Este es un ejemplo ejemplo de prueba prueba" />);
    expect(screen.getByText(/Ejercicio 2: Filtrar Palabras Repetidas/i)).toBeInTheDocument();
    expect(screen.getByText('Input: Este es un ejemplo ejemplo de prueba prueba')).toBeInTheDocument();
    expect(screen.getByText('Output: Este es un ejemplo de prueba')).toBeInTheDocument();
  });

  test('should render \'Hola mundo\' for output when \'Hola hola mundo mundo Mundo\' is passed as input', () => {
    render(<Second textToFilter="Hola hola mundo mundo Mundo" />);
    expect(screen.getByText(/Ejercicio 2: Filtrar Palabras Repetidas/i)).toBeInTheDocument();
    expect(screen.getByText('Input: Hola hola mundo mundo Mundo')).toBeInTheDocument();
    expect(screen.getByText('Output: Hola mundo')).toBeInTheDocument();
  });
});
