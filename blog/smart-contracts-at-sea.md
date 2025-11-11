# Smart Contracts at Sea 


A furniture retailer in Johannesburg orders $60,000 from a Vietnamese supplier. The buyer won't pay before shipment. The seller won't ship without payment assurance. A bank guarantee costs $1,200 eating 2% of the value as cost. Importers and exporters around the world face this choice everyday: take the risk, accept only cash-upfront buyers risk lose business, or price uncompetitively to cover bank fees. 

Global merchandise trade totals $24.5 trillion annually. Less than 20% uses bank-intermediated guarantees, with the remaining operating on open account basis with no institutional protection. Moreover, prohibitive fees make guarantees economical only for high-value shipments, pricing out majority of the world trade. Large enterprises dominate the use of bank guarantees.

Stablecoins, zero-knowledge cryptography, and digitized shipping infrastructure are converging to enable intermediation with Smart contracts. Removing intermediaries radically shifts the economics; Smart contract based LCs cost 70-90% cheaper and if escrowed funds are earning DeFi yield, an LC could end up making money rather than costing money.  

---

### Contents

1. [The Trust Problem](#1-the-trust-problem)
2. [Existing Solutions](#2-existing-solutions)
3. [Why Smart Contracts Now](#3-Why-Smart-Contracts-now)
4. [The Programmable LC](#4-The-Programmable-LC)
5. [Economics](#5-economics)
6. [Vision: Programmable Trade Infrastructure](#6-vision-programmable-trade-infrastructure)

**Appendices:** [eBL Providers](#appendix-a) | [Sample LC](#appendix-b) | [UCP 600 Checklist](#appendix-c)

---

### 1. The Trust Problem

Buyers do not want to pay before making sure the goods will be shipped, sellers dont want to send off their goods without knowing they will get paid. What makes it worse is importers and exporters are in different countries, with different legal jurisdictions, and different legal recourse.  

### 2. Existing Solutions 

#### 2.1 Trust thy Partner

Importers and Exporters have used and continue to use some or combination of these to mitigate this risk: 
- Importer visits factory at time of sale or loading. 
- Exporter demands down payment and remaining once goods have been shipped.  
- Buyer pays upfront and hopes for the best. 
- Seller has open account with reputable buyer.  
All of these options resemble one party or both taking a risk in some way.  



#### 2.2 Trust the bank   

When neither party wants to take the risk, they use a third party service, usually a bank, with trade finance products, to intermediate and guarantee the trade. They ensure the seller only gets paid once they have shipped the goods and handed over ownership of them. In return for a fee, the importers and exporters buy "trust". 

The most widely used instrument is the [Letter of Credit (LC)](https://en.wikipedia.org/wiki/Letter_of_credit). It is a bank guarantee that payment follows verified shipment. The buyer's bank guarantees payment once shipping documents are presented, signalling transfer of ownership of goods. Seller gets certainty of payment if they ship. Buyer gets certainty goods were shipped before parting with thier money.


#### 2.3 Blockchain-Based Approaches

Blockchain's promise to revolutionize trade has been pursued for nearly a decade, with mixed results. TradeLens, a Maersk-IBM initiative, shut down in 2022 after carriers refused to join a competitor-led network. Contour digitized the LC workflow but remained bank-centric, requiring all parties to join a closed system.

Electronic Bills of Lading (eBLs) digital ownership documents that transfer instantly instead of via courier represent a key building block. Tokenized eBLs could enable fully programmable trade finance: ownership transfers on-chain, smart contracts release payment automatically, no manual verification needed. eTEU is the closest to fulfilling this vision with their tokenized eBLs on XDC network, and their trade finance platform on top. 

However, two critical barriers remain: adoption sits below 10% globally, and existing platforms (WAVE, CargoX, Bolero, eTEU) operate on isolated, closed networks with no interoperability. *See Appendix A for full list of eBL providers.*


### 3. Why Smart Contracts now  
 
Smart contracts (self-executing programs that live on blockchains when predefined conditions are met) can replicate the traditional LC: locking funds, verifying shipment and releasing payment without intermediaries. 

Smart contracts eliminate intermediaries through two key defining properties: 

- **Noncustodial:** they can hold funds without any party being the official "Custodian". No intermediary holds the money. 
- **Trustless**: Once a smart contract program has been deployed and two transacting parties choose to execute through it, neither party -nor any third party- can interfere with its execution logic. Release confitions are enforced by code. 

The "trustless" property has an economic security anchor. For example Ethereum's $120 billion in staked capital makes network attacks cost-prohibitive for typical trade values ($40,000-$100,000). Once deployed, execution follows code, not human discretion.

Blockchain approaches made trade-offs: permissioned networks (TradeLens, Contour) achieved privacy but sacrificed composability. Tokenized eBL platforms (WAVE, eTEU) enabled digital ownership transfer but remain on isolated chains with minimal DeFi access. 

Three infrastructure breakthroughs converged in 2023-2024 to enable LCs that are simultaneously private, yield-bearing, and verified cryptographically without human examination:

#### 3.1 Stablecoins Adoption

Stablecoins are programmable money. They have reached [$295 billion](https://app.rwa.xyz/) in market capitalization. USDC and USDT settle billions daily on Ethereum, Solana, and other public chains. Regulatory clarity is emerging: the EU's MiCA framework, Singapore's Payment Services Act, and US GENIUS Act provide pathways for institutional adoption. Paypal, JPMorgan, Stripe are issuing stablecoins. Money is now programmable, liquid, and blockchain-native.

Public chains unlock composable DeFi (Decentralised Finance) modular financial primitives that snap together like Lego blocks. Locked stablecoins earn 4-8% annualied yield on average in protocols like [Aave](https://app.aave.com/markets/) and [Morpho](https://app.morpho.org/ethereum/earn).  This composability impossible on closed networks means escrows don't just hold funds, they put capital to work.


| **Protocol** | **Stablecoin** | **Yield (APY)** |
|--------------|----------------|-----------------|
| Aave (Ethereum) | USDC | 3.77% |
| Aave (Ethereum) | USDT | 3.77% |
| Morpho (Ethereum) | USDC | 3.8% - 19% |


*Representative yields as of 2nd Nov 2024. Rates vary based on market conditions. Check links for live rates.*


#### 3.2 Private Verification and Execution 

While public chains offers fully composable and access to defi yields, it is also transparent. Every transacion is visible and trackable. A non-starter for real trade. On other hand, closed blockchains like Hyperledger, Corda and resembles walled gardens. Funds cant access yields and bank intermediaries are replaced for chain gatekeepers. 

The recent breakthrough is a category of chains that offer confidential exeuction on public chains. They represent the best of both worlds, combining confidentialit with public composability. For example [Aztec](https://aztec.network/) and [Miden](https://miden.xyz/) are Ethereum L2s (Layer 2 networks blockchains built on top of Ethereum that inherit its security while offering additional features)accessing [$85.4bn of Defi TVL](https://defillama.com/chain/ethereum) (Total value Locked) but allowing for private smart contract execuction. Both these blockchains are now in testnet phase and are due to go on mainnet in coming months. 

Moreover, further advancements in cryptography enable private verification of real world shipping data. Two technologies in particular: [zkTLS](https://bwetzel.medium.com/tls-oracles-liberating-private-web-data-with-cryptography-e66e5fad7c34) and [ZKPs](https://en.wikipedia.org/wiki/Zero-knowledge_proof): 

**zkTLS (Zero-Knowledge Transport Layer Security)** allows a smart contract to verify that data was retrieved from a trusted HTTPS API (e.g. Maersk or MSC) without revealing the data itself. This makes it possible to verify shipping events such as a container being loaded or released directly from carrier systems, using their existing APIs, without requiring them to integrate with blockchains or issue eBLs.

**ZKPs (Zero-Knowledge Proofs)** allow a party to prove possession or validity of structured data such as identity documents, certificates of origin, or invoices, without revealing the underlying information. This enables selective disclosure: for example, proving that an invoice was signed by a registered EU exporter, or that a certificate matches a trade document, without exposing the full content.


Together, these tools enable smart contracts to verify real-world trade data privately and settle transactions publicly without exposing sensitive information. All the while offering compliance with GDPR and AML required for real word transactions. 


#### 3.3 Shipping Goes Digital

Shipping has resisted digitization for decades. But the infrastructure is now reaching escape velocity; driven by regulation, industry coordination, and legal certainty.

**Regulatory Push:**
- **[EU eIDAS 2.0](https://en.wikipedia.org/wiki/EIDAS)** (2024): Digital signatures legally equivalent to handwritten, mandatory for e-invoices in the EU. 
- **[UK Electronic Trade Documents Act (2023)](https://www.legislation.gov.uk/ukpga/2023/38/contents/enacted)**: Makes electronic bills of lading legally equivalent to paper. 
- [**Singapore Electronic Transactions Act**(amended 2021)](https://www.imda.gov.sg/regulations-and-licensing-listing/electronic-transactions-act-and-regulations): Recognizes transferable electronic records including eBLs
- **[UNCITRAL Model Law on Electronic Transferable Records (MLETR)](https://en.wikipedia.org/wiki/UNCITRAL_Model_Law_on_Electronic_Transferable_Records)**: Adopted by 11 countries, providing legal framework for eBLs. 

**Industry Coordination:**
- **[DCSA (Digital Container Shipping Association)](https://dcsa.org/)** representing 85% of container capacity): Standardized eBL data formats, carriers [pledge 100% adoption by 2030](https://dcsa.org/get-involved/100-percent-ebl)
- [**TradeTrust**](https://www.tradetrust.io/) (Singapore): Open framework for verifiable trade documents. government-backed. 
- **[ICC Digital Standards Initiative](https://dsi.iccwbo.org/)**: QR-verifiable Certificates of Origin (India, UAE, 40+ chambers)

Smart contracts can verify shipments today using zkTLS-proven API data, PKI-signed invoices, and QR-verified certificates. This allows us to have a smart contract based LC today without waiting for eBL adoption. 


### 4. The Escrow Smart Contract

The proposed smart contract LC is an escrow smart contract that holds funds, and releases based on conditions. It replicates a sight LC, with no intermediaries, and without manual document examination, and at a fraction of the cost and time.

#### 4.1 How It Works 

   1. Both parties negotiate escrow release conditions (recipient, amount, HS code, shipping route..etc)
   2. Buyer locks stablecoins in escrow  
   3. Seller ships goods (SWB or BOL) 
   4. Seller generates and submits proof of shipment 
   5. Proof of shipments unlocks funds 
    
    
![Copy of ob flow 2](https://hackmd.io/_uploads/HkIldzL1Zl.png)


This escrow primitive can adapt its parameters to cater for different use cases. A cautious exporter can require funds locked before production or just before shipment. A confident seller might ship first, but withhold documents release until funds are escrowed. When funds need to be locked for a duration of time, they can earn yield by the minute while sitting in the escrow. 

#### 4.2 Proof of Shipment 

The smart contract performs the same document checks a bank examiner would, but automatically and cryptographically. 

In traditional Letters of Credit, banks manually examine documents Bill of Lading, commercial invoice, certificate of origin, packing list. They verify signatures, cross-check fields and confirm consistency. 

**What Gets Verified:**

| **Document** | **Key Checks** |
|--------------|----------------|
| **Bill of Lading / Sea Waybill** | On-board date, consignee, ports, carrier signature |
| **Commercial Invoice** | Seller/buyer match, amount ≤ limit, goods description |
| **Certificate of Origin** | Chamber-issued, verifiable, matches invoice |
| **Packing List** | Quantities match invoice |

*Full examination checklist as per the UCP600 rules in appendix B*

**The verifiability Gradient:**

Shipping documents range from unverifiable to cryptographically bulletproof:

- **Paper/PDFs**: Easily forged, require manual inspection
- **PKI-signed documents**: Cryptographically authentic but unstructured (EU eIDAS signatures, chamber-issued certificates)
- **PKI- Signed Structured e-documents**: Machine-readable + cryptographically verified signature (XML invoices, electronic Bills of Lading, COOs)
- **Tokenized eBLs**: Blockchain-anchored, ownership transferrable on-chain (WAVE, CargoX, TradeTrust)

Tokenized documents are ideal by definition, they're already on-chain, programmable, and portable. But we don't need to wait for universal tokenization. Smart contracts can verify shipments today given the levels of digitization in the industry, adapting verification methods to each document type. 

**Current documents we can work with:**

| **Document** | **Format Today** | **Verification Method** | **Examples** |
|--------------|-----------------|------------------------|--------------|
| **Bill of Lading / Sea Waybill** |  <br>Carrier API |  <br>zkTLS-proven API calls | <br>Maersk APIs |
| **Commercial Invoice** | PKI-signed (XML/JSON) | Digital signature + LEI validation | EU eIDAS, PEPPOL |
| **Packing List** | PKI-signed document | Signature verification | eIDAS-compliant docs |
| **Certificate of Origin** | QR-verifiable e-COO<br>Chamber digital cert | QR verification<br>PKI signature | ICC Digital CoO (India, UAE)<br>TradeTrust |

**Creating the Proof:**

A "proof of shipment" is a cryptographic artifact that packages all verification components: zkTLS-proven carrier API data, PKI-signed invoices, QR-verified certificates into a single attestation that unlocks payment. The smart contract performs the same checks a bank would, but executes them within a zero-knowledge proof computation:

- Does the consignee entity match the eBL/SWB party?
- Does the PKI signature validate against the signed invoice?
- Does the invoice information match the escrow's release conditions?
- Do quantities, goods descriptions, and amounts align across documents?

These checks are encapsulated in a single program, proven using ZKPs, and submitted as a cryptographic proof that the escrow smart contract verifies before releasing funds. The proof confirms that all conditions were met without revealing the underlying document contents, preserving commercial privacy while enabling trustless settlement.


### 5. Economics 

#### 5.1 LCs today

- Costs 0.5%-1% in advanced economies, but can go up to 4-5% in developing countries. 
- LCs generate around $5Bn in fees 
- 80–90% of global trade on open account; only <8% uses LCs
- Most consumers of LCs are large corporations ~73%
- Majority of LC's are issued in America, EU, Asia. Many African nations are undererved in relation to trade volume. 
-Avg. Container Value**: ~$54,000 per TEU(20ft equivalent unit) or $108,000 for a 40ft Container
_[Port Economics]_, _[CEPR]_, _[Credence Research]_, _[IFC, Prima Trade]_


#### 5.2 Smart Contract Calculations

When executing a smart contract LC, three cost components are involved:

- **Gas Fees:** Transaction execution fees paid to network operators (Ethereum, Aztec, etc.). These follow market pricing, more complex computations require more resources from validating nodes and cost more. Typical LC execution: $15-25 Fixed cost (since our Escrow computation doesnt change with value)
- **Smart Contract Insurance:** Coverage against smart contract vulnerabilities and exploits. Nascent but maturing services backed by institutional-grade underwriters (e.g., Nexus Mutual, backed by Lloyd's-level insurance capital). Typical rate: ~3% of locked value annually, or 0.25% for a 30-day lock.
- **Yield:** This is yield earned as profits on the locked up capital in the escrow. This is earned by the block (in Ethereum ~12s) meaning every 12s a fraction of an annualized yield is added as gains. Current rates are around 5-8% APY for USDC stablecoins. 

**Cost Comparison: Average 40ft Container ($108,000)** (30-day transit)

| **Traditional LC** | **Escrow Smart Contract** | **with DeFi** |
|---|---|---|
| @ 2% Cost | Gas Fees + Smart Contract Insurance (~3% annual) | 1 month lockup @ 8% USDC yield |
| -$2,160 | -$290<br>(87% cheaper) | +$430 |

The smart contract approach coupled with Defi flips the economics, making it pay the parties rather than costing them. 

### 6. Vision: Programmable Trade Infrastructure


- Open-source code and composable primitives that anyone can build on without permission. 
- Confidential execution with compliance KYB, AML..etc. 
- Built with composability to allow permissionless innovation such invoice financing, supply chain tools, and verification methods built freely on top. 
- While banks may not need to do document checking in the future, their role remains as credit provision. As [Bank of England Governor Andrew Bailey noted in September 2025](https://finance.yahoo.com/news/bank-england-governor-says-stablecoins-190537019.html), money holding can be separated from credit provision in a stablecoin world. Traditional trade finance can participate in this protocol. 


We will never know if the timing for this is right, but the cost of not finding out is too big to ignore. The pieces are in place, the economics speak for themself and the tech is ready to be used. If you want to contribute or if you are building in this space, would love to hear from you please [get in touch!](mailto:mohammed@attestedfrontiers.xyz)

---

### Appendix A: List of eBL issuers 


| **Provider** | **Standard/Protocol** | **Network Type** | **Notable Features** |
|--------------|----------------------|------------------|---------------------|
| **[WAVE BL](https://www.wavebl.com/)** | Proprietary blockchain | Private/permissioned | First mover, acquired by MSC (2022) |
| **[CargoX](https://cargox.io/)** | Ethereum-based (public) | Public blockchain | Smart B/L, used by Egypt's Suez Canal |
| **[Bolero](https://www.bolero.net/)** | Bolero Rulebook (legal framework) | Private network | Established 1998, bank-backed consortium |
| **[eTEU](https://eteu.co.uk/)** | XDC Network | Public blockchain | Tokenized eBLs + trade finance platform |
| **[TradeTrust](https://www.tradetrust.io/)** | Open Attestation Framework | Open standard | Singapore govt-backed, interoperable framework |
| **[edoxOnline](https://www.edoxonline.com/)** | Proprietary | Private network | Focuses on bulk/charter shipments |
| **[GSBN](https://www.gsbn.trade/)** | Hyperledger Fabric | Consortium blockchain | Carrier-led: CMA CGM, COSCO, Evergreen, OOCL |
| **[IQAX](https://www.iqax.com/)** | Corda (R3) | Private/permissioned | Enterprise focus, bank integrations |

--- 

### Appendix B: Bank LC Sample

A simplified MT700 (the SWIFT message format banks use to transmit Letters of Credit) message showing the structure of a traditional LC. 
```
40A: FORM OF DOCUMENTARY CREDIT
IRREVOCABLE

20: DOCUMENTARY CREDIT NUMBER
LC-2025-VN-12345

31C: DATE OF ISSUE                    31D: DATE AND PLACE OF EXPIRY
2025-10-01                            2025-12-15, HO CHI MINH CITY, VIETNAM

→ 50: APPLICANT (BUYER)
JOHANNESBURG FURNITURE IMPORTS LTD
123 MARKET STREET
JOHANNESBURG 2001, SOUTH AFRICA
LEI: 529900ABCD1234567890

→ 59: BENEFICIARY (SELLER)
SAIGON WOODWORKS MANUFACTURING CO.
456 INDUSTRIAL ROAD
HO CHI MINH CITY, VIETNAM
LEI: 529900WXYZ0987654321

→ 32B: CURRENCY CODE, AMOUNT
USD 60,000.00

→ 44A: LOADING PORT                   → 44B: DESTINATION PORT
HO CHI MINH CITY PORT, VIETNAM       DURBAN PORT, SOUTH AFRICA

→ 44C: LATEST DATE OF SHIPMENT
2025-11-15

43P: PARTIAL SHIPMENTS               43T: TRANSHIPMENT
NOT ALLOWED                          ALLOWED

→ 45A: DESCRIPTION OF GOODS
WOODEN FURNITURE ITEMS, HS CODE 9403
- DINING TABLES (QTY: 50 UNITS)
- CHAIRS (QTY: 200 UNITS)
- CABINETS (QTY: 30 UNITS)
AS PER PROFORMA INVOICE NO. PI-2025-1001 DATED 2025-09-15

→ 46A: DOCUMENTS REQUIRED
- SIGNED COMMERCIAL INVOICE IN TRIPLICATE SHOWING FOB HO CHI MINH CITY
- FULL SET (3/3) OF CLEAN ON BOARD OCEAN BILLS OF LADING MADE OUT TO 
  ORDER, MARKED FREIGHT PREPAID, AND NOTIFY APPLICANT
- PACKING LIST IN DUPLICATE SHOWING WEIGHT, MEASUREMENTS, MARKS & NUMBERS
- CERTIFICATE OF ORIGIN ISSUED BY VIETNAM CHAMBER OF COMMERCE CERTIFYING 
  GOODS OF VIETNAMESE ORIGIN

47A: ADDITIONAL CONDITIONS
- ALL DOCUMENTS MUST BE PRESENTED WITHIN 21 DAYS AFTER SHIPMENT DATE
- ALL CHARGES OUTSIDE SOUTH AFRICA FOR ACCOUNT OF BENEFICIARY
- DOCUMENTS MUST SHOW LC NUMBER
- THIRD PARTY DOCUMENTS ACCEPTABLE EXCEPT INVOICE
```

---


### Appendix C: Standard Checklist for LCs Examination

UCP 600 (Uniform Customs and Practice for Documentary Credits) is the ICC standard governing how banks examine Letters of Credit. MT700 is the SWIFT message format for transmitting LCs; UCP600 provides the examination rules.

| Document | Check Item | Requirement |
|----------|-----------|-------------|
| **Bill of Lading / Sea Waybill** | Consignee Details | Must match LC's designated recipient |
| | Goods Description | Must not conflict with LC or invoice |
| | Port Details | Loading and discharge ports match LC |
| | On-board Date | Goods loaded within LC shipment deadline |
| | Originality | Full set of originals (negotiable BL) or sole original (SWB) |
| | Carrier Signature | Signed by carrier, master, or named agent |
| **Commercial Invoice** | Parties | Issued by beneficiary to applicant as named in LC |
| | Goods Description | Must exactly match LC terms |
| | Amount | Invoice amount must not exceed credit limit |
| | Quantities | Must align with packing list |
| | Signature | Signed and dated if LC requires |
| **Certificate of Origin** | Issuing Authority | Must be issued by authorized body (e.g., Chamber of Commerce) |
| | Country of Origin | Must state origin country matching LC |
| | Goods Description | Must align with invoice/LC |
| | Originality | At least one original with stamps and seals |
| **Packing List** | Quantities | Weights, volumes, package counts match invoice |
| | Goods Description | Must align with invoice and LC |
| | Marks & Numbers | Container identification consistent across documents |

*Note: Banks examine documents "on their face"—verifying consistency and completeness of paperwork, not physical inspection of goods.*

