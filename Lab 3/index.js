const activity = document.querySelector("#activity")
const participants = document.querySelector("#participants")
const accessibility = document.querySelector("#accessibility")
const key = document.querySelector("#key")
const price = document.querySelector("#price")
const type = document.querySelector("#type")


const url = 'https://www.boredapi.com/api/activity';

async function getData() {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    console.log(respData.activity);

    activity.innerHTML = respData.activity;
    participants.innerHTML = respData.participants;
    accessibility.innerHTML = respData.accessibility;
    key.innerHTML = respData.key;
    price.innerHTML = respData.price;
    type.innerHTML = respData.type;
}

getData();