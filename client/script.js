script.js

// Get reference to the "Get Fortune" button
const getFortuneBtn = document.getElementById('getFortuneBtn');

// Event listener for button click
getFortuneBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('/fortune');
    const data = await response.json();
    alert(data.fortune);
  } catch (error) {
    console.error('Error:', error);
  }
});                  

