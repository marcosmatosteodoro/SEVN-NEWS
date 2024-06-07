import { render, screen } from '@testing-library/react';
import { CategoryText } from './';

const mockCategory = {
  id: '1',
  name: 'Technology',
  code: 'TECH',
};

describe('CategoryText', () => {
  it('should render category name and apply correct style', () => {
    render(<CategoryText category={mockCategory} />);

    // Verifica se o nome da categoria está presente
    expect(screen.getByText(mockCategory.name)).toBeInTheDocument();

    // Verifica se a classe CSS correspondente está sendo aplicada
    const categoryElement = screen.getByText(mockCategory.name);
    expect(categoryElement).toHaveClass('TECH');
  });
});
