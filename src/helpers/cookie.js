const Cookie = {
  get(name) {
    const value = document.cookie;
    let parts = value.split(";");
    let cookies = {};
    parts.map((part) => {
      let key = part.split("=")[0];
      let val = part.split("=")[1];
      cookies[key] = val;
      return 0;
    });
    return cookies[name];
  },
  set(cookie) {
    let key = Object.keys(cookie)[0];
    let val = cookie[key];
    document.cookie = key + "=" + val;
  },
  remove(name) {
    document.cookie = name + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  },
};

module.exports = Cookie;
