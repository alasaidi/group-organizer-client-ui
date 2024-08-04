import { UseGroupOrganizer } from "../../context/GroupOrganizerContext";
import "./footer.css";
export const Footer = () => {
  const { isFontSizeLarge, setFontSize } = UseGroupOrganizer();

  return (
    <div className={isFontSizeLarge ? "footerSmall" : "footerLarge"}>
      {" "}
      footer footer footer
      <button type="button" onClick={setFontSize}>
        set font size
      </button>
    </div>
  );
};
