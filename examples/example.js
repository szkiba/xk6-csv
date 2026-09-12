import { check } from "k6";
import CSV from "k6/x/csv";
import { SharedArray } from "k6/data";

const data = new SharedArray("customers", () => CSV.parse(open("customers.csv")));

export default function () {
  const lines = CSV.parse(data, ",");

  console.log(data.length);

  for (var i = 0; i < 5; i++) {
    console.log(lines[i].Id);
  }
}
