/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var Complex64 = require( './../../../../float32/ctor' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Adds two single-precision complex floating-point numbers.
*
* @private
* @param {Complex64} z1 - complex number
* @param {Complex64} z2 - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z = new Complex64( 5.0, 3.0 );
*
* var out = add( z, z );
* // returns <Complex64>[ 10.0, 6.0 ]
*/
function add( z1, z2 ) {
	var v = addon( z1, z2 );
	return new Complex64( v.re, v.im );
}


// EXPORTS //

module.exports = add;
