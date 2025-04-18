/**
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var Complex64 = require( './../../../../float32/ctor' );
var realf = require( './../../../../float32/real' );
var imagf = require( './../../../../float32/imag' );
var cnegf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cnegf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function negates real and imaginary components', function test( t ) {
	var actual;
	var z;

	z = new Complex64( 4.0, 7.0 );

	actual = cnegf( z );

	t.strictEqual( realf( actual ), -4.0, 'returns expected value' );
	t.strictEqual( imagf( actual ), -7.0, 'returns expected value' );

	z = new Complex64( -4.0, -7.0 );

	actual = cnegf( z );

	t.strictEqual( realf( actual ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( actual ), 7.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var actual;
	var z;

	z = new Complex64( NaN, NaN );

	actual = cnegf( z );

	t.strictEqual( isnanf( realf( actual ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( actual ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `-0`', function test( t ) {
	var actual;
	var z;

	z = new Complex64( -0.0, -0.0 );

	actual = cnegf( z );

	t.strictEqual( isPositiveZerof( realf( actual ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( imagf( actual ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `+0`', function test( t ) {
	var actual;
	var z;

	z = new Complex64( +0.0, +0.0 );

	actual = cnegf( z );

	t.strictEqual( isNegativeZerof( realf( actual ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( imagf( actual ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-infinity` if provided `+infinity`', function test( t ) {
	var actual;
	var z;

	z = new Complex64( PINF, PINF );

	actual = cnegf( z );

	t.strictEqual( realf( actual ), NINF, 'returns expected value' );
	t.strictEqual( imagf( actual ), NINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `-infinity`', function test( t ) {
	var actual;
	var z;

	z = new Complex64( NINF, NINF );

	actual = cnegf( z );

	t.strictEqual( realf( actual ), PINF, 'returns expected value' );
	t.strictEqual( imagf( actual ), PINF, 'returns expected value' );

	t.end();
});
