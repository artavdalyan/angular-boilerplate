export interface Error {
  error: {
    statusCode?: number;
    message: string | ErrorMessages[];
    errors?: ErrorMessages[];
    validationErrors: Errors;
  };
}

export interface Errors {
  [key: string]: string | Errors;
}

export type CompanyErrors = Error & {
  error: {
    validationErrors: {
      mainInfo?: Errors;
      social?: Errors;
      product?: Errors;
      office?: Errors;
      market?: Errors;
      details?: Errors;
    };
  };
};

export interface ErrorMessages {
  constraints: Errors;
  property: string;
  children: ErrorMessages[];
}
