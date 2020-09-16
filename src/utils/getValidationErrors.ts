import { ValidationError } from 'yup'


interface Errors {
  [key: string]: string; // key can be any string
}

export default function getErrors(err: ValidationError): Errors {

  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  })


  return validationErrors;
}
