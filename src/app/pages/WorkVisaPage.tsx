import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Truck, 
  Shield, 
  Package, 
  Phone, 
  CheckCircle, 
  Clock,
  FileText,
  Plane,
  MessageCircle,
  Home,
  Utensils,
  Star,
  Users,
  Award,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WorkVisaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const whatsappNumber = '+19709145523'; // Replace with actual WhatsApp number
  const whatsappMessage = 'السلام علیکم، مجھے ضرورت برائے کے بارے میں معلومات چاہیے';

  const openWhatsApp = (jobType?: string) => {
    const message = jobType 
      ? `السلام علیکم، مجھے ${jobType} کے لیے ضرورت برائے کے بارے میں معلومات چاہیے`
      : whatsappMessage;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const testimonials = [
    {
      name: 'محمد احمد',
      location: 'لاہور',
      job: 'ڈرائیور',
      country: 'دبئی',
      rating: 5,
      comment: 'الحمدللہ میں نے TravelAxis کی مدد سے دبئی میں ڈرائیور کی نوکری حاصل کی۔ بہت اچھی سروس اور مکمل رہنمائی ملی۔',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150',
    },
    {
      name: 'علی حسن',
      location: 'کراچی',
      job: 'سیکیورٹی گارڈ',
      country: 'قطر',
      rating: 5,
      comment: 'بہترین تجربہ رہا۔ وقت پر ویزا مل گیا اور سب کچھ بہت آسان تھا۔ شکریہ TravelAxis',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150',
    },
    {
      name: 'عمران خان',
      location: 'فیصل آباد',
      job: 'پیکنگ اسٹاف',
      country: 'سعودی عرب',
      rating: 5,
      comment: 'میں نے پہلے بہت سی کمپنیوں سے رابطہ کیا لیکن TravelAxis نے واقعی مدد کی۔ اب میں سعودی عرب میں کام کر رہا ہوں۔',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150',
    },
    {
      name: 'فرحان ملک',
      location: 'ملتان',
      job: 'ڈرائیور',
      country: 'دبئی',
      rating: 5,
      comment: 'ماشاءاللہ بہت اچھا تجربہ۔ پوری ٹیم بہت مددگار تھی اور ہر قدم پر رہنمائی کرتے رہے۔',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150',
    },
  ];

  const faqs = [
    {
      question: 'ویزا پروسیسنگ میں کتنا وقت لگتا ہے؟',
      answer: 'عام طور پر 3 سے 8 ہفتے لگتے ہیں۔ یہ ملک اور ویزا کی قسم پر منحصر ہے۔ دبئی کے لیے 3-4 ہفتے، قطر کے لیے 4-6 ہفتے اور سعودی عرب کے لیے 4-8 ہفتے۔',
    },
    {
      question: 'کیا میڈیکل ٹیسٹ ضروری ہے؟',
      answer: 'جی ہاں، تمام ممالک کے لیے میڈیکل ٹیسٹ لازمی ہے۔ آپ کو منظور شدہ ہسپتال سے میڈیکل سرٹیفکیٹ کروانا ہوگا۔',
    },
    {
      question: 'کیا ٹکٹ اور رہائش کمپنی فراہم کرتی ہے؟',
      answer: 'جی ہاں، رہائش اور کھانا کمپنی کی طرف سے فراہم کیا جاتا ہے۔ ٹکٹ کے بارے میں مزید معلومات کے لیے ہم سے رابطہ کریں۔',
    },
    {
      question: 'تنخواہ کب ملتی ہے؟',
      answer: 'تنخواہ ہر ماہ بینک اکاؤنٹ میں جمع ہوتی ہے۔ پہلی تنخواہ عام طور پر کام شروع کرنے کے ایک ماہ بعد ملتی ہے۔',
    },
    {
      question: 'کیا فیملی ویزا مل سکتا ہے؟',
      answer: 'جی ہاں، کچھ عرصے بعد آپ فیملی ویزا کے لیے اپلائی کر سکتے ہیں۔ اس کی تفصیلات آپ کی تنخواہ اور عہدے پر منحصر ہیں۔',
    },
    {
      question: 'اگر ویزا ریجیکٹ ہو جائے تو کیا ہوگا؟',
      answer: 'ہماری ٹیم پوری کوشش کرتی ہے کہ تمام کاغذات درست ہوں۔ اگر کسی وجہ سے ویزا ریجیکٹ ہوتا ہے تو ہم دوبارہ اپلائی کرنے میں مدد کرتے ہیں۔',
    },
  ];

  const countries = [
    {
      name: 'دبئی',
      nameEng: 'Dubai (UAE)',
      image: 'https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE3NDY3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      salary: '1500 - 3000 درہم',
      duration: '2 سال',
      processing: '3-4 ہفتے',
    },
    {
      name: 'قطر',
      nameEng: 'Qatar',
      image: 'https://images.unsplash.com/photo-1582402675273-3577392edb5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxRYXRhciUyMERvaGElMjBtb2Rlcm4lMjBjaXR5fGVufDF8fHx8MTc3MTg2NTk2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      salary: '1200 - 2500 ریال',
      duration: '2 سال',
      processing: '4-6 ہفتے',
    },
    {
      name: 'سعودی عرب',
      nameEng: 'Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1738410775861-55d497f6fec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXVkaSUyMEFyYWJpYSUyMFJpeWFkaCUyMGNpdHl8ZW58MXx8fHwxNzcxODY5MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      salary: '1500 - 3500 ریال',
      duration: '2 سال',
      processing: '4-8 ہفتے',
    },
  ];

  const jobs = [
    {
      title: 'ڈرائیور',
      titleEng: 'Driver Jobs',
      salary: '3200 ریال',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1768554058655-ffc14e476826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE4MzYxODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'کمپنی کے لیے ڈرائیونگ کی ذہ داریاں',
      requirements: [
        'درست ڈرائیونگ لائسنس',
        'مر 25 سے 45 سال',
        'اچھی صحت',
      ],
    },
    {
      title: 'سیکیورٹی گارڈ',
      titleEng: 'Security Jobs',
      salary: '2250 ریال',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1764173038831-3ef384e6321e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTgxNjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'سیکیورٹی اور نگرانی کی ذمہ داریاں',
      requirements: [
        'میٹرک پاس',
        'عمر 21 سے 45 سال',
        'اچھی شخصیت',
      ],
    },
    {
      title: 'پیکنگ اسٹاف',
      titleEng: 'Packing Jobs',
      salary: '2450 ریال',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBwYWNraW5nJTIwd29ya2VyfGVufDF8fHx8MTc3MTg2OTExN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'پیکنگ اور ویئر ہاؤس کی ذمہ داریاں',
      requirements: [
        'محنت کش اور ایماندار',
        'عمر 20 سے 40 سال',
      ],
    },
  ];

  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [activeCountry, setActiveCountry] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Globe className="h-8 w-8 text-amber-500" />
              <h1 className="text-2xl font-bold">
                Travel<span className="text-amber-500">Axis</span>
              </h1>
            </Link>
            <div className="flex gap-3">
              <Link to="/">
                <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white">
                  English
                </Button>
              </Link>
              <Button
                onClick={() => openWhatsApp()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1655722725332-9925c96dd627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNhJTIwcGFzc3BvcnQlMjB0cmF2ZWx8ZW58MXx8fHwxNzcxODY1OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Visa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" dir="rtl">
            ورک ویزا
          </h1>
          <p className="text-2xl md:text-4xl text-amber-400 mb-4" dir="rtl">
            دبئی، قطر اور سعودی عرب
          </p>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto" dir="rtl">
            ڈرائیور، سیکیورٹی گارڈ اور پیکنگ کے کام کے لیے مکمل معلومات
          </p>
          <Button
            size="lg"
            onClick={() => openWhatsApp()}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-8 py-6 shadow-xl shadow-green-500/30"
          >
            <MessageCircle className="ml-2 h-6 w-6" />
            واٹس ایپ پر رابطہ کریں
          </Button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <Users className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-amber-100" dir="rtl">کامیاب ویزا</div>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <Award className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-amber-100" dir="rtl">سال کا تجربہ</div>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <ThumbsUp className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-amber-100" dir="rtl">کامیابی کی شرح</div>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-amber-100" dir="rtl">سپورٹ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" dir="rtl">
              دستیاب عہدے
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto" dir="rtl">
              میل اور فی میل دونوں کے لیے سنہری موقع
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {jobs.map((job, index) => {
              const Icon = job.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-slate-200 !text-slate-900">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={job.image}
                      alt={job.titleEng}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-3xl font-bold text-white text-right" dir="rtl">{job.title}</h3>
                      <p className="text-sm text-slate-300">{job.titleEng}</p>
                    </div>
                  </div>
                  <CardHeader className="text-slate-900">
                    <CardTitle className="flex items-center justify-between text-slate-900 font-bold">
                      <span className="text-right flex-1 text-slate-900" dir="rtl">{job.title}</span>
                      <Icon className="h-8 w-8 text-amber-500 flex-shrink-0" />
                    </CardTitle>
                    <CardDescription className="text-right !text-slate-700" dir="rtl">
                      {job.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 text-right" dir="rtl">ضروری شرائط:</h4>
                      {job.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-2 justify-end" dir="rtl">
                          <span className="text-slate-700 text-right">{req}</span>
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          {job.salary}
                        </Badge>
                        <span className="text-sm text-slate-600" dir="rtl">تنخواہ</span>
                      </div>
                      <Button
                        onClick={() => openWhatsApp(job.title)}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                      >
                        <MessageCircle className="ml-2 h-5 w-5" />
                        ابھی رابطہ کریں
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" dir="rtl">
              ملک کی تفصیلات
            </h2>
            <p className="text-xl text-slate-600" dir="rtl">
              ہر ملک کی ویزا کی مکمل معلومات
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-slate-200">
                <div className="relative h-56">
                  <ImageWithFallback
                    src={country.image}
                    alt={country.nameEng}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-4xl font-bold text-white text-right mb-1" dir="rtl">{country.name}</h3>
                    <p className="text-slate-200 text-sm">{country.nameEng}</p>
                  </div>
                </div>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-semibold text-slate-900">{country.salary}</span>
                      <span className="text-slate-600" dir="rtl">تنخواہ</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-slate-900">{country.duration}</span>
                      </div>
                      <span className="text-slate-600" dir="rtl">مدت</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Plane className="h-5 w-5 text-amber-600" />
                        <span className="font-semibold text-slate-900">{country.processing}</span>
                      </div>
                      <span className="text-slate-600" dir="rtl">پروسیسنگ ٹائم</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => openWhatsApp(country.name)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white mt-4"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    مزید معلومات
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" dir="rtl">
              ہمارے کلائنٹس کی رائے
            </h2>
            <p className="text-xl text-slate-600" dir="rtl">
              دیکھیں کیا کہتے ہیں ہمارے مطمئن کلائنٹس
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                    />
                    <div className="text-right flex-1" dir="rtl">
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-right mb-4" dir="rtl">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <Badge className="bg-green-100 text-green-800">
                      {testimonial.country}
                    </Badge>
                    <span className="text-sm text-slate-600" dir="rtl">{testimonial.job}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12" dir="rtl">
            معاہدے کی تفصیلات
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2" dir="rtl">
                معاہدے کی مدت
              </h3>
              <p className="text-slate-600" dir="rtl">
                2 سال
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2" dir="rtl">
                ڈیوٹی کے اوقات
              </h3>
              <p className="text-slate-600" dir="rtl">
                8 گھنٹے روزانہ + 4 گھنٹے اوور ٹائم
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2" dir="rtl">
                رہائش
              </h3>
              <p className="text-slate-600" dir="rtl">
                کمپنی کی طرف سے فراہم
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2" dir="rtl">
                کھانا
              </h3>
              <p className="text-slate-600" dir="rtl">
                کمپنی کی طرف سے فراہم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" dir="rtl">
              ضروری دستاویزات
            </h2>
            <p className="text-xl text-slate-600" dir="rtl">
              ویزا کے لیے درج ذیل کاغذات ضروری ہیں
            </p>
          </div>

          <Card className="border-slate-200 shadow-xl">
            <CardContent className="pt-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'پاسپورٹ (کم از کم 6 ماہ باقی)',
                  'تازہ پاسپورٹ سائز تصاویر',
                  'تعلیمی سرٹیفکیٹ',
                  'پولیس کریکٹر سرٹیفکیٹ',
                  'میڈیکل سرٹیفکیٹ',
                  'ڈرائیونگ لائسنس (ڈرائیور کے لیے)',
                  'تجربہ کار سرٹیفکیٹ',
                  'شناختی کارڈ',
                ].map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow" dir="rtl">
                    <span className="text-slate-700 text-right flex-1">{doc}</span>
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-3 text-right" dir="rtl">اہم نوٹ:</h4>
                <ul className="space-y-2 text-slate-700" dir="rtl">
                  <li className="text-right">• تمام دستاویزات کی فوٹو کاپی اور اصل ضروری ہیں</li>
                  <li className="text-right">• سرٹیفکیٹس کی تصدیق ضروری ہے</li>
                  <li className="text-right">• میڈیکل ٹیسٹ منظور شدہ ہسپتال سے کروائیں</li>
                  <li className="text-right">• تمام معلومات درست ہونی چاہیے</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" dir="rtl">
              عام پوچھے جانے والے سوالات
            </h2>
            <p className="text-xl text-slate-600" dir="rtl">
              آپ کے سوالات کے جوابات
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 flex-1" dir="rtl">
                    {faq.question}
                  </h3>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-2 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-700 text-right leading-relaxed" dir="rtl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4" dir="rtl">
              مزید سوالات ہیں؟
            </p>
            <Button
              onClick={() => openWhatsApp()}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              واٹس ایپ پر پوچھیں
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" dir="rtl">
            ابھی رابطہ کریں
          </h2>
          <p className="text-xl text-slate-300 mb-8" dir="rtl">
            صرف واٹس ایپ پر رابطہ کریں
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span dir="rtl">واٹس ایپ پر رابطہ کریں</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">
              Travel<span className="text-amber-500">Axis</span>
            </h3>
            <p className="text-slate-400 mb-6" dir="rtl">
              آپ کا بھروسہ مند ویزا پارٹنر
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button
                onClick={() => openWhatsApp()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                WhatsApp
              </Button>
              <a href={`tel:${whatsappNumber}`}>
                <Button className="bg-slate-800 text-white border-2 border-slate-600 hover:bg-slate-700">
                  <Phone className="ml-2 h-5 w-5" />
                  Call Us
                </Button>
              </a>
            </div>
            <div className="mb-6 flex flex-wrap justify-center gap-4">
              <Link to="/privacy-policy" className="text-amber-400 hover:text-amber-300 transition-colors" dir="rtl">
                رازداری کی پالیسی
              </Link>
              <span className="text-slate-600">|</span>
              <Link to="/terms-conditions" className="text-amber-400 hover:text-amber-300 transition-colors" dir="rtl">
                شرائط و ضوابط
              </Link>
              <span className="text-slate-600">|</span>
              <Link to="/disclaimer" className="text-amber-400 hover:text-amber-300 transition-colors" dir="rtl">
                ڈسکلیمر
              </Link>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 TravelAxis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp CTA - eye-catching */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-cta-glow fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-5 py-4 text-white shadow-2xl ring-4 ring-green-300/40 transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700 hover:shadow-green-500/50 hover:ring-green-400/60 focus:outline-none focus:ring-4 focus:ring-green-400/60"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden font-bold sm:inline">واٹس ایپ پر رابطہ کریں</span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-7 w-7" />
        </span>
      </a>
    </div>
  );
}