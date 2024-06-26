/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Complex128 = require( './../../../float64/ctor' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var replace = require( '@stdlib/string/base/replace' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Matches a complex number string.
*
* @private
* @returns {RegExp} regular expression
*
* @example
* var re = regexp();
* // returns /^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/
*/
function regexp() {
	return /^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/;
}


// MAIN //

/**
* Parse a string representation of a complex number and returns a Complex128 instance.
*
* @param {string} str - string representation of a complex number
* @throws {TypeError} must provide a string
* @throws {Error} must provide a valid string representation of a complex number
* @returns {Complex128} 128-bit complex number
*
* @example
* var str = '1 + 2i';
* var z = parseComplex128( str );
* // returns <Complex128>
*/
function parseComplex128( str ) {
	var match;
	var re;
	var im = 0;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}

	match = replace( str, /\s/g, '' ).match( regexp() );
	if ( !match ) {
		throw new Error( format( 'invalid argument. Unable to parse input string as a complex number. Value: `%s`.', str ) );
	}

	// Real part:
	re = ( match[1] && !match[1].endsWith( 'i' ) ) ? parseFloat( match[1] ) : 0;

	// Imaginary part:
	if ( match[4] ) {
		im = ( ( match[3] === '-' ) ? -1 : 1 ) * parseFloat( replace( match[4], /i$/, '' ) );
	} else if ( match[1] && match[1].endsWith( 'i' ) ) {
		im = parseFloat( replace( match[1], /i$/, '' ) );
	}
	return new Complex128( re, im );
}


// EXPORTS //

module.exports = parseComplex128;
