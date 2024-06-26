/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import Complex128 = require( './../../../float64/ctor' );
import Complex64 = require( './../../../float32/ctor' );
import dtype = require( './index' );


// TESTS //

// The function returns a data type or null..
{
	dtype( new Complex128( 1.0, 2.0 ) ); // $ExpectType "complex128"
	dtype( new Complex64( 1.0, 2.0 ) ); // $ExpectType "complex64"
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dtype(); // $ExpectError
	dtype( new Complex128( 1.0, 2.0 ), 3 ); // $ExpectError
}
