<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# cnegf

> Negate a single-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var cnegf = require( '@stdlib/complex/float32/base/neg' );
```

#### cnegf( z )

Negates a single-precision complex floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var z = new Complex64( -4.0, 5.0 );

var out = cnegf( z );
// returns <Complex64>[ 4.0, -5.0 ]

z = new Complex64( 0.0, 0.0 );

out = cnegf( z );
// returns <Complex64>[ -0.0, -0.0 ]

z = new Complex64( NaN, NaN );

out = cnegf( z );
// returns <Complex64>[ NaN, NaN ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var cnegf = require( '@stdlib/complex/float32/base/neg' );

function randomComplex() {
    var re = discreteUniform( -50, 50 );
    var im = discreteUniform( -50, 50 );
    return new Complex64( re, im );
}

var z;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    z = randomComplex();
    o = cnegf( z );
    console.log( 'negate(%s) = %s', z.toString(), o.toString() );
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
#include "stdlib/complex/float32/base/neg.h"
```

#### stdlib_base_complex64_neg( z )

Negates a single-precision complex floating-point number.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"

stdlib_complex64_t z = stdlib_complex64( 3.0f, -2.0f );
stdlib_complex64_t out = stdlib_base_complex64_neg( z );

float re = stdlib_complex64_real( out );
// returns -3.0f

float im = stdlib_complex64_imag( out );
// returns 2.0f
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.

```c
stdlib_complex64_t stdlib_base_complex64_neg( const stdlib_complex64_t z );
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
#include "stdlib/complex/float32/base/neg.h"
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

        y = stdlib_base_complex64_neg( v );
        stdlib_complex64_reim( y, &re, &im );
        printf( "cnegf(z) = %f + %fi\n", re, im );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/float64/base/neg`][@stdlib/complex/float64/base/neg]</span><span class="delimiter">: </span><span class="description">negate a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cabsf`][@stdlib/math/base/special/cabsf]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a single-precision complex floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float64/base/neg]: https://github.com/stdlib-js/complex/tree/main/float64/base/neg

[@stdlib/math/base/special/cabsf]: https://github.com/stdlib-js/math-base-special-cabsf

<!-- </related-links> -->

</section>

<!-- /.links -->
