const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const quoteBtn = document.getElementById('getQuoteBtn');
const quoteText = document.getElementById('quote');

quoteBtn.addEventListener('click', fetchQuote);

function fetchQuote() {
  fetch('https://api.example.com/quotes') // Replace with the actual API endpoint
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.quote;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

const goalInput = document.getElementById('goalInput');
const addGoalBtn = document.getElementById('addGoalBtn');
const goalList = document.getElementById('goalList');

addGoalBtn.addEventListener('click', addGoal);

function addGoal() {
  const goal = goalInput.value;

  fetch('https://api.example.com/goals', {
    method: 'POST',
    body: JSON.stringify({ goal }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const goalItem = document.createElement('li');
      goalItem.textContent = data.goal;
      goalList.appendChild(goalItem);
      goalInput.value = '';
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

const imgBtn = document.getElementById('getMotivationalImgBtn');
const imgElement = document.getElementById('motivationalImg');

imgBtn.addEventListener('click', fetchMotivationalImage);

function fetchMotivationalImage() {
  fetch('https://api.example.com/motivational-images') // Replace with the actual API endpoint
    .then(response => response.json())
    .then(data => {
      imgElement.src = data.imageURL;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

complimentBtn.addEventListener('click', getCompliment);

