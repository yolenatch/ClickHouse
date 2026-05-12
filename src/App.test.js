// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ClickHouseDB title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ClickHouseDB/i);
    expect(titleElement).toBeInTheDocument();
});
