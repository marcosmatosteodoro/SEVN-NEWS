// Importe as bibliotecas necessárias
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './';

describe('Header', () => {
  it('should render without back button when backButton prop is false', () => {
    render(<Header backButton={false} />);

    // Verifique se o título está presente
    expect(screen.getByText('SEVN NEWS')).toBeInTheDocument();

    // Verifique se o botão de voltar não está presente
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should render with back button when backButton prop is true', () => {
    render(<Header backButton={true} />);

    // Verifique se o título está presente
    expect(screen.getByText('SEVN NEWS')).toBeInTheDocument();

    // Verifique se o botão de voltar está presente
    expect(screen.getByRole('link')).toBeInTheDocument();

    // Verifique se o botão de voltar tem o atributo href configurado corretamente
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
