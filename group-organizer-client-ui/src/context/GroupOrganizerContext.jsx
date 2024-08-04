import { createContext, useContext, useState } from "react";

const GroupOrganizerContext = createContext();
export const ContextProvider = ({ children }) => {
  const [isFontSizeLarge, setIsFontSizeLarge] = useState(false);

  const setFontSize = () => {
    setIsFontSizeLarge(!isFontSizeLarge);
  };
  return <GroupOrganizerContext.Provider value={{ isFontSizeLarge, setFontSize }}>{children}</GroupOrganizerContext.Provider>;
};
export const UseGroupOrganizer = () => useContext(GroupOrganizerContext);
