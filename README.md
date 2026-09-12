[![API Reference](https://img.shields.io/badge/API-reference-blue?logo=readme&logoColor=lightgray)](https://faker.x.k6.io)
[![GitHub Release](https://img.shields.io/github/v/release/szkiba/xk6-csv)](https://github.com/szkiba/xk6-csv/releases/)
[![Go Report Card](https://goreportcard.com/badge/github.com/szkiba/xk6-csv)](https://goreportcard.com/report/github.com/szkiba/xk6-csv)
[![GitHub Actions](https://github.com/szkiba/xk6-csv/actions/workflows/validate.yml/badge.svg)](https://github.com/szkiba/xk6-csv/actions/workflows/validate.yml)
![GitHub Downloads](https://img.shields.io/github/downloads/szkiba/xk6-csv/total)

# xk6-csv

**CSV parser for k6.**

A k6 extension enables k6 tests to comfortably parse CSV values.

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

The [examples](https://github.com/szkiba/xk6-csv/blob/master/examples) directory contains examples of how to use the xk6-csv extension. A k6 binary containing the xk6-csv extension is required to run the examples.

> [!IMPORTANT]
> If the search path also contains the k6 command, don't forget to specify which k6 you want to run (for example `./k6`).

## Download

You can download pre-built k6 binaries from the [Releases](https://github.com/szkiba/xk6-csv/releases/) page.

**Build**

The [xk6](https://github.com/grafana/xk6) build tool can be used to build a k6 that will include xk6-csv extension:

```bash
$ xk6 build --with github.com/szkiba/xk6-csv@latest
```

For more build options and how to use xk6, check out the [xk6 documentation](https://github.com/grafana/xk6).

## Contribute

If you want to contribute or help with the development of **xk6-csv**, start by reading [CONTRIBUTING.md](CONTRIBUTING.md). 

## Feedback

If you find the xk6-csv extension useful, please star the repo. The number of stars will determine the time allocated for maintenance.

[![Stargazers over time](https://starchart.cc/szkiba/xk6-csv.svg?variant=adaptive)](https://starchart.cc/szkiba/xk6-csv)
