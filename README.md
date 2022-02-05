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

# Complex Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Complex number data types.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex@esm/index.mjs';
```

#### ns

Complex number data types.

```javascript
var o = ns;
// returns {...}
```

The namespace constains complex number constructors.

<!-- <toc keywords="+data, +structure, +types"> -->

<div class="namespace-toc">

-   <span class="signature">[`complex( real, imag[, dtype] )`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="signature">[`Complex64( real, imag )`][@stdlib/complex/float32]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>
-   <span class="signature">[`Complex128( real, imag )`][@stdlib/complex/float64]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>

</div>

<!-- </toc> -->

```javascript
var z = ns.complex( 5.0, 3.0 );
// returns <Complex128>

var str = z.toString();
// returns '5 + 3i'

z = ns.complex( 5.0, 3.0, 'float32' );
// returns <Complex64>

z = new ns.Complex64( 5.0, 3.0 );
// returns <Complex64>
```

In addition, the namespace contains the following functions:

<!-- <toc keywords="-data, -structure, -types"> -->

<div class="namespace-toc">

-   <span class="signature">[`conj( z )`][@stdlib/complex/conj]</span><span class="delimiter">: </span><span class="description">return the complex conjugate of a complex number.</span>
-   <span class="signature">[`imag( z )`][@stdlib/complex/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a complex number.</span>
-   <span class="signature">[`real( z )`][@stdlib/complex/real]</span><span class="delimiter">: </span><span class="description">return the real component of a complex number.</span>
-   <span class="signature">[`reim( z )`][@stdlib/complex/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a complex number.</span>
-   <span class="signature">[`reviveComplex64( key, value )`][@stdlib/complex/reviver-float32]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 64-bit complex number.</span>
-   <span class="signature">[`reviveComplex128( key, value )`][@stdlib/complex/reviver-float64]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized 128-bit complex number.</span>
-   <span class="signature">[`reviveComplex( key, value )`][@stdlib/complex/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized complex number.</span>

</div>

<!-- </toc> -->

```javascript
var z = ns.complex( 5.0, 3.0 );
var str = z.toString();
// returns '5 + 3i'

var v = ns.conj( z );
str = v.toString();
// returns '5 - 3i'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex

[test-image]: https://github.com/stdlib-js/complex/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/complex/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex/tree/deno
[umd-url]: https://github.com/stdlib-js/complex/tree/umd
[esm-url]: https://github.com/stdlib-js/complex/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex/main/LICENSE

<!-- <toc-links> -->

[@stdlib/complex/conj]: https://github.com/stdlib-js/complex/tree/main/conj

[@stdlib/complex/imag]: https://github.com/stdlib-js/complex/tree/main/imag

[@stdlib/complex/real]: https://github.com/stdlib-js/complex/tree/main/real

[@stdlib/complex/reim]: https://github.com/stdlib-js/complex/tree/main/reim

[@stdlib/complex/reviver-float32]: https://github.com/stdlib-js/complex/tree/main/reviver-float32

[@stdlib/complex/reviver-float64]: https://github.com/stdlib-js/complex/tree/main/reviver-float64

[@stdlib/complex/reviver]: https://github.com/stdlib-js/complex/tree/main/reviver

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex/tree/main/cmplx

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex/tree/main/float32

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex/tree/main/float64

<!-- </toc-links> -->

</section>

<!-- /.links -->
