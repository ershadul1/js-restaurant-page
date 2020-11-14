import burger from '../assets/menu-burger.jpg';

const menuGenerator = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('bg-color-3');

  const menuInnerContainer = document.createElement('div');
  menuInnerContainer.classList.add('d-flex', 'p-2', 'flex-wrap', 'width-limit', 'mx-auto', 'justify-around');


  for (let i = 0; i < 8; i += 1) {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('py-half');
    const foodImage = new Image();
    foodImage.classList.add('food-image', 'd-block');
    foodImage.src = burger;
    const foodDescription = document.createElement('div');
    foodDescription.textContent = 'Special Food $5';
    foodDescription.classList.add('font-size-1-5', 'color-2', 'bold', 'font-1', 'text-center', 'py-2');
    menuDiv.append(foodImage, foodDescription);
    menuInnerContainer.appendChild(menuDiv);
  }

  menuContainer.appendChild(menuInnerContainer);
  const innerContainer = document.getElementById('inner-container');
  innerContainer.appendChild(menuContainer);
}
export default menuGenerator;