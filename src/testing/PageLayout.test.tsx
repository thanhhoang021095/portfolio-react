import React from "react";
import { render, screen } from "@testing-library/react";
import { PageLayout } from "../PageLayout";

describe("PageLayout", () => {
  test("renders Header, MainContent, Footer, and ScrollTopButton components", () => {
    render(<PageLayout />);
    const header = screen.getByTestId("header") as HTMLElement;
    const mainContent = screen.getByTestId("main-content") as HTMLElement;
    const footer = screen.getByTestId("footer") as HTMLElement;
    const scrollTopButton = screen.getByTestId(
      "scroll-top-button"
    ) as HTMLElement;

    expect(header).toBeInTheDocument();
    expect(mainContent).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(scrollTopButton).toBeInTheDocument();
  });
});
