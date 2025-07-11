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

# cidentity

> Evaluate the [identity function][identity-function] of a double-precision [complex][@stdlib/complex/float64/ctor] floating-point number.

<section class="intro">

The [identity-function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(z) = z" alt="Identity function"> -->

```math
f(z) = z
```

<!-- <div class="equation" align="center" data-raw-text="f(z) = z" data-equation="eq:identity_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3ac3ef7b03afae265d5c85a664dc22e0a373c0c2/lib/node_modules/@stdlib/complex/float64/base/identity/docs/img/equation_identity_function.svg" alt="Identity function">
    <br>
</div> -->

<!-- </equation> -->

for all `z`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cidentity = require( '@stdlib/complex/float64/base/identity' );
```

#### cidentity( z )

Evaluates the [identity function][identity-function] for a double-precision [complex][@stdlib/complex/float64/ctor] floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var v = cidentity( new Complex128( -1.0, 2.0 ) );
// returns <Complex128>[ -1.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var cidentity = require( '@stdlib/complex/float64/base/identity' );

var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( discreteUniform( -50, 50 ), discreteUniform( -50, 50 ) );
    console.log( 'identity(%s) = %s', z, cidentity( z ) );
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
#include "stdlib/complex/float64/base/identity.h"
```

#### stdlib_base_complex128_identity( z )

Evaluates the identity function for a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 2.5, -1.5 );
stdlib_complex128_t out = stdlib_base_complex128_identity( z );

double re = stdlib_complex128_real( out );
// returns 2.5

double im = stdlib_complex128_imag( out );
// returns -1.5
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_complex128_identity( const stdlib_complex128_t z );
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
#include "stdlib/complex/float64/base/identity.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, -1.5 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re1;
    double im1;
    double re2;
    double im2;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_complex128_identity( v );
        stdlib_complex128_reim( v, &re1, &im1 );
        stdlib_complex128_reim( y, &re2, &im2 );
        printf( "cidentity(%lf + %lfi) = %lf + %lfi\n", re1, im1, re2, im2 );
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

-   <span class="package-name">[`@stdlib/complex/float32/base/identity`][@stdlib/complex/float32/base/identity]</span><span class="delimiter">: </span><span class="description">evaluate the identity function for a single-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/number/float64/base/identity`][@stdlib/number/float64/base/identity]</span><span class="delimiter">: </span><span class="description">evaluate the identity function for a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[identity-function]: https://en.wikipedia.org/wiki/Identity_function

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex/tree/main/float64/ctor

<!-- <related-links> -->

[@stdlib/complex/float32/base/identity]: https://github.com/stdlib-js/complex/tree/main/float32/base/identity

[@stdlib/number/float64/base/identity]: https://github.com/stdlib-js/number-float64-base-identity

<!-- </related-links> -->

</section>

<!-- /.links -->
