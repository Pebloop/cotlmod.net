import sqlite3 from "sqlite3";
import {open} from "sqlite";

async function openDb() {
    return await open({
        filename: "./db.sqlite",
        driver: sqlite3.Database
    });
}

async function init() {
    const db = await openDb();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT,
            googleId TEXT
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS mods (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            version TEXT NOT NULL,
            description TEXT,
            author INTEGER,
            link TEXT,
            tags TEXT
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS tokens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            token TEXT NOT NULL UNIQUE,
            userId INTEGER NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (userId) REFERENCES users(id)
        );
    `);

    await db.close()
}

async function getUsers() {
    await init();
    const db = await openDb();
    const users = await db.all("SELECT * FROM users");
    await db.close();
    return users;
}

async function getUser(username: string) {
    await init();
    const db = await openDb();
    const user = await db.get("SELECT * FROM users WHERE username = ?", [username]);
    await db.close();
    return user;
}

async function createUser(username: string, password: string | null, googleId: string | null) {
    await init();
    const db = await openDb();
    await db.run("INSERT INTO users (username, password, googleId) VALUES (?, ?, ?)", [username, password, googleId]);
    await db.close();
}

async function updateUser(id: number, username: string, password: string |null,  googleId: string | null) {
    await init();
    const db = await openDb();
    await db.run("UPDATE users SET username = ?, password = ?, googleId = ? WHERE id = ?", [username, password, googleId, id]);
    await db.close();
}

async function deleteUser(id: number) {
    await init();
    const db = await openDb();
    await db.run("DELETE FROM users WHERE id = ?", [id]);
    await db.close();
}

async function getMods() {
    await init();
    const db = await openDb();
    const mods = await db.all("SELECT * FROM mods");
    await db.close();
    return mods;
}

async function getMod(id: number) {
    await init();
    const db = await openDb();
    const mod = await db.get("SELECT * FROM mods WHERE id = ?", [id]);
    await db.close();
    return mod;
}

async function createMod(name: string, version: string, description: string, author: number, link: string, tags: string) {
    await init();
    const db = await openDb();
    await db.run("INSERT INTO mods (name, version, description, author, link, tags) VALUES (?, ?, ?, ?, ?, ?)", [name, version, description, author, link, tags]);
    await db.close();
}

async function updateMod(id: number, name: string, version: string, description: string, author: number, link: string, tags: string) {
    await init();
    const db = await openDb();
    await db.run("UPDATE mods SET name = ?, version = ?, description = ?, author = ?, link = ?, tags = ? WHERE id = ?", [name, version, description, author, link, tags, id]);
    await db.close();
}

async function deleteMod(id: number) {
    await init();
    const db = await openDb();
    await db.run("DELETE FROM mods WHERE id = ?", [id]);
    await db.close();
}

async function searchMods(query: string) {
    await init();
    const db = await openDb();
    const mods = await db.all("SELECT * FROM mods WHERE name LIKE ? OR description LIKE ?", [`%${query}%`, `%${query}%`]);
    await db.close();
    return mods;
}

async function getToken(token: string) {
    await init();
    const db = await openDb();
    const tokenData = await db.get("SELECT * FROM tokens WHERE token = ?", [token]);
    await db.close();
    return tokenData;
}

async function createToken(token: string, userId: number) {
    await init();
    const db = await openDb();
    await db.run("INSERT INTO tokens (token, userId) VALUES (?, ?)", [token, userId]);
    await db.close();
}

async function deleteToken(token: string) {
    await init();
    const db = await openDb();
    await db.run("DELETE FROM tokens WHERE token = ?", [token]);
    await db.close();
}

export const db = {
    users: {
        getAll: getUsers,
        get: getUser,
        create: createUser,
        update: updateUser,
        delete: deleteUser
    },
    mods: {
        getAll: getMods,
        get: getMod,
        create: createMod,
        update: updateMod,
        delete: deleteMod,
        search: searchMods
    },
    tokens: {
        get: getToken,
        create: createToken,
        delete: deleteToken
    }
}