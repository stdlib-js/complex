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

# Assert

> Base (i.e., lower-level) single-precision complex floating-point number assertion functions.

<section class="usage">

## Usage

```javascript
var assert = require( '@stdlib/complex/float32/base/assert' );
```

#### assert

Namespace containing base (i.e., lower-level) single-precision complex floating-point number assertion functions.

```javascript
var ns = assert;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`isEqual( z1, z2 )`][@stdlib/complex/float32/base/assert/is-equal]</span><span class="delimiter">: </span><span class="description">test whether two single-precision complex floating-point numbers are equal.</span>
-   <span class="signature">[`isNotEqual( z1, z2 )`][@stdlib/complex/float32/base/assert/is-not-equal]</span><span class="delimiter">: </span><span class="description">test whether two single-precision complex floating-point numbers are not equal.</span>
-   <span class="signature">[`isSameValueZero( z1, z2 )`][@stdlib/complex/float32/base/assert/is-same-value-zero]</span><span class="delimiter">: </span><span class="description">test whether two single-precision complex floating-point numbers are the same value.</span>
-   <span class="signature">[`isSameValue( z1, z2 )`][@stdlib/complex/float32/base/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test whether two single-precision complex floating-point numbers are the same value.</span>

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
var ns = require( '@stdlib/complex/float32/base/assert' );

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

[@stdlib/complex/float32/base/assert/is-equal]: https://github.com/stdlib-js/complex/tree/main/float32/base/assert/is-equal

[@stdlib/complex/float32/base/assert/is-not-equal]: https://github.com/stdlib-js/complex/tree/main/float32/base/assert/is-not-equal

[@stdlib/complex/float32/base/assert/is-same-value-zero]: https://github.com/stdlib-js/complex/tree/main/float32/base/assert/is-same-value-zero

[@stdlib/complex/float32/base/assert/is-same-value]: https://github.com/stdlib-js/complex/tree/main/float32/base/assert/is-same-value

<!-- </toc-links> -->

</section>

<!-- /.links -->
