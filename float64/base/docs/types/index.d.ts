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

import add = require( './../../../../float64/base/add' );
import assert = require( './../../../../float64/base/assert' );
import mul = require( './../../../../float64/base/mul' );
import muladd = require( './../../../../float64/base/mul-add' );
import scale = require( './../../../../float64/base/scale' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Adds two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( './../../../../float64/ctor' );
	* var real = require( './../../../../float64/real' );
	* var imag = require( './../../../../float64/imag' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var out = ns.add( z, z );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 10.0
	*
	* var im = imag( out );
	* // returns 6.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = ns.add.assign( 5.0, 3.0, 5.0, 3.0, out, 1, 0 );
	* // returns <Float64Array>[ 10.0, 6.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var z1 = new Float64Array( [ 5.0, 3.0 ] );
	* var z2 = new Float64Array( [ 5.0, 3.0 ] );
	*
	* var out = ns.add.strided( z1, 1, 0, z2, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ 10.0, 6.0 ]
	*/
	add: typeof add;

	/**
	* Base (i.e., lower-level) double-precision complex number assertion functions.
	*/
	assert: typeof assert;

	/**
	* Multiplies two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( './../../../../float64/ctor' );
	* var real = require( './../../../../float64/real' );
	* var imag = require( './../../../../float64/imag' );
	*
	* var z1 = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var z2 = new Complex128( -2.0, 1.0 );
	* // returns <Complex128>
	*
	* var out = ns.mul( z1, z2 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns -13.0
	*
	* var im = imag( out );
	* // returns -1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = ns.mul.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
	* // returns <Float64Array>[ -13.0, -1.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var z1 = new Float64Array( [ 5.0, 3.0 ] );
	* var z2 = new Float64Array( [ -2.0, 1.0 ] );
	*
	* var out = ns.mul.strided( z1, 1, 0, z2, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ -13.0, -1.0 ]
	*/
	mul: typeof mul;

	/**
	* Performs a multiply-add operation involving three double-precision complex floating-point numbers.
	*
	* @param alpha - complex number
	* @param x - complex number
	* @param y - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( './../../../../float64/ctor' );
	* var real = require( './../../../../float64/real' );
	* var imag = require( './../../../../float64/imag' );
	*
	* var z1 = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var z2 = new Complex128( -2.0, 1.0 );
	* // returns <Complex128>
	*
	* var z3 = new Complex128( 7.0, -8.0 );
	* // returns <Complex128>
	*
	* var out = ns.muladd( z1, z2, z3 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns -6.0
	*
	* var im = imag( out );
	* // returns -9.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = ns.muladd.assign( 5.0, 3.0, -2.0, 1.0, 7.0, -8.0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ -6.0, -9.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var alpha = new Float64Array( [ 5.0, 3.0 ] );
	* var x = new Float64Array( [ -2.0, 1.0 ] );
	* var y = new Float64Array( [ 7.0, -8.0 ] );
	*
	* var out = ns.muladd.strided( alpha, 1, 0, x, 1, 0, y, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ -6.0, -9.0 ]
	*/
	muladd: typeof muladd;

	/**
	* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.
	*
	* @param alpha - scalar constant
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( './../../../../float64/ctor' );
	* var real = require( './../../../../float64/real' );
	* var imag = require( './../../../../float64/imag' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var out = ns.scale( 5.0, z );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 25.0
	*
	* var im = imag( out );
	* // returns 15.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = ns.scale.assign( 5.0, 5.0, 3.0, out, 1, 0 );
	* // returns <Float64Array>[ 25.0, 15.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var z = new Float64Array( [ 5.0, 3.0 ] );
	*
	* var out = ns.scale.strided( 5.0, z, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ 25.0, 15.0 ]
	*/
	scale: typeof scale;
}

/**
* Base (i.e., lower-level) double-precision complex number functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
