import navbar from './navbar';
import homepage from './home';
import footer from './footer';

const pageLoader = () => {
  const innerContainer = document.createElement('div');
  innerContainer.id = 'inner-container'
  const container = document.getElementById('content')
   
  navbar();
  container.appendChild(innerContainer);
  homepage();
  footer();
};

export default pageLoader;