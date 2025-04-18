/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
import cnegf = require( './index' );


// TESTS //

// The function returns a single-precision complex floating-point number...
{
	const z = new Complex64( 1.0, 1.0 );

	cnegf( z ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided an argument which is not a complex number...
{
	cnegf( true ); // $ExpectError
	cnegf( false ); // $ExpectError
	cnegf( null ); // $ExpectError
	cnegf( undefined ); // $ExpectError
	cnegf( '5' ); // $ExpectError
	cnegf( [] ); // $ExpectError
	cnegf( {} ); // $ExpectError
	cnegf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 1.0 );

	cnegf(); // $ExpectError
	cnegf( z, z ); // $ExpectError
	cnegf( z, z, z ); // $ExpectError
}
