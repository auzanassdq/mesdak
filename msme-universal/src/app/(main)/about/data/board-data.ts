export interface BoardMember {
  name: string;
  position: string;
  experience: string;
}

export interface BoardData {
  title: string;
  description: string;
  members: BoardMember[];
}

export type BoardType = 'executive' | 'supervisory' | 'advisory';

export const BOARD_DATA: Record<BoardType, BoardData> = {
  executive: {
    title: 'Executive Board',
    description: 'Our executive team leads strategic initiatives and drives organizational growth.',
    members: [
      { name: 'John Smith', position: 'Chief Executive Officer', experience: '15+ years in MSME development' },
      { name: 'Sarah Johnson', position: 'Chief Operating Officer', experience: '12+ years in business operations' },
      { name: 'Michael Chen', position: 'Chief Financial Officer', experience: '10+ years in digital transformation' },
      { name: 'Michael Chen', position: 'Chief Information Officer', experience: '10+ years in digital transformation' },
      { name: 'Michael Chen', position: 'Chief Legal Officer', experience: '10+ years in digital transformation' },
      { name: 'Michael Chen', position: 'Chief Economist', experience: '10+ years in digital transformation' },
      { name: 'Michael Chen', position: 'Chief Strategy Officer', experience: '10+ years in digital transformation' },
    ]
  },
  supervisory: {
    title: 'Supervisory Board',
    description: 'Our supervisory board ensures governance, compliance, and strategic oversight.',
    members: [
      { name: 'Mr. Sallam ATTIM', position: 'Chairman of the Board', experience: '20+ years in corporate governance' },
      { name: 'Dr. Emily Davis', position: 'Board Chairperson', experience: '20+ years in corporate governance' },
      { name: 'Robert Wilson', position: 'Independent Director', experience: '18+ years in financial oversight' },
      { name: 'Lisa Anderson', position: 'Compliance Officer', experience: '14+ years in regulatory affairs' }
    ]
  },
  advisory: {
    title: 'Advisory Board',
    description: 'Our advisory board provides expert guidance and industry insights.',
    members: [
      { name: 'James Thompson', position: 'Chairman', experience: '22+ years in market development' },
      { name: 'Prof. David Kumar', position: 'Industry Advisor', experience: '25+ years in MSME research' },
      { name: 'Maria Rodriguez', position: 'Technology Advisor', experience: '16+ years in innovation strategy' },
      { name: 'James Thompson', position: 'Market Advisor', experience: '22+ years in market development' },
      { name: 'James Thompson', position: 'Market Advisor', experience: '22+ years in market development' },
      { name: 'James Thompson', position: 'Market Advisor', experience: '22+ years in market development' },
      { name: 'James Thompson', position: 'Market Advisor', experience: '22+ years in market development' }
    ]
  }
};
