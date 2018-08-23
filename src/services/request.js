function request(url, options = {}, data) {
  if(data) options.body = JSON.stringify(data);

  return fetch(url, options)
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(ok) return json;
      throw json.message || json.error || json.errors || json;
    });
}

const headers = {
  'content-type': 'application/json'
};

export const get = url => request(url);
export const post = (url, data) => request(url, { method: 'POST', headers }, data);
export const put = (url, data) => request(url, { method: 'PUT', headers }, data);

export const getWithCache = url => {
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }

  return get(url)
    .then(res => {
      window.localStorage.setItem(url, JSON.stringify(res));
      return res;
    });
};