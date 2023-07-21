class ApplicationError extends Error {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    this.code = status || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends ApplicationError {
  constructor(message) {
    super(message || "NotFound Error", 404);
  }
}

class UnauthorizedError extends ApplicationError {
  constructor(message) {
    super(message || "Unauthorized", 401);
  }
}

class ForbiddenError extends ApplicationError {
  constructor(message) {
    super(message || "Forbidden", 403);
  }
}

class BadRequestError extends ApplicationError {
  constructor(message) {
    super(message || "BadRequest", 400);
  }
}

module.exports = {
    NotFoundError,
    UnauthorizedError,
    ForbiddenError,
    BadRequestError
}
