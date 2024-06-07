import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './';

describe('Header', () => {
  it('should render without back button when backButton prop is false', () => {
    render(<Header backButton={false} />);

    expect(screen.getByText('SEVN NEWS')).toBeInTheDocument();

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should render with back button when backButton prop is true', () => {
    render(<Header backButton={true} />);

    expect(screen.getByText('SEVN NEWS')).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
