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

/* eslint-disable id-length */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var pow = require( '@stdlib/math/base/special/pow' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );
var Complex128 = require( './../../../../float64/ctor' );
var real = require( './../../../../float64/real' );
var imag = require( './../../../../float64/imag' );
var cdiv = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var componentScales1 = require( './fixtures/julia/component_scales1.json' );
var componentScales2 = require( './fixtures/julia/component_scales2.json' );
var imaginaryComponentScales = require( './fixtures/julia/imaginary_component_scales.json' );
var realComponentScales = require( './fixtures/julia/real_component_scales.json' );
var largeNegativeImaginaryComponents = require( './fixtures/julia/large_negative_imaginary_components.json' );
var largeNegativeRealComponents = require( './fixtures/julia/large_negative_real_components.json' );
var largePositiveImaginaryComponents = require( './fixtures/julia/large_positive_imaginary_components.json' );
var largePositiveRealComponents = require( './fixtures/julia/large_positive_real_components.json' );
var tinyNegativeImaginaryComponents = require( './fixtures/julia/tiny_negative_imaginary_components.json' );
var tinyNegativeRealComponents = require( './fixtures/julia/tiny_negative_real_components.json' );
var tinyPositiveImaginaryComponents = require( './fixtures/julia/tiny_positive_imaginary_components.json' );
var tinyPositiveRealComponents = require( './fixtures/julia/tiny_positive_real_components.json' );


// FUNCTIONS //

/**
* Compares the binary representations of two double-precision floating-point numbers and returns the first index of a differing bit. If all bits match, the function returns `-1`.
*
* TODO: revisit once ULP distance fcn is written
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {integer} index
*/
function bitdiff( a, b ) {
	var astr;
	var bstr;
	var i;

	astr = toBinaryString( a );
	bstr = toBinaryString( b );
	for ( i = 0; i < 64; i++ ) {
		if ( astr[ i ] !== bstr[ i ] ) {
			return i;
		}
	}
	return -1;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdiv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes a complex quotient (base behavior)', function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex128( 2.0, 4.0 );
	z2 = new Complex128( 1.0, 2.0 );

	v = cdiv( z1, z2 );

	t.strictEqual( real( v ), 2.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function computes a complex quotient (difficult cases)', function test( t ) {
	var idx;
	var re1;
	var im1;
	var re2;
	var im2;
	var z1;
	var z2;
	var q;

	// Note: test cases extracted from Figure 6 of https://arxiv.org/pdf/1210.4539.pdf.

	// Test case #1:
	z1 = new Complex128( 1.0, 1.0 );
	z2 = new Complex128( 1.0, pow( 2.0, 1023.0 ) );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), pow( 2.0, -1023.0 ) );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), -pow( 2.0, -1023.0 ) );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #2:
	z1 = new Complex128( 1.0, 1.0 );
	z2 = new Complex128( pow( 2.0, -1023.0 ), pow( 2.0, -1023.0 ) );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), pow( 2.0, 1023.0 ) );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), 0.0 );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #3:
	re1 = pow( 2.0, 1023.0 );
	im1 = pow( 2.0, -1023.0 );
	re2 = pow( 2.0, 677.0 );
	im2 = pow( 2.0, -677.0 );

	z1 = new Complex128( re1, im1 );
	z2 = new Complex128( re2, im2 );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), pow( 2.0, 346.0 ) );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), -pow( 2.0, -1008.0 ) );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #4:
	z1 = new Complex128( pow( 2.0, 1023.0 ), pow( 2.0, 1023.0 ) );
	z2 = new Complex128( 1.0, 1.0 );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), pow( 2.0, 1023.0 ) );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), 0.0 );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #5:
	re1 = pow( 2.0, 1020.0 );
	im1 = pow( 2.0, -844.0 );
	re2 = pow( 2.0, 656.0 );
	im2 = pow( 2.0, -780.0 );

	z1 = new Complex128( re1, im1 );
	z2 = new Complex128( re2, im2 );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), pow( 2.0, 364.0 ) );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), -pow( 2.0, -1072.0 ) );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #6:
	re1 = pow( 2.0, -71.0 );
	im1 = pow( 2.0, 1021.0 );
	re2 = pow( 2.0, 1001.0 );
	im2 = pow( 2.0, -323.0 );

	z1 = new Complex128( re1, im1 );
	z2 = new Complex128( re2, im2 );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), pow( 2.0, -1072.0 ) );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), pow( 2.0, 20.0 ) );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #7:
	re1 = pow( 2.0, -347.0 );
	im1 = pow( 2.0, -54.0 );
	re2 = pow( 2.0, -1037.0 );
	im2 = pow( 2.0, -1058.0 );

	z1 = new Complex128( re1, im1 );
	z2 = new Complex128( re2, im2 );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), 3.898125604559113300e289 );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), 8.174961907852353577e295 );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #8:
	re1 = pow( 2.0, -1074.0 );
	im1 = pow( 2.0, -1074.0 );
	re2 = pow( 2.0, -1073.0 );
	im2 = pow( 2.0, -1074.0 );

	z1 = new Complex128( re1, im1 );
	z2 = new Complex128( re2, im2 );

	q = cdiv( z1, z2 );

	/*
	* See section 3.6 in https://arxiv.org/pdf/1210.4539.pdf.
	*
	* ```text
	* real(q): 0011111111100011001100110011001100110011001100110011001100110100
	* 0.6:     0011111111100011001100110011001100110011001100110011001100110011
	* ```
	*
	* If we add
	*
	* ```text
	* 0000000000000000000000000000000000000000000000000000000000000001
	* ```
	*
	* to `0.6`, we get `real( q )`; thus, the result is 1 bit off.
	*/
	idx = bitdiff( real( q ), 0.6 );
	t.strictEqual( idx, 61, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), 0.2 );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #9:
	re1 = pow( 2.0, 1015.0 );
	im1 = pow( 2.0, -989.0 );
	re2 = pow( 2.0, 1023.0 );
	im2 = pow( 2.0, 1023.0 );

	z1 = new Complex128( re1, im1 );
	z2 = new Complex128( re2, im2 );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), 0.001953125 );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), -0.001953125 );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	// Test case #10:
	re1 = pow( 2.0, -622.0 );
	im1 = pow( 2.0, -1071.0 );
	re2 = pow( 2.0, -343.0 );
	im2 = pow( 2.0, -798.0 );

	z1 = new Complex128( re1, im1 );
	z2 = new Complex128( re2, im2 );

	q = cdiv( z1, z2 );

	idx = bitdiff( real( q ), 1.02951151789360578e-84 );
	t.strictEqual( idx, -1, 'real component has expected binary representation' );

	idx = bitdiff( imag( q ), 6.97145987515076231e-220 );
	t.strictEqual( idx, -1, 'imaginary component has expected binary representation' );

	t.end();
});

