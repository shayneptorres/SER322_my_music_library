import {Router} from "express";

export default() => {
    let api = Router();

    api.get("/", (req, res) => {
        res.render("index",{});
    })

    return api;
}