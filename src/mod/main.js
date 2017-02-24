"use strict";

require("icons");
require("offline");

var W = require("x-widget").getById;


exports.onMenu = function() {
    var layout = W('layout');
    layout.showNav = !layout.showNav;
};


exports.start = function() {
    W('layout').showNav = window.innerWidth > 999;
};
