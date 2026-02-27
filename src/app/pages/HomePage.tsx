import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Globe, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Award,
  Briefcase,
  MapPin,
  ArrowRight,
  Star,
  Target,
  GraduationCap,
  Plane,
  FileCheck,
  Building2
} from 'lucide-react';
import { useState } from 'react';
import { ROUTES } from '../config';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const whatsappNumber = '+19709145523';
  
  const openWhatsApp = (message: string = 'Hello, I would like to inquire about visa services') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const visaServices = [
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Secure employment opportunities abroad with our expert work visa processing',
      color: 'from-blue-500 to-blue-600',
      countries: ['GCC', 'Europe', 'Australia', 'New Zealand', 'UK', 'USA']
    },
    {
      icon: GraduationCap,
      title: 'Student Visa',
      description: 'Pursue your academic dreams with seamless student visa assistance',
      color: 'from-purple-500 to-purple-600',
      countries: ['Europe', 'Australia', 'New Zealand', 'UK', 'USA']
    },
    {
      icon: Plane,
      title: 'Visit Visa',
      description: 'Travel worry-free with our comprehensive visit visa services',
      color: 'from-green-500 to-green-600',
      countries: ['GCC', 'Europe', 'Australia', 'New Zealand', 'UK', 'USA']
    },
    {
      icon: FileCheck,
      title: 'E-Visa',
      description: 'Quick and convenient electronic visa processing for your travel needs',
      color: 'from-amber-500 to-amber-600',
      countries: ['GCC', 'Europe', 'Australia', 'New Zealand']
    }
  ];

  const consultancyCountries = [
    {
      region: 'GCC Countries',
      countries: ['UAE (Dubai)', 'Qatar', 'Saudi Arabia', 'Kuwait', 'Bahrain', 'Oman'],
      flag: '🇦🇪',
      description: 'Expert visa services for Gulf Cooperation Council nations',
      visaTypes: ['Work Visa', 'Visit Visa', 'E-Visa'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600'
    },
    {
      region: 'Europe',
      countries: ['Germany', 'France', 'Netherlands', 'Poland', 'Italy', 'Spain'],
      flag: '🇪🇺',
      description: 'Comprehensive visa solutions for European destinations',
      visaTypes: ['Work Visa', 'Student Visa', 'Visit Visa', 'E-Visa'],
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600'
    },
    {
      region: 'Australia',
      countries: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
      flag: '🇦🇺',
      description: 'Professional assistance for Australian visa applications',
      visaTypes: ['Work Visa', 'Student Visa', 'Visit Visa', 'E-Visa'],
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600'
    },
    {
      region: 'New Zealand',
      countries: ['Auckland', 'Wellington', 'Christchurch'],
      flag: '🇳🇿',
      description: 'Complete visa services for New Zealand immigration',
      visaTypes: ['Work Visa', 'Student Visa', 'Visit Visa', 'E-Visa'],
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600'
    },
    {
      region: 'United Kingdom',
      countries: ['London', 'Manchester', 'Birmingham', 'Edinburgh'],
      flag: '🇬🇧',
      description: 'Specialized UK visa consultation and processing',
      visaTypes: ['Work Visa', 'Student Visa', 'Visit Visa'],
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600'
    },
    {
      region: 'United States',
      countries: ['New York', 'California', 'Texas', 'Florida'],
      flag: '🇺🇸',
      description: 'Expert guidance for US visa applications',
      visaTypes: ['Work Visa', 'Student Visa', 'Visit Visa'],
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600'
    }
  ];

  const services = [
    {
      icon: Briefcase,
      title: 'Work Visa Processing',
      description: 'Complete assistance with work visa applications for UAE, Qatar, and Saudi Arabia',
      features: ['Document preparation', 'Application submission', 'Follow-up support']
    },
    {
      icon: Globe,
      title: 'Job Placement',
      description: 'Connect with verified employers in the Middle East for various positions',
      features: ['Driver positions', 'Security guards', 'Packing jobs']
    },
    {
      icon: Shield,
      title: 'Document Attestation',
      description: 'Professional document verification and attestation services',
      features: ['Certificate verification', 'Embassy attestation', 'Notary services']
    }
  ];

  const countries = [
    {
      name: 'Dubai (UAE)',
      flag: '🇦🇪',
      jobs: '500+ Jobs',
      salary: 'AED 2,500 - 5,000',
      processing: '15-20 days'
    },
    {
      name: 'Qatar',
      flag: '🇶🇦',
      jobs: '300+ Jobs',
      salary: 'QAR 2,000 - 4,500',
      processing: '20-25 days'
    },
    {
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      jobs: '400+ Jobs',
      salary: 'SAR 2,000 - 4,000',
      processing: '25-30 days'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      country: 'Dubai',
      rating: 5,
      comment: 'TravelAxis helped me secure a driver position in Dubai. Professional service and complete guidance throughout the process.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150',
    },
    {
      name: 'Muhammad Ali',
      country: 'Qatar',
      rating: 5,
      comment: 'Excellent experience! Got my visa on time and everything was very smooth. Thank you TravelAxis!',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150',
    },
    {
      name: 'Imran Khan',
      country: 'Saudi Arabia',
      rating: 5,
      comment: 'I contacted many companies before but TravelAxis really helped me. Now I am working in Saudi Arabia.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150',
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Clients' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Globe, value: '3', label: 'Countries' }
  ];

  const faqs = [
    {
      question: 'How long does the visa process take?',
      answer: 'The processing time varies by country: Dubai (15-20 days), Qatar (20-25 days), and Saudi Arabia (25-30 days). These are approximate timelines and may vary based on embassy processing.'
    },
    {
      question: 'What documents are required?',
      answer: 'Basic requirements include: Valid passport (6+ months validity), Educational certificates, Experience certificates, Medical fitness certificate, Passport-size photos, and Police clearance certificate.'
    },
    {
      question: 'Do you guarantee visa approval?',
      answer: 'While we have a 98% success rate, visa approval is ultimately decided by the embassy and immigration authorities. We ensure your application is complete and properly submitted.'
    },
    {
      question: 'What are the fees involved?',
      answer: 'Fees vary based on the country, job type, and services required. Contact us for a detailed breakdown including government fees, service charges, and medical test costs.'
    },
    {
      question: 'Can I track my application status?',
      answer: 'Yes! We provide regular updates throughout the process via WhatsApp and phone calls. You can also contact us anytime for status updates.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-amber-500" />
              <h1 className="text-2xl font-bold">
                Travel<span className="text-amber-500">Axis</span>
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">
                Services
              </a>
              <a href={ROUTES.workPermit} className="text-slate-300 hover:text-amber-400 transition-colors">
                Work Permit
              </a>
              <a href={ROUTES.workVisa} className="text-slate-300 hover:text-amber-400 transition-colors">
                Work Visa
              </a>
              <Button
                onClick={() => openWhatsApp()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </nav>
            <div className="flex md:hidden gap-3">
              <a href={ROUTES.workVisa}>
                <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white">
                  اردو
                </Button>
              </a>
              <Button
                size="sm"
                onClick={() => openWhatsApp()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500">
                <span className="text-amber-400 font-semibold">🌟 10,000+ Successful Visa Applications</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Gateway to <span className="text-amber-500">Global</span> Opportunities
              </h1>
              <p className="text-xl text-slate-300 mb-4">
                Expert visa consultancy services for work, study, and visit visas worldwide.
              </p>
              <p className="text-lg text-amber-400 mb-8 font-semibold">
                98% success rate • 10+ years of experience • 24/7 support
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => openWhatsApp('Hello, I would like to apply for a work visa')}
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                <a href="#services">
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Card className="border-amber-500 shadow-2xl">
                <CardContent className="p-6">
                  <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600"
                    alt="Dubai skyline"
                    className="rounded-lg w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Visa Consultancy Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional visa services for Work, Study, Visit, and E-Visa across the globe
            </p>
          </div>

          {/* Visa Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {visaServices.map((visa, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${visa.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <visa.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{visa.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{visa.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Available for:</p>
                    <div className="flex flex-wrap gap-2">
                      {visa.countries.map((country, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() => openWhatsApp(`Hello, I would like to inquire about ${visa.title} services`)}
                    className={`w-full mt-6 bg-gradient-to-r ${visa.color} hover:opacity-90 text-white`}
                    size="sm"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Countries/Regions */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Countries We Serve</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert visa processing for top destinations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyCountries.map((region, index) => (
              <Card key={index} className="overflow-hidden border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative h-48">
                  <img
                    src={region.image}
                    alt={region.region}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-4xl mb-2">{region.flag}</div>
                    <h4 className="text-2xl font-bold text-white">{region.region}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{region.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Visa Types:</p>
                    <div className="flex flex-wrap gap-2">
                      {region.visaTypes.map((type, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-xs font-medium">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Popular Cities:</p>
                    <p className="text-sm text-slate-600">{region.countries.join(' • ')}</p>
                  </div>

                  <Button
                    onClick={() => openWhatsApp(`Hello, I would like to know more about visa services for ${region.region}`)}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Why Choose TravelAxis?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">98% Success Rate</h4>
                        <p className="text-slate-300 text-sm">Proven track record of successful visa applications</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Expert Consultation</h4>
                        <p className="text-slate-300 text-sm">Professional guidance from experienced visa consultants</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">End-to-End Support</h4>
                        <p className="text-slate-300 text-sm">Complete assistance from application to visa approval</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Fast Processing</h4>
                        <p className="text-slate-300 text-sm">Quick turnaround times for all visa categories</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
                    alt="Visa consultation"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive visa and job placement services to help you achieve your career goals in the Middle East
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => openWhatsApp(`Hello, I would like to know more about ${service.title}`)}
                    className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Simple 4-step process to get your work visa
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Contact Us', desc: 'Reach out via WhatsApp or phone call', icon: MessageCircle },
              { step: '2', title: 'Document Submission', desc: 'Submit required documents and information', icon: Target },
              { step: '3', title: 'Processing', desc: 'We handle all paperwork and follow-ups', icon: Clock },
              { step: '4', title: 'Visa Approved', desc: 'Receive your visa and travel', icon: CheckCircle }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real success stories from satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                      <p className="text-slate-600 text-sm flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Find answers to common questions about our services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                    <ArrowRight className={`h-5 w-5 text-amber-500 transition-transform ${openFaqIndex === index ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaqIndex === index && (
                    <p className="mt-4 text-slate-700 leading-relaxed">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white mb-8">
            Contact us today and take the first step towards your dream job in the Middle East
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => openWhatsApp('Hello, I would like to start my visa application')}
              size="lg"
              className="bg-white text-amber-600 hover:bg-slate-50"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <a href={`tel:${whatsappNumber}`}>
              <Button size="lg" className="bg-slate-900 text-white border-2 border-white hover:bg-white hover:text-slate-900">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4">
                Travel<span className="text-amber-500">Axis</span>
              </h3>
              <p className="text-slate-400 mb-6">
                Your trusted partner for global visa consultancy services. With over 10 years of experience 
                and a 98% success rate, we help you achieve your career and travel goals worldwide.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => openWhatsApp()}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href={ROUTES.workVisa} className="text-slate-400 hover:text-amber-400 transition-colors">
                    Work Visa (Urdu)
                  </a>
                </li>
                <li>
                  <a href={ROUTES.privacyPolicy} className="text-slate-400 hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href={ROUTES.termsConditions} className="text-slate-400 hover:text-amber-400 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href={ROUTES.disclaimer} className="text-slate-400 hover:text-amber-400 transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <span>+1 970 914 5523</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <div>
                    <p>info@travelaxis.com</p>
                    <p>support@travelaxis.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2026 TravelAxis. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
                Professional visa services for Dubai, Qatar, and Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp CTA - eye-catching */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I would like to inquire about visa services')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-cta-glow fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-5 py-4 text-white shadow-2xl ring-4 ring-green-300/40 transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700 hover:shadow-green-500/50 hover:ring-green-400/60 focus:outline-none focus:ring-4 focus:ring-green-400/60"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden font-bold sm:inline">Chat on WhatsApp</span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-7 w-7" />
        </span>
      </a>
    </div>
  );
}