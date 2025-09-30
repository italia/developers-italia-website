import {
  ChartWrapper,
  type FieldDataType,
  type InfosType,
} from "dataviz-components";
import type { SettingsChartRecord } from "../../graphql/types";

type ChartProps = {
  data: SettingsChartRecord;
};

export const Chart = ({ data }: ChartProps) => {
  const chartData = data.selectChart?.chartData as FieldDataType;
  const info: InfosType = {
    text: data.info || "",
    title: data.title,
    subTitle: data.subtitle,
    chartFooterText: data.footerText,
  };

  const extra = {
    id: data.id || "default-chart-id",
    enableDownloadData: data.downloadData || false,
    enableDownloadImage: data.downloadImage || false,
    ...(data.showShare
      ? {
          shareFunction: (_: string, event?: React.MouseEvent) =>
            console.log("Share function called", event),
        }
      : {}),
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <ChartWrapper data={chartData} info={info} {...extra} />
    </div>
  );
};
