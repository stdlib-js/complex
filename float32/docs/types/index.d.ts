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

import base = require( './../../../float32/base' );
import conj = require( './../../../float32/conj' );
import Complex64 = require( './../../../float32/ctor' );
import imag = require( './../../../float32/imag' );
import parseComplex64 = require( './../../../float32/parse' );
import real = require( './../../../float32/real' );
import reim = require( './../../../float32/reim' );
import reviveComplex64 = require( './../../../float32/reviver' );

/**
* Interface describing the `float32` namespace.
*/
interface Namespace {
	/**
	* Base (i.e., lower-level) single-precision complex number functions.
	*/
	base: typeof base;

	/**
	* Returns the complex conjugate of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns complex conjugate
	*
	* @example
	* var Complex64 = require( './../../../float32/ctor' );
	* var realf = require( './../../../float32/real' );
	* var imagf = require( './../../../float32/imag' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var v = ns.conj( z );
	* // returns <Complex64>
	*
	* var re = realf( v );
	* // returns 5.0
	*
	* var im = imagf( v );
	* // returns -3.0
	*/
	conj: typeof conj;

	/**
	* 64-bit complex number.
	*/
	Complex64: typeof Complex64;

	/**
	* Returns the imaginary component of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns imaginary component
	*
	* @example
	* var Complex64 = require( './../../../float32/ctor' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var im = ns.imag( z );
	* // returns 3.0
	*/
	imag: typeof imag;

	/**
	* Parse a string representation of a 64-bit complex number.
	*
	* @param str - string representation of a complex number
	* @throws must provide a string recognized as a complex number
	* @returns Complex64 instance
	*
	* @example
	* var str = '5 + 3i';
	*
	* var z = ns.parseComplex64( str );
	* // returns <Complex64>
	*/
	parseComplex64: typeof parseComplex64;

	/**
	* Returns the real component of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real component
	*
	* @example
	* var Complex64 = require( './../../../float32/ctor' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var re = ns.real( z );
	* // returns 5.0
	*/
	real: typeof real;

	/**
	* Returns the real and imaginary components of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real and imaginary components
	*
	* @example
	* var Complex64 = require( './../../../float32/ctor' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var out = ns.reim( z );
	* // returns <Float32Array>[ 5.0, 3.0 ]
	*/
	reim: typeof reim;

	/**
	* Revives a JSON-serialized 64-bit complex number.
	*
	* @param key - key
	* @param  value - value
	* @returns value or 64-bit complex number
	*
	* @example
	* var parseJSON = require( '@stdlib/utils/parse-json' );
	*
	* var str = '{"type":"Complex64","re":5,"im":3}';
	*
	* var z = parseJSON( str, ns.reviveComplex64 );
	* // returns <Complex64>
	*/
	reviveComplex64: typeof reviveComplex64;
}

/**
* Single-precision complex number functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
