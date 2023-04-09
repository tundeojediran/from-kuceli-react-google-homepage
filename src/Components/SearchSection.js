import "../Styles/searchSection.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Buttons from "./Buttons";
import LanguageLink from "./LanguageLink";

const SearchSection = () => {
  return (
    <>
      <div className="searchSectionContainer">
        <Logo />
        <SearchBar />
        <div className="buttonContainer">
          <Buttons text={"Google Search"} />
          <Buttons text={"I'm Feeling Lucky"} />
        </div>
        <p style={{ fontSize: "12px", marginTop: "25px" }}>
          Google offered in: <LanguageLink title={"Hausa"} />{" "}
          <LanguageLink title={"Igbo"} />
          <LanguageLink title={"Èdè Yorùbá"} />
          <LanguageLink title={"Nigerian Pidgin"} />
        </p>
      </div>
    </>
  );
};

export default SearchSection;
