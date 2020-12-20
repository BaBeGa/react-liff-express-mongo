import http from "../http-common";

class UserService{
    create(data) {
        return http.post("/tutorials", data);
    }
}
export default new UserService();