import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from './auth/authSlices';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        user,
    };
};