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

var bench = require( '@stdlib/bench' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var Complex64 = require( './../../../float32/ctor' );
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var conj = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new Complex64( randu(), randu() ),
		new Complex64( randu(), randu() ),
		new Complex64( randu(), randu() )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = conj( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex64( v ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
