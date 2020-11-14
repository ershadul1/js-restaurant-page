const aboutGenerator = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('d-flex', 'flex-column', 'justify-center', 'align-center', 'bg-color-3', 'h-85-vh');
  const heading = document.createElement('h1');
  heading.textContent = 'About Us';
  heading.classList.add('font-size-3', 'color-1', 'bold', 'font-1', 'p-1', 'text-center', 'py-2');
  const subHeading = document.createElement('h2');
  subHeading.classList.add('font-size-2', 'color-2', 'bold', 'font-1', 'text-center', 'py-1');
  subHeading.textContent = 'Regex Cafe';
  const address = document.createElement('p');
  address.classList.add('font-size-1-5', 'color-2', 'bold', 'font-1', 'text-center', 'py-1');
  address.textContent = 'Address: 123 park street, Long Drive, No mans Land';
  const phone = document.createElement('p');
  phone.classList.add('font-size-1-5', 'color-2', 'bold', 'font-1', 'text-center', 'py-1');
  phone.textContent = 'Phone: +123-856-479';

  menuContainer.append(heading, subHeading, address, phone);

  const innerContainer = document.getElementById('inner-container');
  innerContainer.appendChild(menuContainer);
};
export default aboutGenerator;