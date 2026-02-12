import React, { useState, useEffect } from 'react';
    import { ShieldAlert, Lock, Unlock, Trash2, RefreshCw, Database, Terminal } from 'lucide-react';
    import { Button } from './Button';
    import { TerminalInput } from './ui/TerminalInput';
    import { StorageAPI, AuditLog } from '../lib/storage';
    import { SectionHeader } from './ui/SectionHeader';
    
    export const AdminConsole: React.FC = () => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [password, setPassword] = useState('');
      const [logs, setLogs] = useState<AuditLog[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
    
      const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Hardcoded "secure" password for demo
        if (password === 'admin' || password === 'root') {
          setIsAuthenticated(true);
          fetchLogs();
        } else {
          setError('ACCESS_DENIED: Invalid credential hash');
          setPassword('');
        }
      };
    
      const fetchLogs = async () => {
        setLoading(true);
        try {
          const data = await StorageAPI.getLogs();
          setLogs(data);
        } finally {
          setLoading(false);
        }
      };
    
      const handlePurge = async () => {
        if (window.confirm('WARNING: Irreversible data loss. Confirm purge?')) {
          await StorageAPI.purgeLogs();
          fetchLogs();
        }
      };
    
      if (!isAuthenticated) {
        return (
          <div className="pt-32 pb-24 min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full bg-slate-900/50 border border-slate-800 p-8 rounded-sm shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse" />
               
               <div className="text-center mb-8">
                 <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                   <Lock size={32} />
                 </div>
                 <h1 className="text-2xl font-black text-white uppercase tracking-tight">Restricted Area</h1>
                 <p className="text-slate-500 font-mono text-xs mt-2">Authorized Personnel Only</p>
               </div>
    
               <form onSubmit={handleLogin} className="space-y-6">
                 <TerminalInput label="Password" error={error ? { message: error } : undefined}>
                   <input
                     type="password"
                     value={password}
                     onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                     }}
                     className="w-full bg-transparent border-none text-white px-0 py-3 focus:ring-0 focus:outline-none font-mono text-base placeholder:text-slate-800"
                     placeholder="enter_passcode"
                     autoFocus
                   />
                 </TerminalInput>
                 <Button fullWidth onClick={() => {}}>AUTHENTICATE</Button>
               </form>
               <div className="mt-6 text-center">
                 <p className="text-[10px] text-slate-600 font-mono">HINT: Try 'admin' or 'root'</p>
               </div>
            </div>
          </div>
        );
      }
    
      return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-800 pb-8 gap-4">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-mono mb-4">
                    <ShieldAlert size={12} />
                    <span>ADMIN_MODE_ACTIVE</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                    Audit <span className="text-slate-700">Logs</span>
                  </h1>
               </div>
               
               <div className="flex gap-4">
                 <Button variant="outline" size="sm" onClick={fetchLogs} className="gap-2">
                   <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> REFRESH
                 </Button>
                 <Button variant="secondary" size="sm" onClick={handlePurge} className="gap-2 text-red-400 hover:text-red-300 border-red-900/50 hover:bg-red-900/20">
                   <Trash2 size={14} /> PURGE_DB
                 </Button>
               </div>
            </div>
    
            <div className="bg-slate-900/30 border border-slate-800 rounded-sm overflow-hidden">
               {/* Terminal Header */}
               <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                    <Database size={14} />
                    <span>/var/log/audit_requests.db</span>
                 </div>
                 <div className="text-slate-600 font-mono text-xs">
                    {logs.length} RECORDS FOUND
                 </div>
               </div>
    
               {/* Data Table */}
               <div className="overflow-x-auto">
                 <table className="w-full text-left font-mono text-sm">
                    <thead className="bg-slate-900 text-slate-400 text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3 border-b border-slate-800 font-bold">ID</th>
                        <th className="px-6 py-3 border-b border-slate-800 font-bold">Timestamp</th>
                        <th className="px-6 py-3 border-b border-slate-800 font-bold">Identity</th>
                        <th className="px-6 py-3 border-b border-slate-800 font-bold">Comms</th>
                        <th className="px-6 py-3 border-b border-slate-800 font-bold">Log_Data</th>
                        <th className="px-6 py-3 border-b border-slate-800 font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                       {logs.length === 0 ? (
                         <tr>
                           <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                             <div className="flex flex-col items-center gap-2">
                               <Terminal size={24} className="opacity-50" />
                               <span>NO_DATA_FOUND</span>
                             </div>
                           </td>
                         </tr>
                       ) : (
                         logs.map((log) => (
                           <tr key={log.id} className="hover:bg-slate-800/30 transition-colors group">
                             <td className="px-6 py-4 text-slate-500 font-xs">{log.id}</td>
                             <td className="px-6 py-4 text-slate-400">{new Date(log.timestamp).toLocaleString()}</td>
                             <td className="px-6 py-4 text-white font-bold">{log.name}</td>
                             <td className="px-6 py-4 text-brand-500">{log.email}</td>
                             <td className="px-6 py-4 text-slate-300 max-w-xs truncate" title={log.chaosDescription}>
                               {log.chaosDescription}
                             </td>
                             <td className="px-6 py-4">
                               <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] border border-yellow-500/20">
                                 {log.status}
                               </span>
                             </td>
                           </tr>
                         ))
                       )}
                    </tbody>
                 </table>
               </div>
            </div>
    
          </div>
        </div>
      );
    };