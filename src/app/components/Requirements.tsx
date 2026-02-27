import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { FileText, Camera, Clipboard, GraduationCap, Stethoscope, Award } from 'lucide-react';

export function Requirements() {
  const dubaiRequirements = [
    {
      icon: FileText,
      title: 'Valid Passport',
      description: 'Passport with minimum 6 months validity',
    },
    {
      icon: Camera,
      title: 'Photographs',
      description: 'Recent passport-sized color photographs',
    },
    {
      icon: GraduationCap,
      title: 'Educational Certificates',
      description: 'Attested degree and educational documents',
    },
    {
      icon: Clipboard,
      title: 'Employment Contract',
      description: 'Job offer letter from UAE employer',
    },
    {
      icon: Stethoscope,
      title: 'Medical Fitness',
      description: 'Health certificate and medical test results',
    },
    {
      icon: Award,
      title: 'Professional Certificates',
      description: 'Relevant work experience and skill certificates',
    },
  ];

  const qatarRequirements = [
    {
      icon: FileText,
      title: 'Valid Passport',
      description: 'Passport with minimum 6 months validity',
    },
    {
      icon: Camera,
      title: 'Photographs',
      description: 'Recent passport-sized color photographs',
    },
    {
      icon: GraduationCap,
      title: 'Educational Documents',
      description: 'Attested degree and certificates',
    },
    {
      icon: Clipboard,
      title: 'Job Contract',
      description: 'Employment contract from Qatar employer',
    },
    {
      icon: Stethoscope,
      title: 'Medical Certificate',
      description: 'Health certificate and medical examination',
    },
    {
      icon: Award,
      title: 'Work Experience',
      description: 'Previous employment and experience letters',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Visa Requirements
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Essential documents and requirements for your work visa application
          </p>
        </div>

        <Tabs defaultValue="dubai" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100">
            <TabsTrigger value="dubai" className="text-lg data-[state=active]:bg-amber-500 data-[state=active]:text-white">Dubai (UAE)</TabsTrigger>
            <TabsTrigger value="qatar" className="text-lg data-[state=active]:bg-amber-500 data-[state=active]:text-white">Qatar</TabsTrigger>
          </TabsList>

          <TabsContent value="dubai">
            <Card className="border-slate-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="text-slate-900">Dubai Work Visa Requirements</CardTitle>
                <CardDescription className="text-slate-600">
                  Complete list of documents needed for Dubai/UAE work visa application
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dubaiRequirements.map((req, index) => {
                    const Icon = req.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">{req.title}</h4>
                          <p className="text-sm text-slate-600">{req.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Additional Notes:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• All certificates must be attested by the Ministry of Foreign Affairs</li>
                    <li>• Police clearance certificate required from country of residence</li>
                    <li>• Emirates ID will be issued after visa approval</li>
                    <li>• Labor card and establishment card from sponsor required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qatar">
            <Card className="border-slate-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="text-slate-900">Qatar Work Visa Requirements</CardTitle>
                <CardDescription className="text-slate-600">
                  Complete list of documents needed for Qatar work visa application
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {qatarRequirements.map((req, index) => {
                    const Icon = req.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center shadow-lg shadow-slate-700/30">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">{req.title}</h4>
                          <p className="text-sm text-slate-600">{req.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Additional Notes:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• All documents must be attested by Qatar Embassy</li>
                    <li>• Police clearance certificate from home country required</li>
                    <li>• Qatar ID (QID) will be issued after arrival</li>
                    <li>• Sponsor's computer card and authorization letter needed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}