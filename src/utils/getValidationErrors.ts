import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function (err: ValidationError): Errors {
  const validationErrors: Errors = {
    status: 'error',
    message: 'Unexpected error occurred',
  };

  err?.inner?.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
