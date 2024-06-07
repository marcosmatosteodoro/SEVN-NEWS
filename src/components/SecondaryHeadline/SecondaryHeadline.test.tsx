// src/components/SecondaryHeadline/SecondaryHeadline.test.tsx
import { ApiProvider } from '@/context/ApiContext';
import { NewsHeadline } from '@/domain';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SecondaryHeadline } from './';

// Mock the CategoryText component
jest.mock('../CategoryText', () => ({
  CategoryText: ({ category }: { category: { name: string } }) => (
    <div>{category.name}</div>
  ),
}));

const headline: NewsHeadline = {
  id: '1',
  title: 'Test Headline',
  image: '/test-image.jpg',
  category: { id: '1', name: 'TestCategory', code: 'TC' },
};

const apiUrl = 'https://api.example.com';

describe('SecondaryHeadline', () => {
  it('should render the title, image, and category correctly', () => {
    render(
      <ApiProvider>
        <SecondaryHeadline headline={headline} apiUrl={apiUrl} />
      </ApiProvider>,
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/noticia/1');

    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('alt', headline.title);

    expect(screen.getByText(headline.title)).toBeInTheDocument();
    expect(screen.getByText(headline.category.name)).toBeInTheDocument();
  });
});
