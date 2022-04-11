import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationsErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(err => {
    validationErrors[err.name] = err.message;
  });

  return validationErrors;
}