import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </a>
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12 text-amber-500" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Privacy Policy
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
                At TravelAxis, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information. By using our services, you agree to this policy.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  We collect the following types of information:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span><strong>Personal Information:</strong> Name, phone number, email address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span><strong>Documents:</strong> Passport, ID cards, educational certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span><strong>Professional Information:</strong> Work experience, skills, salary expectations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span><strong>Contact Details:</strong> WhatsApp, phone, email communication history</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Usage */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  We use your information for the following purposes:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Process visa applications and complete required documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Contact you with updates and important information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Prepare and verify required documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Notify you about job opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Comply with legal and regulatory requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Security */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Information Security
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  We implement the following security measures to protect your personal information:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Secure and encrypted data storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Access restricted to authorized personnel only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Regular security audits and assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Secure communication channels</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Information Sharing
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  We only share your information in the following situations:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>With embassies and government authorities (for visa processing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>With potential employers for job placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>When required by law</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>With your written consent</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 font-semibold">
                    Important: We never sell your personal information to third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your Rights
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Access your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Request deletion of your information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    <span>Opt-out of marketing communications</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Cookies
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Our website uses cookies to enhance your experience. Cookies are small files stored in your browser that help us remember your preferences. You can disable cookies in your browser settings.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Data Retention
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                We retain your information until:
              </p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 flex-shrink-0">•</span>
                  <span>Visa processing is complete</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 flex-shrink-0">•</span>
                  <span>Legal requirements are fulfilled</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 flex-shrink-0">•</span>
                  <span>You request deletion of your data</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Contact Us
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
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

            {/* Updates */}
            <div className="pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Policy Updates
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Please check this page regularly for updates.
              </p>
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
