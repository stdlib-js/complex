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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Complex Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Complex number data types.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/complex/tags). For example,

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex@v0.3.3-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { base, complex, ctors, dtype, dtypes, float32, float64, promotionRules, reviveComplex } from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex@esm/index.mjs';
```

#### ns

Complex number data types.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(base|float32|float64)"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/complex/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) complex number functions.</span>
-   <span class="signature">[`float32`][@stdlib/complex/float32]</span><span class="delimiter">: </span><span class="description">single-precision complex floating-point number functions.</span>
-   <span class="signature">[`float64`][@stdlib/complex/float64]</span><span class="delimiter">: </span><span class="description">double-precision complex floating-point number functions.</span>

</div>

<!-- </toc> -->

The namespace contains the following APIs:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`complex( real, imag[, dtype] )`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="signature">[`ctors( dtype )`][@stdlib/complex/ctors]</span><span class="delimiter">: </span><span class="description">complex number constructors.</span>
-   <span class="signature">[`dtype( value )`][@stdlib/complex/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of a complex number.</span>
-   <span class="signature">[`dtypes()`][@stdlib/complex/dtypes]</span><span class="delimiter">: </span><span class="description">list of complex number data types.</span>
-   <span class="signature">[`promotionRules( [dtype1, dtype2] )`][@stdlib/complex/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the complex number data type with the smallest size and closest "kind" to which data types can be **safely** cast.</span>
-   <span class="signature">[`reviveComplex( key, value )`][@stdlib/complex/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized complex number.</span>

</div>

<!-- </toc> -->

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex

[test-image]: https://github.com/stdlib-js/complex/actions/workflows/test.yml/badge.svg?branch=v0.3.3
[test-url]: https://github.com/stdlib-js/complex/actions/workflows/test.yml?query=branch:v0.3.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex/tree/deno
[deno-readme]: https://github.com/stdlib-js/complex/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/complex/tree/umd
[umd-readme]: https://github.com/stdlib-js/complex/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/complex/tree/esm
[esm-readme]: https://github.com/stdlib-js/complex/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/complex/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex/main/LICENSE

<!-- <toc-links> -->

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex/tree/main/cmplx

[@stdlib/complex/ctors]: https://github.com/stdlib-js/complex/tree/main/ctors

[@stdlib/complex/dtype]: https://github.com/stdlib-js/complex/tree/main/dtype

[@stdlib/complex/dtypes]: https://github.com/stdlib-js/complex/tree/main/dtypes

[@stdlib/complex/promotion-rules]: https://github.com/stdlib-js/complex/tree/main/promotion-rules

[@stdlib/complex/reviver]: https://github.com/stdlib-js/complex/tree/main/reviver

[@stdlib/complex/base]: https://github.com/stdlib-js/complex/tree/main/base

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex/tree/main/float32

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex/tree/main/float64

<!-- </toc-links> -->

</section>

<!-- /.links -->
