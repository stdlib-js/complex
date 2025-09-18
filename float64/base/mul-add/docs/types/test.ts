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

import Complex128 = require( './../../../../../float64/ctor' );
import muladd = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	muladd( z, z, z ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	muladd( true, z, z ); // $ExpectError
	muladd( false, z, z ); // $ExpectError
	muladd( null, z, z ); // $ExpectError
	muladd( undefined, z, z ); // $ExpectError
	muladd( '5', z, z ); // $ExpectError
	muladd( [], z, z ); // $ExpectError
	muladd( {}, z, z ); // $ExpectError
	muladd( ( x: number ): number => x, z, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	muladd( z, true, z ); // $ExpectError
	muladd( z, false, z ); // $ExpectError
	muladd( z, null, z ); // $ExpectError
	muladd( z, undefined, z ); // $ExpectError
	muladd( z, '5', z ); // $ExpectError
	muladd( z, [], z ); // $ExpectError
	muladd( z, {}, z ); // $ExpectError
	muladd( z, ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	muladd( z, z, true ); // $ExpectError
	muladd( z, z, false ); // $ExpectError
	muladd( z, z, null ); // $ExpectError
	muladd( z, z, undefined ); // $ExpectError
	muladd( z, z, '5' ); // $ExpectError
	muladd( z, z, [] ); // $ExpectError
	muladd( z, z, {} ); // $ExpectError
	muladd( z, z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex128( 1.0, 1.0 );

	muladd(); // $ExpectError
	muladd( z ); // $ExpectError
	muladd( z, z ); // $ExpectError
	muladd( z, z, z, z ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	muladd.assign( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
	muladd.assign( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	muladd.assign( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( true, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( false, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( null, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( undefined, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( '5', 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( [], 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( {}, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( ( x: number ): number => x, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( 1.0, true, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, false, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, null, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, undefined, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, '5', 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, [], 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, {}, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, ( x: number ): number => x, 3.0, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( 1.0, 2.0, true, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, false, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, null, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, undefined, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, '5', 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, [], 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, {}, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, ( x: number ): number => x, 4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( 1.0, 2.0, 3.0, true, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, false, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, null, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, undefined, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, '5', 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, [], 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, {}, 5.0, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, ( x: number ): number => x, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( 1.0, 2.0, 3.0, 4.0, true, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, false, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, null, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, undefined, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, '5', 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, [], 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, {}, 6.0, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, ( x: number ): number => x, 6.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, true, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, false, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, null, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, undefined, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, '5', out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, [], out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, {}, out, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a seventh argument which is not a collection...
{
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 1, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, true, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, false, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, null, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, undefined, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, '5', 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, [ '5' ], 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, {}, 1, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an eighth argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, true, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, false, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, null, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, undefined, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, '5', 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, [], 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, {}, 0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a ninth argument which is not a number...
{
	const out = new Float64Array( 2 );

	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, true ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, false ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, null ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, undefined ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, '5' ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, [] ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, {} ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = new Float64Array( 2 );

	muladd.assign(); // $ExpectError
	muladd.assign( 1.0 ); // $ExpectError
	muladd.assign( 1.0, 2.0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1 ); // $ExpectError
	muladd.assign( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, out, 1, 0, {} ); // $ExpectError
}

// Attached to the main export is a `strided` method which returns a collection...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `strided` method is provided a first argument which is not a collection...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( true, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( false, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( null, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( undefined, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( '5', 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( [ '5' ], 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( {}, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( ( x: number ): number => x, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a second argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, true, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, false, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, null, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, undefined, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, '5', 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, [], 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, {}, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, ( x: number ): number => x, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a third argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, true, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, false, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, null, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, undefined, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, '5', z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, [], z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, {}, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, ( x: number ): number => x, z2, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fourth argument which is not a collection...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, true, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, false, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, null, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, undefined, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, '5', 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, [ '5' ], 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, {}, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, ( x: number ): number => x, 1, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fifth argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, true, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, false, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, null, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, undefined, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, '5', 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, [], 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, {}, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, ( x: number ): number => x, 0, z3, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a sixth argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, 1, true, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, false, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, null, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, undefined, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, '5', z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, [], z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, {}, z3, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, ( x: number ): number => x, z3, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a seventh argument which is not a collection...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z3.length );

	muladd.strided( z1, 1, 0, z2, 1, 0, true, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, false, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, null, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, '5', 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, [ '5' ], 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, {}, 1, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided an eighth argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, 1, 0, z3, true, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, false, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, null, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, undefined, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, '5', 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, [], 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, {}, 0, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a ninth argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, true, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, false, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, null, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, undefined, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, '5', out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, [], out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, {}, out, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a tenth argument which is not a collection...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, 1, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, true, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, false, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, null, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, undefined, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, '5', 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, [ '5' ], 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, {}, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided an eleventh argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, true, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, false, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, null, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, undefined, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, '5', 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, [], 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, {}, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a twelfth argument which is not a number...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, true ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, false ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, null ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, undefined ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, '5' ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, [] ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, {} ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided an unsupported number of arguments...
{
	const z1 = new Float64Array( 2 );
	const z2 = new Float64Array( z1.length );
	const z3 = new Float64Array( z2.length );
	const out = new Float64Array( z2.length );

	muladd.strided(); // $ExpectError
	muladd.strided( z1 ); // $ExpectError
	muladd.strided( z1, 1 ); // $ExpectError
	muladd.strided( z1, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1 ); // $ExpectError
	muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0, {} ); // $ExpectError
}
