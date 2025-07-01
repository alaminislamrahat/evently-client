
import { useContext } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation();

    if(loading) return <progress className="progress w-56"></progress>
    if(user) return children
    

    return <Navigate to="/login" state={location.pathname} replace={true} />
};

export default PrivateRoute;