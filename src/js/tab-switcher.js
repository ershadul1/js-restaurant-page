import homePage from './home';
import menuPage from './menu';
import aboutPage from './about';

const removeCurrentTab = () => {
  const nodesToRemove = document.querySelector('#inner-container').childNodes;
  nodesToRemove.forEach(node => node.remove());
};

const tabSwitcher = (pageName) => {
  removeCurrentTab();

  switch (pageName) {
    case 'Home':
      homePage();
      break;
    case 'Menu':
      menuPage();
      break;
    case 'About':
      aboutPage();
      break;
    default:
      homePage();
  }
};

export default tabSwitcher;