import { render, screen } from "@testing-library/react";
import Note from "./Note";

describe("notes", () => {
  test("test props of notes component working well", () => {
    render(<Note content="myNote" />);
    const noteContent = screen.getByTestId("note-content");
    expect(noteContent.textContent).toBe("myNote");
  });

});
