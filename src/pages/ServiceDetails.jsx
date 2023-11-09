
// import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
// import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { AuthContexts } from "../context/AuthContext";
import { useState } from "react";
import Modal from "../components/common/Modal";
import ProviderService from "../components/singlePage/ProverderService";
import ServiceDetailSection from "../components/singlePage/ServiceDetailSection";
import SinglePageHero from "../components/singlePage/SinglePageHero";


function ServiceDetails() {
    // const [relatedProduct, setRelatedProduct] = useState([]); 
    // const [showSemple, setShowSemple] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const loaderData = useLoaderData();

    
  return (
    <>
      {loaderData && 
        <>
        <ServiceDetailSection detail={loaderData} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        <SinglePageHero provider={loaderData.serviceProvider} />
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} detail={loaderData} />

        <ProviderService services={loaderData} />

        </>
    }
    </>
  )
}




export default ServiceDetails