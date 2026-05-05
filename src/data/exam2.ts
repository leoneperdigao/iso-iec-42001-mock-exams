import type { Exam } from '../domain/models/Exam';

export const EXAM_2: Exam = {
  title: "Mock Exam 2",
  subtitle: "Full-Length Simulation B — Manufacturing, E-Commerce & Education",
  sections: [
    // SCENARIO 1: Manufacturing AI - Predictive Maintenance (5 questions) - Domain 3/4
    {
      type: "scenario",
      scenario: "SteelWorks International operates 12 manufacturing plants globally and has deployed an AI-powered predictive maintenance system across all facilities. The system monitors sensor data from 3,000 pieces of equipment and predicts failures before they occur. The AIMS implementation lead, Marco Rossi, is conducting the initial planning phase. He discovers that the sensor data quality varies significantly across plants due to different equipment ages and sensor technologies. Two plants in developing countries have intermittent connectivity, causing data gaps. The maintenance engineering team questions whether the AI system should override human judgment when technicians disagree with the AI's predictions. The Chief Operations Officer wants to extend the system to predict product quality defects, which would require ingesting new data types including production line video feeds.",
      questions: [
        {
          question: "Marco identifies significant variation in sensor data quality across plants. Under Clause 6.1 risk assessment, how should this data quality variation be treated?",
          options: [
            "Treat data quality as a Clause 7.5 documented information issue, recording the variation in the controls log and addressing the differences through document control rather than as input to the Clause 6.1 risk identification activity",
            "Assess the data quality variation as a risk factor that affects AI system reliability differently across locations, implement controls proportionate to each plant's data quality level, and establish minimum data quality thresholds below which AI predictions should not be relied upon",
            "Quantify the variation as an opportunity under Clause 6.1.1, since differing data conditions allow the organization to pilot multiple data-handling approaches in parallel, then scale the most effective one as a single corporate standard"
          ],
          correct: 1,
          explanation: "Clause 6.1 requires identifying and treating risks proportionate to context. The correct option does this with location-specific controls and defined thresholds. Option A miscategorises a risk-identification matter as a documentation issue under Clause 7.5. Option C reframes a risk as a learning opportunity but ignores the immediate reliability differences that the standard requires to be assessed and treated."
        },
        {
          question: "The two plants with intermittent connectivity experience data gaps. Under Annex A controls for data quality and Clause 8.1 operational controls, what is the most appropriate approach?",
          options: [
            "Apply A.7.4 data preparation controls to require automatic statistical imputation for any missing samples so the inference pipeline always receives a complete dataset, removing the need for separate operational procedures during connectivity loss",
            "Establish controls that define how the AI system should operate during data gaps, including fallback procedures, data imputation governance, maximum acceptable gap durations, and requirements for validating predictions made with incomplete data",
            "Treat the connectivity gap as a Clause 8.3 risk-treatment-only matter, accept the residual risk of degraded predictions in the SoA, and document the acceptance rather than introducing additional Clause 8.1 operational provisions"
          ],
          correct: 1,
          explanation: "Clause 8.1 requires controlled processes that handle foreseeable degraded conditions, with clear fallback rules and validation. Option A overstates the role of imputation: silently filling gaps is not governance and may mask real outages. Option C confuses risk acceptance with operational planning; accepting residual risk does not remove the need to define how the system actually behaves when data is missing."
        },
        {
          question: "Maintenance technicians sometimes disagree with the AI's failure predictions. Under Annex A controls related to human oversight, what governance structure best addresses this?",
          options: [
            "Establish a clear escalation process where technician disagreements are documented, analyzed, and used as feedback to improve the AI model, while maintaining defined decision authority that specifies when human judgment can override AI predictions and when AI recommendations must be followed",
            "Implement a confidence-threshold rule whereby technicians may only override the AI when its prediction confidence is below 80%, with all higher-confidence predictions executed automatically to keep oversight proportionate to model certainty",
            "Channel all disagreements to the model development team under A.6.2.2 system requirements so the underlying training data can be corrected, leaving day-to-day operational override decisions to local plant supervisors without a defined escalation path"
          ],
          correct: 0,
          explanation: "Annex A human-oversight controls require defined decision authority plus a feedback loop. Option B replaces human judgement with a single numeric threshold, removing meaningful oversight when confidence happens to be high. Option C routes disagreements only to development under A.6.2.2 and leaves operational authority undefined, so day-to-day overrides are not actually governed."
        },
        {
          question: "The COO wants to extend the system to predict product quality defects using video feeds. Under Clause 6.1 and operational planning (Clause 8.1), what planning considerations are most important?",
          options: [
            "Conduct a new risk assessment for the expanded functionality including privacy implications of video surveillance, assess the impact on existing data infrastructure, evaluate whether current competencies cover computer vision technology, and determine new interested party requirements",
            "Treat the extension as a Clause 6.3 planned change only, updating the existing risk register and SoA entries to reflect the new modality and proceeding once top management approves the change request, since the AIMS scope already covers predictive analytics",
            "Run the new computer-vision module as a parallel pilot outside the AIMS for the first six months, then bring it into scope under Clause 8.1 once production data confirms the privacy and bias profile observed in early operation"
          ],
          correct: 0,
          explanation: "Adding a new modality with new data types requires fresh Clause 6.1 risk assessment, Clause 8.1 operational planning, and reassessment of competence and interested parties. Option B treats it as a routine change under Clause 6.3 and skips dedicated risk and impact analysis. Option C deliberately operates a production-affecting AI system outside the AIMS, which contradicts scope and governance requirements."
        },
        {
          question: "Marco needs to define AI objectives under Clause 6.2 for the predictive maintenance system. Which set of objectives best aligns with the standard's requirements?",
          options: [
            "Reduce unplanned downtime by 30% within 12 months, achieve 95% prediction accuracy for critical equipment failures, and implement AI governance awareness training for all maintenance staff across all plants within 6 months",
            "Maintain prediction accuracy above the average of the three top vendors of predictive maintenance software each quarter, as benchmarked by an industry analyst report, and align AI objectives with corporate KPIs at the next annual planning cycle",
            "Adopt the eleven Annex C.2 objectives verbatim as the AIMS objectives so that all standard-recognised AI concerns are explicitly committed to, with progress reviewed annually at management review under Clause 9.3"
          ],
          correct: 0,
          explanation: "Clause 6.2 requires objectives that are measurable, monitored, with timeframes and assigned resources. Option A meets these. Option B ties accuracy to a moving external benchmark, so the target is neither under the organisation's control nor consistently measurable. Option C confuses Annex C.2 (a list of potential AI objectives to consider) with a mandatory checklist and produces non-specific, non-measurable goals."
        }
      ]
    },

    // SCENARIO 2: E-commerce AI - Personalization (5 questions) - Domain 3/4
    {
      type: "scenario",
      scenario: "ShopSmart is a major e-commerce platform that uses AI for product recommendations, dynamic pricing, search result ranking, and customer service chatbots. The company processes 5 million transactions daily across 30 countries. The AIMS project manager, Elena Vasquez, is leading the implementation. During context analysis, she identifies that different countries have varying data protection requirements, some countries have emerging AI-specific regulations, and consumer protection groups in three markets have raised concerns about algorithmic pricing discrimination. The marketing team pushes back against transparency requirements, arguing that revealing the recommendation algorithm's logic would benefit competitors. The platform also uses third-party AI models for image recognition in product search.",
      questions: [
        {
          question: "Consumer groups allege algorithmic pricing discrimination. Under Clause 4.2 interested party analysis and Annex A controls, how should Elena address this?",
          options: [
            "Record the consumer groups in the interested party register but treat their claims as out of scope for the AIMS until a regulator formally adopts pricing-fairness rules, since Clause 4.2 only requires action on legally binding requirements",
            "Identify consumer protection groups as relevant interested parties, determine their specific requirements regarding pricing transparency and fairness, assess whether the dynamic pricing algorithm creates discriminatory outcomes, and establish controls to monitor and address pricing equity",
            "Refer the matter to the corporate communications function to publish a fairness statement on the pricing algorithm and rely on that disclosure as the Annex A.5.5 control evidence that societal impacts have been addressed"
          ],
          correct: 1,
          explanation: "Clause 4.2 requires identifying relevant interested parties and the requirements the organisation chooses to address, not only legally binding ones. Option A misreads Clause 4.2 by treating non-binding requirements as out of scope. Option C substitutes external messaging for genuine impact assessment; A.5.5 expects analysis of societal impacts on individuals and groups, not a public statement."
        },
        {
          question: "The marketing team objects to transparency requirements, citing competitive concerns. Under the AIMS framework, how should this tension be resolved?",
          options: [
            "Exclude A.8.2 information for interested parties from the SoA on the grounds that the recommendation algorithm is a trade secret, and document the exclusion as a justified business decision approved by the AIMS owner",
            "Implement graduated transparency that provides customers with meaningful information about how recommendations are generated without revealing proprietary algorithmic details, while ensuring the SoA documents the rationale for the level of transparency adopted",
            "Apply A.8.3 transparency obligations only to enterprise clients who sign a confidentiality agreement, since A.8 controls are framed around documented information for users rather than uniform disclosure to all consumers"
          ],
          correct: 1,
          explanation: "Annex A transparency controls expect appropriate, layered information for affected parties without forcing disclosure of proprietary detail. Option A confuses non-applicability with commercial preference; trade secrecy does not justify excluding A.8 controls when external users are affected. Option C narrows A.8.3 to contracted clients, but the controls cover individuals affected by the system, not just those under NDA."
        },
        {
          question: "ShopSmart uses third-party AI models for image recognition. Under Clause 4.3 scope definition and Annex A controls for third-party relationships, how should this be governed?",
          options: [
            "Place the third-party models in scope only when ShopSmart is acting as an AI developer, and treat the image-recognition vendor as out of scope under the A.10 customer-side controls, since ShopSmart is the user of the models rather than their producer",
            "Include the use of third-party AI models within the AIMS scope, establish controls for vendor evaluation, model validation, performance monitoring, and incident management, and define the boundary of responsibility between ShopSmart and the vendor",
            "Map the vendor relationship to A.10.3 supplier controls only, defer all model validation to the vendor's own quality processes, and rely on contractual SLAs to provide assurance instead of internal monitoring"
          ],
          correct: 1,
          explanation: "Clause 4.3 brings AI systems used by the organisation into scope; A.10 controls apply to third-party relationships in both directions. Option A misreads A.10 as developer-only and removes the vendor from oversight. Option C selects a single supplier control and outsources validation entirely, which leaves performance monitoring and incident handling on the vendor side without internal verification."
        },
        {
          question: "ShopSmart operates across 30 countries with varying data protection requirements. Under Clause 4.1 and planning requirements, what is the most practical governance approach?",
          options: [
            "Anchor the AIMS to a single recognised reference framework such as the EU GDPR and treat alignment with that framework as evidence of conformity in all 30 markets, on the basis that it represents the most stringent regime",
            "Develop a baseline AI governance framework that meets common requirements across jurisdictions, with jurisdiction-specific overlays that address local regulatory requirements, and a mechanism for monitoring regulatory changes across all markets",
            "Define separate AIMS scope statements per country under Clause 4.3, each with its own risk assessment, SoA, and management review cycle, so that local compliance evidence is generated independently in every jurisdiction"
          ],
          correct: 1,
          explanation: "Clause 4.1 requires understanding the full external context across jurisdictions and Clause 6.1 expects a coherent risk treatment. Option A treats GDPR alignment as a universal substitute, which can both over- and under-shoot local AI-specific requirements. Option C fragments the AIMS into 30 separate systems, which is impractical and undermines consistent governance and reporting at the corporate level."
        },
        {
          question: "Elena needs to establish Clause 7.4 communication processes for the AIMS. Given ShopSmart's global operation with multiple AI systems, what communication challenge is most critical?",
          options: [
            "Defining the internal cadence of AIMS communications, such as monthly cross-functional steering committee meetings and quarterly board updates, which Clause 7.4 specifies as the primary communication output for management systems of this scale",
            "Establishing clear communication channels that inform relevant stakeholders about how AI is used in their interactions with the platform, how they can obtain information about AI-driven decisions, and how they can raise concerns or seek redress, while balancing transparency with commercially sensitive information",
            "Aligning external communications with the marketing brand voice so that descriptions of AI features remain consistent across the 30 markets, with regional marketing leads owning the wording approved by central legal review"
          ],
          correct: 1,
          explanation: "Clause 7.4 requires determining what to communicate, when, with whom and how, including external interested parties. The correct option captures stakeholder-facing channels for information, inquiry and redress. Option A reduces 7.4 to internal meeting cadence. Option C focuses on brand consistency and ignores the substantive content about AI use, decision information and complaint pathways that 7.4 expects to address."
        }
      ]
    },

    // SCENARIO 3: Cybersecurity AI - Threat Detection (5 questions) - Domain 4/5
    {
      type: "scenario",
      scenario: "CyberShield Solutions provides AI-powered threat detection and response services to enterprise clients. Their AI system analyzes network traffic, endpoint behavior, and log data to identify potential security incidents. The AIMS has been certified for one year. During a recent incident, the AI system correctly identified a zero-day attack but the automated response action inadvertently blocked legitimate business traffic for 45 minutes, causing significant financial loss to a client. The incident exposed several issues: the AI system's automated response thresholds had not been reviewed since initial deployment; the client's SLA did not address AI-specific risks; and the internal monitoring did not track false positive rates for automated response actions. The AIMS manager, Yuki Tanaka, must address these issues while preparing for the upcoming surveillance audit.",
      questions: [
        {
          question: "The AI system blocked legitimate traffic while responding to a real threat. Under Clause 10.1, how should this incident be classified and managed?",
          options: [
            "This is an opportunity for improvement under Clause 10.1 rather than a nonconformity, since the AI control objective of detecting threats was met and the collateral effect can be tracked as enhancement input to the next management review cycle",
            "This is a nonconformity related to the automated response controls: while the detection was correct, the response action caused unintended harm, indicating that the operational controls for automated response are inadequate and require corrective action",
            "This is a correction event under ISO 9000 terminology: the blocking action immediately eliminated the threat exposure, so the organisation should record the correction in the incident log and proceed without invoking the corrective action process"
          ],
          correct: 1,
          explanation: "Operational controls for automated response failed to prevent harm to a client, which is a nonconformity requiring corrective action under Clause 10.1. Option A reframes a control failure as mere improvement input and avoids treating cause. Option C confuses correction (eliminating a detected nonconformity) with corrective action (eliminating its cause); both are needed when harm has been caused, not just an entry in a log."
        },
        {
          question: "The automated response thresholds have not been reviewed since initial deployment. Under Clause 9.1 and operational controls, what systemic issue does this reveal?",
          options: [
            "This indicates that the monitoring and measurement program does not include periodic review of AI system parameters, which is essential for systems operating in dynamic threat environments where the effectiveness of static thresholds degrades over time",
            "This is a Clause 6.3 planning-of-changes gap rather than a Clause 9.1 issue, since threshold updates would constitute planned changes to the AIMS that should have been scheduled as part of the original implementation roadmap",
            "This is an Annex A.6.2.6 operation-and-monitoring control gap that sits outside Clause 9.1 monitoring obligations, since 9.1 covers AIMS performance metrics rather than the runtime parameters of an individual AI system"
          ],
          correct: 0,
          explanation: "Clause 9.1 monitoring covers AI system performance, including the parameters that drive that performance. Option B reframes the gap as a one-off Clause 6.3 change that was missed; the actual issue is the absence of a recurring 9.1 review process. Option C creates a false separation between A.6.2.6 and Clause 9.1 — operational controls feed measurement results into 9.1, they are not mutually exclusive."
        },
        {
          question: "The client SLA does not address AI-specific risks. Under Annex A controls and Clause 7.4 communication requirements, what should Yuki recommend?",
          options: [
            "Update SLAs to include AI-specific provisions addressing automated response behavior, false positive rates, notification procedures for AI-driven actions, limitations of AI detection capabilities, and the client's role in validating AI-recommended actions",
            "Address AI-specific risks through Clause 7.3 awareness materials for client staff rather than the SLA, since SLAs are commercial contract instruments and Clause 7.4 communication is delivered through training rather than contractual terms",
            "Add AI-specific provisions only to new client SLAs going forward, since A.10 third-party controls apply at contract formation and retroactively amending existing SLAs falls outside Clause 7.4 obligations"
          ],
          correct: 0,
          explanation: "Clause 7.4 requires planned communication with external interested parties about AI system behavior, and A.10 customer-facing controls expect SLA-level expectations to be set. Option B confuses Clause 7.3 (internal awareness) with 7.4 (external communication) — awareness materials do not bind service expectations. Option C misuses A.10: existing client relationships also require accurate AI-specific expectations, not only new contracts."
        },
        {
          question: "Internal monitoring did not track false positive rates for automated responses. Under Clause 9.1, what monitoring enhancement is most important?",
          options: [
            "Implement tracking of false positive and false negative rates specifically for automated response actions, distinguished from detection-only alerts, with defined thresholds that trigger review and adjustment of response parameters",
            "Implement aggregate analyst satisfaction surveys covering the AI system's helpfulness, since Clause 9.1.2 customer satisfaction methods are the appropriate way to evaluate AI effectiveness in a managed-service context",
            "Implement annual penetration tests against the AI response engine, since Clause 9.1 requires evaluation of effectiveness and security testing is the recognized 9.1 method for security-domain AI systems"
          ],
          correct: 0,
          explanation: "Clause 9.1 requires that the organization determine what needs to be monitored and that the methods produce comparable, reproducible results — the specific gap is outcome accuracy of automated responses, so false-positive/negative tracking directly addresses it. Option B confuses 9.1.2 ISO 9001 satisfaction methods with AI performance measurement. Option C miscasts penetration testing (an A.6 verification control) as the 9.1 monitoring method, which it is not."
        },
        {
          question: "Yuki is preparing for the surveillance audit following this incident. What approach best demonstrates AIMS effectiveness to the auditors?",
          options: [
            "Prepare a detailed incident report showing the complete timeline of events, root cause analysis, corrective actions implemented, and evidence that the AIMS processes functioned correctly by detecting the need for improvement and driving change",
            "Document the incident as a correction in the change log under Clause 6.3 and present the firmware patch as evidence, since the surveillance audit assesses whether planned changes were executed rather than whether nonconformities were processed under Clause 10.2",
            "Request that the certification body convert the surveillance audit into a special audit limited to the incident scope, since standard surveillance audits assume no major nonconformities and a separate process is required when one has occurred"
          ],
          correct: 0,
          explanation: "Surveillance audits sample the full AIMS, and Clause 10.2 evidence (NC handling, root cause, corrective action effectiveness) is exactly what auditors expect. Option B confuses correction with corrective action and reframes a 10.2 nonconformity as a 6.3 planned change. Option C invents a 'special audit' process — ISO/IEC 17021 surveillance routinely covers prior nonconformities; no conversion is required."
        }
      ]
    },

    // SCENARIO 4: Education Technology - AI Tutoring (5 questions) - Domain 1/3
    {
      type: "scenario",
      scenario: "LearnAdapt is an education technology company that has developed an AI-powered adaptive learning platform used by 500 schools across 8 countries. The system uses natural language processing to assess student essays, adaptive algorithms to personalize learning paths, and predictive analytics to identify students at risk of falling behind. The company is pursuing ISO/IEC 42001 certification. During the planning phase, the AIMS team led by Dr. Amira Hassan identifies several critical considerations: the system processes data from minors (students aged 6-18); parents and teachers have different expectations about AI involvement in education; the predictive analytics component may inadvertently label students in ways that create self-fulfilling prophecies; and the essay assessment NLP model was primarily trained on English-language academic texts, potentially disadvantaging students from non-English speaking backgrounds.",
      questions: [
        {
          question: "The system processes data from minors aged 6-18. Under Clause 4.2 interested party analysis and AI risk assessment, who must be identified as interested parties?",
          options: [
            "Schools, parents, and education authorities only, since Clause 4.2 identifies parties relevant to the AIMS through contractual or legal relationships and minors interact with the system through these intermediaries rather than as parties themselves",
            "Students, parents/guardians, teachers, schools, education authorities, data protection authorities, and child protection organizations, with recognition that minors require enhanced protections and that parental interests may differ from student interests",
            "Schools, education authorities, and the AI development team, since Clause 4.2 distinguishes external interested parties (customers, regulators) from internal ones (developers) and individual end users are addressed through Clause 9.1.2 satisfaction methods"
          ],
          correct: 1,
          explanation: "Clause 4.2 requires identifying interested parties relevant to the AIMS, and ISO/IEC 42001 explicitly expects affected individuals — including minors — to be considered. Option A treats minors as out of scope because they lack contracts, ignoring that 4.2 covers parties affected by AI system outcomes. Option C confuses 4.2 (interested parties) with internal role identification under 5.3 and misuses 9.1.2 customer satisfaction as a substitute for stakeholder identification."
        },
        {
          question: "The predictive analytics component may create self-fulfilling prophecies by labeling students as 'at-risk.' Under Annex A controls and AI impact assessment requirements, what risk does this represent?",
          options: [
            "A feedback loop risk where the AI system's predictions influence the environment that generates the data used for future predictions, potentially reinforcing initial classifications regardless of student effort or improvement",
            "A concept drift risk where the relationship between input features and the at-risk label changes over time as student cohorts and curricula evolve, requiring periodic retraining to keep classifications statistically valid",
            "A model overfitting risk where the predictive analytics has memorized historical patterns of struggling students, producing labels that match the training distribution but generalize poorly to new cohorts"
          ],
          correct: 0,
          explanation: "A self-fulfilling prophecy is specifically a feedback loop: the AI's label changes how teachers and the platform treat the student, which then produces the very outcome the model predicted. Option B describes concept drift (changing input/output relationship over time), a different phenomenon. Option C describes overfitting (poor generalization), a model-quality issue independent of whether predictions reshape student outcomes."
        },
        {
          question: "The essay assessment NLP was trained primarily on English-language academic texts. Under Clause 6.1 risk assessment and Annex A fairness controls, what is the most comprehensive risk characterization?",
          options: [
            "This is a training-data representativeness defect that should be characterized as a Clause 7.5 documented-information gap, since the AIMS need only record the training-corpus composition to satisfy A.7 data controls and downstream score effects sit outside the AIMS",
            "This represents a risk of inequitable assessment that encompasses linguistic bias, cultural bias in evaluating argumentation styles, and potentially discriminatory outcomes for students from diverse backgrounds, requiring analysis of actual assessment patterns across student demographics",
            "This is a Clause 8.4 operational impact-assessment finding scoped only to non-English-speaking students, allowing risk treatment to be narrowly framed as a language-coverage extension rather than a fairness investigation across student backgrounds"
          ],
          correct: 1,
          explanation: "Clause 6.1 risk assessment and A.7 data-quality controls require characterizing fairness risks across the affected population, including cultural and discriminatory dimensions, not only language coverage. Option A misuses Clause 7.5: documenting the corpus does not characterize the risk. Option C misapplies Clause 8.4 by narrowing scope to one group, missing cultural-bias and discrimination dimensions that fairness controls explicitly address."
        },
        {
          question: "Parents and teachers have different expectations about AI in education. Under Clause 4.2, how should conflicting interested party requirements be managed?",
          options: [
            "Capture only the requirements that overlap between parents and teachers in the Clause 4.2 register, since requirements not held in common cannot be considered relevant to the AIMS and conflicting expectations resolve themselves once excluded",
            "Document both sets of requirements, analyze areas of conflict, establish mechanisms for balancing competing expectations, and ensure the AI policy and system design reflect considered decisions about how conflicts are resolved",
            "Defer the conflict to the Clause 9.3 management review with no pre-analysis, since top management is the only authority that can decide between competing interested-party requirements and pre-work would pre-empt that decision"
          ],
          correct: 1,
          explanation: "Clause 4.2 requires identifying which interested-party requirements are relevant to the AIMS and addressing them in policy and design — conflicts must be analyzed, not eliminated or deferred. Option A misuses 4.2 by filtering out non-overlapping requirements, which removes legitimate stakeholder needs. Option C confuses 4.2 (ongoing analysis) with 9.3 (management review of inputs); 9.3 expects analyzed inputs, not raw conflicts."
        },
        {
          question: "Dr. Hassan is classifying LearnAdapt's AI systems using AI terminology from ISO/IEC 22989. The adaptive learning path system adjusts content based on student performance. What type of AI system characteristic is most relevant to the AIMS risk assessment?",
          options: [
            "The system's autonomy level, since the degree to which the system independently makes decisions about learning content without teacher intervention determines the risk profile and required controls",
            "The system's model-architecture family (e.g., transformer vs. recurrent network), since ISO/IEC 22989 ties risk classification to the underlying algorithmic family and adaptive systems built on different architectures present different governance profiles",
            "The system's deployment topology (cloud, on-premises, or hybrid), since ISO/IEC 22989 treats deployment context as the leading risk-classification dimension for adaptive AI in shared-infrastructure environments"
          ],
          correct: 0,
          explanation: "ISO/IEC 22989 characterizes AI systems by properties such as autonomy and adaptiveness — autonomy level directly drives the AIMS risk profile because it determines how much human oversight is feasible. Option B treats algorithmic family as a 22989 risk dimension, which it is not. Option C confuses deployment topology (an A.4 resource concern) with 22989 system characteristics relevant to AIMS risk assessment."
        }
      ]
    },

    // SCENARIO 5: Agricultural AI - Precision Farming (5 questions) - Domain 4/6
    {
      type: "scenario",
      scenario: "AgriTech Dynamics provides AI-powered precision agriculture services to large-scale farming operations. Their system includes drone-based crop health assessment using computer vision, AI-driven irrigation and fertilizer optimization, and a yield prediction model that informs commodity trading decisions. The company has been AIMS-certified for 14 months and is approaching its first surveillance audit. The AIMS manager, James Okonkwo, discovers several issues during pre-audit preparation: the drone imaging system's accuracy degrades significantly during certain weather conditions but this is not documented; a recent firmware update to the irrigation controllers changed the AI's control parameters without going through the change management process; and a farming cooperative member has complained that the yield prediction model consistently underestimates yields for organic farms, potentially affecting their commodity trading positions.",
      questions: [
        {
          question: "The drone imaging accuracy degrades in certain weather conditions but this is not documented. Under Annex A controls on AI system documentation, what type of gap is this?",
          options: [
            "A transparency gap: the known limitations of the AI system are not documented and communicated to users, preventing them from making informed decisions about when to rely on the system's assessments",
            "A Clause 7.5.3 documented-information control gap: the issue is that the limitation record is not version-controlled or distributed, rather than a substantive transparency gap toward users of the AI system",
            "An A.6.2.4 verification-and-validation gap: the system was released without weather-condition acceptance criteria, so the absence of user-facing documentation is a downstream symptom of incomplete V&V records"
          ],
          correct: 0,
          explanation: "Annex A controls on AI system information for users (A.8 family) require capabilities and limitations to be documented and communicated to those who rely on the system — that is the primary gap. Option B narrows the issue to internal document control (7.5.3), missing the user-facing communication failure. Option C misattributes a known-and-undisclosed limitation to a V&V (A.6.2.4) records gap rather than to information-for-users obligations."
        },
        {
          question: "The irrigation controller firmware update bypassed the change management process. Under Clause 8.1 and the audit preparation context, how should James handle this?",
          options: [
            "Issue a correction that backports the firmware update into the change register and re-runs the original Clause 6.3 planning steps as if the change had been authorized, since restoring the planned change record satisfies the change management requirement",
            "Investigate the firmware update's impact on AI control parameters, assess whether the change altered the risk profile, implement any necessary corrective actions, and strengthen the change management process to prevent recurrence, documenting all of this as evidence for the audit",
            "Roll back the firmware to the pre-update version so that no unapproved AI parameter changes are in production at the time of the surveillance audit, then schedule a future Clause 8.1 change with full controls"
          ],
          correct: 1,
          explanation: "Clause 8.1 and 10.2 require investigating the impact, treating any altered risk, and correcting the process so the bypass cannot recur — both correction and corrective action. Option A confuses correction (record fix) with corrective action (root-cause elimination). Option C reflexively rolls back without impact assessment, which itself bypasses the change-management discipline the AIMS is meant to enforce."
        },
        {
          question: "The yield prediction model underestimates yields for organic farms. Under Clause 10.1 and Annex A fairness-related controls, what does this complaint reveal?",
          options: [
            "This is a Clause 9.1.2 customer-satisfaction signal that should be tracked as an external input metric, with action taken only if the satisfaction trend crosses a defined threshold rather than treated as a fairness nonconformity in its own right",
            "This may indicate systematic bias in the prediction model arising from training data that underrepresents organic farming practices, constituting a fairness concern that requires investigation of the model's performance across different farming methods and correction of any identified bias",
            "This is a Clause 6.1.4 AI impact assessment update trigger limited to the organic-farm subgroup, allowing the model to remain in production while the impact register is amended to reflect the disclosed limitation for that segment"
          ],
          correct: 1,
          explanation: "Clause 10.1 continual improvement plus Annex A fairness-related controls require investigating systematic performance differences across groups and correcting bias, not just monitoring satisfaction or amending registers. Option A misuses 9.1.2 to defer action behind a satisfaction threshold. Option C treats a fairness signal as a documentation update under 6.1.4 without investigating or correcting the underlying model behavior."
        },
        {
          question: "The yield prediction model informs commodity trading decisions. Under Annex A controls on AI system impact assessment, what additional governance consideration does this create?",
          options: [
            "The financial impact of prediction errors extends beyond farming operations to trading positions, requiring the impact assessment to consider downstream economic consequences and the potential for market manipulation, even if unintentional",
            "The trading use case lies outside the certified AIMS scope statement and should be excluded from Clause 6.1.4 impact assessment, with risks managed instead through the contractual disclaimers in the trading desk's terms of service",
            "The Clause 6.1.4 impact assessment should be limited to direct users of the prediction (the trading desk), since A.5 impact controls apply only to immediate users and onward effects on commodity markets are out of scope"
          ],
          correct: 0,
          explanation: "Clause 6.1.4 and A.5 impact-assessment controls require considering individuals, groups, and societies affected by AI system outcomes — including downstream economic effects when predictions feed financial decisions. Option B improperly contracts AIMS scope to exclude a known downstream use. Option C misreads A.5: impact extends beyond the immediate user to those affected by the user's decisions, which is precisely the trading-market context here."
        },
        {
          question: "James is preparing for the first surveillance audit after 14 months of certification. What specific evidence should he prepare regarding continual improvement under Clause 10.2?",
          options: [
            "A summary report of every nonconformity raised under Clause 10.2 since certification with closure dates, since Clause 10.2 nonconformity records are the recognized evidence base auditors review when evaluating Clause 10.1 continual improvement",
            "Evidence showing how operational experience, monitoring results, audit findings, and management review outputs have driven specific improvements to the AIMS, including changes to processes, controls, risk assessments, or objectives based on lessons learned",
            "A trend chart of Clause 6.2 AIMS objectives showing year-on-year target tightening, since continual improvement under Clause 10.1 is demonstrated by progressively more demanding objectives rather than by changes to processes and controls"
          ],
          correct: 1,
          explanation: "Clause 10.1 continual improvement is demonstrated by linking AIMS inputs (monitoring, audit, review) to concrete changes in processes, controls, or objectives. Option A confuses Clause 10.2 nonconformity closure with 10.1 improvement — closing NCs is necessary but does not by itself evidence broader improvement. Option C reduces 10.1 to a single mechanism (tightening 6.2 objectives), which is one possible improvement but not the required evidence base."
        }
      ]
    },

    // SCENARIO 6: Manufacturing - Quality Inspection AI (5 questions) - Domain 5
    {
      type: "scenario",
      scenario: "PrecisionParts manufactures aerospace components and has deployed an AI-powered visual inspection system that examines parts for defects at the end of the production line. The AIMS was certified six months ago. The performance evaluation program has been producing concerning trends: the AI system's defect detection rate has dropped from 99.2% to 97.1% over three months; the false rejection rate has increased, causing a 15% increase in rework costs; internal auditors found that the inspection system's calibration procedures reference an outdated company quality standard; and the AI system was trained on images from a specific production line, but is now being used across three production lines with different lighting conditions. The Quality Director, Dr. Ingrid Svensson, must address these trends before the next management review.",
      questions: [
        {
          question: "The defect detection rate dropped from 99.2% to 97.1% over three months. Under Clause 9.1, what analysis is most important before determining corrective actions?",
          options: [
            "Recalibration analysis that retrains the model on the most recent three months of inspection images, since Clause 9.1 monitoring requires periodic recalibration as the first response when a metric trends downward over the measurement period",
            "Root cause analysis examining whether the decline correlates with the expansion to new production lines, changes in product mix, environmental factors, model degradation, or data drift, to determine the specific factor or combination of factors driving the performance change",
            "Process capability analysis comparing the new 97.1% rate against the Clause 6.2 detection-rate objective, with corrective action triggered only if the metric falls below the documented objective rather than on the trend itself"
          ],
          correct: 1,
          explanation: "Clause 9.1 requires analysis to understand performance, and Clause 10.2 corrective action depends on identifying the cause before acting. Option A jumps to retraining as a default response, skipping cause analysis and risking masking the real driver (e.g., line expansion). Option C waits for an objective threshold breach, ignoring that a sustained downward trend in a safety-critical AI system already warrants investigation regardless of the current absolute level."
        },
        {
          question: "The AI system trained on one production line is now used across three lines with different lighting conditions. Under Clause 8.1, what operational control gap does this represent?",
          options: [
            "A deployment validation gap: the AI system was deployed in environments that differ from its training conditions without systematic validation of performance under the new conditions, violating change management and validation requirements",
            "A Clause 7.2 competence gap: the operators on the additional lines were not trained on the AI system's environmental sensitivity, so the issue is rooted in personnel competence rather than in the deployment decision itself",
            "An A.4.3 computing-resource control gap: the system's GPU inference capacity was sized for one line, and extending it to three without resizing infrastructure is the operational issue rather than the lighting variation"
          ],
          correct: 0,
          explanation: "Clause 8.1 requires operations to be carried out under controlled conditions, and A.6.2 lifecycle controls require validation when the operating context changes. The core gap is deploying into untested environmental conditions without re-validation. Option B reframes the issue as a 7.2 training matter, missing the deployment-validation failure. Option C swaps the lighting/environment validation question for an A.4.3 capacity-planning concern that the scenario does not present."
        },
        {
          question: "The false rejection rate increase has caused a 15% rise in rework costs. Under Clause 9.3 management review inputs, how should this be presented?",
          options: [
            "As a Clause 6.2 objective revision proposal that lowers the false-rejection target to match the new operating reality, since 9.3 inputs are framed as proposed objective changes rather than performance narratives",
            "As a performance evaluation result that connects AI system behavior to business outcomes, including the metric trend, root cause analysis, financial impact, and proposed actions with cost-benefit analysis for management decision-making",
            "As an A.6.2.6 operation-and-monitoring item logged in the operational risk register and referenced in management review minutes by exception only, since 9.3 inputs cover AIMS-level matters rather than control-level performance data"
          ],
          correct: 1,
          explanation: "Clause 9.3 explicitly lists performance information, trends, and improvement opportunities as required management review inputs — connecting AI behavior to business outcomes is exactly that. Option A confuses an input with an output (objective revision is a 9.3 outcome, not the input format). Option C wrongly excludes control-level performance from 9.3 by treating A.6.2.6 monitoring data as 'too operational' for management review."
        },
        {
          question: "Internal auditors found that calibration procedures reference an outdated quality standard. Under Clause 9.2, what does this finding indicate about the internal audit function?",
          options: [
            "The internal auditors demonstrated competence by identifying this gap, and the finding indicates a document control issue under Clause 7.5 rather than a failure of the audit program itself",
            "The finding shows the Clause 9.2 audit programme lacks independence, since auditors reporting into the quality function would have flagged the outdated reference sooner and the late detection points to an objectivity problem in auditor selection",
            "The finding is a Clause 9.2 audit-criteria deficiency, indicating that the documented audit criteria did not require auditors to verify that referenced external standards are current, and the audit programme should be reissued before recurring"
          ],
          correct: 0,
          explanation: "Clause 9.2 audits exist precisely to surface gaps like outdated documented information, and the underlying issue belongs to Clause 7.5 (control of documented information). Option B fabricates an independence problem from a successful audit detection. Option C reframes a positive finding as a programme deficiency requiring reissue, conflating a 7.5 finding with a 9.2 audit-criteria failure the scenario does not support."
        },
        {
          question: "Dr. Svensson needs to determine monitoring frequency for the AI inspection system. Under Clause 9.1, what factors should determine the monitoring interval?",
          options: [
            "Monitoring frequency should align to the Clause 9.2 audit cycle so each audit re-baselines the metric, keeping intervals within the audit cycle and data synchronised with audit findings",
            "The monitoring frequency should be determined by the AI system's criticality, the rate of environmental change, historical performance variability, and the consequences of undetected performance degradation, with more frequent monitoring for higher-risk applications",
            "Monitoring frequency should follow the Clause 9.3 management review cadence, since 9.1 results feed 9.3 inputs and intervals shorter than the review cycle generate data that cannot be acted upon by top management"
          ],
          correct: 1,
          explanation: "Clause 9.1 requires the organization to determine when monitoring is performed based on what needs to be measured, and ISO/IEC 42001 expects this to be risk- and context-driven. Option A ties 9.1 to 9.2 audit cadence, but audits sample compliance and do not set measurement frequency. Option C subordinates 9.1 to 9.3 review cadence, missing that operational measurement must detect issues between management reviews, not be paced by them."
        }
      ]
    },

    // SCENARIO 7: Cybersecurity - AI-Powered Access Control (5 questions) - Domain 6
    {
      type: "scenario",
      scenario: "IdentityGuard develops AI-based behavioral authentication systems that continuously verify user identity based on typing patterns, mouse movements, and application usage patterns. The company is undergoing its initial certification audit. During the Stage 2 audit, the audit team observes: the organization has implemented all required AIMS processes but some processes show limited evidence of operation beyond the initial implementation; the risk assessment identifies behavioral biometrics privacy as a risk but the treatment plan references controls that are 'planned for Q2' rather than implemented; the Statement of Applicability excludes controls related to AI system lifecycle management, with the justification that 'our system is in production and not actively being developed'; and the AI system's performance metrics show strong accuracy for the dominant user demographic in the training data but no analysis has been conducted for demographic subgroups.",
      questions: [
        {
          question: "The audit team observes processes with limited evidence of operation beyond initial implementation. Under ISO/IEC 17021-1, what does this suggest about the timing of the Stage 2 audit?",
          options: [
            "The Stage 2 audit may have been scheduled too early, as there is insufficient evidence that the AIMS has been fully operational long enough to demonstrate effective implementation and the completion of at least one full PDCA cycle",
            "The limited evidence is consistent with a Stage 1 readiness review, and the auditors should defer their effectiveness assessment to the first surveillance audit when more operational data will be available for evaluation",
            "The auditors should reclassify the gaps as observations rather than nonconformities, since ISO/IEC 17021-1 expects effectiveness to be evaluated only across the full three-year certification cycle and not at a single stage"
          ],
          correct: 0,
          explanation: "Stage 2 assesses implementation and effectiveness, which requires the AIMS to have been operational long enough to generate evidence including a completed PDCA cycle. Option B confuses Stage 1 (design adequacy, ~30%) with Stage 2 (effectiveness) and misuses surveillance audits, which presume a granted certificate. Option C misstates ISO/IEC 17021-1: effectiveness must be demonstrated at Stage 2, not deferred across the certification cycle."
        },
        {
          question: "The risk treatment plan references controls 'planned for Q2' rather than implemented. Under Clause 6.1 and the Stage 2 audit requirements, how should the auditors evaluate this?",
          options: [
            "The planned controls are acceptable provided the organization documents a Clause 6.3 change plan with a credible implementation timeline, since Clause 6.1.3 permits deferred risk treatment for risks within the residual acceptance threshold of the SoA",
            "This represents a nonconformity: the risk assessment has identified a risk and the treatment plan does not include implemented controls to address it, meaning the risk is currently untreated, which is a gap in the AIMS if the risk exceeds acceptance criteria",
            "This is a Clause 8.3 operational risk treatment issue rather than a Clause 6.1 finding, so the auditors should request that the organization escalate the planned controls into the next management review cycle and treat it as an opportunity for improvement"
          ],
          correct: 1,
          explanation: "Clauses 6.1.3 and 8.3 require risk treatment to be implemented; identified risks above acceptance criteria cannot remain untreated at Stage 2. Option A misuses Clause 6.3 (changes), which governs planned changes to the AIMS rather than deferring risk treatment, and misstates SoA acceptance. Option C misroutes the issue to Clause 8.3 and downgrades a Clause 6.1.3 nonconformity to an opportunity for improvement, which is incorrect."
        },
        {
          question: "The SoA excludes AI system lifecycle management controls because the system is 'in production and not actively being developed.' Is this exclusion justified?",
          options: [
            "The exclusion is justified under Clause 6.1.3 because A.6 lifecycle controls apply to active development activities, and a production system is adequately governed by A.9 use controls and the routine monitoring requirements of Clause 9.1",
            "The exclusion is not justified: AI systems in production still require lifecycle management including monitoring for degradation, planning for retraining, managing retirement or replacement, and addressing changes in the operating environment",
            "The exclusion is partially justified provided the SoA records A.6.2 design controls as not applicable while retaining A.6.1 lifecycle planning and A.6.3 verification and validation for the deployed model"
          ],
          correct: 1,
          explanation: "AI system lifecycle management under A.6 spans the full lifecycle, including operation, monitoring, retraining, and retirement, not only active development. Option A misreads A.6 and treats A.9 use controls and Clause 9.1 monitoring as if they replace lifecycle governance. Option C misallocates A.6 sub-controls: A.6.2 design and A.6.3 verification remain relevant whenever model changes or revalidation occur in production."
        },
        {
          question: "The AI system shows strong accuracy for the dominant user demographic but no subgroup analysis has been conducted. Under Annex A controls and the audit evaluation, what finding should the auditors raise?",
          options: [
            "An opportunity for improvement under Clause 10.1, recommending that subgroup analysis be added during the next continual improvement cycle, since aggregate accuracy already satisfies the Clause 6.2 AI objective for system effectiveness",
            "A nonconformity related to Annex A controls on fairness and bias assessment, since the organization has not demonstrated that the AI system performs equitably across user demographics, which is a fundamental requirement for systems that affect access to services based on individual characteristics",
            "A minor nonconformity under A.7.4 data quality, since the absence of stratified accuracy metrics indicates the training and evaluation datasets were not balanced across the demographic populations the system is intended to serve"
          ],
          correct: 1,
          explanation: "For a behavioral authentication system affecting user access, failure to evaluate fairness across demographics breaches Annex A controls on bias assessment and AI impact assessment (Clause 6.1.4). Option A misuses Clause 10.1 continual improvement to defer a current conformity gap and misreads Clause 6.2. Option C misallocates the finding to A.7.4 data quality; the core failure is missing fairness evaluation, not unbalanced datasets specifically."
        },
        {
          question: "Considering all four findings collectively, what is the most likely Stage 2 audit recommendation?",
          options: [
            "Recommend certification once the organization submits a corrective action plan within 30 days addressing each finding as a minor nonconformity, since the AIMS framework is documented and the gaps relate to maturing operational evidence rather than design",
            "Do not recommend certification at this time, as the combination of limited operational evidence, untreated risks, unjustified SoA exclusions, and unaddressed fairness analysis indicates the AIMS is not yet effectively implemented",
            "Recommend conditional certification under ISO/IEC 17021-1 with a six-month surveillance audit triggered early to verify closure of the four findings, retaining the original certificate validity in the interim"
          ],
          correct: 1,
          explanation: "Multiple major nonconformities across implementation evidence, risk treatment, SoA exclusions, and fairness assessment cannot be remediated by a corrective action plan alone; certification must be withheld. Option A misclassifies major issues as minor and misuses the 30-day action plan window (which applies to minor NC closure, not major NC). Option C invents a 'conditional certification' outcome that ISO/IEC 17021-1 does not provide for an initial certification."
        }
      ]
    },

    // SCENARIO 8: E-commerce - Customer Service AI (5 questions) - Domain 2/4
    {
      type: "scenario",
      scenario: "RetailConnect operates a large customer service center that has deployed an AI system combining a customer intent classification model, an automated response generator, and a sentiment analysis system that routes escalations. The AIMS implementation is in its sixth month. The project team discovers that the automated response generator occasionally provides product return policy information that contradicts the company's current policy because it was trained on historical customer service transcripts that include outdated policies. The sentiment analysis system has a tendency to misclassify assertive communication styles common in certain cultures as 'angry,' leading to unnecessary escalations. The Head of Customer Experience, Fatima Al-Rashid, also realizes that the Annex A control implementation is incomplete: controls related to data quality are implemented, but controls related to AI system life cycle and responsible AI have not been addressed.",
      questions: [
        {
          question: "The automated response generator provides contradictory policy information due to training on historical transcripts. Under Annex A controls and Clause 8.1, what is the most appropriate corrective approach?",
          options: [
            "Apply a Clause 10.2 correction by purging all transcripts older than 12 months from the training corpus and triggering a single retraining run, since outdated source data is the root cause and removing it eliminates the nonconformity",
            "Implement a multi-layered approach: establish a policy verification mechanism that cross-references generated responses against current policy documents, implement a feedback loop for agents to flag incorrect responses, and define a process for periodic retraining with updated policy data",
            "Add a post-generation human approval gate under A.9.3 human oversight, requiring an agent to authorize every policy-related response before it reaches the customer, which fully treats the risk without modifying the underlying generative model"
          ],
          correct: 1,
          explanation: "Clause 8.1 and A.6 require operational controls layered around policy correctness, including verification, feedback, and planned retraining. Option A confuses Clause 10.2 correction (immediate fix) with corrective action (root-cause treatment) and treats data age as the sole cause. Option C overuses A.9.3 human oversight as a blanket control, creating an unscalable bottleneck rather than addressing the model's grounding in current policy."
        },
        {
          question: "The sentiment analysis misclassifies assertive communication as 'angry' for certain cultural styles. Under Annex A fairness controls, what does this represent?",
          options: [
            "A cultural bias in the sentiment model that could lead to discriminatory service outcomes, where customers from certain cultural backgrounds systematically receive different treatment through unnecessary escalation, requiring assessment of the model's behavior across cultural communication styles",
            "An A.7.4 data quality issue resolvable by augmenting the training set with additional culturally diverse samples, with no fairness review needed because sentiment analysis only routes traffic and does not make adverse decisions about the customer",
            "A known limitation of sentiment analysis technology that A.5 impact assessment can record as a residual risk, since escalation routes the customer to a human agent and any cultural skew is offset by that downstream human review"
          ],
          correct: 0,
          explanation: "Systematic misclassification correlated with cultural background is a fairness issue under Annex A controls and Clause 6.1.4 AI impact assessment, even when escalation involves humans. Option B downgrades fairness to A.7.4 data quality and incorrectly excludes routing decisions from fairness scope. Option C misuses A.5 impact assessment to accept a fairness defect as residual risk and assumes downstream human review automatically neutralizes upstream bias."
        },
        {
          question: "Fatima discovers that controls related to AI system lifecycle and responsible AI have not been addressed. Under the AIMS implementation approach, what is the most appropriate response?",
          options: [
            "Prioritize implementing the missing controls based on their relevance to the organization's risk profile, ensuring that the most critical gaps are addressed first while maintaining a plan for complete control implementation",
            "Defer the certification timeline by 12 months until every Annex A.6 lifecycle and A.9 responsible-AI control reaches uniform maturity, because Stage 2 requires all controls in Annex A to be implemented at the same level",
            "Mark the missing A.6 and A.9 controls as 'planned, not implemented' in the SoA and rely on the Clause 6.1.3 risk treatment plan alone, since the SoA only needs to record applicability decisions, not implementation status"
          ],
          correct: 0,
          explanation: "Implementation under Clauses 6.1.3 and 8.3 should be prioritized by risk. Option B misstates the standard: ISO/IEC 42001 does not require uniform Annex A maturity, and a 12-month blanket deferral is not a standard remedy. Option C misreads the SoA, which must record applicability and current implementation status of each Annex A control; it cannot substitute for actual treatment of identified risks."
        },
        {
          question: "The AIMS implementation is in month six. Under the Harmonized Structure and Clause 4.4, what must the organization demonstrate at this stage?",
          options: [
            "Three full PDCA cycles with two completed Clause 9.3 management reviews and at least one Clause 9.2 internal audit programme, since Clause 4.4 requires demonstrated continual improvement before any external audit can take place",
            "Evidence of systematic progress in establishing and implementing the AIMS, with documented processes, initial risk assessments, and defined controls, even if full operational maturity has not been achieved",
            "Approved AIMS policies and a Clause 6.1.3 risk treatment plan only, with operational activities deferred until month nine, because Clause 4.4 treats the first half of an implementation programme as a planning-only phase"
          ],
          correct: 1,
          explanation: "Clause 4.4 requires the AIMS to be established, implemented, maintained, and continually improved; at six months, evidence of active implementation is appropriate. Option A overstates expectations by demanding multiple PDCA cycles and prerequisite reviews that Clause 9.3 does not require this early. Option C understates them: Clause 4.4 does not designate a planning-only phase, and operational implementation cannot be deferred wholesale."
        },
        {
          question: "Fatima wants to ensure the AIMS documentation meets Clause 7.5 requirements. The organization has documentation scattered across a wiki, SharePoint, and individual team drives. What is the most critical action?",
          options: [
            "Consolidate every AIMS artifact into one document management platform within 90 days, since Clause 7.5.3 requires documented information to be controlled in a single repository with a unified access permission model",
            "Ensure that wherever documentation is stored, it meets Clause 7.5 requirements for identification, format, review and approval, availability, storage, version control, retention, and disposition, with a document register that enables retrieval across all platforms",
            "Reclassify the wiki and team-drive content as 'records' under Clause 7.5.3 and apply Clause 7.5.2 controls only to formally approved policies in SharePoint, since records of activities have lighter documented information requirements"
          ],
          correct: 1,
          explanation: "Clause 7.5 sets functional requirements for documented information regardless of platform; multiple stores are acceptable when control objectives are met. Option A invents a Clause 7.5.3 single-repository rule that does not exist. Option C confuses Clause 7.5.2 (creation/updating) and 7.5.3 (control of documented information): both apply equally to records and policies, and reclassifying content does not lower the control requirements."
        }
      ]
    },

    // SCENARIO 9: Agricultural AI - Supply Chain (5 questions) - Domain 3
    {
      type: "scenario",
      scenario: "FreshChain is an agricultural supply chain company that uses AI to optimize the journey from farm to consumer. Their AI systems include a crop disease prediction model using satellite imagery, a supply chain logistics optimizer that determines routing and storage, and a demand forecasting model that predicts retail orders. The company is beginning AIMS planning. The AIMS project lead, Raj Patel, must define the scope, conduct context analysis, and establish the risk assessment framework. Challenges include: the satellite imagery is sourced from a government space agency with periodic outages; the logistics optimizer interacts with third-party cold chain monitoring systems; the demand forecasting model's predictions have significant seasonal accuracy variations; and a recent food safety incident at a competitor was linked to AI-driven decisions about shelf life extension.",
      questions: [
        {
          question: "Raj is defining the AIMS scope under Clause 4.3. FreshChain's three AI systems have different risk profiles and maturity levels. What is the most appropriate scoping strategy?",
          options: [
            "Include all three AI systems in scope and require uniform Annex A control implementation across them on day one of certification, since Clause 4.3 prohibits a scope that allows different maturity levels for systems with shared interfaces",
            "Begin with crop disease prediction alone as a pilot AIMS scope and add the logistics optimizer and demand forecaster only after each has completed an independent Stage 1 readiness assessment, since Clause 4.3 favors incremental scope expansion via separate certifications",
            "Define the scope to include all three systems but implement controls in phases based on risk priority, with the scope statement clearly identifying which controls apply to which systems and at what implementation stage"
          ],
          correct: 2,
          explanation: "Clause 4.3 lets the organization define scope based on context, interested parties, and AIMS boundaries; phased control implementation by risk priority within a unified scope is consistent with the standard. Option A invents a uniform-maturity rule that Clause 4.3 does not impose. Option B treats sub-systems as separate certifications and misuses Stage 1 readiness, which applies to the AIMS as a whole, not per-system staging."
        },
        {
          question: "The satellite imagery source is a government space agency with periodic outages. Under Clause 4.1 external context analysis, how should this dependency be characterized?",
          options: [
            "As an A.10 third-party supplier issue handled exclusively through the IT business continuity programme, since the satellite agency sits outside the AIMS boundary and Clause 4.1 only requires documenting issues that the organization can directly control",
            "As an external factor that affects the organization's ability to achieve AIMS objectives, requiring assessment of the impact of data availability on AI system performance and the establishment of contingency plans for periods of reduced data availability",
            "As an A.7.4 data quality finding for the crop disease model only, addressed within that system's risk register under Clause 8.2 and excluded from Clause 4.1 because individual data feeds are not strategic context"
          ],
          correct: 1,
          explanation: "Clause 4.1 covers external issues relevant to the AIMS purpose and outcomes, including dependencies that affect AI performance, regardless of organizational control. Option A misuses A.10 third-party controls and incorrectly limits Clause 4.1 to issues the organization controls. Option C misallocates a context-level dependency to A.7.4 data quality and Clause 8.2 operational risk, missing the strategic relevance to the AIMS as a whole."
        },
        {
          question: "The demand forecasting model has significant seasonal accuracy variations. Under Clause 6.2 AI objectives and Clause 9.1 monitoring, how should performance targets be established?",
          options: [
            "Set a single rolling 12-month accuracy target under Clause 6.2 that smooths seasonal variation, with Clause 9.1 monitoring triggered only when the annual figure breaches the threshold, since AI objectives must be expressed as one annualized SMART metric",
            "Establish seasonally adjusted performance targets that reflect expected accuracy variations throughout the year, with monitoring that evaluates performance against the appropriate seasonal benchmark and investigates deviations from expected seasonal patterns",
            "Set the Clause 6.2 target equal to the model's best historical season and treat the pattern as concept drift under A.6 lifecycle controls during weaker seasons, with retraining triggered each time accuracy falls below that benchmark"
          ],
          correct: 1,
          explanation: "Clause 6.2 requires AI objectives to be measurable and consistent with policy; Clause 9.1 requires meaningful monitoring. Seasonally calibrated targets satisfy both. Option A invents a 'one annualized SMART metric' rule and delays Clause 9.1 evaluation. Option C confuses concept drift (a change in the underlying relationship) with predictable seasonal variation and misuses A.6 lifecycle controls to trigger needless retraining."
        },
        {
          question: "A competitor's food safety incident was linked to AI-driven shelf life decisions. Under Clause 4.1 external context analysis, how should FreshChain consider this?",
          options: [
            "It is relevant only when the competitor's AI architecture matches FreshChain's logistics and forecasting models; since the use cases differ, Clause 4.1 does not require the incident to be recorded in the external context register",
            "This external event is relevant because it may influence regulatory scrutiny of AI in food supply chains, public trust in AI-driven food safety decisions, and interested party expectations about AI governance in the agricultural sector, regardless of whether FreshChain uses identical AI applications",
            "It should be logged as an A.5 impact assessment input rather than a Clause 4.1 external issue, since competitor incidents inform the AI impact assessment for FreshChain's own systems but do not change the strategic context of the AIMS"
          ],
          correct: 1,
          explanation: "Clause 4.1 covers external issues, including regulatory, market, and stakeholder shifts triggered by sector-wide events. Option A misreads Clause 4.1 by limiting relevance to identical applications. Option C misroutes context to A.5 (AI impact assessment of FreshChain's own systems): the competitor event reshapes the strategic environment and interested-party expectations and therefore belongs in the Clause 4.1 analysis."
        },
        {
          question: "The logistics optimizer interacts with third-party cold chain monitoring systems. Under Clause 4.2 interested party analysis and the risk assessment framework, what is the most important consideration?",
          options: [
            "FreshChain should require each cold chain provider to hold an ISO/IEC 42001 certificate within 12 months as a precondition for integration, since A.10.3 makes provider AIMS certification mandatory whenever third-party data feeds an in-scope AI system",
            "The interfaces between FreshChain's AI and third-party systems create shared data dependencies where data quality, availability, and integrity from external sources directly affect AI system decisions, requiring defined quality requirements and monitoring at integration points",
            "These interactions are governed through Clause 8.1 operational planning and standard procurement SLAs, with cold chain providers treated as suppliers rather than interested parties under Clause 4.2 because their relationship is contractual"
          ],
          correct: 1,
          explanation: "Clause 4.2 and A.10 require integration interfaces and supplier-supplied data to be assessed for impact on AI decisions, with quality requirements and monitoring at integration points. Option A overreaches A.10.3, which calls for assessing and managing third parties, not mandating their certification. Option C wrongly excludes suppliers from interested-party analysis under Clause 4.2 and limits governance to procurement SLAs."
        }
      ]
    },

    // SCENARIO 10: Education Technology - Exam Proctoring AI (5 questions) - Domain 5/6
    {
      type: "scenario",
      scenario: "ExamSecure provides AI-powered online exam proctoring services to universities and professional certification bodies. The system uses facial recognition to verify student identity, behavioral analysis to detect cheating patterns, eye-tracking to monitor attention, and environmental audio analysis to detect unauthorized communication. The company achieved AIMS certification 18 months ago and is undergoing a recertification audit. During preparation, the AIMS manager, Dr. Lisa Chang, reviews the following: the facial recognition component has received 47 formal complaints from students about false identity failures, disproportionately from students with darker skin tones; the behavioral analysis flags students with certain disabilities (e.g., ADHD, anxiety disorders) at higher rates; a university partner suspended use of the system pending an internal investigation into accessibility concerns; and the most recent internal audit was conducted by a team member who also participated in developing the behavioral analysis algorithm.",
      questions: [
        {
          question: "The facial recognition system has 47 complaints with disproportionate impact on students with darker skin tones. Under Clause 10.1 and Annex A fairness controls, what is the audit team's expected assessment?",
          options: [
            "A major nonconformity related to fairness and bias management: the organization has evidence of discriminatory system performance and 47 complaints indicating a systematic issue that has not been adequately addressed through the corrective action process",
            "A minor nonconformity under A.8 information for interested parties, because the complaints indicate that disclosures about identity-verification limitations were not communicated clearly enough; the underlying model performance falls outside the AIMS audit scope",
            "An opportunity for improvement under Clause 9.1, recommending that ExamSecure expand its monitoring metrics to include skin-tone segmented accuracy in the next surveillance cycle, since complaint volume alone does not constitute evidence of bias"
          ],
          correct: 0,
          explanation: "Forty-seven complaints with a clear demographic pattern indicate a systematic fairness failure that must be raised as a major nonconformity under Annex A fairness controls and Clause 10.2. Option B misroutes the issue to A.8 disclosure controls and improperly narrows AIMS audit scope. Option C downgrades a corrective-action-grade finding to an opportunity for improvement and misuses Clause 9.1 to defer treatment by another full cycle."
        },
        {
          question: "The behavioral analysis disproportionately flags students with disabilities. Under Annex A controls and the broader AIMS framework, what fundamental issue does this represent?",
          options: [
            "An AI impact assessment failure: the organization did not adequately assess how the system would perform across the full diversity of users, including those with disabilities, resulting in a system that penalizes disability-related behaviors as indicators of cheating",
            "An A.7.3 data preparation issue: training data lacked sufficient samples from students with disabilities, and the only treatment needed is to enrich the dataset and retrain the behavioral model under A.6.2 design controls",
            "A Clause 4.3 scope boundary issue: students with disabilities should fall outside the AIMS scope and be routed to a separate accommodation process, removing the need for ExamSecure to address this within its AI governance"
          ],
          correct: 0,
          explanation: "The root issue is a failure of Clause 6.1.4 AI impact assessment to consider the system's effects on users with disabilities. Option B downgrades the issue to A.7.3 data preparation and a single retraining action, missing the governance failure. Option C misuses Clause 4.3 scope to exclude an interested-party group; scope cannot be redrawn to remove individuals affected by the AI system, and accommodation does not substitute for impact assessment."
        },
        {
          question: "A university partner suspended use of the system. Under Clause 4.2 and the management system framework, how should this be managed?",
          options: [
            "Route the suspension to account management as a Clause 7.4 external communication issue, since the partner is a customer rather than an interested party for AIMS purposes and Clause 4.2 only applies to regulators and standard-setting bodies",
            "Treat the suspension as relevant feedback from a key interested party that may indicate systemic issues with the AIMS, investigate the underlying concerns, assess the impact on other clients, and determine whether corrective actions to the AIMS are needed",
            "Use the suspension as a Clause 9.3 management review input only, escalate it to top management at the next quarterly review, and refrain from any AIMS-level investigation until the review formally tasks the team with one"
          ],
          correct: 1,
          explanation: "Clause 4.2 expressly includes customers as interested parties, and a client suspension is significant feedback that may signal systemic AIMS issues requiring investigation under Clause 10.2. Option A misclassifies the partner and confines response to Clause 7.4 communication. Option C misuses Clause 9.3 management review as a gating step and delays the Clause 10.2 corrective action obligation that applies as soon as a potential nonconformity is known."
        },
        {
          question: "The internal audit was conducted by a team member who developed the behavioral analysis algorithm. Under Clause 9.2, what issue does this present?",
          options: [
            "This violates the objectivity and impartiality requirement of Clause 9.2, since auditors must not audit their own work, compromising the reliability of the audit findings for the behavioral analysis component",
            "This is acceptable under Clause 7.2 competence provided the team member completed certified ISO/IEC 19011 internal auditor training and the audit programme assigns a separate lead auditor to sign off on the findings",
            "This is a Clause 9.3 management review issue rather than a Clause 9.2 independence breach: top management can ratify the audit results during the next review cycle, restoring confidence in the findings without rerunning the audit"
          ],
          correct: 0,
          explanation: "Clause 9.2.2 requires auditors to be objective and impartial and explicitly prohibits auditing one's own work. Option A confuses Clause 7.2 competence with Clause 9.2 impartiality; training and a co-signing lead auditor do not cure a structural conflict. Option C misuses Clause 9.3 management review, which evaluates AIMS performance but cannot retroactively legitimize an audit conducted in breach of Clause 9.2 independence."
        },
        {
          question: "Considering all findings, what is the most likely recertification audit outcome for ExamSecure?",
          options: [
            "The certification body will likely issue major nonconformities related to fairness, impact assessment, and audit independence, requiring satisfactory corrective actions within a defined period before recertification can be recommended, and may consider whether the severity warrants suspension of the existing certificate",
            "The certification body will recommend recertification with a 90-day observation window, since 18 months of operating an AIMS qualifies the organization for renewal under ISO/IEC 17021-1 even when minor nonconformities remain open, provided action plans are submitted",
            "The certification body will issue all four findings as opportunities for improvement and recommend immediate recertification, since ExamSecure self-identified the gaps before the audit and corrective action under Clause 10.2 can be deferred to the next surveillance audit"
          ],
          correct: 0,
          explanation: "Discriminatory performance, missing impact assessment, a client suspension, and compromised audit independence are systemic failures that meet the threshold for major nonconformities under Clause 10.2 and Annex A controls. Option B misstates ISO/IEC 17021-1: tenure does not entitle an organization to renewal, and major NCs cannot be left open. Option C misclassifies major NCs as opportunities for improvement and improperly defers corrective action."
        }
      ]
    },

    // STANDALONE QUESTIONS (30 questions)
    {
      type: "standalone",
      questions: [
        // Domain 1 - Fundamentals (7 questions)
        {
          question: "An AI system uses a technique where a pre-trained model on general text data is adapted to perform medical document classification with a small labeled medical dataset. According to ISO/IEC 22989 concepts, this technique is best described as:",
          options: [
            "Transfer learning, where knowledge gained from training on one task is applied to a different but related task, reducing the need for large domain-specific training datasets",
            "Reinforcement learning, where an agent learns medical document categories through trial-and-error feedback signals from a reward function tuned to clinical correctness",
            "Unsupervised representation learning, where the model discovers medical document clusters without any labels by exploiting structural similarity in the corpus alone"
          ],
          correct: 0,
          explanation: "Transfer learning leverages knowledge from a pre-trained source task and adapts it to a related target task with limited labeled data, exactly matching the scenario. Reinforcement learning (option B) involves sequential decision-making with reward signals, not classification fine-tuning. Unsupervised representation learning (option C) uses no labels, which contradicts the 'small labeled medical dataset' described in the question."
        },
        {
          question: "What is the primary distinction between 'narrow AI' (weak AI) and the concept of 'general AI' (strong AI) as discussed in the AI standards ecosystem?",
          options: [
            "Narrow AI is restricted to running on edge devices, while general AI runs only in centralized cloud environments capable of orchestrating very large model parameters",
            "Narrow AI is designed and trained for specific tasks within defined boundaries, while general AI would theoretically possess the ability to understand, learn, and apply intelligence across any intellectual domain, similar to human cognitive ability",
            "Narrow AI is regulated by ISO/IEC 42001 while general AI is excluded from the standard's scope because such systems are not yet commercially deployed"
          ],
          correct: 1,
          explanation: "The distinction is about scope of cognitive capability: narrow AI excels within defined task boundaries, while general AI would theoretically match human breadth across any domain. Option A invents a deployment-environment criterion that does not define the concepts. Option C is wrong because ISO/IEC 42001 applies to any organization providing or using AI systems regardless of generality, not just narrow AI."
        },
        {
          question: "ISO/IEC 23894 provides guidance on AI risk management. How does it complement ISO/IEC 42001?",
          options: [
            "ISO/IEC 23894 defines the certifiable risk management requirements that auditors verify during Stage 2 audits of ISO/IEC 42001, while Clause 6.1 only sets the policy-level expectations",
            "ISO/IEC 23894 provides guidance on AI-specific risk management approaches that can inform how an organization implements the risk assessment and treatment requirements of ISO/IEC 42001 Clause 6.1, though the organization is not required to use this specific standard",
            "ISO/IEC 23894 supersedes the AI impact assessment provisions of Clause 6.1.4 and is the only acceptable framework for organizations performing impact assessments on individuals and society"
          ],
          correct: 1,
          explanation: "ISO/IEC 23894 is guidance, not certifiable requirements (option A is wrong: ISO/IEC 42001 itself is the certifiable standard, and Clause 6.1 sets the actual risk requirements). Option C is wrong because Clause 6.1.4 on AI system impact assessment is binding and is not superseded by ISO/IEC 23894, which offers complementary guidance organizations may, but need not, adopt."
        },
        {
          question: "An organization uses an AI model ensemble that combines predictions from decision trees, neural networks, and support vector machines. What AI concept does this represent?",
          options: [
            "Model stacking, a specific ensemble technique where a meta-learner combines predictions from diverse base models to produce a final output with potentially higher accuracy and robustness",
            "Knowledge distillation, where a single small student model is trained to imitate the combined behavior of decision trees, neural networks, and SVMs to reduce inference cost",
            "Mixture of experts, where a single neural network gates inputs to specialized internal sub-networks trained jointly end-to-end on the same task"
          ],
          correct: 0,
          explanation: "Combining predictions from heterogeneous learners is the canonical definition of stacking (an ensemble method). Knowledge distillation (option B) compresses one teacher into one student model and does not describe combining live predictions from multiple model types. Mixture of experts (option C) is a single jointly trained architecture with internal gating, not an ensemble of independently trained heterogeneous models."
        },
        // Domain 2 - AIMS Requirements (5 questions)
        {
          question: "ISO/IEC 42001 Clause 4.4 states the organization shall establish, implement, maintain, and continually improve the AIMS 'including the processes needed and their interactions.' What does 'their interactions' specifically require?",
          options: [
            "Producing a Clause 7.4 communication plan that documents the messaging cadence and channels between every department involved in AI activities and external interested parties",
            "Understanding and managing how AIMS processes affect each other, such as how risk assessment outputs feed into operational controls, how monitoring results inform management review, and how corrective actions lead to updated risk assessments",
            "Defining a turtle diagram for each process and embedding it inside the Statement of Applicability so every Annex A control links back to a corresponding turtle diagram entry"
          ],
          correct: 1,
          explanation: "Clause 4.4 is about understanding how AIMS processes feed each other (risk into controls, monitoring into management review, etc.). Option A confuses Clause 4.4 with the separate Clause 7.4 communication requirement. Option C invents a documentation form that ISO/IEC 42001 does not require: the SoA documents control applicability, not process maps, and turtle diagrams are not mandated."
        },
        {
          question: "Under the Harmonized Structure, what is the purpose of Clause 8 'Operation' in the AIMS?",
          options: [
            "To prescribe the engineering practices used inside the AI lifecycle, such as coding standards, unit-test coverage thresholds, and the specific MLOps tooling used to release models",
            "To require the organization to plan, implement, and control the processes needed to meet requirements and implement actions determined in planning, including establishing criteria for processes and implementing control according to those criteria",
            "To consolidate performance evaluation activities such as monitoring, measurement, internal audit, and management review into a single operational clause for execution"
          ],
          correct: 1,
          explanation: "Clause 8 is about operational planning and control of the processes the organization decided on in Clause 6. Option A wrongly turns Clause 8 into Annex A AI lifecycle controls (A.6) — engineering practices belong there, not in the management clause. Option C confuses Clause 8 with Clause 9 (Performance evaluation), which is the clause that actually contains monitoring, internal audit, and management review."
        },
        {
          question: "How do the normative annexes of ISO/IEC 42001 differ from informative annexes found in other standards?",
          options: [
            "Normative annexes are mandatory parts of the standard that must be followed, while informative annexes provide optional supplementary guidance",
            "Normative annexes contain the certification audit checklists used by certification bodies, while informative annexes contain the management system requirements organizations must meet",
            "Normative annexes are reserved for terminology and abbreviations only, while informative annexes hold the technical controls organizations need to evaluate during risk treatment"
          ],
          correct: 0,
          explanation: "By ISO drafting rules, normative annexes carry requirements while informative annexes are guidance only. Option B inverts the meaning by claiming normative annexes are auditor checklists and informative ones hold the requirements. Option C wrongly limits normative annexes to terminology and places technical controls in informative annexes, when in ISO/IEC 42001 it is normative Annex A that holds the controls."
        },
        {
          question: "Under ISO/IEC 42001, what is the relationship between the main body clauses (4-10) and Annex A controls?",
          options: [
            "The Annex A controls fully replace the main body clauses for organizations that adopt the SoA approach, since the SoA already records the controls that have been selected and justified",
            "The main body clauses establish the management system framework, and Annex A provides a reference set of controls that must be evaluated for applicability through the risk assessment and documented in the Statement of Applicability, with justification for inclusion or exclusion",
            "Annex A controls apply only to AI providers, while organizations that are AI users must instead rely on Annex B implementation guidance to satisfy the main body clauses for their own AIMS"
          ],
          correct: 1,
          explanation: "Clauses 4-10 establish the management system; Annex A controls are evaluated for applicability through risk assessment and justified in the SoA. Option A is wrong because the SoA documents control choices but never replaces the main body requirements. Option C misuses the annexes: Annex A applies to all in-scope organizations regardless of role, and Annex B is implementation guidance that does not substitute for Clauses 4-10 either."
        },
        {
          question: "What is the significance of the term 'determined' as used in clauses like 'the organization shall determine...' throughout ISO/IEC 42001?",
          options: [
            "'Determine' is a permissive verb equivalent to 'should consider', signalling that the organization may choose whether to address the requirement based on its own judgment of relevance",
            "'Determine' means the organization must actively analyze and decide, implying a deliberate process of assessment and decision-making rather than passive acknowledgment, though the form of documentation is not prescribed",
            "'Determine' requires the organization to set a single quantitative target value for the item in question and to record it as a key performance indicator monitored under Clause 9.1"
          ],
          correct: 1,
          explanation: "In ISO management system drafting rules, 'determine' is a 'shall'-level requirement to actively analyse and decide. Option A wrongly demotes it to permissive language; in ISO Directives 'should' is the recommendation verb, not 'determine'. Option C invents a quantitative-KPI obligation under Clause 9.1 that 'determine' does not impose: many things are determined (e.g., interested parties, scope) without becoming numeric KPIs."
        },
        // Domain 3 - Planning (10 questions)
        {
          question: "An organization operates in a country that has no AI-specific legislation. Under Clause 4.1, is the absence of AI regulation a relevant external issue?",
          options: [
            "No, Clause 4.1 only requires the organization to track external issues that already create binding legal duties, so jurisdictions without AI law fall outside the context analysis",
            "Yes, the absence of regulation is itself a relevant external factor because it affects the organization's risk environment, may change as AI legislation develops globally, and means the organization must rely more heavily on voluntary standards and internal governance to ensure responsible AI use",
            "Only if the legal department escalates the topic during management review, since legal context is examined at the Clause 9.3 stage rather than determined upfront under Clause 4.1"
          ],
          correct: 1,
          explanation: "Clause 4.1 covers any external issue relevant to the AIMS purpose, not only binding legal duties. Option A wrongly narrows Clause 4.1 to enacted law; emerging regulation, social expectations, and ethical norms are also in scope. Option C wrongly defers context analysis to Clause 9.3 management review: Clause 4.1 must be determined upfront and revisited, not raised only when escalated by legal."
        },
        {
          question: "Under Clause 6.1, the risk assessment must address 'risks and opportunities arising from the AI system.' An organization's AI system has been operating successfully for two years with no incidents. How should the risk assessment be maintained?",
          options: [
            "The risk assessment can move to a five-year review cycle once two years of incident-free operation are evidenced, since long stable periods justify reduced review frequency under Clause 6.1",
            "The risk assessment must be periodically reviewed and updated to reflect changes in the AI system's operating environment, technology evolution, emerging threat patterns, regulatory changes, and operational experience, regardless of incident history",
            "The risk assessment should be replaced by the AI system impact assessment under Clause 6.1.4, since impact assessments give a more user-centric view that supersedes the original Clause 6.1.2 risk analysis after deployment"
          ],
          correct: 1,
          explanation: "Risk assessments must stay current regardless of incident history; the operating environment, technology, and regulation keep evolving. Option A invents a five-year cycle Clause 6.1 does not authorise; the standard requires assessments to remain valid as conditions change. Option C wrongly treats the Clause 6.1.4 impact assessment as a replacement for the Clause 6.1.2 risk assessment, when the two are complementary and both must be maintained."
        },
        {
          question: "An organization's AIMS scope includes AI systems developed by an internal team and AI services consumed from cloud providers. Under Clause 4.3, which boundaries are most important to define?",
          options: [
            "The boundaries derived solely from the data classification scheme, ensuring that any AI workflow handling confidential data is in scope and any workflow handling only public data is excluded",
            "The boundaries between what the organization controls (internal AI development, configuration, monitoring) and what it relies on third parties to provide (cloud AI model execution, infrastructure), including data flows and decision responsibilities at each boundary",
            "The boundaries between in-house AI roles named in Clause 5.3, with anything done by personnel outside those role descriptions automatically excluded from the AIMS scope statement"
          ],
          correct: 1,
          explanation: "Clause 4.3 is concerned with control boundaries, especially where the organization hands off responsibility to third parties. Option A reduces scope to data sensitivity, ignoring AI-specific control transitions and shared responsibilities. Option C confuses Clause 4.3 boundaries with Clause 5.3 role assignments; scope is set by activities, products, and services covered by the AIMS, not by job titles, and outsourced work can still fall inside scope."
        },
        {
          question: "An organization sets an AI objective to 'ensure all AI models are deployed with documented risk assessments.' Under Clause 6.2, what is missing from this objective?",
          options: [
            "The objective is missing only an explicit alignment statement to the AI policy, since Clause 6.2 requires every objective to quote the relevant policy commitment verbatim before it can be considered valid",
            "The objective needs a timeframe for achievement, specification of who is responsible, definition of what 'documented risk assessment' includes, criteria for adequacy, and a monitoring mechanism to verify compliance",
            "The objective is missing a commitment to use ISO/IEC 23894 as the named risk methodology, which Clause 6.2 requires for any objective that touches AI risk assessment activities"
          ],
          correct: 1,
          explanation: "Clause 6.2 expects objectives to be measurable, monitored, time-bound, with assigned responsibility and adequacy criteria. Option A invents a verbatim-quotation rule; consistency with the policy is required, but Clause 6.2 does not mandate quoting it. Option C invents a citation requirement to ISO/IEC 23894, which is non-mandatory guidance and not referenced as obligatory by Clause 6.2."
        },
        {
          question: "An organization determines that its AI policy must address the use of AI in decisions that affect individual rights. Under Clause 5.2, what makes this policy commitment operational rather than aspirational?",
          options: [
            "Mapping the policy commitment to one trustworthiness characteristic in the Annex B guidance and citing that characteristic in the policy text, so readers can locate the corresponding implementation guidance",
            "Ensuring the policy commitment translates into specific risk assessment criteria, operational controls, monitoring metrics, and defined procedures for human oversight in rights-affecting decisions",
            "Approving the AI policy through the management review meeting under Clause 9.3 each year, which converts a Clause 5.2 commitment into operational status once recorded in the review minutes"
          ],
          correct: 1,
          explanation: "Operational policy commitments drive risk criteria, controls, monitoring, and oversight procedures across the AIMS. Option A confuses traceability to Annex B (informative guidance) with operational implementation; citing guidance does not make a commitment operational. Option C confuses Clause 5.2 (top management establishes the policy) with Clause 9.3 management review, which evaluates the AIMS but is not where policy becomes operational."
        },
        {
          question: "Under Clause 6.1.4, the organization must plan actions to address risks and opportunities. What is the relationship between risk treatment actions and the Statement of Applicability?",
          options: [
            "Risk treatment actions are documented exclusively in the AI system impact assessment under Clause 6.1.4, while the SoA is produced separately for the certification audit and never references treatment actions",
            "Risk treatment actions should be supported by applicable Annex A controls documented in the SoA, creating a coherent link between identified risks, treatment decisions, and selected controls",
            "The SoA documents only excluded Annex A controls along with the rationale for exclusion, so risk treatment actions are tied to controls that are intentionally left out rather than to those that are applied"
          ],
          correct: 1,
          explanation: "The treatment plan and SoA must traceably connect risks, treatment decisions, and the controls applied. Option A wrongly equates risk treatment with the AI system impact assessment, which addresses impacts on individuals and society rather than treatment of organizational risks. Option C inverts the SoA's purpose: it lists all applicable controls (with justification), and exclusions are also justified, but the SoA is not limited to exclusions."
        },
        // Domain 4 - Implementation (8 questions)
        {
          question: "An organization implements Annex A controls for AI system testing and validation. The testing environment uses synthetic data that does not fully represent production conditions. Under Annex A controls, what risk does this create?",
          options: [
            "The principal risk is privacy regulation breach, since synthetic data is treated as personal data under most data protection laws and the testing environment is therefore non-compliant by default",
            "Synthetic testing data may not capture edge cases, distribution characteristics, or real-world variability present in production data, potentially resulting in validation results that do not accurately predict production performance, requiring documented understanding of synthetic data limitations and supplementary validation approaches",
            "The Annex A data control (A.7.4) requires synthetic data only when production data is unavailable, so using synthetic data while production data exists is itself the nonconformity, regardless of representativeness"
          ],
          correct: 1,
          explanation: "The core risk is poor representativeness, leading to validation that does not predict production behaviour; AIMS controls expect documented understanding of limitations and supplementary validation. Option A inverts privacy reality: synthetic data is normally generated to reduce privacy exposure, not increase it. Option C invents a fallback-only rule that Annex A controls on data quality and provenance do not impose."
        },
        {
          question: "Under Clause 7.2, the organization must ensure persons are competent. An AI data scientist has strong technical skills but no understanding of the AIMS framework. Is this person competent under Clause 7.2?",
          options: [
            "Yes, because Clause 7.2 only applies to staff with formal AIMS roles such as the AI risk officer, internal auditor, or top management; technical contributors are covered by the awareness requirement in Clause 7.3 instead",
            "The person has partial competence: Clause 7.2 requires competence relevant to the person's role affecting AIMS performance, which for an AI data scientist includes both technical AI skills and understanding of how their work contributes to AIMS objectives, controls, and requirements",
            "No, ISO/IEC 42001 disqualifies any data scientist who has not completed an accredited Lead Implementer training programme, since accreditation is the primary form of evidence accepted under Clause 7.2"
          ],
          correct: 1,
          explanation: "Clause 7.2 covers anyone whose work affects AIMS performance and requires role-relevant competence. Option A wrongly limits Clause 7.2 to dedicated AIMS roles and offloads technical staff to Clause 7.3 awareness, but data scientists clearly affect AIMS performance. Option C invents an accredited-training requirement; Clause 7.2 accepts education, training, or experience as evidence and does not name any specific course."
        },
        {
          question: "An organization uses automated CI/CD pipelines to deploy AI model updates. Under Clause 8.1 and Annex A controls, what governance requirement applies?",
          options: [
            "Automated deployment pipelines must include governance gates such as validation checks, performance verification against defined criteria, and approval mechanisms, with the automation itself subject to change management controls",
            "Clause 6.3 covers any change involving an automated pipeline, so the organization can rely on its planning of changes and is not required to add operational controls under Clause 8.1 for the deployment itself",
            "Annex A's transparency control (A.8.2) is the primary governance requirement, since CI/CD pipelines mainly raise concerns about user-facing disclosures rather than operational deployment behaviour"
          ],
          correct: 0,
          explanation: "Pipelines must integrate governance gates, validation, performance checks, approvals, and be themselves under change control. Option B wrongly substitutes Clause 6.3 (planning of changes) for the operational planning and control required by Clause 8.1; both apply. Option C misuses A.8.2 transparency, which addresses information for users and impacted parties, not the operational deployment controls Clause 8.1 expects on the pipeline."
        },
        {
          question: "Under Clause 7.5, the organization must retain documented information as evidence of conformity. An organization claims that its AI system's 'self-documenting code' satisfies this requirement. Is this adequate?",
          options: [
            "Self-documenting code satisfies Clause 7.5 in full as long as the source repository is version-controlled, because Clause 7.5.3 accepts version-controlled artefacts as a complete substitute for written procedures and records",
            "Self-documenting code may contribute to documented information but is insufficient alone: Clause 7.5 requires documented information covering the management system processes, decisions, risk assessments, and operational controls, not just technical implementation",
            "Self-documenting code can replace policies and procedures but cannot replace the records required by Clause 7.5.3, so the organization must still produce written policies and procedures separately from any retained records"
          ],
          correct: 1,
          explanation: "Documented information includes management system processes, decisions, risk assessments, and records, not just technical implementation. Option A wrongly equates version control with conformity to the Clause 7.5.3 control of documented information, which covers approval, distribution, and access, not just versioning. Option C inverts the categories: Clause 7.5 distinguishes documents (policies, procedures) and records, both of which are required, and self-documenting code replaces neither."
        },
        {
          question: "An organization has implemented Annex A controls for AI system monitoring but discovers that the monitoring only captures system-level metrics (uptime, latency) without AI-specific metrics (model performance, drift, fairness indicators). Under Annex A requirements, is this adequate?",
          options: [
            "Yes, because Annex A.6 lifecycle controls only require that AI-specific metrics be collected during validation and verification before release; once a system is deployed, system-level monitoring is the expected operational view",
            "No, AI system monitoring must include AI-specific metrics that assess the system's continued fitness for purpose, including model performance against defined benchmarks, data drift indicators, fairness metrics, and output quality measures",
            "Yes, since the Annex A controls for system monitoring address concept drift only, and ongoing operational monitoring of model performance, data drift, and fairness is delegated to the AI provider rather than being the AI user's responsibility"
          ],
          correct: 1,
          explanation: "AI-specific metrics (model performance, drift, fairness, output quality) are required for ongoing fitness for purpose, not optional. Option A misreads Annex A.6 by limiting AI-specific metrics to pre-release activities; lifecycle controls also cover operation. Option C narrows monitoring to concept drift and offloads the rest to the provider, but Annex A makes the operating organization responsible for monitoring the AI systems it uses, regardless of provenance."
        },
        // Domain 5 - Monitoring (5 questions)
        {
          question: "Under Clause 9.2, the internal audit program must be planned. For an AIMS that has been operational for one year, what should the audit program for year two prioritize?",
          options: [
            "Mirror the certification body's surveillance audit plan exactly, so internal audits cover the same clauses and Annex A controls in the same order, eliminating duplication of effort across the two programmes",
            "Adjust the audit program based on year one findings, areas of higher risk, processes that have changed, and any new AI systems or regulatory requirements, while ensuring complete coverage over the audit cycle",
            "Audit only the areas not covered during the certification audit in year one, since previously audited topics need not be revisited until the next three-year recertification cycle begins"
          ],
          correct: 1,
          explanation: "Clause 9.2 requires a risk-, importance- and change-based programme that ensures full coverage over the cycle. Option A subordinates the internal programme to the external surveillance schedule, but Clause 9.2 makes the internal audit the organization's own independent assurance. Option C invents a three-year carve-out: certification audits do not exempt areas from internal audit, and Clause 9.2 still requires planned coverage of the AIMS."
        },
        {
          question: "During management review under Clause 9.3, the AIMS manager presents a 'green status' for all monitoring indicators. What should top management's response be?",
          options: [
            "Treat the green status as confirmation that no opportunities for improvement remain, since Clause 9.3 inputs only require management review action when adverse trends are reported by the AIMS manager",
            "Critically assess whether the monitoring indicators and thresholds are still appropriate, whether the metrics actually reflect AIMS effectiveness, and whether any areas are not being adequately measured, since uniformly positive results may indicate measurement gaps rather than perfect performance",
            "Defer the management review until the next internal audit under Clause 9.2 has been completed, since green status cannot be relied on without an internal audit having tested the underlying evidence first"
          ],
          correct: 1,
          explanation: "Clause 9.3 requires top management to evaluate suitability, adequacy, and effectiveness, including the appropriateness of metrics, not merely accept reported status. Option A misreads Clause 9.3 inputs, which include opportunities for improvement irrespective of whether trends are adverse. Option C invents a sequencing rule: management review and internal audit are independent processes, and Clause 9.3 is not gated on a fresh Clause 9.2 audit each cycle."
        },
        {
          question: "An organization conducts performance evaluation of its AI system's fairness metrics under Clause 9.1. The metrics show equal average performance across demographic groups, but the variance differs significantly. What should the evaluation conclude?",
          options: [
            "Equal demographic-parity averages already satisfy the fairness objective, so the variance differences belong to the data quality control under A.7.4 rather than to the Clause 9.1 fairness evaluation that has just been performed",
            "The evaluation should examine whether different variance levels mean some groups experience more unpredictable outcomes than others, which may constitute inequitable service quality even if average performance is equal",
            "Variance differences should be reclassified as nonconformities under Clause 10.2 immediately, with corrective action raised against the model developer, since any inter-group variance gap is automatically a fairness failure"
          ],
          correct: 1,
          explanation: "Inter-group variance can imply inequitable service quality even when averages match, and Clause 9.1 expects the evaluation to interpret these results. Option A wrongly redirects the finding to A.7.4 data quality, which addresses dataset properties rather than deployed model fairness behaviour. Option C jumps prematurely to Clause 10.2 nonconformity treatment: not every variance gap is automatically a nonconformity, and Clause 9.1 first requires evaluation, not corrective action."
        },
        {
          question: "Under Clause 9.1, when should the organization evaluate the effectiveness of the AIMS itself, as distinct from evaluating AI system performance?",
          options: [
            "AIMS effectiveness is determined exclusively through the internal audit programme under Clause 9.2, with Clause 9.1 reserved for monitoring AI system technical performance such as accuracy, latency, and uptime",
            "The organization should periodically evaluate whether the AIMS is achieving its intended outcomes, including whether the management system processes are functioning effectively, whether risks are being adequately managed, and whether objectives are being met",
            "AIMS effectiveness is evaluated only at the start of each three-year certification cycle, since stability is a precondition of certification and intra-cycle evaluation would invite scope changes"
          ],
          correct: 1,
          explanation: "Clause 9.1 obliges the organization itself to periodically evaluate AIMS performance and effectiveness, including processes, risk management, and objectives. Option A wrongly carves Clause 9.1 down to AI system technical metrics and offloads effectiveness to Clause 9.2 audits; both clauses contribute, but Clause 9.1 explicitly covers AIMS effectiveness. Option C invents a once-per-cycle limit; effectiveness must be evaluated at planned intervals across the cycle."
        },
        {
          question: "An internal audit under Clause 9.2 finds that the organization's AI risk register has not been updated for eight months despite several changes to AI systems. The AIMS manager argues that the risk register captures strategic risks that do not change frequently. How should the auditor respond?",
          options: [
            "Defer judgement and refer the finding to top management for resolution at the next Clause 9.3 management review, since auditors are not authorised under Clause 9.2 to characterise risk-management gaps without prior management consultation",
            "Raise a finding: the risk register should reflect the current risk landscape including the impact of changes to AI systems, and eight months without update despite system changes suggests the risk assessment process is not responsive to changes as required by Clause 6.1",
            "Issue an opportunity for improvement asking the AIMS manager to align the risk register with the AI system impact assessment schedule under Clause 6.1.4, treating Clause 6.1 risk registers as a downstream artefact of impact assessments"
          ],
          correct: 1,
          explanation: "Clause 6.1 requires risk assessment to remain current as AI systems change; eight months without update during such changes is a finding. Option A misreads Clause 9.2: auditors are required to report findings independently and are not bound to defer them to Clause 9.3. Option C inverts the relationship between Clause 6.1 risk assessment and Clause 6.1.4 AI system impact assessment; the risk register is not a downstream artefact of impact assessments."
        },
        // Domain 6 - Improvement & Audit (5 questions)
        {
          question: "Under ISO/IEC 17021-1, what is the relationship between the certification body and the organization during the certification process?",
          options: [
            "The certification body and the accreditation body share oversight of the organization's AIMS, which means corrective actions agreed during audits must be approved by the accreditation body before they are accepted",
            "The certification body independently assesses conformity without providing consulting services, maintaining impartiality by evaluating the AIMS against requirements without advising on implementation",
            "The certification body acts as the AIMS process owner during the audit cycle, taking custody of the SoA and risk treatment plan to verify ongoing conformity between audit visits"
          ],
          correct: 1,
          explanation: "ISO/IEC 17021-1 establishes the certification body as an independent third-party assessor that must avoid consulting and remain impartial. Option A wrongly inserts the accreditation body into corrective action approval; accreditation bodies oversee certification bodies, not an organization's corrective actions. Option C wrongly transfers ownership of AIMS artefacts to the certification body, when responsibility for the AIMS always remains with the certified organization."
        },
        {
          question: "An organization identifies a nonconformity related to inadequate AI model documentation. Under Clause 10.1, the corrective action must include determining the cause. What constitutes adequate root cause analysis for this nonconformity?",
          options: [
            "Recording the immediate correction (adding the missing pages to the model card) and treating that correction as the root cause analysis output, since restoring conformity is the primary purpose of corrective action under Clause 10.2",
            "Investigating why documentation was inadequate by examining whether documentation procedures are clear, whether templates and tools support efficient documentation, whether competence requirements include documentation skills, whether time and resources are allocated for documentation, and whether the culture values documentation as part of AI quality",
            "Forecasting future documentation gaps as preventive action under Clause 6.1 and replacing the root cause analysis with that forward-looking risk assessment, since the original nonconformity is already remediated through correction"
          ],
          correct: 1,
          explanation: "Root cause analysis must examine systemic factors so the cause can be eliminated and recurrence prevented. Option A confuses 'correction' (fixing the symptom) with the cause-determination step required for corrective action; ISO 9000 distinguishes these explicitly. Option C confuses corrective action with preventive thinking and Clause 6.1 risk treatment; corrective action under Clause 10.2 still requires investigation of the actual cause, not its replacement by a risk assessment."
        },
        {
          question: "During a surveillance audit, the auditor requests evidence of continual improvement but the organization presents only corrective actions taken in response to nonconformities. Under Clause 10.2, is this adequate evidence of continual improvement?",
          options: [
            "Yes, provided each corrective action carries an effectiveness review at 30 days under Clause 10.2, those reviewed corrective actions are sufficient evidence of continual improvement at the surveillance audit",
            "No, continual improvement encompasses proactive enhancements beyond just fixing problems, including improvements driven by monitoring analysis, management review decisions, industry developments, technological advances, and stakeholder feedback that improve the suitability, adequacy, and effectiveness of the AIMS",
            "No, but only because surveillance audits target only one third of the AIMS each year; once recertification is reached, accumulated corrective actions across the cycle become acceptable evidence of continual improvement on their own"
          ],
          correct: 1,
          explanation: "Continual improvement under Clause 10.1 is broader than corrective action and must include proactive enhancement driven by monitoring, management review, and external inputs. Option A invents a fixed 30-day effectiveness review; even with effectiveness reviews, corrective action alone remains reactive and is not full evidence. Option C wrongly ties continual improvement to recertification accumulation; Clause 10.1 applies continuously, not only at recertification."
        },
        {
          question: "An organization is preparing for its initial Stage 1 audit. The audit team requests access to the AI policy, scope statement, risk assessment, SoA, and evidence of management commitment. The organization provides all documents except the risk assessment, explaining it is still being finalized. What is the likely Stage 1 outcome?",
          options: [
            "The auditors will issue a major nonconformity at Stage 1 and require closure within six months before any Stage 2 booking, applying the same nonconformity rules used at Stage 2 effectiveness audits",
            "The auditors will note the incomplete risk assessment as a significant gap that must be resolved before Stage 2 can be scheduled, since risk assessment is fundamental to the AIMS and its absence indicates the management system design is not complete",
            "The auditors will accept the incomplete risk assessment if the AI system impact assessment under Clause 6.1.4 has been completed instead, since the impact assessment can substitute for the risk assessment at Stage 1"
          ],
          correct: 1,
          explanation: "Stage 1 evaluates readiness for Stage 2; missing risk assessment is a significant gap to resolve before Stage 2 can be scheduled. Option A wrongly applies the Stage 2 major nonconformity model with a six-month closure clock to Stage 1, which under ISO/IEC 17021-1 produces readiness findings, not formal majors. Option C wrongly substitutes the Clause 6.1.4 impact assessment for the Clause 6.1.2 risk assessment; the two address different concerns and the risk assessment cannot be skipped."
        },
        {
          question: "Under the certification audit process, what is the purpose of opening and closing meetings?",
          options: [
            "The opening meeting confirms audit scope, objectives, methods, and logistics with the organization's management, while the closing meeting presents audit findings, conclusions, and the recommendation, ensuring transparency and giving the organization the opportunity to clarify any factual inaccuracies",
            "The opening meeting is where the audit team negotiates the audit criteria with the organization to ensure each finding is mutually agreed in advance, while the closing meeting confirms the certification decision the certification body has already issued earlier that week",
            "The opening meeting selects the sample of Annex A controls to be reviewed during fieldwork at the auditee's discretion, while the closing meeting decides which findings to include in the report after a vote between auditors and the organization's management"
          ],
          correct: 0,
          explanation: "Opening meetings confirm scope, objectives, and methods; closing meetings present findings and allow factual clarification while preserving auditor judgement. Option B wrongly turns the opening meeting into criteria negotiation and pre-positions a certification decision before the closing meeting, but ISO/IEC 17021-1 requires the certification decision to be made by the certification body separately, after the audit. Option C wrongly hands sampling and finding-acceptance to the auditee, undermining auditor independence and the impartiality required by ISO/IEC 17021-1."
        }
      ]
    }
  ]
};
