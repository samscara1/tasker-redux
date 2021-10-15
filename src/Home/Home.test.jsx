import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from '../utils/renderWithRouter'

describe('Home component', ()=> {
    const mockingTasks = []
    test('links should not render at first render', ()=> {
        render(
                <Home tasks={mockingTasks} />
        )

        expect(screen.queryByRole('link', {name: /task/i})).not.toBeInTheDocument()
        expect(screen.queryByRole('link', {name: /list/i})).not.toBeInTheDocument()
    })
    test('Today component should render', ()=> {
        render(
            <Home tasks={mockingTasks}/>
        )

        expect(screen.getByRole('heading', {name: /today/i})).toBeInTheDocument()
    })
    test('TaskLists component should render', ()=> {
        render(
            <Home tasks={mockingTasks}/>
        )

        expect(screen.getByRole('heading', {name: /lists/i})).toBeInTheDocument()
    })
    test('links should render after pressing menu button', ()=> {
        renderWithRouter(<Home tasks={mockingTasks} />)
        
        userEvent.click(screen.getByRole('button'))

        expect(screen.queryByRole('link', {name: /task/i})).toBeInTheDocument()
        expect(screen.queryByRole('link', {name: /list/i})).toBeInTheDocument()
    })
})