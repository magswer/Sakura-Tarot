const GetCards = (state) => {

    fetch ('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    .then (resp => resp.json ())
    .then (data => state(data.sort(() => Math.random() - 0.5)))
    .catch((error) => {
        console.log(error);
    });
};

export default GetCards;