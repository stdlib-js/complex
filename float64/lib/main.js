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

// MODULES //

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var format = require( '@stdlib/string/format' );
var toStr = require( './tostring.js' );
var toJSON = require( './tojson.js' );


// MAIN //

/**
* 128-bit complex number constructor.
*
* @constructor
* @param {number} real - real component
* @param {number} imag - imaginary component
* @throws {TypeError} must invoke using the `new` keyword
* @throws {TypeError} real component must be a number
* @throws {TypeError} imaginary component must be a number
* @returns {Complex128} 128-bit complex number
*
* @example
* var z = new Complex128( 5.0, 3.0 );
* // returns <Complex128>
*/
function Complex128( real, imag ) {
	if ( !( this instanceof Complex128 ) ) {
		throw new TypeError( 'invalid invocation. Constructor must be called with the `new` keyword.' );
	}
	if ( !isNumber( real ) ) {
		throw new TypeError( format( 'invalid argument. Real component must be a number. Value: `%s`.', real ) );
	}
	if ( !isNumber( imag ) ) {
		throw new TypeError( format( 'invalid argument. Imaginary component must be a number. Value: `%s`.', imag ) );
	}
	defineProperty( this, 're', {
		'configurable': false,
		'enumerable': true,
		'writable': false,
		'value': real
	});
	defineProperty( this, 'im', {
		'configurable': false,
		'enumerable': true,
		'writable': false,
		'value': imag
	});
	return this;
}

/**
* Size (in bytes) of each component.
*
* @name BYTES_PER_ELEMENT
* @memberof Complex128
* @type {integer}
* @returns {integer} size of each component
*
* @example
* var nbytes = Complex128.BYTES_PER_ELEMENT;
* // returns 8
*/
setReadOnly( Complex128, 'BYTES_PER_ELEMENT', 8 );

/**
* Size (in bytes) of each component.
*
* @name BYTES_PER_ELEMENT
* @memberof Complex128.prototype
* @type {integer}
* @returns {integer} size of each component
*
* @example
* var z = new Complex128( 5.0, 3.0 );
*
* var nbytes = z.BYTES_PER_ELEMENT;
* // returns 8
*/
setReadOnly( Complex128.prototype, 'BYTES_PER_ELEMENT', 8 );

/**
* Length (in bytes) of a complex number.
*
* @name byteLength
* @memberof Complex128.prototype
* @type {integer}
* @returns {integer} byte length
*
* @example
* var z = new Complex128( 5.0, 3.0 );
*
* var nbytes = z.byteLength;
* // returns 16
*/
setReadOnly( Complex128.prototype, 'byteLength', 16 );

/**
* Serializes a complex number as a string.
*
* @name toString
* @memberof Complex128.prototype
* @type {Function}
* @returns {string} serialized complex number
*
* @example
* var z = new Complex128( 5.0, 3.0 );
*
* var str = z.toString();
* // returns '5 + 3i'
*/
setReadOnly( Complex128.prototype, 'toString', toStr );

/**
* Serializes a complex number as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `Complex128` instance.
*
*
* @name toJSON
* @memberof Complex128.prototype
* @type {Function}
* @returns {Object} serialized complex number
*
* @example
* var z = new Complex128( 5.0, 3.0 );
*
* var obj = z.toJSON();
* // returns { 'type': 'Complex128', 're': 5.0, 'im': 3.0 }
*/
setReadOnly( Complex128.prototype, 'toJSON', toJSON );


// EXPORTS //

module.exports = Complex128;
