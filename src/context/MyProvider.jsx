import React, { useMemo, useState } from 'react';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const [choice, setChoice] = useState();
  const [showVotes, setShowVotes] = useState(false);
  const [userContext, setUserContext] = useState();
  const [dataNewTeam, setDataNewTeam] = useState({})  
  const contextValue = useMemo(() => ({
    choice,
    setChoice,
    showVotes,
    setShowVotes,
    userContext,
    setUserContext,
    dataNewTeam,
    setDataNewTeam,
  }), [choice, showVotes, userContext, dataNewTeam]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  )
}