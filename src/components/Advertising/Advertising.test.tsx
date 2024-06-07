import { render, screen } from '@testing-library/react';
import { Advertising } from './';

describe('Advertising', () => {
  it('should render correctly', () => {
    render(<Advertising />);

    expect(screen.getByText('Publicidade')).toBeInTheDocument();

    const container = screen.getByTestId('advertising-container');
    expect(container).toHaveClass('container');
  });
});
