'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send("Home page!");
    });

    app.get('/contact', function(req, res) {
        res.send("Contact Us!");
    });
    app.get('/blog', function(req, res){
    	var hours =  new Date().getHours();

    	// if 6 am < time < 12am == Good morning
    	// if 12pm < time < 18pm == Good afternoon
    	// if 18pm < time < 21pm == Good evening
    	// if 21pm < time < 6am  == Good night
    	if(hours >= 6 && hours <= 12 )
    		res.send("Good Morning");
    	else if(hours > 12 && hours <= 18)
    		res.send("Good Afternoon");
    	else if(hours > 18 && hours <= 21)
    		res.send("Good Evening");
    	else
    		res.send("Good Night");
    });

    app.get('/blog/:name', function(req, res) {
    	res.send("Post: " + req.params.name);
    });
    app.get('/category/:id', function(req,res){
    	res.send("Category: " + req.params.id);
    });

};
