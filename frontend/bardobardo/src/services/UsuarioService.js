import http from "../http-common";

class UsuarioService {

    signup(data) {
        return http.post("/signup", data);
    }

    getAll() {
        return http.get("/usuario");
    }

    get(id) {
        return http.get(`/usuario/${id}`);
    }

    create(data) {
        return http.post("/usuario", data);
    }

    update(id, data) {
        return http.put(`/usuario/${id}`, data);
    }

    delete(id) {
        return http.delete(`/usuario/${id}`);
    }

    deleteAll() {
        return http.delete('/usuario');
    }
}

export default new UsuarioService();