import { Button } from "@/components/ui/button";
import '../hero.css';

const UserAgreement = () => {
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
                            User Agreement
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-12">
                        {/* Introduction */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                User Agreement
                            </h2>
                            <p className="mb-4">
                                This User Agreement ("Agreement") is made and entered into by and between PHYDIGI LIMITED, a company duly incorporated and registered under the laws of the United Kingdom, with company registration number 14340557, having its registered office located at 128 City Road, London, EC1V 2NX, United Kingdom, operating under the brand name MuseCoinX ("we," "us," "our"), and the User ("you," "your"), who accesses or uses the MuseCoinX Platform ("Platform") as provided by PHYDIGI LIMITED.
                            </p>
                            <p className="mb-4">
                                By accessing, utilizing, or otherwise interacting with the Platform, you, as the User, hereby irrevocably and unconditionally agree to be bound by all of the terms, conditions, and provisions set forth in this Agreement, as well as any policies incorporated herein by reference, and acknowledge that you understand and accept these terms. This Agreement constitutes a binding contract between you and PHYDIGI LIMITED, and it governs your use of the Platform, including but not limited to the rights, obligations, and liabilities associated with the access, use, and participation in the services provided through the Platform.
                            </p>
                            <p className="mb-4">
                                In addition, by agreeing to this Agreement, you acknowledge that the Platform may involve the use of digital assets, including Song Tokens (NFTs) and Muse Coins, as outlined in the terms and policies governing the Platform. These terms are provided in accordance with applicable laws, regulations, and industry standards, including but not limited to the General Data Protection Regulation (GDPR) (EU 2016/679), the California Consumer Privacy Act (CCPA), and any other pertinent legislative frameworks that may apply to your use of the Platform based on your geographical location.
                            </p>
                            <p className="mb-4">
                                If you do not agree to the terms of this Agreement, or if you do not have the legal authority or capacity to enter into this Agreement under the laws of your jurisdiction, you are required to immediately cease using the Platform and its associated services. In this case, you further acknowledge and agree to refrain from accessing or utilizing the Platform in any manner.
                            </p>
                            <p className="mb-4">
                                By using the Platform, you confirm that you have the legal capacity to enter into this Agreement, and you are not subject to any legal restrictions that would prohibit you from doing so under the laws of your jurisdiction. PHYDIGI LIMITED reserves the right to modify, amend, or supplement the terms of this Agreement from time to time, in accordance with the governing laws of the United Kingdom, and such modifications will take effect immediately upon posting on the Platform. You are responsible for reviewing these terms periodically to remain aware of any updates or changes. Continuing to use the Platform after such modifications constitutes your acceptance of the updated terms.
                            </p>
                            <p className="mb-4">
                                This Agreement is legally enforceable and shall be governed by and construed in accordance with the laws of the United Kingdom, and, if applicable, the specific rules and regulations of the Platform, including any additional policies or rules related to the use of specific features of the Platform.
                            </p>
                        </div>

                        {/* 1. INTRODUCTION */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                1. INTRODUCTION
                            </h2>
                            <p className="mb-4">
                                This User Agreement ("Agreement") sets forth the legally binding terms and conditions under which you, the User, may access and use the MuseCoinX Platform ("Platform"), operated by PHYDIGI LIMITED, a company incorporated under the laws of the United Kingdom with company number 14340557. By accessing, utilizing, or otherwise interacting with the Platform, you acknowledge and agree to be bound by all the terms, provisions, and conditions outlined in this Agreement, as well as any other policies or supplementary documents incorporated herein by reference, and consent to the processing of your data as described in our Privacy Policy.
                            </p>
                            <p className="mb-4">
                                This Agreement governs your use of the Platform, including, but not limited to, the creation, acquisition, resale, and transfer of Song Tokens (NFTs), participation in royalty distribution programs, involvement with smart contracts, compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations, and your entitlement to non-financial rewards such as Digital Collectibles.
                            </p>
                            <p className="mb-4">
                                By accessing the Platform, you further acknowledge that you are fully aware of the non-guaranteed nature of the royalties associated with the Song Tokens (NFTs) and the market risks involved in the purchase, holding, or resale of Song Tokens. You also recognize that the digital collectibles provided through the Platform are non-financial rewards and are not representations of financial ownership or equity in the Platform or any underlying assets.
                            </p>
                            <p className="mb-4">
                                This Agreement represents the complete and exclusive understanding between you and MuseCoinX regarding the use of the Platform, superseding any prior agreements or communications related to this matter. It is important that you read and understand these terms, as they form the basis of your rights and obligations in relation to your access to and use of the Platform.
                            </p>
                            <p className="mb-4">
                                If you disagree with any portion of these terms, or if you do not have the legal authority or capacity to agree to this Agreement, you must immediately cease your access to the Platform. This Agreement constitutes a legally binding contract between you and MuseCoinX, and by continuing to use the Platform, you signify your full acceptance of these terms and agree to comply with them.
                            </p>
                        </div>

                        {/* 2. DEFINITIONS */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                2. DEFINITIONS
                            </h2>
                            <p className="mb-4">
                                For the purposes of this User Agreement, the following terms shall have the meanings ascribed to them, unless the context otherwise requires:
                            </p>
                            <ul className="space-y-4">
                                <li>
                                    <strong>"Song Tokens" or "NFTs":</strong> Non-Fungible Tokens (NFTs) representing fractional, transferable ownership of royalties generated from the exploitation of a song on the Platform. These tokens are issued using blockchain technology and are linked to the royalty income derived from the song's performance, distribution, or streaming on digital platforms, including but not limited to Spotify, Apple Music, and YouTube.
                                </li>
                                <li>
                                    <strong>"Platform":</strong> The decentralized, blockchain-based ecosystem operated by MuseCoinX, which includes the website at www.musecoinx.com, mobile applications, decentralized applications (dApps), APIs, smart contracts, and all other services provided by MuseCoinX to facilitate the tokenization of royalties and enable the exchange of Song Tokens. The Platform allows users to purchase, sell, and hold Song Tokens, as well as access other related services such as digital collectibles and non-financial rewards.
                                </li>
                                <li>
                                    <strong>"User":</strong> Any individual, entity, or organization that accesses, uses, or interacts with the Platform, including but not limited to artists, fans, and purchasers of Song Tokens. The User includes any party that creates an account or engages in transactions through the Platform.
                                </li>
                                <li>
                                    <strong>"NFT Resale":</strong> The transfer, sale, or resale of Song Tokens by Users. These transactions may take place either through the Platform or on compatible third-party platforms that support the exchange or trading of NFTs.
                                </li>
                                <li>
                                    <strong>"AML":</strong> Anti-Money Laundering compliance regulations that require MuseCoinX to monitor and report suspicious activities that could indicate money laundering or other financial crimes. This includes verifying the identity of Users as part of compliance with relevant regulatory standards.
                                </li>
                                <li>
                                    <strong>"KYC":</strong> Know Your Customer compliance regulations. Users may be required to verify their identity through the submission of government-issued identification and proof of address, as part of MuseCoinX's regulatory obligations under the AML framework.
                                </li>
                                <li>
                                    <strong>"Digital Collectibles":</strong> Non-financial, digital assets issued as rewards for participation or engagement on the Platform. These assets are not intended to represent ownership in Song Tokens or any financial value and are distributed to incentivize User activity, such as engagement in promotional events, loyalty programs, or other activities facilitated by MuseCoinX.
                                </li>
                                <li>
                                    <strong>"Escrow Services":</strong> The holding of funds or digital assets in escrow by MuseCoinX. Escrow Services are provided to ensure that transactions between Users are carried out under predefined conditions, typically related to smart contracts, which are only executed when agreed-upon conditions are met, such as the successful distribution of royalties or the transfer of ownership of Song Tokens.
                                </li>
                            </ul>
                        </div>

                        {/* 3. PLATFORM SERVICES */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                3. PLATFORM SERVICES
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Song Tokenization:</strong> MuseCoinX enables artists and music labels to tokenize their royalty income by issuing Song Tokens. These tokens represent fractional ownership in the royalties generated from the exploitation of the song on digital platforms, such as streaming or distribution. Song Tokens can be purchased, held, or resold by fans, and their value is proportional to the royalties received from the use of the song. Through tokenization, artists and music labels can offer fans a direct stake in their music and its commercial success.
                                </li>
                                <li>
                                    <strong>Non-Custodial Nature:</strong> MuseCoinX operates as a non-custodial platform, meaning that Users maintain full control over their digital assets and funds. MuseCoinX does not take possession of user funds or Song Tokens at any time. All transactions and interactions involving Song Tokens are facilitated through smart contracts deployed on the blockchain. Users are responsible for securing their digital wallets, private keys, and associated assets. MuseCoinX provides the infrastructure and technology necessary for Users to transact, but the ownership, control, and security of digital assets remain entirely with the Users.
                                </li>
                            </ul>
                        </div>

                        {/* 4. USER OBLIGATIONS */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                4. USER OBLIGATIONS
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Account Information:</strong> By creating an account on the Platform, you agree to provide accurate, complete, and up-to-date information. You are solely responsible for the accuracy of the information provided during registration and for updating any changes to your personal, payment, or contact details. MuseCoinX may rely on this information for the purposes of account creation, transactions, and compliance with regulatory obligations. Failure to provide accurate information may result in the suspension or termination of your account.
                                </li>
                                <li>
                                    <strong>Transactions:</strong> All transactions on the Platform, including the purchase, sale, or transfer of Song Tokens, are final and irreversible. You acknowledge that once a transaction is confirmed, it cannot be undone, and MuseCoinX is not responsible for any errors or issues related to the transaction process. Users assume full responsibility for securing their account, Song Tokens, and digital wallet credentials, including the safeguarding of private keys and other access information. MuseCoinX disclaims any liability for any loss, theft, or unauthorized access to your account or assets.
                                </li>
                                <li>
                                    <strong>Legal Compliance:</strong> You agree to comply with all applicable laws and regulations governing your use of the Platform, including but not limited to those relating to taxation, Anti-Money Laundering (AML), and Know Your Customer (KYC) requirements. Users are responsible for ensuring that their actions on the Platform do not violate any laws or infringe upon the rights of any third party. MuseCoinX reserves the right to take appropriate action, including suspension or termination of services, for users who fail to comply with legal obligations.
                                </li>
                            </ul>
                        </div>

                        {/* 5. TOKEN AGREEMENT */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                5. TOKEN AGREEMENT
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Ownership of Song Tokens:</strong> Holding a Song Token grants the user a proportional share in the royalties generated by the corresponding song. However, the acquisition or holding of Song Tokens does not confer any ownership rights in the underlying song, music, or intellectual property. The Song Token solely represents a claim to a share of the royalties derived from the exploitation of the song through platforms such as streaming, distribution, or public performance.
                                </li>
                                <li>
                                    <strong>No Guarantee of Royalties:</strong> The royalties associated with each Song Token are contingent on the performance of the corresponding song, including factors such as streaming frequency, distribution, and overall market conditions. Users acknowledge that royalties are subject to fluctuations and that no guaranteed returns or fixed income are offered. MuseCoinX does not guarantee a specific amount of royalties, nor does it assume any responsibility for variations in income due to the popularity or success of the song. The amount of royalties generated and distributed is solely based on the song's performance across digital platforms and other market-driven factors.
                                </li>
                            </ul>
                        </div>

                        {/* 6. NFT RESALE TERMS */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                6. NFT RESALE TERMS
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Resale Rights:</strong> Users of the MuseCoinX Platform are permitted to resell Song Tokens (NFTs) they have acquired on the Platform or on third-party platforms that are compatible with the Platform's terms. The resale of Song Tokens is subject to the terms and conditions laid out in this Agreement, as well as applicable laws and regulations in the jurisdiction of the user. Any attempt to resell Song Tokens outside of the authorized channels could result in the revocation of access to the Platform and other legal remedies.
                                </li>
                                <li>
                                    <strong>Market Volatility and Risk:</strong> The value of Song Tokens may fluctuate due to several factors beyond the control of MuseCoinX, including, but not limited to, the performance of the associated song on streaming platforms, general market conditions, interest from fans, and the success of the underlying music in generating royalty income. Users acknowledge that the Song Tokens may not retain or increase in value and understand that the resale of Song Tokens is speculative and inherently risky. There is no guarantee that the Song Tokens will have any market value at the time of resale.
                                </li>
                                <li>
                                    <strong>No Guaranteed Profits:</strong> Users acknowledge that MuseCoinX does not guarantee profits or returns from the resale of Song Tokens. The Platform does not engage in price-setting for resales and makes no representations regarding the potential for profit from holding, reselling, or transferring Song Tokens. The resale value of Song Tokens is determined solely by the market demand and supply, and users accept full responsibility for any financial risks involved in reselling.
                                </li>
                                <li>
                                    <strong>Fees and Charges:</strong> The resale of Song Tokens may incur platform fees, transaction fees, or other applicable charges, which are clearly disclosed on the Platform at the time of the transaction. These fees may vary based on the resale platform, the nature of the transaction, or other factors. MuseCoinX reserves the right to update or modify these fees as necessary, and users agree to comply with any changes.
                                </li>
                                <li>
                                    <strong>Third-Party Platforms:</strong> For transactions conducted outside of the MuseCoinX Platform, users acknowledge that third-party platforms may have their own terms and conditions for listing, purchasing, or reselling Song Tokens. MuseCoinX is not responsible for the functionality, security, or enforcement of terms on third-party platforms. Users are advised to review third-party platform terms carefully before engaging in any transactions.
                                </li>
                                <li>
                                    <strong>Intellectual Property Rights:</strong> Reselling Song Tokens does not grant the user any additional intellectual property rights in the underlying song or associated content. The resale transaction only pertains to the transfer of ownership of the Song Token and the proportional royalty rights linked to it. Ownership of the Song Token does not imply ownership or control over the underlying song, music, or any intellectual property associated with it.
                                </li>
                                <li>
                                    <strong>Fraud and Misrepresentation:</strong> Users agree not to engage in any fraudulent activities related to the resale of Song Tokens, including but not limited to misrepresenting the token's value, making false claims about the song's performance, or inflating the price of tokens. MuseCoinX reserves the right to take action, including but not limited to suspending or terminating accounts found to be engaging in fraudulent activities related to the resale of Song Tokens.
                                </li>
                                <li>
                                    <strong>Regulatory Compliance:</strong> Users who engage in the resale of Song Tokens are responsible for ensuring that their actions comply with all applicable laws, including but not limited to securities regulations, tax laws, and money laundering prevention laws in their jurisdiction. MuseCoinX is not responsible for ensuring that users' resale activities comply with the laws of the jurisdictions in which they reside or where the resale transaction takes place.
                                </li>
                                <li>
                                    <strong>Indemnity and Liability:</strong> Users agree to indemnify and hold harmless MuseCoinX and its affiliates from any claims, damages, liabilities, costs, and expenses (including legal fees) arising from or related to the resale or transfer of Song Tokens. This includes any disputes or legal claims related to the resale, intellectual property, or financial loss resulting from market fluctuations.
                                </li>
                                <li>
                                    <strong>Termination of Resale Rights:</strong> MuseCoinX reserves the right to suspend or terminate a user's ability to engage in the resale of Song Tokens if the user violates the terms of this Agreement, engages in unlawful activities, or otherwise acts in a manner detrimental to the operation or reputation of the Platform. In such cases, any pending or completed resale transactions may be invalidated, and the user's access to the Platform may be restricted.
                                </li>
                                <li>
                                    <strong>No Guarantee of Smart Contract Functionality:</strong> Users acknowledge that the resale of Song Tokens is facilitated by smart contracts on the blockchain. While MuseCoinX strives to ensure the proper functioning of smart contracts, users understand that these contracts are susceptible to technical issues, bugs, or other failures. MuseCoinX does not guarantee the uninterrupted operation of smart contracts or the ability to process transactions successfully. Users agree to bear the risk associated with smart contract failures during the resale process.
                                </li>
                            </ul>
                        </div>

                        {/* 7. SMART CONTRACT TERMS */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                7. SMART CONTRACT TERMS
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Execution of Transactions:</strong> All transactions conducted on the Platform are executed through smart contracts, which are self-executing programs deployed on the blockchain. Once initiated, these contracts automatically perform the actions as specified, such as the transfer of Song Tokens or royalty payments. By using the Platform, you acknowledge that smart contracts will be executed based on the terms set within them, and these contracts cannot be modified, revoked, or amended once initiated. All users are responsible for understanding the terms and conditions embedded within the smart contracts before initiating any transactions.
                                </li>
                                <li>
                                    <strong>No Modification Post-Execution:</strong> Once a smart contract is executed, it becomes immutable and cannot be altered by any party, including MuseCoinX or the user. Users are advised to carefully review all transaction details before initiating a smart contract, as once the transaction is finalized, it cannot be undone or changed. Users agree that they will not hold MuseCoinX liable for any mistakes, misunderstandings, or issues arising from the execution of smart contracts.
                                </li>
                                <li>
                                    <strong>Limitations of Smart Contracts:</strong> While MuseCoinX strives to ensure the accuracy and reliability of the smart contracts used on the Platform, users acknowledge that smart contracts are susceptible to errors, bugs, or vulnerabilities inherent in blockchain technology. MuseCoinX is not responsible for any technical failures, code vulnerabilities, or security risks associated with the execution of smart contracts. Users understand that blockchain networks may experience issues such as congestion, delays, or system failures, which can affect the performance of smart contracts.
                                </li>
                                <li>
                                    <strong>Risks of Blockchain Technology:</strong> Smart contracts operate on the blockchain, which is a decentralized and distributed network. Users acknowledge the inherent risks involved with interacting with blockchain-based smart contracts, including the possibility of technical malfunctions, security breaches, or the failure of the blockchain network to properly execute the terms of the contract. Users assume all risks associated with the use of blockchain technology and agree not to hold MuseCoinX liable for any losses, damages, or issues arising from such risks.
                                </li>
                                <li>
                                    <strong>Transaction Finality:</strong> All actions executed through smart contracts are considered final and irreversible once processed. Users agree that transactions, including the purchase, sale, or transfer of Song Tokens, once executed, are permanent and cannot be reversed or refunded, even in the case of technical failures, user error, or other unforeseen circumstances. Users accept full responsibility for any consequences resulting from transaction finality and understand that MuseCoinX does not have the authority to reverse or modify completed transactions.
                                </li>
                                <li>
                                    <strong>Security Audits:</strong> MuseCoinX endeavors to conduct regular security audits of its smart contracts and blockchain-based systems to identify and mitigate potential vulnerabilities. However, users acknowledge that no security system is foolproof and that vulnerabilities may still exist, which could expose smart contracts to risks such as hacking, phishing, or exploits. Users accept that MuseCoinX is not responsible for any security breaches or losses resulting from vulnerabilities in the smart contracts.
                                </li>
                                <li>
                                    <strong>Indemnity for Smart Contract Issues:</strong> Users agree to indemnify and hold harmless MuseCoinX, its officers, directors, employees, and affiliates from any and all claims, damages, losses, or expenses arising from issues related to the execution, failure, or limitations of smart contracts. This includes, but is not limited to, losses due to bugs, coding errors, or security vulnerabilities in the blockchain or smart contracts. Users further agree not to hold MuseCoinX liable for any indirect, incidental, special, or consequential damages related to smart contract execution.
                                </li>
                                <li>
                                    <strong>Dispute Resolution for Smart Contracts:</strong> In the event of a dispute related to the execution or interpretation of a smart contract, users agree to resolve such disputes in accordance with the dispute resolution mechanisms outlined in this Agreement. Disputes arising from smart contracts will be handled in the manner set forth under the Dispute Resolution clause, including any applicable arbitration procedures.
                                </li>
                                <li>
                                    <strong>Continuous Improvement:</strong> MuseCoinX may periodically update or modify its smart contract infrastructure to improve functionality, security, or performance. However, users acknowledge that updates to the smart contract system may cause temporary disruptions or incompatibility with certain transactions. Users are encouraged to stay informed about any updates to the Platform's smart contract systems and agree to comply with any new terms or requirements introduced by these updates.
                                </li>
                                <li>
                                    <strong>Transparency and User Awareness:</strong> MuseCoinX will strive to provide users with clear and accessible information about the smart contracts involved in transactions, including the logic and terms of the contracts, as well as any updates or changes. Users are encouraged to familiarize themselves with the functionality of smart contracts before engaging in transactions and are responsible for their actions once a transaction is initiated.
                                </li>
                            </ul>
                        </div>

                        {/* 8. AML & KYC COMPLIANCE */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                8. AML & KYC COMPLIANCE
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Identity Verification:</strong> In accordance with applicable Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations, MuseCoinX requires users to submit identity verification information before gaining full access to the Platform. This may include, but is not limited to, government-issued identification (such as passports, national identity cards, or driver's licenses), proof of address (such as utility bills, bank statements, or rental agreements), and any other personal details required to verify the user's identity. MuseCoinX will collect and store this data in compliance with applicable data protection and privacy laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
                                </li>
                                <li>
                                    <strong>Purpose of KYC:</strong> The purpose of collecting KYC information is to ensure that users are legitimate and to prevent fraudulent activities such as money laundering, identity theft, and financing of terrorism. By completing KYC verification, users acknowledge that they understand and accept the regulatory requirements governing financial transactions and the issuance of Song Tokens on the Platform.
                                </li>
                                <li>
                                    <strong>KYC Process:</strong> Users will be required to provide accurate, truthful, and complete information during the KYC process. The process may involve the submission of digital or physical copies of documents, including government-issued ID and proof of residence. By submitting this information, users consent to MuseCoinX verifying their identity through third-party services if necessary. MuseCoinX may request additional documents or clarifications if the submitted data does not meet the required standards.
                                </li>
                                <li>
                                    <strong>Refusal of Service:</strong> MuseCoinX reserves the right to refuse access to its Platform, restrict or suspend services, or freeze user accounts if KYC information is incomplete, inaccurate, or does not meet the Platform's regulatory requirements. If a user fails to provide the necessary documentation, or if MuseCoinX suspects fraudulent activity or violations of the Platform's terms and conditions, MuseCoinX may refuse access to the Platform or restrict certain services until proper verification is completed.
                                </li>
                                <li>
                                    <strong>Ongoing Compliance:</strong> MuseCoinX may periodically request updated KYC information from users to maintain compliance with AML/KYC regulations. Users agree to provide updated information promptly upon request to ensure their continued access to the Platform. Failure to update or verify KYC information as requested may result in suspension of the user's access to certain Platform services.
                                </li>
                                <li>
                                    <strong>Data Security:</strong> MuseCoinX is committed to protecting the privacy and confidentiality of KYC information. All personal data collected as part of the KYC process will be handled in accordance with the Privacy Policy and applicable data protection laws. MuseCoinX implements robust security measures to prevent unauthorized access or misuse of personal information.
                                </li>
                                <li>
                                    <strong>Third-Party Verification:</strong> MuseCoinX may use third-party verification services to verify the authenticity of the KYC information provided by users. By submitting KYC data, users consent to the use of such third-party services to process and verify their information. MuseCoinX will only share the necessary data with these services for the purpose of verifying identity.
                                </li>
                                <li>
                                    <strong>No Guarantee of Access:</strong> While MuseCoinX will make reasonable efforts to verify user identities, it does not guarantee approval of all users for access to the Platform. The final decision on whether a user will be granted access rests with MuseCoinX in compliance with applicable laws and its internal policies.
                                </li>
                                <li>
                                    <strong>Legal Compliance:</strong> Users acknowledge that the Platform may be subject to various regulatory authorities depending on their jurisdiction, including financial institutions and government bodies. MuseCoinX will fully cooperate with law enforcement, regulatory authorities, and financial institutions in cases of suspected illegal activity, fraud, or non-compliance with AML/KYC regulations.
                                </li>
                            </ul>
                            <p className="mb-4">
                                By agreeing to this AML & KYC Compliance section, users acknowledge their obligation to comply with MuseCoinX's identity verification requirements and consent to the collection, use, and storage of their personal data for regulatory and compliance purposes.
                            </p>
                        </div>

                        {/* 9. NON-FINANCIAL REWARDS (DIGITAL COLLECTIBLES) */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                9. NON-FINANCIAL REWARDS (DIGITAL COLLECTIBLES)
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Nature of Rewards:</strong> Digital Collectibles issued by MuseCoinX are non-financial, non-transferable rewards that hold no monetary value or financial rights. These Digital Collectibles are given to users based on their participation, engagement, or interaction with the MuseCoinX Platform, and are meant solely as a form of recognition or reward for user activity. They are not tied to any royalty income, nor do they represent any ownership or equity interest in the songs or royalties on the Platform.
                                </li>
                                <li>
                                    <strong>No Guarantee of Value:</strong> MuseCoinX explicitly disclaims any guarantees regarding the value, marketability, or potential future trading of Digital Collectibles. Users should understand that these rewards are not intended to be investments or assets. The issuance of Digital Collectibles is purely for engagement purposes, and MuseCoinX does not make any representations or warranties about their future monetary worth. They are digital assets for enjoyment, recognition, or collection only.
                                </li>
                                <li>
                                    <strong>Use of Digital Collectibles:</strong> While Digital Collectibles hold no financial value, MuseCoinX may offer non-financial utilities such as exclusive access to events, special content, or other promotional activities as part of the reward. The nature and scope of such utilities, if any, will be specified by MuseCoinX on the Platform and may vary over time.
                                </li>
                                <li>
                                    <strong>No Claim to Financial Rights:</strong> Users acknowledge that possession of Digital Collectibles does not entitle them to any rights over Song Tokens, royalties, or any financial returns. They are not associated with ownership of songs or royalty income and are not a representation of financial investment. MuseCoinX does not guarantee or offer any financial benefits associated with the Digital Collectibles.
                                </li>
                                <li>
                                    <strong>Inability to Resell or Trade:</strong> Digital Collectibles are not transferable or resellable through the MuseCoinX Platform. While MuseCoinX may periodically change or update the rewards program, there is no market or exchange functionality for Digital Collectibles. They cannot be exchanged or sold to other users.
                                </li>
                                <li>
                                    <strong>Non-Transferable:</strong> Digital Collectibles are linked to the user's account and cannot be transferred or assigned to another individual or entity. If the user chooses to close their account or if their account is suspended, they may lose access to their Digital Collectibles without any possibility of compensation.
                                </li>
                                <li>
                                    <strong>Future Modifications:</strong> MuseCoinX reserves the right to modify, suspend, or discontinue the issuance of Digital Collectibles at its discretion. Such changes will be communicated to users in advance, and users will be notified of any alterations to the nature, distribution, or scope of the rewards.
                                </li>
                                <li>
                                    <strong>No Liability for Loss:</strong> MuseCoinX is not liable for any loss or damage that users may incur with respect to their Digital Collectibles, whether due to platform technical issues, user error, or other circumstances beyond MuseCoinX's control. Users accept sole responsibility for any risks associated with the Digital Collectibles, including but not limited to the potential loss of access to the rewards or utilities associated with them.
                                </li>
                            </ul>
                            <p className="mb-4">
                                By agreeing to the terms outlined in this section, users acknowledge that MuseCoinX's Digital Collectibles are non-financial rewards and are not to be viewed or treated as investments. Users understand the limitations and disclaimers regarding the value and usage of such rewards.
                            </p>
                        </div>

                        {/* 10. ESCROW TERMS */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                10. ESCROW TERMS
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Escrow Service:</strong> MuseCoinX provides an escrow service to facilitate transactions on the Platform. Funds or assets may be held in escrow by MuseCoinX in accordance with the terms outlined in the relevant smart contract. The release of these funds or assets will only occur when the specific conditions stipulated within the smart contract are met, such as the successful completion of royalty distribution, transaction confirmation, or other contractual obligations. The conditions for release will be clearly defined in the applicable smart contract.
                                </li>
                                <li>
                                    <strong>Security of Escrow:</strong> MuseCoinX will employ commercially reasonable efforts to secure the funds and assets held in escrow, including the use of encryption, access controls, and other security measures to protect against unauthorized access, loss, or theft. However, users acknowledge that no system can be entirely secure and MuseCoinX cannot guarantee that the escrowed funds or assets will be entirely immune to risks such as technical failures, hacking, or other cybersecurity threats. Users assume the risk of loss or damage to the escrowed funds or assets resulting from third-party failures, technical vulnerabilities, or unforeseen events that may occur during the escrow period.
                                </li>

                                <li><strong>No Liability for Loss:</strong> MuseCoinX is not liable for any loss, damage, or impairment of escrowed funds or assets arising from circumstances beyond its control, including but not limited to cyberattacks, system failures, or breaches of third-party providers involved in the escrow process. Users agree that MuseCoinX will not be held responsible for any financial loss or damages incurred due to these risks.</li>
                                <li><strong>Release of Escrow Funds:</strong> Escrowed funds will be released only when the conditions set forth in the smart contract are fully met and verified. These conditions may include the successful transfer of royalties, confirmation of transactions, or completion of any required contractual steps as outlined in the relevant agreement. Once the conditions are met, the escrowed funds or assets will be automatically released to the specified recipient in accordance with the terms of the smart contract.</li>
                                <li><strong>Escrow Dispute Resolution:</strong> In the event of a dispute regarding the release of escrowed funds, the parties involved must resolve the dispute directly. If required, MuseCoinX may assist in providing necessary documentation or facilitating communication between the parties, but MuseCoinX is not responsible for resolving disputes related to the transaction or the release of escrowed funds. Disputes should be addressed according to the applicable arbitration or legal procedures as outlined in this Agreement.</li>
                                <li><strong>No Financial Benefit from Escrow:</strong> MuseCoinX does not charge users for holding funds in escrow beyond any standard transaction or service fees associated with the use of the Platform. No interest or financial return will accrue to users on the escrowed funds during the holding period.</li>
                            </ul>
                            <p className="mb-4">By agreeing to these terms, users acknowledge and accept the risks associated with the escrow service, the conditions under which funds are held and released, and Musecoinx’s role as an intermediary in the escrow process. Users understand that MuseCoinX is not responsible for any loss or damages incurred due to the risks associated with escrowed funds or assets.</p>
                        </div>
                        {/* 11. LIABILITY DISCLAIMER */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                11. LIABILITY DISCLAIMER
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>No Financial Guarantees:</strong> MuseCoinX does not offer any financial guarantees or promises regarding the profitability of Song Tokens. The royalties and returns generated from Song Tokens are entirely dependent on the performance of the underlying song, including factors such as streaming popularity, market conditions, and the success of the song across various platforms. MuseCoinX does not guarantee that any specific amount of royalties will be generated or that the value of Song Tokens will appreciate over time. Users acknowledge and accept that returns are subject to external factors that are beyond the control of MuseCoinX.
                                </li>
                                <li>
                                    <strong>No Liability for Losses:</strong> MuseCoinX shall not be held liable for any financial loss, damage, or impairment of value associated with Song Tokens. This includes, but is not limited to, losses resulting from fluctuations in market value, technical failures, cyberattacks, system malfunctions, or loss of access to user wallets or accounts. MuseCoinX is not responsible for any failure in the functionality of the Platform, nor for any loss of Song Tokens due to user negligence, unauthorized third-party access, or other external circumstances. Users acknowledge that they are solely responsible for securing their wallets, accounts, and personal information associated with their use of the Platform.
                                </li>
                                <li>
                                    <strong>No Responsibility for Market Conditions:</strong> MuseCoinX does not have control over market dynamics, including the value of Song Tokens or royalties. The value of Song Tokens may fluctuate based on market conditions, demand for the song, streaming statistics, and external factors within the digital music industry. MuseCoinX does not assume responsibility for such fluctuations or for any adverse financial impacts caused by them.
                                </li>
                                <li>
                                    <strong>Exclusion of Liability:</strong> MuseCoinX expressly excludes any liability for direct, indirect, special, incidental, or consequential damages, including but not limited to loss of profits, revenue, or goodwill, arising from the use or inability to use the Platform, Song Tokens, or other related services. This exclusion of liability applies even if MuseCoinX has been advised of the possibility of such damages.
                                </li>
                                <li>
                                    <strong>User Assumption of Risk:</strong> By using the MuseCoinX Platform and acquiring Song Tokens, users acknowledge and assume all risks associated with the purchase, sale, and holding of Song Tokens. Users agree that MuseCoinX is not responsible for any financial losses or damages arising from such risks, including risks related to token depreciation, changes in royalty income, and external technological or market failures.
                                </li>
                                <li>
                                    <strong>No Warranty:</strong> MuseCoinX does not provide any warranty, express or implied, regarding the Platform or the Song Tokens. MuseCoinX makes no representation or warranty regarding the accuracy, completeness, reliability, or suitability of the information, content, or services provided on the Platform. The Platform and its services are provided "as is," and users access and use the Platform at their own risk.
                                </li>
                            </ul>
                        </div>

                        {/* 12. GOVERNING LAW AND JURISDICTION */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                12. GOVERNING LAW AND JURISDICTION
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Governing Law:</strong> This Agreement shall be governed by, and construed in accordance with, the laws of the United Kingdom, without regard to its conflicts of law provisions. The parties expressly agree that any disputes, claims, or actions arising out of or in connection with this Agreement shall be resolved in accordance with the substantive law of the United Kingdom.
                                </li>
                                <li>
                                    <strong>Exclusive Jurisdiction:</strong> The parties agree that any dispute, claim, or controversy arising out of or in connection with this Agreement, including any matters related to the Platform, Song Tokens, or any other services provided by MuseCoinX, shall be subject to the exclusive jurisdiction of the courts of England and Wales. The parties irrevocably consent to the personal jurisdiction of such courts and waive any objections to the venue, based on forum non conveniens or otherwise.
                                </li>
                                <li>
                                    <strong>Dispute Resolution:</strong> The parties further agree that any legal action or proceeding related to this Agreement or the use of the Platform shall be initiated and adjudicated only in the courts located in England and Wales. This exclusive venue clause does not prevent the enforcement of judgments in other jurisdictions, nor does it limit any party’s right to seek injunctive relief or provisional remedies in any court of competent jurisdiction.
                                </li>
                            </ul>
                        </div>

                        {/* 13. MODIFICATIONS */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                13. MODIFICATIONS
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Right to Amend:</strong> MuseCoinX reserves the right to amend, modify, or update this Agreement at any time, at its sole discretion. Any changes to the terms of this Agreement will be posted on the Platform, and the date of the latest revision will be clearly indicated. By continuing to access or use the Platform after any such changes are made, you acknowledge and agree to be bound by the amended terms.
                                </li>
                                <li>
                                    <strong>Notification of Changes:</strong> In the event of any material changes to the Agreement, MuseCoinX may provide users with notice through the Platform, via email, or through other communication methods deemed appropriate by MuseCoinX. It is your responsibility to review the Agreement periodically to ensure you are aware of the most current terms.
                                </li>
                                <li>
                                    <strong>Effective Date:</strong> The amended Agreement will become effective immediately upon being posted on the Platform, and any continued use of the Platform after such posting constitutes your acceptance of the revised terms. If you do not agree to the changes, you must cease all use of the Platform.
                                </li>
                            </ul>
                        </div>

                        {/* 14. TERMINATION */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                14. TERMINATION
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Account Termination:</strong> MuseCoinX reserves the right to suspend or permanently terminate a user’s account at its discretion, including but not limited to situations where the user has violated any term or condition of this Agreement. Termination may also occur if required by law, regulatory requirements, or if MuseCoinX believes that the user’s actions could harm the Platform or other users.
                                </li>
                                <li>
                                    <strong>Suspension of Access:</strong> In cases of suspected violation of this Agreement, MuseCoinX may temporarily suspend a user’s access to the Platform while investigating the breach. During the suspension, the user may be restricted from accessing certain features or services of the Platform.
                                </li>
                                <li>
                                    <strong>Obligations Upon Termination:</strong> Upon termination of this Agreement, whether by MuseCoinX or the user, the user agrees to cease all use of the Platform and its services. Any outstanding transactions, fees, or obligations must be resolved prior to termination. MuseCoinX shall not be liable for any consequences arising from the termination of a user’s account.
                                </li>
                                <li>
                                    <strong>Effect of Termination:</strong> Termination of the user’s account will result in the cancellation of any ongoing transactions, and the user’s access to the Platform, including any Song Tokens, services, or rewards, may be revoked. However, any accrued rights or obligations, including those related to transactions completed before termination, shall survive.
                                </li>
                            </ul>
                        </div>

                        {/* 15. FORCE MAJEURE */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                15. FORCE MAJEURE
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Unforeseen Circumstances:</strong> MuseCoinX shall not be held liable for any failure to perform its obligations under this Agreement if such failure is caused by events beyond its reasonable control. These events may include, but are not limited to, natural disasters (such as earthquakes, floods, or fires), acts of terrorism, war, civil unrest, strikes, government regulations, pandemics, technological failures, or disruptions to essential services.
                                </li>
                                <li>
                                    <strong>Notification:</strong> In the event of a force majeure occurrence, MuseCoinX will make reasonable efforts to notify affected users and keep them informed of any delays or disruptions. However, MuseCoinX is not required to provide compensation for any damages or losses resulting from such events.
                                </li>
                                <li>
                                    <strong>No Liability for Force Majeure Events:</strong> MuseCoinX shall not be deemed in breach of this Agreement for its inability to perform or delay in performing its obligations due to circumstances that constitute a force majeure event. The parties acknowledge that in such cases, the obligations of MuseCoinX shall be suspended for the duration of the event.
                                </li>
                                <li>
                                    <strong>Duration:</strong> If a force majeure event lasts for an extended period and significantly impacts the Platform’s operation, MuseCoinX reserves the right to reassess its service commitments and, if necessary, take appropriate action regarding its continued obligations.
                                </li>
                            </ul>
                        </div>

                        {/* 16. DISPUTE RESOLUTION */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                16. DISPUTE RESOLUTION
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Arbitration:</strong> Any dispute, claim, or controversy arising out of or in connection with this Agreement, including disputes regarding its interpretation, validity, performance, or breach, will be resolved through binding arbitration. The arbitration will be conducted in accordance with the rules and procedures set by the [designated Arbitration Body, e.g., LCIA (London Court of International Arbitration)], and the location of the arbitration will be in London, United Kingdom.
                                </li>
                                <li>
                                    <strong>Arbitration Process:</strong> The arbitration proceedings shall be conducted by a sole arbitrator, who shall be appointed in accordance with the relevant arbitration rules. The language of the arbitration will be English, and the arbitrator’s decision shall be final, binding, and enforceable in any court of competent jurisdiction.
                                </li>
                                <li>
                                    <strong>Costs of Arbitration:</strong> Each party shall bear its own costs of the arbitration, including legal fees. The arbitrator may, at their discretion, allocate the costs of arbitration, including the arbitrator's fees and expenses, to the party found to have acted unreasonably or in bad faith.
                                </li>
                                <li>
                                    <strong>Exclusivity:</strong> Arbitration is the exclusive remedy for disputes arising under this Agreement. Both parties waive their right to initiate any action in a court of law, except as may be necessary to enforce the arbitration award or as otherwise required by law.
                                </li>
                                <li>
                                    <strong>Confidentiality:</strong> The arbitration proceedings, including all related communications, submissions, and awards, shall be kept confidential, unless otherwise required by law or with the mutual consent of both parties.
                                </li>
                            </ul>
                        </div>

                        {/* 17. INDEMNITY */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                17. INDEMNITY
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Indemnification by User:</strong> Users agree to indemnify, defend, and hold harmless MuseCoinX, its affiliates, directors, officers, employees, agents, and partners, from and against any and all claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising out of or in connection with:
                                    <ul className="list-disc pl-6 mt-2">
                                        <li>The User's use of the Platform and its services;</li>
                                        <li>Any violation of this Agreement, including breach of the representations, warranties, or obligations contained herein;</li>
                                        <li>Any violation of applicable laws, including but not limited to intellectual property rights, data protection laws, or other regulatory requirements;</li>
                                        <li>Any claims arising from User-generated content or transactions made through the Platform.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Obligation to Defend:</strong> Users further agree to cooperate with MuseCoinX in the defense of any such claims. MuseCoinX reserves the right to assume the exclusive defense and control of any matter subject to indemnification, and the User shall not settle any claim without the prior written consent of MuseCoinX.
                                </li>
                            </ul>
                        </div>

                        {/* 18. INTELLECTUAL PROPERTY */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                18. INTELLECTUAL PROPERTY
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Ownership:</strong> MuseCoinX retains all intellectual property rights, title, and interest in and to the Platform, including but not limited to its website, mobile applications, software, trademarks, logos, digital content, and any other materials or assets associated with the Platform. All content and services provided by MuseCoinX are protected by intellectual property laws, including copyright, trademark, and other applicable laws.
                                </li>
                                <li>
                                    <strong>License Grant:</strong> Subject to the terms of this Agreement, MuseCoinX grants users a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for personal, non-commercial purposes. This license is conditional upon the user’s compliance with the terms of this Agreement.
                                </li>
                                <li>
                                    <strong>Restrictions:</strong> Users shall not:
                                    <ul className="list-disc pl-6 mt-2">
                                        <li>Reproduce, distribute, modify, display, or otherwise exploit any content or intellectual property from the Platform for commercial purposes without the express written consent of MuseCoinX;</li>
                                        <li>Use any data mining, robots, or similar data-gathering or extraction tools in connection with the Platform;</li>
                                        <li>Violate or infringe any intellectual property rights of MuseCoinX or third parties through the use of the Platform.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Reservation of Rights:</strong> All rights not expressly granted in this Agreement are reserved by MuseCoinX. Users do not acquire any ownership interest in the intellectual property of MuseCoinX through the use of the Platform.
                                </li>
                            </ul>
                        </div>

                        {/* 19. DATA PROTECTION */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                19. DATA PROTECTION
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Privacy Commitment:</strong> MuseCoinX is committed to safeguarding and protecting the privacy of users' personal data in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and any other relevant privacy legislation.
                                </li>
                                <li>
                                    <strong>Collection and Use of Data:</strong> MuseCoinX collects, processes, stores, and shares personal data in accordance with its Privacy Policy, which outlines the types of data collected, the purposes for which it is used, and the rights users have regarding their data.
                                </li>
                                <li>
                                    <strong>Data Security:</strong> MuseCoinX implements industry-standard technical and organizational measures to protect personal data from unauthorized access, loss, or destruction. However, users are responsible for maintaining the confidentiality of their login credentials and account details.
                                </li>
                                <li>
                                    <strong>Access and Control:</strong> Users have the right to access, correct, or delete their personal data, as outlined in the Privacy Policy. Users may also withdraw consent or object to the processing of their personal data in certain circumstances.
                                </li>
                                <li>
                                    <strong>For More Information:</strong> For further details on how your personal data is processed, stored, and protected, please refer to the MuseCoinX Privacy Policy, available on the Platform.
                                </li>
                            </ul>
                        </div>

                        {/* 20. SEVERABILITY */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                20. SEVERABILITY
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Invalid Provisions:</strong> If any provision or part of this Agreement is found to be invalid, illegal, or unenforceable by a court or other competent authority, such provision shall be deemed severed from this Agreement. The remainder of the Agreement will remain in full force and effect, and the parties will endeavor to replace the invalid provision with a valid one that reflects the original intent and purpose of the severed provision to the fullest extent permissible by law.
                                </li>
                            </ul>
                        </div>

                        {/* 21. ENTIRE AGREEMENT */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                21. ENTIRE AGREEMENT
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Complete Agreement:</strong> This Agreement, including any amendments, constitutes the entire understanding and agreement between the user and MuseCoinX with respect to the subject matter hereof. It supersedes any prior or contemporaneous agreements, representations, discussions, or communications between the parties regarding the use of the MuseCoinX Platform. No oral or written statements made by either party that are not expressly included in this Agreement shall have any force or effect. By using the Platform, you acknowledge that you have read, understood, and agree to the terms set forth in this Agreement.
                                </li>
                            </ul>
                        </div>

                        {/* Acceptance Section */}
                        <div className="mt-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                ACCEPTANCE OF TERMS
                            </h2>
                            <p className="mb-6">
                                By accessing and using the MuseCoinX Platform, you acknowledge and agree to be bound by the terms and conditions set forth in this User Agreement. Please review the Agreement carefully before proceeding.
                            </p>
                            <div className="flex flex-col items-center space-y-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-500 rounded" />
                                    <span className="text-gray-300">I have read, understood, and agree to the User Agreement and all related policies.</span>
                                </label>
                                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                                    Submit / Proceed
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserAgreement;