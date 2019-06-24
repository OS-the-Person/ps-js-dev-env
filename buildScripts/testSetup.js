// this file is not transpiled

//Register babel to transpile b4 our tests run
require("babel-register")();

//Disabel webpack features tha mocha doesn't understand
require.extensions[".css"] = function() {};
