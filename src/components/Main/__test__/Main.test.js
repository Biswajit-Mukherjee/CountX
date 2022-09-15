import { render, screen } from "@testing-library/react";
import Main from "../Main";

// Header Component Test Suite
describe("Main component", () => {
  test("renders on screen", () => {
    // Arrange
    render(<Main />);

    // Act

    // Assert
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
