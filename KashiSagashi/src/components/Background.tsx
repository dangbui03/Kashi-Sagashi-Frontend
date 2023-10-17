import React from "react";

type note = {
  character: string;
  number: number;
};

const changeBackground = (notes: note[]) => {
  const name = "KASHISAGASHI";
  for (let i = 0; i < 12; i++) {
    const note: note = {
      character: name[i],
      number: Math.floor(Math.random() * 12) + 1,
    };
    notes.push(note);
  }
};

const Background = () => {
  let notes: note[] = [];
  changeBackground(notes);
  return (
    <div>
      {notes.map((note) => {
        return (
          <div>
            <p>{note.character}</p>
            {note.number > 0 ? <div className="note"></div> : <div></div>}
            {note.number > 1 ? <div className="note"></div> : <div></div>}
            {note.number > 2 ? <div className="note"></div> : <div></div>}
            {note.number > 3 ? <div className="note"></div> : <div></div>}
            {note.number > 4 ? <div className="note"></div> : <div></div>}
            {note.number > 5 ? <div className="note"></div> : <div></div>}
            {note.number > 6 ? <div className="note"></div> : <div></div>}
            {note.number > 7 ? <div className="note"></div> : <div></div>}
            {note.number > 8 ? <div className="note"></div> : <div></div>}
            {note.number > 9 ? <div className="note"></div> : <div></div>}
            {note.number > 10 ? <div className="note"></div> : <div></div>}
            {note.number > 11 ? <div className="note"></div> : <div></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Background;
