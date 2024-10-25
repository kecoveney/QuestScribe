import React, { createContext, useState } from 'react';

export const QuestScribeContext = createContext();

const QuestScribeState = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  
  return (
    <QuestScribeContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </QuestScribeContext.Provider>
  );
};

export default QuestScribeState;
