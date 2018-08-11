var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>Hello World!</h1>", function(error) {
  if (error) {
    return console.log("error");
  } else {
    return console.log("file created");
  }
});

var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg'

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/puppy.jpg"));
});
