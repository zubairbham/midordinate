const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const v = parseInt(inputs[0].value);
    const Emax = inputs[1].value / 100;
    const N = parseInt(inputs[2].value);
    const w = parseInt(inputs[3].value);


    let Rmin = parseInt((v ** 2) / (15 * (Emax + 0.14)));
    console.log(Rmin);
    let Rdash;
    if (N === 1) {
        Rdash = Rmin - (0.5 * w);
        // console.log(Rdash);
    } else if (N === 2) {
        Rdash = Rmin - (1.5 * w);
        // console.log(Rdash);
    } else if (N === 3) {
        Rdash = Rmin - (2.5 * w);
        // console.log(Rdash);
    } else {
        alert("Number Of Lanes must be 1,2 or 3");
    }
    console.log(Rdash);

    let SSD;
    if (v === 15) {
        SSD = 80;
    } else if (v === 20) {
        SSD = 115;
    } else if (v === 25) {
        SSD = 155;
    } else if (v === 30) {
        SSD = 200;
    } else if (v === 35) {
        SSD = 250;
    } else if (v === 40) {
        SSD = 305;
    } else if (v === 45) {
        SSD = 360;
    } else if (v === 50) {
        SSD = 425;
    } else if (v === 55) {
        SSD = 495;
    } else if (v === 60) {
        SSD = 570;
    } else if (v === 65) {
        SSD = 645;
    } else if (v === 70) {
        SSD = 730;
    } else if (v === 75) {
        SSD = 820;
    }else if (v === 80) {
        SSD = 910;
    } else {
        alert("Invalid value of Design Speed");
    }
    console.log(SSD)
    let insideCos = 28.65 * SSD * Math.PI / (Rdash * 180); 
    let  Ms = parseFloat(Rdash * (1 - Math.cos(insideCos))).toFixed(2);
    console.log(Ms);


    result.innerHTML = "<b>Middle Ordinate(Ms):</b>" + " " + Ms + " " +  "ft.";
});
