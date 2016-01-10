'use strict';

var signum = require( './../lib' );

var sign;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
	v = Math.round( Math.random()*100 ) - 50;
	if ( signum( v ) < 0 ) {
		sign = '-';
	} else {
		sign = '+';
	}
	console.log( 'Value: %d. Sign: %s', v, sign );
}
