import { shuffle } from "lodash";
const GetCards = (state) => {

    fetch ('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    .then (resp => resp.json ())
    .then (data => state(shuffle(data)))
};

export default GetCards;