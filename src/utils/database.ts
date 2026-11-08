import * as SQLite from "expo-sqlite";
import { Transaction } from "../types/transactions";

const db = SQLite.openDatabaseSync("money_tracker.db");

export const initDB = async () => {
    try {
        await db.execAsync(
            `
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                amount INTEGER NOT NULL,
                type TEXT NOT NULL,
                date TEXT NOT NULL
            );
            `
        );

        console.log("create transactions table successfully");
    } catch (e) {
        console.error("failed: " + e);
    }
};

export const dropTransactionsTable = async () => {
    try {
        await db.execAsync(`DROP TABLE IF EXISTS transactions;`);
        console.log("drop transactions table successfully");
    } catch (e) {
        console.error("failed: " + e);
    }
}

export const insertTransaction = async (payload: Omit<Transaction, "id">): Promise<number | undefined> => {
    try {
        const result = await db.runAsync(
            `INSERT INTO transactions (title, amount, type, date) VALUES (?, ?, ?, ?)`,
            payload.title, payload.amount, payload.type, payload.date
        );

        return result.lastInsertRowId;
    } catch (e) {
        console.error("failed: " + e);
    }
};

export const getTransactions = async (yearMonthFilter: string = "%"): Promise<Transaction[]> => {
    try {
        const result = await db.getAllAsync<Transaction>(
            `SELECT *
            FROM transactions
            WHERE date LIKE ?
            ORDER BY date DESC;`,
            [yearMonthFilter]
        );

        return result;
    } catch (e) {
        console.error("failed: " + e);
        return [];
    }
};

export const getTotalFunds = async (yearMonthFilter: string = "%"): Promise<number> => {
    try {
        const result = await db.getFirstAsync<{ total: number }>(
            `SELECT COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END), 0) - COALESCE(SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END), 0) AS total
            FROM transactions
            WHERE date LIKE ?;`,
            [yearMonthFilter]
        );

        return result?.total || 0;
    } catch (e) {
        console.error("failed: " + e);
        return 0;
    }
}

export const getTotalIncome = async (yearMonthFilter: string = "%"): Promise<number> => {
    try {
        const result = await db.getFirstAsync<{ total: number }>(
            `SELECT COALASE(SUM(amount), 0) AS total
            FROM transactions WHERE type = 'income'
            AND date LIKE ?;`,
            [yearMonthFilter]
        );

        return result?.total || 0;
    } catch (e) {
        console.error("failed: " + e);
        return 0;
    }
}

export const getTotalExpenses = async (yearMonthFilter: string = "%"): Promise<number> => {
    try {
        const result = await db.getFirstAsync<{ total: number }>(
            `SELECT COALASE(SUM(amount), 0) AS total
            FROM transactions WHERE type = 'expense'
            AND date LIKE ?;`,
            [yearMonthFilter]
        );

        return result?.total || 0;
    } catch (e) {
        console.error("failed: " + e);
        return 0;
    }
}