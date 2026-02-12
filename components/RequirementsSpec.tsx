import React from 'react';
import { Terminal, Box, Layers, Database, Cpu, ShieldCheck, Zap, LayoutTemplate, FileText } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './Button';

interface SpecCardProps {
  title: string;
  children?: React.ReactNode;
  icon: any;
}

const SpecCard: React.FC<SpecCardProps> = ({ title, children, icon: Icon }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-sm mb-6 hover:border-slate-700 transition-colors">
    <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
      <Icon size={18} className="text-brand-500" />
      <h3 className="font-mono font-bold text-white uppercase text-sm tracking-wider">{title}</h3>
    </div>
    <div className="text-slate-400 text-sm leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const CodeBlock = ({ children }: { children?: React.ReactNode }) => (
  <pre className="bg-slate-950 p-4 rounded-sm border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto my-2">
    <code>{children}</code>
  </pre>
);

const PROJECT_STRUCTURE_MARKDOWN = `# Project Feline Focus - Architecture v2.0.1

## 📂 Core Structure
- **App.tsx**: State container & client-side router
- **index.tsx**: React DOM entry point
- **types.ts**: Shared TypeScript definitions

## 📄 Views
- **components/LandingPage.tsx**: Composition of marketing sections
- **components/RequirementsSpec.tsx**: This documentation file

## 🧩 Components (Organisms)
- **Navbar.tsx**: Top navigation with view switcher
- **Hero.tsx**: High-impact introduction
- **PainSection.tsx**: "Problem" statement grid
- **SolutionSection.tsx**: "Process" visualization
- **SocialProof.tsx**: Trust signals / Logo strip
- **ContactForm.tsx**: "Action" component with validation logic
- **Footer.tsx**: Site termination & links

## ⚛️ UI System (Atoms & Molecules)
- **components/Button.tsx**: Polymorphic button (Primary, Ghost, Outline)
- **components/ui/SectionHeader.tsx**: Standardized H2/Subtitle typography
- **components/ui/TerminalInput.tsx**: Form field wrapper with "hacker" aesthetics
`;

