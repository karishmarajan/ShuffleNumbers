import React from 'react';
import ReactDom from 'react-dom';
import { render, waitFor, getAllByTestId, screen, cleanup, fireEvent } from '@testing-library/react';
import ShuffleFunction from '../pages/ShuffleFunction';

afterEach(cleanup);
it("Renders array correctly", async() =>{
    render(<ShuffleFunction/>)
    const numbers_arr =await waitFor(()=>  screen.findAllByTestId("arr-test"));
    expect(numbers_arr).toHaveLength(9);
});

it("Array sorted success", async() =>{
    render(<ShuffleFunction/>)
    const numbers_arr =await waitFor(()=>  screen.findAllByTestId("arr-test"));
    const shuffle_btn = screen.getByTestId("shuffle-test");
    const sort_btn = screen.getByTestId("shuffle-test");
    fireEvent.click(shuffle_btn);
    fireEvent.click(sort_btn);
    expect(numbers_arr).toStrictEqual(numbers_arr.sort());

})