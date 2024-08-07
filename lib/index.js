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
* @name ctors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/ctors}
*/
setReadOnly( ns, 'ctors', require( './../ctors' ) );

/**
* @name dtype
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/dtype}
*/
setReadOnly( ns, 'dtype', require( './../dtype' ) );

/**
* @name dtypes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/dtypes}
*/
setReadOnly( ns, 'dtypes', require( './../dtypes' ) );

/**
* @name float32
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/complex/float32}
*/
setReadOnly( ns, 'float32', require( './../float32' ) );

/**
* @name float64
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/complex/float64}
*/
setReadOnly( ns, 'float64', require( './../float64' ) );

/**
* @name promotionRules
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/promotion-rules}
*/
setReadOnly( ns, 'promotionRules', require( './../promotion-rules' ) );

/**
* @name reviveComplex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/reviver}
*/
setReadOnly( ns, 'reviveComplex', require( './../reviver' ) );


// EXPORTS //

module.exports = ns;
