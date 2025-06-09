<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# mul

> Multiply two single-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mul = require( '@stdlib/complex/float32/base/mul' );
```

#### mul( z1, z2 )

Multiples two single-precision complex floating-point numbers.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( -2.0, 1.0 );

var v = mul( z1, z2 );
// returns <Complex64>[ -13.0, -1.0 ]
```

#### mul.assign( re1, im1, re2, im2, out, strideOut, offsetOut )

Multiplies two single-precision complex floating-point numbers and assigns results to a provided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );
var v = mul.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
// returns <Float32Array>[ -13.0, -1.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **re1**: real component of the first complex number.
-   **im1**: imaginary component of the first complex number.
-   **re2**: real component of the second complex number.
-   **im2**: imaginary component of the second complex number.
-   **out**: output array.
-   **strideOut**: stride length for `out`.
-   **offsetOut**: starting index for `out`.

#### mul.strided( z1, sz1, oz1, z2, sz2, oz2, out, so, oo )

Multiplies two single-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var z1 = new Float32Array( [ 5.0, 3.0 ] );
var z2 = new Float32Array( [ -2.0, 1.0 ] );
var out = new Float32Array( 2 );

var v = mul.strided( z1, 1, 0, z2, 1, 0, out, 1, 0 );
// returns <Float32Array>[ -13.0, -1.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **z1**: first complex number strided array view.
-   **sz1**: stride length for `z1`.
-   **oz1**: starting index for `z1`.
-   **z2**: second complex number strided array view.
-   **sz2**: stride length for `z2`.
-   **oz2**: starting index for `z2`.
-   **out**: output array.
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var mul = require( '@stdlib/complex/float32/base/mul' );

// Generate arrays of random values:
var z1 = new Complex64Array( discreteUniform( 200, -50, 50 ) );
var z2 = new Complex64Array( discreteUniform( 200, -50, 50 ) );

// Perform element-wise multiplication:
logEachMap( '(%s) * (%s) = %s', z1, z2, mul );
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
#include "stdlib/complex/float32/base/mul.h"
```

#### stdlib_base_complex64_mul( z1, z2 )

Multiplies two single-precision complex floating-point numbers.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"

stdlib_complex64_t z1 = stdlib_complex64( 5.0f, 3.0f );
stdlib_complex64_t z2 = stdlib_complex64( -2.0f, 1.0f );

stdlib_complex64_t out = stdlib_base_complex64_mul( z1, z2 );

float re = stdlib_complex64_real( out );
// returns -13.0f

float im = stdlib_complex64_imag( out );
// returns -1.0f
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex64_t` input value.
-   **z2**: `[in] stdlib_complex64_t` input value.

```c
stdlib_complex64_t stdlib_base_complex64_mul( const stdlib_complex64_t z1, const stdlib_complex64_t z2 );
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
#include "stdlib/complex/float32/base/mul.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.5f ),
        stdlib_complex64( -3.14f, 1.5f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    stdlib_complex64_t y;
    float re;
    float im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_complex64_reim( v, &re, &im );
        printf( "z = %f + %fi\n", re, im );

        y = stdlib_base_complex64_mul( v, v );
        stdlib_complex64_reim( y, &re, &im );
        printf( "mul(z, z) = %f + %fi\n", re, im );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/float32/base/add`][@stdlib/complex/float32/base/add]</span><span class="delimiter">: </span><span class="description">add two single-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/complex/float64/base/mul`][@stdlib/complex/float64/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/complex/float32/base/sub`][@stdlib/complex/float32/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two single-precision complex floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float32/base/add]: https://github.com/stdlib-js/complex/tree/main/float32/base/add

[@stdlib/complex/float64/base/mul]: https://github.com/stdlib-js/complex/tree/main/float64/base/mul

[@stdlib/complex/float32/base/sub]: https://github.com/stdlib-js/complex/tree/main/float32/base/sub

<!-- </related-links> -->

</section>

<!-- /.links -->
