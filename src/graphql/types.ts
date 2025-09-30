import type { FieldDataType, KpiItemType } from "dataviz-components";
import type { introspection_types } from "./graphql-env";

export type SiteLocale = introspection_types["SiteLocale"]["enumValues"];

export type SettingsKpiRecord = {
  title: string;
  subtitle?: string;
  selectKpi?: KpiItemType[];
};

export type SettingsChartRecord = {
  downloadData?: boolean;
  downloadImage?: boolean;
  footerText?: string;
  id: string;
  info?: string;
  selectChart?: { chartData: FieldDataType };
  showShare?: boolean;
  subtitle?: string;
  title?: string;
};
