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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var mul = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mul, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies two complex numbers', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float64Array( 2 );
	v = mul( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );

	expected = new Float64Array( [ -13.0, -1.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 4 );
	v = mul( 5.0, 3.0, -2.0, 1.0, out, 2, 0 );

	expected = new Float64Array( [ -13.0, 0.0, -1.0, 0.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 4 );
	v = mul( 5.0, 3.0, -2.0, 1.0, out, 2, 1 );

	expected = new Float64Array( [ 0.0, -13.0, 0.0, -1.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 4 );
	v = mul( 5.0, 3.0, -2.0, 1.0, out, -2, 3 );

	expected = new Float64Array( [ 0.0, -1.0, 0.0, -13.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = mul( NaN, 3.0, -2.0, 1.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = mul( 5.0, 3.0, NaN, 1.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = mul( NaN, 3.0, NaN, 1.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = mul( 5.0, NaN, -2.0, 1.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = mul( 5.0, 3.0, -2.0, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = mul( 5.0, NaN, -2.0, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = mul( NaN, NaN, NaN, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});
