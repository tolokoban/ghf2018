/**
 * This is a layout for simple pages with a big SVG TP logo.
 */
"use strict";

require("font.josefin");

var $ = require("dom");
var DB = require("tfw.data-binding");


var SimpleLayout = function(opts) {
    var headerContent = $.div( 'flex' );
    var logo = $.div( 'logo' );
    $.clear( logo, $.tag( 'img', { src: "icon-128.png", style: "width:100%" } ) );
    var header = $.tag( 'header', [
        headerContent, $.div( 'hemidisk' ), logo
    ] );

    var nav = $.div( 'theme-elevation-16' );
    var content = $.div( 'content' );
    var body = $.div( 'body', [$.div([ $.div('nav', [ nav ]), content ])]);
    
    var elem = $.elem( this, 'div', 'tp4-simple-layout', [header, body] );
    
    DB.propRemoveClass( this, 'visible', 'hide' );
    DB.propRemoveClass( this, 'showNav', 'hide-nav' );
    DB.propArray( this, 'header' )(function(v) {
        $.clear( headerContent );
        if( !v ) return;
        if( !Array.isArray( v ) ) v = [v];
        v.forEach(function (itm) {
            $.add( headerContent, $.div([ itm ]) );
        });
    });
    DB.propArray( this, 'content' )(function(v) {
        $.clear( content );
        if( !v ) return;
        if( !Array.isArray( v ) ) v = [v];
        v.forEach(function (itm) {
            $.add( content, itm );
        });
    });
    DB.propArray( this, 'nav' )(function(v) {
        $.clear( nav );
        if( !v ) return;
        if( !Array.isArray( v ) ) v = [v];
        v.forEach(function (itm) {
            $.add( nav, itm );
        });
    });
    
    opts = DB.extend({
        visible: true,
        header: 'Trail-Passion',
        content: null,
        nav: null,
        showNav: true
    }, opts, this);
};


module.exports = SimpleLayout;

function readonly( name, value ) {
    Object.defineProperty( exports, name, {
        value: value, writable: false, configurable: true, enumerable: true
    });
}

