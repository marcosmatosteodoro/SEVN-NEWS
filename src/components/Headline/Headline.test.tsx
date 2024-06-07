import { render, screen } from '@testing-library/react';
import { Headline } from './';

const mockHeadline = {
  id: '1',
  title: 'Test Headline',
  category: { id: '1', name: 'TestCategory', code: 'TC' },
  image: '/test-image.jpg', // Adicione a propriedade image aqui
};


describe('Headline', () => {
  it('should render headline title, category, and link', () => {
    render(<Headline headline={mockHeadline} />);

    // Verifica se o título da manchete está presente
    expect(screen.getByText(mockHeadline.title)).toBeInTheDocument();

    // Verifica se o componente CategoryText está sendo renderizado corretamente
    expect(screen.getByText(mockHeadline.category.name)).toBeInTheDocument();

    // Verifica se o link está presente e tem o atributo href configurado corretamente
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/noticia/${mockHeadline.id}`);
  });
});
