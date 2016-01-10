'use strict';

// MODULES //

var test = require( 'tape' );
var signum = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof signum === 'function', 'main export is a function' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var sign = signum( NaN );
	t.notOk( sign === sign, 'returns NaN' );
	t.end();
});

test( 'the function returns `-0` if provided a `-0`', function test( t ) {
	t.equal( signum( -0 ), 0, 'returns 0' );
	t.equal( 1/signum( -0 ), Number.NEGATIVE_INFINITY, 'returns -0' );
	t.end();
});

test( 'the function returns `0` if provided a +0', function test( t ) {
	t.equal( signum( 0 ), 0, 'returns 0' );
	t.equal( 1/signum( 0 ), Number.POSITIVE_INFINITY, 'returns +0' );
	t.end();
});

test( 'the function returns the `-1` is provided a negative number', function test( t ) {
	t.equal( signum( -10 ), -1, '(-10) => -1' );
	t.equal( signum( -Math.PI ), -1, '(-pi) => -1' );
	t.end();
});

test( 'the function returns the `+1` is provided a positive number', function test( t ) {
	t.equal( signum( 10 ), 1, '10 => 1' );
	t.equal( signum( Math.PI ), 1, 'pi => 1' );
	t.end();
});

