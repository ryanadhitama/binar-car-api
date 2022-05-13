const statusType = {
  400: "Bad Request",
  401: "Not Authenticated",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict Resources",
  500: "Internal Server Error",
};

class ApplicationError extends Error {
  constructor(status) {
    super();

    Error.captureStackTrace(this, this.constructor);
    this.message = statusType[status];
    this.status = status;
  }
}

class InternalServerError extends ApplicationError {
  constructor() {
    super(500);
  }
}

class NotAuthenticated extends ApplicationError {
  constructor() {
    super(401);
  }
}

class NotFound extends ApplicationError {
  constructor() {
    super(404);
  }
}

const SuccessFetchResponse = (res, data) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};

module.exports = {
  InternalServerError,
  NotAuthenticated,
  NotFound,
  SuccessFetchResponse,
};
