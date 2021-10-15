import React from "react";
import { render, screen } from "@testing-library/react";
import { NewTask } from "./NewTask";
import { renderWithRouter } from '../utils/renderWithRouter'
import userEvent from "@testing-library/user-event";

describe('NewTask component', ()=> {
    const addNewTask = jest.fn()
    test('text area should render', ()=> {
        renderWithRouter(<NewTask />)
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
    test('buttons should render', ()=> {
        renderWithRouter(<NewTask />)

        expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /done/i})).toBeInTheDocument()
    })
    test('testing done button with empty text area', ()=> {
        renderWithRouter(<NewTask addNewTask={addNewTask} />)

        userEvent.click(screen.getByRole('button', {name: /done/i}))

        expect(addNewTask).not.toHaveBeenCalled()
    })
    test('testing done button with filled text area', ()=> {
        renderWithRouter(<NewTask addNewTask={addNewTask} />)

        userEvent.type(screen.getByRole('textbox'), "Hello world")
        userEvent.click(screen.getByRole('button', {name: /done/i}))

        expect(addNewTask).toHaveBeenCalled()
    })
    
})