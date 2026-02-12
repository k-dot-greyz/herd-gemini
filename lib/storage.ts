import { ContactFormData } from '../types';

const DB_KEY = 'hcc_audit_logs_v1';

export interface AuditLog extends ContactFormData {
  id: string;
  timestamp: string;
  status: 'PENDING' | 'ANALYZED' | 'ARCHIVED';
  ip: string;
}

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const StorageAPI = {
  async saveLog(data: ContactFormData): Promise<AuditLog> {
    await delay(800); // Fake network latency

    const newLog: AuditLog = {
      ...data,
      id: crypto.randomUUID().slice(0, 8).toUpperCase(),
      timestamp: new Date().toISOString(),
      status: 'PENDING',
      ip: '192.168.1.X' // Mock IP
    };

    const existing = StorageAPI.getLogsSync();
    const updated = [newLog, ...existing];
    localStorage.setItem(DB_KEY, JSON.stringify(updated));
    
    return newLog;
  },

  async getLogs(): Promise<AuditLog[]> {
    await delay(600);
    return StorageAPI.getLogsSync();
  },

  async purgeLogs(): Promise<void> {
    await delay(400);
    localStorage.removeItem(DB_KEY);
  },

  // Internal helper
  getLogsSync(): AuditLog[] {
    try {
      const raw = localStorage.getItem(DB_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Database corruption detected', e);
      return [];
    }
  }
};