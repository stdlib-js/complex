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

# real

> Return the real component of a double-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var real = require( '@stdlib/complex/float64/real' );
```

#### real( z )

Returns the **real** component of a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var z = new Complex128( 5.0, 3.0 );
var re = real( z );
// returns 5.0
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
var real = require( '@stdlib/complex/float64/real' );

function random() {
    return new Complex128( discreteUniform( -10, 10 ), discreteUniform( -10, 10 ) ); // eslint-disable-line max-len
}

// Generate an array of random complex numbers:
var x = filledarrayBy( 100, 'complex128', random );
// returns <Complex128Array>

// Retrieve the real component of each complex number...
var z;
var i;
for ( i = 0; i < x.length; i++ ) {
    z = x.get( i );
    console.log( 'real(%s) = %d', z.toString(), real( z ) );
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
#include "stdlib/complex/float64/real.h"
```

#### stdlib_complex128_real( z )

Returns the real component of a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"

stdlib_complex128_t z = stdlib_complex128( 5.0, 2.0 );

// ...

double re = stdlib_complex128_real( z );
// returns 5.0
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` double-precision complex floating-point number.

```c
double stdlib_complex128_real( const stdlib_complex128_t z );
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
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 5.0, 2.0 ),
        stdlib_complex128( -2.0, 1.0 ),
        stdlib_complex128( 0.0, -0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    int i;
    for ( i = 0; i < 4; i++ ) {
        printf( "real(v) = %lf\n", stdlib_complex128_real( x[ i ] ) );
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
-   <span class="package-name">[`@stdlib/complex/float64/reim`][@stdlib/complex/float64/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a double-precision complex floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float64/imag]: https://github.com/stdlib-js/complex/tree/main/float64/imag

[@stdlib/complex/float64/reim]: https://github.com/stdlib-js/complex/tree/main/float64/reim

<!-- </related-links> -->

</section>

<!-- /.links -->
