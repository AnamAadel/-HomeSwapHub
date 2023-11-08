
// import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
// import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { AuthContexts } from "../context/AuthContext";
import { useState } from "react";
import Modal from "../components/common/Modal";
import ServiceDetailSection from "../components/singlePage/ServiceDetailSection";
import SinglePageHero from "../components/singlePage/SinglePageHero";


function ServiceDetails() {
    // const [relatedProduct, setRelatedProduct] = useState([]); 
    // const [showSemple, setShowSemple] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const loaderData = useLoaderData();
    // const {mongoCurrentUser, setCartProduct, cartProduct} = AuthContexts();
    console.log(loaderData)
    
    // const [qty, setQty] = useState(1);

    const handleAddToCart = async ()=> {
        console.log("click")
        const userProduct = { ...loaderData, qty: qty}
        try {
            const res = await fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/users/update/${mongoCurrentUser._id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(userProduct)
            });
            const jsonData = await res.json();
            // setMongoCurrentUser(jsonData);
            console.log(jsonData)
            if(jsonData.modifiedCount > 0 || jsonData.acknowledged){
                if(mongoCurrentUser.products){
                    mongoCurrentUser.products.forEach((product)=> {
                        if(product._id === loaderData._id){
                            product.qty = qty;
                        }
                    })
    
                    const productIndex = cartProduct?.findIndex((item)=> item._id === userProduct._id);

                    console.log(productIndex)
                    if(productIndex >= 0){
                        const newProduct = [...cartProduct];
                        newProduct.splice(productIndex, 1, userProduct)
                        setCartProduct(newProduct)
                        console.log("updated")
                          toast.success("Product updated to the cart successfully!", {
                              theme: "colored",
                              toastId: "success"
                            });
                        }else{
                        setCartProduct([...cartProduct, userProduct])
                        toast.success("Product added to the cart successfully!", {
                            theme: "colored",
                            toastId: "success"
                          });
                          console.log("added")
                    }
                    
                    

                }else{
                    setCartProduct([userProduct])
                    toast.success("Product added to the cart successfully!", {
                        theme: "colored",
                        toastId: "success"
                      });
                }
                        
            }

          } catch (error) {
            console.log(error)

            toast.warn(`An error happened`, {
                theme: "colored"
              });
          }
    }

     const incrementAndDecrement = (val)=>{
        if(val == "increament"){
            setQty(qty + 1)
        }
        if(val == "decreament"){
            qty > 1 && setQty(qty - 1)
        }
    }

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/products/type/${loaderData.type}`);
    //             const data = await res.json();
    //             console.log(data)
    //             setRelatedProduct(data);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()

    //     const userCurrentProduct = mongoCurrentUser?.products?.find(item => item._id === loaderData._id);
    //     console.log(userCurrentProduct)
    // if(userCurrentProduct){
    //     setQty(userCurrentProduct?.qty)
        
    // }else{
    //     setQty(1)

    // }
    // }, [loaderData,mongoCurrentUser])

    console.log(isOpenModal)
    
  return (
    <>
      {loaderData && 
        <>
        <ServiceDetailSection detail={loaderData} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        <SinglePageHero provider={loaderData.serviceProvider} />
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} detail={loaderData} />

        </>
    }
    </>
  )
}




export default ServiceDetails