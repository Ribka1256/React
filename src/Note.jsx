import React, { useEffect, useState } from "react";
function Note() {
  const [note, setNote] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleChange(event) {
    setNewNote(event.target.value);
  }
  function save() {
    if (!newNote.trim()) return;

    if (editingId !== null) {
      // UPDATE EXISTING NOTE
      setNote(note.map((n, i) => (i === editingId ? newNote : n)));

      setEditingId(null);
    } else {
      // ADD NEW NOTE
      setNote((n) => [...n, newNote]);
    }

    setNewNote("");
  }
  function del(index) {
    const notes = note.filter((_, i) => i !== index);
    setNote(notes);
  }

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  function downloadJSON() {
    const jsonString = JSON.stringify(note, null, 2); // pretty format

    const blob = new Blob([jsonString], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "My Notes.json"; // file name
    link.click();

    URL.revokeObjectURL(url);
  }

  function edit(index) {
    setEditingId(index);
    setNewNote(note[index]);
  }
  return (
    <>
      <div>
        <h1>Note Recorder</h1>

        <div>
          <textarea
            id="text"
            placeholder="Share your thoughts..."
            rows="15"
            cols="50"
            value={newNote}
            onChange={handleChange}
          ></textarea>
          <button onClick={save}>Save</button>
          <br />
          <button onClick={() => downloadJSON()}>Download</button>
        </div>
        <ol>
          {note.map((note, index) => (
            <li key={index}>
              {note}

              <button onClick={() => del(index)}>Delete</button>

              <button onClick={() => edit(index)}>Edit</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default Note;
