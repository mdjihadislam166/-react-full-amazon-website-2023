import { getStoredCart } from "../../utilities/fakedb";

export const ProductAndCart =  async() =>{
    // get products //
const ProductsData = await fetch('products.json');
const products = await ProductsData.json();
// get cart //
const Savedcart = getStoredCart();
const initialCart = [];


// console.log('savedcart',Savedcart)


for( const id in Savedcart){
  const AddedProduct = products.find(product => product.id === id);
//   console.log(id,AddedProduct)
  if(AddedProduct){
    const quantity = Savedcart[id];
    AddedProduct.quantity = quantity;
    initialCart.push(AddedProduct)
  }
}


return {products : products, initialCart : initialCart};
}