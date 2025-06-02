/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var Complex128 = require( './../../../float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var reim = require( './../lib' );

function random() {
	return new Complex128( discreteUniform( -10, 10 ), discreteUniform( -10, 10 ) ); // eslint-disable-line max-len
}

// Generate an array of random complex numbers:
var x = filledarrayBy( 100, 'complex128', random );
// returns <Complex128Array>

// Return the real and imaginary components of each complex number...
var out;
var z;
var i;
for ( i = 0; i < x.length; i++ ) {
	z = x.get( i );
	out = reim( z );
	console.log( '%s => %d, %d', z.toString(), out[ 0 ], out[ 1 ] );
}
