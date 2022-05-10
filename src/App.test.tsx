import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render hello world button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Click!/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
