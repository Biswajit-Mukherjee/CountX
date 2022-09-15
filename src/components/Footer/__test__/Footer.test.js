import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

// Header Component Test Suite
describe("Footer component", () => {
  test("renders copyright text on screen", () => {
    // Arrange
    render(<Footer />);

    // Act

    // Assert
    const copyrightElement = screen.getByText(/All rights reserved. Biswajit Mukherjee/i);
    expect(copyrightElement).toBeInTheDocument();
  });
});
