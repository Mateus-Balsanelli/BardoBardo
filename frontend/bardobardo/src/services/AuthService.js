import http from "../http-common";
import decode from 'jwt-decode';

class AuthService {

    signIn(data) {
        return http.post("/signin", data);
    }

    setUserData(data) {
        localStorage.setItem("user-token", data.accessToken);
        localStorage.setItem("user-type", data.tipo);
    }

    logOut() {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-type");
    }

    isSignedIn() {
        const token = localStorage.getItem("user-token");

        if (!token)
            return false;
        try {
            const { exp: expiration } = decode(token);

            if (!!expiration && Date.now() > expiration * 1000) {
                return false;
            } else
                return true;
        } catch (_) {
            return false;
        }
    }

    isAdmin() {
        return localStorage.getItem("user-type") == 1;
    }
}

export default new AuthService();