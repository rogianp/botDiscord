const userInstagram = require("user-instagram");

// Gets informations about a user
userInstagram('renatamarques.oficial') // Same as getUserData()
  .then(console.log)
  .catch(console.error);

// Gets information about a post
// userInstagram.getPostData('CD9EMe5sHP5')
//   .then(console.log)
//   .catch(console.error)