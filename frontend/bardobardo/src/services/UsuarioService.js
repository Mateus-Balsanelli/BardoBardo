import http from "../http-common";

class UsuarioService {

    signup(data) {
        return http.post("/signup", data);
    }

    getAll() {
        return http.get("/usuarios");
    }

    get(id) {
        return http.get(`/usuarios/${id}`);
    }

    create(data) {
        return http.post("/usuarios", data);
    }

    update(id, data) {
        return http.put(`/usuarios/${id}`, data);
    }

    delete(id) {
        return http.delete(`/usuarios/${id}`);
    }

    deleteAll() {
        return http.delete('/usuarios');
    }
}

export default new UsuarioService();