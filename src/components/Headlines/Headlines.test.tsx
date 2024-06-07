import { ApiProvider } from '@/context/ApiContext';
import { render, screen } from '@testing-library/react';
import { Headlines } from './';

describe('Headlines', () => {
  it('should render headlines correctly', () => {
    // Dados fictícios de manchetes
    const mockHeadlines = [
      {
        id: '1',
        title: 'First Headline',
        category: { id: '1', name: 'Category 1', code: 'C1' },
        image: '/image1.jpg',
      },
      {
        id: '2',
        title: 'Second Headline',
        category: { id: '2', name: 'Category 2', code: 'C2' },
        image: '/image2.jpg',
      },
      // Adicione mais manchetes conforme necessário
    ];

    // Renderizar o componente Headlines com as manchetes fictícias
    render(
      <ApiProvider>
        <Headlines headlines={mockHeadlines} />
      </ApiProvider>,
    );

    // Verificar se o título da primeira manchete é renderizado corretamente
    const firstHeadlineTitle = screen.getByText('First Headline');
    expect(firstHeadlineTitle).toBeInTheDocument();

    // Verificar se o título da segunda manchete é renderizado corretamente
    const secondHeadlineTitle = screen.getByText('Second Headline');
    expect(secondHeadlineTitle).toBeInTheDocument();

    // Verificar se o componente Headline é renderizado corretamente para a primeira manchete
    const headlineContainer = screen.getByTestId('headline-container');
    expect(headlineContainer).toBeInTheDocument();

    // Verificar se o componente SecondaryHeadline é renderizado corretamente para a segunda manchete
    const secondaryHeadlineContainer = screen.getByTestId(
      'secondary-headline-container',
    );
    expect(secondaryHeadlineContainer).toBeInTheDocument();
  });
});
