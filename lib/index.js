'use strict';

// MODULES //

var isnan = require( 'validate.io-nan' );


// SIGNUM //

/**
* FUNCTION: signum( x )
*	Determines the sign of a numeric value.
*
* @param {Number} x - input value
* @returns {Number} value indicating the sign
*/
function signum( x ) {
	if ( x === 0 || isnan( x ) ) {
		return x;
	}
	return ( x < 0 ) ? -1 : 1;
} // end FUNCTION signum()


// EXPORTS //

module.exports = signum;
