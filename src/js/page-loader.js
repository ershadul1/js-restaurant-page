import navbar from './navbar';
import homepage from './home';
import footer from './footer';

const pageLoader = () => {
  const container = document.getElementById('content');
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner-container');

  innerContainer.appendChild(homepage);
  container.append(navbar, innerContainer, footer);
};

export default pageLoader;