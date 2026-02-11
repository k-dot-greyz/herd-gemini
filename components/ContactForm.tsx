import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, AlertTriangle, Terminal, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<ContactFormData>();

  // Inline Route Handler Simulation
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate network latency for realism
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock Route Handler Logic
      // In a real app, this would be: await fetch('/api/audit-request', { method: 'POST', body: JSON.stringify(data) })
      console.log('POST /api/audit-request 200 OK', data);
      
      setSubmitStatus('success');
      reset();
      
      // Auto-reset for UX flow
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission failed', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Terminal Info */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 text-brand-500">
                <Terminal size={24} />
                <span className="font-mono font-bold text-lg">/root/contact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                Initialize <br />
                <span className="text-slate-700">Audit</span> Sequence
              </h2>
              <p className="text-slate-400 mb-8 max-w-md font-light">
                Transmit your coordinates. We will deploy a consultant to your location to assess the chaos levels.
              </p>
              
              <div className="space-y-4 font-mono text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="text-brand-500">[✓]</span>
                  <span>Encryption: 256-bit</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-500">[✓]</span>
                  <span>Response_Time: &lt; 24hrs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-500">[✓]</span>
                  <span>Protocol: Secure</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-slate-900 border border-slate-800 p-1 rounded-sm shadow-2xl">
              <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="ml-auto font-mono text-xs text-slate-600">user@hcc:~/contact-form</div>
              </div>
              
              <div className="p-6 md:p-8">
                {submitStatus === 'success' ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-sm flex items-center justify-center mb-6 border border-green-500/50">
                      <Check size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase">Transmission Complete</h3>
                    <p className="text-slate-500 font-mono text-sm">We are analyzing your packet data.</p>
                    <Button 
                      variant="ghost" 
                      className="mt-8 font-mono text-xs"
                      onClick={() => setSubmitStatus('idle')}
                    >
                      SEND_NEW_PACKET
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-brand-500 uppercase">
                        Input.Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Required field" })}
                        className="w-full bg-slate-950 border-b border-slate-700 text-white px-0 py-3 focus:outline-none focus:border-brand-500 transition-colors font-mono text-sm placeholder:text-slate-800"
                        placeholder="_"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs font-mono flex items-center gap-1">
                          <AlertTriangle size={12} /> {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-brand-500 uppercase">
                        Input.Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Required field",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid syntax"
                          }
                        })}
                        className="w-full bg-slate-950 border-b border-slate-700 text-white px-0 py-3 focus:outline-none focus:border-brand-500 transition-colors font-mono text-sm placeholder:text-slate-800"
                        placeholder="_"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs font-mono flex items-center gap-1">
                          <AlertTriangle size={12} /> {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="chaosDescription" className="block text-xs font-mono font-bold text-brand-500 uppercase">
                        Input.Log_Data
                      </label>
                      <textarea
                        id="chaosDescription"
                        rows={3}
                        {...register("chaosDescription", { required: "Required field" })}
                        className="w-full bg-slate-950 border-b border-slate-700 text-white px-0 py-3 focus:outline-none focus:border-brand-500 transition-colors font-mono text-sm placeholder:text-slate-800 resize-none"
                        placeholder="// Describe error state..."
                      />
                      {errors.chaosDescription && (
                        <span className="text-red-500 text-xs font-mono flex items-center gap-1">
                          <AlertTriangle size={12} /> {errors.chaosDescription.message}
                        </span>
                      )}
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        fullWidth 
                        size="lg"
                        disabled={isSubmitting}
                        className={isSubmitting ? 'opacity-70 cursor-wait' : ''}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="animate-spin" size={16} /> PROCESSING
                          </span>
                        ) : 'TRANSMIT_DATA'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};