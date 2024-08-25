
import { useGlobleContext } from "../Contect";

const User = () => {
 
  const {user , signout } = useGlobleContext();

  return (
    <div>
        {user ?(
          <>
            <h3>user : {user?.name}</h3>
            <button onClick={signout}>Sign Out</button>
          </>
        ) : (
          <span>Sign In</span>
        )
        }
    </div>
  );
};

export default User