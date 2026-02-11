import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, AlertTriangle, Terminal, Loader2, ArrowRight, XCircle } from 'lucide-react';
import { Button } from './Button';
import { ContactFormData } from '../types';

/**
 * MOCK SERVER ACTION
 * In a real Next.js/Remix app, this would be a separate file e.g., 'actions.ts'
 * This simulates the backend latency and response structure.
 */
async function submitAuditRequest(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Simulate network delay for "Drag Race" feel - tight 800ms for responsiveness
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Basic validation simulation
  if (data.email.includes('error')) {
    throw new Error('Simulated Server Error: Connection Refused');
  }

  // Success response
  console.log('[SERVER] POST /api/audit-request', data);
  return { success: true, message: 'Packet received. Sequence initiated.' };
}

// Reusable Input Wrapper to ensure consistency
// Defined outside to prevent re-creation on every render and fix type inference issues
interface InputWrapperProps {
  label: string;
  error?: any;
  isDirty?: boolean;
  isTouched?: boolean;
  children: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ 
  label, 
  error, 
  isDirty, 
  isTouched,
  children 
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end">
      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">
        {label}
      </label>
      {error && (
          <span className="text-red-500 text-[10px] font-mono uppercase flex items-center gap-1 animate-in slide-in-from-right-2">
              //! {error.message}
          </span>
      )}
    </div>
    <div className={`
      group flex items-start bg-slate-950 border-b-2 transition-all duration-200 relative overflow-hidden
      ${error 
          ? 'border-red-500/50 bg-red-500/5' 
          : 'border-slate-800 focus-within:border-brand-500 focus-within:bg-brand-500/5 hover:border-slate-700'}
    `}>
      {/* Status Bar on left */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-colors ${
          error ? 'bg-red-500' : (isDirty ? 'bg-brand-500' : 'bg-transparent')
      }`} />

      <span className={`pl-4 pr-3 py-3 font-mono text-sm select-none transition-colors ${
          error ? 'text-red-500' : 'text-slate-600 group-focus-within:text-brand-500'
      }`}>
          {'>'}
      </span>
      
      {children}

      <div className="pr-4 py-3 flex items-center h-full">
          {error && <XCircle size={16} className="text-red-500 animate-in zoom-in duration-200" />}
          {/* Only show success checkmark if touched (validated) and dirty (modified) and no error */}
          {!error && isDirty && isTouched && <Check size={16} className="text-brand-500 animate-in zoom-in duration-200" />}
      </div>
    </div>
  </div>
);

export const ContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, dirtyFields, touchedFields },
    reset 
  } = useForm<ContactFormData>({
    mode: 'onBlur' // Validation triggered on blur to avoid "yelling" while typing
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitAuditRequest(data);
      setSubmitStatus('success');
      reset();
      
      // Auto-reset UI after 5 seconds
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
            <div className="animate-in slide-in-from-left-8 fade-in duration-700">
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
                  <span>Encryption: AES-256-GCM</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-500">[✓]</span>
                  <span>Ticket_System: Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-500">[✓]</span>
                  <span>Handshake: TLS v1.3</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-slate-900 border border-slate-800 p-1 rounded-sm shadow-2xl animate-in slide-in-from-right-8 fade-in duration-700">
              <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center gap-2">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="ml-auto font-mono text-xs text-slate-600">user@hcc:~/contact-form</div>
              </div>
              
              <div className="p-6 md:p-8" aria-live="polite">
                {submitStatus === 'success' ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-sm flex items-center justify-center mb-6 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
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
                    
                    <InputWrapper 
                        label="Input.Identity" 
                        error={errors.name} 
                        isDirty={!!dirtyFields.name}
                        isTouched={!!touchedFields.name}
                    >
                        <input
                            id="name"
                            type="text"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("name", { required: "Identity required" })}
                            className="w-full bg-transparent border-none text-white px-0 py-3 focus:ring-0 focus:outline-none font-mono text-sm placeholder:text-slate-800"
                            placeholder="enter_name"
                            autoComplete="name"
                        />
                    </InputWrapper>

                    <InputWrapper 
                        label="Input.Comms" 
                        error={errors.email} 
                        isDirty={!!dirtyFields.email}
                        isTouched={!!touchedFields.email}
                    >
                        <input
                            id="email"
                            type="email"
                            aria-invalid={errors.email ? "true" : "false"}
                            {...register("email", { 
                                required: "Comms channel required",
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid syntax"
                                }
                            })}
                            className="w-full bg-transparent border-none text-white px-0 py-3 focus:ring-0 focus:outline-none font-mono text-sm placeholder:text-slate-800"
                            placeholder="user@domain.sys"
                            autoComplete="email"
                        />
                    </InputWrapper>

                    <InputWrapper 
                        label="Input.Log_Data" 
                        error={errors.chaosDescription} 
                        isDirty={!!dirtyFields.chaosDescription}
                        isTouched={!!touchedFields.chaosDescription}
                    >
                        <textarea
                            id="chaosDescription"
                            rows={3}
                            aria-invalid={errors.chaosDescription ? "true" : "false"}
                            {...register("chaosDescription", { required: "System logs required" })}
                            className="w-full bg-transparent border-none text-white px-0 py-3 focus:ring-0 focus:outline-none font-mono text-sm placeholder:text-slate-800 resize-none"
                            placeholder="// Describe system failure..."
                        />
                    </InputWrapper>

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
                            <Loader2 className="animate-spin" size={16} /> PROCESSING_PACKET...
                          </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                TRANSMIT_DATA <ArrowRight size={16} />
                            </span>
                        )}
                      </Button>
                    </div>
                    
                    {submitStatus === 'error' && (
                       <div className="text-red-500 text-xs font-mono mt-2 bg-red-500/10 border border-red-500/20 p-3 rounded-sm flex items-center gap-2" role="alert">
                         <AlertTriangle size={16} />
                         <span>ERR_CONNECTION_REFUSED: Please retry transmission.</span>
                       </div>
                    )}
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