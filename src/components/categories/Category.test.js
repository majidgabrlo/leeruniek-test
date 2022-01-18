import { render, screen } from "@testing-library/react";
import Category from "./Category";

describe("categories", () => {
  test("test props of Category component working well", () => {
    render(<Category name="Math" id={5} />);
    const categoryName = screen.getByTestId("category-name");
    expect(categoryName.textContent).toBe("Category: Math");
  });

  test("doesn't show the category if archived", () => {
    render(<Category name="Math" id={5} isArchived={true} />);
    const categoryName = screen.queryByTestId("category-name");
    expect(categoryName).not.toBeInTheDocument();
  });
});
