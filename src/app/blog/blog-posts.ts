// Blog content lives here.
//
// To publish a new article:
//   1. Add a new object to the TOP of the `blogPosts` array below (newest first).
//   2. Give it a unique `slug` (lowercase words separated by dashes) — this becomes
//      the URL, e.g. /blog/my-new-post.
//   3. Write the body as an array of blocks. Each block is either:
//        - a plain string  -> rendered as a paragraph (no HTML needed), or
//        - { heading: '...' } -> rendered as a section header.
//      Example:
//        body: [
//          "An intro paragraph.",
//          { heading: 'Background' },
//          "More text under that header.",
//        ]
//
//   Web links: inside any paragraph string you can add clickable links two ways:
//     - a bare URL, e.g. "See https://example.com for details", or
//     - markdown style, e.g. "See [the docs](https://example.com) for details".
//   Both open in a new tab. Plain [bracketed] text without a (url) stays as-is.
//
// That's it — the list page and the article page update automatically.

// A single piece of article content: a paragraph (string) or a header (object).
export type ContentBlock = string | { heading: string };

export interface BlogPost {
    slug: string;
    title: string;
    date: string;      // display date, e.g. 'June 16, 2023'
    summary: string;   // one-line teaser shown on the blog list
    body: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: '287g-in-my-hometown',
        title: 'My Full Opinion on 287(g) in My Hometown',
        date: 'June 24, 2026',
        summary: 'An examination of the 287(g) program in my hometown and the potential risks it carries.',
        body: [
            "Earlier this week I spoke at the Board of Selectmen meeting about a possible 287(g) agreement between [my hometown] and ICE. I came in late and without a prepared statement, so I focused on my broad concerns. These are my full thoughts. This statement is also available on my personal website (you're here!), along with my sources. Some names and details have been redacted to protect privacy. These are noted by [brackets].",
            "I've lived in [my hometown] for nearly seventeen years, which is effectively my whole life, and graduated from Pinkerton Academy last June. I'm now studying cybersecurity in college, where one of the core disciplines is risk assessment: before agreeing to something, you weigh how likely each risk is against how much harm it would do, and whether the benefit is worth that exposure. I want to apply this idea to 287(g). I recognize that cybersecurity is very different from immigration law or day-to-day policing, but the core concepts carries over.",
            "First, credit to our police Chief. Under New Hampshire law, signing this agreement is the police chief's decision alone. He could have done it quietly. Instead, he brought it before the town and answered every question he could. My concerns are with the agreement, not with him.",
            "The first risk I’d like to examine is the training. ICE requires participating officers to be certified, but neither the Chief nor the town can say what that training actually covers. He hasn't taken it yet, and ICE is actively being sued to provide the training. In risk terms, the problem is not that the training is definitely inadequate; it's that we have no way to measure it, and an exposure you can't measure is one you can't manage. Additionally, the course has been reduced from a 4-week in-person course to 40 hours online, only deepens the question. The impact, if the training turns out to be thin, is borne by the town.",
            "The second risk is public records. Under New Hampshire's Right-to-Know Law (RSA 91-A), the town must respond to any records request within five business days, and these agreements reliably generate them. Grafton County's Sheriff recently became the first New Hampshire agency to withdraw from its agreement, citing the burden of 91-A requests as one of the reasons. The impact is staff time, plus the legal exposure that comes with mishandling a request.",
            "That leaves the benefit side, which is where the appeal lies: the money. Because [my hometown] has been operating on the default budget for the last few years, ICE's offer to reimburse officer salaries and pay performance bonuses is a genuine draw, and I don't fault the Chief for weighing it. However, it comes with conditions. The payments are only made after enforcement. Our police would only qualify once they begin making immigration arrests, so collecting the money means doing the very thing that causes the two risks above. The benefit and the liability are the same activity. It isn't something I'd build a long-term town police budget around.",
            "In summary: We can't measure the training, the records burden is already proven, and the benefit is conditional on incurring those costs. In risk-assessment terms, this is an agreement we can't yet evaluate, and you don't sign what you can't evaluate. And so, my request to our Chief is a narrow one: before signing, get the training curriculum in writing, and get a real estimate of the records costs. If the answers come back and the risks are manageable, that's a call you can make with confidence. Until then, I'd ask that you hold off.",
            "The following sources support my claims in the statement above, listed in the order the relevant points appear. Where possible, they are primary documents (federal agencies, the GAO, the statute, the court filing) or established news organizations.",
            { heading: 'References' },
            `1. What 287(g) is. U.S. Immigration and Customs Enforcement, "Partner With ICE Through the 287(g) Program" / "Delegation of Immigration Authority Section 287(g)." The program is named for Section 287(g)(1) of the Immigration and Nationality Act, which lets ICE delegate specified immigration-officer functions to state and local officers under ICE's direction and oversight. The Task Force Model authorizes participating officers to enforce limited immigration authority during routine police duties. https://www.ice.gov/287g https://www.ice.gov/identify-and-arrest/287g`,
            `2. The decision rests with the police chief alone. In New Hampshire, a police chief may sign a 287(g) agreement without approval from a select board or police commission. The Troy chief signed without seeking selectboard approval and was not required to; the Auburn chief likewise signed without bringing it to his police commission, describing it as within his purview. The Keene Sentinel, "Immigration training in towns like Troy, N.H., focus of 2026 Freedom of Information lawsuit" — https://www.keenesentinel.com/news/local/immigration-training-in-towns-like-troy-nh-focus-of-2026-freedom-of-information-lawsuit/article_75b232f1-e7e0-45fe-9faf-ab66c0e32853.html Manchester Ink Link, "Auburn police sign ICE agreement; ACLU-NH files lawsuit over ICE training of NH law enforcement" — https://manchester.inklink.news/auburn-police-sign-ice-agreement-aclu-nh-files-lawsuit-over-ice-training-of-nh-law-enforcement/`,
            `3. The training requirement, its opacity, and the ACLU-NH lawsuit. Under the Task Force Model agreement, officers must complete ICE-provided training and pass examinations equivalent to those given to ICE officers before they are authorized to perform immigration-officer functions. On January 15, 2026, the ACLU of New Hampshire filed a Freedom of Information Act lawsuit (U.S. District Court, Concord) seeking ICE's training materials, after ICE did not respond to its request for the documents used to train the roughly 138 officers across 13 NH agencies; the complaint states the training was conducted online and that participating officers were generally not given materials to keep. The revived Task Force Model's training is reported to be a 40-hour online course, replacing a prior four-week in-person program. ACLU of New Hampshire, press release and case page (with the filed complaint) — https://www.aclu-nh.org/press-releases/aclu-nh-files-foia-lawsuit-seeking-nh-287g-training-documents-from-ice/ ; https://www.aclu-nh.org/cases/aclu-foundation-of-new-hampshire-v-u-s-immigration-and-customs-enforcement/ The Boston Globe, "What does ICE tell local N.H. police in their 'task force' training? This lawsuit aims to find out." — https://www.bostonglobe.com/2026/01/15/metro/aclu-nh-ice-287g-training-lawsuit/ National Immigration Forum, "Explainer: Training Under the Revived 287(g) Task Force Model" (40-hour online course) — https://forumtogether.org/article/explainer-training-under-the-revived-287g-task-force-model/`,
            `4. New Hampshire's Right-to-Know Law (RSA 91-A) and the five-business-day deadline. RSA Chapter 91-A is New Hampshire's open-records law, the state counterpart to the federal Freedom of Information Act. Under RSA 91-A:4, IV, when a record is not immediately available, the public body must — within five business days — make the record available, deny the request in writing with reasons, or acknowledge it in writing with a statement of the time reasonably necessary to decide. New Hampshire statute (RSA 91-A:4) — https://www.gencourt.state.nh.us/rsa/html/vi/91-a/91-a-4.htm New Hampshire Municipal Association, "Right to Know Law" — https://www.nhmunicipal.org/right-know-law Reporters Committee for Freedom of the Press, "Open Government Guide: New Hampshire" — https://www.rcfp.org/open-government-guide/new-hampshire/`,
            `5. The records burden as a real, in-state cost: the Grafton County withdrawal. The Grafton County Sheriff's Office became the first New Hampshire agency to withdraw from its 287(g) agreement. A county commissioner attributed the decision in part to the burden of 91-A (Right-to-Know) requests on the office, alongside ongoing concern from constituents. New Hampshire Public Radio / Granite State News Collaborative — https://www.nhpr.org/nh-news/2026-05-15/nh-287g-ice-immigration-customs-enforcement-dhs-police-law-enforcement Valley News, "Grafton County Sheriff ends ICE agreement, four new towns join" — https://www.vnews.com/2026/05/19/grafton-county-withdraws-287g/`,
            `6. The financial incentives: what the program pays. Under a DHS reimbursement program that began October 1, 2025 (funded through the One Big Beautiful Bill Act), ICE reimburses participating agencies for the full salary, benefits, and up to 25% overtime of each trained officer, plus quarterly performance awards of $1,000, $750, or $500 per officer for locating 90–100%, 80–89%, or 70–79% of the people ICE identifies. U.S. Department of Homeland Security, "DHS Announces New Reimbursement Opportunities for State and Local Law Enforcement Partnering with ICE" (primary; contains the tiered award amounts) — https://www.dhs.gov/news/2025/09/02/dhs-announces-new-reimbursement-opportunities-state-and-local-law-enforcement FactCheck.org, "ICE Officers and Bonuses" (nonpartisan; confirms the $500–$1,000 quarterly awards go to participating state and local agencies and are not a per-arrest payment) — https://www.factcheck.org/2026/02/ice-officers-and-bonuses/`,
            `7. The financial incentives: conditions and reliability. The money tracks enforcement activity: reimbursed salary is for officers working toward ICE's objectives, and the quarterly awards scale with the share of ICE-identified people an agency locates (see the DHS release in #6). On reliability, this is a brand-new program built on a single federal appropriation; the federal government's long-running program for reimbursing localities' immigration-related costs — the State Criminal Alien Assistance Program (SCAAP) — has, by the GAO's own accounting, only ever reimbursed states and localities for a portion of those costs. Police1 (Lexipol), "DHS introduces program to reimburse 287(g) partner agencies for officer salaries" (reimbursement covers officers "working toward ICE objectives," awards based on locating undocumented immigrants) — https://www.police1.com/federal-law-enforcement/dhs-introduces-program-to-reimburse-287g-partner-agencies-for-officer-salaries U.S. Government Accountability Office, GAO-05-337r (SCAAP "reimburses state and local governments for a portion of their costs") — https://www.gao.gov/products/gao-05-337r U.S. Government Accountability Office, GAO-11-187, "Criminal Alien Statistics" (FY2009: roughly $742M in eligible costs against $198M reimbursed) — https://www.gao.gov/products/gao-11-187 Congressional Research Service, "State Criminal Alien Assistance Program (SCAAP): Data Brief" (R48441) — https://www.congress.gov/crs-product/R48441`,
        ],
    },
    {
        slug: 'the-broken-technology-industry',
        title: 'The Broken Technology Industry',
        date: 'June 16, 2023',
        summary: 'How the shift to unrepairable hardware hurts consumers, competition, and the planet.',
        body: [
            "The technology industry has shifted from easily repairable devices to highly integrated, unrepairable hardware. This change creates three main problems: increased electronic waste, higher consumer spending, and reduced competition.",
            "Consider an iPhone screen replacement costing $400 — contrast that with how accessible automobile repair is. Fifteen years ago, device circuits and designs were openly documented, enabling consumer repairs and competition among repair shops. Modern devices use complex integration and gluing techniques requiring specialized tools, making basic repairs like screen or battery replacement difficult.",
            "Corporations like Apple cite security concerns about unauthorized repairs and data theft risks. However, the Federal Trade Commission found little to no evidence to support these claims regarding security justifications.",
            "Framework Inc stands as a counterexample — a startup building upgradeable, repairable laptops despite industry skepticism. Founded by Nirav Patel, a former Apple engineer and Oculus hardware lead, Framework succeeded through media coverage from outlets like CNET and Linus Tech Tips.",
            "Media pressure and regulatory action — such as President Biden\'s executive order and EU USB-C legislation — can restore consumer repair rights. The right to repair is not just a consumer convenience issue; it\'s an environmental and economic imperative.",
        ],
    },
    {
        slug: 'first-post',
        title: 'First Post',
        date: 'February 19, 2023',
        summary: 'Kicking things off.',
        body: [
            "Welcome to my first post! I\'m not sure what to talk about honestly...",
        ],
    },
];
