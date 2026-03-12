import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";
import { postRequest } from "@utils/apiUtils";
import type { Modal } from "bootstrap-italia";
import { useCallback, useRef, useState } from "react";
import FormNo from "./components/form-no/FormNo";
import Icon, {
  type AlignIconProps,
  type ColorIconProps,
  type SizeIconProps,
} from "./Icon";
import { FeedbackState } from "./state";
import "./style.scss";

const ICON_CLOSE = {
  icon: "sprites.svg#it-close",
  color: "primary" as ColorIconProps,
  size: "lg" as SizeIconProps,
};

const ICON_RESULT = {
  color: "primary" as ColorIconProps,
  size: "lg" as SizeIconProps,
  align: "middle" as AlignIconProps,
  addonClasses: "me-2",
};

type Feedback = {
  lang: SiteLocale;
};

function Feedback({ lang }: Feedback) {
  const t = getI18n(lang);
  const [isChecked, setIsChecked] = useState(false);
  const [feedbackState, setFeedbackState] = useState(FeedbackState.Start);
  const [choiceVal, setChoiceVal] = useState("");
  const [modal, setModal] = useState<Modal | null>(null);

  const modalNo = useRef(null);

  const sendFeedback = useCallback(
    async (result = {}) => {
      setFeedbackState(FeedbackState.Loading);
      const feedback = choiceVal === "1" ? "+" : "-";

      try {
        await postRequest(import.meta.env.PUBLIC_FEEDBACK_URL, {
          feedback,
          url: window.location.href,
          ...result,
        });

        setFeedbackState(FeedbackState.Success);
        return true;
      } catch (e) {
        setFeedbackState(FeedbackState.Error);

        console.error(`Feedback request error: ${e}`);

        return false;
      }
    },
    [choiceVal],
  );

  const onChange = (evt: any) => {
    if (evt.currentTarget.checked) {
      setIsChecked(true);
      setChoiceVal(evt.currentTarget.value);
    }
  };

  const openModal = () => {
    const bootstrap = (window as any).bootstrap;
    if (choiceVal === "0" && modalNo.current && bootstrap) {
      const dialog = new bootstrap.Modal(modalNo.current);
      dialog.show();

      setModal(dialog);
    }
  };

  const onSend = async () => {
    const res = await sendFeedback();

    if (res) {
      openModal();
    }
  };

  const onModalResult = useCallback(
    async (result: Record<string, unknown>) => {
      await sendFeedback(result);

      if (modal) {
        modal.hide();
      }
    },
    [modal, sendFeedback],
  );

  const renderState = (state: FeedbackState) => {
    switch (state) {
      case FeedbackState.Loading:
      case FeedbackState.Start:
        return (
          <>
            <p className="mb-0 h5 fw-semibold" id="feedbackSectionTitle">
              <span className="feedback-title">{t["feedback.title"]}</span>
            </p>
            <form className="mt-3 mt-md-3">
              <fieldset>
                <legend>
                  <span className="visually-hidden">
                    {t["feedback.legend"]}
                  </span>
                </legend>
                <div className="form-check form-check-inline">
                  <input
                    name="feedbackValue"
                    type="radio"
                    id="feedbackValueYes"
                    value="1"
                    onChange={onChange}
                  />
                  <label className="mb-0" htmlFor="feedbackValueYes">
                    {t["feedback.yes"]}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    name="feedbackValue"
                    type="radio"
                    id="feedbackValueNo"
                    value="0"
                    onChange={onChange}
                  />
                  <label className="mb-0" htmlFor="feedbackValueNo">
                    {t["feedback.no"]}
                  </label>
                </div>
              </fieldset>

              <button
                type="submit"
                className="btn btn-primary mt-4"
                disabled={!isChecked || feedbackState === FeedbackState.Loading}
                onClick={onSend}
              >
                {feedbackState === FeedbackState.Loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{t["feedback.sending"]}</span>
                  </>
                ) : (
                  t["feedback.send"]
                )}
              </button>
            </form>
          </>
        );
      case FeedbackState.Success:
        return (
          <span className="feedback-confirm d-flex align-items-center">
            <Icon icon="sprites.svg#it-check-circle" {...ICON_RESULT} />
            {t["feedback.success"]}
          </span>
        );
      case FeedbackState.Error:
        return (
          <span className="feedback-confirm d-flex align-items-center">
            <Icon
              {...ICON_RESULT}
              icon="sprites.svg#it-error"
              addonClasses="icon-danger me-2"
            />
            {t["feedback.error"]}
            <br /> {t["feedback.retry"]}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="feedback it-section-bg-medium py-5 px-3 px-lg-0"
      aria-labelledby="feedbackSectionTitle"
      id="feedbackSection"
    >
      <div className="container-xxl">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow card-wrapper rounded">
              <div>
                <div className="card-body p-4 p-md-5">
                  <div className="step" id="feedbackIntro">
                    {renderState(feedbackState)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={modalNo}
        className="modal fade"
        role="dialog"
        id="feedbackNo"
        aria-labelledby="feedbackNoTitle"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered "
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header align-items-start">
              <button
                className="btn-close flex-shrink-0"
                type="button"
                data-bs-dismiss="modal"
                aria-label={t["modal.close"]}
              >
                <Icon {...ICON_CLOSE} />
              </button>
            </div>
            <div className="modal-body pt-0 pb-4 pb-md-5 px-md-4">
              <FormNo
                onResult={onModalResult}
                state={feedbackState}
                lang={lang}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
