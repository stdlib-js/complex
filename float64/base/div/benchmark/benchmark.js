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

var bench = require( '@stdlib/bench' );
var Complex128 = require( './../../../../float64/ctor' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var uniform = require( '@stdlib/random/base/uniform' );
var real = require( './../../../../float64/real' );
var imag = require( './../../../../float64/imag' );
var abs = require( '@stdlib/math/base/special/abs' );
var pkg = require( './../package.json' ).name;
var cdiv = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var y;
	var i;
	var z;

	values = [
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) ),
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = values[ i % values.length ];
		y = cdiv( z, z );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex128( y ) ) {
		b.fail( 'should return a Complex128' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::smiths_algorithm', function benchmark( b ) {
	var values;
	var y;
	var i;
	var z;

	values = [
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) ),
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = values[ i % values.length ];
		y = cdiv( z, z );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex128( y ) ) {
		b.fail( 'should return a Complex128' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function cdiv( z1, z2 ) {
		var re1;
		var re2;
		var im1;
		var im2;
		var a;
		var b;

		re1 = real( z1 );
		re2 = real( z2 );
		im1 = imag( z1 );
		im2 = imag( z2 );

		if ( abs( re2 ) >= abs( im2 ) ) {
			a = im2 / re2;
			b = re2 + ( im2 * a );
			return new Complex128( ( re1 + (im1 * a) )/b, (im1 - (re1*a) )/b );
		}
		a = re2 / im2;
		b = ( re2 * a ) + im2;
		return new Complex128( ( (re1*a) + im1 )/b, ( (im1*a) - re1 )/b );
	}
});
