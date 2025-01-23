/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128 } from '@stdlib/types/complex';
import { Collection, NumericArray } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number>;

/**
* Output array.
*/
type OutputArray = NumericArray | Collection<number>;

/**
* Interface for performing a multiply-add operation involving three double-precision complex floating-point numbers.
*/
interface MulAdd {
	/**
	* Performs a multiply-add operation involving three double-precision complex floating-point numbers.
	*
	* @param alpha - complex number
	* @param x - complex number
	* @param y - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( './../../../../../float64/ctor' );
	* var real = require( './../../../../../float64/real' );
	* var imag = require( './../../../../../float64/imag' );
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
	* var out = muladd( z1, z2, z3 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns -6.0
	*
	* var im = imag( out );
	* // returns -9.0
	*/
	( alpha: Complex128, x: Complex128, y: Complex128 ): Complex128;

	/**
	* Performs a multiply-add operation involving three double-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.
	*
	* @param ar - real component of the first complex number
	* @param ai - imaginary component of the first complex number
	* @param xr - real component of the second complex number
	* @param xi - imaginary component of the second complex number
	* @param yr - real component of the third complex number
	* @param yi - imaginary component of the third complex number
	* @param out - output array
	* @param strideOut - stride length
	* @param offsetOut - starting index
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = muladd.assign( 5.0, 3.0, -2.0, 1.0, 7.0, -8.0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ -6.0, -9.0 ]
	*/
	assign<T extends OutputArray>( ar: number, ai: number, xr: number, xi: number, yr: number, yi: number, out: T, strideOut: number, offsetOut: number ): T;

	/**
	* Multiplies two double-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.
	*
	* @param alpha - first complex number view
	* @param strideA - stride length for `alpha`
	* @param offsetA - starting index for `alpha`
	* @param x - second complex number view
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - third complex number view
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var alpha = new Float64Array( [ 5.0, 3.0 ] );
	* var x = new Float64Array( [ -2.0, 1.0 ] );
	* var y = new Float64Array( [ 7.0, -8.0 ] );
	*
	* var out = muladd.strided( alpha, 1, 0, x, 1, 0, y, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ -6.0, -9.0 ]
	*/
	strided<T extends InputArray, U extends InputArray, V extends InputArray, W extends OutputArray>( alpha: T, strideA: number, offsetA: number, x: U, strideX: number, offsetX: number, y: V, strideY: number, offsetY: number, out: W, strideOut: number, offsetOut: number ): W;
}

/**
* Performs a multiply-add operation involving three double-precision complex floating-point numbers.
*
* @param alpha - complex number
* @param x - complex number
* @param y - complex number
* @returns result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
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
* var out = muladd( z1, z2, z3 );
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
* var out = muladd.assign( 5.0, 3.0, -2.0, 1.0, 7.0, -8.0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ -6.0, -9.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var alpha = new Float64Array( [ 5.0, 3.0 ] );
* var x = new Float64Array( [ -2.0, 1.0 ] );
* var y = new Float64Array( [ 7.0, -8.0 ] );
*
* var out = muladd.strided( alpha, 1, 0, x, 1, 0, y, 1, 0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ -6.0, -9.0 ]
*/
declare var muladd: MulAdd;


// EXPORTS //

export = muladd;
