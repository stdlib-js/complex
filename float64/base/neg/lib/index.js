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

/**
* Negate a double-precision complex floating-point number.
*
* @module @stdlib/complex/float64/base/neg
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var cneg = require( '@stdlib/complex/float64/base/neg' );
*
* var z = new Complex128( -4.2, 5.5 );
*
* var out = cneg( z );
* // returns <Complex128>[ 4.2, -5.5 ]
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var cneg = require( '@stdlib/complex/float64/base/neg' );
*
* var z = new Complex128( 0.0, 0.0 );
*
* var out = cneg( z );
* // returns <Complex128>[ -0.0, -0.0 ]
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var cneg = require( '@stdlib/complex/float64/base/neg' );
*
* var z = new Complex128( NaN, NaN );
*
* var out = cneg( z );
* // returns <Complex128>[ NaN, NaN ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
