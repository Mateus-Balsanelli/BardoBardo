import http from "../http-common";

class InventarioService {
    getAll() {
        return http.get("/inventario");
    }

    get(id) {
        return http.get(`/inventario/${id}`);
    }

    create(data) {
        return http.post("/inventario", data);
    }

    update(id, data) {
        return http.put(`/inventario/${id}`, data);
    }

    delete(id) {
        return http.delete(`/inventario/${id}`);
    }

    deleteAll() {
        return http.delete('/inventario');
    }
}

export default new InventarioService();