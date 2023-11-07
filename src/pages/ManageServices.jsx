import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import ManageServiceBanner from '../components/common/ManageServiceBanner';
import ManageServiceSection from '../components/common/ManageServiceSection';
import { AuthContexts } from '../context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';

function ManageServices() {
    const {cartProduct} = AuthContexts();
  return (
    <div className='container mx-auto grid grid-cols-1 2xl:grid-cols-2'>
    <ToastContainer />
        
        <ManageServiceBanner />
        <ManageServiceSection />
    </div>
  )
}

export default ManageServices