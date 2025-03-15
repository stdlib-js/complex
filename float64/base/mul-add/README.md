<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# muladd

> Perform a multiply-add operation involving three double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var muladd = require( '@stdlib/complex/float64/base/mul-add' );
```

#### muladd( alpha, x, y )

Performs a multiply-add operation involving three double-precision complex floating-point numbers.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( -2.0, 1.0 );
var z3 = new Complex128( 7.0, -8.0 );

// Compute `alpha*x + y`:
var v = muladd( z1, z2, z3 );
// returns <Complex128>

var re = real( v );
// returns -6.0

var im = imag( v );
// returns -9.0
```

The function supports the following parameters:

-   **alpha**: first [complex number][@stdlib/complex/float64/ctor]
-   **x**: second [complex number][@stdlib/complex/float64/ctor].
-   **y**: third [complex number][@stdlib/complex/float64/ctor].

#### muladd.assign( ar, ai, xr, xi, yr, yi, out, strideOut, offsetOut )

Performs a multiply-add operation involving three double-precision complex floating-point numbers and assigns the results to an output strided array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );
var v = muladd.assign( 5.0, 3.0, -2.0, 1.0, 7.0, -8.0, out, 1, 0 );
// returns <Float64Array>[ -6.0, -9.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **ar**: real component of the first complex number.
-   **ai**: imaginary component of the first complex number.
-   **xr**: real component of the second complex number.
-   **xi**: imaginary component of the second complex number.
-   **yr**: real component of the third complex number.
-   **yi**: imaginary component of the third complex number.
-   **out**: output array.
-   **strideOut**: stride length for `out`.
-   **offsetOut**: starting index for `out`.

#### muladd.strided( alpha, sa, oa, x, sx, ox, y, sy, oy, out, so, oo )

Performs a multiply-add operation involving three double-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var z1 = new Float64Array( [ 5.0, 3.0 ] );
var z2 = new Float64Array( [ -2.0, 1.0 ] );
var z3 = new Float64Array( [ 7.0, -8.0 ] );
var out = new Float64Array( 2 );

var v = muladd.strided( z1, 1, 0, z2, 1, 0, z3, 1, 0, out, 1, 0 );
// returns <Float64Array>[ -6.0, -9.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **alpha**: first complex number strided array view.
-   **sa**: stride length for `alpha`.
-   **oa**: starting index for `alpha`.
-   **x**: second complex number strided array view.
-   **sx**: stride length for `x`.
-   **ox**: starting index for `x`.
-   **y**: third complex number strided array view.
-   **sy**: stride length for `y`.
-   **oy**: starting index for `y`.
-   **out**: output array.
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var muladd = require( '@stdlib/complex/float64/base/mul-add' );

var rand = discreteUniform( -50, 50 );

var z1;
var z2;
var z3;
var i;
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( rand(), rand() );
    z2 = new Complex128( rand(), rand() );
    z3 = muladd( z1, z2, z2 );
    console.log( '(%s)*(%s) + (%s) = %s', z1.toString(), z2.toString(), z2.toString(), z3.toString() );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/complex/float64/base/mul_add.h"
```

#### stdlib_base_complex128_muladd( alpha, x, y )

Performs a multiply-add operation involving three double-precision complex floating-point numbers.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z1 = stdlib_complex128( 5.0, 3.0 );
stdlib_complex128_t z2 = stdlib_complex128( -2.0, 1.0 );
stdlib_complex128_t z3 = stdlib_complex128( 7.0, -8.0 );

stdlib_complex128_t out = stdlib_base_complex128_muladd( z1, z2, z3 );

double re = stdlib_complex128_real( out );
// returns -6.0

double im = stdlib_complex128_imag( out );
// returns -9.0
```

The function accepts the following arguments:

-   **alpha**: `[in] stdlib_complex128_t` input value.
-   **z1**: `[in] stdlib_complex128_t` input value.
-   **z2**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_complex128_muladd( const stdlib_complex128_t alpha, const stdlib_complex128_t x, const stdlib_complex128_t y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/complex/float64/base/mul_add.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, 1.5 ),
        stdlib_complex128( 0.0, -0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re;
    double im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_complex128_reim( v, &re, &im );
        printf( "z = %lf + %lfi\n", re, im );

        y = stdlib_base_complex128_muladd( v, v, v );
        stdlib_complex128_reim( y, &re, &im );
        printf( "z*z + z = %lf + %lfi\n", re, im );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex/tree/main/float64/ctor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
