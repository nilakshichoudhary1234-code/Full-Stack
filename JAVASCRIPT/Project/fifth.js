const div = document.querySelector('div');
setInterval(() => {
  let time = new Date();
  div.textContent = time.toLocalTimeString();
}, 1000) //it is the call back function
