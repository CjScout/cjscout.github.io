// The homepage timeline lives here.
//
// To add something to the route:
//   1. Add a new object to the `hops` array in date order (oldest first).
//      Hop numbers come from the array position, so nothing needs renumbering.
//   2. Set `running: true` on anything that's still going.
//   3. Set `era` on the first hop of a new chapter to start a new section.
//
// Things that matter but don't have a date yet go in `sideTrips`.

export interface HopLink {
    label: string;
    url: string;
    external?: boolean;   // true for other sites; false for routes on this site
}

export interface Hop {
    era?: string;
    when: string;
    where: string;
    title: string;
    role?: string;
    story: string;
    tools?: string[];
    link?: HopLink;
    running?: boolean;
}

export interface SideTrip {
    title: string;
    note: string;
    link?: HopLink;
}

export const hops: Hop[] = [
    {
        era: 'Before high school',
        when: 'Middle school',
        where: 'Block-based programming',
        title: 'Started with Scratch',
        story: 'This is where I got my start coding. Everything below came after dragging blocks around in a browser.',
        link: { label: 'scratch.mit.edu', url: 'https://scratch.mit.edu/', external: true },
    },
    {
        era: 'Pinkerton Academy · Derry, NH',
        when: 'Aug 2021',
        where: 'Derry, NH',
        title: 'Started at Pinkerton Academy',
        story: 'Four years that ended with a diploma and a focus in Information Technology and, more importantly, a real network to work on.',
    },
    {
        when: 'Nov 2022',
        where: 'GitHub Pages',
        title: 'Put a website on the internet',
        story: "I taught myself HTML and CSS to build my own site, then wiped it and rebuilt it in Angular in 2024. You're looking at what it turned into.",
        tools: ['HTML', 'CSS', 'Angular'],
    },
    {
        when: 'Dec 2022 – Jun 2025',
        where: 'Derry, NH',
        title: 'Ran a real network as a student',
        role: 'Lead Student Systems Administrator, Pinkerton Academy CIS',
        story: 'I designed and documented a new VRRP network architecture for reliability, brought SIEM/XDR, Zero Trust remote access, and a Proxmox hypervisor into the classroom, and built $10k+ annual budgets. Then I wrote the procedures and trained the next admins so it would outlast me.',
        tools: ['VRRP', 'SIEM/XDR', 'Zero Trust', 'Proxmox'],
    },
    {
        when: 'Jun 2023',
        where: 'This blog',
        title: "Wrote about why your phone can't be fixed",
        story: 'My case for the right to repair: unrepairable hardware means more e-waste, higher costs, and less competition.',
        link: { label: 'Read the post', url: '/blog/the-broken-technology-industry' },
    },
    {
        when: 'Aug 2023 – Present',
        where: 'Salem, NH',
        title: 'Took a job at Best Buy',
        role: 'Sales Associate & Product Flow Specialist',
        story: 'Out front, I help customers choose the right tech. In the back, I handle receiving and storage for shipments of 3,000+ units.',
        running: true,
    },
    {
        when: 'Jul – Aug 2024',
        where: 'Durham, NH',
        title: 'Built a home for NVMe test data',
        role: 'HighTech Bound Intern, UNH InterOperability Lab',
        story: 'With another intern, I built a full-stack web app for managing and viewing NVMe controller test data, integrated with an existing JavaScript server and SQL database.',
        tools: ['Angular', 'TypeScript', 'SQL'],
    },
    {
        era: 'Champlain College · Burlington, VT',
        when: 'Aug 2025',
        where: 'Burlington, VT',
        title: 'Signed up for two degrees at once',
        story: "I'm pursuing a BS in Computer Networking & Cybersecurity and a BS in Computer & Digital Forensics, expected May 2029.",
        running: true,
    },
    {
        when: 'At Champlain',
        where: 'Burlington, VT',
        title: 'Found the tech clubs on campus',
        role: 'Active member',
        story: "Outside of class, I'm part of the Cybersecurity Club, the Digital Forensics Association, and the Free and Open Tech Collective.",
        running: true,
    },
    {
        when: 'Sep 2025 – Present',
        where: 'Burlington, VT',
        title: 'Got a grant reform bill through student government',
        role: 'Second Year Representative, Student Government Association',
        story: 'I represent my class and advocate for students across campus. I got a bill passed that redefined our grants, removing the caps and scaling travel grants with the number of people involved so funding stays equitable across groups.',
        running: true,
    },
    {
        when: 'Sep – Dec 2025',
        where: 'Burlington, VT',
        title: 'Held real policies up to NIST 800-171',
        role: 'Risk Assessment Intern, The Leahy Center',
        story: 'In my first semester, I assessed 10+ client cybersecurity policies against NIST 800-171 Rev. 3 and wrote the reports explaining what to fix.',
        tools: ['NIST 800-171', 'Compliance'],
    },
    {
        when: 'Jun – Aug 2026',
        where: 'Waltham, MA',
        title: 'Reconciled databases and mapped compliance gaps',
        role: 'IT Solutions Intern, Fresenius Medical Care',
        story: 'I built a Python tool that compares an Oracle database against a Reltio MDM instance using rule-based checks and ML anomaly detection, then ranks what it finds by severity in Power BI. I also assessed OT security against NIST 800-82, tracked NIS2 across EU member states, and shadowed a datacenter migration.',
        tools: ['Python', 'Oracle', 'Reltio', 'Power BI', 'NIST 800-82'],
    },
    {
        when: 'Aug 2026 – Present',
        where: 'Burlington, VT',
        title: 'Started coaching other students',
        role: 'ITS Career Peer Coach, Champlain College Career Collaborative',
        story: 'I give students feedback on resumes, cover letters, and job applications, and I support Career Collaborative events on career development, financial literacy, and wellbeing.',
        running: true,
    },
];

export const sideTrips: SideTrip[] = [
    {
        title: 'Eagle Scout',
        note: 'Scouting America',
    },
    {
        title: 'SkillsUSA National Top 15',
        note: 'Internetworking',
    },
    {
        title: 'Elevator Pitch Finalist',
        note: '2026, Advocate category',
    },
    {
        title: 'Tech Undone',
        note: 'My blog explaining tech for consumers',
        link: { label: 'techundone.com', url: 'https://techundone.com/', external: true },
    },
    {
        title: 'professoreno.com',
        note: 'Helped build and host it for my high school IT class',
        link: { label: 'professoreno.com', url: 'https://professoreno.com', external: true },
    },
];
