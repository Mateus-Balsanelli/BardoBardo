import http from "../http-common";

class PlataformService {
    getAll() {
        return http.get("/plataforma");
    }

    get(id) {
        return http.get(`/plataforma/${id}`);
    }

    create(data) {
        return http.post("/plataforma", data);
    }

    update(id, data) {
        return http.put(`/plataforma/${id}`, data);
    }

    delete(id) {
        return http.delete(`/plataforma/${id}`);
    }

    deleteAll() {
        return http.delete('/plataforma');
    }
}

export default new PlataformService();