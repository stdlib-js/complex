/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import Complex64 = require( './../../../../../../float32/ctor' );

/**
* Tests whether two single-precision complex floating-point numbers are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function returns `false` if either input value has a `NaN` real or imaginary component.
* -   The function does not distinguish between `-0` and `+0`, treating them as equal.
*
* @param z1 - first complex number
* @param z2 - second complex number
* @param maxULP - maximum allowed ULP difference
* @returns boolean indicating whether two single-precision complex floating-point numbers are approximately equal within a specified number of ULPs
*
* @example
* var EPS = require( '@stdlib/constants/float32/eps' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z1 = new Complex64( 1.0, 3.0 );
* var z2 = new Complex64( 1.0+EPS, 3.0 );
*
* var bool = isAlmostEqualf( z1, z2, 0 );
* // returns false
*
* bool = isAlmostEqualf( z1, z2, 1 );
* // returns true
*/
declare function isAlmostEqualf( z1: Complex64, z2: Complex64, maxULP: number ): boolean;


// EXPORTS //

export = isAlmostEqualf;
