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

#include "stdlib/complex/float32/base/assert/is_equal.h"
#include "stdlib/complex/float32/reim.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdbool.h>

/**
* Tests whether two single-precision complex floating-point numbers are equal.
*
* @param z1    first single-precision complex floating-point number
* @param z2    second single-precision complex floating-point number
* @return      boolean indicating if both complex numbers are equal
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include <stdbool.h>
*
* stdlib_complex64_t z1 = stdlib_complex64( 5.0, 2.0 );
* stdlib_complex64_t z2 = stdlib_complex64( 5.0, 2.0 );
*
* bool v = stdlib_base_complex64_is_equal( z1, z2 );
*/
bool stdlib_base_complex64_is_equal( const stdlib_complex64_t z1, const stdlib_complex64_t z2 ) {
	float re1;
	float re2;
	float im1;
	float im2;
	stdlib_complex64_reim( z1, &re1, &im1 );
	stdlib_complex64_reim( z2, &re2, &im2 );
	return ( re1 == re2 && im1 == im2 );
}
