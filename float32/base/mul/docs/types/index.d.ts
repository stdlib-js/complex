/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { Complex64 } from '@stdlib/types/complex';
import { Collection, NumericArray } from '@stdlib/types/array';

/**
* Interface for multiplying two single-precision complex floating-point numbers.
*/
interface Mul {
	/**
	* Multiplies two single-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( './../../../../../float32/ctor' );
	* var realf = require( './../../../../../float32/real' );
	* var imagf = require( './../../../../../float32/imag' );
	*
	* var z1 = new Complex64( 5.0, 3.0 );
	* // returns <Complex64>
	*
	* var z2 = new Complex64( -2.0, 1.0 );
	* // returns <Complex64>
	*
	* var out = mul( z1, z2 );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns -13.0
	*
	* var im = imagf( out );
	* // returns -1.0
	*/
	( z1: Complex64, z2: Complex64 ): Complex64;

	/**
	* Multiplies two single-precision complex floating-point numbers and assigns results to a provided output array.
	*
	* @param re1 - real component of the first complex number
	* @param im1 - imaginary component of the first complex number
	* @param re2 - real component of the second complex number
	* @param im2 - imaginary component of the second complex number
	* @param out - output array
	* @param strideOut - stride length
	* @param offsetOut - starting index
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	* var v = mul.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
	* // returns <Float32Array>[ -13.0, -1.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*/
	assign<T extends NumericArray | Collection<number>>( re1: number, im1: number, re2: number, im2: number, out: T, strideOut: number, offsetOut: number ): T;

	/**
	* Multiplies two single-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.
	*
	* @param z1 - first complex number view
	* @param strideZ1 - stride length for `z1`
	* @param offsetZ1 - starting index for `z1`
	* @param z2 - second complex number view
	* @param strideZ2 - stride length for `z2`
	* @param offsetZ2 - starting index for `z2`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var z1 = new Float32Array( [ 5.0, 3.0 ] );
	* var z2 = new Float32Array( [ -2.0, 1.0 ] );
	*
	* var out = mul.strided( z1, 1, 0, z2, 1, 0, new Float32Array( 2 ), 1, 0 );
	* // returns <Float32Array>[ -13.0, -1.0 ]
	*/
	strided<T extends NumericArray | Collection<number>, U extends NumericArray | Collection<number>, V extends NumericArray | Collection<number>>( z1: T, strideZ1: number, offsetZ1: number, z2: U, strideZ2: number, offsetZ2: number, out: V, strideOut: number, offsetOut: number ): V;
}

/**
* Multiplies two single-precision complex floating-point numbers.
*
* @param z1 - complex number
* @param z2 - complex number
* @returns result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var z1 = new Complex64( 5.0, 3.0 );
* // returns <Complex64>
*
* var z2 = new Complex64( -2.0, 1.0 );
* // returns <Complex64>
*
* var out = mul( z1, z2 );
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
* var v = mul.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
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
* var out = mul.strided( z1, 1, 0, z2, 1, 0, new Float32Array( 2 ), 1, 0 );
* // returns <Float32Array>[ -13.0, -1.0 ]
*/
declare var mul: Mul;


// EXPORTS //

export = mul;
