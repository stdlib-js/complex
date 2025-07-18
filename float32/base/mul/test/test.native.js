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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var Complex64 = require( './../../../../float32/ctor' );
var realf = require( './../../../../float32/real' );
var imagf = require( './../../../../float32/imag' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var mul = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mul instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mul, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies two complex numbers', opts, function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex64( 5.0, 3.0 );
	z2 = new Complex64( -2.0, 1.0 );

	v = mul( z1, z2 );

	t.strictEqual( realf( v ), -13.0, 'returns expected value' );
	t.strictEqual( imagf( v ), -1.0, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', opts, function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex64( NaN, 3.0 );
	z2 = new Complex64( -2.0, 1.0 );

	v = mul( z1, z2 );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	z1 = new Complex64( 5.0, 3.0 );
	z2 = new Complex64( NaN, 1.0 );

	v = mul( z1, z2 );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	z1 = new Complex64( NaN, 3.0 );
	z2 = new Complex64( NaN, 1.0 );

	v = mul( z1, z2 );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	z1 = new Complex64( 5.0, NaN );
	z2 = new Complex64( -2.0, 1.0 );

	v = mul( z1, z2 );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	z1 = new Complex64( 5.0, 3.0 );
	z2 = new Complex64( -2.0, NaN );

	v = mul( z1, z2 );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	z1 = new Complex64( 5.0, NaN );
	z2 = new Complex64( -2.0, NaN );

	v = mul( z1, z2 );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	z1 = new Complex64( NaN, NaN );
	z2 = new Complex64( NaN, NaN );

	v = mul( z1, z2 );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	t.end();
});
