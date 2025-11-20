//your code here!

// Get the list element
const list = document.getElementById('infi-list');

// Counter to keep track of list items
let itemCount = 0;

// Function to add a list item
function addListItem() {
  itemCount++;
  const li = document.createElement('li');
  li.textContent = `Item ${itemCount}`;
  list.appendChild(li);
}

// Function to add multiple list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    addListItem();
  }
}

// Add initial 10 items
addItems(10);

// Event listener for scroll
list.addEventListener('scroll', function() {
  // Check if user has scrolled to the bottom
  // scrollTop: how much has been scrolled from top
  // scrollHeight: total height of the content
  // clientHeight: visible height of the container
  
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
    // User reached the end, add 2 more items
    addItems(2);
  }
});