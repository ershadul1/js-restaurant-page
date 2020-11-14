const container = document.createElement('div');
container.classList.add('home-container', 'd-flex', 'flex-column', 'justify-center', 'align-center');
const heading = document.createElement('h1');
heading.textContent = 'REGEX CAFE';
heading.classList.add('font-size-3', 'color-1', 'bold', 'font-1', 'p-1', 'text-center');
const subHeading = document.createElement('h2');
subHeading.classList.add('font-size-1-5', 'color-2', 'bold', 'font-1', 'text-center');
subHeading.textContent = 'warning! our food may stop your regular expression :)';
container.append(heading, subHeading);

export default container;