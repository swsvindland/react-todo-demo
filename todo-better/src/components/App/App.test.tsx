import { render, screen } from '@testing-library/react';

import App from './App';

test('correct text is used in the title', () => {
    render(<App />);
    const title = screen.getByTestId('title');
    expect(title.textContent).toBe('Todo');
});
