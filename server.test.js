const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("test the root path", () => {
    test("it should response the get method", () => {
        const response = request(app).post("https://localhost:8000/User/add").send({
            "Name": "daddy",
            "Email": "Daddy",
            "age": 12,
            "Contact": 123,
        })
        expect(response.statusCode).toBe(200);
    })
});

describe("test will check user added", () => {
    test("user should be added", () => {
        const response = request(app).post("https://localhost:8000/User/add").send({
            "Name": "daddy",
        })
        expect(response.statusCode).toBe(200);
    })
});

describe("test will check user added", () => {
    test("user should be added", () => {
        const response = request(app).post("https://localhost:8000/User/delete").send({
            "Name": "daddy",
            "Email": "Daddy",
            "age": 12,
            "Contact": 123,
        })
        expect(response.statusCode).toBe(200);
    })
});