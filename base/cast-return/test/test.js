/**
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex64 = require( './../../../float32/ctor' );
var realf = require( './../../../float32/real' );
var imagf = require( './../../../float32/imag' );
var castReturn = require( './../lib' );


// FUNCTIONS //

function naryReal() {
	var re;
	var i;

	re = 0.0;
	for ( i = 0; i < arguments.length; i++ ) {
		re += arguments[ i ];
	}
	return re;
}

function naryComplex() {
	var re;
	var i;

	re = 0.0;
	for ( i = 0; i < arguments.length; i++ ) {
		re += arguments[ i ];
	}
	return new Complex64( re, 0.0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof castReturn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a first argument which is a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			castReturn( value, 2, Complex64 );
		};
	}
});

tape( 'the function throws an error if not provided a second argument which is a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			castReturn( naryReal, value, Complex64 );
		};
	}
});

tape( 'the function throws an error if not provided a third argument which is a constructor function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			castReturn( naryReal, 2, value );
		};
	}
});

tape( 'the function returns a function which casts return values to complex numbers (nullary)', function test( t ) {
	var f;
	var v;

	f = castReturn( naryReal, 0, Complex64 );
	v = f();

	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	f = castReturn( naryComplex, 0, Complex64 );
	v = f();

	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which casts return values to complex numbers (unary)', function test( t ) {
	var f;
	var v;

	f = castReturn( naryReal, 1, Complex64 );

	v = f( 1.0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	f = castReturn( naryComplex, 1, Complex64 );

	v = f( 1.0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which casts return values to complex numbers (binary)', function test( t ) {
	var f;
	var v;

	f = castReturn( naryReal, 2, Complex64 );

	v = f( 1.0, 1.0 );
	t.strictEqual( realf( v ), 2.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	f = castReturn( naryComplex, 2, Complex64 );

	v = f( 1.0, 1.0 );
	t.strictEqual( realf( v ), 2.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which casts return values to complex numbers (ternary)', function test( t ) {
	var f;
	var v;

	f = castReturn( naryReal, 3, Complex64 );

	v = f( 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	f = castReturn( naryComplex, 3, Complex64 );

	v = f( 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which casts return values to complex numbers (quaternary)', function test( t ) {
	var f;
	var v;

	f = castReturn( naryReal, 4, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	f = castReturn( naryComplex, 4, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which casts return values to complex numbers (quinary)', function test( t ) {
	var f;
	var v;

	f = castReturn( naryReal, 5, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	f = castReturn( naryComplex, 5, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which casts return values to complex numbers (nary)', function test( t ) {
	var f;
	var v;

	f = castReturn( naryReal, 6, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	f = castReturn( naryComplex, 6, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});
