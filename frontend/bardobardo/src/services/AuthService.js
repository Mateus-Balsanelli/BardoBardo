import http from "../http-common";


class AuthService {

    signIn(data) {
        return http.post("/signin", data);
    }

}

export default new AuthService();