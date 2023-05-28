import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  return (
    user ? <Outlet /> : <Navigate to='/login' />

  )
}

export default PrivateRoutes
