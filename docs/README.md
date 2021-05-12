# xk6-csv

xk6-csv enables k6 tests to comfortably parse CSV values.

## Usage

Import an entire module's contents:
```JavaScript
import * as CSV from "k6/x/csv";
```

Import a single export from a module:
```JavaScript
import { parse } from "k6/x/csv";
```

## Table of contents

### Functions

- [parse](README.md#parse)

## Functions

### parse

▸ **parse**(`text`: *string*, `separator?`: *string*): *object*[]

The parse() method parses a CSV string, constructing the JavaScript array objects described by the string.
The first line of CSV file must be the header with field names. The returned array will contains objects corresponding
to CSV lines, one object per line, with field names as property names and field values as property values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | *string* | The string to parse as CSV |
| `separator?` | *string* | The field separator character, must be one character string if present. Default is comma (`,`) |

**Returns:** *object*[]

The array of objects corresponding to the given CSV text.
