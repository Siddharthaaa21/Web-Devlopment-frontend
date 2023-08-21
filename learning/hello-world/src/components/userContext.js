import React from "react";
const userContext =React.createContext('deafaul value')
// const userContext = React.createContext()
 const UserProvider = userContext.Provider
 const UserConsumer = userContext.Consumer
 export  { UserProvider, UserConsumer}


 //step one
 //can set a deafault value  by 
  //const userContext =React.createContext('deafaul value')

