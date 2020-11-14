import burger from '../assets/menu-burger.jpg'

const container = document.createElement('div');
container.classList.add('bg-color-3');

const innerContainer = document.createElement('div');
innerContainer.classList.add('d-flex', 'p-2', 'flex-wrap', 'width-limit', 'mx-auto', 'justify-around');


for(let i = 0; i < 8; i += 1) {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('py-half')
  const foodImage = new Image();
  foodImage.classList.add('food-image', 'd-block');
  foodImage.src = burger;
  const foodDescription = document.createElement('div');
  foodDescription.textContent = "Special Food $5"
  foodDescription.classList.add('font-size-1-5', 'color-2', 'bold', 'font-1', 'text-center', 'py-2')
  menuDiv.append(foodImage, foodDescription);
  innerContainer.appendChild(menuDiv);
}

container.appendChild(innerContainer);
export default container; 