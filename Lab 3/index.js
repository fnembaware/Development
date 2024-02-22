const url = 'https://www.boredapi.com/api/activity';

async function getData() {
    const resp = await fetch(url);

    const respData = await resp.json();
    console.log(respData);

    console.log(respData.activity);
}

getData();