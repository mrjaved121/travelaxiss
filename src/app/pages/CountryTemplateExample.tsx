/**
 * COUNTRY WORK PERMIT TEMPLATE PAGE
 * 
 * HOW TO USE THIS TEMPLATE:
 * 1. Copy this entire file
 * 2. Rename to: [CountryName]WorkPermitPage.tsx (e.g., FranceWorkPermitPage.tsx)
 * 3. Find and replace the placeholders marked with [COUNTRY_*]
 * 4. Update the route in App.tsx
 * 5. Add link to navigation menu
 * 
 * PLACEHOLDERS TO REPLACE:
 * - [COUNTRY_NAME] = Full country name (e.g., "France")
 * - [COUNTRY_FLAG] = Flag emoji (e.g., "🇫🇷")
 * - [COUNTRY_SALARY_MIN] = Minimum salary (e.g., "€1,500")
 * - [COUNTRY_SALARY_MAX] = Maximum salary (e.g., "€2,500")
 * - [COUNTRY_CURRENCY] = Currency symbol (e.g., "€")
 * - [COUNTRY_PROCESSING_TIME] = Processing time (e.g., "4-5 months")
 * - [COUNTRY_TOTAL_COST] = Total package cost (e.g., "PKR 55,00,000")
 * - [COUNTRY_ADVANCE_AMOUNT] = 30% advance (e.g., "PKR 16,50,000")
 * - [COUNTRY_FINAL_AMOUNT] = 70% final (e.g., "PKR 38,50,000")
 * - [COUNTRY_IMAGE_URL] = Hero background image URL
 */

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
  Shield,
  ArrowRight,
  Star,
  Calendar,
  AlertCircle,
  MapPin,
  Plane
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CountryWorkPermitPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const whatsappNumber = '+19709145523';
  
  // CUSTOMIZE: Update country-specific details here
  const countryData = {
    name: '[COUNTRY_NAME]', // e.g., "France"
    flag: '[COUNTRY_FLAG]', // e.g., "🇫🇷"
    salaryMin: '[COUNTRY_SALARY_MIN]', // e.g., "€1,500"
    salaryMax: '[COUNTRY_SALARY_MAX]', // e.g., "€2,500"
    currency: '[COUNTRY_CURRENCY]', // e.g., "€"
    processingTime: '[COUNTRY_PROCESSING_TIME]', // e.g., "4-5 months"
    totalCost: '[COUNTRY_TOTAL_COST]', // e.g., "PKR 55,00,000"
    advanceAmount: '[COUNTRY_ADVANCE_AMOUNT]', // e.g., "PKR 16,50,000"
    finalAmount: '[COUNTRY_FINAL_AMOUNT]', // e.g., "PKR 38,50,000"
    heroImage: '[COUNTRY_IMAGE_URL]', // Unsplash image URL
  };
  
  const openWhatsApp = (message: string = `Hello, I would like to inquire about ${countryData.name} Work Permit`) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  // CUSTOMIZE: Update benefits specific to the country
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: `Starting from ${countryData.salaryMin} per month with annual increments`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Home,
      title: 'Free Accommodation',
      description: 'Company-provided housing or housing allowance included',
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
      description: '1-year work permit with easy renewal process',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  // CUSTOMIZE: Update job sectors and types
  const jobSectors = [
    {
      icon: Briefcase,
      title: 'Agriculture & Farming',
      description: 'Fruit picking, crop harvesting, farm assistance',
      salary: `${countryData.salaryMin} - ${countryData.salaryMax}`
    },
    {
      icon: Home,
      title: 'Hospitality & Tourism',
      description: 'Hotels, restaurants, cafes, resorts',
      salary: `${countryData.salaryMin} - ${countryData.salaryMax}`
    },
    {
      icon: Briefcase,
      title: 'Construction & Labor',
      description: 'Building construction, renovation, general labor',
      salary: `${countryData.salaryMin} - ${countryData.salaryMax}`
    },
    {
      icon: Briefcase,
      title: 'Manufacturing & Factory',
      description: 'Food processing, production lines, packaging',
      salary: `${countryData.salaryMin} - ${countryData.salaryMax}`
    }
  ];

  // CUSTOMIZE: Update requirements if different
  const requirements = [
    {
      icon: GraduationCap,
      title: 'Education',
      value: 'Matriculation or Higher',
      description: 'Minimum 10th grade pass certificate'
    },
    {
      icon: Users,
      title: 'Age',
      value: '18 to 55 Years',
      description: 'Open to all eligible age groups'
    },
    {
      icon: FileCheck,
      title: 'Documents',
      value: 'CV & Certificates',
      description: 'Educational and experience proof'
    },
    {
      icon: Globe,
      title: 'Experience',
      value: 'Preferred',
      description: 'Relevant work experience is plus'
    }
  ];

  // CUSTOMIZE: Update process steps if different
  const processSteps = [
    {
      step: '1',
      title: 'Free Consultation',
      description: `Contact us via WhatsApp to discuss your profile and ${countryData.name} opportunities`,
      icon: MessageCircle
    },
    {
      step: '2',
      title: 'Document Verification',
      description: 'Submit your CV, certificates, passport, and required documents',
      icon: FileCheck
    },
    {
      step: '3',
      title: 'Initial Payment',
      description: `Pay 30% advance (${countryData.advanceAmount}) to begin processing`,
      icon: DollarSign
    },
    {
      step: '4',
      title: 'Job Matching',
      description: `We match you with verified employers in ${countryData.name}`,
      icon: Briefcase
    },
    {
      step: '5',
      title: 'Visa Processing',
      description: `Complete work permit processing (${countryData.processingTime})`,
      icon: Clock
    },
    {
      step: '6',
      title: 'Visa Approval & Travel',
      description: `Receive visa, pay remaining ${countryData.finalAmount}, and fly to ${countryData.name}`,
      icon: Plane
    }
  ];

  // CUSTOMIZE: Add real testimonials
  const testimonials = [
    {
      name: 'Muhammad Ali',
      job: 'Construction Worker',
      rating: 5,
      comment: `TravelAxis helped me get my work permit for ${countryData.name}. The process was transparent and now I am earning good salary with proper accommodation.`,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Hassan Ahmed',
      job: 'Factory Worker',
      rating: 5,
      comment: `I was worried about the payment structure, but their 30% advance policy made it safe. Highly recommend TravelAxis for genuine work permits.`,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150'
    },
    {
      name: 'Faisal Khan',
      job: 'Hospitality Staff',
      rating: 5,
      comment: `Professional service from start to finish! Got my visa on time and the job they provided was exactly as promised. Thank you TravelAxis!`,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    }
  ];

  // CUSTOMIZE: Update FAQs for country-specific questions
  const faqs = [
    {
      question: `How long does it take to get a ${countryData.name} work permit?`,
      answer: `The complete process takes approximately ${countryData.processingTime} from document submission to visa approval. This includes job matching, employer verification, document attestation, and visa processing through the ${countryData.name} embassy.`
    },
    {
      question: 'What is the payment structure?',
      answer: `Total cost is ${countryData.totalCost}. You pay 30% advance (${countryData.advanceAmount}) when starting the process, and the remaining 70% (${countryData.finalAmount}) after receiving your work visa. This protects you with our solid guarantee.`
    },
    {
      question: 'What is included in the package?',
      answer: 'The package includes: work permit processing, job placement with verified employer, employer letter, document attestation, accommodation arrangement, medical insurance coordination, visa application filing, embassy coordination, and pre-departure guidance. Note: visa fees and flight tickets are borne by the client separately.'
    },
    {
      question: `What type of jobs are available in ${countryData.name}?`,
      answer: `Jobs are available in multiple sectors including Agriculture, Hospitality, Construction, Manufacturing, Food Processing, Warehouse, Logistics, and General Labor. We match jobs based on your CV, experience, and qualifications.`
    },
    {
      question: `What is the salary range in ${countryData.name}?`,
      answer: `Salaries typically range from ${countryData.salaryMin} to ${countryData.salaryMax} per month depending on your job sector, experience, and qualifications. Most employers also provide accommodation or housing allowance, medical insurance, and other benefits.`
    },
    {
      question: 'Is the work permit renewable?',
      answer: `Yes! The work permit is valid for 1 year and is renewable. After working for the first year, you can extend your permit based on your employer's sponsorship and continued employment. Many workers successfully renew for multiple years.`
    },
    {
      question: 'What documents do I need?',
      answer: 'Required documents include: Valid passport (minimum 6 months validity), educational certificates (Matric/Intermediate), updated CV, passport photographs, police clearance certificate, medical fitness certificate, and any previous employment letters if available.'
    },
    {
      question: 'Can I bring my family later?',
      answer: `After establishing yourself and meeting the requirements, you may be eligible to apply for family visa for your spouse and children. Requirements vary based on your salary, accommodation, and employment status in ${countryData.name}.`
    }
  ];

  const pricingBreakdown = [
    { item: 'Total Package Cost', amount: countryData.totalCost, highlight: true },
    { item: 'Initial Advance Payment (30%)', amount: countryData.advanceAmount, type: 'advance' },
    { item: 'After Work Visa Approval (70%)', amount: countryData.finalAmount, type: 'final' },
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
              <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors">
                Home
              </Link>
              <Link to="/europe-work-permit" className="text-slate-300 hover:text-amber-400 transition-colors">
                Europe Work Permit
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-3 bg-amber-500/20 rounded-full border border-amber-500">
              <span className="text-amber-400 font-semibold text-lg">
                {countryData.flag} {countryData.name} Work Permit - Limited Slots Available!
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Work in <span className="text-amber-500">{countryData.name}</span> with Legal Work Permit
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-4 max-w-4xl mx-auto">
              Secure your future with guaranteed job placement, accommodation, and medical coverage
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Salary: {countryData.salaryMin} - {countryData.salaryMax}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Processing: {countryData.processingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>30% Advance Only</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => openWhatsApp(`Hello, I want to apply for ${countryData.name} Work Permit`)}
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

          {/* Country Flag */}
          <div className="flex justify-center text-8xl">
            <span>{countryData.flag}</span>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">{countryData.processingTime}</div>
              <div className="text-slate-600">Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">30%</div>
              <div className="text-slate-600">Advance Payment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-slate-600">Legal & Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">10+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Complete Package Benefits</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need for a successful work experience in {countryData.name}
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

      {/* WhatsApp CTA 1 */}
      <section className="py-12 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-green-100">
                Contact us now for free consultation and guidance
              </p>
            </div>
            <Button
              onClick={() => openWhatsApp(`Hello, I want to apply for ${countryData.name} Work Permit. Please guide me.`)}
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 shadow-xl"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Job Sectors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Available Job Sectors</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple job opportunities across various industries in {countryData.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobSectors.map((sector, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <sector.icon className="h-12 w-12 text-amber-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{sector.title}</h3>
                  <p className="text-slate-600 mb-4">{sector.description}</p>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="font-bold text-green-700">{sector.salary}/month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => openWhatsApp(`Hello, I want to know more about job opportunities in ${countryData.name}`)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discuss Job Options
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA 2 */}
      <section className="py-16 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-bold text-lg">💬 Need Expert Guidance?</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Talk to Our {countryData.name} Visa Specialist
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Get personalized advice about job matching, document requirements, and visa process
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Quick Response</h4>
                <p className="text-sm text-slate-600">Reply within minutes</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Free Consultation</h4>
                <p className="text-sm text-slate-600">No charges for guidance</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <Shield className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Verified Service</h4>
                <p className="text-sm text-slate-600">100% legal process</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openWhatsApp(`Hello, I need detailed information about ${countryData.name} work permit process`)}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Start WhatsApp Chat
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Eligibility Requirements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple and clear criteria to apply for {countryData.name} work permit
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

          <Card className="border-amber-500 border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="h-8 w-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Required Documents Checklist</h3>
                  <p className="text-slate-600">Prepare these documents before starting your application</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Valid Passport (6+ months validity)',
                  'Educational Certificates (Matric/Inter)',
                  'Updated CV with experience details',
                  'Passport-size color photographs',
                  'Police clearance certificate',
                  'Medical fitness certificate',
                  'Bank statements (if available)',
                  'Employment letters (previous jobs)'
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
              Clear payment structure - Pay advance, get visa, then pay balance
            </p>
          </div>

          <Card className="border-slate-200 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-amber-500 text-white rounded-full font-bold text-lg mb-4">
                  Complete {countryData.name} Work Permit Package
                </div>
                <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
                  {countryData.totalCost}
                </div>
                <p className="text-xl text-slate-600">All-Inclusive Package</p>
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
                  Payment Security Guarantee
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Pay only 30% to start the process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Remaining 70% only after visa approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Your money is protected with guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>No hidden fees or surprise charges</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Work permit processing',
                    'Job placement with employer',
                    'Employer verification',
                    'Document preparation & attestation',
                    'Visa application filing',
                    'Embassy liaison',
                    'Accommodation assistance',
                    'Medical insurance coordination',
                    'Pre-departure briefing',
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
                  <strong>Note:</strong> Embassy visa fees and flight tickets are client's responsibility. 
                  Costs vary and will be communicated during application.
                </p>
              </div>

              <Button
                onClick={() => openWhatsApp(`Hello, I want to apply for ${countryData.name} Work Permit. Please provide payment details.`)}
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg py-6"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Start Application Process
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple 6-Step Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From consultation to flying to {countryData.name} - we guide you every step
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
                    <p className="text-sm text-slate-600">Total Timeline</p>
                    <p className="text-3xl font-bold text-slate-900">{countryData.processingTime}</p>
                    <p className="text-sm text-slate-600">Application to visa approval</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real people now working in {countryData.name} through TravelAxis
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
                      <p className="text-slate-600 text-sm">{testimonial.job}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about {countryData.name} work permits
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
            Ready to Work in {countryData.name}?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Limited slots available! Contact us today and take the first step toward your new career in {countryData.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => openWhatsApp(`Hello, I want to apply for ${countryData.name} Work Permit now!`)}
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
                Your trusted partner for {countryData.name} work permits and global visa services.
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
                  <Link to="/europe-work-permit" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Europe Work Permit
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
                  WhatsApp Available 24/7
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
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I want to know more about ${countryData.name} Work Permit`)}`}
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
