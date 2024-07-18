/**
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
* @see {@link module:@stdlib/complex/float64/base}
*/
setReadOnly( ns, 'base', require( './../../float64/base' ) );

/**
* @name conj
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/conj}
*/
setReadOnly( ns, 'conj', require( './../../float64/conj' ) );

/**
* @name Complex128
* @memberof ns
* @readonly
* @constructor
* @see {@link module:@stdlib/complex/float64/ctor}
*/
setReadOnly( ns, 'Complex128', require( './../../float64/ctor' ) );

/**
* @name imag
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/imag}
*/
setReadOnly( ns, 'imag', require( './../../float64/imag' ) );

/**
* @name parseComplex128
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/parse}
*/
setReadOnly( ns, 'parseComplex128', require( './../../float64/parse' ) );

/**
* @name real
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/real}
*/
setReadOnly( ns, 'real', require( './../../float64/real' ) );

/**
* @name reim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/reim}
*/
setReadOnly( ns, 'reim', require( './../../float64/reim' ) );

/**
* @name reviveComplex128
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/reviver}
*/
setReadOnly( ns, 'reviveComplex128', require( './../../float64/reviver' ) );


// EXPORTS //

module.exports = ns;
