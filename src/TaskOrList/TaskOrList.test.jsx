import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskOrList } from "./TaskOrList";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history' 
import userEvent from "@testing-library/user-event";

describe("TaskOrList component", ()=> {
    test("links should render", ()=> {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <TaskOrList />
            </Router>
        )
        expect(screen.getByRole('link', {name: /task/i})).toBeInTheDocument()
        expect(screen.getByRole('link', {name: /list/i})).toBeInTheDocument()
    })
})