import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, Briefcase, Clock, CheckCircle } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Visa Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialized work visa solutions for Dubai and Qatar, tailored to your career needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Dubai Visa Card */}
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-slate-200">
            <div className="relative h-48">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE3NDY3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dubai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">Dubai Work Visa</h3>
            </div>
            <CardHeader>
              <CardTitle className="text-slate-900">United Arab Emirates</CardTitle>
              <CardDescription className="text-slate-600">Employment visa for Dubai and UAE</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">2-3 years validity period</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Renewable work permit</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Family sponsorship available</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Processing time: 2-4 weeks</span>
              </div>
            </CardContent>
          </Card>

          {/* Qatar Visa Card */}
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-slate-200">
            <div className="relative h-48">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582402675273-3577392edb5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxRYXRhciUyMERvaGElMjBtb2Rlcm4lMjBjaXR5fGVufDF8fHx8MTc3MTg2NTk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Qatar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">Qatar Work Visa</h3>
            </div>
            <CardHeader>
              <CardTitle className="text-slate-900">State of Qatar</CardTitle>
              <CardDescription className="text-slate-600">Employment visa for Doha and Qatar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">1-5 years validity period</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Renewable work permit</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Family visa sponsorship</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Processing time: 3-6 weeks</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-4 shadow-lg shadow-amber-500/30">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Fast Processing</h4>
            <p className="text-slate-600">Quick turnaround times for your visa applications</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mb-4 shadow-lg shadow-emerald-500/30">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">High Success Rate</h4>
            <p className="text-slate-600">98% approval rate with our expert guidance</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 shadow-lg shadow-blue-500/30">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Expert Support</h4>
            <p className="text-slate-600">Professional assistance throughout the process</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-4 shadow-lg shadow-slate-700/30">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Trusted Partner</h4>
            <p className="text-slate-600">5000+ successful visa applications processed</p>
          </div>
        </div>
      </div>
    </section>
  );
}