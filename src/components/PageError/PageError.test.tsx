// src/components/PageError/PageError.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PageError } from './';

describe('PageError', () => {
  it('should render title and text correctly', () => {
    const title = 'Error 404';
    const text = 'Page not found';

    render(<PageError title={title} text={text} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render the link to the home page', () => {
    render(<PageError title="Error" text="Error text" />);

    const link = screen.getByRole('link', { name: /Clique aqui para voltar/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
