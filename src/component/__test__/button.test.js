import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/button';
import { isTSAnyKeyword} from '@babel/types';

import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import renderer from "react-test-renderer"

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
    ReactDOM.unmountComponentAtNode(div);
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="ok"/>)
    expect(getByTestId('button')).toHaveTextContent("ok")
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="ok1"/>)
    expect(getByTestId('button')).toHaveTextContent("ok1")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})