import React from 'react';
import BookForm from './BookForm';

function Modal({isOpenModal, setIsOpenModal, detail}) {

  const toggle = isOpenModal ? "flex" : "hidden";
  return (
<div className={`fixed left-0 top-0 h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-40 ${toggle} `} >
    <button className='text-white absolute top-10 right-24 text-3xl' onClick={()=> setIsOpenModal(false)}>X</button>
  <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
    <div className="w-full">
      <div className="m-8">
      <BookForm detail={detail} />
      
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal