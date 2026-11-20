export const SITE = {
  name: "Superior Tactical Response L.L.C.",
  short: "Superior Tactical Response",
  license: "SG 22100023",
  address: ["7321 Shadeland Station Way", "Indianapolis, Indiana 46256"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=7321+Shadeland+Station+Way+Indianapolis+IN+46256",
  email: "major@thetacticalresponse.com",
  facebook: "https://www.facebook.com/1953077434941727",
  phones: {
    office: { label: "STR Indianapolis Office", display: "(317) 805-1311", tel: "3178051311" },
    contract: { label: "STR Contract Office", display: "(317) 798-0313", tel: "3177980313" },
    dispatch: { label: "24-Hour Courtesy Officer Dispatch", display: "(317) 922-0860", tel: "3179220860" },
    contractorText: { label: "Contractor recruiting (text)", display: "317-441-4395", tel: "3174414395" },
  },
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    title: "Real-Time Incident Mapping",
    body: "Confidential, detailed reports delivered to you instantly on hand-held devices, including photos, video and audio of each incident.",
  },
  {
    title: "On-Site Protection Agents",
    body: "Uniformed or covert, armed or unarmed protection agents posted at your property.",
  },
  {
    title: "Alternate Patrols",
    body: "24/7, AM or PM patrol coverage. Continuous or hourly foot, vehicle and bike patrols.",
  },
  {
    title: "Flexible Contracts",
    body: "Short or long-term contracts, including our new month-to-month program.",
  },
  {
    title: "Residential, Commercial & Government",
    body: "Security for residential communities, commercial properties, the private sector and the government sector.",
  },
  {
    title: "Law Enforcement Professionals",
    body: "Need sworn presence? We also contract certified Indiana law enforcement professionals as needed.",
  },
];

export const TRAINING_MODULES = [
  "Forms",
  "General Service",
  "Incident Mapping",
  "Use of Force",
  "Initial Client Interaction",
  "Resident / Visitor Interaction",
  "Survival",
  "Law Enforcement / EMS / Fire Interaction",
  "O.C. Deployment",
  "O.C. Retention",
  "“Silent Witness”",
  "Trespass Procedure",
  "Weapons Retention",
  "Civil Court Testimony",
  "Criminal Court Testimony",
  "Prosecutor’s Office Interaction",
  "Real-Time Scenario",
  "“Secure Scene”",
  "Uniform Presentation",
  "Conflict Resolution",
  "Loss of Power",
  "Residential Black Out",
  "Proactive Initiatives",
  "Active Shooter – Unarmed Defensive",
  "Active Shooter – Armed Defensive",
  "Restrictive Breed",
  "Rent Roll",
  "STRA 10-Code",
  "Physical Tactics",
  "Hands-Off Detaining Tactics",
  "Abused Controlled Substances",
  "Intoxication",
  "Tactical Residential / Commercial Clearing",
  "Identity Theft",
  "Crime Watch Presentation",
  "Blood Borne Pathogens",
];

export const TESTIMONIALS = [
  {
    quote:
      "Working with Superior was one of the singularly most positive customer service experiences I’ve had personally or professionally. I had an emergent situation arise on a Friday afternoon and Superior was able to help immediately. Not only were they prompt, each officer assigned throughout the weekend was professional and thorough. Superior trained several officers on the details of our site and provided video of each interaction with individuals during their security patrol. I was more than pleased… very impressive service!",
    name: "Crystal W.",
    meta: "Better Business Bureau review, March 2022",
  },
  {
    quote:
      "Superior Tactical Response stepped in on short notice to assist with our daily security operations during the strain of the pandemic and our institutional seasonal initiatives. All the officers were very professional, displayed a great demeanor, and had very pleasant attitudes. The leaders of the company were very responsive and came to the rescue with staffing on very short notice.",
    name: "Robin L. Long",
    meta: "Director of Security, Newfields — letter dated Feb. 24, 2022",
  },
  {
    quote:
      "Our business hired Major and his team of security for a VIP event at our place of business. Most definitely and highly would recommend hiring Superior Tactical Response once more as they provide more than just security needs and assistance. They all were extremely helpful and very courteous when it came to interaction with everyone.",
    name: "Lucid Fitness",
    meta: "Google review, 5 stars",
  },
];

export const CREDENTIALS = [
  { file: "bbb-accreditation.jpg", title: "BBB Accreditation Certificate", note: "Superior Tactical Response, LLC — Better Business Bureau accredited business." },
  { file: "bbb-complaint-free-2024.jpg", title: "BBB Complaint-Free Year, 2024", note: "Recognized by the Better Business Bureau for upholding BBB Standards for Trust." },
  { file: "axon-academy.jpg", title: "Axon Academy Certification", note: "Axon certification earned by Melvin Hall." },
  { file: "barrett-armorer.jpg", title: "Barrett Armorer Certification", note: "Certified Barrett Model 82A1 / M107A1 Armorer." },
  { file: "uscca-instructor.jpg", title: "USCCA Certified Instructor", note: "United States Concealed Carry Association instructor training." },
  { file: "top-shooter.jpg", title: "Top Shooter Award", note: "Awarded to Melvin Hall." },
  { file: "cert-completion.jpg", title: "Certificate of Completion", note: "Training certificate of completion awarded to Melvin Hall." },
  { file: "business-award.jpg", title: "Industry Award Plaque", note: "Award recognizing Superior Tactical Response in the security guard service category." },
];

/* Personal certifications visible on the agency's own documents (see /public/images). */
export const LEADER = {
  name: "Melvin E. Hall II",
  certs: [
    "Axon Academy certified",
    "USCCA Certified Instructor",
    "Barrett M82A1 / M107A1 Armorer",
    "Top Shooter Award",
    "IMPD Certificate of Completion",
    "NRA Personal Protection in the Home",
    "State of Indiana Notary Public",
  ],
};

export const AFFILIATIONS = ["BBB Accredited · A+", "BBB Complaint-Free 2024", "Indy Chamber Member", `Indiana License SG 22100023`];
