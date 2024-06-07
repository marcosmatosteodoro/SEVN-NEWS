import { render, screen } from '@testing-library/react';
import { Advertising } from './';

describe('Advertising', () => {
  it('should render correctly', () => {
    render(<Advertising />);

    // Verifica se o texto "Publicidade" está presente
    expect(screen.getByText('Publicidade')).toBeInTheDocument();

    // Verifica se o contêiner possui a classe correta
    const container = screen.getByTestId('advertising-container');
    expect(container).toHaveClass('container');
  });
});
