// get references to the necessary elements
>These are your const and document.querySelectors
ex:
const showMenu = document.querySelector("#show-menu");

// function to display the details of an object
> these are your functions. This might also include more consts.
ex:
function displayShowDetails(show) {
const detailImage = showDetail.querySelector(".detail-image");
const name = showDetail.querySelector(".name");
const channel = showDetail.querySelector(".channel");

detailImage.src = show.image;
detailImage.alt = show.name;
name.textContent = show.name;
channel.textContent = show.channel;
ratingDisplay.textContent = show.rating;
commentDisplay.textContent = show.comment;}

// add event listener to the correct section to carry out an event
> these take the consts and add event listeners to them. In this section, you may also see "fetch," ".then," ".catch," etc
ex:
newShowForm.addEventListener("create", (event) => {
event.preventDefault();
const name = event.target.elements.name.value;
const channel = event.target.elements.channel.value;
const image = event.target.elements.image.value;
const rating = event.target.elements.rating.value;
const comment = event.target.elements.comment.value;

const show = { name, channel, image, rating, comment };
fetch("http://localhost:3000/shows", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(show),
})
    .then(response => response.json())
    .then((show) => {
    // add the new show to the menu
    const img = document.createElement("img");
    img.src = show.image;
    img.alt = show.name;
    img.dataset.id = show.id;
    showMenu.append(img);
    // reset the form
    newshowForm.reset();
    })
    .catch(error => console.error(error));
});


// get all the objects and display the requested object
>this is more fetch stuff
ex:
fetch("http://localhost:3000/shows")
.then(response => response.json())
.then((shows) => {
    for (const show of shows) {
    const img = document.createElement("img");
    img.src = show.image;
    img.alt = show.name;
    img.dataset.id = show.id;
    showMenu.append(img);
    }
})
.catch(error => console.error(error));