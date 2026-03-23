import express from "express";
import path from "path";
import fs from "fs/promises";
import { nanoid } from "nanoid"

import { menu } from "./data/menu.js"
import { menuCat } from "./data/menuCat.js"
import { additions } from "./data/add.js"

const app=express();

app.use(express.urlencoded({
	limit: "50mb",
	extended: true
}));

app.use(express.json({limit: "50mb"}));

app.use(express.static(path.resolve("dist")));

app.get("/", (req, res) => {
	res.sendFile(path.resolve("dist/index.html"));
});

app.get("/menu", (req, res) => {
	res.json(menu);
});

app.get("/menu/:cat", async (req, res) => {
res.json(menuCat[req.params.cat])
})

app.get("/menu/:cat/:id", async (req, res) => {
let ans=menuCat[req.params.cat].find(elem => elem.id==req.params.id)
res.json(ans)
})

app.get("/add", async (req, res) => {
res.json(additions)
})

app.post("/addOrder", (req, res) => {
let order=req.body
orders.push(order)
console.log(orders)
console.log(orders[0])
let numOrder=Math.floor(Math.random()*1000000)
setTimeout(() => res.status(201).send(numOrder), 3000)
})

app.listen(3000, () => {
	console.log("server running");
});


let orders=[]
