
import { createContext , useState , useContext } from "react";

const GlobleContext = createContext();
export const useGlobleContext = () => useContext(GlobleContext);

const Contect = ({children}) => {
 
    const [user , setUser ] = useState({name: "Phol"});
    function signOut(){
        setUser(null);
    }

  return(
    <GlobleContext.Provider value={{user , signOut}}>
            {children}
    </GlobleContext.Provider>
  )
}

export default Contect