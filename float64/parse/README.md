<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# parseComplex128

> Parse a string representation of a 128-bit [complex number][@stdlib/complex/float64/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var parseComplex128 = require( '@stdlib/complex/float64/parse' );
```

#### parseComplex128( str )

Parses a string representation of a 128-bit [complex number][@stdlib/complex/float64/ctor].

```javascript
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var str = '5 + 3i';

var z = parseComplex128( str );
// returns <Complex128>

var re = real( z );
// returns 5.0

var im = imag( z );
// returns 3.0
```

For details on the string format, see [Complex128][@stdlib/complex/float64/ctor].

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
var parseComplex128 = require( '@stdlib/complex/float64/parse' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var str = '1e3 - 2.75i';

var z = parseComplex128( str );
var bool = isComplex128( z );
// returns true

bool = ( real( z ) === 1e3 );
// returns true

bool = ( imag( z ) === -2.75 );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex/tree/main/float64/ctor

</section>

<!-- /.links -->
