import { Button } from "@/components/ui/button";
import '../hero.css';

const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen overflow-hidden font-lato py-20"
      style={{
        background: "linear-gradient(180deg, rgba(3, 4, 8, 1) 0%, rgba(23, 28, 61, 1) 33%, rgba(51, 26, 56, 1) 70%, rgba(3, 4, 8, 1) 93%, rgba(3, 4, 8, 1) 100%)",
        fontFamily: "'Lato', sans-serif"
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute top-[50%] right-[10%] w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-center text-4xl md:text-5xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 mb-4 pb-2">
              Privacy Policy
            </h1>
          </div>
          
          {/* Content */}
          <div className="prose prose-invert max-w-none text-gray-300 space-y-12">
            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                1. Introduction
              </h2>
              <p className="mb-4">
                This Privacy Policy ("Policy") is issued by PHYDIGI LIMITED, a company duly incorporated under the laws of the United Kingdom with company number 14340557, operating under the brand name MuseCoinX ("we," "our," "us"). It governs the collection, processing, use, disclosure, and safeguarding of personal data provided by users ("you," "your," or "User") of the MuseCoinX platform ("Platform"), which is accessible through the website located at www.musecoinx.com, mobile applications, decentralized applications (dApps), application programming interfaces (APIs), and other services (collectively, the "Services").
              </p>
              <p className="mb-4">
                By accessing, using, or otherwise interacting with the Platform, you acknowledge and expressly consent to the collection, use, storage, and sharing of your personal data in accordance with the terms and conditions set forth in this Policy. Should you disagree with any provision of this Policy, you are required to refrain from using the Platform immediately.
              </p>
            </div>

            {/* 2. Definitions */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                2. Definitions
              </h2>
              <ul className="space-y-4">
                <li>
                  <strong>Personal Data:</strong> Any information that relates to an identified or identifiable natural person, whether directly or indirectly, including but not limited to, identification data, contact details, transactional history, or any other data that can be used to identify a specific individual in accordance with applicable data protection laws.
                </li>
                <li>
                  <strong>Account Information:</strong> The personal details provided by users when creating an account on the Platform, including but not limited to: Name, Email address, Date of birth, User ID, and Wallet address.
                </li>
                <li>
                  <strong>Transaction Information:</strong> Data relating to the transactions made by users on the Platform, including but not limited to: Details of Song Tokens (NFTs) purchased, sold, or otherwise transacted, Royalty distribution amounts and history, and Other financial interactions related to services offered by Musecoinx.
                </li>
                <li>
                  <strong>Wallet Information:</strong> Public wallet addresses provided by users to facilitate the purchase, transfer, or storage of Song Tokens (NFTs), and any associated blockchain transactions.
                </li>
                <li>
                  <strong>KYC Information:</strong> Know Your Customer (KYC) data, which includes identity verification details collected from users to comply with legal, regulatory, and financial obligations.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information automatically collected regarding your interaction with the Platform, including: IP address, Device information, Operating system, Browser type and version, Activity logs.
                </li>
              </ul>
            </div>

            {/* 3. Information We Collect */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                3. Information We Collect
              </h2>
              <p className="mb-4">
                MuseCoinX collects and processes personal data from users through a variety of means:
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.1 Account Information</h3>
              <p className="mb-4">
                When users create an account on the Platform, we collect personal details that may include, but are not limited to: Name, Email address, Date of birth, User ID, and Wallet address. This information is necessary for creating and maintaining a user profile, providing access to Platform services, ensuring compliance with regulatory requirements, and enabling transactions within the Platform.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.2 Transaction Information</h3>
              <p className="mb-4">
                We collect data related to the transactions users make within the Platform, including: Details of Song Tokens (NFTs), including purchases, sales, transfers, and exchanges; Royalty distribution amounts and history; Payment transaction history. This data is essential for processing user transactions, managing royalty distributions, maintaining financial transparency, and ensuring the integrity of financial records.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.3 Wallet Information</h3>
              <p className="mb-4">
                In order to facilitate NFT transactions and royalty payouts, we collect the public wallet address (public key) of users. This address allows us to securely process payments, ensure proper distribution of royalties, and interact with the blockchain.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.4 KYC and Identity Verification Information</h3>
              <p className="mb-4">
                In compliance with legal and regulatory obligations, we may collect identity verification details (KYC data), which include, but are not limited to: Government-issued identification; Proof of address; Additional personal information, as required by applicable financial laws.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.5 Usage Data</h3>
              <p className="mb-4">
                We automatically collect data related to your interaction with the Platform. This includes, but is not limited to: IP address; Device information; Operating system and browser type; Activity logs. This information is used for the purposes of maintaining the security of the Platform, improving the functionality, and tailoring the user experience based on user activity and preferences.
              </p>
            </div>

            {/* 4. Use of Personal Data */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                4. Use of Personal Data
              </h2>
              <p className="mb-4">
                MuseCoinX processes and utilizes personal data for various legitimate purposes, in accordance with applicable data protection laws:
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.1 Service Provision</h3>
              <p className="mb-4">
                We process personal data to: Create and maintain user accounts; Process transactions; Manage royalty distribution; Provide the features and functionality of the Platform.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.2 Compliance</h3>
              <p className="mb-4">
                In compliance with applicable legal obligations, we process personal data for the purpose of adhering to regulatory requirements, including but not limited to: Anti-money laundering (AML) regulations; Know Your Customer (KYC) requirements; Tax and financial reporting.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.3 Communication</h3>
              <p className="mb-4">
                We process personal data for the purpose of communicating with you regarding your account, transactions, and any updates related to the Platform. Such communication includes: Transactional communications; User support communications; Promotional communications (if opted in).
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.4 Platform Improvement</h3>
              <p className="mb-4">
                We utilize personal data for analyzing user activity and improving the Platform by: Enhancing user experience; Monitoring performance; Personalization of services.
              </p>
            </div>

            {/* 5. Data Sharing and Third-Party Service Providers */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                5. Data Sharing and Third-Party Service Providers
              </h2>
              <p className="mb-4">
                MuseCoinX may share personal data with third-party service providers or partners under the following conditions:
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">5.1 Third-Party Service Providers</h3>
              <p className="mb-4">
                We may disclose personal data to third-party vendors and service providers who perform services on our behalf, including but not limited to: Wallet providers; Payment processors; Blockchain platforms. These third-party service providers are contractually obligated to adhere to strict confidentiality agreements.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">5.2 Legal Compliance</h3>
              <p className="mb-4">
                We may disclose personal data to third parties as required by law or legal process, including but not limited to: Compliance with legal requests; Court orders or legal proceedings; Investigations into illegal activities.
              </p>
            </div>

            {/* 6. Data Security */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                6. Data Security
              </h2>
              <p className="mb-4">
                MuseCoinX is committed to safeguarding your personal data and employs industry-standard technical, physical, and organizational security measures to protect it from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Encryption of all personal data during transmission and storage</li>
                <li>Strict access controls within the Platform</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Firewalls, intrusion detection systems, and other technical safeguards</li>
              </ul>
              <p className="mb-4">
                Despite these security measures, MuseCoinX acknowledges that no data transmission or storage system is completely infallible. While we take reasonable steps to protect your personal data, we cannot guarantee absolute security.
              </p>
            </div>

            {/* 7. Data Retention */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                7. Data Retention
              </h2>
              <p className="mb-4">
                MuseCoinX will retain personal data for no longer than is necessary to fulfill the purposes outlined in this Privacy Policy, to comply with our legal obligations, or to resolve disputes. The retention period for personal data will be determined by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Purpose of Data Collection</li>
                <li>Legal and Regulatory Obligations</li>
                <li>Resolution of Disputes</li>
              </ul>
              <p className="mb-4">
                Data retention periods may vary depending on the nature of the data and our legal obligations. For example:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Transaction Data: Typically retained for 5 years for tax and regulatory purposes</li>
                <li>KYC and AML Data: Retained for at least 5 years after the end of the customer relationship</li>
              </ul>
            </div>

            {/* 8. User Rights */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                8. User Rights
              </h2>
              <p className="mb-4">
                In accordance with Applicable Data Protection Laws, users are granted the following rights:
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">8.1 Right to Access</h3>
              <p className="mb-4">
                You have the right to obtain confirmation from MuseCoinX as to whether or not personal data concerning you is being processed and to access that data.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">8.2 Right to Rectification</h3>
              <p className="mb-4">
                You have the right to request the correction of inaccurate or incomplete personal data.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">8.3 Right to Deletion</h3>
              <p className="mb-4">
                Under certain circumstances, you may request the deletion of your personal data.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">8.4 Right to Restrict Processing</h3>
              <p className="mb-4">
                You have the right to request that MuseCoinX restrict the processing of your personal data in certain circumstances.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">8.5 Right to Object</h3>
              <p className="mb-4">
                You have the right to object to the processing of your personal data based on legitimate interests.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">8.6 Right to Data Portability</h3>
              <p className="mb-4">
                You have the right to receive your personal data in a structured, commonly used format.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">8.7 Right to Withdraw Consent</h3>
              <p className="mb-4">
                If processing is based on consent, you have the right to withdraw that consent at any time.
              </p>
            </div>

            {/* 9. Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                9. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                To enhance the user experience, MuseCoinX utilizes cookies and similar tracking technologies. These technologies are used to collect non-personally identifiable information about how users interact with the Platform.
              </p>
              <p className="mb-4">
                The cookies we use may collect data such as: IP address; Device information; Browser type and version; Pages visited and actions taken on the Platform.
              </p>
              <p className="mb-4">
                You can manage your cookie preferences by adjusting the settings in your browser. However, please note that disabling cookies may affect the functionality of certain features on the Platform.
              </p>
            </div>

            {/* 10. Children's Privacy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                10. Children's Privacy
              </h2>
              <p className="mb-4">
                MuseCoinX is committed to protecting the privacy and safety of children using the Platform. We do not knowingly collect, store, or process personal data from children under the age of 13.
              </p>
              <p className="mb-4">
                If we learn that we have inadvertently collected personal data from a child under the age of 13, we will take immediate action to delete such data from our systems. Our services are intended for use by individuals who are at least 13 years of age.
              </p>
            </div>

            {/* 11. International Data Transfers */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                11. International Data Transfers
              </h2>
              <p className="mb-4">
                MuseCoinX operates on a global scale, and as such, personal data collected from users may be transferred to, and processed in, jurisdictions outside of your country of residence.
              </p>
              <p className="mb-4">
                We ensure that any transfers of personal data are conducted in compliance with the General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and other relevant data protection laws, including through: Standard Contractual Clauses (SCCs); Adequacy Decisions; Binding Corporate Rules (BCRs).
              </p>
            </div>

            {/* 12. Dispute Resolution */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                12. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">12.1 Arbitration</h3>
              <p className="mb-4">
                In the event of any dispute arising out of or relating to this Privacy Policy, the parties agree that such Disputes will be resolved exclusively through binding arbitration conducted in accordance with the Arbitration Act 1996 (UK).
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">12.2 Governing Law</h3>
              <p className="mb-4">
                This Privacy Policy shall be governed by and construed in accordance with the laws of the United Kingdom without regard to its conflicts of law principles.
              </p>
            </div>

            {/* 13. Updates to the Privacy Policy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                13. Updates to the Privacy Policy
              </h2>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">13.1 Right to Modify</h3>
              <p className="mb-4">
                MuseCoinX reserves the right to amend, update, or modify this Privacy Policy at any time, with or without notice. Any changes will be posted on the Platform and will be effective immediately upon posting.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">13.2 Continued Use</h3>
              <p className="mb-4">
                By continuing to access or use the Platform after modifications to this Privacy Policy, you acknowledge and accept the revised terms.
              </p>
            </div>

            {/* 14. Contact Us */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                14. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy:
              </p>
              <ul className="space-y-2 mb-6">
                <li><strong>Company:</strong> PHYDIGI LIMITED</li>
                <li><strong>Registered Office:</strong> 128 City Road, London, EC1V 2NX, United Kingdom</li>
                <li><strong>Email:</strong> contact@musecoinx.com</li>
                <li><strong>Website:</strong> www.musecoinx.com</li>
              </ul>
            </div>

            {/* Back button */}
            <div className="mt-12 text-center">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-8 py-6 text-lg font-bold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                onClick={() => window.history.back()}
              >
                ← Back to Site
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;