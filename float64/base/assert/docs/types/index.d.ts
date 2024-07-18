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

import isEqual = require( './../../../../../float64/base/assert/is-equal' );

/**
* Interface describing the namespace.
*/
interface Namespace {
	/**
	* TODO
	*/
	isEqual: typeof isEqual;
}

/**
* Base (i.e., lower-level) double-precision complex floating-point number assertion functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
