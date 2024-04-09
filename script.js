const dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.addEventListener("click", () => {
    const dropdownMenu = document.querySelector("#dropdown > .menu");
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
  });
  
  document.getElementById('cancel-order').addEventListener('click', function() {
    // Clear form fields or perform any other necessary actions
    document.getElementById('order-form').reset();
    console.log('Order canceled!');
  });