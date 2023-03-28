# flatiron-coding-challenge-survival-kit
BETA VERSION - because we haven't actually passed any of the challenges yet
This is the (almost) definitive guide to surviving the coding challenges. This is a compilation of what we've learned from the practices chalenges - what went well, what didn't work for us, etc. It focuses on 3 pillars:
    1. The commandments
    2. Workflow and structure
    3. Helpful resources

1. THE COMMANDMENTS
    a. We're not trying to ace the challenge with flying colors, we are trying to pass. That means a 3 or better on the rubric points
        -We're not winning any prizes, we're not setting any records. We don't get a transcript at the end of this.
    b. The challenges are open book and open internet. Don't spend a lot of time trying to figure out something on your own. Don't be a hero!
    c. Minimize distractions before the challenge
    d. MAKE SURE YOU FORK THE CHALLENGE
    e. Disregard the bonus material. If you miss one of the core requirements, the bonus points won't make any difference. They are only there as an additional challenge for yourself.
    f. Get a good night's sleep
    g. Eat a good meal before the challenge
    h. Use the next section of this guide as your layout for your code and your workflow process
    i. Title each section of your code with a //note so you can refer back to each section quickly for troubleshooting
    j. Remember that you quit your last job to be here so passing is pretty much your only option

2. WORKFLOW AND STRUCTURE
    STEP 1: Fork and clone the challenge
    STEP 2: Read the README.md file
    STEP 3: WRITE DOWN what is being asked. Separate it from the excess so you are clear on what you need to do
    STEP 4: Install anything necessary according to the README instructions
    STEP 5: Open the HTML in your browser so you see what you're dealing with
    STEP 6: Follow the below structure for your JS file:
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
            const restaurant = showDetail.querySelector(".channel");

            detailImage.src = show.image;
            detailImage.alt = show.name;
            name.textContent = show.name;
            restaurant.textContent = show.channel;
            ratingDisplay.textContent = show.rating;
            commentDisplay.textContent = show.comment;}

        // add event listener to the correct section to carry out an event
            > these take the consts and add event listeners to them. In this section, you may also see "fetch," ".then," ".catch," etc
            ex:
            newShowForm.addEventListener("create", (event) => {
            event.preventDefault();
            const name = event.target.elements.name.value;
            const restaurant = event.target.elements.restaurant.value;
            const image = event.target.elements.image.value;
            const rating = event.target.elements.rating.value;
            const comment = event.target.elements.comment.value;

            const show = { name, restaurant, image, rating, comment };
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

    STEP 7: Frequently refresh the browser to make sure your code is working

3. HELPFUL RESOURCES
    A. Stack Overflow
    B. W3 School
    C. Reddit
    D. The labs you created
    E. The practice challenges