import type { NewsArticle } from './types'

export const mockCompanyName = 'Fortinet';

const hoursAgo = (hours: number) => new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();
const daysAgo = (days: number) => hoursAgo(days * 24);

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Rackmount.IT ラックマウント.IT',
    summary:
      'Rackmount.IT develops high-quality rackmount kits for 20+ leading desktop appliance manufacturers, including Cisco, Cisco Meraki, Fortinet, and Palo Alto Networks.',
    url: 'https://example.com/news/rackmount-it',
    publishedAt: null,
    category: 'press-release',
    tags: [],
    imageUrl: '/mock/news/rackmount.jpg',
    confidence: 0.95,
    sourceName: null,
  },
  {
    id: '2',
    title: 'Fortinet Named a Leader in the 2026 Gartner® Magic Quadrant™ Report for Hybrid Mesh Firewall',
    summary:
      'Fortinet Named a Leader in the 2026 Gartner® Magic Quadrant™ Report for Hybrid Mesh Firewall. Content imported Sep 10, 2026.',
    url: 'https://example.com/news/gartner-2026',
    publishedAt: daysAgo(4),
    category: 'press-release',
    tags: [],
    imageUrl: null,
    confidence: 1,
    sourceName: null,
  },
  {
    id: '3',
    title: 'Fortinet Launches Free High School Cybersecurity Curriculum to Build the Next Generation of Cyber Defenders',
    summary:
      'Fortinet Launches Free High School Cybersecurity Curriculum to Build the Next Generation of Cyber Defenders. Content imported Aug 31, 2026.',
    url: 'https://example.com/news/high-school-curriculum',
    publishedAt: daysAgo(14),
    category: 'press-release',
    tags: [],
    imageUrl: null,
    confidence: 1,
    sourceName: null,
  },
  {
    id: '4',
    title: 'Fortinet Report Reveals Surge in OT Ransomware Attacks Targeting Critical Infrastructure',
    summary:
      'The latest Fortinet State of Operational Technology report finds ransomware attacks on OT environments have doubled year over year.',
    url: 'https://example.com/news/ot-ransomware-report',
    publishedAt: daysAgo(2),
    category: 'cybersecurity',
    tags: ['ransomware', 'ot-security'],
    imageUrl: '/mock/news/ot-report.jpg',
    confidence: 0.82,
    sourceName: 'SecurityWeek',
  },
  {
    id: '5',
    title: 'Fortinet Adds AI-Driven Threat Detection to FortiGuard Labs',
    summary:
      'New machine-learning models cut detection time for zero-day exploits across the FortiGuard threat intelligence pipeline.',
    url: 'https://example.com/news/ai-threat-detection',
    publishedAt: hoursAgo(6),
    category: 'cybersecurity',
    tags: ['ai', 'threat-intel'],
    imageUrl: null,
    confidence: 0.9,
    sourceName: 'Dark Reading',
  },
  {
    id: '6',
    title: 'Fortinet Expands FortiOS 8.0 with Unified SASE Management',
    summary: null,
    url: 'https://example.com/news/fortios-8-sase',
    publishedAt: hoursAgo(30),
    category: 'product-update',
    tags: [],
    imageUrl: null,
    confidence: 1,
    sourceName: null,
  },
];
