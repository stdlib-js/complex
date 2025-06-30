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

# scale

> Scale a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var scale = require( '@stdlib/complex/float32/base/scale' );
```

#### scale( alpha, c )

Scales a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var c = new Complex64( 5.0, 3.0 );

var v = scale( 5.0, c );
// returns <Complex64>[ 25.0, 15.0 ]
```

The function supports the following parameters:

-   **alpha**: real-valued scalar constant.
-   **c**: [complex number][@stdlib/complex/float32/ctor].

#### scale.assign( alpha, re1, im1, out, strideOut, offsetOut )

Scales a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant and assigns results to a provided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );
var v = scale.assign( 5.0, 5.0, 3.0, out, 1, 0 );
// returns <Float32Array>[ 25.0, 15.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **alpha**: real-valued scalar constant.
-   **re**: real component of the complex number.
-   **im**: imaginary component of the complex number.
-   **out**: output array.
-   **strideOut**: stride length for `out`.
-   **offsetOut**: starting index for `out`.

#### scale.strided( alpha, c, sc, oc, out, so, oo )

Scales a single-precision complex floating-point number stored in a real-valued strided array view by a real-valued single-precision floating-point scalar constant and assigns results to a provided strided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var c = new Float32Array( [ 5.0, 3.0 ] );
var out = new Float32Array( 2 );

var v = scale.strided( 5.0, c, 1, 0, out, 1, 0 );
// returns <Float32Array>[ 25.0, 15.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **alpha**: real-valued scalar constant.
-   **c**: complex number strided array view.
-   **sc**: stride length for `c`.
-   **oc**: starting index for `c`.
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
var scale = require( '@stdlib/complex/float32/base/scale' );

// Generate an array of random values:
var values = new Complex64Array( discreteUniform( 200, -50, 50 ) );

// Scale each by a scalar constant:
logEachMap( '%0.1f * (%s) = %s', 5.0, values, scale );
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
#include "stdlib/complex/float32/base/scale.h"
```

#### stdlib_base_complex64_scale( alpha, c )

Scales a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"

stdlib_complex64_t c = stdlib_complex64( 5.0f, 3.0f );

stdlib_complex64_t out = stdlib_base_complex64_scale( 5.0f, c );

float re = stdlib_complex64_real( out );
// returns 25.0f

float im = stdlib_complex64_imag( out );
// returns 15.0f
```

The function accepts the following arguments:

-   **alpha**: `[in] float` scalar constant.
-   **c**: `[in] stdlib_complex64_t` complex number.

```c
stdlib_complex64_t stdlib_base_complex64_scale( const float alpha, const stdlib_complex64_t c );
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
#include "stdlib/complex/float32/base/scale.h"
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
        printf( "c = %f + %fi\n", re, im );

        y = stdlib_base_complex64_scale( 5.0f, v );
        stdlib_complex64_reim( y, &re, &im );
        printf( "scale(5.0, c) = %f + %fi\n", re, im );
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

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex/tree/main/float32/ctor

</section>

<!-- /.links -->
