const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/angular-news-eagle-2019'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/angular-news-eagle-2019/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });