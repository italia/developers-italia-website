import { RenderChart, type FieldDataType } from "dataviz-components";

export const ExampleBarChart = () => {
  const sampleData: FieldDataType = {
    dataSource: "",
    id: "cm92sqeed00036c5hqlqdm0xb",
    name: "avanzamento_dei_progetti-barchart-2025-04-04_15-03",
    description: "avanzamento_dei_progetti",
    chart: "bar",
    config: {
      background: "#fff",
      h: 350,
      zoom: "none",
      stack: false,
      colors: [
        "#003366",
        "#004D99",
        "#0066CC",
        "#207AD5",
        "#4392E0",
        "#D48D22",
        "#CC7A00",
        "#B36B00",
        "#995C00",
        "#804D00",
      ],
      legend: true,
      smooth: "0.3",
      xLabel: "",
      yLabel: "",
      gridTop: "60",
      nameGap: "40",
      palette: ["divergente_b"],
      tooltip: true,
      gridLeft: "10%",
      labeLine: false,
      showArea: false,
      direction: "vertical",
      gridRight: "10%",
      gridWidth: "auto",
      gridBottom: "60",
      gridHeight: "auto",
      responsive: true,
      totalLabel: "Totale",
      showAllSymbol: true,
      legendPosition: "top",
      tooltipTrigger: "axis",
      valueFormatter: "",
      tooltipFormatter: "number",
    },
    data: [
      ["Misura", "liquidate", "stanziate non liquidate", "disponibili"],
      ["1.1 Infrastrutture digitali", 21070551, 148499540, 356629909],
      [
        "1.2 Abilitazione e facilitazione migrazione al Cloud",
        187481680,
        671303602,
        128214718,
      ],
      [
        "1.3.1 Piattaforma Digitale Nazionale Dati",
        92921676,
        91293595,
        371784729,
      ],
      [
        "1.4.1 Esperienza del cittadino nei servizi pubblici",
        215055106,
        583102715,
        6842179,
      ],
      ["1.4.3 Adozione PagoPA e AppIO", 103323916, 114533452, 290142632],
      ["1.4.4 Adozione identità digitale", 55370000, 70083459, 80546541],
      [
        "1.4.5 Digitalizzazione degli avvisi pubblici",
        99546827,
        98666190,
        46786983,
      ],
    ],
    publish: true,
    remoteUrl: "",
    isRemote: false,
  };

  return (
    <div>
      <RenderChart {...(sampleData as FieldDataType)} />
    </div>
  );
};
