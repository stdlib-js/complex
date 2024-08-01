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

# conj

> Return the [complex conjugate][complex-conjugate] of a double-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var conj = require( '@stdlib/complex/float64/conj' );
```

#### conj( z )

Returns the [complex conjugate][complex-conjugate] of a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var z = new Complex128( 5.0, 3.0 );
var str = z.toString();
// returns '5 + 3i'

var v = conj( z );
str = v.toString();
// returns '5 - 3i'
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

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var conj = require( '@stdlib/complex/float64/conj' );

function random() {
    return new Complex128( discreteUniform( -10, 10 ), discreteUniform( -10, 10 ) );
}

// Generate an array of random complex numbers:
var x = filledarrayBy( 100, 'complex128', random );
// returns <Complex128Array>

// Compute the complex conjugate of each complex number...
var z;
var i;
for ( i = 0; i < x.length; i++ ) {
    z = x.get( i );
    console.log( 'conj(%s) = %s', z.toString(), conj( z ).toString() );
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
#include "stdlib/complex/float64/conj.h"
```

#### stdlib_complex128_conj( z )

Returns the [complex conjugate][complex-conjugate] of a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 5.0, 2.0 );

// ...

stdlib_complex128_t v = stdlib_complex128_conj( z );

double re = stdlib_complex128_real( v );
// returns 5.0

double im = stdlib_complex128_imag( v );
// returns -2.0
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` double-precision complex floating-point number.

```c
stdlib_complex128_t stdlib_complex128_conj( const stdlib_complex128_t z );
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
#include "stdlib/complex/float64/conj.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 5.0, 2.0 ),
        stdlib_complex128( -2.0, 1.0 ),
        stdlib_complex128( 0.0, -0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t z;
    stdlib_complex128_t v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        z = x[ i ];
        v = stdlib_complex128_conj( z );
        printf( "conj(%lf + %lfi) = %lf + %lfi\n", stdlib_complex128_real( z ), stdlib_complex128_imag( z ), stdlib_complex128_real( v ), stdlib_complex128_imag( v ) );
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

-   <span class="package-name">[`@stdlib/complex/float64/imag`][@stdlib/complex/float64/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/complex/float64/real`][@stdlib/complex/float64/real]</span><span class="delimiter">: </span><span class="description">return the real component of a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/complex/float64/reim`][@stdlib/complex/float64/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a double-precision complex floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[complex-conjugate]: https://en.wikipedia.org/wiki/Complex_conjugate

<!-- <related-links> -->

[@stdlib/complex/float64/imag]: https://github.com/stdlib-js/complex/tree/main/float64/imag

[@stdlib/complex/float64/real]: https://github.com/stdlib-js/complex/tree/main/float64/real

[@stdlib/complex/float64/reim]: https://github.com/stdlib-js/complex/tree/main/float64/reim

<!-- </related-links> -->

</section>

<!-- /.links -->
