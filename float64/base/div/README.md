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

# cdiv

> Divide two double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdiv = require( '@stdlib/complex/float64/base/div' );
```

#### cdiv( z1, z2 )

Divides two double-precision complex floating-point numbers.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var z1 = new Complex128( -13.0, -1.0 );
var z2 = new Complex128( -2.0, 1.0 );

var v = cdiv( z1, z2 );
// returns <Complex128>[ 5.0, 3.0 ]
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
var cdiv = require( '@stdlib/complex/float64/base/div' );

// Generate arrays of random values:
var z1 = new Complex128Array( discreteUniform( 200, -50, 50 ) );
var z2 = new Complex128Array( discreteUniform( 200, -50, 50 ) );

// Perform element-wise division:
logEachMap( '(%s) / (%s) = %s', z1, z2, cdiv );
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
#include "stdlib/complex/float64/base/div.h"
```

#### stdlib_base_complex128_div( z1, z2 )

Divides two double-precision complex floating-point numbers.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z1 = stdlib_complex128( -13.0, -1.0 );
stdlib_complex128_t z2 = stdlib_complex128( -2.0, 1.0 );

stdlib_complex128_t out = stdlib_base_complex128_div( z1, z2 );

double re = stdlib_complex128_real( out );
// returns 5.0

double im = stdlib_complex128_imag( out );
// returns 3.0
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex128_t` input value.
-   **z2**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_complex128_div( const stdlib_complex128_t z1, const stdlib_complex128_t z2 );
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
#include "stdlib/complex/float64/base/div.h"
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

        y = stdlib_base_complex128_div( v, v );
        stdlib_complex128_reim( y, &re, &im );
        printf( "cdiv(z, z) = %lf + %lfi\n", re, im );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Smith, Robert L. 1962. "Algorithm 116: Complex Division." _Commun. ACM_ 5 (8). New York, NY, USA: ACM: 435. doi:[10.1145/368637.368661][@smith:1962a].
-   Stewart, G. W. 1985. "A Note on Complex Division." _ACM Trans. Math. Softw._ 11 (3). New York, NY, USA: ACM: 238–41. doi:[10.1145/214408.214414][@stewart:1985a].
-   Priest, Douglas M. 2004. "Efficient Scaling for Complex Division." _ACM Trans. Math. Softw._ 30 (4). New York, NY, USA: ACM: 389–401. doi:[10.1145/1039813.1039814][@priest:2004a].
-   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS] (October): 1–25. [&lt;https://arxiv.org/abs/1210.4539>][@baudin:2012a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/float64/base/add`][@stdlib/complex/float64/base/add]</span><span class="delimiter">: </span><span class="description">add two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/complex/float64/base/mul`][@stdlib/complex/float64/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/complex/float64/base/sub`][@stdlib/complex/float64/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision complex floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@smith:1962a]: https://doi.org/10.1145/368637.368661

[@stewart:1985a]: https://doi.org/10.1145/214408.214414

[@priest:2004a]: https://doi.org/10.1145/1039813.1039814

[@baudin:2012a]: https://arxiv.org/abs/1210.4539

<!-- <related-links> -->

[@stdlib/complex/float64/base/add]: https://github.com/stdlib-js/complex/tree/main/float64/base/add

[@stdlib/complex/float64/base/mul]: https://github.com/stdlib-js/complex/tree/main/float64/base/mul

[@stdlib/complex/float64/base/sub]: https://github.com/stdlib-js/complex/tree/main/float64/base/sub

<!-- </related-links> -->

</section>

<!-- /.links -->
