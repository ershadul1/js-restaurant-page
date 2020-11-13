import tabSwitcher from './tab-switcher'

const navbar = document.createElement('nav');
navbar.classList.add('d-flex', 'flex-wrap', 'justify-around');
const navItems = ['Home', 'Menu', 'About'];

navItems.forEach(element => {
  const itemDiv = document.createElement('div');
  itemDiv.textContent = element;
  itemDiv.classList.add('font-size-2', 'hover');
  itemDiv.onclick = () => tabSwitcher(element);
  navbar.appendChild(itemDiv);
})

export default navbar;