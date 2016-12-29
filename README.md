# version-remix-test

> Test project for tool [version-remix][version-remix]

[![NPM][npm-icon] ][npm-url]

[version-remix]: https://github.com/bahmutov/version-remix

This is a small NPM module that shows how we can remix an published
module with a specific commit to selectively create a new published
version. This is useful to cherry pick a particular patch or a feature
for a specific client that uses a version far behind the latest version
of the desired cherry picked commit.

## Changelog

This small module has the following commits and git tags.
Each git tag was published to the NPM registry.

```
* 9c30474 tag: v1.4.1
* ac43ac1 chore(npm): exclude spec file from publishing
...
* 1ff3eef tag: v1.4.0
* b217f1e feat(add): print numbers before adding them
* 789beae tag: v1.3.0
* 610c16b feat(sub): implement sub function
* f32bd12 tag: v1.2.0
* 52ffdce feat(add): implement function add
* cb430f6 tag: v1.1.1
```

### Details

The initial release `v1.1.1` is just an empty placeholder. The first
feature was added in `v1.2.0`. The client could use `add` function
to perform addition of two numbers.

```
npm install version-remix-test@1.2.0
```
```js
const {add} = require('version-remix-test')
add(2, 3)
// 5
```

The next release `v1.3.0` added second operation: subtraction.
The client could perform both, of course, thus it is a `minor` release
according to [semver](http://semver.org/) rules.

```
npm install version-remix-test@1.3.0
```
```js
const {add, calc} = require('version-remix-test')
add(2, 3)
// 5
sub(2, 3)
// -1
```

Then I have decided that `add()` function should print the numbers before
adding them up. It could be considered a breaking change, but I have
published this as a minor release as well. Sometimes it is a judgment call.

```
npm install version-remix-test@1.4.0
```
```js
const {add, calc} = require('version-remix-test')
add(2, 3)
adding 2 to 3
// 5
sub(2, 3)
// -1
```

Finally, I have noticed by running `npm run size` script that the
test file `src/spec.js` was included in the published package. I have
adjusted the `files` list in the [package.json](package.json) to exclude
it and published a patch as version `v1.4.1`.

In summary, each version with its relevant feature

```
v1.4.1 - exclude test spec file from the package
v1.4.0 - print numbers before adding them up
v1.3.0 - "sub" function
v1.2.0 - "add" function
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/version-remix-test/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/version-remix-test.svg?downloads=true
[npm-url]: https://npmjs.org/package/version-remix-test