tape( 'the function computes a complex quotient (tested against fixtures)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = data.re1;
	im1 = data.im1;
	re2 = data.re2;
	im2 = data.im2;
	qre = data.qre;
	qim = data.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (different component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = componentScales1.re1;
	im1 = componentScales1.im1;
	re2 = componentScales1.re2;
	im2 = componentScales1.im2;
	qre = componentScales1.qre;
	qim = componentScales1.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (different component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = componentScales2.re1;
	im1 = componentScales2.im1;
	re2 = componentScales2.re2;
	im2 = componentScales2.im2;
	qre = componentScales2.qre;
	qim = componentScales2.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (different imaginary component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = imaginaryComponentScales.re1;
	im1 = imaginaryComponentScales.im1;
	re2 = imaginaryComponentScales.re2;
	im2 = imaginaryComponentScales.im2;
	qre = imaginaryComponentScales.qre;
	qim = imaginaryComponentScales.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (real imaginary component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = realComponentScales.re1;
	im1 = realComponentScales.im1;
	re2 = realComponentScales.re2;
	im2 = realComponentScales.im2;
	qre = realComponentScales.qre;
	qim = realComponentScales.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = largeNegativeImaginaryComponents.re1;
	im1 = largeNegativeImaginaryComponents.im1;
	re2 = largeNegativeImaginaryComponents.re2;
	im2 = largeNegativeImaginaryComponents.im2;
	qre = largeNegativeImaginaryComponents.qre;
	qim = largeNegativeImaginaryComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large negative real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = largeNegativeRealComponents.re1;
	im1 = largeNegativeRealComponents.im1;
	re2 = largeNegativeRealComponents.re2;
	im2 = largeNegativeRealComponents.im2;
	qre = largeNegativeRealComponents.qre;
	qim = largeNegativeRealComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = largePositiveImaginaryComponents.re1;
	im1 = largePositiveImaginaryComponents.im1;
	re2 = largePositiveImaginaryComponents.re2;
	im2 = largePositiveImaginaryComponents.im2;
	qre = largePositiveImaginaryComponents.qre;
	qim = largePositiveImaginaryComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large positive real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = largePositiveRealComponents.re1;
	im1 = largePositiveRealComponents.im1;
	re2 = largePositiveRealComponents.re2;
	im2 = largePositiveRealComponents.im2;
	qre = largePositiveRealComponents.qre;
	qim = largePositiveRealComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyNegativeImaginaryComponents.re1;
	im1 = tinyNegativeImaginaryComponents.im1;
	re2 = tinyNegativeImaginaryComponents.re2;
	im2 = tinyNegativeImaginaryComponents.im2;
	qre = tinyNegativeImaginaryComponents.qre;
	qim = tinyNegativeImaginaryComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny negative real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyNegativeRealComponents.re1;
	im1 = tinyNegativeRealComponents.im1;
	re2 = tinyNegativeRealComponents.re2;
	im2 = tinyNegativeRealComponents.im2;
	qre = tinyNegativeRealComponents.qre;
	qim = tinyNegativeRealComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyPositiveImaginaryComponents.re1;
	im1 = tinyPositiveImaginaryComponents.im1;
	re2 = tinyPositiveImaginaryComponents.re2;
	im2 = tinyPositiveImaginaryComponents.im2;
	qre = tinyPositiveImaginaryComponents.qre;
	qim = tinyPositiveImaginaryComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny positive real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyPositiveRealComponents.re1;
	im1 = tinyPositiveRealComponents.im1;
	re2 = tinyPositiveRealComponents.re2;
	im2 = tinyPositiveRealComponents.im2;
	qre = tinyPositiveRealComponents.qre;
	qim = tinyPositiveRealComponents.qim;

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Complex128( re1[ i ], im1[ i ] );
		z2 = new Complex128( re2[ i ], im2[ i ] );
		q = cdiv( z1, z2 );

		if ( real( q ) === qre[ i ] ) {
			t.strictEqual( real( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+real( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === qim[ i ] ) {
			t.strictEqual( imag( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+imag( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function handles large and small numbers', function test( t ) {
	var expected;
	var z1;
	var z2;
	var v;

	z1 = new Complex128( 1.0e308, 5.0e307 );
	z2 = new Complex128( 1.0, 0.5 );
	v = cdiv( z1, z2 );
	expected = [ 1.0e308, 0.0 ];

	t.strictEqual( real( v ), expected[ 0 ], 'returns expected values' );
	t.strictEqual( imag( v ), expected[ 1 ], 'returns expected values' );

	z1 = new Complex128( 1.0, 0.5 );
	z2 = new Complex128( 1.0e308, 5.0e307 );
	v = cdiv( z1, z2 );
	expected = [ 1.0e-308, 0.0 ];

	t.strictEqual( real( v ), expected[ 0 ], 'returns expected values' );
	t.strictEqual( imag( v ), expected[ 1 ], 'returns expected values' );

	z1 = new Complex128( 1.0e-304, 2.0e-304 );
	z2 = new Complex128( 1.0, 2.0 );
	v = cdiv( z1, z2 );
	expected = [ 1.0e-304, 0.0 ];

	t.strictEqual( real( v ), expected[ 0 ], 'returns expected values' );
	t.strictEqual( imag( v ), expected[ 1 ], 'returns expected values' );

	z1 = new Complex128( 1.0, 2.0 );
	z2 = new Complex128( 1.0e-304, 2.0e-304 );
	v = cdiv( z1, z2 );
	expected = [ 1.0e+304, 0.0 ];

	t.strictEqual( real( v ), expected[ 0 ], 'returns expected values' );
	t.strictEqual( imag( v ), expected[ 1 ], 'returns expected values' );

	z1 = new Complex128( 2.0, 4.0 );
	z2 = new Complex128( 0.0, 2.0 );
	v = cdiv( z1, z2 );
	expected = [ 2.0, -1.0 ];

	t.strictEqual( real( v ), expected[ 0 ], 'returns expected values' );
	t.strictEqual( imag( v ), expected[ 1 ], 'returns expected values' );

	z1 = new Complex128( 1.0e-180, 1.0e-180 );
	z2 = new Complex128( 1.0, 1.0e-180 );
	v = cdiv( z1, z2 );
	expected = [ 1.0e-180, 1.0e-180 ];

	t.strictEqual( real( v ), expected[ 0 ], 'returns expected values' );
	t.strictEqual( imag( v ), expected[ 1 ], 'returns expected values' );

	t.end();
});

tape( 'the function may overflow during complex division', function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex128( 1.0e308, 1.0e308 );
	z2 = new Complex128( 5.0e-324, 5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), PINF, 'real component is +infinity' );
	t.strictEqual( imag( v ), 0.0, 'imaginary component is 0' );

	z1 = new Complex128( 1.0e308, 1.0e308 );
	z2 = new Complex128( -5.0e-324, 5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), NINF, 'imaginary component is -infinity' );

	z1 = new Complex128( 1.0e308, -1.0e308 );
	z2 = new Complex128( 5.0e-324, 5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), NINF, 'imaginary component is -infinity' );

	z1 = new Complex128( -1.0e308, 1.0e308 );
	z2 = new Complex128( 5.0e-324, 5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), PINF, 'imaginary component is +infinity' );

	z1 = new Complex128( 1.0e308, 1.0e308 );
	z2 = new Complex128( 5.0e-324, -5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), PINF, 'imaginary component is +infinity' );

	z1 = new Complex128( -1.0e308, 1.0e308 );
	z2 = new Complex128( -5.0e-324, 5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), PINF, 'real component is +infinity' );
	t.strictEqual( imag( v ), 0.0, 'imaginary component is 0' );

	z1 = new Complex128( 1.0e308, -1.0e308 );
	z2 = new Complex128( 5.0e-324, -5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), PINF, 'real component is +infinity' );
	t.strictEqual( imag( v ), 0.0, 'imaginary component is 0' );

	z1 = new Complex128( 1.0e308, -1.0e308 );
	z2 = new Complex128( -5.0e-324, 5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), NINF, 'real component is -infinity' );
	t.strictEqual( imag( v ), 0.0, 'imaginary component is 0' );

	z1 = new Complex128( -1.0e308, 1.0e308 );
	z2 = new Complex128( 5.0e-324, -5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), NINF, 'real component is -infinity' );
	t.strictEqual( imag( v ), 0.0, 'imaginary component is 0' );

	z1 = new Complex128( -1.0e308, -1.0e308 );
	z2 = new Complex128( -5.0e-324, 5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), PINF, 'imaginary component is +infinity' );

	z1 = new Complex128( 1.0e308, -1.0e308 );
	z2 = new Complex128( -5.0e-324, -5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), PINF, 'imaginary component is +infinity' );

	z1 = new Complex128( -1.0e308, 1.0e308 );
	z2 = new Complex128( -5.0e-324, -5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), NINF, 'imaginary component is -infinity' );

	z1 = new Complex128( -1.0e308, -1.0e308 );
	z2 = new Complex128( 5.0e-324, -5.0e-324 );
	v = cdiv( z1, z2 );
	t.strictEqual( real( v ), 0.0, 'real component is 0' );
	t.strictEqual( imag( v ), NINF, 'imaginary component is -infinity' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex128( NaN, 3.0 );
	z2 = new Complex128( -2.0, 1.0 );
	v = cdiv( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns NaN' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns NaN' );

	z1 = new Complex128( 5.0, NaN );
	z2 = new Complex128( -2.0, 1.0 );
	v = cdiv( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns NaN' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns NaN' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( NaN, 1.0 );
	v = cdiv( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns NaN' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns NaN' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( -2.0, NaN );
	v = cdiv( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns NaN' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns NaN' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( NaN, NaN );
	v = cdiv( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns NaN' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns NaN' );

	z1 = new Complex128( NaN, NaN );
	z2 = new Complex128( -2.0, 1.0 );
	v = cdiv( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns NaN' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns NaN' );

	z1 = new Complex128( NaN, NaN );
	z2 = new Complex128( NaN, NaN );
	v = cdiv( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns NaN' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns NaN' );

	t.end();
});
