const userCard = document.getElementById('userCard');
const userId = userCard.getAttribute('data-user-id');
console.log(userId);

const userRole = userCard.getAttribute('data-user-role');
console.log(userRole);

userCard.setAttribute('data-user-name', 'John Doe');
console.log(userCard.getAttribute('data-user-name'));