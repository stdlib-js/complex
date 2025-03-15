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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex128 = require( './../../../../../float64/ctor' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isEqual = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests whether two complex numbers are equal (finite)', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( 5.0, 3.0 );
	t.strictEqual( isEqual( z1, z1 ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( 5.0, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), true, 'returns expected value' );

	z1 = new Complex128( -5.0, 3.0 );
	z2 = new Complex128( 5.0, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( -5.0, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( 5.0, -3.0 );
	z2 = new Complex128( 5.0, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( 5.0, -3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether two complex numbers are equal (infinite)', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( PINF, NINF );
	t.strictEqual( isEqual( z1, z1 ), true, 'returns expected value' );

	z1 = new Complex128( PINF, NINF );
	z2 = new Complex128( PINF, NINF );
	t.strictEqual( isEqual( z1, z2 ), true, 'returns expected value' );

	z1 = new Complex128( NINF, 3.0 );
	z2 = new Complex128( PINF, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( PINF, 3.0 );
	z2 = new Complex128( NINF, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( PINF, -3.0 );
	z2 = new Complex128( PINF, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( PINF, 3.0 );
	z2 = new Complex128( PINF, -3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( 5.0, PINF );
	z2 = new Complex128( 5.0, NINF );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether two complex numbers are equal (NaNs)', function test( t ) {
	var z1;
	var z2;

	z1 = new Complex128( NaN, NaN );
	t.strictEqual( isEqual( z1, z1 ), false, 'returns expected value' );

	z1 = new Complex128( NaN, NaN );
	z2 = new Complex128( NaN, NaN );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( NaN, 3.0 );
	z2 = new Complex128( NaN, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( NaN, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( NaN, 3.0 );
	z2 = new Complex128( 5.0, 3.0 );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( 5.0, NaN );
	z2 = new Complex128( 5.0, NaN );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( 5.0, NaN );
	t.strictEqual( isEqual( z1, z2 ), false, 'returns expected value' );

	t.end();
});
