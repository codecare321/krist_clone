import { createContext, useContext } from "react";
import { PropTypes } from "prop-types";
const TextContext = createContext({});

import textData from "../../texts.json";

export const TextProvider = ({ children }) => {
  return (
    <TextContext.Provider value={textData}>{children}</TextContext.Provider>
  );
};

export const useText = () => useContext(TextContext);

TextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
