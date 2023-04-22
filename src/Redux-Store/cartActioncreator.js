import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSilce";

export const fetchcartData=(cart)=>{
    return async(dispatch)=>{
        const fetchData=async ()=>{
            const response =await fetch( `https://react-shoppingapp-2c052-default-rtdb.firebaseio.com/cart.json`,)
            if(!response.ok){
                throw new Error('could not fetch data')
            }
            const data= await response.json();
            return data;
        };
        try{
            const cartData=await fetchData();
            dispatch(cartActions.replaceCart({
                items:cartData.items || [],
                totalQuantity:cartData.totalQuantity
            }))
        }catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'fetching cart data failed'
              }))
        }
    }
}

export const sendCartdata = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
      const sendRequest = async () => {
          const response = await fetch(
              `https://react-shoppingapp-2c052-default-rtdb.firebaseio.com/cart.json`,
              {
                method: "PUT", //PUT request because we want to update the cart so just like editing expense
                body: JSON.stringify({ items:cart.items,totalQuantity:cart.totalQuantity }),
              }
            );
            if (!response.ok) {
              throw new Error("sending cart data failed");
            }
      };
      try{
          await sendRequest()
          dispatch(
              uiActions.showNotification({
                status: "success",
                title: "success...",
                message: "send cart data successfully",
              })
            );
      }catch (error) {
          dispatch(uiActions.showNotification({
              status:'error',
              title:'Error!',
              message:'sending cart data failed'
            }))
      }
    };
  };