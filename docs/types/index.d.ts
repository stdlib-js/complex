/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import base = require( './../../base' );
import complex = require( './../../cmplx' );
import conj = require( './../../conj' );
import conjf = require( './../../conjf' );
import complexCtors = require( './../../ctors' );
import complexDataType = require( './../../dtype' );
import complexDataTypes = require( './../../dtypes' );
import Complex64 = require( './../../float32/ctor' );
import Complex128 = require( './../../float64/ctor' );
import imag = require( './../../imag' );
import imagf = require( './../../imagf' );
import complexPromotionRules = require( './../../promotion-rules' );
import real = require( './../../real' );
import realf = require( './../../realf' );
import reim = require( './../../reim' );
import reimf = require( './../../reimf' );
import reviveComplex = require( './../../reviver' );
import reviveComplex64 = require( './../../float32/reviver' );
import reviveComplex128 = require( './../../float64/reviver' );

/**
* Interface describing the `complex` namespace.
*/
interface Namespace {
	/**
	* Base (i.e., lower-level) complex number functions.
	*/
	base: typeof base;

	/**
	* Creates a complex number.
	*
	* @param real - real component
	* @param imag - imaginary component
	* @param dtype - data type (default: 'float64')
	* @returns complex number
	*
	* @example
	* var z = ns.complex( 5.0, 3.0, 'float64' );
	* // returns <Complex128>
	*/
	complex: typeof complex;

	/**
	* Returns the complex conjugate of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns complex conjugate
	*
	* @example
	* var Complex128 = require( './../../float64/ctor' );
	* var real = require( './../../real' );
	* var imag = require( './../../imag' );
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
	* Returns the complex conjugate of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns complex conjugate
	*
	* @example
	* var Complex64 = require( './../../float32/ctor' );
	* var realf = require( './../../realf' );
	* var imagf = require( './../../imagf' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var v = ns.conjf( z );
	* // returns <Complex64>
	*
	* var re = realf( v );
	* // returns 5.0
	*
	* var im = imagf( v );
	* // returns -3.0
	*/
	conjf: typeof conjf;

	/**
	* Returns a complex number constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.complexCtors( 'complex128' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.complexCtors( 'float' );
	* // returns null
	*/
	complexCtors: typeof complexCtors;

	/**
	* Returns the data type of a complex number.
	*
	* ## Notes
	*
	* -   If provided an argument having an unknown or unsupported type, the function returns `null`.
	*
	* @param value - input value
	* @returns data type
	*
	* @example
	* var Complex64 = require( './../../float32/ctor' );
	*
	* var dt = ns.complexDataType( new Complex64( 1.0, 2.0 ) );
	* // returns 'complex64'
	*
	* var dt = ns.complexDataType( 'beep' );
	* // returns null
	*/
	complexDataType: typeof complexDataType;

	/**
	* Returns a list of complex number data types.
	*
	* @returns list of complex number data types
	*
	* @example
	* var list = ns.complexDataTypes();
	* // e.g., returns [ 'complex64', 'complex128' ]
	*/
	complexDataTypes: typeof complexDataTypes;

	/**
	* 64-bit complex number.
	*/
	Complex64: typeof Complex64;

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
	* var Complex128 = require( './../../float64/ctor' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var im = ns.imag( z );
	* // returns 3.0
	*/
	imag: typeof imag;

	/**
	* Returns the imaginary component of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns imaginary component
	*
	* @example
	* var Complex64 = require( './../../float32/ctor' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var im = ns.imagf( z );
	* // returns 3.0
	*/
	imagf: typeof imagf;

	/**
	* Returns a type promotion table displaying complex number data types with the smallest size and closest "kind" to which data types can be safely cast.
	*
	* @param dtype1 - data type
	* @param dtype2 - data type
	* @returns promotion rule table
	*
	* @example
	* var table = ns.complexPromotionRules();
	* // returns {...}
	*/
	complexPromotionRules: typeof complexPromotionRules;

	/**
	* Returns the real component of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real component
	*
	* @example
	* var Complex128 = require( './../../float64/ctor' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var re = ns.real( z );
	* // returns 5.0
	*/
	real: typeof real;

	/**
	* Returns the real component of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real component
	*
	* @example
	* var Complex64 = require( './../../float32/ctor' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var re = ns.realf( z );
	* // returns 5.0
	*/
	realf: typeof realf;

	/**
	* Returns the real and imaginary components of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real and imaginary components
	*
	* @example
	* var Complex128 = require( './../../float64/ctor' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var out = ns.reim( z );
	* // returns <Float64Array>[ 5.0, 3.0 ]
	*/
	reim: typeof reim;

	/**
	* Returns the real and imaginary components of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns real and imaginary components
	*
	* @example
	* var Complex64 = require( './../../float32/ctor' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var out = ns.reimf( z );
	* // returns <Float32Array>[ 5.0, 3.0 ]
	*/
	reimf: typeof reimf;

	/**
	* Revives a JSON-serialized complex number.
	*
	* @param key - key
	* @param value - value
	* @returns value or complex number
	*
	* @example
	* var parseJSON = require( '@stdlib/utils/parse-json' );
	*
	* var str = '{"type":"Complex128","re":5,"im":3}';
	*
	* var z = parseJSON( str, ns.reviveComplex );
	* // returns <Complex128>
	*/
	reviveComplex: typeof reviveComplex;

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
* Complex numbers.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
