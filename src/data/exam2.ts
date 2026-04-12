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
            "Exclude the plants with lower data quality from the AIMS scope until they can be upgraded to match the data quality standards of the best-performing plants",
            "Assess the data quality variation as a risk factor that affects AI system reliability differently across locations, implement controls proportionate to each plant's data quality level, and establish minimum data quality thresholds below which AI predictions should not be relied upon",
            "Standardize all sensor systems across all plants before proceeding with AIMS implementation, since consistent data quality is a prerequisite for meaningful AI governance"
          ],
          correct: 1,
          explanation: "Risk assessment should account for varying conditions and implement proportionate controls. Excluding plants (option A) narrows scope without addressing the risk. Requiring full standardization before proceeding (option C) delays governance unnecessarily. A risk-based approach with defined thresholds acknowledges varying conditions while maintaining appropriate controls."
        },
        {
          question: "The two plants with intermittent connectivity experience data gaps. Under Annex A controls for data quality and Clause 8.1 operational controls, what is the most appropriate approach?",
          options: [
            "Implement edge computing at those plants so AI inference runs locally without requiring connectivity, eliminating the data gap issue entirely",
            "Establish controls that define how the AI system should operate during data gaps, including fallback procedures, data imputation governance, maximum acceptable gap durations, and requirements for validating predictions made with incomplete data",
            "Disable AI-based predictive maintenance at those plants and rely solely on traditional scheduled maintenance until connectivity is reliably established"
          ],
          correct: 1,
          explanation: "Operational controls should define how the system operates under degraded conditions. Edge computing (option A) addresses one technical solution but does not address the governance of operating with imperfect data. Disabling the system entirely (option C) is disproportionate. Controls for operating during data gaps, including boundaries and validation requirements, provide the appropriate governance framework."
        },
        {
          question: "Maintenance technicians sometimes disagree with the AI's failure predictions. Under Annex A controls related to human oversight, what governance structure best addresses this?",
          options: [
            "Establish a clear escalation process where technician disagreements are documented, analyzed, and used as feedback to improve the AI model, while maintaining defined decision authority that specifies when human judgment can override AI predictions and when AI recommendations must be followed",
            "Always defer to the AI prediction since the system processes more data than any individual technician can consider, and human override introduces inconsistency that undermines the value of the AI system",
            "Always defer to the technician's judgment since they have direct physical observation of the equipment that the AI cannot replicate, making their assessment inherently more reliable"
          ],
          correct: 0,
          explanation: "Effective human oversight requires a structured process for handling disagreements, not absolute deference to either the AI or the human. The governance structure should document disagreements, use them for improvement, and define clear decision authority. Always deferring to AI (option B) eliminates human oversight. Always deferring to humans (option C) negates the AI's value."
        },
        {
          question: "The COO wants to extend the system to predict product quality defects using video feeds. Under Clause 6.1 and operational planning (Clause 8.1), what planning considerations are most important?",
          options: [
            "Conduct a new risk assessment for the expanded functionality including privacy implications of video surveillance, assess the impact on existing data infrastructure, evaluate whether current competencies cover computer vision technology, and determine new interested party requirements",
            "Add the quality prediction module to the existing AIMS scope without additional planning since predictive maintenance and quality prediction use the same underlying AI technology platform",
            "Commission a proof-of-concept before any AIMS planning, since the technical feasibility must be proven before governance can be designed"
          ],
          correct: 0,
          explanation: "Extending AI capabilities requires comprehensive planning including new risk assessment, privacy considerations for video data, competence evaluation for new AI modalities, and stakeholder analysis. Simply extending scope without planning (option B) ignores significant new risks. While technical feasibility matters, AIMS planning should be concurrent with technical development (option C), not sequential."
        },
        {
          question: "Marco needs to define AI objectives under Clause 6.2 for the predictive maintenance system. Which set of objectives best aligns with the standard's requirements?",
          options: [
            "Reduce unplanned downtime by 30% within 12 months, achieve 95% prediction accuracy for critical equipment failures, and implement AI governance awareness training for all maintenance staff across all plants within 6 months",
            "Achieve the best-in-class predictive maintenance performance in the steel manufacturing sector, as measured by industry benchmarks",
            "Minimize false positive predictions to zero, since false alarms waste maintenance resources and erode trust in the AI system"
          ],
          correct: 0,
          explanation: "Clause 6.2 requires objectives that are measurable, monitored, communicated, and updated. Option A provides specific, measurable objectives with timeframes. Industry benchmarking (option B) is vague and depends on external factors. Zero false positives (option C) is likely unrealistic and focuses on a single metric without balance."
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
            "Dismiss the allegations as a competitive tactic by consumer advocacy groups and focus the interested party analysis on customers, regulators, and shareholders who have direct contractual or legal relationships with ShopSmart",
            "Identify consumer protection groups as relevant interested parties, determine their specific requirements regarding pricing transparency and fairness, assess whether the dynamic pricing algorithm creates discriminatory outcomes, and establish controls to monitor and address pricing equity",
            "Commission an independent academic study on algorithmic pricing fairness and defer AIMS implementation until the study concludes, since the organization cannot implement appropriate controls without understanding the full extent of the issue"
          ],
          correct: 1,
          explanation: "Consumer groups are relevant interested parties under Clause 4.2. Their requirements should be identified and the pricing system should be assessed for discriminatory patterns. Dismissing them (option A) ignores a legitimate stakeholder. Deferring implementation pending a study (option C) is unnecessary - the organization can implement governance while investigating the specific concerns."
        },
        {
          question: "The marketing team objects to transparency requirements, citing competitive concerns. Under the AIMS framework, how should this tension be resolved?",
          options: [
            "Exempt the recommendation algorithm from transparency controls since Annex A allows exclusion of controls when there is a legitimate business justification",
            "Implement graduated transparency that provides customers with meaningful information about how recommendations are generated without revealing proprietary algorithmic details, while ensuring the SoA documents the rationale for the level of transparency adopted",
            "Override the marketing team's objections since ISO/IEC 42001 requires full algorithmic transparency and competitive concerns cannot justify non-disclosure"
          ],
          correct: 1,
          explanation: "Transparency does not require revealing proprietary details. A graduated approach provides meaningful information to stakeholders while protecting legitimate competitive interests. Controls can be tailored, not simply exempted (option A). The standard does not require full algorithmic disclosure (option C), but it does require appropriate transparency."
        },
        {
          question: "ShopSmart uses third-party AI models for image recognition. Under Clause 4.3 scope definition and Annex A controls for third-party relationships, how should this be governed?",
          options: [
            "Exclude third-party models from the AIMS scope and rely on the third-party vendor's own AI governance practices, since the organization cannot control how external models are developed",
            "Include the use of third-party AI models within the AIMS scope, establish controls for vendor evaluation, model validation, performance monitoring, and incident management, and define the boundary of responsibility between ShopSmart and the vendor",
            "Require the third-party vendor to obtain ISO/IEC 42001 certification as a contractual condition before their models can be used within ShopSmart's platform"
          ],
          correct: 1,
          explanation: "The use of third-party AI models is within the organization's scope as it uses these systems. Controls should govern the relationship, validation, and monitoring. Exclusion (option A) leaves a dependency unmanaged. Requiring vendor certification (option C) may be impractical and is not a standard requirement, though contractual governance expectations are appropriate."
        },
        {
          question: "ShopSmart operates across 30 countries with varying data protection requirements. Under Clause 4.1 and planning requirements, what is the most practical governance approach?",
          options: [
            "Implement the most restrictive country's data protection requirements across all operations, ensuring compliance everywhere but potentially limiting functionality in less restrictive markets",
            "Develop a baseline AI governance framework that meets common requirements across jurisdictions, with jurisdiction-specific overlays that address local regulatory requirements, and a mechanism for monitoring regulatory changes across all markets",
            "Implement country-specific AI governance for each of the 30 markets, ensuring precise compliance with each jurisdiction's unique requirements"
          ],
          correct: 1,
          explanation: "A baseline with jurisdiction-specific overlays balances comprehensive governance with practical implementation. Applying the most restrictive standard everywhere (option A) may be unnecessarily limiting. Individual governance per country (option C) is impractical at scale and creates inconsistency. A layered approach provides both consistency and local compliance."
        },
        {
          question: "Elena needs to establish Clause 7.4 communication processes for the AIMS. Given ShopSmart's global operation with multiple AI systems, what communication challenge is most critical?",
          options: [
            "Translating all AIMS documentation into the languages of all 30 countries to ensure global accessibility",
            "Establishing clear communication channels that inform relevant stakeholders about how AI is used in their interactions with the platform, how they can obtain information about AI-driven decisions, and how they can raise concerns or seek redress, while balancing transparency with commercially sensitive information",
            "Creating a centralized AI communications team that controls all messaging about AI to ensure consistency and prevent unauthorized disclosures about algorithmic approaches"
          ],
          correct: 1,
          explanation: "Clause 7.4 communication must address stakeholder information needs about AI system interactions. Document translation (option A) is an operational detail, not the core communication challenge. Centralizing all communication (option C) may be practical but the critical challenge is establishing effective channels for stakeholder information, inquiry, and redress."
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
            "This is a success story since the AI correctly identified the threat; the collateral impact on legitimate traffic is an acceptable cost of effective threat detection and does not constitute a nonconformity",
            "This is a nonconformity related to the automated response controls: while the detection was correct, the response action caused unintended harm, indicating that the operational controls for automated response are inadequate and require corrective action",
            "This is an external event beyond the organization's control, since zero-day attacks are unpredictable, and the response should be treated as an act of force majeure rather than a management system failure"
          ],
          correct: 1,
          explanation: "The incident reveals a gap in operational controls. While detection was correct, the automated response caused harm, indicating the response controls need improvement. This is not simply a success (option A) because the outcome caused client loss. It is not force majeure (option C) because the response action was within the organization's control even though the attack was not."
        },
        {
          question: "The automated response thresholds have not been reviewed since initial deployment. Under Clause 9.1 and operational controls, what systemic issue does this reveal?",
          options: [
            "This indicates that the monitoring and measurement program does not include periodic review of AI system parameters, which is essential for systems operating in dynamic threat environments where the effectiveness of static thresholds degrades over time",
            "This is acceptable for the first year of AIMS operations, as the standard recognizes that organizations need time to establish baseline performance before adjusting parameters",
            "This is primarily an IT operations issue that falls outside the AIMS scope, since threshold configuration is a technical setting managed by the security operations center"
          ],
          correct: 0,
          explanation: "AI systems operating in dynamic environments require periodic review of operational parameters. Static thresholds in a changing threat landscape represent a monitoring gap under Clause 9.1. There is no grace period for parameter review (option B), and threshold governance for AI systems is within AIMS scope (option C) as it directly affects AI system behavior."
        },
        {
          question: "The client SLA does not address AI-specific risks. Under Annex A controls and Clause 7.4 communication requirements, what should Yuki recommend?",
          options: [
            "Update SLAs to include AI-specific provisions addressing automated response behavior, false positive rates, notification procedures for AI-driven actions, limitations of AI detection capabilities, and the client's role in validating AI-recommended actions",
            "Keep SLAs focused on traditional service metrics like uptime and response time, since AI-specific SLA terms would expose the organization to liability by explicitly acknowledging AI limitations",
            "Replace SLAs with AI-specific service agreements that comprehensively govern the AI relationship, since traditional SLAs are fundamentally incompatible with AI service delivery"
          ],
          correct: 0,
          explanation: "Annex A controls and Clause 7.4 require appropriate communication with interested parties about AI systems. SLAs should include AI-specific provisions to set clear expectations. Avoiding AI-specific terms (option B) creates unmanaged expectations and does not reduce actual liability. Complete replacement of SLAs (option C) is unnecessary - existing SLAs should be enhanced, not replaced."
        },
        {
          question: "Internal monitoring did not track false positive rates for automated responses. Under Clause 9.1, what monitoring enhancement is most important?",
          options: [
            "Implement tracking of false positive and false negative rates specifically for automated response actions, distinguished from detection-only alerts, with defined thresholds that trigger review and adjustment of response parameters",
            "Implement comprehensive logging of all AI system actions to create a complete audit trail, since monitoring requires capturing every decision the AI makes",
            "Implement real-time dashboards showing all AI system metrics to enable continuous human supervision of all automated responses"
          ],
          correct: 0,
          explanation: "The monitoring gap was specifically about automated response accuracy. Tracking false positive rates for responses (which directly cause business impact) is the most important enhancement. Comprehensive logging (option B) is valuable but does not address the specific gap in outcome monitoring. Real-time dashboards for all actions (option C) may be impractical and does not inherently address the measurement gap."
        },
        {
          question: "Yuki is preparing for the surveillance audit following this incident. What approach best demonstrates AIMS effectiveness to the auditors?",
          options: [
            "Prepare a detailed incident report showing the complete timeline of events, root cause analysis, corrective actions implemented, and evidence that the AIMS processes functioned correctly by detecting the need for improvement and driving change",
            "Minimize discussion of the incident and focus the audit preparation on areas where the AIMS is performing well, since highlighting incidents may create a negative impression",
            "Request a postponement of the surveillance audit until all corrective actions are fully implemented and verified, since presenting incomplete corrective actions demonstrates system immaturity"
          ],
          correct: 0,
          explanation: "Demonstrating how the AIMS handled an incident - detection, analysis, corrective action - actually shows the management system working effectively. Minimizing the incident (option B) is counterproductive since auditors may discover it anyway, and transparent handling demonstrates maturity. Postponing (option C) is unnecessary and may not be possible."
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
            "Schools and education authorities as the primary interested parties, since they are the contractual customers and bear responsibility for their students' data",
            "Students, parents/guardians, teachers, schools, education authorities, data protection authorities, and child protection organizations, with recognition that minors require enhanced protections and that parental interests may differ from student interests",
            "Parents and guardians as the sole interested parties for minor students, since children cannot be independent interested parties under the management system framework"
          ],
          correct: 1,
          explanation: "Processing data from minors requires identifying a broad set of interested parties with enhanced protections. This includes the minors themselves (who have rights regardless of age), parents/guardians, educators, and relevant authorities. Neither limiting to contractual parties (option A) nor excluding children as stakeholders (option C) adequately addresses the context."
        },
        {
          question: "The predictive analytics component may create self-fulfilling prophecies by labeling students as 'at-risk.' Under Annex A controls and AI impact assessment requirements, what risk does this represent?",
          options: [
            "A feedback loop risk where the AI system's predictions influence the environment that generates the data used for future predictions, potentially reinforcing initial classifications regardless of student effort or improvement",
            "A data quality risk since the historical data used to identify at-risk students may not accurately represent current student populations and learning conditions",
            "A transparency risk since students and parents may not be informed that predictive classifications are being made about academic performance"
          ],
          correct: 0,
          explanation: "Self-fulfilling prophecy is a feedback loop risk: the prediction changes behavior toward the student, which reinforces the prediction. This is distinct from data quality (option B) and transparency (option C), though all three risks may be present. The feedback loop risk is the most directly related to the self-fulfilling prophecy concern."
        },
        {
          question: "The essay assessment NLP was trained primarily on English-language academic texts. Under Clause 6.1 risk assessment and Annex A fairness controls, what is the most comprehensive risk characterization?",
          options: [
            "This is a bias risk that will result in systematically lower scores for non-native English speakers, and the model should be disabled for non-English speaking students until retraining is complete",
            "This represents a risk of inequitable assessment that encompasses linguistic bias, cultural bias in evaluating argumentation styles, and potentially discriminatory outcomes for students from diverse backgrounds, requiring analysis of actual assessment patterns across student demographics",
            "This is a technical limitation that should be documented in the system's user guide, informing teachers that essay scores may be less reliable for non-native English speakers"
          ],
          correct: 1,
          explanation: "The risk encompasses multiple dimensions beyond linguistic capability including cultural norms in academic writing and potential discrimination. A comprehensive characterization enables appropriate risk treatment. Disabling the model (option A) may be premature without evidence analysis. Simply documenting the limitation (option C) does not treat the risk."
        },
        {
          question: "Parents and teachers have different expectations about AI in education. Under Clause 4.2, how should conflicting interested party requirements be managed?",
          options: [
            "Prioritize teacher requirements since they are the professional users with educational expertise, and parent requirements should be secondary considerations in the AIMS design",
            "Document both sets of requirements, analyze areas of conflict, establish mechanisms for balancing competing expectations, and ensure the AI policy and system design reflect considered decisions about how conflicts are resolved",
            "Conduct surveys to determine which stakeholder group has stronger objections to AI, and align the AIMS with the majority view to minimize resistance"
          ],
          correct: 1,
          explanation: "Conflicting interested party requirements must be documented and analyzed. The AIMS should establish mechanisms for resolving conflicts through reasoned decisions, not by prioritizing one group (option A) or following majority opinion (option C). Both parent and teacher perspectives are legitimate and must be considered in governance design."
        },
        {
          question: "Dr. Hassan is classifying LearnAdapt's AI systems using AI terminology from ISO/IEC 22989. The adaptive learning path system adjusts content based on student performance. What type of AI system characteristic is most relevant to the AIMS risk assessment?",
          options: [
            "The system's autonomy level, since the degree to which the system independently makes decisions about learning content without teacher intervention determines the risk profile and required controls",
            "The system's computational complexity, since more complex algorithms create greater governance challenges and require more sophisticated monitoring",
            "The system's training data volume, since the amount of student data processed is the primary determinant of AI risk in educational contexts"
          ],
          correct: 0,
          explanation: "The autonomy level - how independently the system makes decisions about learning content - is the most relevant characteristic for risk assessment. Higher autonomy requires stronger controls for oversight and intervention. Computational complexity (option B) and data volume (option C) are relevant technical factors but do not directly determine the governance risk profile."
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
            "A testing gap: the system should have been tested under all weather conditions during development, and the absence of comprehensive testing indicates a development process failure",
            "A calibration gap: the system requires weather-based calibration parameters that should be automatically adjusted, and the documentation gap is secondary to the technical calibration issue"
          ],
          correct: 0,
          explanation: "Annex A requires documenting AI system capabilities and limitations. Known performance degradation under specific conditions is a limitation that must be documented and communicated. While testing (option B) and calibration (option C) may be relevant technical considerations, the primary AIMS gap is the failure to document and communicate the known limitation."
        },
        {
          question: "The irrigation controller firmware update bypassed the change management process. Under Clause 8.1 and the audit preparation context, how should James handle this?",
          options: [
            "Retroactively document the firmware update in the change management system and ensure the change log reflects the update to satisfy auditor documentation requirements",
            "Investigate the firmware update's impact on AI control parameters, assess whether the change altered the risk profile, implement any necessary corrective actions, and strengthen the change management process to prevent recurrence, documenting all of this as evidence for the audit",
            "Report the bypassed change management as a near-miss incident and accept a minor nonconformity during the surveillance audit rather than attempting to address it beforehand"
          ],
          correct: 1,
          explanation: "A bypassed change management process requires investigation, impact assessment, and process improvement. Retroactive documentation alone (option A) does not address the root cause. Accepting the nonconformity without action (option C) fails to demonstrate the AIMS corrective action process is functioning. A thorough response demonstrates management system maturity."
        },
        {
          question: "The yield prediction model underestimates yields for organic farms. Under Clause 10.1 and Annex A fairness-related controls, what does this complaint reveal?",
          options: [
            "This is a customer satisfaction issue that should be handled through the commercial complaints process rather than the AIMS, since yield prediction accuracy is a product quality matter",
            "This may indicate systematic bias in the prediction model arising from training data that underrepresents organic farming practices, constituting a fairness concern that requires investigation of the model's performance across different farming methods and correction of any identified bias",
            "This is an expected limitation since organic farming has more variable yields, and the model's underestimation is a statistical artifact rather than a bias, requiring explanation to the customer rather than model correction"
          ],
          correct: 1,
          explanation: "Systematic underperformance for a specific farming category may indicate bias in the model. This is an AIMS concern related to fairness controls, not merely a commercial complaint (option A). While organic farming variability is real, systematic underestimation suggests a pattern that requires investigation (option C dismisses the concern without analysis)."
        },
        {
          question: "The yield prediction model informs commodity trading decisions. Under Annex A controls on AI system impact assessment, what additional governance consideration does this create?",
          options: [
            "The financial impact of prediction errors extends beyond farming operations to trading positions, requiring the impact assessment to consider downstream economic consequences and the potential for market manipulation, even if unintentional",
            "Commodity trading is a separate business activity from precision agriculture and should be governed under financial regulations rather than the AIMS",
            "The connection between yield prediction and trading decisions should be severed, since using AI predictions for financial decisions creates unacceptable risk that cannot be adequately managed under ISO/IEC 42001"
          ],
          correct: 0,
          explanation: "Impact assessment must consider downstream uses and consequences. When AI predictions inform financial decisions, the impact extends to economic harm and potential market concerns. This is within AIMS scope (option B is wrong) and can be managed with appropriate controls (option C is unnecessarily restrictive). The key is understanding and managing the full chain of impact."
        },
        {
          question: "James is preparing for the first surveillance audit after 14 months of certification. What specific evidence should he prepare regarding continual improvement under Clause 10.2?",
          options: [
            "A list of all AIMS documents that have been updated since certification, demonstrating that the management system documentation is current",
            "Evidence showing how operational experience, monitoring results, audit findings, and management review outputs have driven specific improvements to the AIMS, including changes to processes, controls, risk assessments, or objectives based on lessons learned",
            "A comprehensive improvement roadmap showing planned improvements for the next three years, demonstrating the organization's commitment to long-term AIMS enhancement"
          ],
          correct: 1,
          explanation: "Continual improvement evidence should show the improvement cycle in action: inputs (monitoring, audits, reviews) leading to concrete improvements. Document updates alone (option A) show maintenance, not improvement. Future plans (option C) show intent but not evidence of improvement. Auditors look for evidence that the PDCA cycle has produced actual improvements."
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
            "Trend analysis comparing the decline to industry benchmarks, since a 97.1% detection rate may still exceed aerospace industry standards and therefore may not require corrective action",
            "Root cause analysis examining whether the decline correlates with the expansion to new production lines, changes in product mix, environmental factors, model degradation, or data drift, to determine the specific factor or combination of factors driving the performance change",
            "Statistical significance testing to confirm that the 2.1% decline is not within normal random variation before investing resources in investigation"
          ],
          correct: 1,
          explanation: "Root cause analysis is essential for effective corrective action. Industry benchmarking (option A) does not address why performance is declining. Statistical significance (option C) is one element but should not delay investigation of a consistent downward trend in a safety-critical application."
        },
        {
          question: "The AI system trained on one production line is now used across three lines with different lighting conditions. Under Clause 8.1, what operational control gap does this represent?",
          options: [
            "A deployment validation gap: the AI system was deployed in environments that differ from its training conditions without systematic validation of performance under the new conditions, violating change management and validation requirements",
            "A scope creep issue that should be addressed by restricting the AI system to its original production line until additional training data can be collected",
            "An infrastructure standardization issue that should be resolved by installing identical lighting across all production lines to match the training environment"
          ],
          correct: 0,
          explanation: "Deploying an AI system in conditions different from its training environment without validation is a change management and operational control gap. Restricting to the original line (option B) addresses the symptom but may not be practical. Standardizing lighting (option C) is one possible solution but does not address the governance gap of deploying without validation."
        },
        {
          question: "The false rejection rate increase has caused a 15% rise in rework costs. Under Clause 9.3 management review inputs, how should this be presented?",
          options: [
            "As a financial impact metric demonstrating the business case for improving the AI system, framed to secure additional budget for model retraining",
            "As a performance evaluation result that connects AI system behavior to business outcomes, including the metric trend, root cause analysis, financial impact, and proposed actions with cost-benefit analysis for management decision-making",
            "As an operational efficiency issue that should be managed by the production team rather than escalated to management review, since the financial impact is within the production budget's tolerance"
          ],
          correct: 1,
          explanation: "Management review inputs should connect performance data to business impact with analysis and proposed actions. Simply framing it as a budget request (option A) does not provide adequate analysis. Keeping it at the operational level (option C) denies management the information needed to make informed decisions about AI system performance."
        },
        {
          question: "Internal auditors found that calibration procedures reference an outdated quality standard. Under Clause 9.2, what does this finding indicate about the internal audit function?",
          options: [
            "The internal auditors demonstrated competence by identifying this gap, and the finding indicates a document control issue under Clause 7.5 rather than a failure of the audit program itself",
            "The internal auditors should have identified this gap earlier, and the finding indicates the internal audit frequency for operational procedures is insufficient",
            "The finding is outside the internal audit scope since calibration procedures are technical documents managed under the quality management system, not the AIMS"
          ],
          correct: 0,
          explanation: "This is a positive finding by competent auditors identifying a document control gap (Clause 7.5). The primary issue is that documented information references outdated standards, not that the audit program failed. Calibration of AI inspection systems is within AIMS scope (option C is wrong), and the timing of the audit program (option B) is not directly implicated by this finding."
        },
        {
          question: "Dr. Svensson needs to determine monitoring frequency for the AI inspection system. Under Clause 9.1, what factors should determine the monitoring interval?",
          options: [
            "Monthly monitoring is sufficient for all AI systems in manufacturing environments, as this provides adequate visibility into performance trends without creating excessive monitoring overhead",
            "The monitoring frequency should be determined by the AI system's criticality, the rate of environmental change, historical performance variability, and the consequences of undetected performance degradation, with more frequent monitoring for higher-risk applications",
            "Continuous real-time monitoring is required for all safety-critical AI systems, since any gap in monitoring creates unacceptable risk of undetected failures"
          ],
          correct: 1,
          explanation: "Monitoring frequency should be risk-based and context-dependent. A fixed monthly schedule (option A) may be inadequate for rapidly changing environments. Continuous real-time monitoring for everything (option C) may be desirable but is not a universal requirement and may not be practical. The factors listed in option B provide a rational basis for determining appropriate frequency."
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
            "The limited evidence is acceptable for an initial Stage 2 audit, as organizations are expected to mature their processes after certification is granted",
            "The audit team should extend the Stage 2 audit duration to gather additional evidence, since the organization's readiness is ultimately determined by the depth of evidence collected during the audit"
          ],
          correct: 0,
          explanation: "Stage 2 assesses implementation and effectiveness. If processes show limited operational evidence, the management system may not have been operational long enough. The standard expects adequate operational history before Stage 2, not maturation after certification (option B). Extending the audit (option C) cannot compensate for insufficient operational history."
        },
        {
          question: "The risk treatment plan references controls 'planned for Q2' rather than implemented. Under Clause 6.1 and the Stage 2 audit requirements, how should the auditors evaluate this?",
          options: [
            "Planned controls are acceptable if the organization can demonstrate a credible implementation timeline, since risk treatment is a progressive process and not all controls need to be in place at certification",
            "This represents a nonconformity: the risk assessment has identified a risk and the treatment plan does not include implemented controls to address it, meaning the risk is currently untreated, which is a gap in the AIMS if the risk exceeds acceptance criteria",
            "The auditors should assess whether interim measures are in place to manage the risk until the planned controls are implemented, and evaluate this as part of the overall risk treatment adequacy"
          ],
          correct: 1,
          explanation: "At Stage 2, risk treatment must be implemented, not merely planned. If a risk is identified as requiring treatment but the controls are not yet implemented, the risk is untreated. While interim measures (option C) might mitigate this, the scenario does not indicate any interim measures are in place. The finding is that identified risks lack implemented treatment."
        },
        {
          question: "The SoA excludes AI system lifecycle management controls because the system is 'in production and not actively being developed.' Is this exclusion justified?",
          options: [
            "The exclusion is justified because lifecycle management controls are specifically for systems in development, and a production system's governance needs are adequately covered by operational controls",
            "The exclusion is not justified: AI systems in production still require lifecycle management including monitoring for degradation, planning for retraining, managing retirement or replacement, and addressing changes in the operating environment",
            "The exclusion is partially justified, but should be reframed as 'lifecycle management controls are applicable only to the operational and retirement phases' rather than excluded entirely"
          ],
          correct: 1,
          explanation: "AI system lifecycle management extends beyond development. Production systems require ongoing lifecycle management including performance monitoring, model currency, retirement planning, and environmental change management. Excluding lifecycle management because the system is 'in production' reflects a misunderstanding that lifecycle only covers development."
        },
        {
          question: "The AI system shows strong accuracy for the dominant user demographic but no subgroup analysis has been conducted. Under Annex A controls and the audit evaluation, what finding should the auditors raise?",
          options: [
            "An observation suggesting that demographic subgroup analysis would be beneficial, but noting that it is not explicitly required by ISO/IEC 42001 since the overall accuracy metrics demonstrate system effectiveness",
            "A nonconformity related to Annex A controls on fairness and bias assessment, since the organization has not demonstrated that the AI system performs equitably across user demographics, which is a fundamental requirement for systems that affect access to services based on individual characteristics",
            "A minor nonconformity related to monitoring and measurement under Clause 9.1, since the performance evaluation does not include sufficient granularity to identify potential demographic disparities"
          ],
          correct: 1,
          explanation: "For a behavioral authentication system that affects user access, failing to analyze performance across demographics is a fairness concern. Annex A controls require assessing AI systems for bias. Overall accuracy masking demographic disparities is a well-known AI fairness issue. This is more than an observation (option A) given the system's impact on access. While Clause 9.1 is relevant (option C), the more fundamental issue is fairness assessment."
        },
        {
          question: "Considering all four findings collectively, what is the most likely Stage 2 audit recommendation?",
          options: [
            "Recommend certification with minor nonconformities that must be closed within the defined timeframe, since the AIMS framework is in place even though some elements need maturing",
            "Do not recommend certification at this time, as the combination of limited operational evidence, untreated risks, unjustified SoA exclusions, and unaddressed fairness analysis indicates the AIMS is not yet effectively implemented",
            "Recommend a partial certification covering only the aspects of the AIMS that are fully operational, with a plan to extend certification scope as remaining elements are implemented"
          ],
          correct: 1,
          explanation: "The collective findings indicate systemic implementation gaps rather than isolated issues. Limited operational evidence, untreated risks, unjustified exclusions, and missing fairness analysis together suggest the AIMS is not ready for certification. Partial certification (option C) is not a standard certification outcome. The combination of findings is too significant for certification with minor nonconformities (option A)."
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
            "Retrain the model exclusively on current policy documents, removing all historical transcripts from the training data to eliminate the source of contradictory information",
            "Implement a multi-layered approach: establish a policy verification mechanism that cross-references generated responses against current policy documents, implement a feedback loop for agents to flag incorrect responses, and define a process for periodic retraining with updated policy data",
            "Replace the generative response system with a retrieval-based system that only uses pre-approved response templates, eliminating the risk of generating contradictory information"
          ],
          correct: 1,
          explanation: "A multi-layered approach addresses the immediate issue and establishes ongoing controls. Retraining only on policy documents (option A) loses valuable conversational patterns. Replacing with templates (option C) is a valid option but may be disproportionate if the generative system provides value. The multi-layered approach balances risk treatment with system capability."
        },
        {
          question: "The sentiment analysis misclassifies assertive communication as 'angry' for certain cultural styles. Under Annex A fairness controls, what does this represent?",
          options: [
            "A cultural bias in the sentiment model that could lead to discriminatory service outcomes, where customers from certain cultural backgrounds systematically receive different treatment through unnecessary escalation, requiring assessment of the model's behavior across cultural communication styles",
            "A model accuracy issue that should be addressed through additional training data covering diverse communication styles, without requiring a formal fairness assessment since sentiment analysis is not a decision-making system",
            "An acceptable limitation of sentiment analysis technology, since cultural nuance is inherently difficult for AI systems and the escalation does not harm customers since they receive human attention"
          ],
          correct: 0,
          explanation: "Cultural misclassification leading to differential service treatment is a fairness concern under Annex A. Even though escalation results in human attention (option C), the systematic differential treatment based on cultural communication style is discriminatory in effect. This is more than a simple accuracy issue (option B) - it has fairness implications requiring formal assessment."
        },
        {
          question: "Fatima discovers that controls related to AI system lifecycle and responsible AI have not been addressed. Under the AIMS implementation approach, what is the most appropriate response?",
          options: [
            "Prioritize implementing the missing controls based on their relevance to the organization's risk profile, ensuring that the most critical gaps are addressed first while maintaining a plan for complete control implementation",
            "Postpone the certification timeline until all Annex A controls are fully implemented, since partial implementation will result in automatic audit failure",
            "Exclude the unimplemented controls from the Statement of Applicability to align the SoA with the current implementation state"
          ],
          correct: 0,
          explanation: "Implementation should be prioritized based on risk and relevance. Not all controls need to be at the same maturity level simultaneously. Postponing everything (option B) may be unnecessary if the most critical controls can be implemented quickly. Excluding controls from the SoA (option C) should only be done if the controls are genuinely not applicable, not because they have not been implemented yet."
        },
        {
          question: "The AIMS implementation is in month six. Under the Harmonized Structure and Clause 4.4, what must the organization demonstrate at this stage?",
          options: [
            "A fully operational AIMS with evidence of at least one complete management review cycle and internal audit",
            "Evidence of systematic progress in establishing and implementing the AIMS, with documented processes, initial risk assessments, and defined controls, even if full operational maturity has not been achieved",
            "Only documented plans and policies, since the first six months of implementation should focus on planning before operational activities begin"
          ],
          correct: 1,
          explanation: "At six months, the organization should show systematic progress in implementation. Full operational maturity (option A) may not be expected this early, but there should be more than just plans (option C). Evidence of active implementation - documented processes, initial assessments, and defined controls - demonstrates appropriate progress."
        },
        {
          question: "Fatima wants to ensure the AIMS documentation meets Clause 7.5 requirements. The organization has documentation scattered across a wiki, SharePoint, and individual team drives. What is the most critical action?",
          options: [
            "Migrate all documentation to a single centralized platform to ensure consistency and ease of access during certification audits",
            "Ensure that wherever documentation is stored, it meets Clause 7.5 requirements for identification, format, review and approval, availability, storage, version control, retention, and disposition, with a document register that enables retrieval across all platforms",
            "Create a dedicated AIMS document management system separate from existing platforms, since management system documentation requires specialized controls that general-purpose platforms cannot provide"
          ],
          correct: 1,
          explanation: "Clause 7.5 defines functional requirements for documented information control, not the specific tool or platform. Documentation can be distributed across systems provided the functional requirements are met. Centralization (option A) may help but is not required. A specialized system (option C) is unnecessary if existing platforms can meet the requirements."
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
            "Include all three AI systems in a single AIMS scope from the outset, since they are interconnected components of the same supply chain and managing them separately would create governance gaps at their interfaces",
            "Start with the highest-risk AI system (crop disease prediction, given the food safety implications) and progressively expand scope to include the other systems, ensuring each addition includes proper context analysis and risk assessment",
            "Define the scope to include all three systems but implement controls in phases based on risk priority, with the scope statement clearly identifying which controls apply to which systems and at what implementation stage"
          ],
          correct: 2,
          explanation: "Including all systems in scope but phasing control implementation based on risk priority provides comprehensive governance while being practical. Starting with only one system (option B) may miss critical interfaces. Including everything at the same implementation level (option A) may be unrealistic given different maturities. A phased control approach within a comprehensive scope balances completeness with practicality."
        },
        {
          question: "The satellite imagery source is a government space agency with periodic outages. Under Clause 4.1 external context analysis, how should this dependency be characterized?",
          options: [
            "As a technology dependency that should be addressed through IT disaster recovery planning rather than the AIMS, since satellite infrastructure is beyond the organization's control",
            "As an external factor that affects the organization's ability to achieve AIMS objectives, requiring assessment of the impact of data availability on AI system performance and the establishment of contingency plans for periods of reduced data availability",
            "As a supply chain risk that falls under the logistics optimizer's risk assessment rather than the AIMS context analysis"
          ],
          correct: 1,
          explanation: "Dependencies on external data sources that affect AI system performance are relevant external issues under Clause 4.1. This is an AIMS concern (not just IT, option A) because the data availability directly affects AI system performance. It is a context-level issue (not system-specific, option C) because it affects the organization's broader ability to achieve AIMS outcomes."
        },
        {
          question: "The demand forecasting model has significant seasonal accuracy variations. Under Clause 6.2 AI objectives and Clause 9.1 monitoring, how should performance targets be established?",
          options: [
            "Set a single annual accuracy target that averages out seasonal variations, providing a fair assessment of the model's overall performance",
            "Establish seasonally adjusted performance targets that reflect expected accuracy variations throughout the year, with monitoring that evaluates performance against the appropriate seasonal benchmark and investigates deviations from expected seasonal patterns",
            "Set targets based only on the model's peak performance season, since this represents the system's true capability, and treat underperformance in other seasons as a known limitation"
          ],
          correct: 1,
          explanation: "Seasonally adjusted targets provide meaningful performance evaluation. A single annual target (option A) may mask sustained underperformance in specific seasons. Using only peak performance (option C) sets unrealistic expectations. Seasonal benchmarks enable appropriate evaluation and meaningful investigation of deviations."
        },
        {
          question: "A competitor's food safety incident was linked to AI-driven shelf life decisions. Under Clause 4.1 external context analysis, how should FreshChain consider this?",
          options: [
            "This is relevant only if FreshChain uses similar AI for shelf life decisions; since FreshChain's AI focuses on logistics and forecasting, the competitor incident does not affect FreshChain's context analysis",
            "This external event is relevant because it may influence regulatory scrutiny of AI in food supply chains, public trust in AI-driven food safety decisions, and interested party expectations about AI governance in the agricultural sector, regardless of whether FreshChain uses identical AI applications",
            "This should trigger an immediate review of FreshChain's AI systems to ensure they cannot cause similar incidents, but it does not need to be included in the formal context analysis"
          ],
          correct: 1,
          explanation: "External events affecting the industry context are relevant under Clause 4.1 even if the specific application differs. The competitor incident may change regulatory expectations, public perception, and stakeholder requirements for all AI in food supply chains. This broader impact should be reflected in context analysis, not just internal technical review."
        },
        {
          question: "The logistics optimizer interacts with third-party cold chain monitoring systems. Under Clause 4.2 interested party analysis and the risk assessment framework, what is the most important consideration?",
          options: [
            "The third-party cold chain providers should be required to implement their own AIMS before their systems can be integrated with FreshChain's logistics optimizer",
            "The interfaces between FreshChain's AI and third-party systems create shared data dependencies where data quality, availability, and integrity from external sources directly affect AI system decisions, requiring defined quality requirements and monitoring at integration points",
            "Third-party system interactions should be managed through standard API contracts and service level agreements, which are commercial matters outside the AIMS scope"
          ],
          correct: 1,
          explanation: "Third-party system interfaces create data dependencies that affect AI decision quality. These must be governed within the AIMS through defined requirements and monitoring. Requiring third-party AIMS (option A) is impractical. Treating integration as purely commercial (option C) ignores the AI-specific governance requirements for data quality and decision integrity."
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
            "A minor nonconformity related to complaints handling: the 47 complaints should have been analyzed for patterns, but the facial recognition performance issue itself is a technical matter outside the AIMS scope",
            "An observation that the organization should consider investigating the complaint pattern, since correlation between complaints and skin tone does not necessarily demonstrate bias in the AI system"
          ],
          correct: 0,
          explanation: "47 complaints with a demographic pattern is substantial evidence of a systematic fairness issue. This is not merely a complaints handling matter (option B) - it indicates discriminatory AI system performance. The volume and pattern make it more than an observation (option C). Under Annex A fairness controls and Clause 10.1 corrective action, this represents a major nonconformity."
        },
        {
          question: "The behavioral analysis disproportionately flags students with disabilities. Under Annex A controls and the broader AIMS framework, what fundamental issue does this represent?",
          options: [
            "An AI impact assessment failure: the organization did not adequately assess how the system would perform across the full diversity of users, including those with disabilities, resulting in a system that penalizes disability-related behaviors as indicators of cheating",
            "A data quality issue: the training data did not include sufficient examples of students with disabilities, and the model needs to be retrained with a more representative dataset",
            "A scope definition issue: students with disabilities should be excluded from AI-based proctoring and offered alternative examination arrangements, removing the need to address this within the AIMS"
          ],
          correct: 0,
          explanation: "The fundamental issue is a failure in impact assessment: the system's effect on users with disabilities was not adequately considered during design and deployment. While data quality (option B) may be a contributing factor, the root issue is inadequate impact assessment. Excluding students with disabilities (option C) may be a short-term accommodation but does not address the systemic governance failure."
        },
        {
          question: "A university partner suspended use of the system. Under Clause 4.2 and the management system framework, how should this be managed?",
          options: [
            "Treat the suspension as a commercial contract issue to be handled by the sales team, since the university's decision to suspend is their prerogative and does not affect the AIMS",
            "Treat the suspension as relevant feedback from a key interested party that may indicate systemic issues with the AIMS, investigate the underlying concerns, assess the impact on other clients, and determine whether corrective actions to the AIMS are needed",
            "Immediately notify all other university clients of the suspension and the reasons behind it, since transparency requires proactive disclosure of known issues to all interested parties"
          ],
          correct: 1,
          explanation: "A client suspension is significant interested party feedback that may indicate systemic AIMS issues. It should not be dismissed as purely commercial (option A). While transparency is important, immediate blanket notification (option C) may not be appropriate without first understanding the issues and determining the appropriate response."
        },
        {
          question: "The internal audit was conducted by a team member who developed the behavioral analysis algorithm. Under Clause 9.2, what issue does this present?",
          options: [
            "This violates the objectivity and impartiality requirement of Clause 9.2, since auditors must not audit their own work, compromising the reliability of the audit findings for the behavioral analysis component",
            "This is acceptable if the team member has formal internal auditor training, since technical expertise in the audited area is valuable for identifying meaningful findings",
            "This is a minor procedural issue that can be addressed by having the audit findings independently reviewed by another team member"
          ],
          correct: 0,
          explanation: "Clause 9.2 requires auditor objectivity and impartiality, specifically that auditors do not audit their own work. Having the developer audit their own algorithm is a clear violation regardless of their training (option B). Independent review of findings (option C) does not remedy the independence violation - the audit itself was compromised."
        },
        {
          question: "Considering all findings, what is the most likely recertification audit outcome for ExamSecure?",
          options: [
            "The certification body will likely issue major nonconformities related to fairness, impact assessment, and audit independence, requiring satisfactory corrective actions within a defined period before recertification can be recommended, and may consider whether the severity warrants suspension of the existing certificate",
            "The certification body will recommend recertification with conditions, as the organization has maintained a functioning AIMS for 18 months and the issues identified are improvement opportunities rather than fundamental conformity failures",
            "The certification body will recommend immediate recertification since the organization has proactively identified issues during pre-audit preparation, demonstrating the AIMS is functioning as intended by detecting problems"
          ],
          correct: 0,
          explanation: "The findings are severe: discriminatory system performance with documented complaints, unaddressed disability impact, client suspension, and compromised audit independence. These represent major nonconformities, not improvement opportunities (option B). Proactive identification during preparation (option C) does not mitigate the severity of the underlying issues. The certification body may consider suspension given the potential harm to users."
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
            "Few-shot learning, where the model learns to classify with very few examples by memorizing the specific medical documents provided",
            "Federated learning, where the model combines knowledge from the general text domain and the medical domain through distributed training"
          ],
          correct: 0,
          explanation: "Transfer learning involves leveraging knowledge from a pre-trained model (on general text) and adapting it to a new domain (medical classification) with limited domain-specific data. Few-shot learning (option B) describes learning from very few examples but does not capture the pre-training aspect. Federated learning (option C) involves distributed training across multiple parties, which is a different concept."
        },
        {
          question: "What is the primary distinction between 'narrow AI' (weak AI) and the concept of 'general AI' (strong AI) as discussed in the AI standards ecosystem?",
          options: [
            "Narrow AI operates with limited computational resources while general AI requires unlimited computational power",
            "Narrow AI is designed and trained for specific tasks within defined boundaries, while general AI would theoretically possess the ability to understand, learn, and apply intelligence across any intellectual domain, similar to human cognitive ability",
            "Narrow AI uses rule-based programming while general AI uses machine learning, making general AI inherently more capable"
          ],
          correct: 1,
          explanation: "The distinction is about scope of capability: narrow AI excels within defined task boundaries, while general AI would theoretically match human cognitive breadth. It is not about computational resources (option A) or the specific technique used (option C)."
        },
        {
          question: "ISO/IEC 23894 provides guidance on AI risk management. How does it complement ISO/IEC 42001?",
          options: [
            "ISO/IEC 23894 provides the risk management methodology that is mandatory for ISO/IEC 42001 compliance, as Clause 6.1 directly references it",
            "ISO/IEC 23894 provides guidance on AI-specific risk management approaches that can inform how an organization implements the risk assessment and treatment requirements of ISO/IEC 42001 Clause 6.1, though the organization is not required to use this specific standard",
            "ISO/IEC 23894 replaces the risk management requirements of ISO/IEC 42001 for organizations that have already implemented ISO 31000"
          ],
          correct: 1,
          explanation: "ISO/IEC 23894 provides guidance that can inform AIMS risk assessment, but it is not mandatory (option A) and does not replace ISO/IEC 42001 requirements (option C). Organizations may use ISO/IEC 23894 as guidance while implementing ISO/IEC 42001's risk-related requirements."
        },
        {
          question: "An organization uses an AI model ensemble that combines predictions from decision trees, neural networks, and support vector machines. What AI concept does this represent?",
          options: [
            "Model stacking, a specific ensemble technique where a meta-learner combines predictions from diverse base models to produce a final output with potentially higher accuracy and robustness",
            "Multi-agent AI, where multiple autonomous AI agents collaborate to solve a problem that no single agent could solve alone",
            "Hybrid AI, where symbolic and sub-symbolic AI approaches are combined to leverage the strengths of each paradigm"
          ],
          correct: 0,
          explanation: "Combining predictions from diverse ML models is an ensemble approach (model stacking or blending). Multi-agent AI (option B) involves autonomous agents interacting, not model combination. Hybrid AI (option C) combines symbolic and sub-symbolic approaches, which is a different concept than combining multiple ML models."
        },
        // Domain 2 - AIMS Requirements (5 questions)
        {
          question: "ISO/IEC 42001 Clause 4.4 states the organization shall establish, implement, maintain, and continually improve the AIMS 'including the processes needed and their interactions.' What does 'their interactions' specifically require?",
          options: [
            "Documenting formal communication protocols between all departments involved in AI activities",
            "Understanding and managing how AIMS processes affect each other, such as how risk assessment outputs feed into operational controls, how monitoring results inform management review, and how corrective actions lead to updated risk assessments",
            "Establishing a process interaction matrix that maps every process to every other process, ensuring complete traceability"
          ],
          correct: 1,
          explanation: "Process interactions mean understanding how processes are interconnected and how outputs from one become inputs to another. This does not require formal communication protocols for every department (option A) or an exhaustive interaction matrix (option C), but rather practical understanding and management of key process relationships."
        },
        {
          question: "Under the Harmonized Structure, what is the purpose of Clause 8 'Operation' in the AIMS?",
          options: [
            "To define the day-to-day activities of the AI development team, including coding standards, testing procedures, and deployment checklists",
            "To require the organization to plan, implement, and control the processes needed to meet requirements and implement actions determined in planning, including establishing criteria for processes and implementing control according to those criteria",
            "To specify the minimum number of operational staff required to maintain the AIMS and their specific qualifications"
          ],
          correct: 1,
          explanation: "Clause 8 requires planning, implementing, and controlling processes to meet requirements. It is about operational control of processes determined during planning, not about specific team activities (option A) or staffing requirements (option C)."
        },
        {
          question: "How do the normative annexes of ISO/IEC 42001 differ from informative annexes found in other standards?",
          options: [
            "Normative annexes are mandatory parts of the standard that must be followed, while informative annexes provide optional supplementary guidance",
            "There is no practical difference; the term 'normative' is used interchangeably with 'informative' in ISO standards",
            "Normative annexes must be read but not necessarily implemented, while informative annexes are the implementation-focused sections of the standard"
          ],
          correct: 0,
          explanation: "Normative annexes form part of the standard's requirements and must be followed. Informative annexes provide supplementary guidance that is not mandatory. This distinction is significant because ISO/IEC 42001's Annexes A and B are normative, meaning their controls must be considered in the AIMS implementation."
        },
        {
          question: "Under ISO/IEC 42001, what is the relationship between the main body clauses (4-10) and Annex A controls?",
          options: [
            "Organizations must implement all Annex A controls to satisfy the main body requirements, as the controls provide the specific implementation details for each clause",
            "The main body clauses establish the management system framework, and Annex A provides a reference set of controls that must be evaluated for applicability through the risk assessment and documented in the Statement of Applicability, with justification for inclusion or exclusion",
            "Annex A controls are optional enhancements that organizations can implement to exceed the minimum requirements of the main body clauses"
          ],
          correct: 1,
          explanation: "The main body provides the management system framework, while Annex A provides controls to be evaluated for applicability. Not all controls must be implemented (option A) - they must be considered through risk assessment. They are not optional enhancements (option C) - they must be formally evaluated and documented in the SoA."
        },
        {
          question: "What is the significance of the term 'determined' as used in clauses like 'the organization shall determine...' throughout ISO/IEC 42001?",
          options: [
            "'Determine' means the organization must formally document its decision in a controlled document approved by top management",
            "'Determine' means the organization must actively analyze and decide, implying a deliberate process of assessment and decision-making rather than passive acknowledgment, though the form of documentation is not prescribed",
            "'Determine' is synonymous with 'define' and simply means the organization must write down the requirement in their AIMS documentation"
          ],
          correct: 1,
          explanation: "'Determine' in ISO management system standards implies an active process of analysis and decision-making. It requires deliberate assessment, not just documentation (option A oversimplifies to documentation, option C equates it with simple definition). The form of the determination is flexible, but the process must be substantive."
        },
        // Domain 3 - Planning (10 questions)
        {
          question: "An organization operates in a country that has no AI-specific legislation. Under Clause 4.1, is the absence of AI regulation a relevant external issue?",
          options: [
            "No, the absence of regulation means there are no external regulatory issues to consider for the AIMS",
            "Yes, the absence of regulation is itself a relevant external factor because it affects the organization's risk environment, may change as AI legislation develops globally, and means the organization must rely more heavily on voluntary standards and internal governance to ensure responsible AI use",
            "Only if the organization exports AI services to jurisdictions that do have AI regulations"
          ],
          correct: 1,
          explanation: "The absence of regulation is a relevant external factor that shapes the governance environment. It does not mean there are no considerations (option A). While export to regulated jurisdictions is relevant (option C), the domestic regulatory vacuum itself affects how the organization must approach governance."
        },
        {
          question: "Under Clause 6.1, the risk assessment must address 'risks and opportunities arising from the AI system.' An organization's AI system has been operating successfully for two years with no incidents. How should the risk assessment be maintained?",
          options: [
            "The risk assessment can be archived since two years of incident-free operation demonstrates that risks have been adequately addressed and no updates are needed",
            "The risk assessment must be periodically reviewed and updated to reflect changes in the AI system's operating environment, technology evolution, emerging threat patterns, regulatory changes, and operational experience, regardless of incident history",
            "The risk assessment should be reviewed only when an incident occurs or a new AI system is deployed, since reviews without triggers consume resources without adding value"
          ],
          correct: 1,
          explanation: "Risk assessments must remain current regardless of incident history. No incidents does not mean no risks (option A). Reviewing only after incidents (option C) is reactive. The operating environment, technology, and regulatory landscape evolve continuously, requiring periodic reassessment."
        },
        {
          question: "An organization's AIMS scope includes AI systems developed by an internal team and AI services consumed from cloud providers. Under Clause 4.3, which boundaries are most important to define?",
          options: [
            "The geographic boundaries of the organization's offices where AI development and consumption occur",
            "The boundaries between what the organization controls (internal AI development, configuration, monitoring) and what it relies on third parties to provide (cloud AI model execution, infrastructure), including data flows and decision responsibilities at each boundary",
            "The organizational chart boundaries showing which departments are within the AIMS scope and which are excluded"
          ],
          correct: 1,
          explanation: "Scope boundaries should define the limits of the organization's control versus third-party dependencies. Geographic boundaries (option A) and organizational charts (option C) are elements but not the most important boundaries. Understanding where control transitions to dependency is crucial for determining which controls the organization can implement directly versus which require contractual or oversight arrangements."
        },
        {
          question: "An organization sets an AI objective to 'ensure all AI models are deployed with documented risk assessments.' Under Clause 6.2, what is missing from this objective?",
          options: [
            "Nothing is missing; this is a well-formed, measurable objective with a clear action and outcome",
            "The objective needs a timeframe for achievement, specification of who is responsible, definition of what 'documented risk assessment' includes, criteria for adequacy, and a monitoring mechanism to verify compliance",
            "The objective should be expressed as a percentage target rather than an absolute requirement, since 100% compliance objectives are unrealistic"
          ],
          correct: 1,
          explanation: "While the objective has a clear intent, it lacks specificity required by Clause 6.2: timeframe, responsibility, criteria for adequacy, and monitoring mechanism. It is not sufficient as stated (option A). Expressing it as a percentage (option C) would actually weaken the objective if the intent is full compliance."
        },
        {
          question: "An organization determines that its AI policy must address the use of AI in decisions that affect individual rights. Under Clause 5.2, what makes this policy commitment operational rather than aspirational?",
          options: [
            "Including specific language about human rights in the policy document, which demonstrates the organization's commitment to ethical AI use",
            "Ensuring the policy commitment translates into specific risk assessment criteria, operational controls, monitoring metrics, and defined procedures for human oversight in rights-affecting decisions",
            "Having the policy signed by the CEO and communicated to all employees through an organizational announcement"
          ],
          correct: 1,
          explanation: "A policy commitment becomes operational when it drives specific actions throughout the management system: risk criteria, controls, monitoring, and procedures. Including language (option A) is necessary but not sufficient. Communication (option C) is required by Clause 5.2 but does not make the commitment operational."
        },
        {
          question: "Under Clause 6.1.4, the organization must plan actions to address risks and opportunities. What is the relationship between risk treatment actions and the Statement of Applicability?",
          options: [
            "Risk treatment actions are documented in the risk treatment plan, which is separate from the SoA; the SoA only lists which Annex A controls are applicable",
            "Risk treatment actions should be supported by applicable Annex A controls documented in the SoA, creating a coherent link between identified risks, treatment decisions, and selected controls",
            "The SoA replaces the need for a separate risk treatment plan, as each control entry in the SoA includes the risk treatment rationale"
          ],
          correct: 1,
          explanation: "The risk treatment plan and SoA should be coherently linked: risks drive treatment decisions, which inform control selection documented in the SoA. They are not independent documents (option A) but they are also not substitutes for each other (option C). The relationship is one of coherent traceability from risk to treatment to control."
        },
        // Domain 4 - Implementation (8 questions)
        {
          question: "An organization implements Annex A controls for AI system testing and validation. The testing environment uses synthetic data that does not fully represent production conditions. Under Annex A controls, what risk does this create?",
          options: [
            "Testing with synthetic data is inherently inadequate and all AI system testing must use production data to be valid under the AIMS framework",
            "Synthetic testing data may not capture edge cases, distribution characteristics, or real-world variability present in production data, potentially resulting in validation results that do not accurately predict production performance, requiring documented understanding of synthetic data limitations and supplementary validation approaches",
            "Synthetic data is acceptable for testing if it is statistically validated against production data distributions, and no additional controls are needed once this validation is performed"
          ],
          correct: 1,
          explanation: "Synthetic data has inherent limitations that must be understood and managed. It is not inherently inadequate (option A) - synthetic data can be valuable for testing. However, relying solely on synthetic data without understanding its limitations (option C suggests one-time validation is sufficient) creates risks. Ongoing awareness of limitations and supplementary validation are needed."
        },
        {
          question: "Under Clause 7.2, the organization must ensure persons are competent. An AI data scientist has strong technical skills but no understanding of the AIMS framework. Is this person competent under Clause 7.2?",
          options: [
            "Yes, technical competence in AI is the primary requirement, and AIMS framework knowledge is the responsibility of the management system team rather than technical staff",
            "The person has partial competence: Clause 7.2 requires competence relevant to the person's role affecting AIMS performance, which for an AI data scientist includes both technical AI skills and understanding of how their work contributes to AIMS objectives, controls, and requirements",
            "No, all persons within the AIMS scope must have comprehensive understanding of every clause of ISO/IEC 42001 to be considered competent"
          ],
          correct: 1,
          explanation: "Competence under Clause 7.2 is role-specific. A data scientist needs technical skills and relevant AIMS understanding (not comprehensive knowledge of every clause, option C). Pure technical competence without AIMS awareness (option A) may lead to work that does not align with governance requirements. The required AIMS knowledge should be proportionate to the role."
        },
        {
          question: "An organization uses automated CI/CD pipelines to deploy AI model updates. Under Clause 8.1 and Annex A controls, what governance requirement applies?",
          options: [
            "Automated deployment pipelines must include governance gates such as validation checks, performance verification against defined criteria, and approval mechanisms, with the automation itself subject to change management controls",
            "Automated CI/CD pipelines are incompatible with AIMS operational controls since they bypass the human review required for AI system changes",
            "CI/CD pipelines satisfy Clause 8.1 requirements automatically since they provide consistent, repeatable deployment processes with built-in version control"
          ],
          correct: 0,
          explanation: "Automated deployment can be compatible with AIMS but must include governance controls. Pipelines are not inherently incompatible (option B) nor do they automatically satisfy requirements (option C). The key is incorporating governance gates, validation, and approval mechanisms within the automated process."
        },
        {
          question: "Under Clause 7.5, the organization must retain documented information as evidence of conformity. An organization claims that its AI system's 'self-documenting code' satisfies this requirement. Is this adequate?",
          options: [
            "Self-documenting code satisfies the documented information requirement for technical aspects, since it provides a complete and current record of the AI system's implementation",
            "Self-documenting code may contribute to documented information but is insufficient alone: Clause 7.5 requires documented information covering the management system processes, decisions, risk assessments, and operational controls, not just technical implementation",
            "Self-documenting code is not recognized as a valid form of documented information under ISO/IEC 42001, which requires formal documents in PDF or controlled document format"
          ],
          correct: 1,
          explanation: "Documented information encompasses much more than code: risk assessments, management decisions, policies, procedures, and records. Self-documenting code addresses only the technical implementation dimension. ISO/IEC 42001 does not prescribe specific document formats (option C is wrong), but it requires comprehensive documentation beyond code."
        },
        {
          question: "An organization has implemented Annex A controls for AI system monitoring but discovers that the monitoring only captures system-level metrics (uptime, latency) without AI-specific metrics (model performance, drift, fairness indicators). Under Annex A requirements, is this adequate?",
          options: [
            "Yes, system-level monitoring is sufficient since AI systems are fundamentally software systems and standard IT monitoring captures the essential operational metrics",
            "No, AI system monitoring must include AI-specific metrics that assess the system's continued fitness for purpose, including model performance against defined benchmarks, data drift indicators, fairness metrics, and output quality measures",
            "Partially adequate, since system-level monitoring satisfies Clause 9.1 requirements and AI-specific metrics are additional considerations that can be addressed as part of continual improvement"
          ],
          correct: 1,
          explanation: "AI systems require monitoring beyond standard IT metrics. System-level monitoring alone (option A) misses AI-specific concerns like model performance and drift. AI-specific metrics are not just improvement opportunities (option C) - they are necessary for assessing whether the AI system continues to meet its intended purpose. Annex A controls for AI systems expect AI-appropriate monitoring."
        },
        // Domain 5 - Monitoring (5 questions)
        {
          question: "Under Clause 9.2, the internal audit program must be planned. For an AIMS that has been operational for one year, what should the audit program for year two prioritize?",
          options: [
            "Repeat the same audit schedule as year one to maintain consistency and enable year-over-year comparison of findings",
            "Adjust the audit program based on year one findings, areas of higher risk, processes that have changed, and any new AI systems or regulatory requirements, while ensuring complete coverage over the audit cycle",
            "Focus exclusively on areas where nonconformities were found in year one, since these represent the highest-risk processes"
          ],
          correct: 1,
          explanation: "The audit program should evolve based on experience, risk, and changes. Repeating the same schedule (option A) does not incorporate lessons learned. Focusing only on previous findings (option C) may miss new risks. An adjusted program that considers multiple factors while maintaining comprehensive coverage is most appropriate."
        },
        {
          question: "During management review under Clause 9.3, the AIMS manager presents a 'green status' for all monitoring indicators. What should top management's response be?",
          options: [
            "Accept the positive results and focus the management review on strategic planning and new initiatives rather than operational performance",
            "Critically assess whether the monitoring indicators and thresholds are still appropriate, whether the metrics actually reflect AIMS effectiveness, and whether any areas are not being adequately measured, since uniformly positive results may indicate measurement gaps rather than perfect performance",
            "Request an independent verification of the monitoring results before accepting them, since all-green status reports are inherently suspicious"
          ],
          correct: 1,
          explanation: "Uniformly positive results warrant critical examination of whether the metrics and thresholds are appropriate. Management should assess measurement adequacy, not just results. Simply accepting (option A) misses the opportunity for meaningful review. Independent verification (option C) may be useful but the fundamental question is whether the right things are being measured."
        },
        {
          question: "An organization conducts performance evaluation of its AI system's fairness metrics under Clause 9.1. The metrics show equal average performance across demographic groups, but the variance differs significantly. What should the evaluation conclude?",
          options: [
            "Equal averages demonstrate fairness, and variance differences are statistical artifacts that do not require action",
            "The evaluation should examine whether different variance levels mean some groups experience more unpredictable outcomes than others, which may constitute inequitable service quality even if average performance is equal",
            "Variance analysis is a statistical refinement beyond what Clause 9.1 requires, and should be addressed only if the organization chooses to go beyond minimum monitoring requirements"
          ],
          correct: 1,
          explanation: "Equal averages can mask inequitable experiences when variance differs. Higher variance for some groups means more unpredictable outcomes, which is itself a fairness concern. This is not beyond minimum requirements (option C) - it is a meaningful dimension of fairness evaluation. Dismissing variance differences (option A) may leave inequitable outcomes unaddressed."
        },
        {
          question: "Under Clause 9.1, when should the organization evaluate the effectiveness of the AIMS itself, as distinct from evaluating AI system performance?",
          options: [
            "AIMS effectiveness is evaluated during the certification audit by the external audit team, not by the organization internally",
            "The organization should periodically evaluate whether the AIMS is achieving its intended outcomes, including whether the management system processes are functioning effectively, whether risks are being adequately managed, and whether objectives are being met",
            "AIMS effectiveness is automatically demonstrated when AI system performance metrics meet their targets, since the management system's purpose is to produce well-performing AI systems"
          ],
          correct: 1,
          explanation: "AIMS effectiveness evaluation is the organization's responsibility (not just external auditors, option A). It assesses the management system itself, not just AI system outputs (option C). The evaluation should examine whether processes function, risks are managed, and objectives are met."
        },
        {
          question: "An internal audit under Clause 9.2 finds that the organization's AI risk register has not been updated for eight months despite several changes to AI systems. The AIMS manager argues that the risk register captures strategic risks that do not change frequently. How should the auditor respond?",
          options: [
            "Accept the AIMS manager's explanation if the risk register covers strategic risks that are genuinely stable, since not all risk registers require frequent updates",
            "Raise a finding: the risk register should reflect the current risk landscape including the impact of changes to AI systems, and eight months without update despite system changes suggests the risk assessment process is not responsive to changes as required by Clause 6.1",
            "Recommend updating the risk register but classify this as an observation since the risk register exists and contains relevant content even if outdated"
          ],
          correct: 1,
          explanation: "Changes to AI systems should trigger risk reassessment. A risk register unchanged for eight months despite AI system changes indicates the risk assessment process is not responsive to change. The AIMS manager's argument (option A) does not justify ignoring the impact of system changes. This is more than an observation (option C) since it represents a gap in the required risk management process."
        },
        // Domain 6 - Improvement & Audit (5 questions)
        {
          question: "Under ISO/IEC 17021-1, what is the relationship between the certification body and the organization during the certification process?",
          options: [
            "The certification body acts as a consultant that helps the organization achieve conformity, providing guidance during audits on how to improve the management system",
            "The certification body independently assesses conformity without providing consulting services, maintaining impartiality by evaluating the AIMS against requirements without advising on implementation",
            "The certification body and the organization form a partnership where both parties work together toward certification, sharing responsibility for the audit outcome"
          ],
          correct: 1,
          explanation: "ISO/IEC 17021-1 requires certification bodies to maintain impartiality by not providing consulting services. The relationship is one of independent assessment, not consulting (option A) or partnership (option C). This separation ensures the credibility of the certification."
        },
        {
          question: "An organization identifies a nonconformity related to inadequate AI model documentation. Under Clause 10.1, the corrective action must include determining the cause. What constitutes adequate root cause analysis for this nonconformity?",
          options: [
            "Identifying that the documentation was inadequate because the data scientist responsible did not follow the documentation procedure, and retraining the individual",
            "Investigating why documentation was inadequate by examining whether documentation procedures are clear, whether templates and tools support efficient documentation, whether competence requirements include documentation skills, whether time and resources are allocated for documentation, and whether the culture values documentation as part of AI quality",
            "Documenting that the root cause was 'insufficient documentation' and implementing a corrective action to 'improve documentation,' which addresses the finding directly"
          ],
          correct: 1,
          explanation: "Root cause analysis should look beyond the immediate symptom to systemic factors. Blaming an individual (option A) does not address why the system allowed the gap. Circular root cause statements (option C) do not actually identify the cause. A thorough investigation of processes, tools, competence, resources, and culture identifies addressable systemic factors."
        },
        {
          question: "During a surveillance audit, the auditor requests evidence of continual improvement but the organization presents only corrective actions taken in response to nonconformities. Under Clause 10.2, is this adequate evidence of continual improvement?",
          options: [
            "Yes, corrective actions demonstrate that the organization addresses problems and improves, which is the essence of continual improvement",
            "No, continual improvement encompasses proactive enhancements beyond just fixing problems, including improvements driven by monitoring analysis, management review decisions, industry developments, technological advances, and stakeholder feedback that improve the suitability, adequacy, and effectiveness of the AIMS",
            "Yes, as long as the corrective actions have been verified as effective, since effective corrective actions prevent recurrence and thereby improve the management system"
          ],
          correct: 1,
          explanation: "Continual improvement goes beyond corrective actions (which are reactive). It includes proactive enhancements driven by various inputs. Corrective actions are one element (not the whole, option A). Effective corrective actions (option C) prevent recurrence but do not demonstrate the proactive improvement dimension of Clause 10.2."
        },
        {
          question: "An organization is preparing for its initial Stage 1 audit. The audit team requests access to the AI policy, scope statement, risk assessment, SoA, and evidence of management commitment. The organization provides all documents except the risk assessment, explaining it is still being finalized. What is the likely Stage 1 outcome?",
          options: [
            "The Stage 1 audit cannot proceed without a completed risk assessment, and the audit must be cancelled and rescheduled",
            "The auditors will note the incomplete risk assessment as a significant gap that must be resolved before Stage 2 can be scheduled, since risk assessment is fundamental to the AIMS and its absence indicates the management system design is not complete",
            "The auditors will proceed with Stage 1 and include the risk assessment review in Stage 2, since Stage 1 is primarily a documentation review and the risk assessment is an operational document"
          ],
          correct: 1,
          explanation: "Stage 1 evaluates readiness for Stage 2. An incomplete risk assessment is a significant gap since it is fundamental to AIMS design. The audit can still proceed (option A is too extreme) but the gap will be flagged as requiring resolution before Stage 2. Deferring risk assessment review to Stage 2 (option C) mischaracterizes Stage 1's purpose - it must evaluate whether the management system design is adequate."
        },
        {
          question: "Under the certification audit process, what is the purpose of opening and closing meetings?",
          options: [
            "The opening meeting confirms audit scope, objectives, methods, and logistics with the organization's management, while the closing meeting presents audit findings, conclusions, and the recommendation, ensuring transparency and giving the organization the opportunity to clarify any factual inaccuracies",
            "The opening meeting is a formality required by ISO/IEC 17021-1 to record attendance, while the closing meeting is the substantive session where the audit team presents its certification recommendation",
            "The opening meeting establishes the consulting relationship between the audit team and the organization, while the closing meeting summarizes the improvement recommendations provided during the audit"
          ],
          correct: 0,
          explanation: "Both meetings serve important purposes: the opening meeting sets expectations and confirms scope, while the closing meeting presents findings and allows the organization to address factual issues. Neither is merely a formality (option B), and the audit team does not provide consulting (option C)."
        }
      ]
    }
  ]
};
