import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

// Counter Component Test Suite
describe("Counter component", () => {
  // Test counter value is rendered on screen
  test("renders counter value on screen", () => {
    // Arrange
    render(<Counter />);

    // Act

    // Assert
    const counterValueElement = screen.getByRole("paragraph");
    expect(counterValueElement).toBeInTheDocument();
  });

  //   Test initial counter value is 0
  test("renders initial counter value as 0 on screen", () => {
    // Arrange
    render(<Counter />);
    const initialCounterValue = 0;
    const initialCounterStringValue = initialCounterValue.toString();

    // Act

    // Assert
    const counterValueElement = screen.getByRole("paragraph");
    expect(counterValueElement.textContent).toEqual(initialCounterStringValue);
  });

  //   Test 'Decrement' button is rendered on screen
  test("renders Decrement button on screen", () => {
    // Arrange
    render(<Counter />);

    // Act

    // Assert
    const decrementButtonElement = screen.getByText("Decrement");
    expect(decrementButtonElement).toBeInTheDocument();
  });

  //   Test 'Reset' button is rendered on screen
  test("renders Reset button on screen", () => {
    // Arrange
    render(<Counter />);

    // Act

    // Assert
    const resetButtonElement = screen.getByText("Reset");
    expect(resetButtonElement).toBeInTheDocument();
  });

  //   Test 'Increment' button is rendered on screen
  test("renders Increment button on screen", () => {
    // Arrange
    render(<Counter />);

    // Act

    // Assert
    const incrementButtonElement = screen.getByText("Increment");
    expect(incrementButtonElement).toBeInTheDocument();
  });

  //   Test counter value is decremented on clicking 'Decrement' button
  test("decrements the counter by 1 if the 'Decrement' button is clicked", () => {
    // Arrange
    render(<Counter />);
    const counterValueElement = screen.getByRole("paragraph");
    const initialCounterValueElement = parseInt(
      counterValueElement.textContent
    );

    // Act
    const decrementButtonElement = screen.getByText("Decrement");
    userEvent.click(decrementButtonElement);

    // Assert
    const decrementedCounterValueElement = parseInt(
      counterValueElement.textContent
    );
    expect(decrementedCounterValueElement).toEqual(
      initialCounterValueElement - 1
    );
  });

  //   Test counter value is reset to 0 on clicking 'Reset' button
  test("Resets the counter to 0 if the 'Reset' button is clicked", () => {
    // Arrange
    render(<Counter />);
    const counterValueElement = screen.getByRole("paragraph");
    const counterValue = parseInt(counterValueElement.textContent);

    // Act
    const resetButtonElement = screen.getByText("Reset");
    userEvent.click(resetButtonElement);

    // Assert
    expect(counterValue).toEqual(0);
  });

  //   Test counter value is incremented on clicking 'Increment' button
  test("increments the counter by 1 if the 'Increment' button is clicked", () => {
    // Arrange
    render(<Counter />);
    const counterValueElement = screen.getByRole("paragraph");
    const initialCounterValueElement = parseInt(
      counterValueElement.textContent
    );

    // Act
    const incrementButtonElement = screen.getByText("Increment");
    userEvent.click(incrementButtonElement);

    // Assert
    const incrementedCounterValueElement = parseInt(
      counterValueElement.textContent
    );
    expect(incrementedCounterValueElement).toEqual(
      initialCounterValueElement + 1
    );
  });
});
