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

> Scale a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var scale = require( '@stdlib/complex/float64/base/scale' );
```

#### scale( alpha, z )

Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var z = new Complex128( 5.0, 3.0 );

var v = scale( 5.0, z );
// returns <Complex128>

var re = real( v );
// returns 25.0

var im = imag( v );
// returns 15.0
```

The function supports the following parameters:

-   **alpha**: real-valued scalar constant.
-   **z**: [complex number][@stdlib/complex/float64/ctor].

#### scale.assign( alpha, re1, im1, out, strideOut, offsetOut )

Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );
var v = scale.assign( 5.0, 5.0, 3.0, out, 1, 0 );
// returns <Float64Array>[ 25.0, 15.0 ]

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

#### scale.strided( alpha, z, sz, oz, out, so, oo )

Scales a double-precision complex floating-point number stored in a real-valued strided array view by a real-valued double-precision floating-point scalar constant and assigns results to a provided strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var z = new Float64Array( [ 5.0, 3.0 ] );
var out = new Float64Array( 2 );

var v = scale.strided( 5.0, z, 1, 0, out, 1, 0 );
// returns <Float64Array>[ 25.0, 15.0 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **alpha**: real-valued scalar constant.
-   **z**: complex number strided array view.
-   **sz**: stride length for `z`.
-   **oz**: starting index for `z`.
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
var scale = require( '@stdlib/complex/float64/base/scale' );

var rand = discreteUniform( -50, 50 );

var z1;
var z2;
var i;
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( rand(), rand() );
    z2 = scale( 5.0, z1 );
    console.log( '(%s) * 5.0 = %s', z1.toString(), z2.toString() );
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
#include "stdlib/complex/float64/base/scale.h"
```

#### stdlib_base_complex128_scale( alpha, z )

Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 5.0, 3.0 );

stdlib_complex128_t out = stdlib_base_complex128_scale( 5.0, z );

double re = stdlib_complex128_real( out );
// returns 25.0

double im = stdlib_complex128_imag( out );
// returns 15.0
```

The function accepts the following arguments:

-   **alpha**: `[in] double` scalar constant.
-   **z**: `[in] stdlib_complex128_t` complex number.

```c
stdlib_complex128_t stdlib_base_complex128_scale( const double alpha, const stdlib_complex128_t z );
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
#include "stdlib/complex/float64/base/scale.h"
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

        y = stdlib_base_complex128_scale( 5.0, v );
        stdlib_complex128_reim( y, &re, &im );
        printf( "scale(5.0, z) = %lf + %lfi\n", re, im );
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

</section>

<!-- /.links -->
