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

import Complex128 = require( './../../../../../../float64/ctor' );
import isAlmostEqual = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const z1 = new Complex128( 5.0, 3.0 );
	const z2 = new Complex128( 5.0, 3.0 );

	isAlmostEqual( z1, z2, 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument that is not a complex number...
{
	const z2 = new Complex128( 5.0, 3.0 );

	isAlmostEqual( 'abc', z2, 1 ); // $ExpectError
	isAlmostEqual( 123, z2, 1 ); // $ExpectError
	isAlmostEqual( true, z2, 1 ); // $ExpectError
	isAlmostEqual( false, z2, 1 ); // $ExpectError
	isAlmostEqual( [], z2, 1 ); // $ExpectError
	isAlmostEqual( {}, z2, 1 ); // $ExpectError
	isAlmostEqual( ( x: number ): number => x, z2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a complex number...
{
	const z1 = new Complex128( 5.0, 3.0 );

	isAlmostEqual( z1, 'abc', 1 ); // $ExpectError
	isAlmostEqual( z1, 123, 1 ); // $ExpectError
	isAlmostEqual( z1, true, 1 ); // $ExpectError
	isAlmostEqual( z1, false, 1 ); // $ExpectError
	isAlmostEqual( z1, [], 1 ); // $ExpectError
	isAlmostEqual( z1, {}, 1 ); // $ExpectError
	isAlmostEqual( z1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a number...
{
	const z1 = new Complex128( 5.0, 3.0 );
	const z2 = new Complex128( 5.0, 3.0 );

	isAlmostEqual( z1, z2, 'abc' ); // $ExpectError
	isAlmostEqual( z1, z2, true ); // $ExpectError
	isAlmostEqual( z1, z2, false ); // $ExpectError
	isAlmostEqual( z1, z2, null ); // $ExpectError
	isAlmostEqual( z1, z2, void 0 ); // $ExpectError
	isAlmostEqual( z1, z2, [] ); // $ExpectError
	isAlmostEqual( z1, z2, {} ); // $ExpectError
	isAlmostEqual( z1, z2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z1 = new Complex128( 5.0, 3.0 );
	const z2 = new Complex128( 5.0, 3.0 );

	isAlmostEqual(); // $ExpectError
	isAlmostEqual( z1 ); // $ExpectError
	isAlmostEqual( z1, z2 ); // $ExpectError
	isAlmostEqual( z1, z2, 1, 1 ); // $ExpectError
}
