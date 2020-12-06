import http from "../http-common";

class PedidoService {
    getAll() {
        return http.get("/pedido");
    }

    get(id) {
        return http.get(`/pedido/${id}`);
    }

    create(data) {
        return http.post("/pedido", data);
    }

    update(id, data) {
        return http.put(`/pedido/${id}`, data);
    }

    delete(id) {
        return http.delete(`/pedido/${id}`);
    }

    deleteAll() {
        return http.delete('/pedido');
    }
}

export default new PedidoService();