import pg from 'pg';
import { Client } from 'pg';
import express from 'express';
const client=new Client({
    host: 'localhost',
    port: 5432,
    database: 'test-server',
    user: 'postgres',
    password: 'asdflkjh',
})

console.log('hi')
async function main(){
    try{

        await client.connect();
        console.log('connected');
        
    }
    catch(err){
        console.error('connection error', err)
    }
}
main();