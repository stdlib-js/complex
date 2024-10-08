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

import base = require( './../../../float64/base' );
import conj = require( './../../../float64/conj' );
import Complex128 = require( './../../../float64/ctor' );
import imag = require( './../../../float64/imag' );
import parseComplex128 = require( './../../../float64/parse' );
import real = require( './../../../float64/real' );
import reim = require( './../../../float64/reim' );
import reviveComplex128 = require( './../../../float64/reviver' );

/**
* Interface describing the `float64` namespace.
*/
interface Namespace {
	/**
	* Base (i.e., lower-level) double-precision complex number functions.
	*/
	base: typeof base;

	/**
	* Returns the complex conjugate of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns complex conjugate
	*
	* @example
	* var Complex128 = require( './../../../float64/ctor' );
	* var real = require( './../../../float64/real' );
	* var imag = require( './../../../float64/imag' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var v = ns.conj( z );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 5.0
	*
	* var im = imag( v );
	* // returns -3.0
	*/
	conj: typeof conj;

	/**
	* 128-bit complex number.
	*/
	Complex128: typeof Complex128;

	/**
	* Returns the imaginary component of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns imaginary component
	*
	* @example
	* var Complex128 = require( './../../../float64/ctor' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var im = ns.imag( z );
	* // returns 3.0
	*/
	imag: typeof imag;

	/**
	* Parse a string representation of a 128-bit complex number.
	*
	* @param str - string representation of a complex number
	* @throws must provide a string recognized as a complex number
	* @returns Complex128 instance
	*
	* @example
	* var str = '5 + 3i';
	*
	* var z = ns.parseComplex128( str );
	* // returns <Complex128>
	*/
	parseComplex128: typeof parseComplex128;

	/**
	* Returns the real component of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real component
	*
	* @example
	* var Complex128 = require( './../../../float64/ctor' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var re = ns.real( z );
	* // returns 5.0
	*/
	real: typeof real;

	/**
	* Returns the real and imaginary components of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real and imaginary components
	*
	* @example
	* var Complex128 = require( './../../../float64/ctor' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var out = ns.reim( z );
	* // returns <Float64Array>[ 5.0, 3.0 ]
	*/
	reim: typeof reim;

	/**
	* Revives a JSON-serialized 128-bit complex number.
	*
	* @param key - key
	* @param value - value
	* @returns value or 128-bit complex number
	*
	* @example
	* var parseJSON = require( '@stdlib/utils/parse-json' );
	*
	* var str = '{"type":"Complex128","re":5,"im":3}';
	*
	* var z = parseJSON( str, ns.reviveComplex128 );
	* // returns <Complex128>
	*/
	reviveComplex128: typeof reviveComplex128;
}

/**
* Double-precision complex number functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
