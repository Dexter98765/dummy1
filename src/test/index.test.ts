import chai from 'chai';
import express, {Application} from 'express';
import request from 'supertest';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;

describe('Routes Test',()=>{

    it('should always pass', function () {
        expect(true).to.equal(true);
    });

    it('POST api test', async function () {

        const res = await chai.request('http://localhost:8000/users/').post('/create').send({firstName:"firstname",lastName:"lastName",age:28});
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).not.to.be.empty;
        expect(res.body.data).to.be.empty;
        expect(res.body.data).to.be.an("object");
        
    })

    it('PUT api test', async function () {

        const res = await chai.request('http://localhost:8000/users/').put('/update/15').send({firstName:"firstname",lastName:"lastName",age:28});
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).not.to.be.empty;
        expect(res.body.data).to.be.empty;
        expect(res.body.data).to.be.an("object");
        
    })

    it('DELETE api test', async function () {

        const res = await chai.request('http://localhost:8000/users/').delete('/delete/15');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).not.to.be.empty;
        expect(res.body.data).to.be.empty;
        expect(res.body.data).to.be.an("object");
        
    })

    it('GET api test', async function () {

        const res = await chai.request('http://localhost:8000/users/').get('/getUsers/0');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).not.to.be.empty;
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data).to.be.an("array");
        
    })
})