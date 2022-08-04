import React from "react";

const UserContext = React.createContext({
  lang: null,
  setLang: () => {}
});

export default UserContext;