const setCookie = (name, value, exdays=0) => {
  const str_value = typeof value !== 'string' ? JSON.stringify(value) : value
  const numChunks = Math.ceil(str_value.length / 4000);
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = (exdays===0) ? "" : "expires="+d.toUTCString() + ";path=/";
  document.cookie = name + "=" + str_value + ";" + expires;
};

const getCookie = (cname) => {
  const name = cname + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);  
    }
  }
  return "";
};

const getRichCookie = (cname) => {
  const cookie = getCookie(cname);
  try {
    return JSON.parse(cookie)
  } catch {
    return cookie;
  }
};

export const setItem = (key, value) => {
  const str_value = typeof value !== 'string' ? JSON.stringify(value) : value
  localStorage.setItem(key, str_value);
}

export const getItem = (key) => {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item)
  } catch {
    return item;
  }
}

export const removeItem = (key) => {
  localStorage.removeItem(key);
}

export const clearStorage = () => {
  localStorage.clear();
}

export { setCookie, getCookie, getRichCookie };