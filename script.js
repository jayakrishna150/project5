
const cart = [];

document.querySelectorAll('.project button').forEach((button) => {
  button.addEventListener('click', () => {
    const project = button.closest('.project');
    const projectName = project.querySelector('h3').textContent;
    const projectPrice = project.querySelector('h4').textContent;
    cart.push({ name: projectName, price: projectPrice });
    console.log(cart);
  });
});
