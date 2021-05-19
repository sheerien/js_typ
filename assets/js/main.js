// fetch data from api

let suffix = 'users'
let API_URL = `https://jsonplaceholder.typicode.com/${suffix}`
    /*
    // first method
    function fetchAllData(callback) {
        fetch(API_URL).then(response => {
            // return response.blob();
            return response.json();
        }).then(data => {
            callback(null, data);
        }).catch(err => {
            callback(err, null)
        })
    }

    fetchAllData((err, data) => {
        if (err) {
            console.error(err);
        }
        // console.log(data.size);
        for (let i = 0, len = data.length; i < len; i++) {
            // console.log(data[i]);
            console.log((i + 1) + "- " + data[i].name + " - " + data[i].username + " - " + data[i].email);
            console.log(data[i].address["street"]);

        }
    });
    */


// second method
async function fetchAllData() {
    let response = await fetch(API_URL);
    let data = await response.json();
    return data;
}

async function getData() {
    try {
        let allData = await fetchAllData();
        // console.log(allData);
        for (let i = 0, len = allData.length; i < len; i++) {
            // console.log(allData[i]);
            console.log((i + 1) + "- " + allData[i].name + " - " + allData[i].username + " - " + allData[i].email);
            console.log(allData[i].address["street"]);

        }
    } catch (err) {
        console.error(err);
    }
}

getData()