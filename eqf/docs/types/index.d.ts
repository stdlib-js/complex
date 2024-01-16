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

import Complex64 = require( './../../../float32' );

/**
* Tests whether two single-precision complex floating-point numbers are equal.
*
* @param z1 - first complex number
* @param z2 - second complex number
* @returns boolean indicating if both complex numbers are equal
*
* @example
* var Complex64 = require( '@stdlib/complex/float32' );
*
* var z1 = new Complex64( 5.0, 3.0 );
* var z2 = new Complex64( 5.0, 3.0 );
*
* var v = eqf( z1, z2 );
* // returns true
*/
declare function eqf( z1: Complex64, z2: Complex64 ): boolean;


// EXPORTS //

export = eqf;
