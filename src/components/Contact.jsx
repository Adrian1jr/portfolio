import { EnvelopeIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomDialog from "./CustomDialog";
import LoadingSpinner from "./LoadingSpinner";

export default function Contact() {
  const { t } = useTranslation();
  const serviceId = import.meta.env.VITE_MY_KEY_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_MY_KEY_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_MY_KEY_EMAILJS_USER_ID;

  const [isLoading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dialogProps, setDialogProps] = useState({
    title: "",
    message: "",
    buttonMsg: "",
    icon: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          setDialogProps({
            title: t("contact.successTitle"),
            message: t("contact.successMessage"),
            buttonMsg: t("contact.closeButton"),
            icon: "success",
          });
          setOpenModal(true);
          setLoading(false);
          clearForm();
        },
        (_error) => {
          setDialogProps({
            title: t("contact.errorTitle"),
            message: t("contact.errorMessage"),
            buttonMsg: t("contact.closeButton"),
            icon: "error",
          });
          setOpenModal(true);
          setLoading(false);
          clearForm();
        }
      );
  };

  const clearForm = () => {
    form.current.reset();
  };

  const closeDialog = () => {
    setOpenModal(false);
  };

  return (
    <div className="relative bg-white" id="contact">
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="px-6 pt-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg sm:max-w-3xl md:max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {t("contact.title")}
            </h2>
            <p className="mt-5 text-lg leading-6 text-black">
              {t("contact.subtitle")}
            </p>
            <dl className="mt-8 text-base text-black">
              <dd>
                <p>{t("contact.location")}</p>
              </dd>
              <div className="mt-5 text-black">
                <dt className="sr-only">{t("contact.email.label")}</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{t("contact.email.address")}</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-black">
              {t("contact.businessHours")}
            </p>
          </div>
        </div>
        <div className="bg-white px-6 py-12 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div className="mx-auto max-w-lg sm:max-w-3xl md:max-w-2xl lg:max-w-none">
            <form
              className="grid grid-cols-1 gap-y-6"
              ref={form}
              onSubmit={sendEmail}
            >
              <div>
                <input
                  type="text"
                  name="from_name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                />
              </div>
              <div>
                <input
                  name="from_email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                />
              </div>
              <div>
                <input
                  name="from_subject"
                  type="text"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder={t("contact.form.subjectPlaceholder")}
                  required
                />
              </div>
              <div>
                <textarea
                  name="html_message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder={t("contact.form.messagePlaceholder")}
                  defaultValue={""}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  value="Send"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {t("contact.form.submitButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      {openModal && (
        <CustomDialog
          title={dialogProps.title}
          message={dialogProps.message}
          buttonMsg={dialogProps.buttonMsg}
          icon={dialogProps.icon}
          onClose={closeDialog}
        />
      )}
    </div>
  );
}
