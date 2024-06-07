import { ApiProvider } from '@/context/ApiContext';
import { render, screen } from '@testing-library/react';
import { Headlines } from './';

describe('Headlines', () => {
  it('should render headlines correctly', () => {
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
    ];

    render(
      <ApiProvider>
        <Headlines headlines={mockHeadlines} />
      </ApiProvider>,
    );

    const firstHeadlineTitle = screen.getByText('First Headline');
    expect(firstHeadlineTitle).toBeInTheDocument();

    const secondHeadlineTitle = screen.getByText('Second Headline');
    expect(secondHeadlineTitle).toBeInTheDocument();

    const headlineContainer = screen.getByTestId('headline-container');
    expect(headlineContainer).toBeInTheDocument();

    const secondaryHeadlineContainer = screen.getByTestId(
      'secondary-headline-container',
    );
    expect(secondaryHeadlineContainer).toBeInTheDocument();
  });
});
