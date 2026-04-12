import type { Exam } from '../domain/models/Exam';

export const EXAM_1: Exam = {
  title: "Mock Exam 1",
  subtitle: "Full-Length Simulation A — Healthcare, Fintech & Autonomous Systems",
  sections: [
    // SCENARIO 1: Healthcare AI (5 questions) - Domain 3/4
    {
      type: "scenario",
      scenario: "MedVista Analytics has developed an AI-powered radiology assistant that analyzes chest X-rays for early detection of pulmonary conditions. The system is used by 45 hospitals across three countries. Dr. Lena Park, the newly appointed AIMS Lead Implementer, discovers that MedVista has no formal AI policy, risk assessments are performed ad hoc by individual data scientists, and the radiologists using the system have never been formally consulted about their requirements. The board wants ISO/IEC 42001 certification within 10 months. During initial context analysis, Dr. Park identifies that two of the three countries have recently enacted AI-specific healthcare regulations, and patient advocacy groups have publicly raised concerns about AI replacing human diagnostic judgment.",
      questions: [
        {
          question: "Dr. Park needs to establish the context of the organization under Clause 4.1. Given the regulatory landscape, which approach best addresses the external issues?",
          options: [
            "Focus the external analysis on the two countries with AI-specific regulations, since the third country poses no regulatory risk and can be excluded from the context assessment",
            "Analyze external issues across all three countries including existing and emerging regulations, societal concerns about AI in healthcare, competitive landscape, and technological developments affecting diagnostic AI",
            "Prioritize the patient advocacy concerns as the primary external issue since reputational risk is the most impactful factor for healthcare organizations"
          ],
          correct: 1,
          explanation: "Clause 4.1 requires understanding all relevant external issues, not just those from jurisdictions with existing regulation. The third country may develop regulations, and all external factors (regulatory, societal, technological, competitive) must be considered holistically."
        },
        {
          question: "The radiologists using MedVista's system have never been formally identified as interested parties. What is the most significant consequence of this gap under Clause 4.2?",
          options: [
            "The AIMS scope cannot be finalized because radiologists are the primary users, and without their input the organization cannot determine which AI system processes fall within the management system boundaries",
            "The organization may fail to identify critical requirements related to clinical workflow integration, explainability of AI outputs, and professional liability considerations that directly affect AIMS planning",
            "The certification body will automatically reject the application because end-user consultation is a mandatory pre-certification requirement under ISO/IEC 17021-1"
          ],
          correct: 1,
          explanation: "Clause 4.2 requires identifying interested parties and their relevant requirements. Radiologists as key users have requirements around explainability, workflow integration, and liability that directly inform AIMS planning. While scope is affected, the more significant impact is on understanding critical requirements for the system."
        },
        {
          question: "Dr. Park is drafting the AI policy under Clause 5.2. Given MedVista's context, which element is most critical to include beyond the standard requirements?",
          options: [
            "A commitment to maintaining human oversight in diagnostic decisions, aligned with healthcare regulations and the organization's responsibility to patients as ultimate interested parties",
            "A detailed technical specification of the AI model architecture to demonstrate the organization's competence in AI development",
            "A commitment to achieving 99.9% diagnostic accuracy within 12 months, establishing a measurable objective that demonstrates continuous improvement"
          ],
          correct: 0,
          explanation: "The AI policy must be appropriate to the organization's context (Clause 5.2). For healthcare AI, human oversight in clinical decisions is a fundamental commitment that addresses regulatory requirements, patient safety, and the concerns raised by patient advocacy groups. Technical specifications belong in operational documentation, and specific accuracy targets are objectives (Clause 6.2), not policy commitments."
        },
        {
          question: "During risk assessment under Clause 6.1, a data scientist identifies that the training dataset underrepresents certain demographic groups, potentially causing differential diagnostic accuracy. What is the most appropriate risk treatment approach?",
          options: [
            "Document the bias as a known limitation in the system documentation and inform hospitals so they can apply additional clinical judgment for underrepresented populations",
            "Implement a multi-layered treatment plan including dataset augmentation, bias testing protocols, ongoing monitoring of diagnostic accuracy across demographic groups, and a defined escalation procedure when disparities exceed acceptable thresholds",
            "Suspend the AI system for all populations until the training dataset is fully balanced, as deploying a biased diagnostic tool creates unacceptable clinical risk"
          ],
          correct: 1,
          explanation: "Risk treatment should be proportionate and comprehensive. Simply documenting the limitation (option A) does not adequately treat the risk. Complete suspension (option C) may be disproportionate if the system still provides net benefit. A multi-layered approach with ongoing monitoring and defined thresholds addresses the risk while maintaining clinical benefit."
        },
        {
          question: "Dr. Park must determine which Annex A controls are applicable. The organization currently has no process for documenting how the AI system reaches its diagnostic suggestions. Which control area is most directly relevant?",
          options: [
            "Controls related to AI system impact assessment, since documenting the decision process is part of understanding the system's impact on clinical outcomes",
            "Controls related to transparency and provision of information about AI systems, ensuring that the reasoning behind AI outputs can be communicated to relevant stakeholders",
            "Controls related to data quality for AI systems, since the diagnostic outputs are ultimately a function of the quality of input data"
          ],
          correct: 1,
          explanation: "Annex A includes controls specifically addressing transparency and provision of information about AI systems. The lack of documentation about how the system reaches diagnostic suggestions is a transparency gap. While impact assessment and data quality are also relevant, the most direct control area for explaining AI reasoning is transparency."
        }
      ]
    },

    // SCENARIO 2: Fintech Credit Scoring (5 questions) - Domain 3/4
    {
      type: "scenario",
      scenario: "Pinnacle Financial Services operates a credit scoring AI that processes 50,000 applications per month. The system was developed in-house using ensemble machine learning methods. Following a media report alleging that applicants from certain postal codes receive systematically lower scores, the CEO has directed an urgent AIMS implementation. The compliance team discovers that the AI model was last retrained 14 months ago, the original development team has since left the company, and the model documentation consists only of a Jupyter notebook with minimal comments. The Chief Risk Officer, Maria, must now establish operational controls and address the Statement of Applicability.",
      questions: [
        {
          question: "Maria is developing the Statement of Applicability (SoA). Given the media allegations about postal code bias, which approach to the SoA best reflects the organization's situation?",
          options: [
            "Include all Annex A controls as applicable without exception, since the media scrutiny means the organization cannot afford to exclude any controls",
            "Include controls related to fairness and bias as applicable with specific justification referencing the identified risk, and systematically evaluate each remaining control against the organization's context, excluding controls with documented justification",
            "Focus the SoA exclusively on controls related to bias and fairness since these represent the most urgent risk, and address other controls in a subsequent phase after the immediate crisis is resolved"
          ],
          correct: 1,
          explanation: "The SoA must include all necessary controls with justification for inclusion or exclusion. Including everything without analysis (option A) does not demonstrate a risk-based approach. Focusing only on bias controls (option C) ignores other applicable requirements. The correct approach evaluates each control systematically while ensuring bias-related controls are specifically justified given the known risk."
        },
        {
          question: "The model documentation consists only of a Jupyter notebook. Under Clause 7.5 and relevant Annex A controls, what is the most pressing documentation gap?",
          options: [
            "The absence of version-controlled source code, since Clause 7.5 requires all documented information to be maintained under formal version control",
            "The lack of comprehensive AI system documentation including the model's intended purpose, training methodology, performance metrics, known limitations, and data provenance, which is required for both operational control and regulatory compliance",
            "The absence of a formal software development lifecycle document, since ISO/IEC 42001 requires adherence to a specific SDLC methodology"
          ],
          correct: 1,
          explanation: "Annex A controls require documentation of AI system characteristics including purpose, methodology, performance, and limitations. While version control is important, the fundamental gap is the absence of comprehensive system documentation. ISO/IEC 42001 does not prescribe a specific SDLC methodology."
        },
        {
          question: "The original development team has left the company. Under Clause 7.1 and 7.2, what is the most critical resource and competence issue Maria should address first?",
          options: [
            "Immediately hire replacements with equivalent technical skills to ensure continuity of AI model development and maintenance",
            "Engage an external AI consultancy to reverse-engineer the existing model and create the missing documentation before any internal hiring decisions",
            "Assess the competence requirements for maintaining and operating the AI system, determine the current competence gap, and plan actions to acquire necessary competence through hiring, training, or external partnerships"
          ],
          correct: 2,
          explanation: "Clause 7.2 requires determining necessary competence, assessing current competence, and taking actions to address gaps. Immediately hiring (option A) skips the assessment step. Outsourcing everything to consultants (option B) may address the immediate need but does not build internal competence as required by the standard."
        },
        {
          question: "Maria discovers that the AI model uses postal code as a direct input feature. Under AI risk treatment and Annex A controls related to fairness, what is the most appropriate action?",
          options: [
            "Remove postal code as an input feature immediately, since any use of geographic data in credit scoring creates discriminatory outcomes",
            "Conduct a thorough analysis to determine whether postal code serves as a proxy for protected characteristics, assess the feature's predictive value versus fairness impact, and implement appropriate controls which may include removal, transformation, or compensatory measures",
            "Retain the postal code feature but add a disclaimer to applicants that geographic data is used, satisfying transparency requirements under Annex A"
          ],
          correct: 1,
          explanation: "A risk-based approach requires analysis before action. Automatic removal (option A) may not address the root cause if other features also serve as proxies. Simply adding a disclaimer (option C) does not treat the fairness risk. The correct approach analyzes the actual impact and implements proportionate controls."
        },
        {
          question: "The AI model was last retrained 14 months ago. Under Clause 8.1 operational controls, what does this indicate?",
          options: [
            "This is acceptable if the model's performance metrics remain within defined thresholds, since ISO/IEC 42001 does not prescribe retraining frequency",
            "The organization lacks adequate operational controls for AI system lifecycle management, since the absence of a defined retraining schedule or performance-triggered retraining criteria suggests the system is not being actively managed",
            "The 14-month gap exceeds the maximum 12-month retraining interval specified in ISO/IEC 42001 Annex B"
          ],
          correct: 1,
          explanation: "While ISO/IEC 42001 does not prescribe specific retraining intervals (making option C incorrect), the absence of any defined criteria for when retraining should occur indicates a gap in operational controls. Option A would be valid only if such thresholds were actually defined and monitored, which the scenario indicates is not the case."
        }
      ]
    },

    // SCENARIO 3: Autonomous Vehicle AI (5 questions) - Domain 4/5
    {
      type: "scenario",
      scenario: "AutoDrive Systems is developing Level 4 autonomous driving technology for urban environments. The company has 300 engineers and has been operating an AIMS for 18 months. During a recent performance evaluation cycle, the internal audit team identifies several findings: the safety validation test suite has not been updated to reflect new traffic scenarios added to the operational design domain; the incident reporting mechanism captures technical failures but not near-miss events; and the AI system's decision-making in ambiguous pedestrian scenarios has not been systematically evaluated since the last major model update. The Head of Safety, Kenji, must address these findings and prepare for the upcoming surveillance audit.",
      questions: [
        {
          question: "The internal audit found that the safety validation test suite does not reflect new traffic scenarios. Under Clause 9.1, what does this finding indicate?",
          options: [
            "The monitoring and measurement program is not aligned with the current operational scope of the AI system, meaning performance evaluation results may not accurately reflect the system's actual capabilities and risks",
            "The internal audit team overstepped their scope by evaluating technical testing procedures, which should be assessed only by the engineering team during operational reviews",
            "This is a minor observation rather than a nonconformity, since the existing test suite still validates the original scenarios and the system remains safe for those conditions"
          ],
          correct: 0,
          explanation: "Clause 9.1 requires monitoring and measurement to be relevant and produce valid results. If the test suite does not cover current operational scenarios, the performance evaluation cannot accurately assess system performance, making it a meaningful finding about the monitoring program's adequacy."
        },
        {
          question: "The incident reporting mechanism does not capture near-miss events. How should Kenji prioritize this finding in the context of Clause 10.1?",
          options: [
            "Near-miss reporting is a best practice but not a requirement under Clause 10.1, which only requires reacting to actual nonconformities that have occurred",
            "Near-miss events represent potential nonconformities and should be captured as part of the organization's approach to preventing recurrence and identifying opportunities for improvement, especially given the safety-critical nature of autonomous driving",
            "Near-miss reporting falls under Clause 9.1 monitoring, not Clause 10.1 nonconformity management, so it should be addressed through the performance evaluation process rather than the improvement process"
          ],
          correct: 1,
          explanation: "For safety-critical AI systems, near-miss events are precursors to actual nonconformities. Clause 10.1 requires organizations to address nonconformities and their causes. A proactive approach that captures near-misses supports the prevention aspect and is essential for autonomous vehicle safety. The distinction between Clause 9.1 and 10.1 in option C is a distraction from the substantive safety requirement."
        },
        {
          question: "The AI system's pedestrian scenario decision-making has not been evaluated since the last major model update. Which AIMS requirement is most directly implicated?",
          options: [
            "Clause 6.2 AI objectives, since the organization likely has safety objectives that depend on validated pedestrian detection and response capabilities",
            "Clause 8.1 operational planning and control, since changes to the AI system should trigger re-evaluation of the system's behavior in critical scenarios as part of change management",
            "Clause 5.1 leadership, since the failure to evaluate critical scenarios after updates reflects inadequate top management oversight"
          ],
          correct: 1,
          explanation: "Clause 8.1 requires operational controls including management of changes that can affect the AI system. A major model update is precisely the type of change that should trigger re-evaluation. While objectives and leadership are relevant, the most direct requirement is operational control of changes."
        },
        {
          question: "Kenji is preparing for the surveillance audit. The auditors will assess continued conformity. What should Kenji prioritize in the preparation?",
          options: [
            "Ensure all documentation from the initial certification is still current and accessible, since the surveillance audit primarily verifies that the documented management system has not deteriorated",
            "Demonstrate that the organization has addressed previous audit findings, maintained effective operations, and shown evidence of continual improvement including how the system has evolved in response to operational experience",
            "Prepare a comprehensive presentation for the auditors showing all improvements made since certification, as surveillance audits focus primarily on evaluating the degree of improvement achieved"
          ],
          correct: 1,
          explanation: "Surveillance audits assess continued conformity, corrective actions from previous findings, and evidence of continual improvement. Simply maintaining documentation (option A) is insufficient. While improvement is important, option C overemphasizes improvement at the expense of demonstrating ongoing operational effectiveness."
        },
        {
          question: "One of the internal audit findings is classified as a major nonconformity. What distinguishes a major from a minor nonconformity in this context?",
          options: [
            "A major nonconformity involves a complete absence or systematic failure of a required element, such as the total lack of change management controls for AI model updates, while a minor nonconformity involves an isolated lapse in an otherwise functioning process",
            "A major nonconformity is any finding related to safety, while a minor nonconformity is any finding related to documentation or administrative processes",
            "The distinction depends on the clause number involved: core clauses (4-10) generate major nonconformities while Annex A control gaps are always classified as minor"
          ],
          correct: 0,
          explanation: "Major nonconformities reflect systemic failures or the absence of required elements, while minor nonconformities are isolated lapses. The classification is not based on the topic (safety vs. documentation) or the clause number, but on the nature and extent of the failure."
        }
      ]
    },

    // SCENARIO 4: Public Sector AI - Municipal Government (5 questions) - Domain 1/3
    {
      type: "scenario",
      scenario: "The City of Westlake is implementing AI across multiple municipal services: a predictive policing system that forecasts crime hotspots, an automated benefits eligibility system for social services, and a chatbot for citizen inquiries. The city's newly hired Chief Digital Officer, Priya, must establish an AIMS covering all three systems. During initial assessment, she discovers that the predictive policing system was developed by an external vendor with limited documentation, the benefits system uses decision trees trained on historical case data that may reflect past discriminatory practices, and the citizen chatbot occasionally generates responses that contradict official city policy. The city council is divided on AI adoption, with some members advocating for full transparency and others concerned about revealing operational details of the policing system.",
      questions: [
        {
          question: "Priya is determining the scope of the AIMS under Clause 4.3. One council member suggests excluding the predictive policing system from scope because it was developed by a vendor. What is the most appropriate response?",
          options: [
            "The predictive policing system should be excluded from scope since the city is a user, not a developer, and vendor-developed systems are outside the organization's control boundaries",
            "ISO/IEC 42001 applies to organizations that provide or use AI systems, so the predictive policing system must be within scope regardless of who developed it, though the scope should clearly define the boundaries of the city's responsibilities versus the vendor's",
            "The system should be included in scope only if the vendor agrees to participate in the AIMS certification process, since shared responsibility requires shared compliance"
          ],
          correct: 1,
          explanation: "ISO/IEC 42001 applies to organizations that provide or use AI systems. The city uses the predictive policing system and must include it in scope. However, the scope definition should clarify the organization's responsibilities versus the vendor's, particularly regarding controls that require vendor cooperation."
        },
        {
          question: "The benefits eligibility system's training data may reflect historical discrimination. Under Clause 6.1 risk assessment and Annex A fairness controls, what is the most critical first step?",
          options: [
            "Immediately retrain the model on a curated dataset that removes all historical bias indicators, then validate the new model before resuming automated decisions",
            "Conduct a systematic AI impact assessment examining the historical data for patterns of discriminatory outcomes, assess the current system's decisions against fairness criteria, and determine whether the system perpetuates or amplifies identified biases",
            "Implement a human-in-the-loop override for all benefits decisions until the AI system can be proven to be completely free of bias"
          ],
          correct: 1,
          explanation: "Before taking corrective action, the organization must understand the nature and extent of the problem. A systematic impact assessment (informed by Annex A controls) establishes the baseline for risk treatment. Retraining without assessment (option A) may not address root causes. Universal human override (option C) may be disproportionate and effectively abandons the AI system."
        },
        {
          question: "The citizen chatbot generates responses that contradict official city policy. Which Annex A control area is most directly relevant?",
          options: [
            "Controls related to AI system verification and validation, ensuring that AI outputs conform to defined requirements and organizational policies before deployment and during operation",
            "Controls related to data quality, since the chatbot's contradictory responses indicate poor quality training data that does not accurately represent city policies",
            "Controls related to third-party and customer relationships, since citizens receiving incorrect information represents a failure in stakeholder management"
          ],
          correct: 0,
          explanation: "Verification and validation controls ensure AI system outputs conform to requirements. Contradicting official policy is a verification/validation failure - the system's outputs do not meet defined requirements. While data quality may contribute to the problem, the most direct control is ensuring the system produces outputs that align with organizational requirements."
        },
        {
          question: "The city council is divided on transparency for the predictive policing system. Under the AIMS framework, how should Priya approach this tension?",
          options: [
            "Recommend full transparency for all AI systems without exception, since ISO/IEC 42001's Annex A controls on transparency require complete disclosure of AI system operations to all stakeholders",
            "Conduct an analysis of transparency requirements considering legal obligations, public interest, legitimate security concerns, and interested party needs, then establish a graduated transparency approach that provides appropriate levels of disclosure for different stakeholders",
            "Defer to the council's decision since transparency is a political matter outside the scope of the AIMS, and document whatever level of transparency the council approves"
          ],
          correct: 1,
          explanation: "Transparency must be balanced against legitimate concerns. Annex A does not mandate absolute transparency - it requires appropriate provision of information. A graduated approach based on stakeholder needs, legal requirements, and legitimate security concerns aligns with the risk-based approach of the standard. Simply deferring to political decision-making (option C) abdicates the AIMS's role in establishing governance."
        },
        {
          question: "Priya identifies that no AI-specific competence requirements have been defined for the city employees who operate these three AI systems. Under Clause 7.2, which approach is most appropriate?",
          options: [
            "Require all employees who interact with AI systems to obtain professional AI certifications before the AIMS certification audit",
            "Define competence requirements specific to each role's interaction with the AI systems, assess current competence levels, and implement training that addresses both AI literacy and the specific risks associated with each system",
            "Hire dedicated AI specialists to operate all three systems, since municipal employees cannot reasonably be expected to develop AI competence"
          ],
          correct: 1,
          explanation: "Clause 7.2 requires determining necessary competence for roles affecting AI system performance, ensuring persons have that competence, and taking actions where needed. Competence requirements should be role-specific and proportionate, not uniform certifications for all (option A) or complete outsourcing to specialists (option C)."
        }
      ]
    },

    // SCENARIO 5: Healthcare AI - Clinical Decision Support (5 questions) - Domain 5/6
    {
      type: "scenario",
      scenario: "PharmaCare Innovations operates an AI-powered clinical decision support system (CDSS) that recommends medication dosages based on patient characteristics. The system has been operational for two years and the AIMS was certified eight months ago. During the latest management review, the Chief Medical Officer reports that three adverse events were potentially linked to AI recommendations in the past quarter, though investigations are ongoing. The internal audit program reveals that auditors lack clinical domain expertise, and the performance evaluation shows that the AI system's recommendation accuracy has declined by 4% compared to the baseline established at certification. The certification body has scheduled a surveillance audit in six weeks.",
      questions: [
        {
          question: "Three adverse events may be linked to AI recommendations. Under Clause 10.1, what is PharmaCare's immediate obligation?",
          options: [
            "Wait for the investigations to conclude before taking any action, since responding to unconfirmed links between the AI and adverse events could cause unnecessary disruption",
            "React to the potential nonconformities by taking immediate action to control and correct them, evaluate the need for action to eliminate causes, implement required actions, review their effectiveness, and update risks and opportunities if necessary",
            "Report the incidents to the certification body immediately, since adverse events in certified AI systems must be disclosed before the next surveillance audit"
          ],
          correct: 1,
          explanation: "Clause 10.1 requires organizations to react to nonconformities (including potential ones), take action to control and correct, evaluate root causes, implement actions, and review effectiveness. Waiting for conclusions (option A) is insufficient when patient safety is at stake. While reporting may eventually be necessary, the standard's primary requirement is the organization's own corrective action process."
        },
        {
          question: "The internal auditors lack clinical domain expertise. Under Clause 9.2, what is the most appropriate remedy?",
          options: [
            "Supplement the internal audit team with clinical experts or technical specialists who can assess the CDSS's clinical appropriateness, while maintaining the auditors' independence from the processes being audited",
            "Outsource the entire internal audit program to a clinical consultancy that specializes in healthcare AI, since internal staff cannot provide adequate audit coverage",
            "Limit the internal audit scope to management system processes and exclude clinical aspects, since ISO/IEC 42001 is a management system standard and clinical validation is outside its scope"
          ],
          correct: 0,
          explanation: "Clause 9.2 requires competent auditors. Supplementing with domain experts while maintaining independence is the appropriate approach. Complete outsourcing (option B) may compromise organizational learning. Excluding clinical aspects (option C) would leave critical aspects of the AI system unaudited."
        },
        {
          question: "The AI system's accuracy has declined 4% from the certification baseline. Under Clause 9.1 and the management review process (Clause 9.3), what conclusion should management draw?",
          options: [
            "A 4% decline is within normal statistical variation for AI systems and does not require action unless it continues for two consecutive quarters",
            "The decline should be assessed against the defined performance thresholds and AI objectives; if it exceeds acceptable limits, it represents a trigger for investigation, potential model retraining, and review of the monitoring approach",
            "The decline demonstrates that the AIMS is failing and the organization should consider withdrawing from the certification process until performance is restored"
          ],
          correct: 1,
          explanation: "Performance evaluation results must be assessed against defined thresholds and objectives. A 4% decline may or may not be significant depending on the organization's defined acceptable limits. The response should be proportionate: investigate, determine causes, and take appropriate action. It does not automatically indicate system failure (option C), nor should it be dismissed without analysis (option A)."
        },
        {
          question: "The surveillance audit is in six weeks. Given the adverse events and performance decline, what is the most likely outcome if these issues are not adequately addressed?",
          options: [
            "The certification body will suspend the certification pending resolution of the adverse events, since patient safety issues automatically trigger suspension",
            "The auditors will issue nonconformities related to the adequacy of the corrective action process and performance monitoring, and the organization must demonstrate effective response within a defined timeframe to maintain certification",
            "The surveillance audit will be postponed automatically when the certification body is informed of the adverse events, as audits cannot proceed during active incident investigations"
          ],
          correct: 1,
          explanation: "Surveillance auditors assess ongoing conformity and how the organization handles issues. If corrective actions are inadequate, nonconformities will be raised. Certification is not automatically suspended (option A) nor are audits automatically postponed (option C). The organization must demonstrate its management system is functioning, including how it handles problems."
        },
        {
          question: "During the management review under Clause 9.3, the Chief Medical Officer proposes discontinuing the AI CDSS entirely due to the adverse events. What input should inform this decision within the AIMS framework?",
          options: [
            "Management review should consider the results of risk assessments, performance evaluation data, audit findings, corrective action effectiveness, stakeholder feedback, and opportunities for improvement before making such a significant decision",
            "The decision to discontinue an AI system is a business decision outside the scope of the AIMS management review, which should focus only on the management system's effectiveness",
            "ISO/IEC 42001 does not permit discontinuation of AI systems within scope, as this would require a scope reduction that must be approved by the certification body before implementation"
          ],
          correct: 0,
          explanation: "Clause 9.3 management review inputs include results of monitoring, audit findings, corrective actions, and opportunities for improvement. A decision about whether to continue operating an AI system is a significant output of management review that should be informed by all available evidence. The AIMS framework absolutely covers such decisions (option B is wrong), and scope changes are the organization's decision (option C is wrong)."
        }
      ]
    },

    // SCENARIO 6: Fintech - Fraud Detection (5 questions) - Domain 4
    {
      type: "scenario",
      scenario: "SecureBank has deployed an AI-based fraud detection system that monitors real-time transactions across its retail banking network. The system processes 2 million transactions daily and flags approximately 0.3% for review. The AIMS implementation is underway, led by the Operations Director, Chen Wei. During implementation, several challenges emerge: the AI model was trained on data from a previous banking platform and the bank has since migrated to a new core system with different transaction formats; the fraud investigation team reports a high false positive rate causing customer friction; and the bank's cloud service provider recently changed its data processing terms, potentially affecting data residency requirements. The bank operates in a jurisdiction that requires explainability for automated financial decisions affecting customers.",
      questions: [
        {
          question: "The AI model was trained on data from the previous banking platform. Under Clause 8.1 operational controls, what risk does this present?",
          options: [
            "This is a data quality and relevance risk: the model may not accurately detect fraud patterns in the new platform's transaction format, potentially causing both missed fraud and increased false positives",
            "This is primarily a documentation risk: the training data source should be updated in the system documentation but does not affect the model's operational effectiveness",
            "This is an infrastructure risk that falls under IT operations management rather than the AIMS, since the platform migration is a technology decision independent of AI governance"
          ],
          correct: 0,
          explanation: "When the data environment changes significantly (platform migration), the training data may no longer be representative. This is a fundamental operational risk affecting the AI system's effectiveness. Annex A controls on data quality and system validation are directly relevant. It is not merely a documentation issue (option B) and it absolutely falls within AIMS scope (option C)."
        },
        {
          question: "The high false positive rate causes customer friction. Under Annex A controls and the AIMS framework, which approach best addresses this?",
          options: [
            "Adjust the detection threshold to reduce false positives to an acceptable level, prioritizing customer experience since the current threshold is causing more harm through friction than the additional fraud it detects",
            "Establish a systematic approach that balances false positive and false negative rates against defined organizational objectives, implements feedback loops from fraud investigators, and periodically recalibrates the model based on operational data",
            "Accept the high false positive rate as inherent to fraud detection AI and focus instead on improving the investigation team's efficiency in processing flagged transactions"
          ],
          correct: 1,
          explanation: "Operational controls should include systematic performance management with defined objectives, feedback mechanisms, and regular recalibration. Simply adjusting thresholds (option A) is a tactical fix without a systematic approach. Accepting the status quo (option C) ignores the organization's responsibility to optimize AI system performance."
        },
        {
          question: "The cloud provider changed its data processing terms, affecting data residency. Under Clause 4.1 and Annex A controls on third-party relationships, what is the most appropriate response?",
          options: [
            "Immediately migrate all AI processing to an on-premises infrastructure to eliminate third-party data residency risks entirely",
            "Review the changed terms against legal and regulatory data residency requirements, assess the impact on the AI system's compliance posture, and update risk assessments, contractual arrangements, and operational controls as needed",
            "Add the data residency change to the risk register and schedule a review at the next quarterly management review, since contractual changes do not require immediate action"
          ],
          correct: 1,
          explanation: "Changes in third-party terms require prompt assessment of their impact on compliance and risk. Immediate migration (option A) is disproportionate without analysis. Deferring to the next quarterly review (option C) may be too slow if the changes create immediate compliance gaps, particularly for data residency in regulated financial services."
        },
        {
          question: "The jurisdiction requires explainability for automated financial decisions. Under Annex A controls on transparency, what must SecureBank implement?",
          options: [
            "Provide customers with a complete technical explanation of the AI model's architecture and feature weights used in their specific transaction assessment",
            "Implement mechanisms that can provide meaningful explanations of why specific transactions were flagged, at a level appropriate for the audience, along with a process for customers to contest automated decisions",
            "Publish the AI model's source code and training data as part of regulatory transparency requirements, ensuring full reproducibility of any decision"
          ],
          correct: 1,
          explanation: "Explainability requires meaningful, audience-appropriate explanations and contestation mechanisms. Full technical disclosure (option A) would not be meaningful to most customers and may compromise security. Publishing source code and training data (option C) goes far beyond regulatory requirements and creates security risks."
        },
        {
          question: "Chen Wei needs to document the AI system's intended purpose and operational boundaries as part of Annex A controls. Which documentation element is most critical for the fraud detection system?",
          options: [
            "A complete mathematical specification of the ensemble model, including all hyperparameters, feature engineering steps, and training procedures used to develop the current production model",
            "The system's intended use conditions including transaction types covered, known limitations, scenarios where the system should not be relied upon, and the defined boundary between automated decisions and those requiring human review",
            "A comparison document benchmarking the system against competitor fraud detection systems to demonstrate that the organization has selected the most effective approach available"
          ],
          correct: 1,
          explanation: "Annex A requires documenting intended purpose, conditions of use, and known limitations. This includes defining what the system covers, its boundaries, and where human judgment is required. Technical specifications (option A) are supporting documentation, not the primary purpose documentation. Competitor benchmarking (option C) is not a standard requirement."
        }
      ]
    },

    // SCENARIO 7: Public Sector - National Tax Authority (5 questions) - Domain 6
    {
      type: "scenario",
      scenario: "The National Revenue Authority (NRA) uses an AI system to identify potentially fraudulent tax returns for audit selection. The system has been operating under a certified AIMS for two years. A Stage 2 recertification audit has been completed, and the audit team has produced findings. The lead auditor noted: (1) the NRA has not conducted a management review in the past 14 months; (2) the AI system's audit selection criteria have been modified three times without updating the risk assessment; (3) the organization has evidence of internal audits but the audit program does not cover all AIMS processes over the audit cycle; and (4) the NRA implemented a new taxpayer appeals process for AI-selected audits but has not assessed whether this represents a change to the AIMS scope. The NRA's AIMS manager, Henrik, must respond to these findings.",
      questions: [
        {
          question: "The NRA has not conducted a management review in 14 months. How should the audit team classify this finding?",
          options: [
            "Minor nonconformity, since management reviews were previously conducted and the gap represents a temporary lapse in an otherwise functioning process",
            "Major nonconformity, since Clause 9.3 requires management reviews at planned intervals and a 14-month gap suggests a systematic failure of this required process, particularly over a 2-year certification period",
            "Observation only, since the standard does not specify a maximum interval between management reviews, so the organization has discretion to determine appropriate timing"
          ],
          correct: 1,
          explanation: "A 14-month gap in management reviews during a 2-year certification period indicates a systematic failure rather than an isolated lapse. Clause 9.3 requires reviews at 'planned intervals' - if the organization's own planned interval has been exceeded significantly, this represents a major nonconformity. The standard does require planned intervals even if it does not specify exact timing."
        },
        {
          question: "The audit selection criteria were modified three times without updating the risk assessment. Under ISO/IEC 42001, which requirement has been violated?",
          options: [
            "Clause 6.1, since changes to AI system behavior should trigger reassessment of risks and opportunities to ensure the risk treatment plan remains current and adequate",
            "Clause 8.1, since operational changes require documented change requests approved through a formal change advisory board process",
            "Clause 7.5, since modifying system criteria without documentation violates documented information control requirements"
          ],
          correct: 0,
          explanation: "Modifying the AI system's selection criteria changes the risk profile. Clause 6.1 requires addressing risks and opportunities, and changes to the AI system should trigger risk reassessment. While documentation (Clause 7.5) and operational control (Clause 8.1) are also relevant, the fundamental requirement is ensuring the risk assessment reflects the current state of the AI system."
        },
        {
          question: "The internal audit program does not cover all AIMS processes over the audit cycle. Under Clause 9.2, what is the auditor's assessment?",
          options: [
            "This is acceptable if the organization has prioritized high-risk processes for audit, since risk-based auditing does not require covering every process",
            "This is a nonconformity, since the audit program must ensure all relevant AIMS processes are audited over the defined cycle, even if risk-based prioritization determines the frequency and depth",
            "This should be reported as an opportunity for improvement, since partial coverage still demonstrates the organization's commitment to internal audit"
          ],
          correct: 1,
          explanation: "Clause 9.2 requires an audit program that covers all relevant processes. While risk-based prioritization can determine frequency and depth, no process should be completely excluded from the audit cycle. Incomplete coverage is a nonconformity, not merely an observation or opportunity for improvement."
        },
        {
          question: "The new taxpayer appeals process has not been assessed against the AIMS scope. Under Clause 4.3, what should Henrik do?",
          options: [
            "The appeals process is a business process, not an AI process, and therefore falls outside the AIMS scope by definition",
            "Evaluate whether the taxpayer appeals process represents an interface with or dependency on the AI system that should be reflected in the AIMS scope definition, and if so, determine what controls and processes need to be established",
            "Automatically expand the AIMS scope to include the appeals process, since any process related to AI system outcomes must be within scope"
          ],
          correct: 1,
          explanation: "Clause 4.3 requires considering interfaces and dependencies. The appeals process directly relates to AI system outcomes and should be evaluated for scope relevance. It should not be automatically excluded (option A) or automatically included (option C) without assessment."
        },
        {
          question: "Given the four findings from the recertification audit, what is the most likely audit outcome?",
          options: [
            "The certification body will deny recertification entirely, requiring the NRA to start a new initial certification process from Stage 1",
            "The certification body will conditionally recommend recertification pending satisfactory closure of nonconformities within a defined timeframe, with the organization required to provide evidence of corrective actions",
            "The certification body will grant recertification with observations, since recertification audits are less stringent than initial certification and allow more flexibility for findings"
          ],
          correct: 1,
          explanation: "With major and minor nonconformities identified, the typical outcome is conditional recertification requiring corrective action evidence within a specified period. Complete denial (option A) is unusual unless the system is fundamentally non-functional. Recertification audits are not less stringent than initial certification (option C)."
        }
      ]
    },

    // SCENARIO 8: Healthcare AI - Drug Discovery (5 questions) - Domain 1/2
    {
      type: "scenario",
      scenario: "BioGenesis Labs uses AI systems for drug discovery, including a molecular property prediction model and a clinical trial patient matching algorithm. The company is pursuing ISO/IEC 42001 certification as part of its strategy to partner with major pharmaceutical companies. The AIMS implementation team, led by Dr. Sarah Chen, includes representatives from computational chemistry, clinical operations, regulatory affairs, and IT. During a planning workshop, the regulatory affairs manager raises concerns about how the AIMS interacts with existing GxP (Good Practice) quality systems. The computational chemistry team questions whether their AI models, which are used for internal research only and never directly affect patients, need to be governed under the AIMS. Dr. Chen also needs to determine the appropriate AI lifecycle stages for both systems, recognizing that drug discovery AI has unique characteristics compared to other AI applications.",
      questions: [
        {
          question: "The computational chemistry team argues their internal research AI models should be excluded from the AIMS. Under Clause 4.3 scope determination, what is the most appropriate approach?",
          options: [
            "Exclude internal research models from scope since they do not directly affect patients and therefore do not create AI-specific risks requiring management system governance",
            "Include all AI systems regardless of their use case, since ISO/IEC 42001 requires comprehensive coverage of all AI activities within the organization",
            "Evaluate whether the research models' outputs feed into downstream processes that do affect patient outcomes or regulatory submissions, and determine scope based on the complete chain of dependencies and the organization's risk tolerance"
          ],
          correct: 2,
          explanation: "Scope determination requires analyzing the full context including dependencies and interfaces. Research models may inform decisions that eventually affect patient outcomes. The evaluation should consider the complete chain of impact, not just the immediate use case (option A) or an overly broad all-inclusive approach (option B)."
        },
        {
          question: "How should the AIMS integrate with existing GxP quality systems? Under the Harmonized Structure (Annex SL) principles, what is the most effective approach?",
          options: [
            "Maintain the AIMS as a completely separate management system to avoid contaminating the validated GxP environment with AI-specific processes that have not undergone formal validation",
            "Replace the GxP quality systems with the AIMS, since ISO/IEC 42001 provides a more comprehensive governance framework that encompasses quality management",
            "Leverage the common structure shared by ISO management system standards to integrate AIMS requirements into existing quality processes where they align, while establishing AI-specific processes where unique requirements exist"
          ],
          correct: 2,
          explanation: "The Harmonized Structure enables integration across management system standards. Complete separation (option A) creates inefficiency and potential gaps. Replacement (option B) is inappropriate as GxP has regulatory requirements beyond AIMS scope. Integration with targeted AI-specific additions is the most effective approach."
        },
        {
          question: "The molecular property prediction model uses reinforcement learning to optimize drug candidate properties. Under ISO/IEC 22989 classification, what characteristic distinguishes this from the clinical trial patient matching algorithm's supervised learning approach?",
          options: [
            "Reinforcement learning systems learn by interacting with an environment and optimizing cumulative rewards, requiring controls for exploration strategies and reward function design, while supervised learning maps labeled inputs to outputs requiring controls focused on training data quality and labeling accuracy",
            "Reinforcement learning is more advanced and therefore requires stricter governance controls, while supervised learning is a well-established approach that can be governed with lighter controls",
            "The key distinction is computational resource requirements: reinforcement learning requires significantly more processing power, making infrastructure controls the primary differentiator in AIMS governance"
          ],
          correct: 0,
          explanation: "The distinction lies in how each approach learns and the corresponding control requirements. Reinforcement learning's interaction with environments and reward optimization creates different risk considerations than supervised learning's reliance on labeled training data. The governance implications relate to the learning approach, not the perceived advancement level (option B) or computational requirements (option C)."
        },
        {
          question: "Dr. Chen is mapping AI lifecycle stages for the drug discovery context. ISO/IEC 42001 does not prescribe a specific lifecycle model. What is the most appropriate approach for BioGenesis?",
          options: [
            "Adopt a standard software development lifecycle (SDLC) since AI systems are fundamentally software products and should follow established software engineering practices",
            "Define AI lifecycle stages that reflect BioGenesis's specific processes including research hypothesis generation, model development and validation, regulatory submission preparation, and post-market monitoring, mapping AIMS controls to each stage",
            "Use the lifecycle model from ISO/IEC 23053 without modification, since it is the authoritative AI lifecycle reference in the ISO standards ecosystem"
          ],
          correct: 1,
          explanation: "ISO/IEC 42001 allows organizations to define lifecycle stages appropriate to their context. For drug discovery, the lifecycle has unique stages that differ from typical software or AI lifecycles. A standard SDLC (option A) may not capture drug discovery-specific processes. While ISO/IEC 23053 provides a useful framework (option C), it should be adapted to the organization's specific context rather than adopted without modification."
        },
        {
          question: "Clause 4 through Clause 10 of ISO/IEC 42001 follow the Harmonized Structure. Which statement best describes how Clauses 4 through 10 relate to the Plan-Do-Check-Act (PDCA) cycle?",
          options: [
            "Clauses 4-6 map to Plan, Clause 7-8 to Do, Clause 9 to Check, and Clause 10 to Act, though in practice these phases overlap and interact continuously rather than following a strictly sequential flow",
            "The PDCA cycle only applies during the initial implementation project and is replaced by continuous monitoring once the AIMS is operational",
            "Each clause contains its own complete PDCA cycle, meaning there are seven independent improvement cycles operating simultaneously within the AIMS"
          ],
          correct: 0,
          explanation: "The Harmonized Structure maps to PDCA with Clauses 4-6 (context, leadership, planning) as Plan, Clauses 7-8 (support, operation) as Do, Clause 9 (performance evaluation) as Check, and Clause 10 (improvement) as Act. In practice, these phases are iterative and overlapping rather than strictly sequential."
        }
      ]
    },

    // SCENARIO 9: Autonomous Vehicles - Fleet Management (5 questions) - Domain 5
    {
      type: "scenario",
      scenario: "TransitAI operates an autonomous shuttle service in a smart city pilot program, with 20 autonomous vehicles carrying passengers on fixed routes. The AIMS has been operational for one year. The performance evaluation program includes monitoring metrics for route completion, passenger safety incidents, system availability, and AI decision quality. During the latest evaluation cycle, the following data emerges: route completion rate is 94% (target: 98%); zero safety incidents involving passengers; the AI system made three unexpected route deviations in the past month due to sensor misinterpretation of construction zones; and customer satisfaction surveys show 78% approval rating with complaints centered on the vehicles' overly cautious behavior causing delays. The AIMS manager, Aisha, must present these results to top management and propose improvement actions.",
      questions: [
        {
          question: "The route completion rate is 94% against a 98% target. Under Clause 9.1, how should Aisha categorize this result?",
          options: [
            "This is an underperforming metric that requires root cause analysis to determine whether the gap results from AI system limitations, environmental factors, or operational constraints, with appropriate corrective actions based on the findings",
            "This is within acceptable statistical variation for autonomous systems and should not be flagged as a concern unless the rate drops below 90%",
            "This represents a nonconformity that must be formally raised under Clause 10.1, since any deviation from a defined target constitutes a failure of the management system"
          ],
          correct: 0,
          explanation: "A gap between actual performance and defined targets requires analysis to understand the cause. The 4% gap should not be dismissed without investigation (option B), but it also does not automatically constitute a formal nonconformity (option C) unless the organization's own criteria define it as such. Root cause analysis determines the appropriate response."
        },
        {
          question: "The three unexpected route deviations due to sensor misinterpretation represent what type of finding under the AIMS?",
          options: [
            "These are operational incidents that should be documented, analyzed for root causes, and used to improve the AI system's sensor interpretation algorithms and operational controls for construction zone detection",
            "These are minor technical glitches that fall outside AIMS scope since they relate to hardware sensor performance rather than AI system decision-making",
            "These should be reported as safety nonconformities under Clause 10.1 since any unplanned deviation in autonomous vehicle behavior poses an immediate safety risk"
          ],
          correct: 0,
          explanation: "Sensor misinterpretation leading to route deviations involves the AI system's processing of sensor data, which is clearly within AIMS scope. These should be documented and analyzed for improvement. They are not outside AIMS scope (option B) since the AI system's interpretation of sensor data is a core function. Whether they are formal nonconformities (option C) depends on the organization's defined criteria."
        },
        {
          question: "Customer complaints about overly cautious behavior relate to which AIMS consideration?",
          options: [
            "This is solely a product design issue outside the AIMS scope, since customer preferences about vehicle behavior do not affect AI system governance",
            "This relates to the balance between safety objectives and user experience, which should be reflected in AI objectives (Clause 6.2) and considered when evaluating AI system performance to ensure objectives are appropriately balanced",
            "Customer satisfaction is addressed through ISO 9001 quality management and should not be duplicated within the AIMS"
          ],
          correct: 1,
          explanation: "AI objectives should consider multiple dimensions including safety and user experience. Overly cautious behavior may indicate that safety parameters need calibration against other objectives. This is within AIMS scope as it relates to AI system behavior and performance. It should not be dismissed as outside scope (option A) or deferred to another management system (option C)."
        },
        {
          question: "Aisha needs to present performance evaluation results to top management under Clause 9.3. What is the most effective way to structure this presentation within the management review framework?",
          options: [
            "Present all performance metrics with trend analysis comparing current performance to previous periods, include the status of corrective actions from previous reviews, provide analysis of the operating environment changes, and propose specific decisions and actions for management consideration",
            "Present only the metrics that have not met targets, since management review time is limited and should focus exclusively on problems requiring executive intervention",
            "Present a high-level dashboard summary with green/amber/red status indicators, since top management should not be burdened with detailed performance data that is better handled at operational levels"
          ],
          correct: 0,
          explanation: "Clause 9.3 specifies inputs for management review including results of previous actions, performance and effectiveness information, and opportunities for improvement. A comprehensive presentation with trends, action status, and proposed decisions enables informed management review. Focusing only on failures (option B) omits important context. An oversimplified dashboard (option C) may not provide sufficient information for meaningful management decisions."
        },
        {
          question: "The zero safety incidents is a positive result. Under the AIMS continual improvement framework, how should this metric be treated?",
          options: [
            "Zero incidents confirms the system is working correctly and no further safety-related improvement actions are needed for this evaluation period",
            "While zero incidents is positive, the organization should investigate whether the measurement approach captures all relevant safety events, whether the cautious behavior is masking potential safety issues, and whether proactive safety improvements can be identified from near-miss data and operational analytics",
            "Zero incidents should be reported to the certification body as evidence of AIMS effectiveness, as this metric will be a key factor in the next surveillance audit"
          ],
          correct: 1,
          explanation: "Continual improvement means even positive results should be critically examined. Zero incidents could mask measurement gaps (are near-misses captured?), behavioral compensation (is overly cautious behavior preventing incidents but creating other issues?), or missed improvement opportunities. Simply accepting the number at face value (option A) contradicts the improvement mindset."
        }
      ]
    },

    // SCENARIO 10: Public Sector - Immigration AI (5 questions) - Domain 3/6
    {
      type: "scenario",
      scenario: "The Department of Immigration and Border Protection (DIBP) has deployed an AI system that assists in visa application processing by scoring applications based on risk factors and recommending approval, further review, or denial. The system processes 10,000 applications weekly. The department is undergoing its initial Stage 1 certification audit. The audit team has reviewed the AIMS documentation and identified that: the AI policy references 'responsible AI' but does not include specific commitments to fairness in immigration decisions; the risk assessment addresses technical risks but does not adequately consider the impact of erroneous decisions on applicants; the scope statement is ambiguous about whether consular posts abroad that use the system's outputs are within scope; and the Statement of Applicability excludes controls related to human oversight on the basis that the system only 'recommends' decisions. The Stage 1 audit team must provide its assessment.",
      questions: [
        {
          question: "The AI policy references 'responsible AI' without specific commitments to fairness. Under Clause 5.2, what should the Stage 1 auditors conclude?",
          options: [
            "The policy meets Clause 5.2 requirements since it includes a commitment to responsible AI, which inherently encompasses fairness, and the specific implementation details belong in operational procedures rather than the policy",
            "The policy should include commitments specific to the organization's context, which for immigration processing includes fairness in decision-making, non-discrimination, and consideration of the significant impact that visa decisions have on applicants' lives",
            "The policy is a strategic document and should remain general; auditors should assess fairness commitments in the risk assessment and operational controls rather than the policy itself"
          ],
          correct: 1,
          explanation: "Clause 5.2 requires the AI policy to be appropriate to the purpose and context of the organization. For an immigration authority using AI in visa processing, fairness and non-discrimination are fundamental contextual requirements that should be explicitly reflected in the policy, not left as implicit interpretations of 'responsible AI.'"
        },
        {
          question: "The risk assessment does not adequately consider the impact of erroneous decisions on applicants. What specific gap does this represent?",
          options: [
            "The risk assessment fails to consider all relevant AI-specific risks as required by Clause 6.1, since the impact on individuals affected by AI system outputs is a fundamental dimension of AI risk that must be assessed alongside technical risks",
            "This is an acceptable limitation since Clause 6.1 requires assessing risks to the organization, and applicants are external parties whose impacts are addressed through legal compliance rather than risk assessment",
            "The risk assessment should focus on technical and operational risks; the impact on applicants is an ethical consideration that is addressed through the AI policy rather than the risk assessment process"
          ],
          correct: 0,
          explanation: "Clause 6.1 and Annex A require consideration of AI system impacts on individuals and groups. For immigration AI, the impact of erroneous decisions (wrongful denial, delayed processing) is a core AI risk that must be assessed. Risk assessment cannot be limited to technical/operational risks (option B and C) when the AI system directly affects people's lives."
        },
        {
          question: "The scope statement is ambiguous about consular posts abroad. What should the Stage 1 auditors recommend?",
          options: [
            "Consular posts should be excluded from scope since they are in different jurisdictions and the AIMS can only cover the domestic operations where the AI system is maintained",
            "The scope must be clarified to define the boundary between the AIMS's coverage and consular operations, including whether consular posts' use of AI system outputs creates interfaces or dependencies that must be managed within the AIMS",
            "All consular posts must be included in scope since they use the AI system's outputs, and excluding them would undermine the integrity of the management system"
          ],
          correct: 1,
          explanation: "Stage 1 auditors assess whether the scope is clearly defined and appropriate. Ambiguity must be resolved. The answer is not automatic inclusion or exclusion but clarity about boundaries and management of interfaces, consistent with Clause 4.3 requirements."
        },
        {
          question: "The SoA excludes human oversight controls because the system 'only recommends' decisions. Is this exclusion justified?",
          options: [
            "The exclusion is justified since human oversight controls apply only to fully automated decision systems, and a recommendation system inherently includes human oversight through the decision-maker who reviews recommendations",
            "The exclusion is not justified because the SoA must include all Annex A controls without exception, and exclusion of any control is a nonconformity",
            "The exclusion requires further analysis: the auditors should assess whether the 'recommendations' effectively function as decisions in practice, whether decision-makers have adequate information and authority to override recommendations, and whether the volume of applications makes meaningful human review feasible"
          ],
          correct: 2,
          explanation: "The characterization of the system as 'only recommending' must be verified against actual practice. If recommendations are rarely overridden, or if the volume makes meaningful review impractical, the system may effectively be making decisions. The SoA exclusion justification must be based on reality, not labels. Controls can be excluded from the SoA with justification (option B is wrong), but the justification must be valid."
        },
        {
          question: "Based on the Stage 1 findings, what is the most appropriate Stage 1 audit conclusion?",
          options: [
            "The Stage 1 audit should recommend proceeding to Stage 2, since all findings are documentation gaps that can be addressed before Stage 2 and do not indicate fundamental AIMS design failures",
            "The Stage 1 audit should identify the gaps as areas requiring resolution before Stage 2 can proceed, with the organization needing to demonstrate that the policy, risk assessment, scope, and SoA have been adequately addressed",
            "The Stage 1 audit should recommend that the organization withdraw its certification application and restart the implementation, as the number of findings indicates the AIMS is not ready for certification"
          ],
          correct: 1,
          explanation: "Stage 1 audits assess readiness for Stage 2. The findings indicate significant gaps that must be addressed before the organization is ready. This does not mean the application must be withdrawn (option C), but Stage 2 should not proceed until the identified areas are adequately resolved. Simply dismissing them as documentation gaps (option A) underestimates their significance."
        }
      ]
    },

    // STANDALONE QUESTIONS (30 questions)
    {
      type: "standalone",
      questions: [
        // Domain 1 - Fundamentals (7 questions to reach 17 total for Domain 1)
        {
          question: "An organization uses a neural network that learns to classify images without being told what features to look for. According to ISO/IEC 22989, this is best described as which type of learning?",
          options: [
            "Transfer learning, because the model transfers knowledge from raw pixels to classification categories",
            "Representation learning, because the model automatically discovers the representations needed for classification from raw data",
            "Active learning, because the model actively identifies the most informative features during training"
          ],
          correct: 1,
          explanation: "Representation learning is the process where a model automatically discovers the representations or features needed for a task from raw data, without manual feature engineering. This is distinct from transfer learning (reusing knowledge across tasks) and active learning (selecting the most informative training examples)."
        },
        {
          question: "A logistics company uses an AI system that learns optimal warehouse picking routes by trial and error, receiving rewards for efficient paths and penalties for delays. Which machine learning paradigm does this represent?",
          options: [
            "Supervised learning, since the system learns from labeled examples of efficient and inefficient routes",
            "Reinforcement learning, since the system learns through interaction with its environment using a reward signal to optimize behavior over time",
            "Unsupervised learning, since the system discovers optimal routes without being given explicit examples of correct paths"
          ],
          correct: 1,
          explanation: "Reinforcement learning involves an agent learning through interaction with an environment, receiving rewards or penalties based on actions. The warehouse picking optimization uses trial-and-error with reward signals, which is the defining characteristic of reinforcement learning."
        },
        {
          question: "What is the primary purpose of ISO/IEC 42001 as defined in Clause 1?",
          options: [
            "To establish requirements for ethical AI development including specific technical standards for fairness and transparency in AI algorithms",
            "To specify requirements for establishing, implementing, maintaining, and continually improving an AI management system within the context of the organization",
            "To provide a certification framework for AI products and services, ensuring they meet defined safety and performance benchmarks"
          ],
          correct: 1,
          explanation: "Clause 1 defines ISO/IEC 42001 as specifying requirements for an AI management system (AIMS). It is not a technical standard for algorithms (option A) or a product certification framework (option C). It governs the management system within which AI is developed, provided, or used."
        },
        {
          question: "An AI system uses a knowledge graph to represent relationships between medical concepts and assist in diagnosis. According to ISO/IEC 22989, this approach is best categorized under which AI paradigm?",
          options: [
            "Statistical AI, because the system statistically correlates symptoms with diagnoses based on the frequency of relationships in the knowledge graph",
            "Symbolic AI, because the system uses explicit representations of knowledge and relationships to reason about medical concepts",
            "Connectionist AI, because the system connects nodes of medical knowledge in a network structure similar to neural connections"
          ],
          correct: 1,
          explanation: "Symbolic AI uses explicit representations of knowledge, rules, and relationships for reasoning. A knowledge graph with defined medical concept relationships is a symbolic approach. It differs from statistical/connectionist approaches that learn patterns from data rather than using explicitly encoded knowledge."
        },
        // Domain 2 - AIMS Requirements (5 questions)
        {
          question: "Clause 4.4 requires the organization to establish, implement, maintain, and continually improve the AIMS. What does 'maintain' specifically entail in this context?",
          options: [
            "Keeping the AIMS documentation physically stored in a secure location with regular backup procedures",
            "Ensuring the AIMS remains operational and effective over time through ongoing management, resource allocation, and adaptation to changing internal and external conditions",
            "Conducting annual recertification audits to verify the AIMS continues to meet ISO/IEC 42001 requirements"
          ],
          correct: 1,
          explanation: "'Maintain' in the context of Clause 4.4 means keeping the AIMS operational, effective, and current through ongoing management activities. It is not limited to document storage (option A) or external audits (option C), but encompasses the continuous effort to keep the system functioning and relevant."
        },
        {
          question: "How does the Harmonized Structure (Annex SL) facilitate integration of ISO/IEC 42001 with other management system standards?",
          options: [
            "It requires all management system standards to use identical controls, making them automatically compatible when implemented together",
            "It provides a common high-level structure, identical core text, and common terms and definitions that create a consistent framework across standards, allowing shared processes for common elements while maintaining standard-specific requirements",
            "It eliminates the need for separate implementation of individual standards, as a single Annex SL-based system satisfies all ISO management system requirements simultaneously"
          ],
          correct: 1,
          explanation: "The Harmonized Structure provides commonality in structure, core text, and terminology. This enables integration by allowing organizations to share processes for common elements (context analysis, leadership, support, etc.) while maintaining standard-specific requirements. It does not make standards identical (option A) or eliminate the need for individual implementation (option C)."
        },
        {
          question: "Under the Harmonized Structure, which clause addresses 'Leadership' and what is its significance for the AIMS?",
          options: [
            "Clause 5, which establishes requirements for top management commitment, AI policy, and organizational roles, ensuring the AIMS has executive sponsorship and clear governance",
            "Clause 4, which establishes leadership requirements as part of the organizational context analysis",
            "Clause 7, which includes leadership under support functions alongside competence and communication"
          ],
          correct: 0,
          explanation: "Clause 5 addresses Leadership, including top management commitment (5.1), policy (5.2), and roles, responsibilities, and authorities (5.3). This is critical for ensuring the AIMS has proper executive support and governance structure."
        },
        {
          question: "ISO/IEC 42001 includes normative Annexes A and B. What is the relationship between these annexes and the main body of the standard?",
          options: [
            "Annex A provides reference controls and Annex B provides implementation guidance; both are informative and organizations may choose whether to use them",
            "Annex A provides reference control objectives and controls that must be considered in the Statement of Applicability, and Annex B provides reference implementation guidance for the controls; both are normative parts of the standard",
            "Annex A replaces the main body requirements for organizations that prefer a controls-based approach, while Annex B provides supplementary controls for high-risk AI applications"
          ],
          correct: 1,
          explanation: "Both Annexes A and B are normative. Annex A provides reference control objectives and controls that must be considered when developing the Statement of Applicability. Annex B provides implementation guidance for those controls. They supplement, not replace, the main body requirements."
        },
        {
          question: "What distinguishes 'shall' requirements from 'should' recommendations in ISO/IEC 42001?",
          options: [
            "'Shall' indicates mandatory requirements that must be met for certification, while 'should' indicates recommended practices that the organization may choose to implement based on its context",
            "'Shall' applies to large organizations and 'should' applies to small organizations, reflecting the standard's scalability approach",
            "'Shall' applies to the main body clauses and 'should' applies to Annex A controls, reflecting the different levels of obligation"
          ],
          correct: 0,
          explanation: "'Shall' indicates mandatory requirements that must be fulfilled for conformity. 'Should' indicates recommendations that are not mandatory but are considered good practice. This distinction applies throughout the standard regardless of organization size (option B) and is not determined by the location of the requirement (option C)."
        },
        // Domain 3 - Planning (10 more questions to reach 20 total)
        {
          question: "An organization identifies that its AI-powered hiring system is subject to employment anti-discrimination law, the EU AI Act classification of 'high-risk,' and internal diversity commitments from the board. Under Clause 4.2, how should these be documented?",
          options: [
            "Each requirement source should be documented separately in three different registers: legal, regulatory, and internal, with no cross-referencing needed",
            "All three should be identified as relevant requirements of interested parties and analyzed to determine their implications for the AIMS, including any conflicts or overlaps between the requirements that need to be resolved",
            "Only the legal and regulatory requirements need to be documented under Clause 4.2, while internal commitments are captured under Clause 5.2 AI policy"
          ],
          correct: 1,
          explanation: "Clause 4.2 requires identifying interested parties and their relevant requirements. All three sources represent interested party requirements (regulator, EU, board) that must be understood holistically, including potential conflicts or overlaps. Separating them without cross-referencing (option A) may miss interactions. Internal commitments are also interested party requirements (option C)."
        },
        {
          question: "When establishing AI objectives under Clause 6.2, an organization sets a target of 'improving AI model accuracy.' What is insufficient about this objective?",
          options: [
            "The objective is appropriate as stated since it provides a clear direction for AI system improvement",
            "The objective lacks specificity: it should define which AI system, the specific accuracy metric, the baseline, the target value, the timeframe, the responsible party, and how progress will be measured",
            "The objective should focus on business outcomes rather than technical metrics, since Clause 6.2 requires objectives that are aligned with business strategy, not technical performance"
          ],
          correct: 1,
          explanation: "Clause 6.2 requires objectives to be measurable (or capable of performance evaluation), monitored, communicated, and updated. 'Improving AI model accuracy' is too vague. While business alignment (option C) is important, technical metrics can be valid objectives provided they are properly specified."
        },
        {
          question: "An organization's AI risk assessment identifies residual risks that exceed the defined risk acceptance criteria. Under Clause 6.1, what must the organization do?",
          options: [
            "Document the decision to accept the residual risks in the risk treatment plan with appropriate management approval, since risk acceptance is always available as a treatment option regardless of criteria thresholds",
            "Implement additional risk treatment measures to bring residual risks within acceptance criteria, or formally revise the acceptance criteria with appropriate justification and top management approval",
            "Escalate the risks to the certification body for guidance, since the organization cannot independently make decisions about risks that exceed its own acceptance thresholds"
          ],
          correct: 1,
          explanation: "When residual risks exceed acceptance criteria, the organization must either implement further treatment or formally revise the criteria. Simply accepting risks that exceed defined thresholds without adjusting either the risk or the criteria (option A) contradicts the purpose of having acceptance criteria. The certification body does not make risk decisions for the organization (option C)."
        },
        {
          question: "During scope definition, an organization determines that its AI system uses third-party training data from a commercial provider. Under Clause 4.3, how should this dependency be addressed?",
          options: [
            "Third-party training data is outside the organization's scope since the data provider is a separate entity with its own quality controls",
            "The dependency on third-party training data must be identified as an interface or dependency within the scope definition, with controls established to manage data quality, provenance, and compliance requirements",
            "The organization must bring all training data in-house to maintain full control within the AIMS scope, as reliance on external data providers creates unmanageable risks"
          ],
          correct: 1,
          explanation: "Clause 4.3 requires identifying interfaces and dependencies. Third-party data is a dependency that must be managed within the AIMS, even though the provider is external. Excluding it from scope (option A) leaves a critical dependency unmanaged. Requiring in-house data (option C) is impractical and not required by the standard."
        },
        {
          question: "An organization is developing its AI risk assessment methodology. Under Clause 6.1.2, the methodology must be applicable to AI-specific risks. Which approach best fulfills this requirement?",
          options: [
            "Adopt the organization's existing enterprise risk management methodology without modification, since AI risks are a subset of operational risks and do not require special treatment",
            "Develop a risk assessment methodology that incorporates AI-specific risk categories such as bias, transparency, data quality, model drift, and societal impact, while maintaining consistency with the organization's overall risk management framework",
            "Use a purely quantitative risk scoring methodology since AI systems generate measurable outputs that can be objectively assessed"
          ],
          correct: 1,
          explanation: "AI-specific risks require assessment approaches that address unique AI concerns while remaining consistent with the overall risk framework. An unmodified enterprise methodology (option A) may not capture AI-specific risks. A purely quantitative approach (option C) may not adequately address qualitative risks like ethical concerns and societal impact."
        },
        {
          question: "The AI policy under Clause 5.2 must be 'appropriate to the purpose and context of the organization.' An organization operates AI systems in both consumer-facing and internal-only capacities. How should the policy address this?",
          options: [
            "Create two separate AI policies: one for consumer-facing AI and another for internal AI, each tailored to its specific context",
            "Establish a single AI policy that encompasses principles applicable to all AI uses, with the recognition that specific operational procedures and controls will vary based on the use case, risk level, and stakeholder impact",
            "Focus the AI policy exclusively on consumer-facing AI since it carries higher risk, and address internal AI through operational guidelines rather than the formal policy"
          ],
          correct: 1,
          explanation: "Clause 5.2 requires a single AI policy appropriate to the organization's context. The policy should be broad enough to cover all AI uses while recognizing that operational implementation will differ. Separate policies (option A) create governance fragmentation. Excluding internal AI (option C) ignores the requirement for comprehensive coverage."
        },
        // Domain 4 - Implementation (8 more questions to reach 18 total)
        {
          question: "Under Clause 7.3, 'awareness' requires persons doing work under the organization's control to be aware of the AI policy, their contribution to AIMS effectiveness, and implications of not conforming. An organization has 2,000 employees but only 50 work directly with AI systems. Who must be made aware?",
          options: [
            "Only the 50 employees who work directly with AI systems, since awareness requirements apply only to persons whose roles directly involve AI",
            "All persons doing work under the organization's control whose work can affect AIMS effectiveness, which may extend beyond the 50 direct AI workers to include roles in data entry, customer support, management, and other functions that interface with AI system inputs or outputs",
            "All 2,000 employees must receive identical AI awareness training, since the AIMS scope ultimately affects the entire organization"
          ],
          correct: 1,
          explanation: "Clause 7.3 applies to persons whose work affects AIMS effectiveness. This extends beyond direct AI workers to include anyone whose activities interface with AI systems. However, it does not require identical training for everyone (option C) - awareness should be proportionate to each role's impact."
        },
        {
          question: "An organization's Annex A control implementation includes establishing processes for AI system impact assessment. When should impact assessments be performed?",
          options: [
            "Only before initial deployment, as a one-time gate that determines whether the system should proceed to production",
            "Before deployment and at defined intervals throughout the system's lifecycle, as well as when significant changes occur to the system, its data sources, or its operating environment",
            "Only when requested by external stakeholders or regulatory authorities, since impact assessments are resource-intensive and should be conducted on-demand"
          ],
          correct: 1,
          explanation: "AI system impact assessments should be conducted before deployment and throughout the lifecycle, particularly when changes occur. A one-time assessment (option A) does not account for the dynamic nature of AI systems. Waiting for external requests (option C) is reactive rather than proactive."
        },
        {
          question: "Under Clause 7.4, the organization must determine communication needs for the AIMS. What is unique about AI system communication compared to other management system communication?",
          options: [
            "AI communication requirements are identical to those for other management systems, since the Harmonized Structure ensures consistency across all standards",
            "AI systems may require communication about aspects that are unique to AI such as system capabilities and limitations, the role of AI in decision-making, how to interpret AI outputs, and the organization's approach to AI ethics and responsible use",
            "AI communication should be limited to technical audiences who can understand model specifications, since communicating AI concepts to non-technical stakeholders creates confusion and unrealistic expectations"
          ],
          correct: 1,
          explanation: "While the Harmonized Structure provides common communication requirements, AI introduces unique communication needs around system capabilities, limitations, decision roles, output interpretation, and ethical considerations. These go beyond standard management system communications. Limiting to technical audiences (option C) fails to meet the needs of all relevant interested parties."
        },
        {
          question: "Under Clause 7.5, documented information must be controlled. An organization stores its AI model training logs, versioned models, and experiment tracking in a machine learning operations (MLOps) platform. Does this satisfy Clause 7.5?",
          options: [
            "No, Clause 7.5 requires documented information to be maintained in a formal document management system, and MLOps platforms are development tools that do not meet documentation control requirements",
            "Yes, provided the MLOps platform ensures appropriate identification, storage, protection, retrieval, retention, and disposition of the documented information as required by Clause 7.5, with adequate access controls and version management",
            "Partially, the MLOps platform can store technical documentation but the management system documentation must be maintained in a separate, dedicated system"
          ],
          correct: 1,
          explanation: "Clause 7.5 does not prescribe specific tools or systems. Any platform that provides the required controls (identification, storage, protection, retrieval, retention, disposition) can satisfy the requirement. The key is whether the functional requirements are met, not which tool is used."
        },
        {
          question: "An organization is establishing operational controls under Clause 8.1 for an AI system that continuously learns from new data in production. What unique operational control challenge does this create?",
          options: [
            "Continuously learning systems do not require different operational controls than static systems, since the controls apply to the AI system regardless of whether it learns in production",
            "The organization must implement controls to monitor and manage changes in the model's behavior over time, including drift detection, performance boundary enforcement, automatic rollback mechanisms, and governance of the continuous learning process itself",
            "Continuously learning systems should be prohibited under the AIMS because the organization cannot maintain adequate control over a system that modifies itself without explicit human approval"
          ],
          correct: 1,
          explanation: "Continuously learning systems require specific operational controls for managing ongoing model changes. The challenge is that the system evolves without explicit redeployment, requiring drift detection, performance boundaries, and governance of the learning process. This does not mean such systems are prohibited (option C), but they require more sophisticated controls than static systems (option A)."
        },
        // Domain 5 - Monitoring (5 more questions to reach 10 total)
        {
          question: "Under Clause 9.1, the organization must determine what needs to be monitored and measured. For an AI-based recommendation engine in e-commerce, which set of metrics best satisfies this requirement?",
          options: [
            "Click-through rate, conversion rate, and revenue per recommendation, since these business metrics demonstrate the AI system's value to the organization",
            "A balanced set of metrics covering business performance (conversion, revenue), AI system quality (recommendation relevance, diversity, coverage), fairness indicators (equitable treatment across user segments), and operational health (latency, availability, error rates)",
            "Model accuracy, precision, recall, and F1 score measured against a held-out test dataset, since these standard ML metrics provide objective performance measurement"
          ],
          correct: 1,
          explanation: "Monitoring and measurement should cover multiple dimensions relevant to the AIMS. Business-only metrics (option A) miss AI quality and fairness. Model-only metrics (option C) miss operational and business context. A balanced approach covering business, quality, fairness, and operational dimensions provides comprehensive performance evaluation."
        },
        {
          question: "An internal audit of the AIMS reveals that the organization has not evaluated the effectiveness of training provided to AI system operators. Under Clause 7.2, what type of finding is this?",
          options: [
            "An observation, since Clause 7.2 requires ensuring competence but evaluating training effectiveness is a best practice, not a requirement",
            "A nonconformity, since Clause 7.2 requires the organization to ensure that persons are competent, which includes evaluating whether the actions taken to acquire competence (such as training) were effective",
            "Not a finding, since training records are sufficient evidence of competence without separate effectiveness evaluation"
          ],
          correct: 1,
          explanation: "Clause 7.2 requires ensuring competence and evaluating the effectiveness of actions taken. Simply providing training without evaluating whether it achieved competence is insufficient. The organization must verify that training resulted in the required competence, making the absence of effectiveness evaluation a nonconformity."
        },
        {
          question: "During a management review under Clause 9.3, the management team decides to increase the AIMS scope to include a newly acquired subsidiary's AI systems. What subsequent planning activities are required?",
          options: [
            "The scope expansion is effective immediately upon management approval, and no additional planning is needed since the existing AIMS framework applies",
            "The organization must revisit Clauses 4.1, 4.2, and 4.3 for the expanded scope, conduct risk assessments for the subsidiary's AI systems, update the Statement of Applicability, and ensure resources and competence are adequate for the expanded scope",
            "The scope expansion requires a new certification application, as the existing certificate only covers the original scope and cannot be amended"
          ],
          correct: 1,
          explanation: "Scope expansion requires revisiting context analysis, interested parties, risk assessment, and the SoA for the new scope elements. It is not effective immediately without planning (option A), and it does not necessarily require a new certification application (option C) - scope changes can be addressed through the existing certification cycle."
        },
        {
          question: "Under Clause 9.2, the internal audit program must consider 'the importance of the processes concerned.' How should this be applied in an AIMS context?",
          options: [
            "All AIMS processes should receive equal audit attention to ensure comprehensive coverage regardless of their perceived importance",
            "Processes with higher AI risk impact, greater complexity, or previous nonconformities should receive more frequent or detailed audit attention, while maintaining minimum coverage of all processes over the audit cycle",
            "Only processes directly involved in AI system development and deployment need to be audited, since support processes are covered by other management system audits"
          ],
          correct: 1,
          explanation: "The audit program should be risk-based, allocating more attention to processes with higher impact, complexity, or history of issues. Equal treatment of all processes (option A) is inefficient. Excluding support processes (option C) may miss important findings since support processes like competence management and communication directly affect AIMS effectiveness."
        },
        {
          question: "A performance evaluation under Clause 9.1 shows that an AI system's fairness metrics have improved but its accuracy has declined. What should the management review conclude?",
          options: [
            "The improvement in fairness demonstrates AIMS effectiveness and the accuracy decline is an acceptable trade-off that does not require action",
            "The relationship between fairness and accuracy should be analyzed to understand whether the trade-off was intentional and documented, whether it aligns with the organization's AI objectives, and whether it remains within acceptable performance boundaries defined for both dimensions",
            "The accuracy decline indicates the AIMS is not functioning properly and corrective action must be taken to restore accuracy to previous levels regardless of the fairness impact"
          ],
          correct: 1,
          explanation: "Trade-offs between metrics must be analyzed and managed intentionally. Neither accepting the trade-off without analysis (option A) nor prioritizing accuracy regardless of fairness (option C) is appropriate. The organization should understand the relationship, ensure it was intentional, and verify both metrics remain within acceptable boundaries."
        },
        // Domain 6 - Improvement & Audit (5 more questions to reach 10 total)
        {
          question: "During a Stage 2 certification audit, the auditor observes that the organization's corrective action process addresses individual nonconformities but does not analyze whether nonconformities share common root causes. Under Clause 10.1, what is the auditor's assessment?",
          options: [
            "The corrective action process meets minimum requirements since each nonconformity is individually addressed",
            "The process has a gap: Clause 10.1 requires determining whether similar nonconformities exist or could potentially occur, suggesting the need for systemic root cause analysis rather than treating each nonconformity in isolation",
            "This is an opportunity for improvement rather than a nonconformity, since pattern analysis exceeds the requirements of Clause 10.1"
          ],
          correct: 1,
          explanation: "Clause 10.1 explicitly requires determining whether similar nonconformities exist or could potentially occur. This means the organization must look beyond individual cases to identify systemic issues. A process that only addresses individual nonconformities without this analysis has a gap in meeting the requirement."
        },
        {
          question: "An organization receives a minor nonconformity during a certification audit. Under ISO/IEC 17021-1, what is the expected corrective action timeframe?",
          options: [
            "Minor nonconformities must be corrected during the audit itself, before the auditors leave the site",
            "The organization typically has a defined period (often 90 days) to implement corrective actions and provide evidence of closure to the certification body",
            "Minor nonconformities are noted for the next surveillance audit and do not require action before then"
          ],
          correct: 1,
          explanation: "Minor nonconformities require corrective action within a defined period, typically 90 days. They do not need to be corrected immediately during the audit (option A), but they cannot simply wait until the next surveillance audit (option C). The organization must demonstrate corrective action within the timeframe set by the certification body."
        },
        {
          question: "What is the primary purpose of the Stage 1 audit in the initial certification process?",
          options: [
            "To conduct a detailed assessment of the AIMS implementation and determine whether the organization meets all requirements for certification",
            "To evaluate the organization's readiness for Stage 2 by reviewing AIMS documentation, understanding the organization's context, and assessing the adequacy of management system design and planning for the Stage 2 audit",
            "To provide consulting guidance on how the organization should improve its AIMS before the formal Stage 2 assessment"
          ],
          correct: 1,
          explanation: "Stage 1 is a readiness assessment that evaluates documentation, organizational understanding, and management system design. It is not the detailed implementation assessment (that is Stage 2, option A), and auditors cannot provide consulting (option C, which violates independence requirements)."
        },
        {
          question: "Under Clause 10.2, the organization must continually improve the AIMS. What evidence best demonstrates continual improvement to an auditor?",
          options: [
            "A documented continual improvement plan listing all planned improvements for the next three years",
            "Evidence that the organization uses results from monitoring, audits, management reviews, and operational experience to identify and implement improvements, with demonstrable changes to the AIMS that enhance its suitability, adequacy, and effectiveness over time",
            "Records showing annual increases in the budget allocated to the AIMS, demonstrating growing organizational commitment to improvement"
          ],
          correct: 1,
          explanation: "Continual improvement is demonstrated through evidence of the PDCA cycle in action: using evaluation results to identify and implement improvements. A plan without evidence of execution (option A) is insufficient. Budget increases (option C) do not necessarily correlate with improvement. Auditors look for evidence that the system is actually evolving and improving."
        },
        {
          question: "An audit team discovers that an organization's AI system has produced a discriminatory outcome that was not detected by the monitoring process. Under ISO/IEC 17021-1 principles, what should the audit team do?",
          options: [
            "Report the discriminatory outcome directly to the affected individuals and relevant regulatory authorities, as the audit team has an ethical obligation to protect the public",
            "Evaluate whether the monitoring process design is adequate to detect such outcomes, raise a finding against the relevant AIMS requirements, and document the gap in monitoring effectiveness without prescribing the specific corrective action",
            "Advise the organization on how to remediate the discriminatory outcome and improve the monitoring process, since the audit team's expertise should be leveraged to provide practical solutions"
          ],
          correct: 1,
          explanation: "The audit team should assess the management system's adequacy and raise findings as appropriate. They should not report to external parties (option A) as that is the organization's responsibility unless there are specific legal reporting obligations. They should not provide consulting advice on remediation (option C) as that compromises audit independence. The finding should address the system gap, not prescribe solutions."
        }
      ]
    }
  ]
};
