import React, { useContext } from 'react';
import styles from "./ProductDetails.module.css";
import productImage from "../../assets/image.png";
import { CartContext } from '../../Context/CartContext';

export default function ProductDetails() {
let {addToCart} =useContext(CartContext);
async function addProductToCart(productId){
   
  let response = await addToCart(productId);
  console.log(response);
}




  return (
    <div className={styles.productDetails}>
      
      <div className={styles.productImageSection}>
        <img src={productImage} alt="Product" className={styles.productImage} />
      </div>


      <div className={styles.productInfoSection}>
        <h2 className={styles.productTitle}>شنطة من المكرمية - جملي - 20*25 سم</h2>
        <div className={styles.rating}>
          ⭐⭐⭐⭐⭐
        </div>
        <div className={styles.price}>280.00$</div>

       
        <div className={styles.quantitySection}>
  <button onClick={()=>{addProductToCart(ProductDetails._id)}} className={styles.addToCart}>أضف إلى السلة</button>
  <input 
    type="number" 
    defaultValue={1} 
    min="0" 
    className={styles.quantityInput} 
    onChange={(e) => {
      if (e.target.value < 0) {
        e.target.value = 0; 
      }
    }} 
  />
</div>


        <button className={styles.buyNow}>اشتري الآن</button>

        <div className={styles.extraInfo}>
          <p><strong>بلد المنشأ:</strong> مصر</p>
          <p><strong>الفئة:</strong> المكرمية</p>
        </div>
      </div>
    </div>
  );
}
