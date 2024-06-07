import { ApiProvider } from '@/context/ApiContext';
import { NewsSecondary } from '@/domain';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SecondaryNews } from './';

const mockNews: NewsSecondary[] = [
  {
    id: '1',
    title: 'News Title 1',
    category: { id: '1', name: 'Category 1', code: 'C1' },
    first_sentence: 'First sentence of news 1',
    content: 'Content of news 1',
  },
  {
    id: '2',
    title: 'News Title 2',
    category: { id: '2', name: 'Category 2', code: 'C2' },
    first_sentence: 'First sentence of news 2',
    content: 'Content of news 2',
  },
  {
    id: '3',
    title: 'News Title 3',
    category: { id: '3', name: 'Category 3', code: 'C3' },
    first_sentence: 'First sentence of news 3',
    content: 'Content of news 3',
  },
];

describe('SecondaryNews', () => {
  it('should render news titles and links correctly', () => {
    render(
      <ApiProvider>
        <SecondaryNews news={mockNews} />
      </ApiProvider>,
    );

    const newsLinks = screen.getAllByRole('link');
    expect(newsLinks).toHaveLength(mockNews.length);

    mockNews.forEach((news, index) => {
      expect(newsLinks[index]).toHaveAttribute('href', `/noticia/${news.id}`);
      expect(newsLinks[index]).toHaveTextContent(news.title);
    });
  });

  it('should render news categories with correct styles', () => {
    render(<SecondaryNews news={mockNews} />);

    const categoryDivs = screen.getAllByTestId('category');
    expect(categoryDivs).toHaveLength(mockNews.length);

    mockNews.forEach((news, index) => {
      expect(categoryDivs[index]).toHaveClass(`${news.category.code}`);
    });
  });
});
