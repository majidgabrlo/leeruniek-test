import { render, screen } from "@testing-library/react";
import Plans from "./Plan";

describe("Plans", () => {
  test("test props of Plans component working well", () => {
    render(<Plans name="plan-2" author="Jane doe" />);
    const planName = screen.getByTestId("plan-name");
    const planAuthor = screen.getByTestId("plan-author");
    
    expect(planAuthor.textContent).toBe("Author:Jane doe");
    expect(planName.textContent).toBe("Name:plan-2")
  });
});
