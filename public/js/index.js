const startCountDown = () => {
    const initialDate = new Date("2024-11-01T00:00:00").getTime();
    const targetDate = new Date("2024-11-29T00:00:00");

    const totalTime = targetDate - initialDate;

    const elapsedTime = new Date().getTime() - initialDate;

    const calculatePosition = (floor, ceiling) => {
        return Math.min(floor + ((elapsedTime/totalTime)*(ceiling - floor)), totalTime);
    }

    const deathPosition = calculatePosition(0, 500);
    const progressPosition = calculatePosition(-100, -3);

    const death = document.querySelector("#death-group")
    death.style.transform = `translateX(${deathPosition}px)`;
    
    const progress = document.querySelector("#progress-time-fill");
    progress.style.x = progressPosition + "%";

    const interval = setInterval(() => {
        let timeRemaining = targetDate - new Date().getTime();
        const timeRemainingInSeconds = timeRemaining/1000;

        death.style.animationDuration = `${timeRemainingInSeconds}s`;
        progress.style.animationDuration = `${timeRemainingInSeconds}s`;
        
        if (timeRemaining <= 0) {
          clearInterval(interval);
          document.querySelector('.timer').innerHTML = "00:00:00";
          death.style.transform = `translateX(520px)`;
          progress.style.x = "0";
          return;
        }

        const totalSeconds = Math.floor(timeRemaining / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        document.querySelector('.timer').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; 
    });
};

