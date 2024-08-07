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

# Complex128

> Double-precision complex floating-point number functions.

<section class="usage">

## Usage

```javascript
var complex = require( '@stdlib/complex/float64' );
```

#### complex

Namespace containing double-precision complex floating-point number functions.

```javascript
var ns = complex;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(base)"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/complex/float64/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) double-precision complex floating-point number functions.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`conj( z )`][@stdlib/complex/float64/conj]</span><span class="delimiter">: </span><span class="description">return the complex conjugate of a double-precision complex floating-point number.</span>
-   <span class="signature">[`Complex128( real, imag )`][@stdlib/complex/float64/ctor]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>
-   <span class="signature">[`imag( z )`][@stdlib/complex/float64/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a double-precision complex floating-point number.</span>
-   <span class="signature">[`parseComplex128( str )`][@stdlib/complex/float64/parse]</span><span class="delimiter">: </span><span class="description">parse a string representation of a 128-bit complex number.</span>
-   <span class="signature">[`real( z )`][@stdlib/complex/float64/real]</span><span class="delimiter">: </span><span class="description">return the real component of a double-precision complex floating-point number.</span>
-   <span class="signature">[`reim( z )`][@stdlib/complex/float64/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a double-precision complex floating-point number.</span>
-   <span class="signature">[`reviveComplex128( key, value )`][@stdlib/complex/float64/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 128-bit complex number.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/complex/float64' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/complex/float64/conj]: https://github.com/stdlib-js/complex/tree/main/float64/conj

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex/tree/main/float64/ctor

[@stdlib/complex/float64/imag]: https://github.com/stdlib-js/complex/tree/main/float64/imag

[@stdlib/complex/float64/parse]: https://github.com/stdlib-js/complex/tree/main/float64/parse

[@stdlib/complex/float64/real]: https://github.com/stdlib-js/complex/tree/main/float64/real

[@stdlib/complex/float64/reim]: https://github.com/stdlib-js/complex/tree/main/float64/reim

[@stdlib/complex/float64/reviver]: https://github.com/stdlib-js/complex/tree/main/float64/reviver

[@stdlib/complex/float64/base]: https://github.com/stdlib-js/complex/tree/main/float64/base

<!-- </toc-links> -->

</section>

<!-- /.links -->
