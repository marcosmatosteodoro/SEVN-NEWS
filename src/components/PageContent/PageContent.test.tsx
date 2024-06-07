import { render, screen } from '@testing-library/react';
import { PageContent } from './';

describe('PageContent', () => {
  it('should render children and header without back button by default', () => {
    render(
      <PageContent>
        <div data-testid="test-child">Test Child</div>
      </PageContent>,
    );

    const testChild = screen.getByTestId('test-child');
    expect(testChild).toBeInTheDocument();

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(screen.queryByTestId('back-button')).not.toBeInTheDocument();
  });

  it('should render children and header with back button when backButton prop is true', () => {
    render(
      <PageContent backButton={true}>
        <div data-testid="test-child">Test Child</div>
      </PageContent>,
    );

    const testChild = screen.getByTestId('test-child');
    expect(testChild).toBeInTheDocument();

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(screen.getByTestId('back-button')).toBeInTheDocument();
  });
});
