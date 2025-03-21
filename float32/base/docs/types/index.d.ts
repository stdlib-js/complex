/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import add = require( './../../../../float32/base/add' );
import assert = require( './../../../../float32/base/assert' );
import mul = require( './../../../../float32/base/mul' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Adds two single-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( './../../../../float32/ctor' );
	* var realf = require( './../../../../float32/real' );
	* var imagf = require( './../../../../float32/imag' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	* // returns <Complex64>
	*
	* var out = ns.add( z, z );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns 10.0
	*
	* var im = imagf( out );
	* // returns 6.0
	*/
	add: typeof add;

	/**
	* Base (i.e., lower-level) single-precision complex number assertion functions.
	*/
	assert: typeof assert;

	/**
	* Multiplies two single-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( './../../../../float32/ctor' );
	* var realf = require( './../../../../float32/real' );
	* var imagf = require( './../../../../float32/imag' );
	*
	* var z1 = new Complex64( 5.0, 3.0 );
	* // returns <Complex64>
	*
	* var z2 = new Complex64( -2.0, 1.0 );
	* // returns <Complex64>
	*
	* var out = ns.mul( z1, z2 );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns -13.0
	*
	* var im = imagf( out );
	* // returns -1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	* var v = ns.mul.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
	* // returns <Float32Array>[ -13.0, -1.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var z1 = new Float32Array( [ 5.0, 3.0 ] );
	* var z2 = new Float32Array( [ -2.0, 1.0 ] );
	*
	* var out = ns.mul.strided( z1, 1, 0, z2, 1, 0, new Float32Array( 2 ), 1, 0 );
	* // returns <Float32Array>[ -13.0, -1.0 ]
	*/
	mul: typeof mul;
}

/**
* Base (i.e., lower-level) single-precision complex number functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
