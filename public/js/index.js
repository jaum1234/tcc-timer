class Clock {
    constructor(el, time) {
        this.el = el;
        this.time = time;
    }

    setTime = (time) => {
        this.el.innerHTML = time;
    }

    formatted = () => {
        const target = Object.assign({}, this.time);

        for (const i in target) {
            target[i] = String(target[i]).padStart(2, '0');
        }

        return `${target.days}:${target.hours}:${target.minutes}:${target.seconds}`
    }

    zero = () => {
        return "00:00:00";
    }
}

class Progression {
    constructor(el, start, end) {
        this.el = el;
        this.start = start;
        this.end = end;
    }

    currentPosition = (elapsedTime, totalTime) => {
        return Math.min(this.start + ((elapsedTime/totalTime)*(this.end - this.start)), totalTime);
    }

    setPositionBasedOnTime(elapsedTime, totalTime) {
        this.setPosition(this.currentPosition(elapsedTime, totalTime));
    }

    move = (time) => {
        this.el.style.animationDuration = time + "s";
    }
}

class Death extends Progression {
    setPosition = (position) => {
        this.el.style.transform = `translateX(${position}px)`;
    }
}

class Bar extends Progression {
    setPosition = (position) => {
        this.el.style.x = position + "%";
    }
}

const startCountDown = () => {
    const initialDate = new Date("2024-11-01T00:00:00").getTime();
    const targetDate = new Date("2024-11-29T00:00:00").getTime();

    const totalTime = targetDate - initialDate;

    const elapsedTime = new Date().getTime() - initialDate;

    const death = new Death(document.querySelector("#death-group"), 0, 500);
    const bar = new Bar(document.querySelector("#progress-time-fill"), -100, 0);

    death.setPositionBasedOnTime(elapsedTime, totalTime);
    bar.setPositionBasedOnTime(elapsedTime, totalTime);

    const interval = setInterval(() => {
        let timeRemaining = targetDate - new Date().getTime();
        const timeRemainingInSeconds = timeRemaining/1000;

        death.move(timeRemainingInSeconds);
        bar.move(timeRemainingInSeconds);
        
        const totalSeconds = Math.floor(timeRemaining / 1000);
        
        const clock = new Clock(document.querySelector(".timer"), { 
            days: Math.floor(totalSeconds/(3600*24)), 
            hours: Math.floor(totalSeconds%(3600*24)/3600), 
            minutes: Math.floor((totalSeconds%3600)/60), 
            seconds: totalSeconds%60
        });

        clock.setTime(clock.formatted());

        if (timeRemaining <= 0) {
          clearInterval(interval);
          
          clock.setTime(clock.zero());

          death.setPosition(520);
          bar.setPosition(0);
          
          return;
        }
    });
};

