import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

// Check all items render correctly

test('renders first footer paragraph - All the activities... ', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(`All the activities listed here are supplied by Bored API.`)).toBeInTheDocument()
  });

test('renders second footer paragraph - You can learn more...', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(`You can learn more at:`)).toBeInTheDocument()
});  

test('renders link to API documentation', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/boredapi/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders footer copyright statement', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(`Copyright © Katherine Rock 2023`)).toBeInTheDocument()
});  

// Check link to API documention is correct 

test('Link to API documentation goes to the correct site', () => {
    const { getByText } = render(<Footer />);
    expect(document.querySelector("a").getAttribute("href")).toBe('https://www.boredapi.com/documentation')
})
