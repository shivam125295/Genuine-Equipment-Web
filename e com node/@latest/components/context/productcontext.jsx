import {  createContext, useContext } from "react";
 
const AppContext = createContext();

const AppProvider =({Children})=>{
  return(
    <AppContext.Provider value={{ myName:"hello world"}}>
      {Children}
  </AppContext.Provider>
);
};

const useProductContext=()=>{
  return useContext(AppContext)
}

export{AppProvider,AppContext,useProductContext};