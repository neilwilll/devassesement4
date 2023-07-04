const complimentBtn = document.getElementById("getComplimentBtn");
const fortuneBtn = document.getElementById("getFortuneBtn");
const richBtn = document.getElementById("getRichBtn");
const motivationBtn = document.getElementById("getMotivationBtn");
const sacksBtn = document.getElementById("getSacksBtn");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
  };

  fortuneBtn.addEventListener('click', getFortune)

  const getRich = () => {
    axios.get("http://localhost:4000/api/rich/")
      .then(res => {
        const data = res.data;
        alert(data);
      });
  };
  
  richBtn.addEventListener('click', getRich)

  const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
      .then(res => {
        const data = res.data;
        alert(data);
      });
  };
  
  motivationBtn.addEventListener('click', getMotivation)

  const getSacks = () => {
    axios.get("http://localhost:4000/api/sacks/")
      .then(res => {
        const data = res.data;
        alert(data);
      });
  };
  
  sacksBtn.addEventListener('click', getSacks)