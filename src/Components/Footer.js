import "../Styles/footer.css";
import BottomLeftMenu from "./BottomLeftMenu";
import BottomRightMenu from "./BottomRightMenu";
import Location from "./Location";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <Location />
        <div className="bottom">
          <BottomLeftMenu />
          <FooterText />
          <BottomRightMenu />
        </div>
      </div>
    </>
  );
};

export default Footer;
