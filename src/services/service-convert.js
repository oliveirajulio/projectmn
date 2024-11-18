import service from "./service";

function converter(filePath) {
    return new Promise((resolve, reject) => {
        service.post("/convert", { file_path: filePath }, {
            headers: { "Content-Type": "application/json" }
        })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
}

export default converter;
