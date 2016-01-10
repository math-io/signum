Signum
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Signum][signum] function.

The [Signum][signum] `function` is defined as

<div class="equation" align="center" data-raw-text="\operatorname{sign}(x) := \begin{cases} -1 &amp; \textrm{if}\ x < 0 \\ 0 &amp; \textrm{if}\ x = 0 \\ 1 &amp; \textrm{if}\ x > 0 \end{cases}" data-equation="eq:signum_function">
	<img src="https://cdn.rawgit.com/math-io/signum/ec73644e91efe6a321261458c55bbd727bb6b38d/docs/img/eqn.svg" alt="Signum function definition.">
	<br>
</div>

for any real number `x`.


## Installation

``` bash
$ npm install math-signum
```


## Usage

``` javascript
var signum = require( 'math-signum' );
```

#### signum( x )

Evaluates the [Signum][signum] function.

``` javascript
var sign = signum( -5 );
// returns -1

sign = signum( 5 );
// returns 1

sign = signum( -0 );
// returns -0

sign = signum( 0 );
// returns 0

sign = signum( NaN );
// returns NaN
```


## Notes

Table of results:

Value | Sign  
:---: | :---: |
`x > 0` | `+1`
`x < 0` | `-1`
`0` | `0`
`-0` | `-0`
`NaN` | `NaN`


## Examples

``` javascript
var signum = require( 'math-signum' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-signum.svg
[npm-url]: https://npmjs.org/package/math-signum

[build-image]: http://img.shields.io/travis/math-io/signum/master.svg
[build-url]: https://travis-ci.org/math-io/signum

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/signum/master.svg
[coverage-url]: https://codecov.io/github/math-io/signum?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/signum.svg
[dependencies-url]: https://david-dm.org/math-io/signum

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/signum.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/signum

[github-issues-image]: http://img.shields.io/github/issues/math-io/signum.svg
[github-issues-url]: https://github.com/math-io/signum/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[signum]: http://en.wikipedia.org/wiki/Sign_function
