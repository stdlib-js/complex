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
var Complex64 = require( './../../../float32/ctor' );
var realf = require( './../../../float32/real' );
var imagf = require( './../../../float32/imag' );
var wrap = require( './../lib' );


// FUNCTIONS //

function nary() {
	var re;
	var im;
	var z;
	var i;

	re = 0.0;
	im = 0.0;
	for ( i = 0; i < arguments.length; i++ ) {
		z = arguments[ i ];
		re += realf( z );
		im += imagf( z );
	}
	return new Complex64( re, im );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wrap, 'function', 'main export is a function' );
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
			wrap( value, 2, Complex64 );
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
			wrap( nary, value, Complex64 );
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
			wrap( nary, 2, value );
		};
	}
});

tape( 'the function returns a function which accepts real and complex number arguments (nullary)', function test( t ) {
	var f;
	var v;

	f = wrap( nary, 0, Complex64 );
	v = f();

	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which accepts real and complex number arguments (unary)', function test( t ) {
	var f;
	var v;
	var z;

	f = wrap( nary, 1, Complex64 );

	v = f( 1.0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which accepts real and complex number arguments (binary)', function test( t ) {
	var f;
	var v;
	var z;

	f = wrap( nary, 2, Complex64 );

	v = f( 1.0, 1.0 );
	t.strictEqual( realf( v ), 2.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z );
	t.strictEqual( realf( v ), 2.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0 );
	t.strictEqual( realf( v ), 2.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z );
	t.strictEqual( realf( v ), 2.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which accepts real and complex number arguments (ternary)', function test( t ) {
	var f;
	var v;
	var z;

	f = wrap( nary, 3, Complex64 );

	v = f( 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, z );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, 1.0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, 1.0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, 1.0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, z );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, z );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 3.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which accepts real and complex number arguments (quaternary)', function test( t ) {
	var f;
	var v;
	var z;

	f = wrap( nary, 4, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, 1.0, z );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, z, 1.0 );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, 1.0, 1.0 );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, 1.0 );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 3.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, 1.0, z );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 3.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, z, z );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 3.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, z, z );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 3.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, z );
	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which accepts real and complex number arguments (quinary)', function test( t ) {
	var f;
	var v;
	var z;

	f = wrap( nary, 5, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, 1.0, 1.0, z );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, 1.0, z, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, z, 1.0, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, z, 1.0 );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, 1.0, z );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, 1.0, z, z );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, z, z, z );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, z, z, z );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, z, z );
	t.strictEqual( realf( v ), 5.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which accepts real and complex number arguments (nary)', function test( t ) {
	var f;
	var v;
	var z;

	f = wrap( nary, 6, Complex64 );

	v = f( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, 1.0, 1.0, 1.0, z );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, 1.0, 1.0, z, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, 1.0, z, 1.0, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, 1.0, z, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 1.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, z, z, 1.0 );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, z, 1.0, z );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, 1.0, z, z );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, 1.0, z, z, z );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, 1.0, z, z, z, z );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( 1.0, z, z, z, z, z );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	z = new Complex64( 1.0, 1.0 );
	v = f( z, z, z, z, z, z );
	t.strictEqual( realf( v ), 6.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 6.0, 'returns expected value' );

	t.end();
});
