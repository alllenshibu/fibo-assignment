import { useMemo } from "react";

import { Chart } from "react-charts";

export default function ProgressGraph({ data }) {
  return <Chart data={data} tooltip />;
}
