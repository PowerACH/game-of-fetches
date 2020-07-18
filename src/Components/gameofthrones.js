import axios from 'axios';

//Define the API/URL we want to load from
let one = "http://anapioficeandfire.com/api/characters/16"
let two = "http://www.anapioficeandfire.com/api/houses/378"
let three = "http://www.anapioficeandfire.com/api/houses/229"
let four = "http://www.anapioficeandfire.com/api/houses/17"
let five = "http://www.anapioficeandfire.com/api/characters/901"
let six = "http://www.anapioficeandfire.com/api/houses/362" //chain fetch requests
let seven = "http://www.anapioficeandfire.com/api/characters/232"

//Define that we want to perform a GET request using axios
const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);

//We now do have an unresolved promise that we can use to finally execute the GET request and retrieve the response.
// requestOne.then(response => {
//     console.log(response)
// }) .catch(error => {
//     console.error(error)
// })

axios
    .all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven])
    .then(
        axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            const responseThree = responses[2];
            const responseFour = responses[3];
            const responseFive = responses[4];
            const responseSix = responses[5];
            const responseSeven = responses[6];

            console.log(responseOne)
        })
    )

    .catch(errors => {
        console.error(errors);
    })