/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Complex128 = require( './../../../../float64/ctor' );
var real = require( './../../../../float64/real' );
var imag = require( './../../../../float64/imag' );
var csub = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof csub, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function subtracts two complex numbers', function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( -2.0, 1.0 );

	v = csub( z1, z2 );

	t.strictEqual( real( v ), 7.0, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, the resulting component is `NaN`', function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex128( NaN, 3.0 );
	z2 = new Complex128( -2.0, 1.0 );

	v = csub( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( NaN, 1.0 );

	v = csub( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );

	z1 = new Complex128( NaN, 3.0 );
	z2 = new Complex128( NaN, 1.0 );

	v = csub( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );

	z1 = new Complex128( 5.0, NaN );
	z2 = new Complex128( -2.0, 1.0 );

	v = csub( z1, z2 );
	t.strictEqual( real( v ), 7.0, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( -2.0, NaN );

	v = csub( z1, z2 );
	t.strictEqual( real( v ), 7.0, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, NaN );
	z2 = new Complex128( -2.0, NaN );

	v = csub( z1, z2 );
	t.strictEqual( real( v ), 7.0, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( NaN, NaN );
	z2 = new Complex128( NaN, NaN );

	v = csub( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});
