import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.country) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Show success message
    toast.success('Application submitted successfully! We will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      message: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Visa Application
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Fill out the form below and our visa experts will contact you within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-2xl shadow-amber-500/20">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-amber-50">
                  Get in touch with us today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-amber-50">+971 4 123 4567</p>
                    <p className="text-amber-50">+974 4444 5555</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-amber-50">info@visahub.com</p>
                    <p className="text-amber-50">support@visahub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Offices</p>
                    <p className="text-amber-50">Dubai, UAE</p>
                    <p className="text-amber-50">Doha, Qatar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-xl">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-white mb-3">Working Hours</h4>
                <div className="space-y-2 text-sm text-slate-200">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-slate-700">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                <CardTitle className="text-white">Application Form</CardTitle>
                <CardDescription className="text-slate-200">
                  Please provide your details and we'll guide you through the process
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-900">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-900">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-900">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-slate-900">Visa Type *</Label>
                      <Select value={formData.country} onValueChange={(value) => handleChange('country', value)}>
                        <SelectTrigger id="country" className="border-slate-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dubai">Dubai Work Visa</SelectItem>
                          <SelectItem value="qatar">Qatar Work Visa</SelectItem>
                          <SelectItem value="both">Both Dubai & Qatar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-900">Additional Information (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your work experience, qualifications, or any specific requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 shadow-lg shadow-amber-500/30">
                    Submit Application <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you agree to our terms and conditions. 
                    We'll contact you within 24 hours to discuss your application.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}