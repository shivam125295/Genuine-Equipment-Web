import { useState,useContext, createContext ,useEffect} from "react";

const Authcontext =createContext();


const  Authprovider =({children})=>{
    const [auth,setAuth]=useState({
         user:null,
         token:""

    });
    useEffect(()=>{
        const data=localStorage.getItem('auth');    
        if(data){
            const parsedata =JSON.parse(data);
            setAuth({

                ...auth,
                user:parsedata.user,
                token:parsedata.token,
            });

        }
        // eslint-disable-next-line
    },[]);
    return(
        <Authcontext.Provider value={[auth,setAuth]}>
           {children}
        </Authcontext.Provider>
    );
    
};

const useAuth = ()=>useContext(Authcontext);

export {useAuth,Authprovider};