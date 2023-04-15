import "../Styles/searchSection.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Buttons from "./Buttons";
import LanguageLink from "./LanguageLink";


const languages = [
  {
    title: 'Hausa', link: "https://blog.bitsrc.io/how-to-trigger-animation-events-using-react-a6c3256b21c6"
  },
  {
    title: 'Igbo', link: "https://blog.bitsrc.io/how-to-trigger-animation-events-using-react-a6c3256b21c6"
  },
  {
    title: 'Èdè Yorùbá"', link: "https://blog.bitsrc.io/how-to-trigger-animation-events-using-react-a6c3256b21c6"
  },
  {
    title: 'Nigerian Pidgin', link: "https://blog.bitsrc.io/how-to-trigger-animation-events-using-react-a6c3256b21c6"
  },
]

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
        Google offered in: {languages.map((language, index) => {
            return (
              <LanguageLink title={language.title} link={language.link} />
            )
          })}
        </p>
      </div>
    </>
  );
};

export default SearchSection;
