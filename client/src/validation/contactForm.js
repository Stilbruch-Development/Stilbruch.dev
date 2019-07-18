import Validator from "validator";
import isEmpty from "./isEmpty";

export default function validateContactForm(data) {
  const errors = {};

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName_error = "Bitte gib deinen Vornamen an.";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName_error = "Bitte gib deinen Nachnamen an.";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email_error = "Bitte gib deine Email an.";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email_error = "Bitte gib eine korrekte Email an.";
  }

  if (Validator.isEmpty(data.message)) {
    errors.message_error = "Bitte schreibe eine Nachricht.";
  }

  if (!Validator.isEmpty(data.firstName1)) {
    errors.general_error = "Bot detected! No message was sent!";
  }

  if (!Validator.isEmpty(data.lastName1)) {
    errors.general_error = "Bot detected! No message was sent!";
  }

  if (!Validator.isEmpty(data.email1)) {
    errors.general_error = "Bot detected! No message was sent!";
  }

  if (!Validator.isEmpty(data.message1)) {
    errors.general_error = "Bot detected! No message was sent!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
