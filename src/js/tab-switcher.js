import homePage from './home'
import menuPage from './menu'
import aboutPage from './about'

function removeCurrentTab() {
  const nodesToRemove = document.querySelector('.inner-container').childNodes;
  nodesToRemove.forEach(node => node.remove());
}

function tabSwitcher(pageName) {
  removeCurrentTab();
  const innerContainer = document.querySelector('.inner-container');

  switch(pageName) {
    case 'Home':
      innerContainer.appendChild(homePage);
      break;
    case 'Menu':
      innerContainer.appendChild(menuPage);
      break;
    case 'About':
      innerContainer.appendChild(aboutPage);
      break;
  }
}

export default tabSwitcher;