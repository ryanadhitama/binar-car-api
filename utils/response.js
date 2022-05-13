const statusType = {
  400: "Bad Request",
  401: "Not Authenticated",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict Resources",
  500: "Internal Server Error",
};

class ApplicationError extends Error {
  constructor(status, message = null) {
    super();

    Error.captureStackTrace(this, this.constructor);
    this.message = message || statusType[status];
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

class Forbidden extends ApplicationError {
  constructor() {
    super(403);
  }
}

class UserAlreadyExists extends ApplicationError {
  constructor() {
    super(403, "User already exists");
  }
}

const SuccessFetchResponse = (res, data) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};

module.exports = {
  Forbidden,
  InternalServerError,
  NotAuthenticated,
  NotFound,
  UserAlreadyExists,
  SuccessFetchResponse,
};
