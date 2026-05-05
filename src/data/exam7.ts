import type { Exam } from '../domain/models/Exam';

export const EXAM_7: Exam = {
  title: "Mock Exam 7",
  subtitle: "Recall & Mechanics — Named Lists, Annex Controls, Certification Audit Numerics",
  sections: [
    {
      type: "standalone",
      questions: [
        // ============================================================
        // PART A — NAMED LISTS & TAXONOMIES
        // ============================================================

        // Annex C.2 — AI-related organizational objectives
        {
          question: "Annex C.2 of ISO/IEC 42001 lists potential AI-related organizational objectives. Which of the following is NOT one of them?",
          options: [
            "Maintainability",
            "Profitability",
            "Environmental impact"
          ],
          correct: 1,
          explanation: "Annex C.2 lists eleven objectives: Accountability, AI expertise, Availability and quality of training and test data, Environmental impact, Fairness, Maintainability, Privacy, Robustness, Safety, Security, and Transparency and explainability. Profitability is not listed; the standard's objectives focus on responsible AI rather than financial performance."
        },
        {
          question: "Which Annex C.2 objective specifically addresses an AI system's ability to perform reliably under adverse, unexpected, or unusual operating conditions?",
          options: [
            "Reliability",
            "Robustness",
            "Resilience"
          ],
          correct: 1,
          explanation: "Annex C.2.8 names Robustness as the objective covering performance under adverse or unexpected conditions. ISO/IEC 42001 uses Robustness rather than Reliability or Resilience for this concept."
        },

        // Annex C.3 — risk sources
        {
          question: "Annex C.3 of ISO/IEC 42001 enumerates seven AI risk sources. Which of the following is one of them?",
          options: [
            "Vendor lock-in",
            "Technology readiness",
            "Reputational damage"
          ],
          correct: 1,
          explanation: "The seven Annex C.3 risk sources are: Complexity of environment, Lack of transparency and explainability, Level of automation, Risk sources related to machine learning, System hardware issues, System life cycle issues, and Technology readiness. Vendor lock-in and reputational damage are consequences, not sources listed in C.3."
        },
        {
          question: "Under Annex C.3, which risk source captures the difficulty in understanding how an AI system reaches its outputs?",
          options: [
            "C.3.1 Complexity of environment",
            "C.3.2 Lack of transparency and explainability",
            "C.3.4 Risk sources related to machine learning"
          ],
          correct: 1,
          explanation: "C.3.2 is named exactly 'Lack of transparency and explainability'. Complexity of environment (C.3.1) refers to the operational context, and ML-related sources (C.3.4) cover training/data-driven concerns rather than opacity directly."
        },

        // ISO/IEC 23894 Table 1 — 8 principles of AI risk management
        {
          question: "ISO/IEC 23894 Table 1 lists eight principles of AI risk management. Which of the following is NOT one of them?",
          options: [
            "Customized",
            "Auditable",
            "Inclusive"
          ],
          correct: 1,
          explanation: "The eight principles are: Integrated, Structured and comprehensive, Customized, Inclusive, Dynamic, Best available information, Human and cultural factors, and Continual improvement. Auditable is not listed."
        },

        // 5 principles of effective communication (Day 3)
        {
          question: "PECB Day 3 material identifies five principles of effective communication for AIMS. They are:",
          options: [
            "Transparency, Accuracy, Consistency, Timeliness, Relevance",
            "Transparency, Appropriateness, Credibility, Responsiveness, Clarity",
            "Openness, Accountability, Reliability, Empathy, Conciseness"
          ],
          correct: 1,
          explanation: "The five principles of effective communication are Transparency, Appropriateness, Credibility, Responsiveness, and Clarity."
        },

        // Kirkpatrick 4 levels
        {
          question: "Kirkpatrick's four-level training evaluation model, used in AIMS competence evaluation, has the following levels in order:",
          options: [
            "Awareness, Knowledge, Application, Outcome",
            "Reaction, Learning, Behavior, Results",
            "Understanding, Practice, Performance, Impact"
          ],
          correct: 1,
          explanation: "Kirkpatrick's four levels are Reaction (how learners felt), Learning (knowledge/skill acquired), Behavior (transfer to the workplace), and Results (organizational outcomes)."
        },

        // NIST AI RMF
        {
          question: "The NIST AI Risk Management Framework (AI RMF) Core defines four key functions. They are:",
          options: [
            "Identify, Protect, Detect, Respond",
            "Govern, Map, Measure, Manage",
            "Plan, Do, Check, Act"
          ],
          correct: 1,
          explanation: "NIST AI RMF Core consists of Govern, Map, Measure, and Manage. Identify/Protect/Detect/Respond are functions of the NIST Cybersecurity Framework, not AI RMF; PDCA is the management-system improvement cycle."
        },

        // EU AI Act 4 tiers
        {
          question: "The EU AI Act classifies AI systems into four risk categories. Which classification is used for AI systems that pose threats considered incompatible with EU values, such as social scoring by public authorities?",
          options: [
            "High risk",
            "Unacceptable risk",
            "Critical risk"
          ],
          correct: 1,
          explanation: "The four EU AI Act categories are Unacceptable risk, High risk, Low (limited) risk, and Minimal risk. Social scoring by public authorities, subliminal manipulation, and exploitation of vulnerabilities fall under Unacceptable risk and are prohibited."
        },
        {
          question: "Which EU AI Act article specifically requires accuracy, robustness, and cybersecurity for high-risk AI systems?",
          options: [
            "Article 9",
            "Article 13",
            "Article 15"
          ],
          correct: 2,
          explanation: "Article 15 covers accuracy, robustness, and cybersecurity requirements for high-risk AI systems. Article 13 addresses transparency and provision of information to users; Article 9 addresses risk management system requirements."
        },

        // Four committees
        {
          question: "PECB Day 1 identifies four key AIMS committees mapped to organizational levels. Which committee operates at the tactical level and acts as the liaison between the operational team and management?",
          options: [
            "Executive committee",
            "Steering committee",
            "AI committee"
          ],
          correct: 2,
          explanation: "The Executive and Steering committees both operate at the strategic level. The AI committee is tactical and serves as liaison. The Operational committee operates at the operational level, ensuring effectiveness of AIMS processes and AI controls."
        },

        // 22989 stakeholder taxonomy
        {
          question: "Under the ISO/IEC 22989 AI stakeholder taxonomy, which role is responsible for integrating AI components into a larger system context?",
          options: [
            "AI producer",
            "AI partner — AI system integrator",
            "AI customer"
          ],
          correct: 1,
          explanation: "The 22989 taxonomy defines AI partner sub-roles including AI system integrator, Data provider, AI evaluator, and AI auditor. The AI producer develops models; the AI customer uses outputs."
        },
        {
          question: "Which of the following pairs correctly matches ISO/IEC 22989 AI stakeholder roles to their sub-roles?",
          options: [
            "AI provider — AI platform provider, AI product or service provider",
            "AI subject — AI evaluator, AI auditor",
            "AI customer — Model designer, Model implementer"
          ],
          correct: 0,
          explanation: "AI provider sub-roles are AI platform provider and AI product or service provider. AI subjects are data subjects and other affected subjects. Model designer and implementer are sub-roles of the AI producer (AI developer), not the AI customer."
        },

        // Maturity levels
        {
          question: "PECB gap analysis uses a six-level maturity model. The level immediately above 'Defined' is:",
          options: [
            "Optimized",
            "Quantitatively managed",
            "Managed"
          ],
          correct: 1,
          explanation: "The six levels are 0 Nonexistent, 1 Initial, 2 Managed, 3 Defined, 4 Quantitatively managed, 5 Optimized. Quantitatively managed sits above Defined; Optimized is the highest."
        },

        // Risk treatment options
        {
          question: "ISO 31000 / ISO/IEC 23894 list seven risk treatment options. Which of the following is NOT one of them?",
          options: [
            "Avoiding the risk by deciding not to start or continue with the activity",
            "Outsourcing the AI system to remove the organization from regulatory scope",
            "Retaining the risk by informed decision"
          ],
          correct: 1,
          explanation: "The seven treatment options are: avoidance; risk taking/increase to pursue an opportunity; removing the source; changing likelihood; changing consequences; sharing (e.g. via insurance/contracts); retention by informed decision. Outsourcing does not remove regulatory accountability and is not a listed treatment option in this form."
        },

        // AI lifecycle stages (22989)
        {
          question: "The ISO/IEC 22989 AI system life cycle model defines stages including Inception, Design and development, Verification and validation, Deployment, Operation and monitoring, Re-evaluation, and:",
          options: [
            "Decommissioning",
            "Retirement",
            "Termination"
          ],
          correct: 1,
          explanation: "ISO/IEC 22989 names the final stage Retirement. While decommissioning is the practical activity, the term used in the standard's lifecycle model is Retirement."
        },

        // Documented information pyramid
        {
          question: "The four-level documented information pyramid for AIMS, from top to bottom, is:",
          options: [
            "Policies/SoA → Processes and AI controls → Procedures → Records",
            "Records → Procedures → Processes → Policies",
            "Standards → Policies → Procedures → Records"
          ],
          correct: 0,
          explanation: "Level 1 is the governance framework (policies, SoA, AIMS scope); Level 2 is processes and AI controls; Level 3 is procedures with detailed task instructions; Level 4 is records (evidence of conformity)."
        },

        // SoA 6Ws
        {
          question: "PECB Day 2 recommends describing each control in the Statement of Applicability using the 6Ws method. The 6Ws are:",
          options: [
            "Who, What, When, Where, Why, How",
            "Who, What, Why, Where, When, Whom",
            "What, Why, When, Where, Who, Witness"
          ],
          correct: 0,
          explanation: "The 6Ws are Who, What, When, Where, Why, How — used as a structured prompt to ensure each SoA entry covers the necessary descriptive dimensions."
        },

        // 8Ds problem solving
        {
          question: "In the 8 Disciplines (8Ds) problem-solving approach used for AIMS nonconformity treatment, what is the focus of step D3?",
          options: [
            "Identify potential root causes",
            "Develop an interim containment plan",
            "Choose and verify Permanent Corrective Actions"
          ],
          correct: 1,
          explanation: "The 8Ds in order: D1 Use a team approach; D2 Describe the nonconformity (using 5W2H); D3 Develop interim containment plan; D4 Identify potential root causes; D5 Choose and verify PCAs; D6 Implement and validate PCAs; D7 Prevent recurrence; D8 Congratulate the team."
        },

        // 5W2H
        {
          question: "Within the 8Ds methodology, step D2 (describe the nonconformity) uses the 5W2H technique. The two H's stand for:",
          options: [
            "How and How much",
            "How and How many",
            "How long and How often"
          ],
          correct: 1,
          explanation: "5W2H = Who, What, Where, When, Why, How, How many. The two H's are How and How many."
        },

        // Generative AI subtypes
        {
          question: "Day 1 material identifies three subtypes of generative AI models. They are:",
          options: [
            "Transformers, RNNs, CNNs",
            "Diffusion models, Variational autoencoders (VAEs), Generative adversarial networks (GANs)",
            "Symbolic models, Subsymbolic models, Hybrid models"
          ],
          correct: 1,
          explanation: "The three named generative AI subtypes are diffusion models, VAEs, and GANs. GANs feature a generator paired with a discriminator. Transformers, RNNs, and CNNs are general neural-network architectures, not specifically a generative-AI taxonomy."
        },

        // AI by functionality
        {
          question: "The classification of AI by functionality identifies four types. Which of the following is the correct order from least to most advanced?",
          options: [
            "Limited memory → Reactive machines → Theory of mind → Self-aware",
            "Reactive machines → Limited memory → Theory of mind → Self-aware",
            "Reactive machines → Theory of mind → Limited memory → Self-aware"
          ],
          correct: 1,
          explanation: "Reactive machines (e.g., Deep Blue) cannot use past experience; Limited memory (e.g., autonomous vehicles, Siri) uses recent past data; Theory of mind systems would understand emotions and beliefs; Self-aware AI is theoretical."
        },

        // ML types
        {
          question: "ISO/IEC 22989 distinguishes four ML paradigms: supervised, semi-supervised, unsupervised, and reinforcement learning. Which paradigm uses a small amount of labeled data alongside a large amount of unlabeled data?",
          options: [
            "Supervised learning",
            "Semi-supervised learning",
            "Unsupervised learning"
          ],
          correct: 1,
          explanation: "Semi-supervised learning combines a small labeled dataset with a much larger unlabeled dataset, exploiting both signal types. Supervised needs all labels; unsupervised uses none."
        },

        // ============================================================
        // PART B — ANNEX A CONTROL IDS
        // ============================================================

        // A.2.x policies
        {
          question: "An organization conducts a planned-interval review of its AI policy. Which Annex A control is being implemented?",
          options: [
            "A.2.2 AI policy",
            "A.2.3 Alignment with other organizational policies",
            "A.2.4 Review of the AI policy"
          ],
          correct: 2,
          explanation: "A.2.4 specifically addresses periodic review of the AI policy at planned intervals, with management-approved review responsibility. A.2.2 is the policy itself; A.2.3 covers alignment with other policies (privacy, security, quality)."
        },

        // A.3.3
        {
          question: "Annex A.3.3 'Reporting of concerns' requires the organization to provide a mechanism with several specific properties. Which of the following is required by A.3.3?",
          options: [
            "Reports must be submitted only by named individuals to ensure accountability",
            "The mechanism must provide options for confidentiality and anonymity, and protection against reprisal",
            "All reports must be escalated directly to top management within 24 hours"
          ],
          correct: 1,
          explanation: "B.3.3 implementation guidance requires confidentiality/anonymity options and reprisal protection; the mechanism must be staffed by qualified persons, have investigation/escalation powers, and respond in an appropriate timeframe. Forced identification or fixed escalation timelines are not part of the control."
        },

        // A.4.x resources
        {
          question: "Annex A.4 covers resources for AI systems and lists five resource types. Which of the following is one of them?",
          options: [
            "Marketing resources",
            "Tooling resources",
            "Procurement resources"
          ],
          correct: 1,
          explanation: "The five resource types under A.4 are: AI system components (A.4.2), Data resources (A.4.3), Tooling resources (A.4.4), System and computing resources (A.4.5), and Human resources (A.4.6). Marketing and procurement are not separate Annex A.4 categories."
        },

        // A.5.3
        {
          question: "Annex B.5.3 (Documentation of AI system impact assessments) recommends that documented impact assessments be retained for at least:",
          options: [
            "1 year",
            "3 years",
            "5 years"
          ],
          correct: 2,
          explanation: "B.5.3 implementation guidance recommends retention of AI system impact assessment documentation for at least five years."
        },

        // A.5.4
        {
          question: "Annex A.5.4 addresses assessing AI system impacts on individuals and groups. Which of the following groups is explicitly highlighted in the implementation guidance as warranting particular protection?",
          options: [
            "Shareholders and investors",
            "Children, impaired persons, the elderly, and workers",
            "Internal auditors and certification bodies"
          ],
          correct: 1,
          explanation: "B.5.4 specifically calls out children, impaired persons, the elderly, and workers as groups requiring particular attention in impact assessments, with areas including fairness, accountability, transparency, security/privacy, safety/health, and human rights."
        },

        // A.5.5
        {
          question: "Which Annex A control addresses societal impacts such as deepfakes, election influence, and criminal-justice biases?",
          options: [
            "A.5.4 Assessing AI system impacts on individuals or groups",
            "A.5.5 Assessing societal impacts of AI systems",
            "A.8.5 Information for interested parties"
          ],
          correct: 1,
          explanation: "A.5.5 specifically covers societal impacts: environment, economy, government, health and safety, and norms/traditions/culture/values. Deepfakes, election influence, and criminal-justice biases are listed as example concerns."
        },

        // A.6.2.6
        {
          question: "Annex A.6.2.6 addresses AI system operation and monitoring. Which two phenomena are explicitly named in the implementation guidance as requiring detection during continuous learning?",
          options: [
            "Catastrophic forgetting and overfitting",
            "Concept drift and data drift",
            "Vanishing gradients and exploding gradients"
          ],
          correct: 1,
          explanation: "B.6.2.6 names concept drift detection and data drift monitoring as ongoing operational concerns. Catastrophic forgetting, overfitting, and gradient pathologies are training-time phenomena not specifically called out by A.6.2.6."
        },

        // A.6.2.8
        {
          question: "Annex A.6.2.8 (AI system recording of event logs) imposes additional logging requirements for which specific class of system?",
          options: [
            "Generative AI systems",
            "Biometric identification systems",
            "Autonomous vehicle systems"
          ],
          correct: 1,
          explanation: "B.6.2.8 calls out biometric identification systems as having additional logging requirements beyond general traceability and out-of-range output recording."
        },

        // A.7.4 (data quality, ISO/IEC 25024)
        {
          question: "Annex B.7.4 (Quality of data for AI systems) explicitly references which external standard for data quality definitions?",
          options: [
            "ISO/IEC 25010",
            "ISO/IEC 25024",
            "ISO 8000-2"
          ],
          correct: 1,
          explanation: "B.7.4 references ISO/IEC 25024 for data quality measures. ISO/IEC 25010 covers software product quality (different domain); ISO 8000-2 is referenced under A.7.5 for data provenance, not A.7.4."
        },

        // A.7.5 (data provenance, ISO 8000-2)
        {
          question: "Which Annex A control addresses data provenance and references ISO 8000-2 for the content of provenance records?",
          options: [
            "A.7.3 Acquisition of data",
            "A.7.5 Data provenance",
            "A.7.6 Data preparation"
          ],
          correct: 1,
          explanation: "A.7.5 (Data provenance) is the control; B.7.5 references ISO 8000-2 as the standard defining data provenance record content (creation, update, transcription, abstraction, validation, transferring of control, etc.)."
        },

        // A.8.4
        {
          question: "An organization defines incident notification timelines, identifies authorities to notify, and integrates with broader incident management. Which Annex A control is being implemented?",
          options: [
            "A.8.2 System documentation and information for users",
            "A.8.3 External reporting",
            "A.8.4 Communication of incidents"
          ],
          correct: 2,
          explanation: "A.8.4 covers communication of incidents — types of incidents, notification timelines, authorities to notify, and integration with the broader incident-management process (cross-referencing ISO/IEC 27001 and 27701)."
        },

        // A.10.2 (PII roles, ISO/IEC 29100)
        {
          question: "Annex B.10.2 (Allocating responsibilities) references which standard for PII controller, joint PII controller, and PII processor roles?",
          options: [
            "ISO/IEC 27701",
            "ISO/IEC 29100",
            "ISO/IEC 27018"
          ],
          correct: 1,
          explanation: "B.10.2 references ISO/IEC 29100 for the PII roles taxonomy. ISO/IEC 27001 is also referenced for PII privacy controls, but the role definitions come from 29100."
        },

        // A.10.3
        {
          question: "Annex A.10.3 (Suppliers) requires which of the following with respect to AI suppliers?",
          options: [
            "All suppliers must hold ISO/IEC 42001 certification themselves",
            "Supplier selection requirements, ongoing monitoring, and corrective action requirements must be defined",
            "Suppliers must be located within the same jurisdiction as the customer organization"
          ],
          correct: 1,
          explanation: "B.10.3 requires defining supplier selection requirements, ongoing monitoring, and corrective action requirements — covering datasets, algorithms, models, software libraries, and complete AI systems. Certification or jurisdictional co-location are not requirements of the control."
        },

        // ============================================================
        // PART C — DOMAIN 6: CERT AUDIT & IMPROVEMENT MECHANICS
        // ============================================================

        // Stage 1 = ~30%
        {
          question: "What is the primary purpose of a Stage 1 audit, and approximately what proportion of total audit time does it typically consume?",
          options: [
            "Verify implementation effectiveness; approximately 70% of total audit time",
            "Verify the design of the management system; approximately 30% of total audit time",
            "Verify continual improvement; approximately 50% of total audit time"
          ],
          correct: 1,
          explanation: "Stage 1 verifies the design of the AIMS — that documented information, internal audits, and management reviews exist and are aligned with the standard. Effectiveness is verified in Stage 2. Stage 1 typically accounts for ~30% of total audit time."
        },

        // Stage 1 timing relative to Stage 2
        {
          question: "How much time typically elapses between the Stage 1 and Stage 2 audits?",
          options: [
            "1–2 days",
            "2–4 weeks",
            "3–6 months"
          ],
          correct: 1,
          explanation: "Stage 1 is conducted approximately 2–4 weeks before Stage 2, allowing the organization to address documentation gaps and confirm readiness for the on-site effectiveness assessment."
        },

        // Audit follow-up timing
        {
          question: "Following a certification audit that identifies major nonconformities, when is the audit follow-up typically conducted, and how long does it usually last?",
          options: [
            "Within 1 week, lasting 3–5 days",
            "4–12 weeks after the initial audit, usually one day",
            "Within 6 months, lasting one full week"
          ],
          correct: 1,
          explanation: "Audit follow-up is typically conducted 4–12 weeks after the initial audit and usually takes one day. Its purpose is to validate that action plans and corrective actions for nonconformities have been effectively implemented."
        },

        // 6-month NC verification limit
        {
          question: "Per ISO/IEC 17021-1, if implementation of corrections for major nonconformities cannot be verified within what time frame after the last day of Stage 2, must Stage 2 be conducted again?",
          options: [
            "3 months",
            "6 months",
            "12 months"
          ],
          correct: 1,
          explanation: "ISO/IEC 17021-1 clause 9.5.3.2 requires another Stage 2 if major nonconformity corrections cannot be verified within 6 months of the last day of the original Stage 2."
        },

        // Action plan deadline
        {
          question: "What is the typical deadline range that certification bodies set for an organization to submit corrective action plans following an audit?",
          options: [
            "1–5 days",
            "10–60 days",
            "90–180 days"
          ],
          correct: 1,
          explanation: "Certification bodies typically set a 10–60 day deadline. Failure to submit results in no certification recommendation; top management may accept the risk with documented justification."
        },

        // 1-year cooling-off
        {
          question: "How long should an internal auditor wait before being assigned to audit a process or function in which they previously held an operational role?",
          options: [
            "Six months",
            "One year",
            "Two years"
          ],
          correct: 1,
          explanation: "A one-year cooling-off period applies before an individual assumes the internal-auditor role for a process they previously operated, to preserve independence and objectivity."
        },

        // 2 NC categories
        {
          question: "ISO/IEC 42001 audits classify nonconformities into which categories?",
          options: [
            "Critical, Major, and Minor",
            "Major and Minor",
            "Significant, Material, Minor, and Observation"
          ],
          correct: 1,
          explanation: "Nonconformities are classified into only two categories: Major and Minor. Observations and opportunities for improvement are not nonconformities. Some frameworks use 'Critical' but ISO/IEC 17021-1-aligned audits use Major/Minor."
        },

        // 4 cert recommendation outcomes
        {
          question: "The Stage 2 audit team can issue one of how many possible certification recommendations, and which of the following is one of them?",
          options: [
            "Three possible recommendations; one of them is 'Provisional certification with annual re-audit'",
            "Four possible recommendations; one of them is 'Conditional upon corrective action plans without prior visit'",
            "Two possible recommendations; one of them is 'Recommend or reject with appeal'"
          ],
          correct: 1,
          explanation: "There are four possible recommendations: (1) recommendation for certification, (2) conditional upon corrective action plans without prior visit, (3) conditional with prior visit, (4) unfavorable. The auditor only recommends; the certification committee makes the final decision."
        },

        // Auditor rejection reasons
        {
          question: "Per ISO/IEC 17021-1 clause 9.2.3.5, an auditee may reject a proposed auditor for which of the following reasons?",
          options: [
            "The auditor has previously audited a competitor in the same industry",
            "The auditor previously audited the organization in question, creating a familiarity threat",
            "The auditor is from a different country than the auditee"
          ],
          correct: 1,
          explanation: "Permitted rejection reasons include conflict of interest, previous unprofessional conduct, lack of required security clearance, or having previously audited the organization. Auditing a competitor is not by itself grounds; nationality is not a basis for rejection."
        },

        // Correction vs corrective vs preventive
        {
          question: "An AI system produced an erroneous output; the team rolled back the model immediately, then ran a root-cause analysis to update the validation pipeline so the issue cannot recur. The rollback represents a ___ and the validation-pipeline update represents a ___.",
          options: [
            "preventive action; corrective action",
            "correction; corrective action",
            "corrective action; preventive action"
          ],
          correct: 1,
          explanation: "Per ISO 9000: a Correction (3.12.3) eliminates a detected nonconformity (the rollback). A Corrective action (3.12.2) eliminates the cause to prevent recurrence (the pipeline update). A Preventive action (3.12.1) addresses a potential, not detected, nonconformity."
        },
        {
          question: "Which of the following accurately distinguishes corrective action from preventive action?",
          options: [
            "Corrective action prevents recurrence of an existing nonconformity; preventive action prevents occurrence of a potential nonconformity",
            "Corrective action is taken at management's discretion; preventive action is mandatory under ISO/IEC 42001",
            "Corrective action applies to processes; preventive action applies only to products and services"
          ],
          correct: 0,
          explanation: "Corrective action addresses the cause of a nonconformity that has already occurred (prevent recurrence). Preventive action addresses the cause of a potential nonconformity (prevent occurrence). Both are required by the standard where appropriate."
        },

        // ISO/IEC 17011 vs 17021-1 vs 17024 vs 17065 vs 17030
        {
          question: "Which standard establishes general requirements for accreditation bodies that accredit conformity assessment bodies?",
          options: [
            "ISO/IEC 17011",
            "ISO/IEC 17021-1",
            "ISO/IEC 17065"
          ],
          correct: 0,
          explanation: "ISO/IEC 17011 governs accreditation bodies (e.g., IAS, ANAB, UKAS). ISO/IEC 17021-1 governs certification bodies that audit/certify management systems. ISO/IEC 17065 governs certification of products, processes, and services."
        },
        {
          question: "An organization is selecting a body to certify its individual employees as AIMS practitioners. Which standard applies to that certification body?",
          options: [
            "ISO/IEC 17021-1",
            "ISO/IEC 17024",
            "ISO/IEC 17065"
          ],
          correct: 1,
          explanation: "ISO/IEC 17024 covers certification of persons. ISO/IEC 17021-1 is for management-system certification (e.g., the certifying body that issues the AIMS certificate). ISO/IEC 17065 is for products/processes/services."
        },
        {
          question: "Following AIMS certification, an organization wishes to display a certification logo on its product packaging. Which standard governs this use of marks, and what does it permit?",
          options: [
            "ISO/IEC 17030 — permitted, provided the mark is at least 25 mm tall",
            "ISO/IEC 17030 — applying the mark to product or packaging in a manner implying product certification is NOT permitted",
            "ISO/IEC 17021-1 — permitted on any marketing materials including packaging"
          ],
          correct: 1,
          explanation: "ISO/IEC 17030 covers third-party marks. Per ISO/IEC 17021-1 8.3.1/8.3.2, the certified auditee may use the logo for marketing but cannot apply it to product or packaging in ways that imply product certification. Management-system certification covers the system, not the product."
        },

        // Surveillance audit elements
        {
          question: "Surveillance audits per ISO/IEC 17021-1 clause 9.6.2.2 must include several specific elements. Which of the following is required?",
          options: [
            "A full re-audit of the entire management system once per year",
            "Review of internal audits, management review, complaints handling, and use of certification marks",
            "Issuance of a new certificate following each surveillance"
          ],
          correct: 1,
          explanation: "Required surveillance elements include: internal audits and management review status, review of actions on previous nonconformities, complaints handling, effectiveness against objectives, continual improvement progress, operational control, review of changes, and use of marks/references to certification. Surveillance is partial, not full re-audit; the certificate is reissued only at recertification."
        },

        // Combined audit
        {
          question: "An organization holding ISO 9001 and ISO/IEC 27001 certifications wishes to add ISO/IEC 42001. What is the most accurate statement about combined audits?",
          options: [
            "Combined audits are prohibited; each management system must be audited separately by different teams",
            "Combined audits are possible and may reduce duplication, considering the integrated nature of management systems and shared common clauses",
            "Combined audits are mandatory once an organization holds two or more management-system certifications"
          ],
          correct: 1,
          explanation: "Combined audits are explicitly permitted and encouraged as a selection consideration when choosing a certification body. They are neither prohibited nor mandatory. They leverage the shared Harmonized Structure (HLS) clauses across MSS standards."
        },

        // Audit charter
        {
          question: "An internal-audit charter is the formal document establishing the audit function. Which of the following is one of its required components?",
          options: [
            "A statement of independence and the reporting relationship",
            "A list of all internal-audit findings from the prior three years",
            "Detailed audit-program schedules and individual auditor assignments"
          ],
          correct: 0,
          explanation: "The audit charter defines: (1) purpose and scope, (2) activities, (3) roles and responsibilities, (4) access authorization, and (5) a statement on independence. Specific findings and detailed schedules are operational artifacts, not charter content."
        },

        // PECB credential ladder + CPDs
        {
          question: "The PECB ISO/IEC 42001 Lead Implementer credential requires which combination of professional experience?",
          options: [
            "2 years total experience (1 year in AI), 200 hours of management-system project work",
            "5 years total experience (2 years in AI), 300 hours of management-system project work",
            "10 years total experience (7 years in AI), 1,000 hours of management-system project work"
          ],
          correct: 1,
          explanation: "Lead Implementer requires 5 years total experience (2 in AI) and 300 hours of project activity. Implementer requires 2/1/200; Senior Lead Implementer requires 10/7/1,000. Provisional Implementer has no experience requirement."
        },
        {
          question: "What are the CPD (Continuing Professional Development) requirements to maintain the PECB ISO/IEC 42001 Lead Implementer credential?",
          options: [
            "20 CPD credits per year, 60 over a 3-year cycle",
            "30 CPD credits per year, 90 over a 3-year cycle",
            "60 CPD credits per year, 180 over a 3-year cycle"
          ],
          correct: 1,
          explanation: "Lead Implementer requires 30 CPDs per year and 90 over a 3-year cycle. Implementer is 20/60; Senior Lead Implementer is 60/180."
        },

        // Open-book exam logistics
        {
          question: "Which of the following is a permitted reference during the open-book PECB ISO/IEC 42001 Lead Implementer exam?",
          options: [
            "Internet access for searching ISO documentation",
            "A hard-copy dictionary, the main standard, and printed PECB training materials and personal notes",
            "Mobile phones in airplane mode for offline note access"
          ],
          correct: 1,
          explanation: "Permitted materials include hard copies of the main standard, training course materials (printed or via the PECB Exams app), personal training notes, and a hard-copy dictionary. Internet access and mobile phones are not permitted."
        }
      ]
    }
  ]
};
