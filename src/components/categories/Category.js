import React from "react";
import Note from "../notes/Note";
import data from "../../defaultData";

function Categories({ name, id, isArchived }) {
  const subCategories = data.CATEGORIES.filter(
    (category) => category.parentNoteCategoryId === id
  );

  const notes = data.NOTES.filter((note) => note.categoryId === id);

  notes.sort((a, b) =>
    a.dateCreated > b.dateCreated ? 1 : b.dateCreated > a.dateCreated ? -1 : 0
  );

  subCategories.sort((a, b) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  if (isArchived) {
    return null;
  }

  return (
    <div className="bg-blue-300 p-1 px-2 rounded mb-2">
      <div data-testid="category-name">Category: {name}</div>
      <div className="ml-16 mt-4">
        {subCategories.map((item) => (
          <Categories
            isArchived={item.isArchived}
            key={item.id}
            name={item.name}
            id={item.id}
          />
        ))}
        <div>
          {notes.map((note) => (
            <Note key={note.id} content={note.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
