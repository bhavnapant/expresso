'use strict';

(function() {

    var express = require('express');
    var app = express();
    var port = process.env.PORT || 3000;
    var routes = require('./routes')(app);

    app.listen(port);
    console.log("Server is listening on port "  + port);
})();
