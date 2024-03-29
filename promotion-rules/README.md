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

# Promotion Rules

> Return the complex number [data type][@stdlib/complex/dtypes] with the smallest size and closest "kind" to which data types can be **safely** cast.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var promotionRules = require( '@stdlib/complex/promotion-rules' );
```

#### promotionRules( \[dtype1, dtype2] )

If provided data types, returns the complex number [data type][@stdlib/complex/dtypes] with the smallest size and closest "kind" to which data types can be **safely** cast.

```javascript
var out = promotionRules( 'complex128', 'complex64' );
// returns 'complex128'
```

If not provided data types, the function returns a promotion table.

```javascript
var out = promotionRules();
// returns {...}

var c128 = out[ 'complex128' ];
// returns {...}

var rule = c128[ 'uint32' ];
// returns 'complex128'
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = promotionRules( 'foo', 'complex128' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a [data type][@stdlib/complex/dtypes] to which data types can be safely cast does **not** exist (or is not supported), the function returns `-1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/complex/dtypes' );
var promotionRules = require( '@stdlib/complex/promotion-rules' );

var DTYPES;
var dt1;
var dt2;
var dt;
var i;
var j;

// Get the list of supported data types:
DTYPES = dtypes();

// Print the promotion rule for each pair of data types...
for ( i = 0; i < DTYPES.length; i++ ) {
    dt1 = DTYPES[ i ];
    for ( j = 0; j < DTYPES.length; j++ ) {
        dt2 = DTYPES[ j ];
        dt = promotionRules( dt1, dt2 );
        console.log( '(%s, %s) => %s', dt1, dt2, dt );
    }
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

-   <span class="package-name">[`@stdlib/array/promotion-rules`][@stdlib/array/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the array data type with the smallest size and closest kind to which array data types can be safely cast.</span>
-   <span class="package-name">[`@stdlib/ndarray/promotion-rules`][@stdlib/ndarray/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the ndarray data type with the smallest size and closest kind to which ndarray data types can be safely cast.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/dtypes]: https://github.com/stdlib-js/complex/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/promotion-rules]: https://github.com/stdlib-js/array-promotion-rules

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray-promotion-rules

<!-- </related-links> -->

</section>

<!-- /.links -->
