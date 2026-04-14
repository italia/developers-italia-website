import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";
import { postRequest } from "@utils/apiUtils";
import { useState } from "react";

export type SubscribeProps = {
  idForm: string;
  lang: SiteLocale;
};

const StateClass = Object.freeze({
  START: { className: "" },
  LOADING: { className: "success" },
  SUCCESS: { className: "success" },
  ERROR: { className: "danger" },
});

type SubscribeData = {
  email?: string;
  [key: string]: any;
};

export function SubscribeMailingList({ idForm, lang }: SubscribeProps) {
  const t = getI18n(lang);
  const [state, setState] = useState(StateClass.START);
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = import.meta.env.PUBLIC_SENDPORTAL_SUBSCRIBE_URL;
    const data: SubscribeData = {};

    new FormData(e.currentTarget).forEach((value, key) => {
      data[key] = value;
    });

    try {
      setState(StateClass.LOADING);

      await postRequest(endpoint, data);

      setState(StateClass.SUCCESS);
      setMessage(t["subscribe.successText"]);
    } catch (ex) {
      setState(StateClass.ERROR);

      console.error(`Mailing list subscribe error: ${ex}`);
      setMessage(t["subscribe.errorText"]);
    }
  };

  return (
    <>
      <form id={idForm} onSubmit={onSubmit} className="form-group mb-0 ">
        <div className="d-flex flex-row align-items-center">
          <div className="flex-grow-1 flex-grow-1 me-sm-4 w-100">
            <label
              htmlFor={`${idForm}_InputMail`}
              className="active text-white"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control "
              id={`${idForm}_InputMail`}
              required
              name="email"
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-outline-primary ms-3 ms-lg-0"
              disabled={state === StateClass.LOADING}
            >
              {state === StateClass.LOADING ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{t["loading"]}</span>
                </>
              ) : (
                <span>{t["subscribe.button"]}</span>
              )}
            </button>
          </div>
        </div>
      </form>
      <div
        className={`alert alert-${state.className} bg-light mt-2`}
        style={{
          visibility:
            state === StateClass.SUCCESS || state === StateClass.ERROR
              ? "visible"
              : "hidden",
        }}
        role="alert"
      >
        {message}
      </div>
    </>
  );
}
