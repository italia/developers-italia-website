export type DateTimeProps = {
  value: string;
  className: string;
  lang: string;
};

export function DateTime({ value, className, lang }: DateTimeProps) {
  return (
    <time className={className} dateTime={value}>
      {new Intl.DateTimeFormat(lang, {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(new Date(value))}
    </time>
  );
}
