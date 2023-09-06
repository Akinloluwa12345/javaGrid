const food = [
    {
        id: 1,
        name: "rice and macaroni",
        image: "./download.jpeg",
        description: "lorem jhidsj sdnbj jbsdhj hvsdjhj hjvsdjvh",
        price: 600
    },
    {
        id: 2,
        name: " Jollof rice",
        image: "./jolof.jpeg",
        description: "lorem jollof jollof jollof jollof jollof",
        price: 700
    },
    {
        id: 3,
        name: " Fried rice",
        image: "./friedRice.jpeg",
        description: "lorem Fried rice and salad",
        price: 800
    },
    {
        id: 4,
        name: "Beans",
        image: "./background-adare-restaurant.jpg",
        description: "bread and ewa agayin",
        price: 100
    },
    {
        id: 5,
        image: "yam.jpeg",

        name: "yam and egg",
        description: "Yam and egg with butter",
        price: 550
    },
     {
        id: 6,
        name: "Beans",
        image: "./background-adare-restaurant.jpg",
        description: "bread and ewa agayin",
        price: 100
    },
]
// const everyone = ["toyin", "prosper", "jane", "uche", "daniel", "Femi", "Michael"]
// // console.log(everyone[0]);
// const divFromHtml =  document.querySelector(".every") 
// let text = "" 
// everyone.map((bafuto)=> {
// console.log(bafuto);
// text +=  `<h1>${bafuto} is a student of bafuto</h1>` 
// })
// divFromHtml.innerHTML = text

let text = "" 
const cardFromHtml = document.querySelector(".card-container")
food.map((dish)=>{
    text += ` <div class="card">
          <div class="image">
            <img src=${dish.image} alt="" />
          </div>
          <div class="texts">
            <h2>name: ${dish.name} </h2>
            <p>
              Description: ${dish.description}
            </p>
            <h4>Price: ${dish.price + 200}</h4>
          </div>
        </div>`
})
cardFromHtml.innerHTML = text