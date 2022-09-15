import { render, screen } from "@testing-library/react";
import Header from "../Header";

const HEADER_TITLE = "CountX";

// Header Component Test Suite
describe("Header component", () => {
  test("renders logo image on screen", () => {
    // Arrange
    render(<Header />);

    // Act

    // Assert
    const logoElement = screen.getByRole("img");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders title on screen", () => {
    // Arrange
    render(<Header />);

    // Act

    // Assert
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders 'Counts' as title on screen", () => {
    // Arrange
    render(<Header />);

    // Act

    // Assert
    const titleElement = screen.getByRole("heading");
    expect(titleElement.textContent).toBe(HEADER_TITLE);
  });
});
