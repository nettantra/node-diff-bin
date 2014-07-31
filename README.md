# node-diff-bin [![Build Status](https://travis-ci.org/nettantra/node-diff-bin.svg?branch=master)](https://travis-ci.org/nettantra/node-diff-bin)

> A shell executable which can be used to generate diff using the Node.JS diff module

## Installation

This module is installed via npm:

``` bash
$ npm install -g node-diff-bin
```

## Usage

Print the patch output inside the console:

``` bash
$ node-diff first.file second.file
```

Save the patch output to a patch file `first-second.patch`:

``` bash
$ node-diff first.file second.file first-second.patch
```

## License

  - [The MIT License](http://opensource.org/licenses/MIT)


## Release History

 * 2014-07-31	v0.1.0	First release of node-diff-bin.

Copyright (c) [NetTantra Technologies](http://www.nettantra.com/)

---
