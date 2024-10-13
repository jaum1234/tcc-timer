const countDown = () => {
    const targetDate = new Date(new Date().getFullYear(), 10, 29, 0, 0, 0); 

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
          clearInterval(interval);
          document.getElementById('timer').innerHTML = "00:00:00";
          return;
        }

        const totalSeconds = Math.floor(timeRemaining / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        document.getElementById('timer').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; 
    }, 1000);
};

