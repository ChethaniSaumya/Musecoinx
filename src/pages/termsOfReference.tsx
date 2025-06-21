import { Button } from "@/components/ui/button";
import '../hero.css';

const TermsOfReference = () => {
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
              Terms of Reference
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
                These Terms of Reference ("ToR") constitute a legally binding agreement between you, the user ("you," "your," or "User"), and PHYDIGI LIMITED, a company incorporated and registered under the laws of the United Kingdom, with company number 14340557, and having its registered office at 128 City Road, London, EC1V 2NX, United Kingdom (hereinafter referred to as "MuseCoinX," "we," "us," or "our"). These ToR govern your access to, use of, and engagement with the MuseCoinX Platform, which includes, but is not limited to, the official website at www.musecoinx.com, mobile applications, decentralized applications (dApps), application programming interfaces (APIs), and all other technologies, tools, services, and content provided by or through MuseCoinX, both now and in the future (collectively referred to as the "Platform").
              </p>
              <p className="mb-4">
                By accessing or using the Platform, including browsing, registering, participating in transactions, or engaging in any other activity that constitutes use of the Platform, you acknowledge and affirm that you have read, understood, and irrevocably agreed to be bound by these ToR. Your acceptance of these ToR is required as a condition for your use of the Platform. If you do not agree to these ToR, or if you do not have the legal authority to agree to these terms, you are prohibited from using the Platform and must immediately cease any access or interaction with the Platform.
              </p>
              <p className="mb-4">
                The ToR governs your relationship with MuseCoinX and applies to all users of the Platform, including, but not limited to, artists, music labels, fans, and administrators, unless explicitly stated otherwise. If you are accessing or using the Platform on behalf of any entity, you represent and warrant that you are authorized to bind such entity to these ToR.
              </p>
              <p className="mb-4">
                You understand and agree that MuseCoinX may, from time to time, amend, modify, or update these ToR in its sole discretion, without prior notice to you. Any such amendments or updates shall be effective immediately upon being posted on the Platform. Continued use of the Platform after any such amendments or updates will constitute your acceptance of the revised ToR. If any provision of these ToR is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect. You acknowledge that it is your responsibility to periodically review these ToR for any changes or updates.
              </p>
              <p className="mb-4">
                In addition to the ToR, you may be required to agree to additional terms or policies (such as privacy policies or service agreements) that apply to specific services or functions offered through the Platform. In the event of a conflict between those additional terms and these ToR, the additional terms shall prevail, but only to the extent of such conflict.
              </p>
            </div>

            {/* 2. Definitions */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                2. Definitions
              </h2>
              <p className="mb-4">
                For the purposes of these Terms of Reference ("ToR"), the following terms shall have the respective meanings ascribed to them, unless the context otherwise requires:
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">"NFTs" or "Song Tokens"</h3>
              <p className="mb-4">
                Non-Fungible Tokens (NFTs), also referred to as "Song Tokens," are unique digital assets created and issued on the MuseCoinX Platform, representing fractional and transferable ownership shares in the royalty income derived from the use, distribution, or performance of a particular song. Each NFT is created using blockchain technology, specifically the Polygon blockchain, ensuring the transparency, security, and immutability of all transactions. The ownership of such Song Tokens entitles the holder to a proportionate share of the Royalty Income generated from the use, distribution, or streaming of the song on digital music platforms such as Spotify, Apple Music, YouTube, and other similar platforms. Song Tokens are transferable, meaning that ownership can be bought, sold, or otherwise transferred between parties, subject to the conditions set forth herein.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">"Platform"</h3>
              <p className="mb-4">
                The MuseCoinX Platform refers to the blockchain-based decentralized service ecosystem created and operated by PHYDIGI LIMITED, a company incorporated under the laws of the United Kingdom. The Platform facilitates the tokenization of Royalty Income and the issuance of Song Tokens as outlined in these Terms. The Platform includes, but is not limited to, the website, mobile applications, decentralized applications (dApps), application programming interfaces (APIs), and smart contracts, which together enable Artists to tokenize their royalty rights and distribute fractional ownership of these rights to Fans via Song Tokens. The Platform may be accessed through the official website at www.musecoinx.com and is available on any supported device with internet access. The Platform operates in a decentralized and non-custodial manner, ensuring that the control over tokens and funds remains with the users.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">"Artist"</h3>
              <p className="mb-4">
                An "Artist" is an individual, band, or Music Label who owns or controls the rights to musical works and who uploads and tokenizes their music on the MuseCoinX Platform. By uploading their musical works, the Artist grants the Platform a non-exclusive, worldwide, royalty-free, and sublicensable license to tokenize the royalty rights of the uploaded music into Song Tokens, which can then be distributed or purchased by Fans. Artists are responsible for ensuring they have all necessary rights, including copyright and licensing, to upload the music and tokenize the royalty rights. Artists retain full ownership and control over their underlying musical works but grant MuseCoinX the license to use the song for the purpose of creating and issuing Song Tokens, which are linked to the income generated by the song.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">"Fan" or "NFT Holder"</h3>
              <p className="mb-4">
                A "Fan" or "NFT Holder" refers to an individual or entity who acquires, holds, or purchases Song Tokens via the MuseCoinX Platform. The purchase or holding of Song Tokens entitles the Fan to a share of the Royalty Income generated by the corresponding song, proportional to the amount of Song Tokens they hold. The holder of the Song Token does not acquire ownership of the song itself, but rather a share in the royalties earned from its distribution and use across digital platforms. The rights and obligations associated with owning Song Tokens are governed by the terms set forth in these ToR. Fans also have the right to resell, transfer, or trade Song Tokens on compatible platforms, subject to applicable laws and the terms outlined in these ToR.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">"Muse Coins"</h3>
              <p className="mb-4">
                Muse Coins are the native digital currency of the MuseCoinX Platform, which serve as the primary medium of exchange within the Platform. Muse Coins are used for transactions such as purchasing Song Tokens, distributing royalties to NFT Holders, and facilitating other economic activities within the MuseCoinX ecosystem. Muse Coins may also be used to pay for any associated fees or services on the Platform. The exchange rate and value of Muse Coins are determined by market conditions, demand, and the use of the Platform. Muse Coins are recorded and managed on the Polygon blockchain, ensuring transparency and security.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">"External Wallet Providers"</h3>
              <p className="mb-4">
                External Wallet Providers refer to independent, third-party services that are utilized by Fans to store, manage, and transfer their Song Tokens. These wallet services are not operated or controlled by MuseCoinX. As such, MuseCoinX does not have access to or responsibility for the security or management of any user wallets. Users are solely responsible for securing their wallets and any Song Tokens stored within them. The MuseCoinX Platform operates on a non-custodial basis, meaning that MuseCoinX does not take possession of any Song Tokens or associated funds, which remain under the control of the user's chosen wallet provider.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">"Royalty Income"</h3>
              <p className="mb-4">
                Royalty Income refers to the payments made to Artists or Music Labels by digital streaming platforms, such as Spotify, Apple Music, YouTube, and other similar services, for the public performance, distribution, or use of their songs. The Royalty Income generated from these platforms is then shared with Fans who hold Song Tokens corresponding to the specific song. The Royalty Income is distributed proportionally to the NFT holders, based on their ownership percentage of Song Tokens. This income is subject to fluctuations based on the performance of the song on these platforms and other market conditions. MuseCoinX facilitates the distribution of this Royalty Income but does not guarantee the amount of income or the success of any particular song. Regarding performance royalties, MuseCoinX relies on the Artist's declaration and the terms outlined in the contract with the Artist. We expect the Artist to accurately report and declare performance royalties from public performances.
              </p>
            </div>

            {/* 3. General Terms and Conditions */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                3. General Terms and Conditions
              </h2>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.1 Platform Overview</h3>
              <p className="mb-4">
                The MuseCoinX Platform operates as a decentralized, blockchain-based service designed to facilitate the tokenization of Royalty Income through the issuance of Song Tokens (NFTs). The primary objective of the Platform is to enable Artists and Music Labels to tokenize a portion of their Royalty Income and distribute these fractions to Fans who acquire Song Tokens. The following features and characteristics apply to the Platform:
              </p>
              <p className="mb-4">
                <strong>Tokenization of Royalty Rights:</strong> Artists and Music Labels shall upload their songs to the MuseCoinX Platform and tokenize a portion of their Royalty Income by creating Song Tokens. These tokens are available for purchase by Fans or, alternatively, can be transferred to Fans via airdrop. Each Song Token represents a proportional share of the Royalty Income generated by the song through public performance, distribution, and usage on digital streaming platforms.
              </p>
              <p className="mb-4">
                <strong>Non-Custodial Nature:</strong> The MuseCoinX Platform does not take custody of user funds or Song Tokens. All transactions are facilitated through smart contracts deployed on the blockchain, ensuring transparency and autonomy for each user. The ownership and control of digital wallets used to manage Song Tokens rest solely with the respective users (i.e., Fans and Artists). MuseCoinX does not store, manage, or control any assets or digital currencies; instead, it provides the technological infrastructure for transactions and interactions on the Platform.
              </p>
              <p className="mb-4">
                <strong>Royalty Distribution Mechanism:</strong> The Royalty Income generated from the public use and distribution of a song on digital platforms (e.g., Spotify, Apple Music, YouTube) is distributed to NFT Holders based on their percentage ownership of Song Tokens. The payments will be made in Muse Coins, the native token of the MuseCoinX Platform, which can also be used within the Platform for other transactions. The royalty payments are executed via smart contracts, ensuring that payouts are transparent, timely, and proportionate to the ownership of the Song Tokens.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.2 Responsibilities and Obligations of the Artist</h3>
              <p className="mb-4">
                The Artist or Music Label acknowledges and agrees to undertake the following responsibilities and obligations when utilizing the MuseCoinX Platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Ownership and Licensing:</strong> The Artist affirms and warrants that they hold full, unrestricted ownership or possess all necessary rights (including copyright and licensing rights) to the music they upload to the MuseCoinX Platform. The Artist further represents and warrants that all Royalty Rights uploaded to the Platform are accurate, legitimate, and free from any third-party encumbrances, claims, or disputes that could interfere with the tokenization process.
                </li>
                <li>
                  <strong>Accurate Information:</strong> The Artist shall ensure that all metadata related to the uploaded song including, but not limited to, song title, artist name, and royalty percentage is accurate, complete, and current. The Artist bears sole responsibility for the veracity of the information provided to the MuseCoinX Platform. MuseCoinX disclaims any liability for inaccuracies or misrepresentations of the song data provided by the Artist.
                </li>
                <li>
                  <strong>Intellectual Property Rights:</strong> By uploading a song to the Platform, the Artist grants MuseCoinX a non-exclusive, worldwide, royalty-free, and sublicensable license to use the song solely for the purpose of tokenizing the Royalty Income associated with that song into Song Tokens. This license is limited to tokenization, distribution, and royalty management on the MuseCoinX Platform.
                </li>
                <li>
                  <strong>Indemnification:</strong> The Artist agrees to indemnify, defend, and hold harmless MuseCoinX, its officers, directors, agents, employees, and affiliates, from and against any and all claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising out of or in connection with any third-party intellectual property disputes, including but not limited to copyright infringement, trademark violations, or other legal claims related to the music uploaded by the Artist to the Platform.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.3 Rights and Responsibilities of Fans/NFT Holders</h3>
              <p className="mb-4">
                As a Fan or NFT Holder, you acknowledge and agree to the following rights and responsibilities:
              </p>
              <p className="mb-4">
                <strong>Acquisition of Song Tokens:</strong> You may acquire Song Tokens through purchases or by receiving them via an airdrop, which is a delivery mechanism for distributing tokens to users' wallets. Each Song Token represents a proportional share of the Royalty Income generated by the corresponding song, entitling you to receive a portion of royalties in accordance with your token holdings.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Non-Refundable Transactions:</strong> Once a Song Token is purchased, the transaction is final and non-refundable. You understand and agree that MuseCoinX is not obligated to reverse, refund, or amend any transactions once they have been completed on the Platform. Any disputes regarding transactions must be handled directly with the respective wallet provider or third-party service.
                </li>
                <li>
                  <strong>Market Risks:</strong> You acknowledge that the value of Song Tokens and the corresponding Royalty Income may fluctuate due to various market factors, including the popularity of the song, the success of the song in digital streaming platforms, and broader market conditions within the music and cryptocurrency industries. You assume all risks related to the purchase, holding, or sale of Song Tokens.
                </li>
                <li>
                  <strong>Token Resale:</strong> Song Tokens may be resold or transferred to other parties on third-party platforms, but MuseCoinX does not directly control or facilitate these transactions. You acknowledge that MuseCoinX disclaims any liability or responsibility for any issues arising from the resale, transfer, or exchange of Song Tokens on external platforms.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">3.4 MuseCoinX's Responsibilities and Limitations</h3>
              <p className="mb-4">
                The responsibilities of MuseCoinX are expressly limited as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Facilitation of Royalty Tokenization:</strong> MuseCoinX provides the necessary platform and infrastructure for the tokenization of Royalty Rights and issuance of Song Tokens. We facilitate the distribution of NFTs to Fans and the payment of royalties based on the ownership of Song Tokens. Our role is to act as an intermediary service provider for the Artists and Fans.
                </li>
                <li>
                  <strong>No Guarantee of Royalties:</strong> MuseCoinX makes no representations or warranties regarding the profitability or revenue generation of any Song Tokens. We do not control or guarantee the success of any specific song or the Royalty Income resulting from its streaming. The Platform is merely a facilitator and does not guarantee the amount or frequency of royalty payments.
                </li>
                <li>
                  <strong>Non-Custodial Nature:</strong> MuseCoinX is not responsible for managing or securing any digital wallets, nor are we liable for any loss or theft of Song Tokens due to hacking, phishing, or other cyberattacks. The security of wallets used to manage Song Tokens is solely the responsibility of the Fan or Artist, and all transactions conducted on the Platform occur at the user's own risk.
                </li>
                <li>
                  <strong>Smart Contract Risks:</strong> While we strive to ensure the accuracy and functionality of the smart contracts deployed on the Polygon blockchain, MuseCoinX does not provide any guarantee that the smart contracts will function without errors, bugs, or vulnerabilities. You acknowledge that smart contracts are inherently subject to risks, including potential programming flaws, system failures, or security vulnerabilities, and agree to use the Platform at your own risk.
                </li>
              </ul>
            </div>

            {/* 4. Risk Factors */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                4. Risk Factors
              </h2>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.1 Royalty Income Not Guaranteed</h3>
              <p className="mb-4">
                You, as a Fan or NFT Holder, acknowledge and agree that the Royalty Income derived from the ownership of Song Tokens is not guaranteed. The Royalty Income you may receive is contingent upon multiple factors, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The performance of the song across digital streaming platforms, including its popularity and frequency of plays;</li>
                <li>Market conditions, which may affect the overall demand and success of the song and, by extension, the royalties generated from it;</li>
                <li>The availability of royalty income, which is subject to the terms and conditions set by third-party digital streaming platforms (e.g., Spotify, Apple Music, YouTube, etc.), as well as the accuracy of the reporting and payment by these platforms. While some platforms may provide data through APIs, we also rely on the Artist to declare performance royalties. This ensures that in cases where data cannot be obtained from the platform's API, the Artist's declaration will provide the necessary information for accurate royalty distribution.</li>
              </ul>
              <p className="mb-4">
                You acknowledge that MuseCoinX does not control or guarantee the Royalty Income generated by any song, nor can we ensure that the royalty payments will be forthcoming or consistent in amounts. Furthermore, MuseCoinX is not liable for any discrepancies or delays in the payment of Royalty Income by streaming platforms or any other third parties.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.2 Value of Song Tokens and Market Fluctuations</h3>
              <p className="mb-4">
                You acknowledge and understand that the value of Song Tokens is subject to significant fluctuations and may be influenced by a wide range of factors, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Popularity and market demand:</strong> The value of Song Tokens is directly tied to the popularity of the associated song, which is driven by public interest, media attention, and listener engagement.</li>
                <li><strong>Streaming statistics:</strong> The performance of the song across digital platforms, including the number of streams, plays, and downloads, can heavily influence the royalty income and, in turn, the value of the Song Tokens.</li>
                <li><strong>Digital music industry trends:</strong> Fluctuations in the overall digital music industry, including changes in market trends, the success or failure of new platforms, and regulatory shifts, can all significantly impact the performance and value of Song Tokens.</li>
              </ul>
              <p className="mb-4">
                You further acknowledge that the market for NFTs and Song Tokens is speculative and can experience extreme volatility. The value of Song Tokens may increase or decrease, and there is no assurance that the value of a Song Token will remain stable or continue to appreciate. MuseCoinX disclaims any liability or responsibility for any losses, damages, or missed opportunities resulting from such market fluctuations.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.3 Loss of NFTs</h3>
              <p className="mb-4">
                You acknowledge and agree that once a Song Token has been purchased, acquired, or transferred to you, the transaction is final, and the Song Token cannot be returned, refunded, or exchanged under any circumstances. You assume full responsibility and risk for any and all purchases or transfers of Song Tokens on the Platform. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The risk of loss due to market failure or the song's underperformance on digital platforms;</li>
                <li>The potential for loss of NFTs due to hacking, cybersecurity breaches, or other technical failures that may occur, either within the MuseCoinX Platform or with third-party services such as External Wallet Providers;</li>
                <li>Loss of access to Song Tokens due to user error, including the failure to back up or secure private keys, wallet credentials, or other forms of digital access to the NFTs.</li>
              </ul>
              <p className="mb-4">
                You further acknowledge that MuseCoinX has no obligation to replace lost Song Tokens or provide compensation for any loss of NFTs, whether due to external factors, technological issues, user negligence, or any other unforeseen circumstances. MuseCoinX is not liable for any financial loss, damages, or losses arising from the failure to protect or secure NFTs, nor is it liable for the devaluation of Song Tokens, market fluctuations, or any related risks. Users accept full responsibility for safeguarding their Song Tokens and any related transactions on the Platform. Additionally, MuseCoinX makes no representations or warranties regarding the profitability or success of the tokens, and users acknowledge the inherent risks involved in the purchase, trade, and holding of Song Tokens. To mitigate potential risks, MuseCoinX may, at its discretion, use third-party insurance and escrow services to protect user funds, but users must be aware that such services are not guaranteed. Regular communication regarding potential financial risks will be provided, and users are encouraged to consult with legal or financial advisors on matters related to risks, including insolvency protections.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.4 Smart Contract and Blockchain Risks</h3>
              <p className="mb-4">
                You acknowledge that MuseCoinX utilizes smart contracts and the Polygon blockchain to facilitate the issuance and transfer of Song Tokens. While MuseCoinX has taken reasonable measures to ensure the correct functioning of these smart contracts, the use of blockchain technology involves inherent risks, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Technical vulnerabilities:</strong> Bugs, flaws, or errors in the code underlying smart contracts may result in the misallocation of Royalty Income, loss of NFTs, or other unintended consequences.</li>
              </ul>
              <p className="mb-4">
                <strong>Blockchain risks:</strong> The use of blockchain systems exposes users to risks, including, but not limited to, the possibility of hacking, network congestion, or system failure that could impact the execution of smart contracts or the ability to transfer, redeem, or sell Song Tokens.
              </p>
              <p className="mb-4">
                You assume all risks associated with interacting with the blockchain and smart contracts, including any risks arising from network failures, data integrity issues, or unforeseen technical issues that may arise, and you acknowledge that MuseCoinX is not liable for any such failures.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">4.5 Regulatory Risks</h3>
              <p className="mb-4">
                You acknowledge and understand that the legal landscape surrounding cryptocurrency, NFTs, and blockchain-based platforms is rapidly evolving, and that regulations governing the use of such technologies may vary across jurisdictions. The following regulatory risks may affect the use and value of Song Tokens:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Jurisdictional regulations:</strong> Changes in laws or regulations relating to digital assets, NFTs, cryptocurrency, or intellectual property may have an impact on your ability to purchase, hold, or sell Song Tokens, as well as the legality of tokenized royalties in specific jurisdictions.</li>
                <li><strong>Taxation risks:</strong> The potential imposition of tax liabilities or withholding taxes on transactions involving Song Tokens may affect your ability to realize gains or profits from your tokens. You are responsible for complying with all applicable tax obligations arising from your interactions with the Platform.</li>
              </ul>
              <p className="mb-4">
                MuseCoinX disclaims any liability for losses, damages, or penalties that may arise due to changes in applicable laws, regulations, or taxation affecting the use of Song Tokens or the royalty income generated by the Platform.
              </p>
            </div>

            {/* 5. Dispute Resolution and Governing Law */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                5. Dispute Resolution and Governing Law
              </h2>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">5.1 Arbitration Agreement</h3>
              <p className="mb-4">
                In the event of any dispute, controversy, or claim arising out of, relating to, or in connection with these Terms of Reference or the MuseCoinX Platform, including, but not limited to, claims arising from the formation, execution, interpretation, enforcement, breach, or termination of these Terms, such dispute shall be resolved exclusively through binding arbitration. The parties agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Binding Arbitration:</strong> All disputes will be subject to final and binding arbitration, and no party shall have the right to resort to court, except as otherwise provided in this section. The arbitration shall be governed by the Arbitration Act 1996 (as amended from time to time), or any successor legislation, and shall take place in accordance with the rules set out by the [Arbitration Body].
                </li>
                <li>
                  <strong>Arbitration Procedure:</strong> The arbitration will be conducted by a sole arbitrator who will be impartial and independent, appointed in accordance with the rules of the [Arbitration Body]. The arbitrator shall have the power to grant relief in equity and law, including the award of damages, specific performance, or injunctive relief, as appropriate.
                </li>
                <li>
                  <strong>Arbitration Location:</strong> The arbitration will be held in [City, United Kingdom], unless otherwise agreed by the parties. The language of the arbitration proceedings shall be English.
                </li>
                <li>
                  <strong>Cost of Arbitration:</strong> The parties shall each bear their own costs of the arbitration, except that the arbitrator may, in the final award, allocate costs, including the arbitrator's fees and expenses, to the party deemed to have acted unreasonably or in bad faith.
                </li>
                <li>
                  <strong>Confidentiality of Arbitration:</strong> The arbitration proceedings, including any hearings, submissions, or documents produced in the course of the arbitration, shall remain confidential unless disclosure is required by law or agreed by the parties in writing.
                </li>
                <li>
                  <strong>Exclusivity:</strong> The decision or award rendered by the arbitrator shall be final, binding, and enforceable in any court of competent jurisdiction. Arbitration is the exclusive means of dispute resolution, and both parties hereby waive their right to initiate or pursue any disputes in any other forum, including any court of law, except for actions to enforce the arbitration award.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">5.2 Jurisdiction and Venue</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Governing Law:</strong> These Terms of Reference, and any dispute arising therefrom, shall be governed by, and construed in accordance with, the laws of the United Kingdom without regard to its conflicts of law provisions. The parties expressly agree that the principles of English contract law and relevant statutory frameworks shall govern the interpretation and enforcement of these Terms.
                </li>
                <li>
                  <strong>Venue for Non-Arbitration Disputes:</strong> For any dispute, claim, or controversy not subject to arbitration under Section 4.1, the exclusive jurisdiction and venue for such dispute shall lie in the courts of England and Wales, and the parties irrevocably submit to the personal jurisdiction of such courts. The venue for such disputes shall be [City], England, and any action arising hereunder may only be brought before such courts.
                </li>
                <li>
                  <strong>Waiver of Jury Trial:</strong> To the fullest extent permissible by law, each party expressly waives any right to a jury trial in any court action arising under these Terms, and consents to the exclusive jurisdiction of the courts in England and Wales for non-arbitration matters.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">5.3 Injunctive Relief</h3>
              <p className="mb-4">
                Notwithstanding the provisions of this section, either party may seek injunctive relief in any court of competent jurisdiction, without the necessity of resorting to arbitration, to prevent or remedy an infringement of its rights or to protect its proprietary information, intellectual property, or other legal interests, subject to the jurisdiction and venue provisions outlined in Section 4.2.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">5.4 Class Action Waiver</h3>
              <p className="mb-4">
                The parties agree that any claim shall be resolved on an individual basis, and no party shall bring a class action, collective action, or representational action under these Terms of Reference. The parties waive the right to participate in any class or representative action, whether in arbitration or in court, and further agree that any arbitration shall be limited to the individual claims of the parties involved.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">5.5 Limitation Period</h3>
              <p className="mb-4">
                Any claim or action arising under these Terms of Reference must be brought within one (1) year from the date the claim or cause of action arises. Any claim or action not brought within such period shall be deemed waived, and any legal action based thereon shall be barred.
              </p>
            </div>

            {/* 6. Data Protection and Privacy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                6. Data Protection and Privacy
              </h2>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">6.1 Data Collection and Use</h3>
              <p className="mb-4">
                In compliance with applicable data protection laws, including but not limited to the General Data Protection Regulation (GDPR) (EU 2016/679), the Data Protection Act 2018 (United Kingdom), and any subsequent amendments or regulations that may be enacted (collectively referred to as the "Applicable Data Protection Laws"), MuseCoinX (hereinafter "we", "us", "our") is committed to safeguarding and respecting your privacy.
              </p>

              <h4 className="text-lg font-medium text-purple-200 mt-4 mb-2">Types of Personal Data Collected:</h4>
              <p className="mb-4">
                We collect personal data from users of the MuseCoinX Platform to provide and improve our services. This may include, but is not limited to, information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Identification data:</strong> Name, email address, contact details, date of birth, etc.</li>
                <li><strong>Financial data:</strong> Payment details, including billing information and transaction history.</li>
                <li><strong>Usage data:</strong> Information about how you access, interact with, and use the Platform, such as IP address, device type, operating system, browsing activity, and interaction with our services.</li>
                <li><strong>Identity verification data:</strong> Government-issued identification documents, in accordance with Know Your Customer (KYC) requirements.</li>
              </ul>

              <h4 className="text-lg font-medium text-purple-200 mt-4 mb-2">Purpose of Data Collection:</h4>
              <p className="mb-4">
                We collect and process personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To provide, operate, and maintain the MuseCoinX Platform, including tokenization and royalty distribution services.</li>
                <li>To facilitate and complete financial transactions, including royalty payouts and NFT purchases.</li>
                <li>To comply with legal obligations, including anti-money laundering (AML) and KYC requirements.</li>
                <li>To communicate with users regarding their account, transactions, and relevant updates about the Platform.</li>
                <li>To personalize and improve user experience, ensuring that content and services are relevant to individual preferences and interests.</li>
              </ul>

              <h4 className="text-lg font-medium text-purple-200 mt-4 mb-2">Legal Basis for Processing:</h4>
              <p className="mb-4">
                We process personal data based on one or more of the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Consent:</strong> Where you have explicitly consented to the processing of your data for a specific purpose.</li>
                <li><strong>Performance of a Contract:</strong> Where the processing is necessary to fulfill the terms of our agreement with you, such as providing access to the Platform and processing transactions.</li>
                <li><strong>Legal Obligation:</strong> Where processing is necessary to comply with legal requirements, such as for KYC and AML checks.</li>
                <li><strong>Legitimate Interests:</strong> Where we process your data to pursue our legitimate interests, such as enhancing our services and ensuring the security of our Platform, provided such interests don't override your rights and freedoms.</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">6.2 Data Storage and Transfer</h3>
              <h4 className="text-lg font-medium text-purple-200 mt-4 mb-2">Data Storage:</h4>
              <p className="mb-4">
                We store your personal data in secure, access-controlled facilities located within the United Kingdom or in other jurisdictions where MuseCoinX or its affiliates operate. We implement appropriate technical and organizational measures to ensure the security and confidentiality of your personal data, in compliance with Applicable Data Protection Laws.
              </p>

              <h4 className="text-lg font-medium text-purple-200 mt-4 mb-2">International Data Transfers:</h4>
              <p className="mb-4">
                Due to the global nature of our business, we may transfer your personal data to jurisdictions outside of the United Kingdom and the European Economic Area (EEA), including countries that may not offer the same level of data protection as the laws in your home country. However, we take necessary steps to ensure that any such transfers are compliant with applicable data protection laws, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Implementing standard contractual clauses (SCCs) or other legally acceptable transfer mechanisms approved by the European Commission or relevant regulatory authorities.</li>
                <li>In certain cases, we may rely on adequacy decisions by the European Commission, which recognize that specific countries provide an adequate level of data protection.</li>
              </ul>

              <h4 className="text-lg font-medium text-purple-200 mt-4 mb-2">Your Consent to Data Transfers:</h4>
              <p className="mb-4">
                By using the MuseCoinX Platform, you expressly consent to the transfer of your personal data as described herein, including to countries outside of the EEA that may not have the same level of data protection laws as your country of residence.
              </p>

              <h4 className="text-lg font-medium text-purple-200 mt-4 mb-2">Data Retention:</h4>
              <p className="mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, as required by law, or to resolve disputes, enforce our agreements, or as otherwise permitted by applicable laws. The retention period may vary depending on the nature of the data and our legal obligations.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">6.3 Data Security</h3>
              <p className="mb-4">
                We employ a range of technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. These measures include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Encryption of sensitive data during transmission and storage.</li>
                <li>Access controls to limit who can view and modify personal data.</li>
                <li>Regular audits and assessments of our data protection practices.</li>
              </ul>
              <p className="mb-4">
                However, despite our efforts to maintain the highest level of security, no data transmission or storage system can be guaranteed to be 100% secure. We cannot guarantee the security of your personal data during transmission over the internet or the MuseCoinX Platform, and you use the Platform at your own risk.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">6.4 Your Rights</h3>
              <p className="mb-4">
                In accordance with Applicable Data Protection Laws, you have the following rights in relation to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Right to Access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data.</li>
                <li><strong>Right to Erasure:</strong> In certain circumstances, you may request the deletion of your personal data, subject to any legal obligations we have to retain the data.</li>
                <li><strong>Right to Restrict Processing:</strong> You may request that we restrict the processing of your personal data in certain circumstances, such as when you contest the accuracy of the data.</li>
                <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data, particularly when we rely on legitimate interests as the legal basis for processing.</li>
                <li><strong>Right to Data Portability:</strong> You may request a copy of your personal data in a structured, commonly used, and machine-readable format, and to transfer such data to another service provider.</li>
                <li><strong>Right to Withdraw Consent:</strong> If we process your personal data based on consent, you have the right to withdraw that consent at any time, although such withdrawal won't affect the lawfulness of processing carried out before the withdrawal.</li>
              </ul>
              <p className="mb-4">
                To exercise any of these rights, please contact us using the details provided in our Privacy Policy. We will respond to your request in accordance with Applicable Data Protection Laws.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">6.5 Cookies and Tracking Technologies</h3>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your experience with the MuseCoinX Platform. Cookies are small text files that are stored on your device when you access our Platform. These technologies allow us to track user activity, improve the functionality of the Platform, and analyze usage trends. By using the MuseCoinX Platform, you consent to our use of cookies in accordance with our Cookie Policy.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">6.6 Third-Party Data Sharing</h3>
              <p className="mb-4">
                We may share your personal data with third parties in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> We may engage third-party vendors and service providers to assist with operating the Platform, processing payments, or performing other functions. These third parties will only have access to your personal data as necessary to perform their services and are obligated to keep your data confidential.</li>
                <li><strong>Legal Compliance:</strong> We may disclose your personal data if required by law or in response to a valid request by a governmental authority, including to comply with national security or law enforcement requirements.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of the transaction. We will provide notice of such changes in accordance with the terms of this Policy.</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">6.7 Updates to the Privacy Policy</h3>
              <p className="mb-4">
                We reserve the right to update or modify this Privacy Policy at any time. Any changes to this Policy will be posted on this page, and the date of the latest revision will be indicated at the top. It is your responsibility to review this Privacy Policy periodically for any updates or changes. By continuing to use the MuseCoinX Platform after any updates or modifications to this Policy, you consent to the terms of the revised Privacy Policy.
              </p>
            </div>

            {/* 7. Miscellaneous Provisions */}
            {/* 7. Miscellaneous Provisions */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                7. Miscellaneous Provisions
              </h2>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">7.1 Force Majeure</h3>
              <p className="mb-4">
                Neither MuseCoinX nor any other party involved in the performance of these Terms shall be liable for failure or delay in the performance of any of their respective obligations hereunder, if such failure or delay is caused by events beyond their reasonable control, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Acts of God:</strong> Natural events such as floods, earthquakes, fires, or other catastrophes that are outside the control of the parties involved.</li>
                <li><strong>War and Hostilities:</strong> Acts of war, invasion, terrorist activities, armed conflict, or similar events, whether declared or not, including but not limited to civil disturbances, riots, or insurrection.</li>
                <li><strong>Government Actions:</strong> Any act, decree, regulation, law, or restriction imposed by governmental bodies or authorities that interferes with the ability to perform obligations under these Terms.</li>
                <li><strong>Technical Failures:</strong> Events such as system failures, software malfunctions, cyberattacks, or any technical difficulties or breaches that prevent the operation or availability of the MuseCoinX Platform, which could result in delays or non-performance of services.</li>
              </ul>
              <p className="mb-4">
                In the event of such a force majeure event, the party affected by the delay shall notify the other party promptly in writing, and the time for performance of the affected obligation(s) shall be extended for the duration of the force majeure event.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">7.2 Severability</h3>
              <p className="mb-4">
                If any provision of these Terms of Reference is found by a court of competent jurisdiction to be invalid, illegal, or unenforceable in any respect, the validity, legality, and enforceability of the remaining provisions shall not be affected in any way. In such an event, the parties agree that the court shall endeavor to interpret and apply the intention of the original provision to the fullest extent permitted by law, while modifying such provision as necessary to render it enforceable. The remainder of these Terms shall continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">7.3 Modification of Terms</h3>
              <p className="mb-4">
                MuseCoinX reserves the right to amend, modify, or update these Terms of Reference at any time, in its sole discretion, without prior notice. Any such amendments or modifications will be posted on the MuseCoinX Platform, and the date of the latest revision will be indicated at the top of the document. The revised Terms will be effective immediately upon such posting. Your continued use of the MuseCoinX Platform following the posting of updated Terms will be deemed as your acceptance of the modified Terms.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Notice of Changes:</strong> Users will be informed of any material changes to these Terms through notifications on the Platform, via email, or other appropriate means, ensuring that you are aware of any significant modifications to your rights and obligations.</li>
                <li><strong>Binding Agreement:</strong> By continuing to use the MuseCoinX Platform, you acknowledge and agree that your use of the Platform shall be governed by the most current version of these Terms, and that your continued use constitutes acceptance of the revised Terms.</li>
              </ul>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-300">
                  For further details on the services and functionality provided, please refer to the official website: <a href="https://www.musecoinx.com" className="text-purple-400 hover:underline">www.musecoinx.com</a>.
                </p>
                <div className="mt-8">
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
        </div>
      </div>

    </section>
  );
};

export default TermsOfReference;