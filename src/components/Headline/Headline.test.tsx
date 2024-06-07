import { render, screen } from '@testing-library/react';
import { Headline } from './';

const mockHeadline = {
  id: '1',
  title: 'Test Headline',
  category: { id: '1', name: 'TestCategory', code: 'TC' },
  image: '/test-image.jpg',
};

describe('Headline', () => {
  it('should render headline title, category, and link', () => {
    render(<Headline headline={mockHeadline} />);

    expect(screen.getByText(mockHeadline.title)).toBeInTheDocument();

    expect(screen.getByText(mockHeadline.category.name)).toBeInTheDocument();

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/noticia/${mockHeadline.id}`);
  });
});
