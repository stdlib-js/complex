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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var Complex128 = require( './../../../float64/ctor' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var isSameComplex128 = require( '@stdlib/assert/is-same-complex128' );
var isNan = require( '@stdlib/math/base/assert/is-nan' );
var real = require( './../../../float64/real' );
var imag = require( './../../../float64/imag' );
var parseComplex128 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof parseComplex128, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error for inputs not recognized as complex numbers', function test( t ) {
	t.throws( function invalidInput() {
		parseComplex128( 'beep boop' );
	}, Error, 'throws an Error for invalid input' );
	t.throws( function invalidType() {
		parseComplex128( true );
	}, TypeError, 'throws TypeError for non string input type' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number', function test( t ) {
	var z;
	var w;

	z = new Complex128( 5.0, 12.0 );
	w = parseComplex128( '5 + 12i' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number (negative values)', function test( t ) {
	var z;
	var w;

	z = new Complex128( -2.5, -4.0 );
	w = parseComplex128( '-2.5 - 4i' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number (only real part)', function test( t ) {
	var z;
	var w;

	z = new Complex128( 3.0, 0.0 );
	w = parseComplex128( '3' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number (only imaginary part)', function test( t ) {
	var z;
	var w;

	z = new Complex128( 0.0, 8.5 );
	w = parseComplex128( '8.5i' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number (only real part, negative)', function test( t ) {
	var z;
	var w;

	z = new Complex128( -3.753, 0.0 );
	w = parseComplex128( '-3.753' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number (only imaginary part, negative)', function test( t ) {
	var z;
	var w;

	z = new Complex128( 0.0, -0.3 );
	w = parseComplex128( '-0.3i' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function correctly parses a string representation of a complex number with no space (a+ib format)', function test( t ) {
	var z;
	var w;

	z = new Complex128( 5.0, 3.0 );
	w = parseComplex128( '5+3i' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function correctly parses a string representation of a complex number with unconventional spacing (a+ ib format)', function test( t ) {
	var z;
	var w;

	z = new Complex128( 5.0, 3.0 );
	w = parseComplex128( '5+ 3i' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number with NaNs', function test( t ) {
	var w = parseComplex128( 'NaN + NaNi' );

	t.ok( isComplex128(w), 'is an instance' );
	t.ok( isNan(real( w )), 'has expected property value' );
	t.ok( isNan(imag( w )), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number with Infinity', function test( t ) {
	var z;
	var w;

	z = new Complex128( PINF, NINF );
	w = parseComplex128( 'Infinity - Infinityi' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});

tape( 'the function will parse a string representation of a complex number in scientific notation', function test( t ) {
	var z;
	var w;

	z = new Complex128( 1e3, 4.1e-3 );
	w = parseComplex128( '1E3 + 4.1e-3i' );

	t.ok( isComplex128( w ), 'is an instance' );
	t.ok( isSameComplex128( w, z ), 'has expected property value' );

	t.end();
});
