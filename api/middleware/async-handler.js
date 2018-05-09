export default fn =>
  (req, res, next, ...args) =>
    Promise.resolve(fn(req, res, next, ...args)).catch(next);
