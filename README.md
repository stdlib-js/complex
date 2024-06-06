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

<section class="installation">

## Installation

```bash
npm install @stdlib/complex
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/complex' );
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

-   <span class="signature">[`base`][@stdlib/complex/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) complex number functions.</span>
-   <span class="signature">[`complex( real, imag[, dtype] )`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="signature">[`complexCtors( dtype )`][@stdlib/complex/ctors]</span><span class="delimiter">: </span><span class="description">complex number constructors.</span>
-   <span class="signature">[`complexDataType( value )`][@stdlib/complex/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of a complex number.</span>
-   <span class="signature">[`complexDataTypes()`][@stdlib/complex/dtypes]</span><span class="delimiter">: </span><span class="description">list of complex number data types.</span>
-   <span class="signature">[`complexPromotionRules( [dtype1, dtype2] )`][@stdlib/complex/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the complex number data type with the smallest size and closest "kind" to which data types can be **safely** cast.</span>

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

-   <span class="signature">[`conj( z )`][@stdlib/complex/conj]</span><span class="delimiter">: </span><span class="description">return the complex conjugate of a double-precision complex floating-point number.</span>
-   <span class="signature">[`conjf( z )`][@stdlib/complex/conjf]</span><span class="delimiter">: </span><span class="description">return the complex conjugate of a single-precision complex floating-point number.</span>
-   <span class="signature">[`imag( z )`][@stdlib/complex/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a double-precision complex floating-point number.</span>
-   <span class="signature">[`imagf( z )`][@stdlib/complex/imagf]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a single-precision complex floating-point number.</span>
-   <span class="signature">[`real( z )`][@stdlib/complex/real]</span><span class="delimiter">: </span><span class="description">return the real component of a double-precision complex floating-point number.</span>
-   <span class="signature">[`realf( z )`][@stdlib/complex/realf]</span><span class="delimiter">: </span><span class="description">return the real component of a single-precision complex floating-point number.</span>
-   <span class="signature">[`reim( z )`][@stdlib/complex/reim]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a double-precision complex floating-point number.</span>
-   <span class="signature">[`reimf( z )`][@stdlib/complex/reimf]</span><span class="delimiter">: </span><span class="description">return the real and imaginary components of a single-precision complex floating-point number.</span>
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

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/complex' );

console.log( objectKeys( ns ) );
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[test-image]: https://github.com/stdlib-js/complex/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex/actions/workflows/test.yml?query=branch:main

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

[@stdlib/complex/conj]: https://github.com/stdlib-js/complex/tree/main/conj

[@stdlib/complex/conjf]: https://github.com/stdlib-js/complex/tree/main/conjf

[@stdlib/complex/imag]: https://github.com/stdlib-js/complex/tree/main/imag

[@stdlib/complex/imagf]: https://github.com/stdlib-js/complex/tree/main/imagf

[@stdlib/complex/real]: https://github.com/stdlib-js/complex/tree/main/real

[@stdlib/complex/realf]: https://github.com/stdlib-js/complex/tree/main/realf

[@stdlib/complex/reim]: https://github.com/stdlib-js/complex/tree/main/reim

[@stdlib/complex/reimf]: https://github.com/stdlib-js/complex/tree/main/reimf

[@stdlib/complex/reviver]: https://github.com/stdlib-js/complex/tree/main/reviver

[@stdlib/complex/base]: https://github.com/stdlib-js/complex/tree/main/base

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex/tree/main/cmplx

[@stdlib/complex/ctors]: https://github.com/stdlib-js/complex/tree/main/ctors

[@stdlib/complex/dtype]: https://github.com/stdlib-js/complex/tree/main/dtype

[@stdlib/complex/dtypes]: https://github.com/stdlib-js/complex/tree/main/dtypes

[@stdlib/complex/promotion-rules]: https://github.com/stdlib-js/complex/tree/main/promotion-rules

<!-- </toc-links> -->

</section>

<!-- /.links -->
