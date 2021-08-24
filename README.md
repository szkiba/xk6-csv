# xk6-csv

A k6 extension enables k6 tests to comfortably parse CSV values.

The underlying implementation is https://github.com/gocarina/gocsv

Built for [k6](https://go.k6.io/k6) using [xk6](https://github.com/grafana/xk6).

## Usage

Import an entire module's contents:
```JavaScript
import * as CSV from "k6/x/csv";
```

Import a single export from a module:
```JavaScript
import { parse } from "k6/x/csv";
```

## API

Functions:

- [parse](docs/README.md#parse)

For complete API documentation click [here](docs/README.md)!

## Build

To build a `k6` binary with this extension, first ensure you have the prerequisites:

- [Go toolchain](https://go101.org/article/go-toolchain.html)
- Git

Then:

1. Install `xk6`:
  ```bash
  $ go install go.k6.io/xk6/cmd/xk6@latest
  ```

2. Build the binary:
  ```bash
  $ xk6 build --with github.com/szkiba/xk6-csv@latest
  ```
