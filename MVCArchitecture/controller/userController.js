import { userList } from "../model/userModel.js"

export function handleUser(req, resp) {
    let users = userList
    resp.render('userView', {users: users()})
}