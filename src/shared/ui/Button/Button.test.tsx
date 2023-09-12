import { Button, ThemeButton } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("test clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass('clear');
  });
});



