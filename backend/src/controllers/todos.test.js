import app from '../app';
import models from '../models';
import supertest from 'supertest';

const request = supertest(app);
let response;

beforeAll(async () => {
    models.ToDo.destroy({ truncate: true });
})

afterAll(async () => {
    models.sequelize.close();
});

describe('todos /', () => {    
    test('expect to return array of todos', async () => {
        response = await request.get('/todos').expect(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    test('expect to create todo', async () => {
        const todo = {
            title: "Initial Todos",
            description: "Testing",
            isDone: false
        }
        response = await request.post('/todos').send(todo).expect(201);
    });
});

describe('todos /:id', () => {
    let todo;
    test('expect to get single todo entry', async () => {
        response = await request.get('/todos/1').expect(200);
        todo = response.body;
        expect(todo === undefined).toBeFalsy();
    });

    beforeEach(async () => {
        response = await request.get('/todos/1').expect(200);
        todo = response.body;
    });
    
    test('expect todo entry to be updated', async () => {
        const todoData = {
            isDone: true
        }
        response = await request.put('/todos/1').send(todoData).expect(201);
        const updatedTodo = response.body;
        expect(todo.isDone !== updatedTodo.isDone).toBeTruthy();
    });

    test('expect todo entry to be deleted', async () => {
        response = await request.delete('/todos/1').expect(204);
        response = await request.get('/todos/1').expect(404);
    });
});

describe('todos 404', () => {
    test('expect to not find any todo entries', async () => {
        response = await request.get('/todos/1').expect(404);
    });

    test('expect to not update non-existant todo entries', async () => {
        const todoData = {
            isDone: true
        }
        response = await request.put('/todos/1').send(todoData).expect(404);
    });

    test('expect to not delete non-existant todo entries', async () => {
        response = await request.delete('/todos/1').expect(404);
    });
})