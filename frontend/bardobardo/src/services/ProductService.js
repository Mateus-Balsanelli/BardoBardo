import http from "../http-common";

class ProductService {
    getAll() {
        return http.get("/produto");
    }

    get(id) {
        return http.get(`/produto/${id}`);
    }

    create(data) {
        return http.post("/produto", data);
    }

    update(id, data) {
        return http.put(`/produto/${id}`, data);
    }

    delete(id) {
        return http.delete(`/produto/${id}`);
    }

    deleteAll() {
        return http.delete('/produto');
    }
}

export default new ProductService();