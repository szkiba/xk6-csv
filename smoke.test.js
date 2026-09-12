import { check } from "k6";
import CSV from "k6/x/csv";

export const options = {
  thresholds: {
    checks: ["rate == 1.0"],
  },
};

const data = `
Year,Make,Model,Length
1997,Ford,E350,2.35
2000,Mercury,Cougar,2.38
`;

export default function () {
  const lines = CSV.parse(data, ",");

  check(lines, {
    length: (l) => l.length == 2,
    "value[0]": (l) => {
      const line = l[0];
      return line.Year == 1997 && line.Make == "Ford" && line.Model == "E350" && line.Length == 2.35;
    },
    "value[1]": (l) => {
      const line = l[1];
      return line.Year == 2000 && line.Make == "Mercury" && line.Model == "Cougar" && line.Length == 2.38;
    },
  });
}
