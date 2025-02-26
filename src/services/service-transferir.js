import service from "./service";

export function processarNota(id_nota) {
    return new Promise((resolve, reject) => {
        service.post(`/processar/${id_nota}`)
            .then(response => resolve(response.data))  // Retorna a resposta da API
            .catch(error => reject(error));  // Captura qualquer erro
    });
}
