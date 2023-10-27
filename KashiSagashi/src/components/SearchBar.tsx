import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

export type SearchBarProps = {
  search: string;
};

export const SearchBar = (SearchBarProps: SearchBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["search"]);

  const [search, setSearch] = useState(cookies.search);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCookie("search", search, { path: "/" });
    navigate("/searchSong");
  };
  return (
    <CookiesProvider>
      <section className="search flex place-content-center items-center fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-32 z-20">
        {location.pathname === "/verifySong" ||
        location.pathname === "/searchSong" ? (
          <Link to="/" className="mr-5">
            <FontAwesomeIcon
              icon="left-long"
              size="2xl"
              className="rounded-full p-2"
              style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
            />
          </Link>
        ) : (
          <></>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex search_form rounded-2xl place-content-between gap-2 sm:w-40vw w-72"
        >
          <input
            type="text"
            placeholder="Type to search..."
            onChange={(e) => {
              setSearch(e.target.value);
              setCookie("search", e.target.value, { path: "/" });
            }}
            className="bg-transparent search_bar scroll-mt-9"
            value={cookies.search}
            id="search-bar"
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
    </CookiesProvider>
  );
};
