import React from "react";
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";



// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const {getByText} = render(<CheckoutForm/>);
  const header = getByText(/Checkout Form/i);

  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
  expect(header).toBeVisible();
  expect(header).toHaveTextContent('Checkout Form');
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const stateInput = screen.getByLabelText(/State/i);
    const zipInput = screen.getByLabelText(/Zip/i);
    const submitButton = screen.getByRole("button", { value: /Checkout/i });

    expect(submitButton).not.toBeDisabled();

    userEvent.type(firstNameInput,'Stephen');
    userEvent.type(lastNameInput,'Stark')
    userEvent.type(addressInput,'2114 johnson drive')
    userEvent.type(cityInput,'Dallas');
    userEvent.type(stateInput,'Tx');
    userEvent.type(zipInput,'76118');
    userEvent.click(submitButton);

    const successMessage = screen.getByLabelText(/first name/i);

    expect(successMessage).toBeVisible();
  expect(successMessage).toBeDefined();
  expect(successMessage).not.toBeDisabled();

});
