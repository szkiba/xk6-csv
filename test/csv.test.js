/**
 * MIT License
 *
 * Copyright (c) 2021 Iván Szkiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export { options } from "./expect.js";
import { describe } from "./expect.js";
import CSV from "k6/x/csv";

const sample = open("./testdata/sample.csv");

const array = `
Year,Make,Model,Length
1997,Ford,E350,2.35
2000,Mercury,Cougar,2.38
`;

export default function () {
  describe("parse", (t) => {
    const arr = CSV.parse(array, ",");
    t.expect(arr[1].Year).as("second item's Year").toEqual("2000");
  });

  describe("separator", (t) => {
    const arr = CSV.parse(array.replace(/,/g, ";"), ";");
    t.expect(arr[1].Year).as("second item's Year").toEqual("2000");
  });

  describe("sample", (t) => {
    const arr = CSV.parse(sample);
    t.expect(arr[0].Year).as("first item's Year").toEqual("1997");
    t.expect(arr[1].Model).as("second item's Model").toEqual(`Venture "Extended Edition"`);
  });
}
