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

import Complex64 = require( './../../../../../float32/ctor' );
import scale = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	scale( 5.0, z ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const z = new Complex64( 1.0, 1.0 );

	scale( true, z ); // $ExpectError
	scale( false, z ); // $ExpectError
	scale( null, z ); // $ExpectError
	scale( undefined, z ); // $ExpectError
	scale( '5', z ); // $ExpectError
	scale( [], z ); // $ExpectError
	scale( {}, z ); // $ExpectError
	scale( ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	scale( 5.0, true ); // $ExpectError
	scale( 5.0, false ); // $ExpectError
	scale( 5.0, null ); // $ExpectError
	scale( 5.0, undefined ); // $ExpectError
	scale( 5.0, '5' ); // $ExpectError
	scale( 5.0, [] ); // $ExpectError
	scale( 5.0, {} ); // $ExpectError
	scale( 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 1.0 );

	scale(); // $ExpectError
	scale( 5.0 ); // $ExpectError
	scale( 5.0, z, z ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	scale.assign( 5.0, 1.0, 1.0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	scale.assign( 5.0, 1.0, 1.0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	scale.assign( 5.0, 1.0, 1.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = new Float32Array( 2 );

	scale.assign( true, 1.0, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( false, 1.0, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( null, 1.0, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( undefined, 1.0, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( '5', 1.0, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( [], 1.0, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( {}, 1.0, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( ( x: number ): number => x, 1.0, 2.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = new Float32Array( 2 );

	scale.assign( 5.0, true, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, false, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, null, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, undefined, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, '5', 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, [], 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, {}, 2.0, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, ( x: number ): number => x, 2.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = new Float32Array( 2 );

	scale.assign( 5.0, 1.0, true, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, 1.0, false, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, 1.0, null, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, 1.0, undefined, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, 1.0, '5', out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, 1.0, [], out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, 1.0, {}, out, 1, 0 ); // $ExpectError
	scale.assign( 5.0, 1.0, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a collection...
{
	scale.assign( 1.0, 2.0, 3.0, 1, 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, true, 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, false, 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, null, 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, undefined, 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, '5', 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, [ '5' ], 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, {}, 1, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = new Float32Array( 2 );

	scale.assign( 1.0, 2.0, 3.0, out, true, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, false, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, null, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, undefined, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, '5', 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, [], 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, {}, 0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const out = new Float32Array( 2 );

	scale.assign( 1.0, 2.0, 3.0, out, 1, true ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, false ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, null ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, undefined ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, '5' ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, [] ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, {} ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = new Float32Array( 2 );

	scale.assign(); // $ExpectError
	scale.assign( 1.0 ); // $ExpectError
	scale.assign( 1.0, 2.0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1 ); // $ExpectError
	scale.assign( 1.0, 2.0, 3.0, out, 1, 0, {} ); // $ExpectError
}

// Attached to the main export is a `strided` method which returns a collection...
{
	const z1 = new Float32Array( 2 );

	scale.strided( 5.0, z1, 1, 0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	scale.strided( 5.0, z1, 1, 0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	scale.strided( 5.0, z1, 1, 0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `strided` method is provided a first argument which is not a number...
{
	const z1 = new Float32Array( 2 );
	const out = new Float32Array( z1.length );

	scale.strided( true, z1, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( false, z1, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( null, z1, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( undefined, z1, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( '5', z1, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( [ '5' ], z1, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( {}, z1, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( ( x: number ): number => x, z1, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a second argument which is not a collection...
{
	const z1 = new Float32Array( 2 );
	const out = new Float32Array( z1.length );

	scale.strided( 5.0, true, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, false, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, null, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, '5', 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, [ '5' ], 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, {}, 1, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a third argument which is not a number...
{
	const z1 = new Float32Array( 2 );
	const out = new Float32Array( z1.length );

	scale.strided( 5.0, z1, true, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, false, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, null, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, undefined, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, '5', 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, [], 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, {}, 0, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fourth argument which is not a number...
{
	const z1 = new Float32Array( 2 );
	const out = new Float32Array( 2 );

	scale.strided( 5.0, z1, 1, true, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, false, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, null, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, undefined, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, '5', out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, [], out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, {}, out, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fifth argument which is not a collection...
{
	const z1 = new Float32Array( 2 );

	scale.strided( 5.0, z1, 1, 0, true, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, false, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, null, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, undefined, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, '5', 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, [ '5' ], 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, {}, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a sixth argument which is not a number...
{
	const z1 = new Float32Array( 2 );
	const out = new Float32Array( z1.length );

	scale.strided( 5.0, z1, 1, 0, out, true, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, false, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, null, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, undefined, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, '5', 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, [], 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, {}, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a seventh argument which is not a number...
{
	const z1 = new Float32Array( 2 );
	const out = new Float32Array( z1.length );

	scale.strided( 5.0, z1, 1, 0, out, 1, true ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, false ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, null ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, undefined ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, '5' ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, [] ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, {} ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided an unsupported number of arguments...
{
	const z1 = new Float32Array( 2 );
	const out = new Float32Array( z1.length );

	scale.strided(); // $ExpectError
	scale.strided( 5.0 ); // $ExpectError
	scale.strided( 5.0, z1 ); // $ExpectError
	scale.strided( 5.0, z1, 1 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1 ); // $ExpectError
	scale.strided( 5.0, z1, 1, 0, out, 1, 0, {} ); // $ExpectError
}
