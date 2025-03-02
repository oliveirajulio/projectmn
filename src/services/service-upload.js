import service from "./service"

function uploadnf (file) {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);

        service.post("/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(response => resolve(response.data))  // Retorna { message, id_nota }
        .catch(error => reject(error));
    });
}
export default uploadnf;