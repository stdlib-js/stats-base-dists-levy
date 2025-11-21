# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-11-21)

<section class="features">

### Features

-   [`70c26f9`](https://github.com/stdlib-js/stdlib/commit/70c26f984a2a6e6fd73f57398498fcf4985e56ad) - add C implementation for `stats/base/dists/levy/logpdf`
-   [`36e56bb`](https://github.com/stdlib-js/stdlib/commit/36e56bb67d7299d6a44ba5e9acf76a671ac8b563) - add C implementation for `stats/base/dists/levy/pdf` [(#4918)](https://github.com/stdlib-js/stdlib/pull/4918)
-   [`f014e0e`](https://github.com/stdlib-js/stdlib/commit/f014e0e4b230707b12a62c9b5d671ca7e03cebf8) - add C implementation for `stats/base/dists/levy/logcdf` [(#4391)](https://github.com/stdlib-js/stdlib/pull/4391)
-   [`6f4bd30`](https://github.com/stdlib-js/stdlib/commit/6f4bd30c7d69a33501b97b25936a8101555f7837) - add C implementation for `stats/base/dists/levy/cdf` [(#4288)](https://github.com/stdlib-js/stdlib/pull/4288)
-   [`d623ed1`](https://github.com/stdlib-js/stdlib/commit/d623ed12dbc7560a7f9e1a9fb0d22f88f097952c) - add C implementation for `stats/base/dists/levy/entropy` [(#4919)](https://github.com/stdlib-js/stdlib/pull/4919)
-   [`ad7a023`](https://github.com/stdlib-js/stdlib/commit/ad7a02395bbac49b3049917fdc82c1c1c9dae08b) - add C implementation for `stats/base/dists/levy/variance` [(#3963)](https://github.com/stdlib-js/stdlib/pull/3963)
-   [`b790b70`](https://github.com/stdlib-js/stdlib/commit/b790b70f71820f266db46156d3dfef2443d33920) - add C implementation for `stats/base/dists/levy/median` [(#4076)](https://github.com/stdlib-js/stdlib/pull/4076)
-   [`2bb57c6`](https://github.com/stdlib-js/stdlib/commit/2bb57c69cdf5668f7a1490f85edd538a3f7517e4) - add C implementation for `stats/base/dists/levy/quantile` [(#4756)](https://github.com/stdlib-js/stdlib/pull/4756)
-   [`22f6479`](https://github.com/stdlib-js/stdlib/commit/22f64794de72b72a085ab840b4058b4b138f14e3) - add C implementation for `stats/base/dists/levy/stdev` [(#4077)](https://github.com/stdlib-js/stdlib/pull/4077)
-   [`9ca3aff`](https://github.com/stdlib-js/stdlib/commit/9ca3aff4e92f1d7603edfe755fd7f572f97a260c) - add C implementation for `stats/base/dists/levy/mode`   [(#4078)](https://github.com/stdlib-js/stdlib/pull/4078)
-   [`a0cf7f4`](https://github.com/stdlib-js/stdlib/commit/a0cf7f458576b1a1d4222fbd75d6544b57edcedd) - add C implementation for `stats/base/dists/levy/mean` [(#4071)](https://github.com/stdlib-js/stdlib/pull/4071)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`1425b4a`](https://github.com/stdlib-js/stdlib/commit/1425b4a8b4a396b4e760ca3d99bd4345638d9f03) - remove unused `eps` dependency from `levy/logcdf` manifest

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 12 issues were closed in this release:

[#3722](https://github.com/stdlib-js/stdlib/issues/3722), [#3723](https://github.com/stdlib-js/stdlib/issues/3723), [#3724](https://github.com/stdlib-js/stdlib/issues/3724), [#3726](https://github.com/stdlib-js/stdlib/issues/3726), [#3727](https://github.com/stdlib-js/stdlib/issues/3727), [#3728](https://github.com/stdlib-js/stdlib/issues/3728), [#3729](https://github.com/stdlib-js/stdlib/issues/3729), [#3730](https://github.com/stdlib-js/stdlib/issues/3730), [#3731](https://github.com/stdlib-js/stdlib/issues/3731), [#3732](https://github.com/stdlib-js/stdlib/issues/3732), [#4977](https://github.com/stdlib-js/stdlib/issues/4977), [#5893](https://github.com/stdlib-js/stdlib/issues/5893)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`9b13062`](https://github.com/stdlib-js/stdlib/commit/9b130625f0f19866a877023e9be85204636ef01e) - **docs:** fix return values in TSDoc return annotation comments _(by Philipp Burckhardt)_
-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`4589cee`](https://github.com/stdlib-js/stdlib/commit/4589cee4e69b2a4c4a433321f413824a69eebb6e) - **docs:** fix return annotation values _(by Philipp Burckhardt)_
-   [`e678757`](https://github.com/stdlib-js/stdlib/commit/e678757c9a62631a907278ec13a5d7b27c0f1e15) - **docs:** fix return annotation values _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`fc438e0`](https://github.com/stdlib-js/stdlib/commit/fc438e0edbad0689d6923d6f3edb959b96597662) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`7e24b8b`](https://github.com/stdlib-js/stdlib/commit/7e24b8ba0fff87a56584bb1a2fa106eb88267596) - **test:** slightly increase tolerances for passing tests _(by Philipp Burckhardt)_
-   [`dc32afc`](https://github.com/stdlib-js/stdlib/commit/dc32afc5a19ebe7825ed085633b225c55557f047) - **chore:** add missing eps dependency to benchmark and examples configs _(by Philipp Burckhardt)_
-   [`3cf6f11`](https://github.com/stdlib-js/stdlib/commit/3cf6f1197da802f472735e132e8994bda4ae364c) - **docs:** update `stats/base/dists/levy` examples to use Greek symbols _(by Philipp Burckhardt)_
-   [`4f869cf`](https://github.com/stdlib-js/stdlib/commit/4f869cf32ebce5318a88343471b8ea884c29448e) - **test:** fix tolerances _(by Athan Reines)_
-   [`84f5212`](https://github.com/stdlib-js/stdlib/commit/84f5212d586c237d0f3b8b191991c342a754f866) - **chore:** remove extra blank line _(by Athan Reines)_
-   [`2355e5d`](https://github.com/stdlib-js/stdlib/commit/2355e5d18ee7962e028a732ac76026a512f35f23) - **docs:** add missing periods _(by Philipp Burckhardt)_
-   [`70c26f9`](https://github.com/stdlib-js/stdlib/commit/70c26f984a2a6e6fd73f57398498fcf4985e56ad) - **feat:** add C implementation for `stats/base/dists/levy/logpdf` _(by Philipp Burckhardt)_
-   [`27a0d50`](https://github.com/stdlib-js/stdlib/commit/27a0d5068f072e84bc99470744da5b55714d21a4) - **test:** fix missing `opts` argument _(by Athan Reines)_
-   [`36e56bb`](https://github.com/stdlib-js/stdlib/commit/36e56bb67d7299d6a44ba5e9acf76a671ac8b563) - **feat:** add C implementation for `stats/base/dists/levy/pdf` [(#4918)](https://github.com/stdlib-js/stdlib/pull/4918) _(by Nishchay Rajput, Philipp Burckhardt)_
-   [`1425b4a`](https://github.com/stdlib-js/stdlib/commit/1425b4a8b4a396b4e760ca3d99bd4345638d9f03) - **fix:** remove unused `eps` dependency from `levy/logcdf` manifest _(by Philipp Burckhardt)_
-   [`f014e0e`](https://github.com/stdlib-js/stdlib/commit/f014e0e4b230707b12a62c9b5d671ca7e03cebf8) - **feat:** add C implementation for `stats/base/dists/levy/logcdf` [(#4391)](https://github.com/stdlib-js/stdlib/pull/4391) _(by Dhruv Arvind Singh, Philipp Burckhardt, stdlib-bot)_
-   [`f9ec3b6`](https://github.com/stdlib-js/stdlib/commit/f9ec3b6e86ad6c9feeb95cb6ed1a356af7f452b9) - **docs:** fix function names _(by Philipp Burckhardt)_
-   [`14de0d5`](https://github.com/stdlib-js/stdlib/commit/14de0d5c6faeb5fa357cd6acc2d72ef62fc25146) - **chore:** clean-up _(by Athan Reines)_
-   [`2197129`](https://github.com/stdlib-js/stdlib/commit/2197129dcd1c034d99215bad69975d72fc7b3e72) - **chore:** clean-up _(by Athan Reines)_
-   [`6f4bd30`](https://github.com/stdlib-js/stdlib/commit/6f4bd30c7d69a33501b97b25936a8101555f7837) - **feat:** add C implementation for `stats/base/dists/levy/cdf` [(#4288)](https://github.com/stdlib-js/stdlib/pull/4288) _(by Aadish Jain, Philipp Burckhardt, stdlib-bot)_
-   [`d623ed1`](https://github.com/stdlib-js/stdlib/commit/d623ed12dbc7560a7f9e1a9fb0d22f88f097952c) - **feat:** add C implementation for `stats/base/dists/levy/entropy` [(#4919)](https://github.com/stdlib-js/stdlib/pull/4919) _(by Nishchay Rajput, Philipp Burckhardt)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`73050cb`](https://github.com/stdlib-js/stdlib/commit/73050cb11de45fd04b8e59c5df8ef30f891dba07) - **bench:** refactor random number generation in `stats/base/dists/levy` [(#6044)](https://github.com/stdlib-js/stdlib/pull/6044) _(by Hemant M Mehta, Athan Reines)_
-   [`4748a5a`](https://github.com/stdlib-js/stdlib/commit/4748a5a2ba84c637c10515c018a9f5162f42c8ee) - **chore(sincosd):** address commit comments [(#5955)](https://github.com/stdlib-js/stdlib/pull/5955) _(by Jaison Dsouza)_
-   [`d74f923`](https://github.com/stdlib-js/stdlib/commit/d74f923f42af3dd384a9565d56d0f4eec217ed14) - **chore:** remove extra empty lines [(#5839)](https://github.com/stdlib-js/stdlib/pull/5839) _(by stdlib-bot)_
-   [`ad7a023`](https://github.com/stdlib-js/stdlib/commit/ad7a02395bbac49b3049917fdc82c1c1c9dae08b) - **feat:** add C implementation for `stats/base/dists/levy/variance` [(#3963)](https://github.com/stdlib-js/stdlib/pull/3963) _(by Aayush Khanna, Philipp Burckhardt, stdlib-bot)_
-   [`b790b70`](https://github.com/stdlib-js/stdlib/commit/b790b70f71820f266db46156d3dfef2443d33920) - **feat:** add C implementation for `stats/base/dists/levy/median` [(#4076)](https://github.com/stdlib-js/stdlib/pull/4076) _(by Vivek Maurya, Philipp Burckhardt, stdlib-bot)_
-   [`2bb57c6`](https://github.com/stdlib-js/stdlib/commit/2bb57c69cdf5668f7a1490f85edd538a3f7517e4) - **feat:** add C implementation for `stats/base/dists/levy/quantile` [(#4756)](https://github.com/stdlib-js/stdlib/pull/4756) _(by Saurabh Singh, Philipp Burckhardt, stdlib-bot)_
-   [`f505ed5`](https://github.com/stdlib-js/stdlib/commit/f505ed56b0c0cc20458f9e51760d45d5abd60b36) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`177f0a0`](https://github.com/stdlib-js/stdlib/commit/177f0a00909c097be05d47107a3e6ab05b865409) - **chore:** consistently use differential entropy for continuous distributions _(by Philipp Burckhardt)_
-   [`22f6479`](https://github.com/stdlib-js/stdlib/commit/22f64794de72b72a085ab840b4058b4b138f14e3) - **feat:** add C implementation for `stats/base/dists/levy/stdev` [(#4077)](https://github.com/stdlib-js/stdlib/pull/4077) _(by Vivek Maurya, Philipp Burckhardt, stdlib-bot)_
-   [`9ca3aff`](https://github.com/stdlib-js/stdlib/commit/9ca3aff4e92f1d7603edfe755fd7f572f97a260c) - **feat:** add C implementation for `stats/base/dists/levy/mode`   [(#4078)](https://github.com/stdlib-js/stdlib/pull/4078) _(by Vivek Maurya, Philipp Burckhardt, stdlib-bot)_
-   [`a0cf7f4`](https://github.com/stdlib-js/stdlib/commit/a0cf7f458576b1a1d4222fbd75d6544b57edcedd) - **feat:** add C implementation for `stats/base/dists/levy/mean` [(#4071)](https://github.com/stdlib-js/stdlib/pull/4071) _(by Vivek Maurya, Philipp Burckhardt, stdlib-bot)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 11 people contributed to this release. Thank you to the following contributors:

-   Aadish Jain
-   Aayush Khanna
-   Athan Reines
-   Dhruv Arvind Singh
-   Hemant M Mehta
-   Jaison Dsouza
-   Karan Anand
-   Nishchay Rajput
-   Philipp Burckhardt
-   Saurabh Singh
-   Vivek Maurya

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`640025b`](https://github.com/stdlib-js/stdlib/commit/640025bb14bd041fbe504ccc89becc0f647bb7cd) - **build:** use supported operators for GitHub rendering _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

