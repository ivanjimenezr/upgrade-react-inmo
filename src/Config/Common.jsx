

export const getUser = () => {
  const emailStr = sessionStorage.getItem("email");
  if (emailStr) return JSON.parse(emailStr);
  else return null
}

export const getToken = () => {
  return sessionStorage.getItem("token") || null;
}

export const getName = () => {
  return sessionStorage.getItem("name") || null;
}

export const setUserSession = (token, email, name) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("email", JSON.stringify(email));
  sessionStorage.setItem("name", JSON.stringify(name));
}

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("name");
}