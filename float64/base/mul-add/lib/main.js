/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var Complex128 = require( './../../../../float64/ctor' );
var real = require( './../../../../float64/real' );
var imag = require( './../../../../float64/imag' );


// MAIN //

/**
* Performs a multiply-add operation involving three double-precision complex floating-point numbers.
*
* @param {Complex128} alpha - complex number
* @param {Complex128} x - complex number
* @param {Complex128} y - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var z1 = new Complex128( 5.0, 3.0 );
* var z2 = new Complex128( -2.0, 1.0 );
* var z3 = new Complex128( 7.0, -8.0 );
*
* var out = muladd( z1, z2, z3 );
* // returns <Complex128>[ -6.0, -9.0 ]
*/
function muladd( alpha, x, y ) {
	var re0 = real( alpha );
	var im0 = imag( alpha );
	var re1 = real( x );
	var im1 = imag( x );
	var re2 = real( y );
	var im2 = imag( y );
	var re = (re0*re1) - (im0*im1) + re2;
	var im = (re0*im1) + (im0*re1) + im2;
	return new Complex128( re, im );
}


// EXPORTS //

module.exports = muladd;
