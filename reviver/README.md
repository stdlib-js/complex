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

# reviveComplex

> Revive a JSON-serialized complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reviveComplex = require( '@stdlib/complex/reviver' );
```

#### reviveComplex( key, value )

Revives a JSON-serialized `complex` number.

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );

var str = '{"type":"Complex128","re":5,"im":3}';

var z = parseJSON( str, reviveComplex );
// returns <Complex128>
```

For details on the JSON serialization format, see [`Complex128`][@stdlib/complex/float64/ctor].

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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var reviveComplex = require( '@stdlib/complex/reviver' );

var z = new Complex128( 5.0, 3.0 );
var str = JSON.stringify( z );
// returns '{"type":"Complex128","re":5,"im":3}'

var w = parseJSON( str, reviveComplex );
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

-   <span class="package-name">[`@stdlib/complex/float64/ctor`][@stdlib/complex/float64/ctor]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/complex/float32/ctor`][@stdlib/complex/float32/ctor]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>
-   <span class="package-name">[`@stdlib/complex/float64/reviver`][@stdlib/complex/float64/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/complex/float32/reviver`][@stdlib/complex/float32/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 64-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex/tree/main/float64/ctor

<!-- <related-links> -->

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex/tree/main/float32/ctor

[@stdlib/complex/float64/reviver]: https://github.com/stdlib-js/complex/tree/main/float64/reviver

[@stdlib/complex/float32/reviver]: https://github.com/stdlib-js/complex/tree/main/float32/reviver

<!-- </related-links> -->

</section>

<!-- /.links -->
