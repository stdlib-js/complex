# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-03-12)

<section class="packages">

### Packages

<section class="package" id="complex-unreleased">

#### [@stdlib/complex](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex)

<details>

<section class="features">

##### Features

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-unreleased">

#### [@stdlib/complex/float32/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base)

<details>

<section class="features">

##### Features

-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410): remove `dmaxabs`

    -   To migrate, users should access `dmaxabs` via the `stats/strided` namespace.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-mul-unreleased">

#### [@stdlib/complex/float32/base/mul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/mul)

<details>

<section class="features">

##### Features

-   [`d7154e2`](https://github.com/stdlib-js/stdlib/commit/d7154e2c7756ce51a9bbbf38848960ea988d4ea6) - add `strided` and `assign` APIs to `complex/float32/base/mul` [(#5205)](https://github.com/stdlib-js/stdlib/pull/5205)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5203](https://github.com/stdlib-js/stdlib/issues/5203)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-unreleased">

#### [@stdlib/complex/float64/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base)

<details>

<section class="features">

##### Features

-   [`8409bd1`](https://github.com/stdlib-js/stdlib/commit/8409bd17639c21c94be23d8498789fca5352892b) - update namespace TypeScript declarations [(#4856)](https://github.com/stdlib-js/stdlib/pull/4856)
-   [`a4340c8`](https://github.com/stdlib-js/stdlib/commit/a4340c8e2aea6c40af52e3665c82e35af7b50f96) - add `muladd` to namespace
-   [`82ba934`](https://github.com/stdlib-js/stdlib/commit/82ba9342e9964589c7742757380c72049d5389d4) - add `scale` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-add-unreleased">

#### [@stdlib/complex/float64/base/add](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/add)

<details>

<section class="features">

##### Features

-   [`486fed2`](https://github.com/stdlib-js/stdlib/commit/486fed2b9816530eb135f9846f3745281cec76e2) - add `assign` and `strided` methods

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-div-unreleased">

#### [@stdlib/complex/float64/base/div](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/div)

<details>

<section class="features">

##### Features

-   [`afa2318`](https://github.com/stdlib-js/stdlib/commit/afa231834cb55bc1f0fb01d16b4cb81e7d435a35) - add `complex/float64/base/div`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-mul-unreleased">

#### [@stdlib/complex/float64/base/mul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/mul)

<details>

<section class="features">

##### Features

-   [`a0aef8f`](https://github.com/stdlib-js/stdlib/commit/a0aef8ff6010029008236151a684d1295a66f6a7) - add `strided` API
-   [`e93b466`](https://github.com/stdlib-js/stdlib/commit/e93b4667550eed6470a805d8e244764c6fe26525) - add `assign` method

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-mul-add-unreleased">

#### [@stdlib/complex/float64/base/mul-add](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/mul-add)

<details>

<section class="features">

##### Features

-   [`68cb0b2`](https://github.com/stdlib-js/stdlib/commit/68cb0b20a2333a13fa86f17c9efeb4909179a816) - add `complex/float64/base/mul-add`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-scale-unreleased">

#### [@stdlib/complex/float64/base/scale](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/scale)

<details>

<section class="features">

##### Features

-   [`f7c3e59`](https://github.com/stdlib-js/stdlib/commit/f7c3e59e17ac0198d99838b89b2f2a242f9660ee) - add `complex/float64/base/scale`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410): remove `dmaxabs`

    -   To migrate, users should access `dmaxabs` via the `stats/strided` namespace.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#5203](https://github.com/stdlib-js/stdlib/issues/5203)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gururaj Gurram
-   Philipp Burckhardt
-   Shabareesh Shetty

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`3bad287`](https://github.com/stdlib-js/stdlib/commit/3bad287c1589abf75463bbb43311c22d4a991c22) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`afa2318`](https://github.com/stdlib-js/stdlib/commit/afa231834cb55bc1f0fb01d16b4cb81e7d435a35) - **feat:** add `complex/float64/base/div` _(by Gururaj Gurram)_
-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - **feat:** update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254) _(by stdlib-bot)_
-   [`2752fe3`](https://github.com/stdlib-js/stdlib/commit/2752fe3ed80c146e8a122c1e7ed442099ba367bc) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`d7154e2`](https://github.com/stdlib-js/stdlib/commit/d7154e2c7756ce51a9bbbf38848960ea988d4ea6) - **feat:** add `strided` and `assign` APIs to `complex/float32/base/mul` [(#5205)](https://github.com/stdlib-js/stdlib/pull/5205) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`b957f93`](https://github.com/stdlib-js/stdlib/commit/b957f93bfacfa2b307db9b30a45fa48ce5b4488b) - **docs:** fix description _(by Athan Reines)_
-   [`8409bd1`](https://github.com/stdlib-js/stdlib/commit/8409bd17639c21c94be23d8498789fca5352892b) - **feat:** update namespace TypeScript declarations [(#4856)](https://github.com/stdlib-js/stdlib/pull/4856) _(by stdlib-bot)_
-   [`15204d7`](https://github.com/stdlib-js/stdlib/commit/15204d79d9a8dfeb4c520e6948813f29972e0aa2) - **docs:** update namespace table of contents [(#4858)](https://github.com/stdlib-js/stdlib/pull/4858) _(by stdlib-bot)_
-   [`eb938ff`](https://github.com/stdlib-js/stdlib/commit/eb938fff22223cbbfb04568e30a4f62f8455d3bc) - **bench:** fix incomplete refactoring _(by Athan Reines)_
-   [`a4340c8`](https://github.com/stdlib-js/stdlib/commit/a4340c8e2aea6c40af52e3665c82e35af7b50f96) - **feat:** add `muladd` to namespace _(by Athan Reines)_
-   [`68cb0b2`](https://github.com/stdlib-js/stdlib/commit/68cb0b20a2333a13fa86f17c9efeb4909179a816) - **feat:** add `complex/float64/base/mul-add` _(by Athan Reines)_
-   [`3f8a327`](https://github.com/stdlib-js/stdlib/commit/3f8a327f98267690ae7d101c84e522810986caf0) - **bench:** fix syntax _(by Athan Reines)_
-   [`2ddce39`](https://github.com/stdlib-js/stdlib/commit/2ddce39825650066ba35c74a217ab6425e4f3c9c) - **bench:** fix copy-paste error _(by Athan Reines)_
-   [`82ba934`](https://github.com/stdlib-js/stdlib/commit/82ba9342e9964589c7742757380c72049d5389d4) - **feat:** add `scale` to namespace _(by Athan Reines)_
-   [`f7c3e59`](https://github.com/stdlib-js/stdlib/commit/f7c3e59e17ac0198d99838b89b2f2a242f9660ee) - **feat:** add `complex/float64/base/scale` _(by Athan Reines)_
-   [`486fed2`](https://github.com/stdlib-js/stdlib/commit/486fed2b9816530eb135f9846f3745281cec76e2) - **feat:** add `assign` and `strided` methods _(by Athan Reines)_
-   [`8983ed6`](https://github.com/stdlib-js/stdlib/commit/8983ed6bedb835843fab1a5039095932092e0665) - **test:** add missing test _(by Athan Reines)_
-   [`22a3dcf`](https://github.com/stdlib-js/stdlib/commit/22a3dcfe916b7f5c979d6ee93045d37add5d685d) - **docs:** update namespace TypeScript declaration comments [(#4794)](https://github.com/stdlib-js/stdlib/pull/4794) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a0aef8f`](https://github.com/stdlib-js/stdlib/commit/a0aef8ff6010029008236151a684d1295a66f6a7) - **feat:** add `strided` API _(by Athan Reines)_
-   [`e93b466`](https://github.com/stdlib-js/stdlib/commit/e93b4667550eed6470a805d8e244764c6fe26525) - **feat:** add `assign` method _(by Athan Reines)_
-   [`40308a8`](https://github.com/stdlib-js/stdlib/commit/40308a8953dd480537d4c4359cc6e09f679e3ec1) - **build:** update configurations _(by Athan Reines)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="packages">

### Packages

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`58f787f`](https://github.com/stdlib-js/stdlib/commit/58f787fa43b56f5c5480542d6f91f5038574dbfb) - **chore:** use ComplexLike type _(by Philipp Burckhardt)_
-   [`975147f`](https://github.com/stdlib-js/stdlib/commit/975147f3125c786ec1672acb3d2564ca16eaa790) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="packages">

### Packages

<section class="package" id="complex-v0.3.0">

#### [@stdlib/complex](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`565a2ff`](https://github.com/stdlib-js/stdlib/commit/565a2ffe3aa2c7260109cbacf85bf6029c12e305) - refactor namespace to export subnamespaces
-   [`81b48ae`](https://github.com/stdlib-js/stdlib/commit/81b48aeb9d5d2b16fe039f9db7e710c95a35585f) - update namespace TypeScript declarations [(#2621)](https://github.com/stdlib-js/stdlib/pull/2621)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

-   [`565a2ff`](https://github.com/stdlib-js/stdlib/commit/565a2ffe3aa2c7260109cbacf85bf6029c12e305): APIs renamed and/or moved to subnamespaces

    -   To migrate, users should consult the list of exports to determine
        which properties moved where. Double-precision APIs moved to the
        `float64` namespace and single-precision APIs moved to the `float32`
        namespace. The following properties were renamed:
        - complexCtors => ctors
        - complexDataType => dtype
        - complexDataTypes => dtypes
        - complexPromotionRules => promotionRules

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-v0.3.0">

#### [@stdlib/complex/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base)

<details>

<section class="features">

##### Features

-   [`3edcfe5`](https://github.com/stdlib-js/stdlib/commit/3edcfe5d814fd12a56dbe492ddc78663721f5acd) - update namespace TypeScript declarations [(#2303)](https://github.com/stdlib-js/stdlib/pull/2303)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647): remove `complex/base/assert` namespace

    -   To migrate, users should use the `complex/float32/base/assert` and
        `complex/float64/base/assert` namespaces.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-v0.3.0">

#### [@stdlib/complex/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647): remove `complex/base/assert` namespace

    -   To migrate, users should use the `complex/float32/base/assert` and
        `complex/float64/base/assert` namespaces.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equal-v0.3.0">

#### [@stdlib/complex/base/assert/is-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equal)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equalf-v0.3.0">

#### [@stdlib/complex/base/assert/is-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equalf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`f6c3671`](https://github.com/stdlib-js/stdlib/commit/f6c3671093e29616c7da3347bb311ff8007daba4): remove `complex/base/assert/is-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equal-v0.3.0">

#### [@stdlib/complex/base/assert/is-not-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equal)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`866b939`](https://github.com/stdlib-js/stdlib/commit/866b93963b9ba84407c36b19514aba6ab55489b8): remove `complex/base/assert/is-not-equal`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/base/assert/is-not-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equalf-v0.3.0">

#### [@stdlib/complex/base/assert/is-not-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equalf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`33db937`](https://github.com/stdlib-js/stdlib/commit/33db9374d77760cc20b4f025b6582af7138eda33): remove `complex/base/assert/is-not-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-not-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`155251c`](https://github.com/stdlib-js/stdlib/commit/155251c40cd609f0f667b98834ef3244c9621405): remove `complex/base/assert/is-same-value`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/base/assert/is-same-value` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zero-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zero)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`fd52b0d`](https://github.com/stdlib-js/stdlib/commit/fd52b0da91cb5aa49d287b0ee984fd1e0063e6ab): remove `complex/base/assert/is-same-value-zero`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/base/assert/is-same-value-zero` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zerof-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-value-zerof](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zerof)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`a391a4c`](https://github.com/stdlib-js/stdlib/commit/a391a4c422edfa112a686ccfee71390ae32f9edd): remove `complex/base/assert/is-same-value-zerof`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-same-value` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-valuef-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-valuef](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-valuef)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`91ac840`](https://github.com/stdlib-js/stdlib/commit/91ac840a8f3afd034c16b44ecc441949f70f422b): remove `complex/base/assert/is-same-valuef`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-same-value` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-parse-v0.3.0">

#### [@stdlib/complex/base/parse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/parse)

<details>

<section class="features">

##### Features

-   [`4c6159f`](https://github.com/stdlib-js/stdlib/commit/4c6159fab9d6bd415068072dccc8bd8bfcb6c18c) - add `complex/base/parse` [(#1385)](https://github.com/stdlib-js/stdlib/pull/1385 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-conj-v0.3.0">

#### [@stdlib/complex/conj](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/conj)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`146dc69`](https://github.com/stdlib-js/stdlib/commit/146dc694836012c9b7dff52c67c7e36f52bfbbce): remove `complex/conj`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/conj` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-conjf-v0.3.0">

#### [@stdlib/complex/conjf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/conjf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7444acc`](https://github.com/stdlib-js/stdlib/commit/7444acc6ab0866a6728a07346da45bbcfe4a898c): remove `complex/conjf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/conj` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-v0.3.0">

#### [@stdlib/complex/float32](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`332a9ba`](https://github.com/stdlib-js/stdlib/commit/332a9ba0a364ca81eabc0d73ab8fa5b28f969074) - add `base` to namespace
-   [`69cbd2b`](https://github.com/stdlib-js/stdlib/commit/69cbd2b280adece30d0ecb190787521e4b013be9) - add `parseComplex64` to namespace
-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f) - convert `complex/float32` to a namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f): `complex/float32` converted to a namespace

    -   This commit refactors `complex/float32` to be a namespace. The
        constructor is now the `complex/float32/ctor`. To migrate, users
        should update their import paths to `complex/float32/ctor` which
        provides the same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-v0.3.0">

#### [@stdlib/complex/float32/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`ea241a3`](https://github.com/stdlib-js/stdlib/commit/ea241a32e7bbd7f346ff993d932adbd1857108e1) - add `assert` to namespace
-   [`21604d0`](https://github.com/stdlib-js/stdlib/commit/21604d0a1efaa60b3e2f477d36cdcb967312904d) - add `complex/float32/base` namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-add-v0.3.0">

#### [@stdlib/complex/float32/base/add](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/add)

<details>

<section class="features">

##### Features

-   [`10ef39d`](https://github.com/stdlib-js/stdlib/commit/10ef39d7b94513bf84f70eef5a673725f155e3d5) - add `complex/float32/base/add`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-v0.3.0">

#### [@stdlib/complex/float32/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`69eecad`](https://github.com/stdlib-js/stdlib/commit/69eecadd785a9ba5732e2d136b8755cad6341fd0) - add `complex/float32/base/assert` namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-equal-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-equal)

<details>

<section class="features">

##### Features

-   [`53ff701`](https://github.com/stdlib-js/stdlib/commit/53ff701453daab8775e560a20384b37522e48c54) - add `complex/float32/base/assert/is-equal`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-not-equal-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-not-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-not-equal)

<details>

<section class="features">

##### Features

-   [`77517fe`](https://github.com/stdlib-js/stdlib/commit/77517fea863cd0df1defa56ae9619bcd4f73b1b7) - add `complex/float32/base/assert/is-not-equal`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-same-value-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-same-value)

<details>

<section class="features">

##### Features

-   [`5ee47a5`](https://github.com/stdlib-js/stdlib/commit/5ee47a5cb81f9ed1694606d1cba77a542e8cc0b2) - add `complex/float32/assert/is-same-value`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-assert-is-same-value-zero-v0.3.0">

#### [@stdlib/complex/float32/base/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/assert/is-same-value-zero)

<details>

<section class="features">

##### Features

-   [`6e0db34`](https://github.com/stdlib-js/stdlib/commit/6e0db34815925043c2b92c2e984a6c7f064bce3f) - add `complex/float32/base/assert/is-same-value-zero`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-base-mul-v0.3.0">

#### [@stdlib/complex/float32/base/mul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/base/mul)

<details>

<section class="features">

##### Features

-   [`d6bba38`](https://github.com/stdlib-js/stdlib/commit/d6bba3883b442a2338fb2dbc6a97c6fe6b69edd5) - add `complex/float32/base/mul`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-conj-v0.3.0">

#### [@stdlib/complex/float32/conj](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/conj)

<details>

<section class="features">

##### Features

-   [`cecc11a`](https://github.com/stdlib-js/stdlib/commit/cecc11af413b6065ed9a61d30d547fc07f656173) - add `complex/float32/conj`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-ctor-v0.3.0">

#### [@stdlib/complex/float32/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/ctor)

<details>

<section class="features">

##### Features

-   [`f4cdf4d`](https://github.com/stdlib-js/stdlib/commit/f4cdf4d132061dfce99bad6a0e8a7f3d239d4065) - add `complex/float32/ctor`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-imag-v0.3.0">

#### [@stdlib/complex/float32/imag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/imag)

<details>

<section class="features">

##### Features

-   [`afca2df`](https://github.com/stdlib-js/stdlib/commit/afca2df7a738d071274a8acbec2683df668b9cde) - add `complex/float32/imag`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-real-v0.3.0">

#### [@stdlib/complex/float32/real](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/real)

<details>

<section class="features">

##### Features

-   [`b95c785`](https://github.com/stdlib-js/stdlib/commit/b95c785e7de34adc2e5baa82ddfc460f2052ae4c) - add `complex/float32/real`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-reim-v0.3.0">

#### [@stdlib/complex/float32/reim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/reim)

<details>

<section class="features">

##### Features

-   [`5325850`](https://github.com/stdlib-js/stdlib/commit/5325850f7954c973272d09973ab71ba112deb8e0) - add `complex/float32/reim`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-reviver-v0.3.0">

#### [@stdlib/complex/float32/reviver](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32/reviver)

<details>

<section class="features">

##### Features

-   [`933ebe4`](https://github.com/stdlib-js/stdlib/commit/933ebe4347a6c5c400e0e5fd93faabe1639fe205) - add `complex/float32/reviver`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-v0.3.0">

#### [@stdlib/complex/float64](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`e797f05`](https://github.com/stdlib-js/stdlib/commit/e797f0544c2b5a8415c230350d8dfa4917691d33) - add `base` to namespace
-   [`d9edc48`](https://github.com/stdlib-js/stdlib/commit/d9edc482b619ce39d6d2b0ed172e85e7cb295ba4) - convert `complex/float64` to a namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

-   [`d9edc48`](https://github.com/stdlib-js/stdlib/commit/d9edc482b619ce39d6d2b0ed172e85e7cb295ba4): `complex/float64` converted to a namespace

    -   This commit refactors `complex/float64` to be a namespace. The
        constructor is now the `complex/float64/ctor`. To migrate, users
        should update their import paths to `complex/float64/ctor` which
        provides the same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-v0.3.0">

#### [@stdlib/complex/float64/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`c89d08c`](https://github.com/stdlib-js/stdlib/commit/c89d08c3733ca6b6f1fab8d8ebc95663b8190b5e) - add `assert` to namespace
-   [`12e3d27`](https://github.com/stdlib-js/stdlib/commit/12e3d27221fea685a32218d5bd7255bba1c3b4a3) - add `complex/float64/base` namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-add-v0.3.0">

#### [@stdlib/complex/float64/base/add](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/add)

<details>

<section class="features">

##### Features

-   [`9fd67fc`](https://github.com/stdlib-js/stdlib/commit/9fd67fc9f2f7195f084541bcbf40d24c9b77261c) - add `complex/float64/base/add`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-assert-v0.3.0">

#### [@stdlib/complex/float64/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/assert)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)
-   [`5bb602e`](https://github.com/stdlib-js/stdlib/commit/5bb602e63ab9d543d6f2702a556e7569d01277bb) - add `complex/float64/base/assert` namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-assert-is-not-equal-v0.3.0">

#### [@stdlib/complex/float64/base/assert/is-not-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/assert/is-not-equal)

<details>

<section class="features">

##### Features

-   [`1a93d8f`](https://github.com/stdlib-js/stdlib/commit/1a93d8f68b80f61255d114d779d407bd8eb4877d) - add `complex/float64/base/assert/is-not-equal`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-assert-is-same-value-v0.3.0">

#### [@stdlib/complex/float64/base/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/assert/is-same-value)

<details>

<section class="features">

##### Features

-   [`d925e71`](https://github.com/stdlib-js/stdlib/commit/d925e719b20718f0cd58d41e8630d700be89e725) - add `complex/float64/base/assert/is-same-value`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-assert-is-same-value-zero-v0.3.0">

#### [@stdlib/complex/float64/base/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/assert/is-same-value-zero)

<details>

<section class="features">

##### Features

-   [`45cadfe`](https://github.com/stdlib-js/stdlib/commit/45cadfed2906835952b096ac0b5feab837a01bce) - add `complex/float64/base/assert/is-same-value-zero`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-base-mul-v0.3.0">

#### [@stdlib/complex/float64/base/mul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/base/mul)

<details>

<section class="features">

##### Features

-   [`f1e8ae1`](https://github.com/stdlib-js/stdlib/commit/f1e8ae135a2f8d1d04c11e6a5f93cb639c3f8554) - add `complex/float64/base/mul`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-conj-v0.3.0">

#### [@stdlib/complex/float64/conj](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/conj)

<details>

<section class="features">

##### Features

-   [`76a2524`](https://github.com/stdlib-js/stdlib/commit/76a25248d272330b0ae2e0becd907216037b7a0a) - add `complex/float64/conj`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-ctor-v0.3.0">

#### [@stdlib/complex/float64/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/ctor)

<details>

<section class="features">

##### Features

-   [`2efc790`](https://github.com/stdlib-js/stdlib/commit/2efc79009f71a65f5ac51bd7bb81539ae6d23796) - add `complex/float64/ctor`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3c94d90`](https://github.com/stdlib-js/stdlib/commit/3c94d900f801affd96eef9898a742e51e362f6bd) - update dependency path

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-imag-v0.3.0">

#### [@stdlib/complex/float64/imag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/imag)

<details>

<section class="features">

##### Features

-   [`3e956ce`](https://github.com/stdlib-js/stdlib/commit/3e956ce6a89d9055ffaa3eeb5fcbd9d9cff2e4dd) - add `complex/float64/imag`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-real-v0.3.0">

#### [@stdlib/complex/float64/real](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/real)

<details>

<section class="features">

##### Features

-   [`2495723`](https://github.com/stdlib-js/stdlib/commit/2495723f5cf688903d52fddf05912a6e03d5cdeb) - add `complex/float64/real`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-reim-v0.3.0">

#### [@stdlib/complex/float64/reim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64/reim)

<details>

<section class="features">

##### Features

-   [`59aabc1`](https://github.com/stdlib-js/stdlib/commit/59aabc17b798bff37755488c930b9136ada18d40) - add `complex/float64/reim`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-imag-v0.3.0">

#### [@stdlib/complex/imag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/imag)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`42c94d5`](https://github.com/stdlib-js/stdlib/commit/42c94d51660e57dedf2a3fb2b59c1eb07fca2975): remove `complex/imag`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/imag` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-imagf-v0.3.0">

#### [@stdlib/complex/imagf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/imagf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`1ab834c`](https://github.com/stdlib-js/stdlib/commit/1ab834ceefeb9dcfb1b09a9bd8aa3b0468f3ab9b): remove `complex/imagf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/imag` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-parse-float32-v0.3.0">

#### [@stdlib/complex/parse-float32](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/parse-float32)

<details>

<section class="features">

##### Features

-   [`514d38f`](https://github.com/stdlib-js/stdlib/commit/514d38f081b34d6d7d3d36e95905aa68a5a42d41) - add `complex/parse-float32`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-parse-float64-v0.3.0">

#### [@stdlib/complex/parse-float64](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/parse-float64)

<details>

<section class="features">

##### Features

-   [`1154a11`](https://github.com/stdlib-js/stdlib/commit/1154a117217860afcc92425fd679cfbc0e51c6aa) - add `complex/parse-float64` [(#1362)](https://github.com/stdlib-js/stdlib/pull/1362 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-real-v0.3.0">

#### [@stdlib/complex/real](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/real)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`41fe604`](https://github.com/stdlib-js/stdlib/commit/41fe6043d813771c445a2f685a72b22bee14c748): remove `complex/real`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/real` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-realf-v0.3.0">

#### [@stdlib/complex/realf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/realf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cc6e633`](https://github.com/stdlib-js/stdlib/commit/cc6e633a921b16310fedf0d0cbb2335b36d539f2): remove `complex/realf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/real` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reim-v0.3.0">

#### [@stdlib/complex/reim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reim)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`91256d0`](https://github.com/stdlib-js/stdlib/commit/91256d09c26b154c3144807dabd2e588823030d2): remove `complex/reim`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/reim` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reimf-v0.3.0">

#### [@stdlib/complex/reimf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reimf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`47530f7`](https://github.com/stdlib-js/stdlib/commit/47530f71e0b6f10b8289949516f12919d5031511): remove `complex/reimf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/reim` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reviver-float32-v0.3.0">

#### [@stdlib/complex/reviver-float32](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reviver-float32)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`00d0530`](https://github.com/stdlib-js/stdlib/commit/00d0530d0daabe872c5bc9559abae76b2024dfe3): remove `complex/reviver-float32`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/reviver` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

-   [`565a2ff`](https://github.com/stdlib-js/stdlib/commit/565a2ffe3aa2c7260109cbacf85bf6029c12e305): APIs renamed and/or moved to subnamespaces

    -   To migrate, users should consult the list of exports to determine
        which properties moved where. Double-precision APIs moved to the
        `float64` namespace and single-precision APIs moved to the `float32`
        namespace. The following properties were renamed:
        - complexCtors => ctors
        - complexDataType => dtype
        - complexDataTypes => dtypes
        - complexPromotionRules => promotionRules

-   [`d9edc48`](https://github.com/stdlib-js/stdlib/commit/d9edc482b619ce39d6d2b0ed172e85e7cb295ba4): `complex/float64` converted to a namespace

    -   This commit refactors `complex/float64` to be a namespace. The
        constructor is now the `complex/float64/ctor`. To migrate, users
        should update their import paths to `complex/float64/ctor` which
        provides the same API and implementation.

-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f): `complex/float32` converted to a namespace

    -   This commit refactors `complex/float32` to be a namespace. The
        constructor is now the `complex/float32/ctor`. To migrate, users
        should update their import paths to `complex/float32/ctor` which
        provides the same API and implementation.

-   [`41fe604`](https://github.com/stdlib-js/stdlib/commit/41fe6043d813771c445a2f685a72b22bee14c748): remove `complex/real`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/real` which provides the same API and
        implementation.

-   [`cc6e633`](https://github.com/stdlib-js/stdlib/commit/cc6e633a921b16310fedf0d0cbb2335b36d539f2): remove `complex/realf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/real` which provides the same API and
        implementation.

-   [`42c94d5`](https://github.com/stdlib-js/stdlib/commit/42c94d51660e57dedf2a3fb2b59c1eb07fca2975): remove `complex/imag`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/imag` which provides the same API and
        implementation.

-   [`1ab834c`](https://github.com/stdlib-js/stdlib/commit/1ab834ceefeb9dcfb1b09a9bd8aa3b0468f3ab9b): remove `complex/imagf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/imag` which provides the same API and
        implementation.

-   [`91256d0`](https://github.com/stdlib-js/stdlib/commit/91256d09c26b154c3144807dabd2e588823030d2): remove `complex/reim`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/reim` which provides the same API and
        implementation.

-   [`47530f7`](https://github.com/stdlib-js/stdlib/commit/47530f71e0b6f10b8289949516f12919d5031511): remove `complex/reimf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/reim` which provides the same API and
        implementation.

-   [`146dc69`](https://github.com/stdlib-js/stdlib/commit/146dc694836012c9b7dff52c67c7e36f52bfbbce): remove `complex/conj`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/conj` which provides the same API and
        implementation.

-   [`7444acc`](https://github.com/stdlib-js/stdlib/commit/7444acc6ab0866a6728a07346da45bbcfe4a898c): remove `complex/conjf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/conj` which provides the same API and
        implementation.

-   [`866b939`](https://github.com/stdlib-js/stdlib/commit/866b93963b9ba84407c36b19514aba6ab55489b8): remove `complex/base/assert/is-not-equal`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/base/assert/is-not-equal` which provides the
        same API and implementation.

-   [`33db937`](https://github.com/stdlib-js/stdlib/commit/33db9374d77760cc20b4f025b6582af7138eda33): remove `complex/base/assert/is-not-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-not-equal` which provides the
        same API and implementation.

-   [`f6c3671`](https://github.com/stdlib-js/stdlib/commit/f6c3671093e29616c7da3347bb311ff8007daba4): remove `complex/base/assert/is-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-equal` which provides the
        same API and implementation.

-   [`155251c`](https://github.com/stdlib-js/stdlib/commit/155251c40cd609f0f667b98834ef3244c9621405): remove `complex/base/assert/is-same-value`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/base/assert/is-same-value` which provides the
        same API and implementation.

-   [`fd52b0d`](https://github.com/stdlib-js/stdlib/commit/fd52b0da91cb5aa49d287b0ee984fd1e0063e6ab): remove `complex/base/assert/is-same-value-zero`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float64/base/assert/is-same-value-zero` which provides the
        same API and implementation.

-   [`a391a4c`](https://github.com/stdlib-js/stdlib/commit/a391a4c422edfa112a686ccfee71390ae32f9edd): remove `complex/base/assert/is-same-value-zerof`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-same-value` which provides the
        same API and implementation.

-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647): remove `complex/base/assert` namespace

    -   To migrate, users should use the `complex/float32/base/assert` and
        `complex/float64/base/assert` namespaces.

-   [`91ac840`](https://github.com/stdlib-js/stdlib/commit/91ac840a8f3afd034c16b44ecc441949f70f422b): remove `complex/base/assert/is-same-valuef`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/base/assert/is-same-value` which provides the
        same API and implementation.

-   [`00d0530`](https://github.com/stdlib-js/stdlib/commit/00d0530d0daabe872c5bc9559abae76b2024dfe3): remove `complex/reviver-float32`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex/float32/reviver` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Pranav Goswami
-   Rejoan Sardar
-   Snehil Shah
-   Spandan Barve

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`a304cd8`](https://github.com/stdlib-js/stdlib/commit/a304cd8eba1aefe44f74a0273bd4c08345ee92f4) - **docs:** update namespace table of contents [(#2648)](https://github.com/stdlib-js/stdlib/pull/2648) _(by stdlib-bot, Athan Reines)_
-   [`9dc29b4`](https://github.com/stdlib-js/stdlib/commit/9dc29b4d2e6eb5ba0b2625c3bfe9f50034a3ed99) - **docs:** add sub-namespace sections and update namespace table of contents _(by Philipp Burckhardt)_
-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - **feat:** update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628) _(by stdlib-bot, Athan Reines)_
-   [`565a2ff`](https://github.com/stdlib-js/stdlib/commit/565a2ffe3aa2c7260109cbacf85bf6029c12e305) - **feat:** refactor namespace to export subnamespaces _(by Athan Reines)_
-   [`ea241a3`](https://github.com/stdlib-js/stdlib/commit/ea241a32e7bbd7f346ff993d932adbd1857108e1) - **feat:** add `assert` to namespace _(by Athan Reines)_
-   [`69eecad`](https://github.com/stdlib-js/stdlib/commit/69eecadd785a9ba5732e2d136b8755cad6341fd0) - **feat:** add `complex/float32/base/assert` namespace _(by Athan Reines)_
-   [`c89d08c`](https://github.com/stdlib-js/stdlib/commit/c89d08c3733ca6b6f1fab8d8ebc95663b8190b5e) - **feat:** add `assert` to namespace _(by Athan Reines)_
-   [`5bb602e`](https://github.com/stdlib-js/stdlib/commit/5bb602e63ab9d543d6f2702a556e7569d01277bb) - **feat:** add `complex/float64/base/assert` namespace _(by Athan Reines)_
-   [`e797f05`](https://github.com/stdlib-js/stdlib/commit/e797f0544c2b5a8415c230350d8dfa4917691d33) - **feat:** add `base` to namespace _(by Athan Reines)_
-   [`12e3d27`](https://github.com/stdlib-js/stdlib/commit/12e3d27221fea685a32218d5bd7255bba1c3b4a3) - **feat:** add `complex/float64/base` namespace _(by Athan Reines)_
-   [`332a9ba`](https://github.com/stdlib-js/stdlib/commit/332a9ba0a364ca81eabc0d73ab8fa5b28f969074) - **feat:** add `base` to namespace _(by Athan Reines)_
-   [`21604d0`](https://github.com/stdlib-js/stdlib/commit/21604d0a1efaa60b3e2f477d36cdcb967312904d) - **feat:** add `complex/float32/base` namespace _(by Athan Reines)_
-   [`d9edc48`](https://github.com/stdlib-js/stdlib/commit/d9edc482b619ce39d6d2b0ed172e85e7cb295ba4) - **feat:** convert `complex/float64` to a namespace _(by Athan Reines)_
-   [`69cbd2b`](https://github.com/stdlib-js/stdlib/commit/69cbd2b280adece30d0ecb190787521e4b013be9) - **feat:** add `parseComplex64` to namespace _(by Athan Reines)_
-   [`a0516b7`](https://github.com/stdlib-js/stdlib/commit/a0516b707ec22a182856d3bed344b7f5e241e01f) - **feat:** convert `complex/float32` to a namespace _(by Athan Reines)_
-   [`e3a3679`](https://github.com/stdlib-js/stdlib/commit/e3a3679f1e733cf02ce47cdc4bd0137bd37bef41) - **refactor:** update paths _(by Athan Reines)_
-   [`f1e8ae1`](https://github.com/stdlib-js/stdlib/commit/f1e8ae135a2f8d1d04c11e6a5f93cb639c3f8554) - **feat:** add `complex/float64/base/mul` _(by Athan Reines)_
-   [`ddd4403`](https://github.com/stdlib-js/stdlib/commit/ddd44032f9d8a6d318c80e3b239ff72280ffc599) - **refactor:** update paths _(by Athan Reines)_
-   [`d6bba38`](https://github.com/stdlib-js/stdlib/commit/d6bba3883b442a2338fb2dbc6a97c6fe6b69edd5) - **feat:** add `complex/float32/base/mul` _(by Athan Reines)_
-   [`aee4bd7`](https://github.com/stdlib-js/stdlib/commit/aee4bd7d4fdb43ce009ef03a573a0fe2e6f78625) - **bench:** update mode _(by Athan Reines)_
-   [`81b48ae`](https://github.com/stdlib-js/stdlib/commit/81b48aeb9d5d2b16fe039f9db7e710c95a35585f) - **feat:** update namespace TypeScript declarations [(#2621)](https://github.com/stdlib-js/stdlib/pull/2621) _(by stdlib-bot, Philipp Burckhardt)_
-   [`0406147`](https://github.com/stdlib-js/stdlib/commit/04061476d1036e1b8b786736b1ba1653eddff1ef) - **refactor:** update paths _(by Athan Reines)_
-   [`b9703b5`](https://github.com/stdlib-js/stdlib/commit/b9703b569dc2f0a67e604e388a0d188b08138b48) - **refactor:** update paths _(by Athan Reines)_
-   [`10ef39d`](https://github.com/stdlib-js/stdlib/commit/10ef39d7b94513bf84f70eef5a673725f155e3d5) - **feat:** add `complex/float32/base/add` _(by Athan Reines)_
-   [`9fd67fc`](https://github.com/stdlib-js/stdlib/commit/9fd67fc9f2f7195f084541bcbf40d24c9b77261c) - **feat:** add `complex/float64/base/add` _(by Athan Reines)_
-   [`41fe604`](https://github.com/stdlib-js/stdlib/commit/41fe6043d813771c445a2f685a72b22bee14c748) - **remove:** remove `complex/real` _(by Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`2495723`](https://github.com/stdlib-js/stdlib/commit/2495723f5cf688903d52fddf05912a6e03d5cdeb) - **feat:** add `complex/float64/real` _(by Athan Reines)_
-   [`cc6e633`](https://github.com/stdlib-js/stdlib/commit/cc6e633a921b16310fedf0d0cbb2335b36d539f2) - **remove:** remove `complex/realf` _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`b95c785`](https://github.com/stdlib-js/stdlib/commit/b95c785e7de34adc2e5baa82ddfc460f2052ae4c) - **feat:** add `complex/float32/real` _(by Athan Reines)_
-   [`42c94d5`](https://github.com/stdlib-js/stdlib/commit/42c94d51660e57dedf2a3fb2b59c1eb07fca2975) - **remove:** remove `complex/imag` _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`3e956ce`](https://github.com/stdlib-js/stdlib/commit/3e956ce6a89d9055ffaa3eeb5fcbd9d9cff2e4dd) - **feat:** add `complex/float64/imag` _(by Athan Reines)_
-   [`1ab834c`](https://github.com/stdlib-js/stdlib/commit/1ab834ceefeb9dcfb1b09a9bd8aa3b0468f3ab9b) - **remove:** remove `complex/imagf` _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`afca2df`](https://github.com/stdlib-js/stdlib/commit/afca2df7a738d071274a8acbec2683df668b9cde) - **feat:** add `complex/float32/imag` _(by Athan Reines)_
-   [`91256d0`](https://github.com/stdlib-js/stdlib/commit/91256d09c26b154c3144807dabd2e588823030d2) - **remove:** remove `complex/reim` _(by Athan Reines)_
-   [`8908bda`](https://github.com/stdlib-js/stdlib/commit/8908bda11588f80edf375466ae9e84a3d70cf7d3) - **refactor:** update paths _(by Athan Reines)_
-   [`59aabc1`](https://github.com/stdlib-js/stdlib/commit/59aabc17b798bff37755488c930b9136ada18d40) - **feat:** add `complex/float64/reim` _(by Athan Reines)_
-   [`47530f7`](https://github.com/stdlib-js/stdlib/commit/47530f71e0b6f10b8289949516f12919d5031511) - **remove:** remove `complex/reimf` _(by Athan Reines)_
-   [`ad760a9`](https://github.com/stdlib-js/stdlib/commit/ad760a922086631226d8f759a0d467c707fbc0fb) - **refactor:** update paths _(by Athan Reines)_
-   [`5325850`](https://github.com/stdlib-js/stdlib/commit/5325850f7954c973272d09973ab71ba112deb8e0) - **feat:** add `complex/float32/reim` _(by Athan Reines)_
-   [`146dc69`](https://github.com/stdlib-js/stdlib/commit/146dc694836012c9b7dff52c67c7e36f52bfbbce) - **remove:** remove `complex/conj` _(by Athan Reines)_
-   [`87fdfa1`](https://github.com/stdlib-js/stdlib/commit/87fdfa106f4c75b60a3c79c7fb4ca08f5c172862) - **refactor:** update paths _(by Athan Reines)_
-   [`76a2524`](https://github.com/stdlib-js/stdlib/commit/76a25248d272330b0ae2e0becd907216037b7a0a) - **feat:** add `complex/float64/conj` _(by Athan Reines)_
-   [`7444acc`](https://github.com/stdlib-js/stdlib/commit/7444acc6ab0866a6728a07346da45bbcfe4a898c) - **remove:** remove `complex/conjf` _(by Athan Reines)_
-   [`0ede1a5`](https://github.com/stdlib-js/stdlib/commit/0ede1a53e30a7a85d74481fbcdfb44e28016fa55) - **refactor:** update paths _(by Athan Reines)_
-   [`cecc11a`](https://github.com/stdlib-js/stdlib/commit/cecc11af413b6065ed9a61d30d547fc07f656173) - **feat:** add `complex/float32/conj` _(by Athan Reines)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`c3ebfa8`](https://github.com/stdlib-js/stdlib/commit/c3ebfa80e311db338b171ebf8eb5f46bc66e9bf6) - **docs:** update namespace table of contents and address spelling errors _(by Philipp Burckhardt)_
-   [`3edcfe5`](https://github.com/stdlib-js/stdlib/commit/3edcfe5d814fd12a56dbe492ddc78663721f5acd) - **feat:** update namespace TypeScript declarations [(#2303)](https://github.com/stdlib-js/stdlib/pull/2303) _(by stdlib-bot, Athan Reines)_
-   [`3a3b1e0`](https://github.com/stdlib-js/stdlib/commit/3a3b1e08f73a54c5ee46d73045805aee0bb1196d) - **docs:** update package URLs [(#2269)](https://github.com/stdlib-js/stdlib/pull/2269) _(by stdlib-bot)_
-   [`8089b88`](https://github.com/stdlib-js/stdlib/commit/8089b886a4d7d89f15abb068b1021d93f9c4f64e) - **docs:** update paths _(by Athan Reines)_
-   [`038b199`](https://github.com/stdlib-js/stdlib/commit/038b199c32842c02cf678e3ae8305a17aacda05e) - **docs:** update paths _(by Athan Reines)_
-   [`866b939`](https://github.com/stdlib-js/stdlib/commit/866b93963b9ba84407c36b19514aba6ab55489b8) - **remove:** remove `complex/base/assert/is-not-equal` _(by Athan Reines)_
-   [`1a93d8f`](https://github.com/stdlib-js/stdlib/commit/1a93d8f68b80f61255d114d779d407bd8eb4877d) - **feat:** add `complex/float64/base/assert/is-not-equal` _(by Athan Reines)_
-   [`33db937`](https://github.com/stdlib-js/stdlib/commit/33db9374d77760cc20b4f025b6582af7138eda33) - **remove:** remove `complex/base/assert/is-not-equalf` _(by Athan Reines)_
-   [`77517fe`](https://github.com/stdlib-js/stdlib/commit/77517fea863cd0df1defa56ae9619bcd4f73b1b7) - **feat:** add `complex/float32/base/assert/is-not-equal` _(by Athan Reines)_
-   [`f6c3671`](https://github.com/stdlib-js/stdlib/commit/f6c3671093e29616c7da3347bb311ff8007daba4) - **remove:** remove `complex/base/assert/is-equalf` _(by Athan Reines)_
-   [`53ff701`](https://github.com/stdlib-js/stdlib/commit/53ff701453daab8775e560a20384b37522e48c54) - **feat:** add `complex/float32/base/assert/is-equal` _(by Athan Reines)_
-   [`155251c`](https://github.com/stdlib-js/stdlib/commit/155251c40cd609f0f667b98834ef3244c9621405) - **remove:** remove `complex/base/assert/is-same-value` _(by Athan Reines)_
-   [`d925e71`](https://github.com/stdlib-js/stdlib/commit/d925e719b20718f0cd58d41e8630d700be89e725) - **feat:** add `complex/float64/base/assert/is-same-value` _(by Athan Reines)_
-   [`fd52b0d`](https://github.com/stdlib-js/stdlib/commit/fd52b0da91cb5aa49d287b0ee984fd1e0063e6ab) - **remove:** remove `complex/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`45cadfe`](https://github.com/stdlib-js/stdlib/commit/45cadfed2906835952b096ac0b5feab837a01bce) - **feat:** add `complex/float64/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`a391a4c`](https://github.com/stdlib-js/stdlib/commit/a391a4c422edfa112a686ccfee71390ae32f9edd) - **remove:** remove `complex/base/assert/is-same-value-zerof` _(by Athan Reines)_
-   [`6e0db34`](https://github.com/stdlib-js/stdlib/commit/6e0db34815925043c2b92c2e984a6c7f064bce3f) - **feat:** add `complex/float32/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647) - **remove:** remove `complex/base/assert` namespace _(by Athan Reines)_
-   [`91ac840`](https://github.com/stdlib-js/stdlib/commit/91ac840a8f3afd034c16b44ecc441949f70f422b) - **remove:** remove `complex/base/assert/is-same-valuef` _(by Athan Reines)_
-   [`e20ba77`](https://github.com/stdlib-js/stdlib/commit/e20ba77de9ecf13d82630e3d88e014af0aed5a5b) - **docs:** update path _(by Athan Reines)_
-   [`32fd387`](https://github.com/stdlib-js/stdlib/commit/32fd3872225d598d3c29eeb1c837641a85d21364) - **docs:** update paths _(by Athan Reines)_
-   [`5ee47a5`](https://github.com/stdlib-js/stdlib/commit/5ee47a5cb81f9ed1694606d1cba77a542e8cc0b2) - **feat:** add `complex/float32/assert/is-same-value` _(by Athan Reines)_
-   [`00d0530`](https://github.com/stdlib-js/stdlib/commit/00d0530d0daabe872c5bc9559abae76b2024dfe3) - **remove:** remove `complex/reviver-float32` _(by Athan Reines)_
-   [`933ebe4`](https://github.com/stdlib-js/stdlib/commit/933ebe4347a6c5c400e0e5fd93faabe1639fe205) - **feat:** add `complex/float32/reviver` _(by Athan Reines)_
-   [`fddbd39`](https://github.com/stdlib-js/stdlib/commit/fddbd394c07a509e11d1e4e16dfc951838e1fbc8) - **refactor:** avoid duplication and use dedicated packages _(by Athan Reines)_
-   [`2bb2164`](https://github.com/stdlib-js/stdlib/commit/2bb2164d4bed793ebf5cb9848d348fb5c9e31a2c) - **docs:** update examples _(by Athan Reines)_
-   [`7078536`](https://github.com/stdlib-js/stdlib/commit/7078536718b3ddc8f2ebe1dcdf0dc32a306b12f5) - **refactor:** use ctors package _(by Athan Reines)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`3c94d90`](https://github.com/stdlib-js/stdlib/commit/3c94d900f801affd96eef9898a742e51e362f6bd) - **fix:** update dependency path _(by Athan Reines)_
-   [`2efc790`](https://github.com/stdlib-js/stdlib/commit/2efc79009f71a65f5ac51bd7bb81539ae6d23796) - **feat:** add `complex/float64/ctor` _(by Athan Reines)_
-   [`f4cdf4d`](https://github.com/stdlib-js/stdlib/commit/f4cdf4d132061dfce99bad6a0e8a7f3d239d4065) - **feat:** add `complex/float32/ctor` _(by Athan Reines)_
-   [`63d1de7`](https://github.com/stdlib-js/stdlib/commit/63d1de749b7277c6974cad2c078dfe1caa589063) - **chore:** change to relative require path and fix code style _(by Philipp Burckhardt)_
-   [`57e8762`](https://github.com/stdlib-js/stdlib/commit/57e87620ec449ad73b884e3b4850537df0c494fe) - **chore:** change to relative require paths and fix code style _(by Philipp Burckhardt)_
-   [`a9bf096`](https://github.com/stdlib-js/stdlib/commit/a9bf0960cff2227ff551671eb2de9e00e7c9851c) - **chore:** use relative paths for internal requires _(by Philipp Burckhardt)_
-   [`514d38f`](https://github.com/stdlib-js/stdlib/commit/514d38f081b34d6d7d3d36e95905aa68a5a42d41) - **feat:** add `complex/parse-float32` _(by Rejoan Sardar, Pranav)_
-   [`1154a11`](https://github.com/stdlib-js/stdlib/commit/1154a117217860afcc92425fd679cfbc0e51c6aa) - **feat:** add `complex/parse-float64` [(#1362)](https://github.com/stdlib-js/stdlib/pull/1362 ) _(by Snehil Shah, Pranav, Athan Reines, Philipp Burckhardt)_
-   [`4c6159f`](https://github.com/stdlib-js/stdlib/commit/4c6159fab9d6bd415068072dccc8bd8bfcb6c18c) - **feat:** add `complex/base/parse` [(#1385)](https://github.com/stdlib-js/stdlib/pull/1385 ) _(by Spandan Barve, Athan Reines, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="packages">

### Packages

<section class="package" id="complex-v0.2.0">

#### [@stdlib/complex](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`b31d186`](https://github.com/stdlib-js/stdlib/commit/b31d186b58baeacf8927ecf65a9c91f4077baf58) - add `equalComplex64` to namespace
-   [`08c5d69`](https://github.com/stdlib-js/stdlib/commit/08c5d695686beaf6855462669e4705abe50c8c0d) - add `equalComplex128` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-v0.2.0">

#### [@stdlib/complex/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`81b94bd`](https://github.com/stdlib-js/stdlib/commit/81b94bd0f572f1108a8ea5a7d15cd1e14ebbb362) - add `assert` to namespace and fix description

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-v0.2.0">

#### [@stdlib/complex/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`5ca21f2`](https://github.com/stdlib-js/stdlib/commit/5ca21f212ae936776a49b61f4fc8d24c74877d03) - add `isSameValueZerof` to namespace
-   [`7edde5e`](https://github.com/stdlib-js/stdlib/commit/7edde5e9f4126c2d11021323cfbf501219f32c00) - add `isSameValueZero` to namespace
-   [`bb1ec6e`](https://github.com/stdlib-js/stdlib/commit/bb1ec6e76a828f09c412b7ae32118a530495622f) - add `isSameValuef` to namespace
-   [`f6ff2c1`](https://github.com/stdlib-js/stdlib/commit/f6ff2c14adc722b42e6a548835b1f7a3e8ca6de9) - add `isSameValue` to namespace
-   [`dc81423`](https://github.com/stdlib-js/stdlib/commit/dc814231dc13b326ee14a7b250dd76c919b1ad86) - add `isNotEqualf` to namespace
-   [`79dad80`](https://github.com/stdlib-js/stdlib/commit/79dad80ed450b07fbb37382bd33b197273bc0fff) - add `isNotEqual` to namespace
-   [`c084c0b`](https://github.com/stdlib-js/stdlib/commit/c084c0b26456c92cda8dbe3f0bf93ae4c32260bf) - add `complex/base/assert`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equal-v0.2.0">

#### [@stdlib/complex/base/assert/is-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equal)

<details>

<section class="features">

##### Features

-   [`02bad1a`](https://github.com/stdlib-js/stdlib/commit/02bad1a684640693a46819992f8935ffc7b203e1) - add `complex/base/assert/is-equal`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number/*` conventions
-   [`d7296b0`](https://github.com/stdlib-js/stdlib/commit/d7296b0cec2d377442b6ae03ae1b75b558860216) - update include path

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equalf-v0.2.0">

#### [@stdlib/complex/base/assert/is-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equalf)

<details>

<section class="features">

##### Features

-   [`59fb1e6`](https://github.com/stdlib-js/stdlib/commit/59fb1e66b6d1ed34cf97d8240840aa26ca1f2e44) - add `complex/base/assert/is-equalf`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number/*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equal-v0.2.0">

#### [@stdlib/complex/base/assert/is-not-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equal)

<details>

<section class="features">

##### Features

-   [`875311c`](https://github.com/stdlib-js/stdlib/commit/875311c68a4ea8e012242f57d4a27ace4f18c314) - add `complex/base/assert/is-not-equal`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number/*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equalf-v0.2.0">

#### [@stdlib/complex/base/assert/is-not-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equalf)

<details>

<section class="features">

##### Features

-   [`190fd03`](https://github.com/stdlib-js/stdlib/commit/190fd0318fe6d0c62300df3d5c8c053b784e9634) - add `complex/base/assert/is-not-equalf`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number/*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value)

<details>

<section class="features">

##### Features

-   [`28a9723`](https://github.com/stdlib-js/stdlib/commit/28a97234bc4c69e7d384cd9b5b9a72d13a7ed66d) - add `complex/base/assert/is-same-value`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ed7fbf1`](https://github.com/stdlib-js/stdlib/commit/ed7fbf13dd9bddb93a5588bdaf5fa78ad7a68f99) - rename C APIs to align with `@stdlib/number/*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zero-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zero)

<details>

<section class="features">

##### Features

-   [`9f459e9`](https://github.com/stdlib-js/stdlib/commit/9f459e9df86e092665a81c8b51b5c87d4d436bc7) - add `complex/base/assert/is-same-value-zero`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zerof-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-value-zerof](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zerof)

<details>

<section class="features">

##### Features

-   [`14d1d3d`](https://github.com/stdlib-js/stdlib/commit/14d1d3da0bd9dbee4e3b1268364acf227d1cfec1) - add `complex/base/assert/is-same-value-zerof`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-valuef-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-valuef](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-valuef)

<details>

<section class="features">

##### Features

-   [`35895a3`](https://github.com/stdlib-js/stdlib/commit/35895a393721b953a5d00219047a5d0417985520) - add `complex/base/assert/is-same-valuef`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-dtype-v0.2.0">

#### [@stdlib/complex/dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/dtype)

<details>

<section class="features">

##### Features

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - rename type definitions for array and ndarray data types

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0): rename type definitions for array and ndarray data types

    -   In order to migrate, users should update their implementations to
        use the latest naming conventions. The affected type definitions
        are aliases for individual data type strings, so their should be
        no behavioral changes.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-dtypes-v0.2.0">

#### [@stdlib/complex/dtypes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/dtypes)

<details>

<section class="features">

##### Features

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - rename type definitions for array and ndarray data types

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0): rename type definitions for array and ndarray data types

    -   In order to migrate, users should update their implementations to
        use the latest naming conventions. The affected type definitions
        are aliases for individual data type strings, so their should be
        no behavioral changes.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-eq-v0.2.0">

#### [@stdlib/complex/eq](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/eq)

<details>

<section class="features">

##### Features

-   [`d806c8c`](https://github.com/stdlib-js/stdlib/commit/d806c8c85a9d4e5df88b1cc0c4674a4e8584511b) - add `complex/eq`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9ab3f37`](https://github.com/stdlib-js/stdlib/commit/9ab3f375160e963eed84ce860a1aba54d18d4561): remove `complex/eq`

    -   To migrate, users should use `@stdlib/complex/base/assert/is-equal`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-eqf-v0.2.0">

#### [@stdlib/complex/eqf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/eqf)

<details>

<section class="features">

##### Features

-   [`e99eac7`](https://github.com/stdlib-js/stdlib/commit/e99eac7dbc8a79c4a45f01f044ae5059264f2673) - add `complex/eqf`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`2b880de`](https://github.com/stdlib-js/stdlib/commit/2b880de752f87d556180d9dbfcc3f6f31411fdc5): remove `complex/eqf`

    -   To migrate, users should use `@stdlib/complex/base/assert/is-equalf`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-promotion-rules-v0.2.0">

#### [@stdlib/complex/promotion-rules](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/promotion-rules)

<details>

<section class="features">

##### Features

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - rename type definitions for array and ndarray data types

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0): rename type definitions for array and ndarray data types

    -   In order to migrate, users should update their implementations to
        use the latest naming conventions. The affected type definitions
        are aliases for individual data type strings, so their should be
        no behavioral changes.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`2b880de`](https://github.com/stdlib-js/stdlib/commit/2b880de752f87d556180d9dbfcc3f6f31411fdc5): remove `complex/eqf`

    -   To migrate, users should use `@stdlib/complex/base/assert/is-equalf`.

-   [`9ab3f37`](https://github.com/stdlib-js/stdlib/commit/9ab3f375160e963eed84ce860a1aba54d18d4561): remove `complex/eq`

    -   To migrate, users should use `@stdlib/complex/base/assert/is-equal`.

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0): rename type definitions for array and ndarray data types

    -   In order to migrate, users should update their implementations to
        use the latest naming conventions. The affected type definitions
        are aliases for individual data type strings, so their should be
        no behavioral changes.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`322d1ca`](https://github.com/stdlib-js/stdlib/commit/322d1cac1bb150c548b5ad3b3086acd8e74a7bbd) - **docs:** update namespace table of contents [(#1284)](https://github.com/stdlib-js/stdlib/pull/1284) _(by stdlib-bot, Philipp Burckhardt)_
-   [`442fbfc`](https://github.com/stdlib-js/stdlib/commit/442fbfc181ef5859b67bdfad43dbe998ad07783e) - **docs:** update Markdown stdlib package URLs [(#1274)](https://github.com/stdlib-js/stdlib/pull/1274) _(by stdlib-bot)_
-   [`14b7db2`](https://github.com/stdlib-js/stdlib/commit/14b7db2b102ce54a583b490554cbbdb4813aa62d) - **docs:** update link _(by Athan Reines)_
-   [`a3f3058`](https://github.com/stdlib-js/stdlib/commit/a3f3058c7660f81f0e83b35732fd7bf385ea9f0e) - **docs:** update link _(by Athan Reines)_
-   [`5ca21f2`](https://github.com/stdlib-js/stdlib/commit/5ca21f212ae936776a49b61f4fc8d24c74877d03) - **feat:** add `isSameValueZerof` to namespace _(by Athan Reines)_
-   [`14d1d3d`](https://github.com/stdlib-js/stdlib/commit/14d1d3da0bd9dbee4e3b1268364acf227d1cfec1) - **feat:** add `complex/base/assert/is-same-value-zerof` _(by Athan Reines)_
-   [`17a73cd`](https://github.com/stdlib-js/stdlib/commit/17a73cdf0cfa67d9b19c0922027fbb05dffd6053) - **docs:** fix copy _(by Athan Reines)_
-   [`4cf9064`](https://github.com/stdlib-js/stdlib/commit/4cf90647739905687707739bf44727d622c3cd3f) - **docs:** update note _(by Athan Reines)_
-   [`7edde5e`](https://github.com/stdlib-js/stdlib/commit/7edde5e9f4126c2d11021323cfbf501219f32c00) - **feat:** add `isSameValueZero` to namespace _(by Athan Reines)_
-   [`9f459e9`](https://github.com/stdlib-js/stdlib/commit/9f459e9df86e092665a81c8b51b5c87d4d436bc7) - **feat:** add `complex/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`01e4fb4`](https://github.com/stdlib-js/stdlib/commit/01e4fb4948cef7c6eb32ae195e1abb696e7f8e59) - **docs:** fix typo _(by Athan Reines)_
-   [`d2ce216`](https://github.com/stdlib-js/stdlib/commit/d2ce21614afceb840bc7d8aae4f398aa154fa2f9) - **docs:** fix typo _(by Athan Reines)_
-   [`bb1ec6e`](https://github.com/stdlib-js/stdlib/commit/bb1ec6e76a828f09c412b7ae32118a530495622f) - **feat:** add `isSameValuef` to namespace _(by Athan Reines)_
-   [`35895a3`](https://github.com/stdlib-js/stdlib/commit/35895a393721b953a5d00219047a5d0417985520) - **feat:** add `complex/base/assert/is-same-valuef` _(by Athan Reines)_
-   [`5ef4279`](https://github.com/stdlib-js/stdlib/commit/5ef42795874e36a4c08ad3dce6d9555b27c7b04d) - **docs:** fix description _(by Athan Reines)_
-   [`12f0c7e`](https://github.com/stdlib-js/stdlib/commit/12f0c7e26b231f785b1bc640691b0aa70243b673) - **refactor:** use base float64 utility _(by Athan Reines)_
-   [`39ff9ab`](https://github.com/stdlib-js/stdlib/commit/39ff9abe1bd64e8ecea833c40740c26df7fddc60) - **chore:** fix copyright year _(by Athan Reines)_
-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - **fix:** rename C APIs to align with `@stdlib/number/*` conventions _(by Athan Reines)_
-   [`ed7fbf1`](https://github.com/stdlib-js/stdlib/commit/ed7fbf13dd9bddb93a5588bdaf5fa78ad7a68f99) - **fix:** rename C APIs to align with `@stdlib/number/*` conventions _(by Athan Reines)_
-   [`e8283f2`](https://github.com/stdlib-js/stdlib/commit/e8283f28b3212456fd6179d94f0d0de8e195780e) - **style:** fix alignment _(by Athan Reines)_
-   [`f6ff2c1`](https://github.com/stdlib-js/stdlib/commit/f6ff2c14adc722b42e6a548835b1f7a3e8ca6de9) - **feat:** add `isSameValue` to namespace _(by Athan Reines)_
-   [`28a9723`](https://github.com/stdlib-js/stdlib/commit/28a97234bc4c69e7d384cd9b5b9a72d13a7ed66d) - **feat:** add `complex/base/assert/is-same-value` _(by Athan Reines)_
-   [`dc81423`](https://github.com/stdlib-js/stdlib/commit/dc814231dc13b326ee14a7b250dd76c919b1ad86) - **feat:** add `isNotEqualf` to namespace _(by Athan Reines)_
-   [`190fd03`](https://github.com/stdlib-js/stdlib/commit/190fd0318fe6d0c62300df3d5c8c053b784e9634) - **feat:** add `complex/base/assert/is-not-equalf` _(by Athan Reines)_
-   [`79dad80`](https://github.com/stdlib-js/stdlib/commit/79dad80ed450b07fbb37382bd33b197273bc0fff) - **feat:** add `isNotEqual` to namespace _(by Athan Reines)_
-   [`875311c`](https://github.com/stdlib-js/stdlib/commit/875311c68a4ea8e012242f57d4a27ace4f18c314) - **feat:** add `complex/base/assert/is-not-equal` _(by Athan Reines)_
-   [`38f7e94`](https://github.com/stdlib-js/stdlib/commit/38f7e94d05a500c6aae609e4b11232d5db35c08e) - **docs:** fix include path _(by Athan Reines)_
-   [`d7296b0`](https://github.com/stdlib-js/stdlib/commit/d7296b0cec2d377442b6ae03ae1b75b558860216) - **fix:** update include path _(by Athan Reines)_
-   [`81b94bd`](https://github.com/stdlib-js/stdlib/commit/81b94bd0f572f1108a8ea5a7d15cd1e14ebbb362) - **feat:** add `assert` to namespace and fix description _(by Athan Reines)_
-   [`c084c0b`](https://github.com/stdlib-js/stdlib/commit/c084c0b26456c92cda8dbe3f0bf93ae4c32260bf) - **feat:** add `complex/base/assert` _(by Athan Reines)_
-   [`61ec9f3`](https://github.com/stdlib-js/stdlib/commit/61ec9f3bf75b53293bdeac40202eefc5bac82492) - **remove:** delete `equalComplex128` and `equalComplex64` from namespace _(by Athan Reines)_
-   [`2b880de`](https://github.com/stdlib-js/stdlib/commit/2b880de752f87d556180d9dbfcc3f6f31411fdc5) - **remove:** remove `complex/eqf` _(by Athan Reines)_
-   [`59fb1e6`](https://github.com/stdlib-js/stdlib/commit/59fb1e66b6d1ed34cf97d8240840aa26ca1f2e44) - **feat:** add `complex/base/assert/is-equalf` _(by Athan Reines)_
-   [`9ab3f37`](https://github.com/stdlib-js/stdlib/commit/9ab3f375160e963eed84ce860a1aba54d18d4561) - **remove:** remove `complex/eq` _(by Athan Reines)_
-   [`02bad1a`](https://github.com/stdlib-js/stdlib/commit/02bad1a684640693a46819992f8935ffc7b203e1) - **feat:** add `complex/base/assert/is-equal` _(by Athan Reines)_
-   [`b31d186`](https://github.com/stdlib-js/stdlib/commit/b31d186b58baeacf8927ecf65a9c91f4077baf58) - **feat:** add `equalComplex64` to namespace _(by Athan Reines)_
-   [`e99eac7`](https://github.com/stdlib-js/stdlib/commit/e99eac7dbc8a79c4a45f01f044ae5059264f2673) - **feat:** add `complex/eqf` _(by Athan Reines)_
-   [`08c5d69`](https://github.com/stdlib-js/stdlib/commit/08c5d695686beaf6855462669e4705abe50c8c0d) - **feat:** add `equalComplex128` to namespace _(by Athan Reines)_
-   [`d806c8c`](https://github.com/stdlib-js/stdlib/commit/d806c8c85a9d4e5df88b1cc0c4674a4e8584511b) - **feat:** add `complex/eq` _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - **feat:** rename type definitions for array and ndarray data types _(by Athan Reines)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`46d049b`](https://github.com/stdlib-js/stdlib/commit/46d049b5d38f9ef6e426d6a517ac8925c94d7642) - **build:** replace tslint directive _(by Philipp Burckhardt)_
-   [`1275ef7`](https://github.com/stdlib-js/stdlib/commit/1275ef713bc51293970cc01dcf92f6ec75134000) - **docs:** update links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="packages">

### Packages

<section class="package" id="complex-v0.1.0">

#### [@stdlib/complex](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-v0.1.0">

#### [@stdlib/complex/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-cast-return-v0.1.0">

#### [@stdlib/complex/base/cast-return](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/cast-return)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-wrap-function-v0.1.0">

#### [@stdlib/complex/base/wrap-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/wrap-function)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-cmplx-v0.1.0">

#### [@stdlib/complex/cmplx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/cmplx)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-conj-v0.1.0">

#### [@stdlib/complex/conj](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/conj)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-conjf-v0.1.0">

#### [@stdlib/complex/conjf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/conjf)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-ctors-v0.1.0">

#### [@stdlib/complex/ctors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/ctors)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-dtype-v0.1.0">

#### [@stdlib/complex/dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/dtype)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-dtypes-v0.1.0">

#### [@stdlib/complex/dtypes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/dtypes)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float32-v0.1.0">

#### [@stdlib/complex/float32](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float32)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-float64-v0.1.0">

#### [@stdlib/complex/float64](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/float64)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-imag-v0.1.0">

#### [@stdlib/complex/imag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/imag)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-imagf-v0.1.0">

#### [@stdlib/complex/imagf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/imagf)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-promotion-rules-v0.1.0">

#### [@stdlib/complex/promotion-rules](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/promotion-rules)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-real-v0.1.0">

#### [@stdlib/complex/real](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/real)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-realf-v0.1.0">

#### [@stdlib/complex/realf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/realf)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reim-v0.1.0">

#### [@stdlib/complex/reim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reim)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reimf-v0.1.0">

#### [@stdlib/complex/reimf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reimf)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reviver-v0.1.0">

#### [@stdlib/complex/reviver](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reviver)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reviver-float32-v0.1.0">

#### [@stdlib/complex/reviver-float32](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reviver-float32)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-reviver-float64-v0.1.0">

#### [@stdlib/complex/reviver-float64](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/reviver-float64)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`ac78ce0`](https://github.com/stdlib-js/stdlib/commit/ac78ce0b1ec7b3178eb955d4eeb7d3a3753a3561) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`ab5d324`](https://github.com/stdlib-js/stdlib/commit/ab5d324b547870938b21ebdeecc1f7fda132f321) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`07cc80b`](https://github.com/stdlib-js/stdlib/commit/07cc80b4aa930750251fc70c8b9afe72801da142) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.12">

## 0.0.12 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

