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

import Complex128 = require( './../../../../../float64/ctor' );
import cidentity = require( './index' );


// TESTS //

// The function returns a complex number...
{
	cidentity( new Complex128( 1.0, 2.0 ) ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a value other than a complex number...
{
	cidentity( true ); // $ExpectError
	cidentity( false ); // $ExpectError
	cidentity( null ); // $ExpectError
	cidentity( undefined ); // $ExpectError
	cidentity( '5' ); // $ExpectError
	cidentity( [] ); // $ExpectError
	cidentity( {} ); // $ExpectError
	cidentity( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cidentity(); // $ExpectError
}
