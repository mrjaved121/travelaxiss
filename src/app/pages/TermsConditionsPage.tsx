import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, XCircle, Shield } from 'lucide-react';
import { ROUTES } from '../config';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href={ROUTES.home} className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </a>
          <div className="flex items-center gap-4 mb-4">
            <Scale className="w-12 h-12 text-amber-500" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Terms & Conditions
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
            {/* Introduction */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Introduction
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                By using TravelAxis services, you agree to these Terms and Conditions. Please read carefully. Your use of our services confirms that you have read and agree to these terms.
              </p>
            </div>

            {/* Services */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Services Provided
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  TravelAxis provides the following services:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Assistance with work visa processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Document preparation and verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Guidance on job opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Visa application submission assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Complete support throughout the process</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Client Responsibilities
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  When using our services, you must fulfill the following responsibilities:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Provide accurate and truthful information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Submit all required documents on time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Pay service fees on time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Complete medical tests and other requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Cooperate with our team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Inform us immediately of any changes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Payment Terms
                </h2>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Service fees will be predetermined and agreed upon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Some fees must be paid upfront</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Remaining amount will be paid in stages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Government fees are separate and additional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Keep payment receipts for your records</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Refund Policy
                </h2>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>If visa is rejected due to our error, service fees will be refunded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>No refund for rejection due to incorrect information provided by client</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Government fees are non-refundable under any circumstances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>No refund after work has commenced</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Refund requests will be processed within 7 days</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 font-semibold">
                    Note: Medical tests and other third-party expenses are non-refundable.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Important Notice
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0">⚠</span>
                      <span>We do not guarantee 100% visa approval</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0">⚠</span>
                      <span>Visa decisions depend on embassy and government authorities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0">⚠</span>
                      <span>Processing times may vary</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0">⚠</span>
                      <span>Employment terms may change by the company</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 flex-shrink-0">⚠</span>
                      <span>We only provide visa processing assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Cancellation Policy
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  If you wish to cancel your application:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>90% fee refund for cancellation within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>50% fee refund for cancellation within 7 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>No refund after file submission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Written cancellation request is required</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Liability */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Limitation of Liability
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  TravelAxis is not responsible for:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Embassy decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Issues arising from incorrect information provided</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Medical report issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Changes in employment by the company</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Travel or accommodation-related issues</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Confidentiality */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Confidentiality
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                All your information will be kept secure and confidential. We will use your personal information only for visa processing purposes. For more details, please see our Privacy Policy.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Changes to Terms
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                TravelAxis reserves the right to modify these Terms and Conditions at any time. All changes will be updated on this page and the "Last Updated" date will be changed accordingly.
              </p>
            </div>

            {/* Agreement */}
            <div className="pt-8 border-t border-slate-200">
              <div className="p-6 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Agreement Confirmation
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  By using our services, you confirm that you have read, understood, and fully agree to these Terms and Conditions.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Questions?
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
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
          <a href={ROUTES.home}>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Homepage
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
