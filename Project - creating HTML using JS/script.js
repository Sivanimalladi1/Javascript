//! 1 select target elements
const appContainer = document.getElementById('id');
const generateButton = document.getElementById('generatebtn');

//! 2 Create new HTML elements (document.createElement())
function createProfileCard(){

    //create profile card container
    const profileCard = document.createElement('div');
    //console.log(profileCard);
    profileCard.className = 'profile-Card';
    console.log(profileCard);

    //create image tag for profile picture
    const profileImage = document.createElement('img');
    //add image
    profileImage.src = './view-9651981_640.jpg';
     console.log(profileImage);

    //creating h2 for profile name
    const profileName = document.createElement('h2');
    profileName.textContent = 'Sri';
    console.log(profileName);
 
    //creating  paragraph description
    const profileDescription = document.createElement('p');
    profileDescription.textContent = 'This is a profile card created using JavaScript. It contains an image and a description.';
    console.log(profileDescription);

    //! 3 Add content to the element created(innerHTML/ textContent)

    //! 4 Add classes or ids if needed// add any attribute

    //append the elements to the profile card
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileDescription);
    console.log(profileCard);

    //append the profile card to the app container
    appContainer.appendChild(profileCard);
    console.log(appContainer);    
}
//createProfileCard();

generateButton.addEventListener('click', createProfileCard);