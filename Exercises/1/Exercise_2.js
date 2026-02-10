const forLoop = () => {
    const evenNumbers = [];
    for (let i = 2; i <= 20; i += 2) {
        evenNumbers.push(i);
    }
    console.log(evenNumbers);
};

const whileLoop = () => {
    const evenNumbers = [];
    while (evenNumbers.length < 10) {
        const nextEven = (evenNumbers.length + 1) * 2;
        evenNumbers.push(nextEven);
    }
    console.log(evenNumbers);
};

forLoop();
whileLoop();

