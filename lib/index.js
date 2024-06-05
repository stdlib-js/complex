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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/complex/base}
*/
setReadOnly( ns, 'base', require( './../base' ) );

/**
* @name complex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/cmplx}
*/
setReadOnly( ns, 'complex', require( './../cmplx' ) );

/**
* @name conj
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/conj}
*/
setReadOnly( ns, 'conj', require( './../conj' ) );

/**
* @name conjf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/conjf}
*/
setReadOnly( ns, 'conjf', require( './../conjf' ) );

/**
* @name complexCtors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/ctors}
*/
setReadOnly( ns, 'complexCtors', require( './../ctors' ) );

/**
* @name complexDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/dtype}
*/
setReadOnly( ns, 'complexDataType', require( './../dtype' ) );

/**
* @name complexDataTypes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/dtypes}
*/
setReadOnly( ns, 'complexDataTypes', require( './../dtypes' ) );

/**
* @name Complex64
* @memberof ns
* @readonly
* @constructor
* @see {@link module:@stdlib/complex/float32/ctor}
*/
setReadOnly( ns, 'Complex64', require( './../float32/ctor' ) );

/**
* @name Complex128
* @memberof ns
* @readonly
* @constructor
* @see {@link module:@stdlib/complex/float64/ctor}
*/
setReadOnly( ns, 'Complex128', require( './../float64/ctor' ) );

/**
* @name imag
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/imag}
*/
setReadOnly( ns, 'imag', require( './../imag' ) );

/**
* @name imagf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/imagf}
*/
setReadOnly( ns, 'imagf', require( './../imagf' ) );

/**
* @name complexPromotionRules
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/promotion-rules}
*/
setReadOnly( ns, 'complexPromotionRules', require( './../promotion-rules' ) );

/**
* @name real
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/real}
*/
setReadOnly( ns, 'real', require( './../real' ) );

/**
* @name realf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/realf}
*/
setReadOnly( ns, 'realf', require( './../realf' ) );

/**
* @name reim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reim}
*/
setReadOnly( ns, 'reim', require( './../reim' ) );

/**
* @name reimf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reimf}
*/
setReadOnly( ns, 'reimf', require( './../reimf' ) );

/**
* @name reviveComplex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reviver}
*/
setReadOnly( ns, 'reviveComplex', require( './../reviver' ) );

/**
* @name reviveComplex64
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/reviver}
*/
setReadOnly( ns, 'reviveComplex64', require( './../float32/reviver' ) );

/**
* @name reviveComplex128
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/reviver}
*/
setReadOnly( ns, 'reviveComplex128', require( './../float64/reviver' ) );


// EXPORTS //

module.exports = ns;
