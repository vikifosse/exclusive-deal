const form = document.getElementById('main_form');
const formCount = document.getElementById('count');
const level = document.getElementById('level');
let countDay = document.getElementById('count-day').value;
const popka = document.getElementById('popka');
let po = document.querySelector('.table');
let reset = document.getElementById("reset");
let inputCalc = document.getElementById('input-calc');
let counttotal = document.getElementById("count-total");
let tetd = document.getElementById("tetd");
let day = 0;
let depcount = 0;
let depositIndex = '';
let depositLevel = '';
let dayRes = 0;
let mesRes = 0;
let result = 0;
let depNum = 2;
inputCalc.addEventListener('click', (e) => {
    e.preventDefault();
    depcount = formCount.value;
    checker(formCount);
    inputCalc.setAttribute("disabled", "disabled");
    reset.style.display = 'inline-block';
});
form.addEventListener('change', (e) => {
    depcount = formCount.value;
})

reset.addEventListener('click', (e) => {
    closeBtn();
});

formCount.addEventListener('input',
    function (e) {
        this.value = this.value.replace(/[^\d.]/g, '');
    }
)

function checker(count) {
    if (count.value < 1000) count.value = 1000;
    else if (count.value >= 1000) {
        depositIndex = 1;
    }
    calc(+count.value, +depositIndex, +depositLevel);
}


function calc(invest, count) {
    return DepositCalc(invest, count);
}

function DepositCalc(invest, depIndex) {
    if (invest <=999) {
        closeBtn();
    }
    switch (depIndex) {
        case 1:
            calcProfit(invest, 3.1, depIndex);
            break;
        default:
            break;
    }
}
let depIndexObj = {
    1: "3.1"
};
let precentTotal = 0;
function calcProfit(invest, percent) {
    precentTotal = percent;
    po.style.display = 'block';
    day = +document.getElementById('count-day').value;
    let deposito = +invest;
    for (let i = 0; i < +day; i++) {
        dayRes = (deposito * ((precentTotal * 1) / 100));
        deposito = (deposito + dayRes);
        Otris(i + 1, +precentTotal, dayRes.toFixed(2), deposito.toFixed(2));
    }
    otriss(deposito.toFixed(2));
}
let wordDay = '';
function Otris(day, prec, prof, total) {
    
    if(day === 1) {
        wordDay = "day";
    } else {
        wordDay = "days";
    }
    popka.innerHTML +=
        `
        <tr>
            <td>${day} ${wordDay}</td>
                <td>${prec}<span>%</span></td>
                <td><span>$</span>${prof}</td>
                <td><span>$</span>${total}</td>
            </tr>
        `
        ;
}

function closeBtn() {
    inputCalc.removeAttribute("disabled");
    reset.style.display = 'none';
    formCount.value = 1000;
    popka.innerHTML = '';
    po.style.display = 'none';
    tetd.style.display = "none"
    counttotal.value = 0;
    countDay = 30;
};

function otriss(total) {
    tetd.style.display = "block";
    counttotal.value = total;
}