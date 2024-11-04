const animationTime = 20
const days = 7;
 
const startDeadline = () => {

    document.querySelectorAll("#progress-time-fill, #death-group").forEach(el => {
        el.style.animationDuration = "20s";
    });

    const deadlineAnimation = () => {
        const timeouts = [
            { delay: 0, duration: "1.5s" },
            { delay: 4000, duration: "1s" },
            { delay: 8000, duration: "0.7s" },
            { delay: 12000, duration: "0.3s" },
            { delay: 15000, duration: "0.2s" }
        ];
    
        timeouts.forEach(t => {
            setTimeout(() => {
                document.querySelector("#designer-arm-grop").style.animationDuration = t.duration;
            }, t.delay);
        });
    };
    

    // const timer = (totalTime, deadline) => {
    //     var time = totalTime * 1000;
    //     var dayDuration = time / deadline;
    //     var actualDay = deadline;

    //     const countTime = () => {
    //         --actualDay;
    //         document.querySelector(".deadline-days .day").textContent = actualDay;

    //         if (actualDay == 0) {
    //             clearInterval(timer);
    //             document.querySelector(".deadline-days .day").textContent = deadline;
    //         }
    //     }

    //     var timer = setInterval(countTime, dayDuration);

    // }

    // var deadlineText = function () {
    //     const el = document.querySelector(".deadline-days");
    //     const html = '<div class="mask-red"><div class="inner">' + el.innerHTML + '</div></div><div class="mask-white"><div class="inner">' + el.innerHTML + '</div></div>';
        
    //     el.innerHTML = html;
    // }

    // deadlineText();

    deadlineAnimation();
    // timer(animationTime, days);

    setInterval(() => {
        // timer(animationTime, days);
        deadlineAnimation();

        console.log('begin interval', animationTime * 1000);

    }, animationTime * 1000);

};

