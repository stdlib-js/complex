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

# dtype

> Return the data type of a complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtype = require( '@stdlib/complex/dtype' );
```

#### dtype( value )

Returns the [data type][@stdlib/complex/dtypes] of a complex number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var dt = dtype( new Complex128( 1.0, 2.0 ) );
// returns 'complex128'
```

If provided an argument having an unknown or unsupported [data type][@stdlib/complex/dtypes], the function returns `null`.

```javascript
var dt = dtype( 'beep' );
// returns null
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

<!-- eslint-disable stdlib/new-cap-error -->

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/complex/dtypes' );
var ctors = require( '@stdlib/complex/ctors' );
var dtype = require( '@stdlib/complex/dtype' );

// Get a list of supported complex number data types:
var DTYPES = dtypes();

// For each supported data type, create a complex number and confirm its data type...
var ctor;
var dt;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
    ctor = ctors( DTYPES[ i ] );
    dt = dtype( new ctor( 1.0, 2.0 ) );
    console.log( '%s == %s => %s', DTYPES[ i ], dt, DTYPES[ i ] === dt );
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

-   <span class="package-name">[`@stdlib/array/dtype`][@stdlib/array/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/dtypes]: https://github.com/stdlib-js/complex/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/dtype]: https://github.com/stdlib-js/array-dtype

<!-- </related-links> -->

</section>

<!-- /.links -->
