import type { ImageProps } from "@components/atoms/Image/types";
import type { CardEditorialNewsProps } from "@components/molecules/CardEditorialNews/types";
import type { CardEditorialWithIconProps } from "@components/molecules/CardEditorialWithIcon/types";
import type { CardPresentationBannerProps } from "@components/molecules/CardPresentationBanner/types";
import type { DataContainerProps } from "@components/molecules/DataContainer/types";
import type { ListLinkItemProps } from "@components/molecules/ListLink/types";
import type { ListItemProps } from "@components/molecules/OrderedList/types";
import type { UseCaseCardProps } from "@components/molecules/UseCaseCard/types";
import type { SidebarItemFirstLevelProps } from "@components/organisms/Sidebar/types";

export const accordionItems = [
  {
    id: "1",
    header: "Elemento Accordion #1",
    body: "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.",
  },
  {
    id: "2",
    header: "Elemento Accordion #2",
    body: "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.",
  },
];

export const tabsItems = [
  {
    id: "1",
    label: "Tab #1",
    active: true,
    disabled: false,
  },
  {
    id: "2",
    label: "Tab #2",
    active: false,
    disabled: false,
  },
  {
    id: "3",
    label: "Tab #3",
    active: false,
    disabled: true,
  },
];

export const breadcrumbItems = [
  {
    id: "1",
    label: "Tab #1",
    active: false,
    linkTo: "#",
  },
  {
    id: "2",
    label: "Tab #2",
    active: false,
    linkTo: "#",
  },
  {
    id: "3",
    label: "Tab #3",
    active: true,
    linkTo: "#",
  },
];

export const sidebarItems: SidebarItemFirstLevelProps[] = [
  {
    idAccordion: "1",
    label: "Link List 1",
    isOpen: true,
    items: [
      { id: "1", label: "lista 1.1", linkTo: "#", active: true },
      { id: "2", label: "lista 1.2", linkTo: "#", active: false },
      { id: "3", label: "lista 1.3", linkTo: "#", active: false },
    ],
  },
  {
    idAccordion: "2",
    label: "Link List 2",
    isOpen: false,
    items: [
      { id: "1", label: "lista 2.1", linkTo: "#", active: false },
      { id: "2", label: "lista 2.2", linkTo: "#", active: false },
      { id: "3", label: "lista 2.3", linkTo: "#", active: false },
    ],
  },
  {
    idAccordion: "3",
    label: "Link List 3",
    isOpen: false,
    items: [
      { id: "1", label: "lista 3.1", linkTo: "#", active: false },
      { id: "2", label: "lista 3.2", linkTo: "#", active: false },
      { id: "3", label: "lista 3.3", linkTo: "#", active: false },
    ],
  },
];

export const dataStatisticsItems: DataContainerProps[] = [
  {
    info: "oltre 70.000",
    title: "Numero di PA che hanno migrato al Cloud",
    contentIcon: "1",
  },
  {
    info: "+ 50%",
    title: "Sicurezza nelle infrastrutture",
    contentIcon: "2",
  },
  {
    info: "oltre 200",
    title: "Servizi nel catalogo Cloud",
    contentIcon: "3",
  },
];

export const image: ImageProps = {
  url: "https://placeholderimage.eu/api/city/800/600",
  alt: "alternative text",
  title: "titolo descrittivo",
  width: 800,
  height: 600,
};

export const useCaseItems: UseCaseCardProps[] = [
  {
    title: "Prepararsi alla migrazione",
    paragraph:
      "I primi passi per orientarsi, pianificare la migrazione e scegliere il modello cloud in modo consapevole.",
    image,
    linkTo: "#",
  },
  {
    title: "Prepararsi alla migrazione",
    paragraph:
      "I primi passi per orientarsi, pianificare la migrazione e scegliere il modello cloud in modo consapevole.",
    image,
    linkTo: "#",
  },
];

export const channelItems: CardPresentationBannerProps[] = [
  {
    icon: "it-designers-italia",
    title: "Forum Italia",
    description:
      "Entra in forum.italia.it e condividi le tue opinioni nella sezione Cloud e data center",
    linkTo: "#",
  },
  {
    icon: "it-slack",
    title: "Slack",
    description:
      "Unisciti alla community di Developers Italia su Slack e raggiungi il canale #cloud",
    linkTo: "#",
  },
  {
    icon: "it-github",
    title: "Github",
    description:
      "Proponi issue, modifiche e nuovi contenuti nei repository pubblici per lo sviluppo del Cloud della PA",
    linkTo: "#",
  },
];

