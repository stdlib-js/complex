/**
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex128 = require( './../../../../../float64/ctor' );
var EPS = require( '@stdlib/constants/float64/eps' );
var isAlmostEqual = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAlmostEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN` as either real or imaginary component', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( NaN, 3.14 );
	z2 = new Complex128( 5.0, 3.14 );
	t.strictEqual( isAlmostEqual( z1, z2, 1 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 1 ), false, 'returns expected value' );

	z2 = new Complex128( 5.0, NaN );
	t.strictEqual( isAlmostEqual( z1, z2, 1 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 1 ), false, 'returns expected value' );

	z1 = new Complex128( NaN, NaN );
	z2 = new Complex128( NaN, NaN );
	t.strictEqual( isAlmostEqual( z1, z2, 1 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 1 ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided two complex double-precision floating-point numbers which are the same value irrespective of the specified number of ULPs', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( 5.0, 3.0 );
	t.strictEqual( isAlmostEqual( z1, z1, 0 ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( 5.0, 3.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 1 ), true, 'returns expected value' );

	z1 = new Complex128( -5.0, -3.0 );
	z2 = new Complex128( -5.0, -3.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 0 ), true, 'returns expected value' );

	z1 = new Complex128( 0.0, 0.0 );
	z2 = new Complex128( 0.0, 0.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided two complex double-precision floating-point numbers which are approximately equal within a specified number of ULPs', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( 1.0, 3.0 );
	z2 = new Complex128( 1.0+EPS, 3.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 1 ), true, 'returns expected value' );

	z2 = new Complex128( 1.0+EPS+EPS, 3.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 2 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 2 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided two complex double-precision floating-point numbers which are not approximately equal within a specified number of ULPs', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( 1.0, 3.0 );
	z2 = new Complex128( 1.0+EPS, 3.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 0 ), false, 'returns expected value' );

	z2 = new Complex128( 1.0+EPS+EPS, 3.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 1 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 1 ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if signed zeros are provided as real or imaginary components irrespective of the specified number of ULPs', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( 0.0, 0.0 );
	z2 = new Complex128( -0.0, -0.0 );
	t.strictEqual( isAlmostEqual( z1, z2, 0 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 0 ), true, 'returns expected value' );

	t.strictEqual( isAlmostEqual( z1, z2, 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqual( z2, z1, 1 ), true, 'returns expected value' );

	t.end();
});
