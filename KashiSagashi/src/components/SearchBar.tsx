import { useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Success");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type to search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <button>Submit</button>
    </section>
  );
};
