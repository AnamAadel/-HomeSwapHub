import React from 'react';
import { Outlet } from 'react-router-dom';
// import { AuthContexts } from './components/context/AuthContext';
import { AuthContexts } from './context/AuthContext';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function Root() {
  const {loading} = AuthContexts();
  return (
    <>
            {!loading && 
              <>
                <Navbar />
                <Outlet />
                <Footer />
              </>
            }

            


            {loading &&  <div className='min-h-screen w-full fixed z-50 flex justify-center items-center'><img src='https://cdn.dribbble.com/users/189524/screenshots/2822794/media/f8bf85033e0e686a05fae731f7eef514.gif' /></div> }
    </>
  )
}

export default Root
