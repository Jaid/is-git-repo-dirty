# is-git-repo-dirty


Promise that returns true if a given directory is a dirty git repository.

## Installation
<a href='https://npmjs.com/package/is-git-repo-dirty'><img alt='npm logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/npm.png'/></a>
```bash
npm install --save is-git-repo-dirty@^1.0.1
```
<a href='https://yarnpkg.com/package/is-git-repo-dirty'><img alt='Yarn logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/yarn.png'/></a>
```bash
yarn add is-git-repo-dirty@^1.0.1
```



## Documentation
**Kind**: Exported function  
**Returns**: <code>Promise.&lt;(boolean\|null)&gt;</code> - `true` if repository is dirty, `false` if repository is clean, `null` if given directory is not a git repository  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | Absolute path to a git repository directory |

**Example**  
```javascript
import isGitRepoDirty from "is-git-repo-dirty"
const result = await isGitRepoDirty("/my/path")
result === false
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
