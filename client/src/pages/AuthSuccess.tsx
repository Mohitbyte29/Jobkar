import { useUser } from '@/context/UserContext';
import axios from 'axios';
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const userContext = useUser();
  const setUser = userContext?.setUser;
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const accessToken = token ? token : null;
      console.log("Token: ", accessToken)
      if (accessToken) {
        localStorage.setItem('token', accessToken);
        try {
          const res = await axios.get('/api/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log(res.data);
          if (res.data.success) {
            console.log("Navigating")
            setUser(res.data.user); // save user in context
            navigate('/first');
          }
        } catch (error) {
          console.log(error)
          localStorage.removeItem('token');
          if (setUser) setUser(null);
        }
      } else {
        console.error('No token found in URL parameters.');
      }
    };

    handleAuth();
  }, [navigate, setUser]);

  return (
    <div>
      Logging in... Please wait.
    </div>
  );
};

export default AuthSuccess
