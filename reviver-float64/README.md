<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# reviveComplex128

> Revive a JSON-serialized 128-bit [complex number][@stdlib/complex/float64].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reviveComplex128 = require( '@stdlib/complex/reviver-float64' );
```

#### reviveComplex128( key, value )

Revives a JSON-serialized 128-bit [complex number][@stdlib/complex/float64].

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );

var str = '{"type":"Complex128","re":5,"im":3}';

var z = parseJSON( str, reviveComplex128 );
// returns <Complex128>
```

For details on the JSON serialization format, see [`Complex128`][@stdlib/complex/float64].

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
var Complex128 = require( '@stdlib/complex/float64' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var reviveComplex128 = require( '@stdlib/complex/reviver-float64' );

var z = new Complex128( 5.0, 3.0 );
var str = JSON.stringify( z );
// returns '{"type":"Complex128","re":5,"im":3}'

var w = parseJSON( str, reviveComplex128 );
if ( w instanceof Error ) {
    throw w;
}
var bool = ( w instanceof z.constructor );
// returns true

bool = ( w.re === z.re );
// returns true

bool = ( w.im === z.im );
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/float64`][@stdlib/complex/float64]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/complex/reviver-float32`][@stdlib/complex/reviver-float32]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 64-bit complex number.</span>
-   <span class="package-name">[`@stdlib/complex/reviver`][@stdlib/complex/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex/tree/main/float64

<!-- <related-links> -->

[@stdlib/complex/reviver-float32]: https://github.com/stdlib-js/complex/tree/main/reviver-float32

[@stdlib/complex/reviver]: https://github.com/stdlib-js/complex/tree/main/reviver

<!-- </related-links> -->

</section>

<!-- /.links -->