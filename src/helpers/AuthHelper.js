import decode from "jwt-decode";

export default class AuthHelperMethods {
  loggedIn = () => {
    const token = this.gettoken();
    return !!token && !this.istokenExpired(token);
  };

  istokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp > new Date().getTime() + 1 * 3600) {
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed!");
      return false;
    }
  };

  settoken = token => {
    // Saves user token to localStorage
    localStorage.setItem("token", token);
  };

  gettoken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem("token");
  };

  logout = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("carts");
    localStorage.clear();
    window.location.href = "/";
  };

  getConfirm = () => {
    let answer = decode(this.gettoken());
    return answer;
  };

  currentUser = () => {
    let token = decode(this.gettoken());
    console.log(token);
    return token;
  };
}
