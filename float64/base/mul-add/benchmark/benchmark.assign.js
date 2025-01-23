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

var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var muladd = require( './../lib' );


// VARIABLES //

var options = {
	'dtype': 'float64'
};


// MAIN //

bench( pkg+':assign', function benchmark( b ) {
	var out;
	var re;
	var im;
	var N;
	var i;
	var j;
	var k;

	N = 100;
	re = uniform( N, -500.0, 500.0, options );
	im = uniform( N, -500.0, 500.0, options );

	out = new Float64Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % N;
		k = ( i+1 ) % N;
		out = muladd.assign( re[ j ], im[ j ], re[ k ], im[ k ], re[ k ], im[ k ], out, 1, 0 ); // eslint-disable-line max-len
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnan( out[ 0 ] ) || isnan( out[ 1 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
