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

# Complex Numbers

> Create a complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var complex = require( '@stdlib/complex/cmplx' );
```

#### complex( real, imag\[, dtype] )

Creates a complex number, where `real` and `imag` are the **real** and **imaginary** components, respectively.

```javascript
var z = complex( 5.0, 3.0 );
// returns <Complex128>
```

By default, the function returns a [128-bit complex number][@stdlib/complex/float64]. To specify an alternative underlying data type, set the `dtype` parameter to one of the following:

-   [`'float64'`][@stdlib/complex/float64]: store **real** and **imaginary** components as double-precision floating-point numbers.
-   [`'float32'`][@stdlib/complex/float32]: store **real** and **imaginary** components as single-precision floating-point numbers.

```javascript
var z = complex( 5.0, 3.0, 'float32' );
// returns <Complex64>
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
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var complex = require( '@stdlib/complex/cmplx' );

var re;
var im;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( (randu()*100.0) - 50.0 );
    im = round( (randu()*100.0) - 50.0 );
    z = complex( re, im, 'float64' );
    console.log( z.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/float64`][@stdlib/complex/float64]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/complex/float32`][@stdlib/complex/float32]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex/tree/main/float64

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex/tree/main/float32

<!-- </related-links> -->

</section>

<!-- /.links -->
