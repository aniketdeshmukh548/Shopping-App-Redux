import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';
import { fetchcartData, sendCartdata } from './Redux-Store/cartActioncreator';

let initial=true;
function App() {
  const showCart=useSelector(state=>state.UI.cartIsVisible)
  const cart=useSelector(state=>state.cart)
  const notification=useSelector(state=>state.UI.notification)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchcartData())
  },[dispatch])
  useEffect(()=>{
   if(initial){
    initial=false
    return;
   }
   if(cart.changed){
    dispatch(sendCartdata(cart))
   }
   
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
