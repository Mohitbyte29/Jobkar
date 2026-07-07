import axios from 'axios';
import React, { useEffect } from 'react'

const AuthSuccess = () => {
  
  useEffect(() => {
    const handleAuth = async() => {

      const params = new URLSearchParams();
      const token = params.get('token');
      const accessToken = token ? token : null;
      if (accessToken) {
        localStorage.setItem('token', accessToken);
        try{
          const res = await axios.get('http://localhost:4000/api/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          });
          if(res.data.success){

          }
        } catch (error) {
          console.error('Error storing token in localStorage:', error);
        }
      } else {
        console.error('No token found in URL parameters.');
      }
    }
  })
  return (
    <div>
      
    </div>
  )
}

export default AuthSuccess