export const newsItems: CardEditorialNewsProps[] = [
  {
    linkTo: "#",
    title: "Nasce l’Innovation Hub di Polo Strategico Nazionale",
    description:
      "Al via un ecosistema collaborativo per accelerare la trasformazione digitale della Pubblica Amministrazione",
    category: "Articolo",
    image,
    dateTime: "2022-04-05",
    action: "innovazione.gov.it",
  },
  {
    linkTo: "#",
    title: "Aumentano i servizi disponibili nel cloud sicuro del PSN",
    description:
      "PSN si aggiorna e si arricchisce di servizi che consentono alle Pubbliche Amministrazioni di adottare soluzioni tecnologiche innovative ",
    category: "Articolo",
    image,
    dateTime: "2022-04-05",
    action: "innovazione.gov.it",
  },
  {
    linkTo: "#",
    title: "La gestione delle identità digitali e degli accessi al cloud",
    description:
      "Testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.Testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.Testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",
    category: "Articolo",
    image,
    dateTime: "2022-04-05",
    action: "innovazione.gov.it",
  },
  {
    linkTo: "#",
    title: "Titolo contenuto editoriale",
    description:
      "Testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",
    category: "Articolo",
    image,
    dateTime: "2022-04-05",
    action: "innovazione.gov.it",
  },
];

export const cardItems: CardEditorialWithIconProps[] = [
  {
    title: "Titolo contenuto editoriale",
    description:
      "Testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",
    icon: "1",
  },
  {
    title: "Titolo contenuto editoriale",
    description:
      "Testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",
    icon: "2",
  },
  {
    title: "Titolo contenuto editoriale",
    description:
      "Testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",
    icon: "3",
  },
];

export const listItems: ListItemProps[] = [
  {
    title: "Titolo contenuto editoriale",
    paragraph: "Testo breve",
  },
  {
    title: "Titolo contenuto editoriale",
    paragraph: "Testo breve",
  },
  {
    title: "Titolo contenuto editoriale",
    paragraph: "Testo breve",
  },
];

export const listItemsDefault: ListItemProps[] = [
  {
    title: "Inserisci le informazioni sulle licenze",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit commodo, eleifend neque quis, mollis mi. Integer vel tellus in ipsum aliquet tempor ut sit amet ligula. Donec quis scelerisque nisl, sed consequat quam. Donec efficitur, ligula vel mollis ultrices, mi neque varius turpis, in sodales dolor eros sed nibh. Pellentesque ut augue libero. Duis feugiat lobortis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Inserisci le informazioni sulle licenze",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit commodo, eleifend neque quis, mollis mi. Integer vel tellus in ipsum aliquet tempor ut sit amet ligula. Donec quis scelerisque nisl, sed consequat quam. Donec efficitur, ligula vel mollis ultrices, mi neque varius turpis, in sodales dolor eros sed nibh. Pellentesque ut augue libero. Duis feugiat lobortis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Inserisci le informazioni sulle licenze",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit commodo, eleifend neque quis, mollis mi. Integer vel tellus in ipsum aliquet tempor ut sit amet ligula. Donec quis scelerisque nisl, sed consequat quam. Donec efficitur, ligula vel mollis ultrices, mi neque varius turpis, in sodales dolor eros sed nibh. Pellentesque ut augue libero. Duis feugiat lobortis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const topicItems: string[] = ["Sviluppo interfaccia", "Performance"];

export const genericListItems: ListLinkItemProps[] = [
  {
    text: "Link lista 1 attivo",
    linkTo: "#",
    openInNewTab: true,
    iconRight: "it-download",
  },
  {
    text: "Link lista 2",
    linkTo: "#",
    openInNewTab: true,
    iconRight: "it-download",
  },
  {
    text: "Link lista 3",
    linkTo: "#",
    openInNewTab: true,
    iconRight: "it-external-link",
  },
];

export const menuItems = {
  left: [
    { id: "1", title: "Home", url: "#", active: false },
    { id: "2", title: "Link 1", url: "#", active: true },
    { id: "3", title: "Link 2", url: "#", active: false },
    { id: "4", title: "Link 3", url: "#", active: false },
  ],
  right: [{ id: "3", title: "Insight", url: "#", active: false }],
};
