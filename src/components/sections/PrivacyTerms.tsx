
import { motion } from 'framer-motion';
import { Shield, FileText } from 'lucide-react';

export function PrivacyTerms() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">
              Privacy & <span className="text-[#eab308]">Terms</span>
            </h1>
            <p className="text-slate-600 font-medium md:text-lg">
              Important legal information regarding your use of Masters Chess Academy
            </p>
          </div>

          <div className="space-y-16">
            {/* Privacy Policy Section */}
            <section className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#eab308]/10 text-[#eab308] rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight italic">
                  Privacy Policy
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base font-sans">
                <p>
                  <strong>Personal information</strong> about you is subject to our Privacy Policy. Your personal information belongs to you. We collect this type of information when you provide it, but we do NOT rent or sell information concerning our customers to third parties for ANY reason.
                </p>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">List of prohibited items/services</h4>
                  <p>No other services can be marketed on Masters Chess Academy except defined services by Masters Chess Academy.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">No Resale of Service</h4>
                  <p>You agree not to resell Masters Chess Academy services to anybody else. You agree not to reproduce, duplicate, copy, sell, resell, or exploit for any commercial purposes, any portion of the service, use of the Service, or access to the Service.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Modification to Service</h4>
                  <p>Masters Chess Academy reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof). This will take place with notice and adequate time given to you, so that you may retain the information assets created by you on Masters Chess Academy. Beyond the time given, you agree that Masters Chess Academy shall not be liable to you or any third party.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Discounts and Coupons</h4>
                  <p>Masters Chess Academy reserves the right to offer discounts/promotional offers to any Masters Chess Academy customer of its own choice and shall not be held liable to any customer for not offering the same. The discounts/offers have been made available at the sole discretion of Masters Chess Academy and are subject to change/amendment/modification from time to time. Masters Chess Academy at its sole discretion, may at any time discontinue the discounts/offers without assigning any reasons or without any prior intimation whatsoever. The participation in discounts/offers is entirely voluntary and it is understood, that the participation by the customer shall be deemed to have been made voluntarily. All disputes are subject to the exclusive jurisdiction of the competent courts/tribunals of Pudukkottai.</p>
                </div>
              </div>
            </section>

            {/* Terms & Conditions Section */}
            <section className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#eab308]/10 text-[#eab308] rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight italic">
                  Terms & Conditions
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base font-sans">
                <p className="italic font-medium border-l-4 border-[#eab308] pl-4">
                  Please read the following terms and conditions very carefully as your use of the service is subject to your acceptance of and compliance with the following terms and conditions (“Terms”).
                </p>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Description of Service</h4>
                  <p>Masters Chess Academy provides curated extracurricular activities for kids. We are a hyper-local solution for parents to discover and engage in multiple age-appropriate activities that enable skill-building at the right age.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">User Account, Password, and Security</h4>
                  <p>You will receive a login and password upon completing the registration process for an activity, subscription, or sign-up. You are responsible for maintaining the confidentiality of the password and account and are fully responsible for all activities that occur under your password or account.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Limited User</h4>
                  <p>The User agrees and undertakes not to reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Website. Limited reproduction and copying of the content of the Website is permitted provided that Masters Chess Academy’s name is stated as the source and prior written permission of Masters Chess Academy is sought. For the removal of doubt, it is clarified that unlimited or wholesale reproduction, copying of the content for commercial or non-commercial purposes, and unwarranted modification of data and information within the content of the Website is not permitted.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wide text-xs">User Conduct and Rules</h4>
                  <p className="mb-2">You agree and undertake that when using a Service, you will not:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others;</li>
                    <li>Publish, post, upload, distribute, or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful topic, name, material, or information;</li>
                    <li>Conduct or forward surveys, contests, pyramid schemes, or chain letters;</li>
                    <li>Falsify or delete any author attributions, legal or other proper notices proprietary designations, or labels of the origin or source of software or other material contained in a file that is uploaded;</li>
                    <li>Any information provided by you on this site shall not be misleading in any way.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">User Warranty and Representation</h4>
                  <p>The user guarantees, warrants, and certifies that you are the owner of the content that you submit or otherwise authorized to use the content and that the content does not infringe upon the property rights, intellectual property rights, or other rights of others.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Abuse of Service</h4>
                  <p>You understand that all information (such as data files, written text, audio files, images, or any other media) that you may have access to as part of, or through your use of Masters Chess Academy is the sole responsibility of the person from which such content originated. Masters Chess Academy takes no responsibility for abusive content, and it is the responsibility of the users to regulate such content. Masters Chess Academy reserves the right to suspend its service to users involved in service abuse. Masters Chess Academy takes no responsibility for any data generated within Masters Chess Academy and published or distributed outside by the user.</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
