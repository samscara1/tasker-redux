import React from 'react'
import { render, screen } from '@testing-library/react'
import { TodayItem } from './TodayItem'
import userEvent from '@testing-library/user-event'

describe ('testing TodayItem component', () => {
    const mockId = 1
    const mockTitle = 'test'

    test ('should render UI correctly at first render', () => {
        render(<TodayItem key={mockId} id={mockId} title={mockTitle} />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
    
    test('testing checkbox performance', ()=> {
        render(<TodayItem key={mockId} id={mockId} title={mockTitle} />)

        expect(screen.getByRole('checkbox').checked).toEqual(false)
        userEvent.click(screen.getByRole('checkbox'))
        expect(screen.getByRole('checkbox').checked).toEqual(true)
    })
})