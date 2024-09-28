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
import ctors = require( './../../ctors' );
import dtype = require( './../../dtype' );
import dtypes = require( './../../dtypes' );
import float32 = require( './../../float32' );
import float64 = require( './../../float64' );
import promotionRules = require( './../../promotion-rules' );
import reviveComplex = require( './../../reviver' );

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
	* Returns a complex number constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.ctors( 'complex128' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.ctors( 'float' );
	* // returns null
	*/
	ctors: typeof ctors;

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
	* var dt = ns.dtype( new Complex64( 1.0, 2.0 ) );
	* // returns 'complex64'
	*
	* var dt = ns.dtype( 'beep' );
	* // returns null
	*/
	dtype: typeof dtype;

	/**
	* Returns a list of complex number data types.
	*
	* @returns list of complex number data types
	*
	* @example
	* var list = ns.dtypes();
	* // e.g., returns [ 'complex64', 'complex128' ]
	*/
	dtypes: typeof dtypes;

	/**
	* Single-precision complex number functions.
	*/
	float32: typeof float32;

	/**
	* Double-precision complex number functions.
	*/
	float64: typeof float64;

	/**
	* Returns a type promotion table displaying complex number data types with the smallest size and closest "kind" to which data types can be safely cast.
	*
	* @param dtype1 - data type
	* @param dtype2 - data type
	* @returns promotion rule table
	*
	* @example
	* var table = ns.promotionRules();
	* // returns {...}
	*/
	promotionRules: typeof promotionRules;

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
}

/**
* Complex numbers.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
