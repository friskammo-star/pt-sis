export type ServiceSlug = "siuppak" | "siupal" | "siupkk" | "siopsus";

export interface Service {
  slug: ServiceSlug;
  acronym: string;
  name: string;
  short: string;
  description: string;
  issuer?: string;
  highlights?: { label: string; value: string }[];
  process?: string[];
  requirements?: string[];
  legal?: string[];
  notes?: string[];
}

export const services: Service[] = [
  {
    slug: "siuppak",
    acronym: "SIUPPAK",
    name: "Shipping Crew Recruitment and Placement Business License",
    short:
      "License to recruit and place Indonesian seafarers onboard domestic and international vessels.",
    description:
      "SIUPPAK applications involve complex procedures and comprehensive audits. The applicant company's legality and operational system are thoroughly evaluated end-to-end.",
    issuer:
      "Ministry of Transportation through the Directorate General of Sea Transportation (HUBLA).",
    highlights: [
      { label: "Issuing Authority", value: "DIRJEN HUBLA" },
      { label: "Audit Required", value: "Yes — Full QMS" },
      { label: "Scope", value: "National + Principal" },
    ],
    process: [
      "Submit application letter to DIRJEN HUBLA",
      "Disposition for evaluation to the Directorate of Shipping and Seafarers",
      "Sub-Directorate evaluation",
      "Section Head evaluation",
      "Assignment to operational staff",
      "Document validity verification and reporting",
      "Audit scheduling",
      "Audit process",
      "On-site verification",
      "Auditor's report submission",
      "Corrective actions by applicant",
      "Sub-Directorate report to Director",
      "Director's report to DIRJEN HUBLA",
      "SIUPPAK approval and signing",
      "Distribution to the applicant",
    ],
    requirements: [
      "Application letter to DIRJEN HUBLA",
      "Trading Business License (SIUP)",
      "Company Deed of Establishment + Amendment Deed (if any)",
      "Approval Decree from Ministry of Law and Human Rights",
      "Company NPWP",
      "Company Domicile Certificate",
      "Owner's KTP",
      "Quality Management System documents",
      "Seafarer Database previously placed onboard vessels",
      "Manning Agreement with Principal",
      "Letter of Appointment endorsed by Indonesian representative office",
      "Principal's Commercial Registration endorsed by Indonesian representative office",
      "Collective Bargaining Agreement (CBA/KKB)",
      "Power of Attorney for crew recruitment and placement",
      "List of expert personnel",
      "Certified copies of competency certificates / sea service records",
    ],
  },
  {
    slug: "siupal",
    acronym: "SIUPAL",
    name: "Sea Transportation Company Business License",
    short:
      "Core license for PT, BUMN, BUMD, and shipping cooperatives operating sea transportation services.",
    description:
      "SIUPAL authorizes companies to conduct sea transportation business in Indonesia, with strict capital, vessel, and integrity requirements.",
    issuer: "DIRJEN HUBLA via Ditlala Service Unit",
    highlights: [
      { label: "Authorized Capital", value: "IDR 50,000,000,000" },
      { label: "Paid-up Capital", value: "IDR 12,500,000,000" },
      { label: "Processing", value: "~30 working days" },
    ],
    legal: [
      "Law Number 17 of 2008 concerning Shipping",
      "Government Regulation Number 20 of 2010 concerning Water Transportation",
      "Minister of Transportation Decree Number KM.33 of 2001",
    ],
    process: [
      "Application Submission — Submit to DIRJEN HUBLA via Ditlala Service Unit",
      "Directorate Review — Forward to relevant Sub-Directorate and section",
      "Section Verification — Vessel legal status, draft documents, verification reports, notification letters",
      "Sub-Directorate Process — Sign minutes, initial memorandums, forward to Directorate",
      "Directorate Approval — Sign documents, approve SIUPAL/SIOPSUS drafts",
      "Administrative Registration — Number assignment by Ditlala Administration",
      "Signing of SIUPAL and SIOPSUS — By authorized authority",
      "Number Registration — Official numbers issued",
      "Collection — Documents ready for the applicant",
    ],
    requirements: [
      "Company Deed of Establishment",
      "Approval Decree from Ministry of Law and Human Rights",
      "Investment License from BKPM",
      "Company Domicile / OSS Location Permit",
      "KTP and NPWP of Directors and Shareholders + Company NPWP",
      "Tonnage Certificate (Surat Ukur)",
      "Certificate of Registry (Surat Laut)",
      "Gross Deed (Grosse Akta)",
      "Construction Safety Certificate",
      "Equipment Safety Certificate",
      "Proof of Expert Personnel",
      "SIUPAL Application Letter",
    ],
    notes: [
      "Director / Person in Charge must submit the application directly. Authorized representatives must be listed in the company's deed of establishment.",
      "Sign an Integrity Pact (no gratuities or unlawful payments).",
      "Sign a Statement of Absolute Responsibility on document authenticity.",
      "Documents are considered complete only after both online uploads and hard copy submissions.",
      "Submission hours: 08:00 AM – 02:00 PM (WIB) at Floor P.6 service counter.",
    ],
  },
  {
    slug: "siupkk",
    acronym: "SIUPKK",
    name: "Ship Agency Company Business License",
    short:
      "Authorizes companies to act as official ship agents within the Indonesian maritime territory.",
    description:
      "Regulated under Indonesian maritime laws and Ministry of Transportation regulations, SIUPKK carries strict operational obligations and immediate-revocation triggers.",
    highlights: [
      { label: "Validity", value: "Nationwide RI" },
      { label: "Start of Ops", value: "Within 3 months" },
      { label: "Reporting", value: "Monthly written" },
    ],
    requirements: [
      "Original scanned SIUPKK application letter",
      "Company Deed of Establishment",
      "Approval Decree from Kemenkumham",
      "Amendment Deed and Approval Decree (if any)",
      "Company Domicile Certificate / Location Permit",
      "Responsible Person's ID",
      "Proof of business premises ownership or minimum 2-year lease",
      "Expert Staff Certificate (minimum ANT/ATT III or Diploma III in Maritime Administration / Sea Transportation)",
      "Bank Reference Letter",
      "Appointment Letter as Expert Staff",
      "SIMLALA Account",
    ],
    process: [
      "Comply with all provisions of the business license",
      "Commence operations within 3 months of issuance",
      "Comply with all maritime and government regulations",
      "Submit written monthly reports to the licensing authority",
      "Report any changes to responsible persons, ownership, or domicile in writing",
    ],
    notes: [
      "SIUPKK may be revoked immediately without warning if the company conducts activities endangering national security.",
      "Revocation also applies if acting as agent for unseaworthy vessels causing loss of life or property damage.",
      "Licenses obtained through unlawful means are revoked immediately.",
      "Validity continues throughout the Republic of Indonesia from issuance, as long as business operations continue.",
    ],
  },
  {
    slug: "siopsus",
    acronym: "SIOPSUS",
    name: "Special Operational License (Surat Izin Operasi Khusus)",
    short:
      "Special operational license issued together with SIUPAL through the same DIRJEN HUBLA process.",
    description:
      "SIOPSUS authorizes special sea-operation activities that fall outside standard sea transportation licensing — issued in parallel with SIUPAL through the same directorate process.",
    highlights: [
      { label: "Issued With", value: "SIUPAL" },
      { label: "Authority", value: "DIRJEN HUBLA" },
      { label: "Scope", value: "Special Operations" },
    ],
    process: [
      "Submit jointly with SIUPAL application to DIRJEN HUBLA",
      "Directorate review and verification",
      "Sub-Directorate process and approval drafting",
      "Directorate approval signing",
      "Administrative number registration",
      "Authorized signing and issuance",
      "Collection by the applicant",
    ],
    requirements: [
      "Aligned with SIUPAL document set",
      "Special operational justification documents",
      "Vessel and equipment certifications relevant to special operations",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
