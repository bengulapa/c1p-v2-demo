export default class AuthService {
  key = "oa.c1pv2.auth";

  isAuthenticated() {
    return this.getAuthToken() !== null;
  }

  login(email: string) {
    if (email.endsWith("@anglefinance.com.au")) {
      localStorage.setItem(this.key, email);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem(this.key);
    window.location.href = "/login";
  }

  getAuthToken() {
    const authToken = localStorage.getItem(this.key);
    if (!authToken) {
      return null;
    }
    return authToken;
  }
}
