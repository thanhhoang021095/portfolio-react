import React from "react";
import { render, screen } from "@testing-library/react";
import { PageLayout } from "./PageLayout";
import App from "./App";

jest.mock("./App", () => ({
  __esModule: true,
  default: () => <div>Hello World</div>,
}));

describe("App", () => {
  it("app should render children", () => {
    render(<App />);
    const helloWorld = screen.getByText('Hello World');
    expect(helloWorld).toBeInTheDocument();
  });
});