export const RequirementsSpec: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="mb-12 border-b border-slate-800 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs font-mono mb-6">
                <Terminal size={12} />
                <span>DOC_VERSION: 2.0.1</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                System <span className="text-slate-700">Architecture</span> Spec
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-light">
                Project "Feline Focus" technical requirements and design system standards for future scalability.
            </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
            {/* Sidebar Navigation */}
            <div className="hidden md:block col-span-3">
                <div className="sticky top-32 space-y-1">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Table_of_Contents</div>
                    <div className="pl-3 border-l-2 border-brand-500 text-brand-500 font-mono text-sm py-1 font-bold">01. Overview</div>
                    <div className="pl-3 border-l-2 border-transparent text-slate-500 hover:text-slate-300 font-mono text-sm py-1 cursor-pointer transition-colors">02. Design System</div>
                    <div className="pl-3 border-l-2 border-transparent text-slate-500 hover:text-slate-300 font-mono text-sm py-1 cursor-pointer transition-colors">03. Architecture</div>
                    <div className="pl-3 border-l-2 border-transparent text-slate-500 hover:text-slate-300 font-mono text-sm py-1 cursor-pointer transition-colors">04. Inventory</div>
                    <div className="pl-3 border-l-2 border-transparent text-slate-500 hover:text-slate-300 font-mono text-sm py-1 cursor-pointer transition-colors">05. Export</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-9 space-y-12">
                
                {/* Section 1 */}
                <section>
                    <SectionHeader 
                        title="01. Strategic Pivot" 
                        highlight="Objectives"
                        description="Transitioning from a monolithic landing page to a Composable Terminal UI System to ensure portability and rapid deployment of future modules."
                        className="mb-8"
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                        <SpecCard title="Core Philosophy" icon={ShieldCheck}>
                            <p>
                                <strong>Anti-Fragility:</strong> The system must handle "chaos" (errors, loading states, edge cases) gracefully with distinct visual feedback.
                            </p>
                            <p>
                                <strong>Honest UI:</strong> No implied promises. Loading states must be explicit. Validation occurs <code>onBlur</code> to avoid premature user guilt.
                            </p>
                        </SpecCard>
                        <SpecCard title="Technical Constraints" icon={Cpu}>
                            <ul className="list-disc list-inside space-y-2 marker:text-brand-500">
                                <li>Mobile-first optimization (Nexus 5X benchmark)</li>
                                <li>No heavy JS frameworks for animations (CSS native)</li>
                                <li>Scanline effects disabled on mobile to preserve GPU</li>
                                <li>Strict TypeScript strict-mode compliance</li>
                            </ul>
                        </SpecCard>
                    </div>
                </section>

                {/* Section 2 */}
                <section>
                    <SectionHeader 
                        title="02. Atomic Terminal" 
                        highlight="Design System"
                        className="mb-8"
                    />
                    
                    <div className="space-y-6">
                        <SpecCard title="Atoms & Molecules" icon={Box}>
                            <p>The UI is constructed from atomic units that can be composed into larger organisms.</p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="p-4 bg-slate-950 border border-slate-800">
                                    <div className="text-xs font-mono text-slate-500 mb-2">Atom: Button</div>
                                    <Button size="sm">ACTION</Button>
                                </div>
                                <div className="p-4 bg-slate-950 border border-slate-800">
                                    <div className="text-xs font-mono text-slate-500 mb-2">Molecule: Input</div>
                                    <div className="h-10 border-b border-slate-700 bg-slate-900/50 flex items-center px-2 text-sm font-mono text-slate-400">
                                        <span className="text-brand-500 mr-2">{'>'}</span> input_data...
                                    </div>
                                </div>
                            </div>
                        </SpecCard>

                        <SpecCard title="Typography & Color" icon={Layers}>
                            <p>
                                <strong>Font Stack:</strong> Inter (UI/Body) + JetBrains Mono (Data/Code).
                            </p>
                            <p>
                                <strong>Palette:</strong> Slate-950 (Background), Slate-50 (Text), Brand-500 (Amber - Focus/Action), Red-500 (Error).
                            </p>
                        </SpecCard>
                    </div>
                </section>

                {/* Section 3 */}
                <section>
                    <SectionHeader 
                        title="03. Architecture" 
                        highlight="Patterns"
                        className="mb-8"
                    />
                    
                    <SpecCard title="Data-Driven Components" icon={Database}>
                        <p>
                            Components should remain presentational ("dumb"). Logic and content are injected via props to facilitate CMS integration or rapid prototyping.
                        </p>
                        <CodeBlock>
{`<FeatureGrid 
  items={[
    { 
      icon: Alert, 
      title: "Silo", 
      desc: "..." 
    }
  ]} 
/>`}
                        </CodeBlock>
                    </SpecCard>

                    <SpecCard title="Validation Logic" icon={Zap}>
                        <p>
                            Forms utilize <code>react-hook-form</code> with <code>mode: 'onBlur'</code>. 
                            Users are considered innocent until they leave a field.
                            Error states replace neutral borders with Red-500 and inject a specific error message into the label area.
                        </p>
                    </SpecCard>
                </section>

                {/* Section 4: Component Inventory */}
                <section>
                    <SectionHeader 
                        title="04. Component Inventory" 
                        highlight="Manifest"
                        className="mb-8"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-sm">
                            <div className="flex items-center gap-2 mb-4 text-brand-500">
                                <LayoutTemplate size={16} />
                                <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Pages & Views</h4>
                            </div>
                            <ul className="space-y-2 text-sm font-mono text-slate-400">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>LandingPage.tsx</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>RequirementsSpec.tsx</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-sm">
                            <div className="flex items-center gap-2 mb-4 text-brand-500">
                                <Box size={16} />
                                <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Core Components</h4>
                            </div>
                            <ul className="grid grid-cols-1 gap-2 text-sm font-mono text-slate-400">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>Navbar.tsx</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>Hero.tsx</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>PainSection.tsx</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>SolutionSection.tsx</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>SocialProof.tsx</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>ContactForm.tsx</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>Footer.tsx</li>
                            </ul>
                        </div>

                         <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-sm md:col-span-2">
                            <div className="flex items-center gap-2 mb-4 text-brand-500">
                                <Layers size={16} />
                                <h4 className="font-mono text-sm font-bold uppercase tracking-wider">UI Library (Atoms)</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-mono text-slate-400">
                                <div className="flex items-center gap-2"><span className="text-slate-600">{'<'}</span>Button /<span className="text-slate-600">{'>'}</span></div>
                                <div className="flex items-center gap-2"><span className="text-slate-600">{'<'}</span>SectionHeader /<span className="text-slate-600">{'>'}</span></div>
                                <div className="flex items-center gap-2"><span className="text-slate-600">{'<'}</span>TerminalInput /<span className="text-slate-600">{'>'}</span></div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Section 5: Portable Export */}
                <section>
                    <SectionHeader 
                        title="05. Portable Export" 
                        highlight="Markdown"
                        description="Raw architecture dump for easy replication or LLM context injection."
                        className="mb-8"
                    />
                    <div className="relative group">
                        <div className="absolute top-0 right-0 p-3 flex items-center gap-2 pointer-events-none">
                            <FileText size={14} className="text-slate-600" />
                            <span className="text-xs text-slate-600 font-mono">READ_ONLY</span>
                        </div>
                        <textarea 
                            readOnly
                            className="w-full h-96 bg-slate-950 border border-slate-800 text-slate-400 font-mono text-xs p-6 focus:border-brand-500 focus:outline-none resize-none leading-relaxed"
                            value={PROJECT_STRUCTURE_MARKDOWN}
                        />
                    </div>
                </section>

            </div>
        </div>
      </div>
    </div>
  );
};
