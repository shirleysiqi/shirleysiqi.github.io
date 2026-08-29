export type Lang = 'zh' | 'en';
export type Localized = { zh: string; en: string };

export const site = {
  name: { zh: 'Shirley CHEN 陳思琦', en: 'Shirley CHEN' },
  shortName: 'Shirley CHEN',
  chineseName: '陳思琦',
  email: 'Shirley.chensiqi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shirley-chen-4bb594192/',
  location: { zh: '香港', en: 'Hong Kong' },
  title: {
    zh: '企業傳訊 · 媒體關係 · 財經公關',
    en: 'Corporate Communications · Media Relations · Financial PR'
  },
  heroKicker: {
    zh: '企業傳訊專業人士',
    en: 'Corporate Communications Professional'
  },
  intro: {
    zh: '具備金融機構、上市公司傳訊及公關顧問經驗，工作涵蓋企業內容、媒體關係、財經公關、企業品牌傳播、持份者溝通及 ESG 相關活動。',
    en: 'Experienced across financial institutions, listed-company communications and PR consultancy, with work spanning corporate content, media relations, financial PR, corporate branding, stakeholder engagement and ESG-related initiatives.'
  },
  about: {
    zh: [
      '我的工作經驗橫跨金融機構、上市公司相關傳訊及公關顧問環境，專注把企業訊息轉化為清晰、可信而一致的對外溝通。',
      '現職工作涵蓋中英文新聞稿、媒體關係、新聞監測、社交媒體、企業網站及對外傳播材料、季度通訊、ESG 活動及品牌規範等。此前亦曾參與公眾諮詢、持份者溝通、輿情監測、危機傳訊，以及上市公司財經公關、媒體邀請、訪問及企業活動。'
    ],
    en: [
      'My experience spans financial institutions, listed-company communications and PR consultancy environments, with a focus on translating corporate messages into clear, credible and consistent external communications.',
      'My current role covers bilingual press releases, media relations, news monitoring, social media, corporate website and external communications materials, quarterly newsletters, ESG initiatives and brand guidelines. Earlier roles also involved public consultation, stakeholder communications, public opinion monitoring, crisis communications, financial PR, media invitations, interviews and corporate events.'
    ]
  }
};

export const nav = [
  { href: '/', label: { zh: '首頁', en: 'Home' } },
  { href: '/experience/', label: { zh: '工作經歷', en: 'Work Experience' } },
  { href: '/cases/', label: { zh: '案例展示', en: 'Case Studies' } },
  { href: '/about/', label: { zh: '關於我', en: 'About Me' } }
];

export const capabilities = [
  {
    title: { zh: '企業傳訊', en: 'Corporate Communications' },
    text: {
      zh: '新聞稿、企業內容、網站與社交媒體、季度通訊、品牌訊息及對外傳播材料。',
      en: 'Press releases, corporate content, website and social media, newsletters, brand messaging and external communications materials.'
    }
  },
  {
    title: { zh: '媒體關係', en: 'Media Relations' },
    text: {
      zh: '媒體聯絡、媒體邀請、訪問安排、新聞監測、活動傳播及媒體報道跟進。',
      en: 'Media engagement, invitations, interview coordination, news monitoring, event communications and coverage follow-up.'
    }
  },
  {
    title: { zh: '財經公關', en: 'Financial PR' },
    text: {
      zh: '金融機構及上市公司相關傳訊、企業訊息梳理、財經媒體溝通及市場傳播支援。',
      en: 'Communications for financial institutions and listed companies, corporate messaging, financial media engagement and market communications support.'
    }
  }
];

export const experience = [
  {
    company: 'Haitong International Securities Group Limited',
    role: { zh: '企業傳訊 — 助理經理', en: 'Corporate Communication — Assistant Manager' },
    period: '2024 — Present',
    summary: {
      zh: '負責企業傳訊、媒體關係、品牌傳播、社交媒體、企業網站及 ESG 相關活動。',
      en: 'Corporate communications, media relations, brand communications, social media, corporate website and ESG-related initiatives.'
    },
    bullets: {
      zh: ['撰寫及協調中英文新聞稿與企業傳訊內容。','負責媒體關係、新聞監測及日常媒體溝通。','支援企業網站、對外傳播材料、季度通訊及社交媒體內容。','參與 ESG 活動及企業品牌規範與更新。'],
      en: ['Draft and coordinate bilingual press releases and corporate communications content.','Manage media relations, news monitoring and day-to-day media engagement.','Support corporate website, external communications materials, quarterly newsletters and social media content.','Contribute to ESG initiatives and corporate brand guideline updates.']
    }
  },
  {
    company: 'Chun Wo Development Holdings Limited',
    role: { zh: '助理公共關係主任', en: 'Assistant Public Relation Officer' },
    period: '2023 — 2024',
    summary: {
      zh: '參與公眾諮詢、持份者傳訊、社區溝通、輿情監測、危機傳訊及 ESG 活動。',
      en: 'Public consultation, stakeholder communications, community engagement, public opinion monitoring, crisis communications and ESG initiatives.'
    },
    bullets: {
      zh: ['準備公眾諮詢及傳訊材料，並支援區議會簡報。','處理持份者溝通、公眾查詢及投訴。','監察公眾輿情並支援危機傳訊工作。','參與企業 ESG 及社區相關活動。'],
      en: ['Prepared public consultation and communications materials and supported District Council presentations.','Handled stakeholder communications, public enquiries and complaints.','Monitored public opinion and supported crisis communications.','Contributed to ESG and community-related activities.']
    }
  },
  {
    company: 'Wonderful Sky Financial Group Limited',
    role: { zh: '高級公關專員', en: 'Senior PR Associate' },
    period: '2021 — 2022',
    summary: {
      zh: '為上市公司客戶提供財經公關及企業傳訊支援，並參與媒體活動與企業活動執行。',
      en: 'Financial PR and corporate communications support for listed-company clients, including media and corporate event execution.'
    },
    bullets: {
      zh: ['曾服務約 15 家上市公司客戶，支援企業訊息及媒體傳播。','參與媒體邀請、媒體訪問及新聞稿相關工作。','執行產品發佈、記者會、晚宴及商務交流活動。','進行媒體監測及日常客戶傳訊支援。'],
      en: ['Supported corporate messaging and media communications for around 15 listed-company clients.','Worked on media invitations, media interviews and press releases.','Executed product launches, press conferences, gala dinners and networking events.','Conducted media monitoring and day-to-day client communications support.']
    }
  }
];

export const education = [
  { school: 'The Hong Kong Polytechnic University', degree: 'Master of Business Management', period: '2019 — 2020', note: { zh: '獲 HKD 110,000 獎學金', en: 'HKD 110,000 scholarship' } },
  { school: 'Xiamen University of Technology', degree: 'Bachelor in International Business', period: '2014 — 2018', note: { zh: '', en: '' } }
];

export const languages = {
  zh: ['英文', '普通話', '廣東話', '閩南語'],
  en: ['English', 'Mandarin', 'Cantonese', 'Taiwanese']
};
