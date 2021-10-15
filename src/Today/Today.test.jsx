import React from 'react'
import { render, screen } from '@testing-library/react'
import { Today } from './Today'

describe ('Today component', () => {
    const mockTasks = []
    const headingName = "Today"

    test ('should render UI correctly at first render', () => {
        render(<Today tasks={mockTasks} />)

        expect(screen.getByRole('heading', {name: headingName, level: 2})).toBeInTheDocument()
        expect(screen.getByText(/No tasks today/i)).toBeInTheDocument()
    })
})