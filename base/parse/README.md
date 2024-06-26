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

# parse

> Parses a string representing a complex number into a complex like object `{re: number, im: number}`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```js
var parse = require( '@stdlib/complex/base/parse' );
```

#### parse( str )

Parses a string representing a complex number into a complex like object.

```js
var parse = require( '@stdlib/complex/base/parse' );

var str = '5 + 3i';

var z = parse( str );
// returns <{re: 5, im: 3}>
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

```js
var parse = require( '@stdlib/complex/base/parse' );

var str;
var z;

z = parse( '5 + 4i' );
// returns {'re' : 5, 'im' : 4}

z = parse( 'Infinity + 2.34i' );
// returns {'re' : Infinity, 'im' : 2.34}

z = parse( 'NaN + 4i' );
// returns {'re' : NaN, 'im' : 4}

z = parse( '45i55 + 5' );
// returns null

z = parse( '5 + 6 + 10e4i' );
// returns {'re' : 11, 'im' : 100000}

z = parse( {} );
// returns null
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

-   <span class="package-name">[`@stdlib/complex/float32/ctor`][@stdlib/complex/float32/ctor]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex/tree/main/float32/ctor

<!-- </related-links> -->

</section>

<!-- /.links -->
