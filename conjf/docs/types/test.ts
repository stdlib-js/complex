/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import Complex64 = require( './../../../float32/ctor' );
import conjf = require( './index' );


// TESTS //

// The function returns a complex number...
{
	conjf( new Complex64( 5.0, 3.0 ) ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided an argument that is not a complex number...
{
	conjf( 'abc' ); // $ExpectError
	conjf( 123 ); // $ExpectError
	conjf( true ); // $ExpectError
	conjf( false ); // $ExpectError
	conjf( [] ); // $ExpectError
	conjf( {} ); // $ExpectError
	conjf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	conjf(); // $ExpectError
	conjf( new Complex64( 5.0, 3.0 ), 123 ); // $ExpectError
}
