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

> Base (i.e., lower-level) double-precision complex floating-point number functions.

<section class="usage">

## Usage

```javascript
var complex = require( '@stdlib/complex/float64/base' );
```

#### complex

Namespace containing base (i.e., lower-level) double-precision complex floating-point number functions.

```javascript
var ns = complex;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(assert)"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/complex/float64/base/assert]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) double-precision complex floating-point number assertion functions.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`add( z1, z2 )`][@stdlib/complex/float64/base/add]</span><span class="delimiter">: </span><span class="description">add two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`muladd( alpha, x, y )`][@stdlib/complex/float64/base/mul-add]</span><span class="delimiter">: </span><span class="description">perform a multiply-add operation involving three double-precision complex floating-point numbers.</span>
-   <span class="signature">[`mul( z1, z2 )`][@stdlib/complex/float64/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`scale( alpha, z )`][@stdlib/complex/float64/base/scale]</span><span class="delimiter">: </span><span class="description">scale a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.</span>

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
var ns = require( '@stdlib/complex/float64/base' );

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

[@stdlib/complex/float64/base/add]: https://github.com/stdlib-js/complex/tree/main/float64/base/add

[@stdlib/complex/float64/base/mul-add]: https://github.com/stdlib-js/complex/tree/main/float64/base/mul-add

[@stdlib/complex/float64/base/mul]: https://github.com/stdlib-js/complex/tree/main/float64/base/mul

[@stdlib/complex/float64/base/scale]: https://github.com/stdlib-js/complex/tree/main/float64/base/scale

[@stdlib/complex/float64/base/assert]: https://github.com/stdlib-js/complex/tree/main/float64/base/assert

<!-- </toc-links> -->

</section>

<!-- /.links -->
