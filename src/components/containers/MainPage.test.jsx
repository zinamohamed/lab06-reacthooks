import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import  MainPage  from './MainPage';

describe('Testing MainPage Container', () => { 
  it('should render a list of Hey Arnold characters on screen', async () => { 
    render(<MemoryRouter> <MainPage/> </MemoryRouter>);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});