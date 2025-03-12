<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# add

> Add two double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var add = require( '@stdlib/complex/float64/base/add' );
```

#### add( z1, z2 )

Adds two double-precision complex floating-point numbers.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var z = new Complex128( -1.5, 2.5 );

var v = add( z, z );
// returns <Complex128>

var re = real( v );
// returns -3.0

var im = imag( v );
// returns 5.0
```

#### add.assign( re1, im1, re2, im2, out, strideOut, offsetOut )

Adds two double-precision complex floating-point numbers and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );
var v = add.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
// returns <Float64Array>[ 3.0, 4.0 ]

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

#### add.strided( z1, sz1, oz1, z2, sz2, oz2, out, so, oo )

Adds two double-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var z1 = new Float64Array( [ 5.0, 3.0 ] );
var z2 = new Float64Array( [ -2.0, 1.0 ] );
var out = new Float64Array( 2 );

var v = add.strided( z1, 1, 0, z2, 1, 0, out, 1, 0 );
// returns <Float64Array>[ 3.0, 4.0 ]

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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var add = require( '@stdlib/complex/float64/base/add' );

var rand = discreteUniform( -50, 50 );

var z1;
var z2;
var z3;
var i;
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( rand(), rand() );
    z2 = new Complex128( rand(), rand() );
    z3 = add( z1, z2 );
    console.log( '(%s) + (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
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
#include "stdlib/complex/float64/base/add.h"
```

#### stdlib_base_complex128_add( z1, z2 )

Adds two double-precision complex floating-point numbers.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 3.0, -2.0 );

stdlib_complex128_t out = stdlib_base_complex128_add( z, z );

double re = stdlib_complex128_real( out );
// returns 6.0

double im = stdlib_complex128_imag( out );
// returns -4.0
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex128_t` input value.
-   **z2**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_complex128_add( const stdlib_complex128_t z1, const stdlib_complex128_t z2 );
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
#include "stdlib/complex/float64/base/add.h"
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

        y = stdlib_base_complex128_add( v, v );
        stdlib_complex128_reim( y, &re, &im );
        printf( "add(z, z) = %lf + %lfi\n", re, im );
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

-   <span class="package-name">[`@stdlib/complex/float64/base/div`][@stdlib/complex/float64/base/div]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>
-   <span class="package-name">[`@stdlib/complex/float64/base/mul`][@stdlib/complex/float64/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/ops/csub`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision complex floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float64/base/div]: https://github.com/stdlib-js/complex/tree/main/float64/base/div

[@stdlib/complex/float64/base/mul]: https://github.com/stdlib-js/complex/tree/main/float64/base/mul

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math-base-ops-csub

<!-- </related-links> -->

</section>

<!-- /.links -->
