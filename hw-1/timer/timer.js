const deleteTimer = document.getElementById('delete_timer');
const result = document.getElementById('timer__result');


const timer = (timeTo) => {
  let timerId = null;

  function tick() {

    let time = timeTo - new Date().getTime();

    if (time > 0) {
      const years =
        time > 0 ? Math.floor(time / (1000 * 60 * 60 * 24 * 30 * 12)) : 0;
      const months =
        time > 0 ? Math.floor((time / (1000 * 60 * 60 * 24 * 30)) % 12) : 0;
      const days = time > 0 ? Math.floor(time / 1000 / 60 / 60 / 24) : 0;
      const hours = time > 0 ? Math.floor(time / 1000 / 60 / 60) % 24 : 0;
      const minutes = time > 0 ? Math.floor(time / 1000 / 60) % 60 : 0;
      const seconds = time > 0 ? Math.floor(time / 1000) % 60 : 0;
      result.innerText = `Year(s): ${years} - Month(s): ${months} - Day(s): ${days} - Hour(s): ${hours} - Minute(s): ${minutes} - Second(s): ${seconds}`;
    } else {
      result.innerText = `Timer expired!`;
      clearInterval(timerId);
    }
  }
  
  tick();
  timerId = setInterval(tick, 1000);

  deleteTimer.addEventListener('click', () => {
    clearInterval(timerId);
    result.innerText = 'Timer reset!';
  });
};

export default timer;
