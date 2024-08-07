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

# Complex64

> Single-precision complex floating-point number functions.

<section class="usage">

## Usage

```javascript
var complex = require( '@stdlib/complex/float32' );
```

#### complex

Namespace containing single-precision complex floating-point number functions.

```javascript
var ns = complex;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(base)"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/complex/float32/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) single-precision complex floating-point number functions.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`conj( z )`][@stdlib/complex/float32/conj]</span><span class="delimiter">: </span><span class="description">return the complex conjugate of a single-precision complex floating-point number.</span>
-   <span class="signature">[`Complex64( real, imag )`][@stdlib/complex/float32/ctor]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>
-   <span class="signature">[`imag( z )`][@stdlib/complex/float32/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a single-precision complex floating-point number.</span>
-   <span class="signature">[`parseComplex64( str )`][@stdlib/complex/float32/parse]</span><span class="delimiter">: </span><span class="description">parse a string representation of a 64-bit complex number.</span>
-   <span class="signature">[`real( z )`][@stdlib/complex/float32/real]</span><span class="delimiter">: </span><span class="description">return the real component of a single-precision complex floating-point number.</span>
-   <span class="signature">[`reim( z )`][@stdlib/complex/float32/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a single-precision complex floating-point number.</span>
-   <span class="signature">[`reviveComplex64( key, value )`][@stdlib/complex/float32/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 64-bit complex number.</span>

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
var ns = require( '@stdlib/complex/float32' );

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

[@stdlib/complex/float32/conj]: https://github.com/stdlib-js/complex/tree/main/float32/conj

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex/tree/main/float32/ctor

[@stdlib/complex/float32/imag]: https://github.com/stdlib-js/complex/tree/main/float32/imag

[@stdlib/complex/float32/parse]: https://github.com/stdlib-js/complex/tree/main/float32/parse

[@stdlib/complex/float32/real]: https://github.com/stdlib-js/complex/tree/main/float32/real

[@stdlib/complex/float32/reim]: https://github.com/stdlib-js/complex/tree/main/float32/reim

[@stdlib/complex/float32/reviver]: https://github.com/stdlib-js/complex/tree/main/float32/reviver

[@stdlib/complex/float32/base]: https://github.com/stdlib-js/complex/tree/main/float32/base

<!-- </toc-links> -->

</section>

<!-- /.links -->
