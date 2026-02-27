import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, AlertTriangle, FileX, CreditCard, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-12 h-12 text-amber-500" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Disclaimer
            </h1>
          </div>
          <p className="text-slate-300 text-lg">
            Last Updated: February 25, 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border-slate-200 shadow-xl mb-8">
          <CardContent className="pt-8 space-y-8">
            {/* Important Notice */}
            <div className="p-6 bg-red-50 rounded-xl border-2 border-red-300">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-red-900 mb-3">
                    Important Notice
                  </h2>
                  <p className="text-red-800 leading-relaxed">
                    Please read this disclaimer carefully before using our services. By using our services, you confirm that you have read and agree to this disclaimer.
                  </p>
                </div>
              </div>
            </div>

            {/* Visa Approval */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <FileX className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Visa Approval
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-orange-50 rounded-lg border border-orange-200">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0 text-xl">⚠</span>
                      <span className="leading-relaxed">TravelAxis does not guarantee 100% visa approval</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0 text-xl">⚠</span>
                      <span className="leading-relaxed">Visa approval is entirely at the discretion of the embassy and government authorities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0 text-xl">⚠</span>
                      <span className="leading-relaxed">We only assist in preparing and submitting applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0 text-xl">⚠</span>
                      <span className="leading-relaxed">We are not responsible in case of visa rejection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Accuracy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Information Accuracy
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Information provided on our website:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Is for general information purposes only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Salaries and terms may change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Final details must be confirmed with company and embassy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Employment terms may vary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>We may update information without prior notice</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Processing Time */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Processing Time
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Visa processing time:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Is an estimate, not guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>May be affected by embassy and public holidays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>May be delayed if additional documents are required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>We are not responsible for delays</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Employment Terms */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileX className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Employment Terms
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Employment details:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Final salary will be according to company and country laws</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Accommodation and food quality may vary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Workplace and duty changes are possible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Overtime depends on company requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Employment contract will be between company and worker</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Financial Liability */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Financial Liability
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TravelAxis is not responsible for:
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 flex-shrink-0">✗</span>
                      <span>Losses incurred due to visa rejection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 flex-shrink-0">✗</span>
                      <span>Ticket, accommodation, or other personal expenses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 flex-shrink-0">✗</span>
                      <span>Employment cancellation by the company</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 flex-shrink-0">✗</span>
                      <span>Medical test failures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 flex-shrink-0">✗</span>
                      <span>Any direct or indirect damages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Party Services */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Third-Party Services
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Medical tests, tickets, document attestation, etc., are third-party services. TravelAxis is not responsible for any issues or problems with these services. These services are the direct responsibility of those companies.
                </p>
              </div>
            </div>

            {/* Medical Requirements */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Medical Requirements
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed mb-3">
                  You must ensure that:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>You are fit for all medical tests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Inform us of any pre-existing conditions or illnesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>We are not responsible for medical test failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Medical fees are non-refundable</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Advice */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <FileX className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Not Legal Advice
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  The information and services on our website do not constitute legal, financial, or professional advice. Please consult with appropriate professionals before making any decisions.
                </p>
              </div>
            </div>

            {/* Changes Without Notice */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Changes Without Notice
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  TravelAxis reserves the right to, without prior notice:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Modify website information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Change service fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Discontinue or limit any service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Modify this disclaimer</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Final Agreement */}
            <div className="pt-8 border-t-2 border-slate-200">
              <div className="p-6 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl border-2 border-slate-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Final Confirmation
                </h3>
                <p className="text-slate-800 leading-relaxed mb-3">
                  By using our services, you agree that:
                </p>
                <ul className="space-y-2 text-slate-800">
                  <li>✓ You have read this disclaimer completely</li>
                  <li>✓ You are aware of all terms and limitations</li>
                  <li>✓ You are using our services voluntarily</li>
                  <li>✓ You are aware of all risks involved</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileX className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  More Information
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                If you have any questions about this disclaimer, please contact us:
              </p>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="space-y-3">
                  <p className="text-slate-800">
                    <span className="font-semibold">Company:</span> TravelAxis
                  </p>
                  <p className="text-slate-800">
                    <span className="font-semibold">WhatsApp:</span> +1 970 914 5523
                  </p>
                  <p className="text-slate-800">
                    <span className="font-semibold">Email:</span> info@travelaxis.com
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
