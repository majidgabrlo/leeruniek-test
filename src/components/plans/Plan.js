import React from "react";
import Category from "../categories/Category";
import defaultData from "../../defaultData";

function Plans({ name, author }) {
  const { CATEGORIES } = defaultData;
  const mainCategories = CATEGORIES.filter(
    (category) => !category.parentNoteCategoryId
  );

  mainCategories.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

    

  return (
    <div className="ml-5">
      <div data-testid="plan-name">Name:{name}</div>
      <div data-testid="plan-author">Author:{author}</div>
      <div className="ml-16 mt-4">
        {mainCategories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            isArchived={category.isArchived}
            id={category.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Plans;
