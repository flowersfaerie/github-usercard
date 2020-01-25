/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
	.get('https://api.github.com/users/flowersfaerie')
	.then(function (response) {
    // handle success
		console.log(response);
		response.data.forEach(item => {
			let card = followerCards(item);
            parent.appendChild(card);
		});
	})
	.catch(function (error) {
	// handle error
		console.log(error);
	})
	

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function followerCards(item) {
	
	// Create the Elements
	const cardPanel = document.createElement('div');
	const flwrImg = document.createElement('img');
	const cardInfo = document.createElement('div');
	const flwrName = document.createElement('h3');
	const flwrUName = document.createElement('p');
	const locale = document.createElement('p');
	const prof = document.createElement('p');
	const pageLink = document.createElement('a');
	const flwrCount = document.createElement('p');
	const flwngCount = document.createElement('p');
	const biography = document.createElement('p');
	
	// Append the Children
	cardPanel.appendChild(flwrImg);
	cardPanel.appendChild(cardInfo);
	cardInfo.appendChild(flwrName);
	cardInfo.appendChild(flwrUName);
	cardInfo.appendChild(locale);
	cardInfo.appendChild(prof);
	prof.appendChild(pageLink);
	cardInfo.appendChild(flwrCount);
	cardInfo.appendChild(flwngCount);
	cardInfo.appendChild(biography);
	
	// Set Class Names
	cardPanel.classList.add('card');
	cardInfo.classList.add('card-info');
	flwrName.classList.add('name');
	flwrUName.classList.add('username');
	
	// Add Content
	flwrImg.src = item.avatar_url;
	flwrName.textContent = item.name;
	flwrUName.textContent = item.login;
	locale.textContent = `Location: ${item.location}`;
	prof.textContent = "Profile: ";
	pageLink.src = item.url;
	pageLink.textContent = item.url;
	flwrCount.textContent = `Followers: ${item.followers}`;
	flwngCount.textContent = `Following: ${item.following}`;
	biography.textContent = item.bio;
	
	return cardPanel // returns the cardPanel component	
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
