import React, { useState } from "react";
import { X, Award, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { GoogleSheetsService } from "@/services/googleSheets";

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  portfolioLink: string;
  specialization: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  portfolioLink?: string;
  specialization?: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const ApplicationForm: React.FC<ApplicationFormProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    portfolioLink: '',
    specialization: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>('idle');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // URL validation regex
  const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.fieldRequired;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t.fieldRequired;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }



    // Portfolio Link validation
    if (!formData.portfolioLink.trim()) {
      newErrors.portfolioLink = t.fieldRequired;
    } else if (!urlRegex.test(formData.portfolioLink)) {
      newErrors.portfolioLink = t.invalidUrl;
    }

    // Specialization validation
    if (!formData.specialization) {
      newErrors.specialization = t.fieldRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState('submitting');

    try {
      // Submit to Google Sheets
      const success = await GoogleSheetsService.submitApplication({
        fullName: formData.fullName,
        email: formData.email,
        portfolioLink: formData.portfolioLink,
        specialization: formData.specialization,
      });

      if (success) {
        console.log('Application submitted successfully to Google Sheets');
        setFormState('success');
      } else {
        throw new Error('Failed to submit to Google Sheets');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      portfolioLink: '',
      specialization: ''
    });
    setErrors({});
    setFormState('idle');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const specializations = [
    { value: 'interior-design', label: t.interiorDesign },
    { value: 'architecture', label: t.architecture },
    { value: 'other', label: t.other }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto transform animate-in slide-in-from-bottom-4 duration-500 ease-out">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-all duration-200"
            aria-label={t.close}
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-3 text-white">
            <div className="bg-white/15 p-2.5 rounded-xl backdrop-blur-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">{t.applicationForm}</h2>
              <p className="text-purple-100 text-sm">{t.quickApplication}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {formState === 'success' ? (
            // Success State
            <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-in zoom-in duration-500 delay-200">
                  <CheckCircle className="w-10 h-10 text-green-600 animate-in zoom-in duration-300 delay-500" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-green-200 rounded-full mx-auto animate-ping opacity-20"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-in slide-in-from-bottom-2 duration-500 delay-300">
                {t.applicationSubmitted}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-in slide-in-from-bottom-2 duration-500 delay-400">
                {t.applicationSuccess}
              </p>
              <button
                onClick={handleClose}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom-2 duration-500 delay-500"
              >
                {t.close}
              </button>
            </div>
          ) : formState === 'error' ? (
            // Error State
            <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-in zoom-in duration-500 delay-200">
                  <AlertCircle className="w-10 h-10 text-red-600 animate-in zoom-in duration-300 delay-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-in slide-in-from-bottom-2 duration-500 delay-300">
                {t.applicationError}
              </h3>
              <div className="flex gap-3 justify-center animate-in slide-in-from-bottom-2 duration-500 delay-400">
                <button
                  onClick={() => setFormState('idle')}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {t.tryAgain}
                </button>
                <button
                  onClick={handleClose}
                  className="border border-gray-300 text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  {t.cancel}
                </button>
              </div>
            </div>
          ) : (
            // Form State
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{t.quickFormDescription}</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="group">
                  <label htmlFor="fullName" className="block text-xs font-medium text-gray-700 mb-2">
                    {t.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder={t.fullNamePlaceholder}
                    className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200 text-sm ${
                      errors.fullName ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                    }`}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-red-500 text-xs mt-1 animate-in slide-in-from-top-1 duration-200">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-2">
                    {t.emailAddress} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200 text-sm ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                    }`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1 animate-in slide-in-from-top-1 duration-200">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Portfolio Link */}
                <div className="group">
                  <label htmlFor="portfolioLink" className="block text-xs font-medium text-gray-700 mb-2">
                    {t.portfolioLink} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={(e) => handleInputChange('portfolioLink', e.target.value)}
                    placeholder={t.portfolioPlaceholder}
                    className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200 text-sm ${
                      errors.portfolioLink ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:bg-white'
                    }`}
                    aria-describedby={errors.portfolioLink ? 'portfolioLink-error' : undefined}
                  />
                  {errors.portfolioLink && (
                    <p id="portfolioLink-error" className="text-red-500 text-xs mt-1 animate-in slide-in-from-top-1 duration-200">
                      {errors.portfolioLink}
                    </p>
                  )}
                </div>

                {/* Specialization */}
                <div className="group">
                  <label htmlFor="specialization" className="block text-xs font-medium text-gray-700 mb-2">
                    {t.specialization} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="specialization"
                    value={formData.specialization}
                    onChange={(e) => handleInputChange('specialization', e.target.value)}
                    className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200 text-sm bg-white ${
                      errors.specialization ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                    }`}
                    aria-describedby={errors.specialization ? 'specialization-error' : undefined}
                  >
                    <option value="" className="text-gray-400">{t.selectSpecialization}</option>
                    {specializations.map((spec) => (
                      <option key={spec.value} value={spec.value} className="text-gray-900">
                        {spec.label}
                      </option>
                    ))}
                  </select>
                  {errors.specialization && (
                    <p id="specialization-error" className="text-red-500 text-xs mt-1 animate-in slide-in-from-top-1 duration-200">
                      {errors.specialization}
                    </p>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t.submitting}
                      </>
                    ) : (
                      <>
                        <Award className="w-4 h-4 mr-2" />
                        {t.submitApplication}
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="border border-gray-300 text-gray-700 font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm"
                  >
                    {t.cancel}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
