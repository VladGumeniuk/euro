export const timer = () => ({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,

    init() {
        const countDownDate = new Date("July 15, 2024 00:00:00").getTime();
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(countdownFunction);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            } else {
                document.getElementById("days").innerHTML = this.days;
                document.getElementById("hours").innerHTML = this.hours;
                document.getElementById("minutes").innerHTML = this.minutes;
                document.getElementById("seconds").innerHTML = this.seconds;
            }
        };

        const countdownFunction = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call to set values immediately
    },
});