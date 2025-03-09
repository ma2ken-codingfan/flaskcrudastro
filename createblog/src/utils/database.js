import sqlite from 'sqlite3';
import { open } from 'sqlite';

export async function getDatabaseConnection() {
    const db = await open({
        filename: '../instance/database.db',
        driver: sqlite.Database
    });
    return db;
}

export async function getUsers() {
    const db = await getDatabaseConnection();
    const users = await db.all('SELECT * FROM user');
    await db.close();
    return users;
}