import React from "react";
import { render, screen } from "@testing-library/react";
import { MenuBtn } from "./MenuBtn";

describe('MenuBtn component', ()=> {
    test('button should render at first render', ()=> {
        render(
            <MenuBtn/>
        );
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})