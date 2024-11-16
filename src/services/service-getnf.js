import service from "./service"

function getnf () {
    return new Promise((resolve, reject) => {
        service.get("/notas")
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    });
}

export default getnf;