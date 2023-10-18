import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Success");
  };
  return (
    <section className="search flex place-content-center items-center -translate-y-10 view_font z-20">
      <form
        onSubmit={handleSubmit}
        className="flex search_form rounded-2xl place-content-between gap-2"
      >
        <input
          type="text"
          placeholder="Type to search..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent search_bar"
        />
        <button>
          <FontAwesomeIcon
            icon="magnifying-glass"
            size="2xl"
            style={{ color: "#b6fffa" }}
            className="self-end"
          />
        </button>
      </form>
    </section>
  );
};
