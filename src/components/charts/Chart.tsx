import type { ChartFragmentType } from "@graphql/fragment/commonFragments";
import {
  ChartWrapper,
  type FieldDataType,
  type InfosType,
} from "graph-italia-components";
import "graph-italia-components/dist/style.css";

type ChartProps = {
  data: ChartFragmentType;
};

const Chart = ({ data }: ChartProps) => {
  const info: InfosType = {
    text: data.info ?? "",
    title: data.title ?? undefined,
    subTitle: data.subtitle ?? undefined,
    chartFooterText: data.footerText ?? undefined,
  };

  const extra = {
    id: data.id || "default-chart-id",
    enableDownloadData: data.downloadData,
    enableDownloadImage: data.downloadImage,
    ...(data.showShare
      ? {
          shareFunction: (_: string, event?: React.MouseEvent) =>
            console.log("Share function called", event),
        }
      : {}),
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <ChartWrapper
        data={data.selectChart?.chartData as FieldDataType}
        info={info}
        {...extra}
      />
    </div>
  );
};

export default Chart;
