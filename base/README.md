<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Base Complex

> Base (i.e., lower-level) complex number functions.

<section class="usage">

## Usage

```javascript
var complex = require( '@stdlib/complex/base' );
```

#### complex

Namespace containing "base" (i.e., lower-level) complex number functions.

```javascript
var ns = complex;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cast( fcn, nargs, ctor )`][@stdlib/complex/base/cast-return]</span><span class="delimiter">: </span><span class="description">wrap a function and cast a function's return value to a complex number.</span>
-   <span class="signature">[`wrap( fcn, nargs, ctor )`][@stdlib/complex/base/wrap-function]</span><span class="delimiter">: </span><span class="description">wrap a function accepting complex number arguments to support providing both real and complex numbers.</span>

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
var ns = require( '@stdlib/complex/base' );

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

[@stdlib/complex/base/cast-return]: https://github.com/stdlib-js/complex/tree/main/base/cast-return

[@stdlib/complex/base/wrap-function]: https://github.com/stdlib-js/complex/tree/main/base/wrap-function

<!-- </toc-links> -->

</section>

<!-- /.links -->
