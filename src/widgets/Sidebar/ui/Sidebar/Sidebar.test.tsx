import { render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";

describe("Button", () => {
  test("test render", () => {
    render(<Sidebar>TEST</Sidebar>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
})