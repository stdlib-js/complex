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

# csub

> Subtract two double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var csub = require( '@stdlib/complex/float64/base/sub' );
```

#### csub( z1, z2 )

Subtracts two double-precision complex floating-point numbers.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( -2.0, 1.0 );

var v = csub( z1, z2 );
// returns <Complex128>[ 7.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var csub = require( '@stdlib/complex/float64/base/sub' );

// Generate arrays of random values:
var z1 = new Complex128Array( discreteUniform( 200, -50, 50 ) );
var z2 = new Complex128Array( discreteUniform( 200, -50, 50 ) );

// Perform element-wise subtraction:
logEachMap( '(%s) - (%s) = %s', z1, z2, csub );
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
#include "stdlib/complex/float64/base/sub.h"
```

#### stdlib_base_complex128_sub( z1, z2 )

Subtracts two double-precision complex floating-point numbers.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z1 = stdlib_complex128( 5.0, 3.0 );
stdlib_complex128_t z2 = stdlib_complex128( -2.0, 1.0 );

stdlib_complex128_t out = stdlib_base_complex128_sub( z1, z2 );

double re = stdlib_complex128_real( out );
// returns 7.0

double im = stdlib_complex128_imag( out );
// returns 2.0
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex128_t` input value.
-   **z2**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_complex128_sub( const stdlib_complex128_t z1, const stdlib_complex128_t z2 );
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
#include "stdlib/complex/float64/base/sub.h"
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

        y = stdlib_base_complex128_sub( v, v );
        stdlib_complex128_reim( y, &re, &im );
        printf( "csub(z, z) = %lf + %lfi\n", re, im );
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

-   <span class="package-name">[`@stdlib/complex/float64/base/add`][@stdlib/complex/float64/base/add]</span><span class="delimiter">: </span><span class="description">add two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/complex/float64/base/div`][@stdlib/complex/float64/base/div]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>
-   <span class="package-name">[`@stdlib/complex/float64/base/mul`][@stdlib/complex/float64/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float64/base/add]: https://github.com/stdlib-js/complex/tree/main/float64/base/add

[@stdlib/complex/float64/base/div]: https://github.com/stdlib-js/complex/tree/main/float64/base/div

[@stdlib/complex/float64/base/mul]: https://github.com/stdlib-js/complex/tree/main/float64/base/mul

<!-- </related-links> -->

</section>

<!-- /.links -->
