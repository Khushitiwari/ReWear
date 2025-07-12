import { Client, Account } from "appwrite";

const client = new Client();

client 
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject("68722bc30011667adc32");   //project id

const account = new Account(client);

export{client, account};