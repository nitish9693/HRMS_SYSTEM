import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.auth);
  const handleLogout = () => dispatch(logout());
  return { user, loading, handleLogout };
};

export default useAuth;
