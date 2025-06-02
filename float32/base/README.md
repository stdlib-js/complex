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

> Base (i.e., lower-level) single-precision complex floating-point number functions.

<section class="usage">

## Usage

```javascript
var complex = require( '@stdlib/complex/float32/base' );
```

#### complex

Namespace containing base (i.e., lower-level) single-precision complex floating-point number functions.

```javascript
var ns = complex;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(assert)"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/complex/float32/base/assert]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) single-precision complex floating-point number assertion functions.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`add( z1, z2 )`][@stdlib/complex/float32/base/add]</span><span class="delimiter">: </span><span class="description">add two single-precision complex floating-point numbers.</span>
-   <span class="signature">[`identity( z )`][@stdlib/complex/float32/base/identity]</span><span class="delimiter">: </span><span class="description">evaluate the identity function of a single-precision complex floating-point number.</span>
-   <span class="signature">[`mul( z1, z2 )`][@stdlib/complex/float32/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two single-precision complex floating-point numbers.</span>
-   <span class="signature">[`neg( z )`][@stdlib/complex/float32/base/neg]</span><span class="delimiter">: </span><span class="description">negate a single-precision complex floating-point number.</span>
-   <span class="signature">[`scale( alpha, c )`][@stdlib/complex/float32/base/scale]</span><span class="delimiter">: </span><span class="description">scale a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant.</span>
-   <span class="signature">[`sub( z1, z2 )`][@stdlib/complex/float32/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two single-precision complex floating-point numbers.</span>

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
var ns = require( '@stdlib/complex/float32/base' );

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

[@stdlib/complex/float32/base/add]: https://github.com/stdlib-js/complex/tree/main/float32/base/add

[@stdlib/complex/float32/base/identity]: https://github.com/stdlib-js/complex/tree/main/float32/base/identity

[@stdlib/complex/float32/base/mul]: https://github.com/stdlib-js/complex/tree/main/float32/base/mul

[@stdlib/complex/float32/base/neg]: https://github.com/stdlib-js/complex/tree/main/float32/base/neg

[@stdlib/complex/float32/base/scale]: https://github.com/stdlib-js/complex/tree/main/float32/base/scale

[@stdlib/complex/float32/base/sub]: https://github.com/stdlib-js/complex/tree/main/float32/base/sub

[@stdlib/complex/float32/base/assert]: https://github.com/stdlib-js/complex/tree/main/float32/base/assert

<!-- </toc-links> -->

</section>

<!-- /.links -->
