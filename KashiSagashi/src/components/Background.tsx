import React from "react";

export type note = {
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
      <div className="flex absolute bottom-0 w-screen place-content-between -z-50">
        {notes.map((note) => {
          return (
            <div className="flex flex-col-reverse gap-2">
              <p
                className={
                  "text-center note_font " +
                  (note.number <= 3
                    ? "c_note1-3"
                    : note.number <= 6
                    ? "c_note4-6"
                    : note.number <= 9
                    ? "c_note7-9"
                    : note.number <= 12
                    ? "c_note10-12"
                    : "")
                }
              >
                {note.character}
              </p>
              {note.number > 0 ? (
                <div className="note note1-3 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 1 ? (
                <div className="note note1-3 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 2 ? (
                <div className="note note1-3 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 3 ? (
                <div className="note note4-6 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 4 ? (
                <div className="note note4-6 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 5 ? (
                <div className="note note4-6 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 6 ? (
                <div className="note note7-9 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 7 ? (
                <div className="note note7-9 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 8 ? (
                <div className="note note7-9 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 9 ? (
                <div className="note note10-12 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 10 ? (
                <div className="note note10-12 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
              {note.number > 11 ? (
                <div className="note note10-12 rounded-2xl"></div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="h-screen w-screen animate-gradient absolute top-0 z-0"
        id="grad"
      ></div>
    </div>
  );
};

export default Background;
