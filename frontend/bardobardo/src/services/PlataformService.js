import http from "../http-common";

class PlataformService {
    getAll() {
        return http.get("/plataformas");
    }

    get(id) {
        return http.get(`/plataformas/${id}`);
    }

    create(data) {
        return http.post("/plataformas", data);
    }

    update(id, data) {
        return http.put(`/plataformas/${id}`, data);
    }

    delete(id) {
        return http.delete(`/plataformas/${id}`);
    }

    deleteAll() {
        return http.delete('/plataformas');
    }
}

export default new PlataformService();