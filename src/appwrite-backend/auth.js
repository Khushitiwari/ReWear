import { account } from "./appwrite";

export function signup(email, password,name){
    return account.create('unique()',email,password, name);
}

export function login(email, password) {
    return account.createEmailSession(email,password);
}

export function logout(){
    return account.deleteSession('current');
}

export function getCurrentUser(){
    return account.get();
}