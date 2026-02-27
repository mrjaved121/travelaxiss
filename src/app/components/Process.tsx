import { FileCheck, UserCheck, Plane, CheckCircle2 } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: FileCheck,
      title: 'Submit Application',
      description: 'Fill out our online form with your details and upload required documents',
      color: 'from-amber-500 to-amber-600',
      shadowColor: 'shadow-amber-500/30',
    },
    {
      icon: UserCheck,
      title: 'Document Verification',
      description: 'Our team reviews and verifies all your documents for accuracy',
      color: 'from-emerald-500 to-emerald-600',
      shadowColor: 'shadow-emerald-500/30',
    },
    {
      icon: Plane,
      title: 'Visa Processing',
      description: 'We submit your application and liaise with immigration authorities',
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/30',
    },
    {
      icon: CheckCircle2,
      title: 'Visa Approval',
      description: 'Receive your approved visa and start your new career journey',
      color: 'from-slate-700 to-slate-800',
      shadowColor: 'shadow-slate-700/30',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Getting your work visa has never been easier. Follow our streamlined process
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl ${step.shadowColor} relative z-10`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full animate-ping opacity-20`}></div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-amber-500/50 z-20">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800 px-6 py-3 rounded-full border border-emerald-200 shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-semibold">Average processing time: 2-6 weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}