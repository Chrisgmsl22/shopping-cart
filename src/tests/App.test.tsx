import { render, screen } from "@testing-library/react";
import Root from "../Root";

describe("Root application", () => {
  test("renders home page", () => {
    render(<Root />);
    const linkElement = screen.getByText(/Welcome to Shoppy/i);
    expect(linkElement).toBeInTheDocument();
  });
});
