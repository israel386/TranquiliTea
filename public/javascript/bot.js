console.log("this is running");
//affirmations
const affirmText = document.getElementById("affirmation");

//quote
const quoteText = document.getElementById("quote");
const quoteBy = document.getElementById("by");

//teas
const teaText = document.getElementById("tea");
const teaBenefits = document.getElementById("benefits");

//buttons

// AFFIRMATIONS
const affirmationBtn1 = document.querySelector(".affirmationBtn1");
const affirmationBtn2 = document.querySelector(".affirmationBtn2");
const affirmationBtn3 = document.querySelector(".affirmationBtn3");
const affirmationBtn4 = document.querySelector(".affirmationBtn4");

// QUOTES
const quoteBtn1 = document.querySelector(".quoteBtn1");
const quoteBtn2 = document.querySelector(".quoteBtn2");
const quoteBtn3 = document.querySelector(".quoteBtn3");
const quoteBtn4 = document.querySelector(".quoteBtn4");

// TEAS
const teaBtn1 = document.querySelector(".teaBtn1");
const teaBtn2 = document.querySelector(".teaBtn2");
const teaBtn3 = document.querySelector(".teaBtn3");
const teaBtn4 = document.querySelector(".teaBtn4");


//AFFIRMATIONS MOOD 1
const getAffirmation1 = async () => {
    const res = await fetch("/api/affirmations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const affirmations = await res.json();
    const num = Math.floor(Math.random() * 6);
    const item = affirmations[num];
    const affirmation = item.affirmation_phrase;
    affirmText.innerText = affirmation;
};
affirmationBtn1.addEventListener("click", getAffirmation1);

//AFFIRMATIONS MOOD 2
const getAffirmation2 = async () => {
    const res = await fetch("/api/affirmations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const affirmations = await res.json();
    const num = Math.floor(Math.random() * 6 + 6);
    const item = affirmations[num];
    const affirmation = item.affirmation_phrase;
    affirmText.innerText = affirmation;
};
affirmationBtn2.addEventListener("click", getAffirmation2);

//AFFIRMATIONS 3
const getAffirmation3 = async () => {
    const res = await fetch("/api/affirmations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const affirmations = await res.json();
    const num = Math.floor(Math.random() * 6 + 12);
    const item = affirmations[num];
    const affirmation = item.affirmation_phrase;
    affirmText.innerText = affirmation;
};
affirmationBtn3.addEventListener("click", getAffirmation3);

//AFFIRMATIONS MOOD 4
const getAffirmation4 = async () => {
    const res = await fetch("/api/affirmations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const affirmations = await res.json();
    const num = Math.floor(Math.random() * 6 + 18);
    const item = affirmations[num];
    const affirmation = item.affirmation_phrase;
    affirmText.innerText = affirmation;
};
affirmationBtn4.addEventListener("click", getAffirmation4);



//QUOTES 1
const getQuote1 = async () => {
    const res = await fetch("/api/quotes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const quotes = await res.json();
    const num = Math.floor(Math.random() * 5);
    const item = quotes[num];
    const quote = item.quote;
    const by = item.by;
    quoteText.innerText = quote;
    quoteBy.innerText = by;
};
quoteBtn1.addEventListener("click", getQuote1);

//QUOTES 2
const getQuote2 = async () => {
    const res = await fetch("/api/quotes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const quotes = await res.json();
    const num = Math.floor(Math.random() * 5 + 5);
    const item = quotes[num];
    const quote = item.quote;
    const by = item.by;
    quoteText.innerText = quote;
    quoteBy.innerText = by;
};
quoteBtn2.addEventListener("click", getQuote2);



//QUOTES 3
const getQuote3 = async () => {
    const res = await fetch("/api/quotes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const quotes = await res.json();
    const num = Math.floor(Math.random() * 5 + 10);
    const item = quotes[num];
    const quote = item.quote;
    const by = item.by;
    quoteText.innerText = quote;
    quoteBy.innerText = by;
};
quoteBtn3.addEventListener("click", getQuote3);


//QUOTES 4
const getQuote4 = async () => {
    const res = await fetch("/api/quotes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const quotes = await res.json();
    const num = Math.floor(Math.random() * 5 + 15);
    const item = quotes[num];
    const quote = item.quote;
    const by = item.by;
    quoteText.innerText = quote;
    quoteBy.innerText = by;
};
quoteBtn4.addEventListener("click", getQuote4);




//TEAS 1
const getTea1 = async () => {
    const res = await fetch("/api/teas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const teas = await res.json();
    const num = Math.floor(Math.random() * teas.length);
    const item = teas[num];
    const tea = item.tea_type;
    const benefits = item.benefits;
    teaText.innerText = tea;
    teaBenefits.innerText = benefits;
};
teaBtn1.addEventListener("click", getTea1);


//TEAS2
const getTea2 = async () => {
    const res = await fetch("/api/teas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const teas = await res.json();
    const num = Math.floor(Math.random() * teas.length);
    const item = teas[num];
    const tea = item.tea_type;
    const benefits = item.benefits;
    teaText.innerText = tea;
    teaBenefits.innerText = benefits;
};
teaBtn2.addEventListener("click", getTea2);


//TEAS 3
const getTea3 = async () => {
    const res = await fetch("/api/teas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const teas = await res.json();
    const num = Math.floor(Math.random() * teas.length);
    const item = teas[num];
    const tea = item.tea_type;
    const benefits = item.benefits;
    teaText.innerText = tea;
    teaBenefits.innerText = benefits;
};
teaBtn3.addEventListener("click", getTea3);

//TEAS 4
const getTea4 = async () => {
    const res = await fetch("/api/teas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const teas = await res.json();
    const num = Math.floor(Math.random() * teas.length);
    const item = teas[num];
    const tea = item.tea_type;
    const benefits = item.benefits;
    teaText.innerText = tea;
    teaBenefits.innerText = benefits;
};
teaBtn4.addEventListener("click", getTea4);