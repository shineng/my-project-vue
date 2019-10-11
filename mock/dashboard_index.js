function index(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = { name: "Eric", age: "10" };
      break;

    default:
      res = null;
  }
  return res;
}

module.exports = index;
