import React, { useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import SpanError from "./SpanError";
import sendEmail from "../../utils/contactUsEmail";
import SendFormButton from "../buttons/SendFormButton";

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export interface FieldValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type ValidationErrors = Record<string, string>;

const ContactForm = (): React.ReactElement => {
  const [errorAlert, setErrorAlert] = useState<string>("");
  const [submitButtonValue, setSubmitButtonValue] = useState<string>("Enviar");

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Mínimo 3 caracteres.")
      .max(50, "Máximo 50 caracteres.")
      .required("Campo requerido."),
    email: Yup.string().email("Email incorrecto.").required("Campo requerido."),
    phone: Yup.string()
      .min(7, "Mínimo 7 dígitos.")
      .max(16, "Máximo 15 dígitos.")
      .required("Campo requerido.")
      .test("is-not-a-number", "Este campo permite solo números.", (value) => {
        if (!/^[0-9+]+$/.test(value)) {
          return false;
        }
        return true;
      }),
    subject: Yup.string()
      .min(3, "Mínimo 3 caracteres.")
      .max(30, "Máximo 30 caracteres.")
      .required("Campo requerido."),
    message: Yup.string().required("Campo requerido."),
  });

  const handleSubmit = async (
    values: FieldValues,
    { resetForm }: FormikHelpers<FieldValues>
  ) => {
    setSubmitButtonValue("Enviando...");
    const sendEmailContact = await sendEmail(values);

    if (sendEmailContact?.status === 404) {
      setErrorAlert("Error 404 Not Found");
      resetForm();
      setSubmitButtonValue("Enviar");
      setTimeout(() => {
        setErrorAlert("");
      }, 3000);
    }

    if (sendEmailContact?.status === 400) {
      setErrorAlert("Error 400 Bad Request");
      resetForm();
      setSubmitButtonValue("Enviar");
      setTimeout(() => {
        setErrorAlert("");
      }, 3000);
    }

    if (sendEmailContact?.status === 200) {
      resetForm();
      setSubmitButtonValue("¡Enviado!");
      setTimeout(() => {
        setSubmitButtonValue("Enviar");
      }, 3000);
    }
  };

  const validateFields = async (values: FieldValues) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (error: any) {
      const errors: ValidationErrors = {};

      error.inner.forEach((e: any) => {
        errors[e.path] = e.message;
      });

      return errors;
    }
  };

  return (
    <div className="w-full h-full">
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values, resetForm) => handleSubmit(values, resetForm)}
        validate={validateFields}
      >
        <Form className="flex flex-col">
          <div className="flex flex-col xl:flex-row xl:gap-10">
            <div className="flex flex-col xl:w-full">
            <Field
              type="text"
              name="name"
              placeholder="Nombre y apellido"
              className="p-3 border rounded-xl mt-5 placeholder:text-sm placeholder:p-1 outline-none xl:placeholder:text-base xl:p-4"
            />
            <SpanError prop="name" />
            </div>
            
            <div className="flex flex-col xl:w-full">
            <Field
              type="text"
              name="email"
              placeholder="Email"
              className="p-3 border rounded-xl mt-5 placeholder:text-sm placeholder:p-1 outline-none xl:placeholder:text-base xl:p-4"
            />
            <SpanError prop="email" />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row xl:gap-10">
            <div className="flex flex-col xl:w-full">
            <Field
              type="text"
              name="phone"
              placeholder="Teléfono: +XX XXXX XXXXXX"
              className="p-3 border rounded-xl mt-5 placeholder:text-sm placeholder:p-1 outline-none xl:placeholder:text-base xl:p-4"
            />
            <SpanError prop="phone" />
            </div>

            <div className="flex flex-col xl:w-full">
            <Field
              type="text"
              name="subject"
              placeholder="Asunto"
              className="p-3 border rounded-xl mt-5 placeholder:text-sm placeholder:p-1 outline-none xl:placeholder:text-base xl:p-4"
            />
            <SpanError prop="subject" />
            </div>
          </div>

          <Field
            as="textarea"
            rows="10"
            name="message"
            placeholder="Mensaje"
            className="p-3 border rounded-xl mt-5 placeholder:text-sm placeholder:p-1 outline-none xl:placeholder:text-base xl:p-4"
          />
          <SpanError prop="message" />

          <SendFormButton value={submitButtonValue} />
          <p className="text-center mt-4 font-bold text-lg text-red-400">{errorAlert}</p>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
