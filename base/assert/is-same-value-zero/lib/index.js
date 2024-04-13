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

/**
* Test whether two double-precision complex floating-point numbers are the same value.
*
* @module @stdlib/complex/base/assert/is-same-value-zero
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var isSameValueZero = require( '@stdlib/complex/base/assert/is-same-value-zero' );
*
* var z1 = new Complex128( 5.0, 3.0 );
* var z2 = new Complex128( 5.0, 3.0 );
*
* var v = isSameValueZero( z1, z2 );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
