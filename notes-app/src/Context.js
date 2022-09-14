import React from "react";

export const contextname = React.createContext();

const Context = (props) => {
  const [allnotes, setNotes] = React.useState([]);
  const [ref, setRef] = React.useState([]);

  return (
    <contextname.Provider
      value={{
        allnotes: allnotes,
        setNotes: setNotes,
        ref: ref,
        setRef: setRef,
      }}
    >
      {props.children}
    </contextname.Provider>
  );
};

export default Context;
