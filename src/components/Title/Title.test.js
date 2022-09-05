import { render, screen } from "@testing-library/react";
import Title from "./Title";

// Title Component Test Suite
describe("Title component", () => {
  test("renders 'React Counter App' title on screen", () => {
    // Arrange
    render(<Title />);

    // Act

    // Assert
    const titleElement = screen.getByText(/React Counter App/);
    expect(titleElement).toBeInTheDocument();
  });
});
