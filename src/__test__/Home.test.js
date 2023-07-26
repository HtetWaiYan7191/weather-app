import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";
import { render } from "@testing-library/react";

describe('Home component', () => {
    test('Home component renders correctly', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
