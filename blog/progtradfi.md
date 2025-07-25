# The Road to ProgTradFi 
 
**Traditional finance isn’t being replaced—it’s being programmed.** The real disruption isn’t a new financial system—it’s the ability to codify existing legal and financial agreements as modular, composable code that settles according to legal infrastructure already trusted by markets and regulators.  

**The prize?** Global financial intermediation currently costs over [$7 trillion per year](https://www.mckinsey.com/industries/financial-services/our-insights/global-banking-annual-review). Programmable, confidential contracts collapse that cost by automating trust, settlement, and enforcement at the protocol layer.

**All it takes is Public key infrastructure**—already embedded in passports, bank APIs, and national ID systems—is the only trust root needed to authenticate signatures, validate claims, and trigger smart contracts. No mass onboarding. No paradigm shift required. Just cryptographic enforcement of familiar user daily flows.

This is ProgTradFi— Not a new system, just a radically thinner one. 

This blog walks through the technologies, integrations, and regulatory shifts that make ProgTradFi possible—and shows how they’re already being used to program finance from within by builders today. 

## Contents

- [Tech in Finance: 1800s–Today](#Tech-in-Finance-1800s-today)  
- [What Crypto Actually Delivered](#What-Crypto-Actually-Delivered)  
- [Crypto meet A2A](#Crypto-meet-A2A)   
- [From Real World Assets to Real World Finance](#From-Real-World-Assets-to-Real-World-Finance)  
  - [PKI Maximalism](#PKI-maximalism)  
  - [Confidential smart contracts are here](#Confidential-Smart-Contracts-Are-Here)  
  - [Regulatory clarity is the best its ever been](#Regulatory-Clarity-Is-The-Best-Its-Ever-Been)  
- [Conclusions](#Conclusions)
- [Appendix: Programmable Escrows in Trade Finance](#Appendix-Programmable-Escrows-in-Trade-Finance)


## Tech in Finance: 1800s-today

There is a pattern of new technology radically affecting economics and consumer behaviour, and giving rise to new financial products not possible before. 

**1871: Telegraph → Wire transfers**  
Western Union launched the first wire transfer by layering financial services on top of existing communication infrastructure.

**1960s: Computers → ATMs, Visa, SWIFT**  
Mainframe computing enabled batch processing at scale. The result? Global card networks and interbank messaging that still power today's financial system. Visa 1958 / Mastercard 1966

**2010s: Mobile + APIs → Fintech explosion**  

API-driven architecture enabled lightweight clients to communicate securely with backend servers, meeting the economic need for modular interaction between personal devices and large computing systems. This architecture underpins modern embedded finance and the global push toward zero-cost transfers, seen in services like Revolut, Venmo, and mobile wallets. Crucially, it depends on public key cryptography—specifically TLS and the widely adopted [X.509v3](https://en.wikipedia.org/wiki/X.509) certificate standard—along with a robust trust infrastructure to ensure secure, scalable communication.

Zero-cost, instant transfers are now common. Terms like "account-to-account (A2A) payments", "embedded finance", "decoupled era" reflect broad infrastructure-led innovation. Open banking APIs coupled with real-time payment systems like India’s UPI, Brazil’s PIX, and the UK’s Faster Payments offer a low-cost alternative to cards, which typically carry interchange fees of 0.2%–2%. According to [Capgemini’s 2025 World Payments Report](https://www.capgemini.com/gb-en/news/press-releases/account-to-account-payments-and-instant-payments-set-to-spark-new-wave-of-innovation/), 37% of card payment in Europe will become A2A in just two years. 


## What Crypto Actually Delivered

**DeFi Summer** 

Bluechips like Aave, Curve, Uniswap, USDT gave us programmable finance for the first time through lending, swapping, staking and borrowing. 

Curve.fi with a simple UI exceeded [$20bn in TVL](https://defillama.com/protocol/curve-finance) by the end of 2021, exceeding Revolut's [$7.4bn in deposits](https://www.businessofapps.com/data/revolut-statistics/) at that time. 


![Screenshot from 2025-07-08 09-09-06](https://hackmd.io/_uploads/Sy1Jq9Rrel.png)


**Stablecoins demand growing.** 

Stablecoins are instant, permissionless, programmable, and they abstract away regulatory complexity. According to [RWA.xyz](https://rwa.xyz), stablecoins make up 90% of all Real World Assets on-chain:
- Non-stable RWA TVL: $25bn
- Stablecoin TVL: $241bn


Personal deposits in global financial system were [$65 trillion in 2023](https://www.mckinsey.com/industries/financial-services/our-insights/global-banking-annual-review). If stablecoins are the future it will grow a lot from here. 

An example of international demand for digital dollars can be seen in this USD payout option in a local Syrian app [Kazawallet](https://kazawallet.com): 

![Screenshot from 2025-07-08 15-23-57](https://hackmd.io/_uploads/BkhVpi9Sxx.png)


**Automatic yield became trustless.** 

Yield in DeFi works by staking tokens to a smart contract that puts them to productive use, mainly through lending and trading. The appeal lies in earning trustless yield—there's no need to trust a counterparty to follow the rules, though smart contract risk remains. Yield types and risk profiles have also evolved. Modern DeFi has moved beyond early design flaws that led to ponzinomics, LVR, and MEV, toward intents-based execution, LVR-resistant AMMs, and fast on-chain trading (e.g., Hyperliquid).

## Crypto meet A2A

While crypto evangelists spent years promising to "replace" traditional finance, the real revolution is happening quietly in the integration layer. There are four types of flows that we have identified in existence today: 

#### 1. Pay Merchants in Fiat (From Crypto)
**User holds stablecoins → Pays fiat to normie merchants**
Two approaches deliver this:
1. **Noncustodial crypto cards**: Noncustodial crypto cards that let users spend stablecoins as fiat. ([gnosis pay](https://gnosispay.com/card), [bleap](https://www.bleap.finance/card/crypto-card))
2. **Proxy pay**: [P2P.me](https://p2p.me/) Users pay market makers in stables, who instantly pay Indian merchants via UPI locally. 

#### 2. Pay Crypto Merchants (From Fiat)
**Normie user → Crypto-native merchant**

An example of a crypto-native merchant with a compelling product for normie userbases is [Polymarket](https://polymarket.com/), which is a predictions marketplace. Services that cater to this are: 
- **Card checkout**: [Moonpay](https://www.moonpay.com/) which offers card-based onramping. 
- **A2A checkout**: Services like [Inflow Pay](https://docs.inflowpay.com/docs/welcome-to-inflow) in the EU use Open Banking APIs and integrate directly with stablecoin issuer Circle. [Blindpay](https://blindpay.com/docs/getting-started/overview) aggregates local on/offramping service providers in an abstracted flow.

#### 3. Send-to-Self
**Fiat → Onramp → User-controlled smart contract**

[Picnic](https://usepicnic.com/en) -the distributor of Gnosis Pay cards in Brazil- offers direct PIX to USDC on Gnosis Card in one step. They use [Avenia](https://integration-guide.avenia.io/docs/Usecases/pix2Stable&onChainTransfer) as the service provider. 

Having an easy onramp/offramp for oneself will be more embedded. See [rebind](https://rebind.co/) for example of embedded onramping within app. Perhaps the endgame for this are native tokenized bank accounts. 

Regulatory clarity is highest here. It's just enhanced onramping. First-party onramping is simpler than third-party onramping from a regulatory point of view. 


### 4. Fiat-settled-Escrow
**Smart contract escrow ↔ Offchain proof**

- [ZKP2P](https://zkp2p.xyz): Lock stablecoins in escrow, prove fiat payment, claim tokens
- **Domain markets**: Trade web2 assets with crypto escrows

Escrows can be hybrid - one side onchain, the other offchain. Either lock a representative digital asset in the escrow onchain and pay fiat with proof, or lock stablecoins onchain and deliver the asset offchain with proof.`The breakthrough is that users don’t need to fully onramp into crypto to benefit from the efficiency and programmability of escrow contracts.



## From Real World Assets to Real World Finance 

RWA mostly works by a regulated entity taking custody of asset and issuing tokens. We wish to go beyond, by tokenizing legal agreements and financial flows into leaner products that deliver legally equivelant financial services. Necessary components are mature and practical today; Public Key Infrastructure (PKI), confidential smart contracts, verifiable data,and established regulation. 

### PKI maximalism

Public Key Infrastructure solves the simple question: who does this public key belong to? It allows for [attestations](https://knot-group.github.io/wiki/building/attestations/index.html) which are verifiable claims. (eg. claim: I am a french citizen, verify: zk proof of french passport RSA signature on my name). Established PKIs include: 

[**eIDAS 2.0**](https://www.mwe.com/insights/europe-eidas-2-0-privacy-anti-money-laundering-impact/): EU-wide digital identity framework where [qualified](https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eSignature+FAQ) digital signatures equal handwritten signatures legally. (see [EUDI](https://digital-strategy.ec.europa.eu/en/policies/eudi-regulation) and the ID wallet [pilot project](https://digital-strategy.ec.europa.eu/en/policies/eudi-wallet-implementation))

**[Open Banking (UK)](https://www.openbanking.org.uk/directory/)**: Banks' PKI infrastructure has been battle-tested since 2017 across UK, EU, and Australia. It is a public key registry for banks and fintech third party providers ([TPP](https://www.openbanking.org.uk/glossary/third-party-provider/)).

[**ICAO**](https://www.icao.int/Security/FAL/PKD/Pages/default.aspx): public key registry for digitally signed passports 

**other National IDs**: [Aadhar (india)](https://uidai.gov.in/en/), [SingPass (Singapore)](https://www.singpass.gov.sg/main/). 

Adopting PKI means its the only thing that needs to go onchain as the root to authenticate signatures in smart contracts. This root can then authenticate any signature from any registered public key over documents and data. 

### Confidential Smart Contracts Are Here

Executing smart contracts in private is technicaly possible today. 

Human behaviour has so far demanded confidentiality in financial dealings. See [this blog](https://www.bytebacklaw.com/2016/09/a-brief-history-of-bank-privacy/#:~:text=Rather%20bank%20privacy%20is%20genetically,concepts%20later%20enshrined%20in%20GLB) for history on banking secrecy. We also came across this engish law case [Tournier vs National Provincial and Union Bank of England 1924](https://en.wikipedia.org/wiki/Tournier_v_National_Provincial_and_Union_Bank_of_England#:~:text=given%20by%20Bankes%20LJ) that confirmed the right to secrecy back then. However, it is also clear we are in the era of eroding secrecy in favor of countering terrorism and money laundering. (eg. PATRIOT, FATCA..etc). Today's financial products must balance both requirements. private Smart contracts are capable of delivering on both compliance and user privacy. 


[**Aztec Network**](https://aztec.network/): Privacy-preserving rollup on Ethereum enabling confidential financial agreements. Currently in testnet nearing mainnet launch. This allows for smart contract logic to be executed just like any smart contract blockchain but with privacy baked in at the protocol layer.   

**[zkTLS](https://www.nascent.xyz/idea/cryptos-airtag-moment)**: is an umbrella term for proving real world private data (eg. bank account) in smart contract context. It is also known as web proofs. There are different techniques used to achieve the goal of verifying private data in smart contracts:
- Trusted proxy: https requests are routed through a trusted proxy who attests to the authenticity of data. 
- [TEE](https://a16zcrypto.com/posts/article/trusted-execution-environments-tees-primer/): run the request through a Trusted Execution Envirnment. The trust is the hardware. 
- MPC (Multiparty computation): A prominent approach is [TLSN](https://tlsnotary.org/) but need a network of notaries with economic security. A project attempting this is [Opacity](https://www.opacity.network/). 

**Client-side proving**: Noir language and library primitives make zero-knowledge proofs practical for application developers. Check mobile benchmarks [here by mopro](https://zkmopro.org/blog/noir-integraion/#benchmark).

You can now verify sensitive financial data in smart contracts without exposing it to the blockchain or counterparties.

### Regulatory Clarity Is The Best It's Ever Been

Licensed onramping exists in virtually every jurisdiction.  Onramping services (eg. Ramp, Coinbase, MoonPay) have solved fiat<->crypto compliance. Stablecoin regulation is heading toward clarity in major markets, thereby eliminating uncertainty for developers and market participants. 

[GENIUS Act - June 2025](https://en.wikipedia.org/wiki/GENIUS_Act): The U.S. Senate passed the GENIUS Act, creating clear federal rules for stablecoins, including 1:1 reserves and a path for state and federal licensing.

[SEC on DeFi - May 2025](https://www.sec.gov/rules-regulations/2024/02/further-definition-part-regular-business-definition-dealer-government-securities-dealer): The SEC clarified that non-custodial DeFi protocols like AMMs or lending markets do not require broker-dealer licenses by default.


[MiCA - 2024](https://en.wikipedia.org/wiki/Markets_in_Crypto-Assets): Markets in Crypto-Assets (MiCA) gives stablecoin issuers a “passport” to operate across all 27 EU countries. First truly unified crypto framework at continental scale.

There has never been a better time to build blockchain financial products than now. Developers today have a lot more clarity than the early defi days of 2019. 


## Conclusions  

The most interesting products don’t require end users to touch crypto at all—just professionals coordinating with programmable contracts and verifiable Web2 proofs abstracted in good frontends. 

Total financial intermeidation globally [$410 trillion, with $7 trillion revenue generated](https://www.mckinsey.com/industries/financial-services/our-insights/global-banking-annual-review). Programmable financial products fractionalize costs in a lot of the flows, thereby unlocking one of biggest efficiency gains in modern finance.    

The key unlock is composability: combining stablecoins, attestations, smart contracts, and identity to build financial products that are leaner, faster, and legally sound. B2B might be the real P2P. 

Payments are just the tip of the spear; the real value lies in deeper layers—escrow, trade finance, risk-sharing—where crypto meets real-world enforceability. We don’t need to wait for Web2 to evolve. The rails are already here.
 
The fintech era was enabled by consumer hardware + public key cryptography, the programmable finance era is enabled by distributed computing and zk cryptography. 
 



## Appendix: Programmable Escrows in Trade Finance

In internatoinal trade, a buyer is attempting to purchase from a seller in another country. The dilemma is trust. If the buyer sends money first, then the seller might not ship the goods. If the seller ships the goods and sign on ownership change, then the buyer might never pay. 

Trade finance products like [Letters of Credit (LCs)](https://en.wikipedia.org/wiki/Letter_of_credit) or [Cash Against Documents (CAD)](https://en.wikipedia.org/wiki/Documentary_collection) ) exist to solve the trust problem. So what do programmable versions of these look like? 


### Letter of Credit 

Traditional Letter of Credit Process:

1. Buyer deposits funds with bank
2. Bank issues letter of credit (a prommise to pay if goods are shipped)
3. Seller ships goods
4. Seller presents shipping documents 
5. Bank releases payment
Cost: ~1% of transaction value

ProgTradFi Letter of Credit:

1. Buyer locks USDC in smart contract
2. Seller ships goods and uploads [Bill of Lading](https://en.wikipedia.org/wiki/Bill_of_lading)
3. Smart contract automatically releases payment upon confirming 

![image](https://hackmd.io/_uploads/ryk_QSeLlx.png)



Cost: ~0.01% of transaction value

The Bill of Lading (BOL) is the crucial ingredient here. Since it is a bearer instrument, transferring it physically equates to legal transfer of ownership. And hence it is the point that the bank is obliged to release the funds to seller in the traditional flow. For the automated flow to work, modern companies like [CargoX](https://cargox.io/) are issuing eBOLs which are transferred electronically, and [eTEU](https://eteu.co.uk) are even tokenizing the eBOLs. This means transferring the token equates to legal transfer of ownership. Although tokenizing eBOLs is still early, continuing this trend would enable [$24.4 trillion](https://www.wto.org/english/res_e/statis_e/world_trade_statistics_e.htm) in annual merchandise trade volume on programmable rails. 

### Cash Against Documents

Traditional CAD Process:

1. Seller ships goods and deposits BoL with a bank or escrow
2. Buyer pays the invoice
3. BoL is released to buyer

ProgTradFi CAD Process (no stablecoin conversion):

1. Seller uploads BoL to a smart contract-based escrow
2. Buyer pays via Open Banking (e.g., InflowPay)
3. Payment proof releases the BoL from escro
Explain importnce of BoL 

![image](https://hackmd.io/_uploads/BJxGutRBle.png)


Verifiable Web2 payments (e.g., open banking APIs) eliminate the need for users to onramp into stablecoins to benefit from the programmability cost reduction without managing hot wallets or tokens. In CAD the seller still takes some risk if the buyer disappears. If stronger guarantees are required, an LC is preferable. In both flows, only one side of the escrow needs to be tokenized, highlighting how hybrid designs can reduce onboarding friction and deliver on security. 


 
 