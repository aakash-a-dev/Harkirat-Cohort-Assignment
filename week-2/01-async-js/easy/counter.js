let count = 0;

const counter = () => {
    count++;
    console.log(count); // You can replace this with any action you want to perform with the incremented count
}

setInterval(counter, 1000);
