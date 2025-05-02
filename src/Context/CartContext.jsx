import axios from "axios";
import { createContext } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext();

export default function CartContextProvider(props){
    let headers ={
        token : localStorage.getItem("userToken")
       } 
    async function addToCart(productId){
     
      return await axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,{
        productId
     }, {
       headers, 
     }).then((response)=>{
        console.log(response);
  toast.success(response.data.message)
        return response

     }).catch((err)=>{
        console.log(err);

        toast.error(response.data.message)
        return err

     })
    }


    return <CartContext.Provider value={{addToCart}}>
       {props.children} 
    </CartContext.Provider>
}