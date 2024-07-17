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

# reim

> Return the real and imaginary components of a single-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reim = require( '@stdlib/complex/float32/reim' );
```

#### reim( z )

Returns the **real** and **imaginary** components of a single-precision complex floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var z = new Complex64( 5.0, 3.0 );
var out = reim( z );
// returns <Float32Array>[ 5.0, 3.0 ]
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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var reim = require( '@stdlib/complex/float32/reim' );

function random() {
    return new Complex64( discreteUniform( -10, 10 ), discreteUniform( -10, 10 ) );
}

// Generate an array of random complex numbers:
var x = filledarrayBy( 100, 'complex64', random );
// returns <Complex64Array>

// Return the real and imaginary components of each complex number...
var out;
var z;
var i;
for ( i = 0; i < x.length; i++ ) {
    z = x.get( i );
    out = reim( z );
    console.log( '%s => %d, %d', z.toString(), out[ 0 ], out[ 1 ] );
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
#include "stdlib/complex/float32/reim.h"
```

#### stdlib_complex64_reim( z, \*re, \*im )

Returns the real and imaginary components of a single-precision complex floating-point number.

```c
#include "stdlib/complex/float32/ctor.h"

stdlib_complex64_t z = stdlib_complex64( 5.0f, 2.0f );

// ...

float re;
float im;

stdlib_complex64_reim( z, &re, &im );
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` single-precision complex floating-point number.
-   **re**: `[out] float*` destination for real component.
-   **im**: `[out] float*` destination for imaginary component.

```c
void stdlib_complex64_reim( const stdlib_complex64_t z, float *re, float *im );
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
#include "stdlib/complex/float32/reim.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 5.0f, 2.0f ),
        stdlib_complex64( -2.0f, 1.0f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    float re;
    float im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_complex64_reim( x[ i ], &re, &im );
        printf( "reim(v) = %f, %f\n", re, im );
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

-   <span class="package-name">[`@stdlib/complex/float32/imag`][@stdlib/complex/float32/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a single-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/complex/float32/real`][@stdlib/complex/float32/real]</span><span class="delimiter">: </span><span class="description">return the real component of a single-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/complex/float64/reim`][@stdlib/complex/float64/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a double-precision complex floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float32/imag]: https://github.com/stdlib-js/complex/tree/main/float32/imag

[@stdlib/complex/float32/real]: https://github.com/stdlib-js/complex/tree/main/float32/real

[@stdlib/complex/float64/reim]: https://github.com/stdlib-js/complex/tree/main/float64/reim

<!-- </related-links> -->

</section>

<!-- /.links -->
