export type Region = 'world' | 'north-america' | 'asia' | 'africa' | 'europe' | 'latin-america' | 'aseu';

export interface RegionConfig {
  id: Region;
  name: string;
  region: string;
  heroTitle: string;
  logo: string;
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    palette: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
  };
}

export const regionConfigs: Record<Region, RegionConfig> = {
  world: {
    id: 'world',
    name: 'MSME World',
    region: 'World',
    heroTitle: 'Welcome to MSME Solutions World',
    logo: '/images/logo.png',
    colors: {
      primary: '#53B54B',
      primaryDark: '#15803d',
      primaryLight: '#86efac',
      palette: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#53B54B',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      },
    },
  },
  'north-america': {
    id: 'north-america',
    name: 'MSME Solutions North America',
    region: 'North America',
    heroTitle: 'Welcome to MSME Solutions North America',
    logo: '/images/logo-north-america.png',
    colors: {
      primary: '#0E1E39',
      primaryDark: '#081222',
      primaryLight: '#6e7888',
      palette: {
        50: '#e7e9eb',
        100: '#cfd2d7',
        200: '#9fa5b0',
        300: '#6e7888',
        400: '#3e4b61',
        500: '#0E1E39',
        600: '#0b182e',
        700: '#081222',
        800: '#060c17',
        900: '#03060b',
        950: '#010306',
      },
    },
  },
  asia: {
    id: 'asia',
    name: 'MSME Solutions Asia',
    region: 'Asia',
    heroTitle: 'Welcome to MSME Solutions Asia',
    logo: '/images/logo-asia.png',
    colors: {
      primary: '#BC3126',
      primaryDark: '#8d251c',
      primaryLight: '#f6b3b3',
      palette: {
        50: '#fdf2f2',
        100: '#fce7e7',
        200: '#fad4d4',
        300: '#f6b3b3',
        400: '#f18e8e',
        500: '#BC3126',
        600: '#a92c22',
        700: '#8d251c',
        800: '#711e17',
        900: '#5d1c17',
        950: '#330b09',
      },
    },
  },
  africa: {
    id: 'africa',
    name: 'MSME Solutions Africa',
    region: 'Africa',
    heroTitle: 'Welcome to MSME Solutions Africa',
    logo: '/images/logo-africa.png',
    colors: {
      primary: '#B8940F',
      primaryDark: '#705609',
      primaryLight: '#FADB5F',
      palette: {
        50: '#FFFBEA',
        100: '#FFF3C4',
        200: '#FCE588',
        300: '#FADB5F',
        400: '#F7D03B',
        500: '#B8940F',
        600: '#94740A',
        700: '#705609',
        800: '#5C460E',
        900: '#4F3C10',
        950: '#2E2104',
      },
    },
  },
  europe: {
    id: 'europe',
    name: 'MSME Solutions Europe',
    region: 'Europe',
    heroTitle: 'Welcome to MSME Solutions Europe',
    logo: '/images/logo-europe.png',
    colors: {
      primary: '#1F4A7F',
      primaryDark: '#132c4c',
      primaryLight: '#7992b2',
      palette: {
        50: '#e9edf2',
        100: '#d2dbe5',
        200: '#a5b7cc',
        300: '#7992b2',
        400: '#4c6e99',
        500: '#1F4A7F',
        600: '#193b66',
        700: '#132c4c',
        800: '#0c1e33',
        900: '#060f19',
        950: '#03070d',
      },
    },
  },
  'latin-america': {
    id: 'latin-america',
    name: 'MSME Solutions Latin America',
    region: 'Latin America',
    heroTitle: 'Welcome to MSME Solutions Latin America',
    logo: '/images/logo-latin-america.png',
    colors: {
      primary: '#DE641B',
      primaryDark: '#853c10',
      primaryLight: '#eba276',
      palette: {
        50: '#fcf0e8',
        100: '#f8e0d1',
        200: '#f2c1a4',
        300: '#eba276',
        400: '#e58349',
        500: '#DE641B',
        600: '#b25016',
        700: '#853c10',
        800: '#59280b',
        900: '#2c1405',
        950: '#160a03',
      },
    },
  },
  aseu: {
    id: 'aseu',
    name: 'MSME Solutions ASEU',
    region: 'ASEU',
    heroTitle: 'Welcome to MSME Solutions ASEU',
    logo: '/images/logo-aseu.png',
    colors: {
      primary: '#442876',
      primaryDark: '#291847',
      primaryLight: '#8f7ead',
      palette: {
        50: '#eceaf1',
        100: '#dad4e4',
        200: '#b4a9c8',
        300: '#8f7ead',
        400: '#695391',
        500: '#442876',
        600: '#36205e',
        700: '#291847',
        800: '#1b102f',
        900: '#0e0818',
        950: '#07040c',
      },
    },
  },
};

export const DEFAULT_REGION: Region = 'world';

export const getRegionConfig = (): RegionConfig => {
  const regionId = (process.env.NEXT_PUBLIC_REGION || DEFAULT_REGION) as Region;
  return regionConfigs[regionId] || regionConfigs[DEFAULT_REGION];
};
