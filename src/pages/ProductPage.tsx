
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { productId } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
