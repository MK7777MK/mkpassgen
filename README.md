# passgen
NodeJS Password Generator

# Install
```
npm i mkpassgen
```
# Usage
#### Run mkpassgen:
```
npx mkpassgen
```

#### For help you can use
```
npx mkpassgen -h
```

#### You can change default password length
```
npx mkpassgen -l 10
```

_or_
`npx mkpassgen --length=10`

```
Options:
  -V, --version          output the version number
  -l, --length <length>  Length of Password (default: "8")
  -s, --save             Save Password to passwords.txt
  -c, --copy             Copy Password to Clipboard
  -d, --delete           Delete passwords.txt
  -nn, --no-numbers      No Numbers are Included
  -ns, --no-symbols      No Symbols are Included
  -h, --help             display help for command
```

# License
mkpassgen is released under the MIT license.