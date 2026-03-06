import { useCallback, useRef, useState } from "react";

import { Image } from "@components/react/Image";
import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";
import Icon, { type ColorIconProps, type SizeIconProps } from "../../Icon";
import { FeedbackState } from "../../state";
import LabelTextArea from "../label-textarea/label-textarea";
import "./style.scss";

const ICON_USER = {
  icon: "sprites.svg#it-user",
  size: "lg" as SizeIconProps,
  color: "secondary" as ColorIconProps,
  addonClasses: "align-middle me-3",
  hidden: true,
};

const ICON_HELP = {
  icon: "sprites.svg#it-help-circle",
  size: "lg" as SizeIconProps,
  color: "secondary" as ColorIconProps,
  addonClasses: "align-middle me-3",
  hidden: true,
};

const ICON_INFO = {
  icon: "sprites.svg#it-info-circle",
  size: "lg" as SizeIconProps,
  color: "secondary" as ColorIconProps,
  addonClasses: "align-middle me-3",
  hidden: true,
};

type FormNoProps = {
  onResult: (result: {
    who: string | null;
    from: string | null;
    details: string | null;
  }) => void;
  state: FeedbackState;
  lang: SiteLocale;
};

function FormNo({ onResult, state, lang }: FormNoProps) {
  const t = getI18n(lang);
  const rootRef = useRef(null);

  const [who, setWho] = useState<string | null>(null);
  const [from, setFrom] = useState<string | null>(null);
  const [details, setDetails] = useState<string | null>(null);

  const handleClick = useCallback(() => {
    onResult({ who, from, details });
  }, [who, from, details, onResult]);

  return (
    <div ref={rootRef}>
      <form>
        <Image
          url="/public/kit-analitics.svg"
          alt=""
          width={100}
          height={100}
        />
        <h2 className="mb-3" id="feedbackNoTitle">
          {t["feedback.modal.title"]}
        </h2>

        <h3 className="mb-3">{t["feedback.modal.subtitle"]}</h3>
        <p>
          {t["feedback.modal.privacy"]}{" "}
          <a
            href="https://github.com/italia/feedback.designers.italia.it"
            target="_blank"
            rel="noreferrer"
          >
            {t["feedback.modal.privacy.link"]}
            <span className="visually-hidden"> ({t["link.external"]})</span>
          </a>
          .
        </p>

        <fieldset>
          <legend className="d-flex mb-3 px-0 align-items-center w-75">
            <Icon {...ICON_USER} />
            <span className="text-secondary">{t["feedback.who.legend"]}</span>
          </legend>
          <div className="px-3 px-lg-5 py-3 py-lg-5 rounded shadow-lg">
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt1"
                value="Designer"
                checked={who === "Designer"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt1">
                {t["feedback.who.designer"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt2"
                value="Developer"
                checked={who === "Developer"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt2">
                {t["feedback.who.developer"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt3"
                value="Dirigente"
                checked={who === "Dirigente"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt3">
                {t["feedback.who.dirigente"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt4"
                value="Docente"
                checked={who === "Docente"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt4">{t["feedback.who.docente"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt5"
                value="Editor"
                checked={who === "Editor"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt5">{t["feedback.who.editor"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt6"
                value="Legale"
                checked={who === "Legale"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt6">{t["feedback.who.legale"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt7"
                value="Personale amministrativo"
                checked={who === "Personale amministrativo"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt7">{t["feedback.who.admin"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt8"
                value="Project manager"
                checked={who === "Project manager"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt8">{t["feedback.who.pm"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt9"
                value="Specialista comunicazione"
                checked={who === "Specialista comunicazione"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt9">{t["feedback.who.comms"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt10"
                value="Studente"
                checked={who === "Studente"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt10">
                {t["feedback.who.student"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt11"
                value="Qui per curiosità / interesse"
                checked={who === "Qui per curiosità / interesse"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt11">
                {t["feedback.who.curiosity"]}
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex mb-3 px-0 pt-5 align-items-center w-75">
            <Icon {...ICON_HELP} />
            <span className="text-secondary">{t["feedback.from.legend"]}</span>
          </legend>
          <div className="px-3 px-lg-5 py-3 py-lg-5 rounded shadow-lg">
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt1"
                value="altro sito web"
                checked={from === "altro sito web"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt1">
                {t["feedback.from.website"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt2"
                value="funzione Cerca del sito"
                checked={from === "funzione Cerca del sito"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt2">
                {t["feedback.from.search_internal"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt3"
                value="motore di ricerca"
                checked={from === "motore di ricerca"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt3">
                {t["feedback.from.search_engine"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt4"
                value="messaggio social"
                checked={from === "messaggio social"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt4">{t["feedback.from.social"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt5"
                value="navigazione del sito"
                checked={from === "navigazione del sito"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt5">
                {t["feedback.from.navigation"]}
              </label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt6"
                value="posta elettronica"
                checked={from === "posta elettronica"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt6">{t["feedback.from.email"]}</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt7"
                value="altro"
                checked={from === "altro"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt7">{t["feedback.from.other"]}</label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex pt-5 pb-4 px-0 align-items-center w-75">
            <Icon {...ICON_INFO} />
            <span className="text-secondary">
              {t["feedback.improve.legend"]}
            </span>
          </legend>
          <div className="px-3 px-lg-5 pt-5 pb-1 rounded shadow-lg">
            <div className="form-group">
              <LabelTextArea
                ariadescribedby="helperText"
                id="feedbackText"
                label={t["feedback.improve.label"]}
                rows="3"
                maxLength="200"
                value={details || ""}
                onChange={(e: { value: string }) => setDetails(e.value)}
              />
              <small id="helperText" className="form-control form-text">
                {t["feedback.improve.helper"]}
              </small>
            </div>
          </div>
        </fieldset>

        <div className="mt-5">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              (!who && !from && !details) || state === FeedbackState.Loading
            }
            onClick={handleClick}
          >
            {state === FeedbackState.Loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only">{t["feedback.sending"]}</span>
              </>
            ) : (
              t["feedback.improve.send"]
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormNo;
