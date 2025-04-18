/**
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var Complex64 = require( './../../../../float32/ctor' );
var real = require( './../../../../float32/real' );
var imag = require( './../../../../float32/imag' );
var cidentityf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cidentityf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the identity function when provided a finite number', function test( t ) {
	var v;

	v = cidentityf( new Complex64( -2.0, 1.0 ) );
	t.equal( real( v ), -2.0, 'returns expected value' );
	t.equal( imag( v ), 1.0, 'returns expected value' );

	v = cidentityf( new Complex64( 3.0, -2.0 ) );
	t.equal( real( v ), 3.0, 'returns expected value' );
	t.equal( imag( v ), -2.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the identity function when provided +-zero', function test( t ) {
	var v;

	v = cidentityf( new Complex64( -0.0, -0.0 ) );
	t.equal( isNegativeZerof( real( v ) ), true, 'returns expected value' );
	t.equal( isNegativeZerof( imag( v ) ), true, 'returns expected value' );

	v = cidentityf( new Complex64( 0.0, 0.0 ) );
	t.equal( isPositiveZerof( real( v ) ), true, 'returns expected value' );
	t.equal( isPositiveZerof( imag( v ) ), true, 'returns expected value' );

	v = cidentityf( new Complex64( -0.0, 0.0 ) );
	t.equal( isNegativeZerof( real( v ) ), true, 'returns expected value' );
	t.equal( isPositiveZerof( imag( v ) ), true, 'returns expected value' );

	v = cidentityf( new Complex64( 0.0, -0.0 ) );
	t.equal( isPositiveZerof( real( v ) ), true, 'returns expected value' );
	t.equal( isNegativeZerof( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the identity function when provided +-infinity', function test( t ) {
	var v;

	v = cidentityf( new Complex64( PINF, PINF ) );
	t.equal( real( v ), PINF, 'returns expected value' );
	t.equal( imag( v ), PINF, 'returns expected value' );

	v = cidentityf( new Complex64( NINF, NINF ) );
	t.equal( real( v ), NINF, 'returns expected value' );
	t.equal( imag( v ), NINF, 'returns expected value' );

	v = cidentityf( new Complex64( NINF, PINF ) );
	t.equal( real( v ), NINF, 'returns expected value' );
	t.equal( imag( v ), PINF, 'returns expected value' );

	v = cidentityf( new Complex64( PINF, NINF ) );
	t.equal( real( v ), PINF, 'returns expected value' );
	t.equal( imag( v ), NINF, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the identity function when provided `NaN`', function test( t ) {
	var v;

	v = cidentityf( new Complex64( NaN, NaN ) );
	t.equal( isnanf( real( v ) ), true, 'returns expected value' );
	t.equal( isnanf( imag( v ) ), true, 'returns expected value' );

	v = cidentityf( new Complex64( 1.0, NaN ) );
	t.equal( real( v ), 1.0, 'returns expected value' );
	t.equal( isnanf( imag( v ) ), true, 'returns expected value' );

	v = cidentityf( new Complex64( NaN, 1.0 ) );
	t.equal( isnanf( real( v ) ), true, 'returns expected value' );
	t.equal( imag( v ), 1.0, 'returns expected value' );

	t.end();
});
