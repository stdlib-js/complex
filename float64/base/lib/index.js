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
* @name add
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/add}
*/
setReadOnly( ns, 'add', require( './../../../float64/base/add' ) );

/**
* @name assert
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/complex/float64/base/assert}
*/
setReadOnly( ns, 'assert', require( './../../../float64/base/assert' ) );

/**
* @name mul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/mul}
*/
setReadOnly( ns, 'mul', require( './../../../float64/base/mul' ) );

/**
* @name muladd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/mul-add}
*/
setReadOnly( ns, 'muladd', require( './../../../float64/base/mul-add' ) );

/**
* @name scale
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/scale}
*/
setReadOnly( ns, 'scale', require( './../../../float64/base/scale' ) );


// EXPORTS //

module.exports = ns;
