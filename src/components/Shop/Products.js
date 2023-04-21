import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DummyProducts=[
  {id:'1',price:90,title:'First Book',description:'First Product'},
  {id:'2',price:40,title:'Second Book',description:'Second Product'},
  {id:'3',price:60,title:'Third Book',description:'Third Product'}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product)=>(
        <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />))}
      </ul>
    </section>
  );
};

export default Products;
