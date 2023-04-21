import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiActions } from './Redux-Store/uiSilce';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';

let initial=true;
function App() {
  const showCart=useSelector(state=>state.UI.cartIsVisible)
  const cart=useSelector(state=>state.cart)
  const notification=useSelector(state=>state.UI.notification)
  const dispatch=useDispatch()
  useEffect(()=>{
    const sendCartdata=async()=>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'sending...',
        message:'sending cart data'
      }))
      const response=await fetch(`https://react-shoppingapp-2c052-default-rtdb.firebaseio.com/cart.json`,
    {
      method:'PUT', //PUT request because we want to update the cart so just like editing expense
      body:JSON.stringify({cart}),
    })
    if(!response.ok){
      throw new Error('sending cart data failed')
    }
    dispatch(uiActions.showNotification({
      status:'success',
      title:'success...',
      message:'send cart data successfully'
    }))
    }
    
    if(initial){
      initial=false;
      return;
    }

    sendCartdata().catch(error=>{
      dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!',
        message:'sending cart data failed'
      }))
    })
  },[cart,dispatch])
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
