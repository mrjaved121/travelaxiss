import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Globe, 
  CheckCircle, 
  MessageCircle, 
  Phone,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
  Home,
  Briefcase,
  FileCheck,
  Plane,
  Shield,
  TrendingUp,
  MapPin,
  ArrowRight,
  Star,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function EuropeWorkPermitPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const whatsappNumber = '+19709145523';
  
  const openWhatsApp = (message: string = 'Hello, I would like to inquire about Europe Work Permit services') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const countries = [
    {
      name: 'France',
      flag: '🇫🇷',
      salary: '€1,500 - €2,500',
      jobs: 'Agriculture, Hospitality, Construction',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600'
    },
    {
      name: 'Netherlands',
      flag: '🇳🇱',
      salary: '€1,600 - €2,800',
      jobs: 'Food Processing, Logistics, Farming',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600'
    },
    {
      name: 'Italy',
      flag: '🇮🇹',
      salary: '€1,400 - €2,300',
      jobs: 'Tourism, Agriculture, Manufacturing',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600'
    },
    {
      name: 'Poland',
      flag: '🇵🇱',
      salary: '€1,300 - €2,000',
      jobs: 'Factory, Warehouse, Construction',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600'
    },
    {
      name: 'Spain',
      flag: '🇪🇸',
      salary: '€1,400 - €2,400',
      jobs: 'Hospitality, Agriculture, Retail',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Starting from €1,500 per month with regular increments',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Home,
      title: 'Free Accommodation',
      description: 'Company-provided housing included in your package',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Medical Coverage',
      description: 'Complete health insurance covered by employer',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Renewable Permit',
      description: '1-year work permit with easy renewal options',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const requirements = [
    {
      icon: GraduationCap,
      title: 'Education',
      value: 'Matriculation or Intermediate',
      description: 'Minimum 10th grade pass required'
    },
    {
      icon: Users,
      title: 'Age',
      value: '18 to 55 Years',
      description: 'Open to all age groups within range'
    },
    {
      icon: FileCheck,
      title: 'Documents',
      value: 'CV & Certificates',
      description: 'Educational and experience documents'
    },
    {
      icon: Globe,
      title: 'Experience',
      value: 'Job-Based',
      description: 'Relevant work experience preferred'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Contact Us',
      description: 'Reach out via WhatsApp or phone to discuss your profile and requirements',
      icon: MessageCircle
    },
    {
      step: '2',
      title: 'Document Submission',
      description: 'Submit your CV, educational certificates, and other required documents',
      icon: FileCheck
    },
    {
      step: '3',
      title: 'Initial Payment',
      description: 'Pay 30% advance (PKR 9 Lakh) to start the visa processing',
      icon: DollarSign
    },
    {
      step: '4',
      title: 'Job Matching',
      description: 'We match you with suitable employers in your chosen European country',
      icon: Briefcase
    },
    {
      step: '5',
      title: 'Visa Processing',
      description: 'Complete work permit application processing (4-5 months)',
      icon: Clock
    },
    {
      step: '6',
      title: 'Visa Approval',
      description: 'Receive your work visa and pay remaining 70% (PKR 21 Lakh)',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Ali Raza',
      country: 'France',
      flag: '🇫🇷',
      rating: 5,
      comment: 'TravelAxis helped me get my work permit for France. The entire process was smooth and transparent. Now I am working in a good company with proper salary.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Hassan Ahmed',
      country: 'Netherlands',
      flag: '🇳🇱',
      rating: 5,
      comment: 'I was worried about the payment, but their 30% advance and 70% after visa policy made it safe. Highly recommend TravelAxis for Europe work permits.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150'
    },
    {
      name: 'Faisal Khan',
      country: 'Poland',
      flag: '🇵🇱',
      rating: 5,
      comment: 'Professional service! They guided me through every step. Got my work visa in 5 months and now working in Warsaw. Thank you TravelAxis!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to get a Europe work permit?',
      answer: 'The complete process takes approximately 4-5 months from document submission to visa approval. This includes job matching, employer verification, and visa processing through the embassy.'
    },
    {
      question: 'What is the payment structure?',
      answer: 'Total cost is PKR 30 Lakh (30,00,000). You pay 30% advance (PKR 9 Lakh) when starting the process, and the remaining 70% (PKR 21 Lakh) after receiving your work visa. This protects you with a solid guarantee.'
    },
    {
      question: 'What is included in the package?',
      answer: 'The package includes: work permit processing, job placement, employer verification, accommodation arrangement, medical insurance setup, and complete documentation support. Note: visa fees and flight tickets are borne by the client.'
    },
    {
      question: 'Can I apply if I currently work in Gulf countries?',
      answer: 'Yes! If you have legal status in Gulf countries (UAE, Qatar, Saudi Arabia, etc.), you can still apply for Europe work permits. Your current work experience will be an advantage.'
    },
    {
      question: 'Which countries are available?',
      answer: 'We process work permits for 5 European countries: France, Netherlands (Holland), Italy, Poland, and Spain. Each country has different job opportunities and salary ranges.'
    },
    {
      question: 'Is the work permit renewable?',
      answer: 'Yes! The work permit is valid for 1 year and is renewable. After working for 1 year, you can extend your permit based on your employer sponsorship and continued employment.'
    },
    {
      question: 'What type of jobs are available?',
      answer: 'Jobs are available in various sectors including: Agriculture, Hospitality, Construction, Food Processing, Manufacturing, Logistics, Warehouse, and Retail. Jobs are matched based on your CV and experience.'
    },
    {
      question: 'What is the minimum education required?',
      answer: 'You need minimum Matriculation (10th grade) or Intermediate (12th grade) pass certificate. Higher education is preferred but not mandatory for most positions.'
    }
  ];

  const pricingBreakdown = [
    { item: 'Total Package Cost', amount: 'PKR 30,00,000', highlight: true },
    { item: 'Initial Advance Payment (30%)', amount: 'PKR 9,00,000', type: 'advance' },
    { item: 'After Work Visa Approval (70%)', amount: 'PKR 21,00,000', type: 'final' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-amber-500" />
              <h1 className="text-2xl font-bold">
                Travel<span className="text-amber-500">Axis</span>
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">
                Services
              </a>
              <Link to="/work-visa" className="text-slate-300 hover:text-amber-400 transition-colors">
                Work Visa
              </Link>
              <Button
                onClick={() => openWhatsApp()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </nav>
            <div className="flex md:hidden gap-3">
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
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-3 bg-amber-500/20 rounded-full border border-amber-500">
              <span className="text-amber-400 font-semibold text-lg">🇪🇺 Europe Work Permit - Limited Spots Available!</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Work in <span className="text-amber-500">Europe</span> with Legal Work Permit
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-4 max-w-4xl mx-auto">
              Secure your future in 5 European countries with guaranteed job placement, accommodation, and medical coverage
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Starting Salary: €1,500/month</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Processing: 4-5 Months</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>30% Advance Only</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => openWhatsApp('Hello, I want to apply for Europe Work Permit')}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Apply Now on WhatsApp
              </Button>
              <Button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8"
              >
                View Pricing
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Country Flags */}
          <div className="flex justify-center gap-8 text-6xl">
            <span>🇫🇷</span>
            <span>🇳🇱</span>
            <span>🇮🇹</span>
            <span>🇵🇱</span>
            <span>🇪🇸</span>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">5</div>
              <div className="text-slate-600">European Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">4-5</div>
              <div className="text-slate-600">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">30%</div>
              <div className="text-slate-600">Advance Only</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-slate-600">Legal & Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What You Get</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete package with salary, accommodation, medical, and legal work permit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA 1 - After Benefits */}
      <section className="py-12 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-green-100">
                Contact us now on WhatsApp for instant response
              </p>
            </div>
            <Button
              onClick={() => openWhatsApp('Hello, I want to apply for Europe Work Permit. Please guide me about the process.')}
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 shadow-xl"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Available Countries</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from 5 European countries based on your skills and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="overflow-hidden border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative h-48 bg-gradient-to-br from-slate-400 to-slate-600">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-5xl mb-2">{country.flag}</div>
                    <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-slate-700">Monthly Salary</p>
                        <p className="text-lg font-bold text-slate-900">{country.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-slate-700">Available Jobs</p>
                        <p className="text-slate-900">{country.jobs}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => openWhatsApp(`Hello, I want to apply for work permit in ${country.name}`)}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  >
                    Apply for {country.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA 2 - After Countries */}
      <section className="py-16 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-bold text-lg">💬 Have Questions?</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Talk to Our Visa Expert Now
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Get personalized guidance about country selection, job opportunities, and complete process details
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Quick Response</h4>
                <p className="text-sm text-slate-600">We reply within minutes on WhatsApp</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Free Consultation</h4>
                <p className="text-sm text-slate-600">No charges for initial guidance</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <Shield className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Expert Advice</h4>
                <p className="text-sm text-slate-600">10+ years of visa experience</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openWhatsApp('Hello, I want to discuss Europe Work Permit opportunities. Which country would you recommend for me?')}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Start Chat on WhatsApp
              </Button>
              <a href={`tel:${whatsappNumber}`}>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-10 py-6 w-full sm:w-auto">
                  <Phone className="mr-2 h-6 w-6" />
                  Call: {whatsappNumber}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Basic Requirements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple and clear eligibility criteria - Check if you qualify
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {requirements.map((req, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <req.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{req.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{req.value}</p>
                  <p className="text-sm text-slate-600">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Requirements */}
          <Card className="border-amber-500 border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="h-8 w-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Important Documents Needed</h3>
                  <p className="text-slate-600">Make sure you have these documents ready before applying</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Valid Passport (minimum 6 months validity)',
                  'Educational Certificates (Matric/Intermediate)',
                  'Updated CV with work experience',
                  'Passport-size photographs',
                  'Police clearance certificate',
                  'Medical fitness certificate',
                  'Bank statements (if available)',
                  'Previous employment letters (if any)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Clear payment structure with advance payment and balance after visa approval
            </p>
          </div>

          <Card className="border-slate-200 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-amber-500 text-white rounded-full font-bold text-lg mb-4">
                  Complete Europe Work Permit Package
                </div>
                <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
                  PKR 30,00,000
                </div>
                <p className="text-xl text-slate-600">Total Package Cost (Thirty Lakh Rupees)</p>
              </div>

              <div className="space-y-4 mb-8">
                {pricingBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-lg ${
                      item.highlight
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                        : item.type === 'advance'
                        ? 'bg-blue-50 border-2 border-blue-500'
                        : 'bg-green-50 border-2 border-green-500'
                    }`}
                  >
                    <span className={`font-semibold ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {item.item}
                    </span>
                    <span className={`text-xl font-bold ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-amber-500" />
                  Payment Protection Guarantee
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Pay only 30% (PKR 9 Lakh) to start the process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Remaining 70% (PKR 21 Lakh) only after work visa approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Solid guarantee - Your money is safe with us</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>No hidden charges or surprise fees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Package Includes:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Work permit processing',
                    'Job placement assistance',
                    'Employer verification',
                    'Document preparation',
                    'Visa application filing',
                    'Embassy coordination',
                    'Accommodation arrangement',
                    'Medical insurance setup',
                    'Pre-departure guidance',
                    'Post-arrival support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-500 p-4 rounded-lg mb-8">
                <p className="text-sm text-slate-700">
                  <strong>Note:</strong> Visa fees and flight tickets are borne by the client separately. 
                  These costs vary by country and will be communicated during the application process.
                </p>
              </div>

              <Button
                onClick={() => openWhatsApp('Hello, I want to apply for Europe Work Permit. Please provide more details about the payment process.')}
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg py-6"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Start Your Application Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Step-by-Step Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple 6-step journey from application to work visa approval
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow relative">
                <CardContent className="p-8">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="mt-8">
                    <step.icon className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-blue-500 border-2 inline-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Clock className="h-12 w-12 text-blue-600" />
                  <div className="text-left">
                    <p className="text-sm text-slate-600">Total Processing Time</p>
                    <p className="text-3xl font-bold text-slate-900">4-5 Months</p>
                    <p className="text-sm text-slate-600">From document submission to visa approval</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Notice for Gulf Workers */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-3 bg-amber-500 rounded-full font-bold text-lg mb-6">
            🌟 Special Opportunity for Gulf Workers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Already Working in Gulf Countries?
          </h2>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            If you have legal work status in UAE, Qatar, Saudi Arabia, Kuwait, Bahrain, or Oman, 
            you can still apply for Europe work permits! Your Gulf work experience will give you an advantage 
            in the application process.
          </p>
          <Button
            onClick={() => openWhatsApp('Hello, I am currently working in Gulf countries and interested in Europe work permit.')}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Apply as Gulf Worker
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real clients who are now working in Europe with our help
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
                      <p className="text-slate-600 text-sm flex items-center gap-2">
                        <span className="text-2xl">{testimonial.flag}</span>
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about Europe work permits
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex justify-between items-start text-left gap-4"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 flex-1">{faq.question}</h3>
                    <ArrowRight
                      className={`h-6 w-6 text-amber-500 flex-shrink-0 transition-transform ${
                        openFaqIndex === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <p className="mt-4 text-slate-700 leading-relaxed pl-0">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work in Europe?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Don't miss this opportunity! Limited spots available for Europe work permits. 
            Contact us today and start your journey to a better future.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => openWhatsApp('Hello, I want to apply for Europe Work Permit immediately!')}
              size="lg"
              className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Apply on WhatsApp
            </Button>
            <a href={`tel:${whatsappNumber}`}>
              <Button size="lg" className="bg-slate-900 text-white border-2 border-white hover:bg-slate-800 text-lg px-8">
                <Phone className="mr-2 h-6 w-6" />
                Call Us Now
              </Button>
            </a>
          </div>
          <p className="text-white text-lg">
            📞 WhatsApp: {whatsappNumber}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Travel<span className="text-amber-500">Axis</span>
              </h3>
              <p className="text-slate-400 mb-4">
                Your trusted partner for Europe work permits and global visa services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/work-visa" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Work Visa
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  +1 970 914 5523
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  WhatsApp Available
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2026 TravelAxis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp CTA - eye-catching */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I want to know more about Europe Work Permit')}`}
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