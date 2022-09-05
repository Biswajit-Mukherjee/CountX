import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component on screen", () => {
  // Arrange
  render(<App />);

  // Act

  // Assert
  const appElement = screen.getByTestId("App");
  expect(appElement).toBeInTheDocument();
});
