import Navigation from './Navigation';
import Footer from './Footer';
import './Layout.css';

const Layout = (props) => {
  return (
    <div className='container'>
      <div className='navigation'>
        <Navigation />
      </div>
      <div className='content'>{props.children}</div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
