const currencies = [
  {
    name: 'U.S. dollar',
    code: 'USD',
    symbol: '$',
  },
  {
    name: 'Euro',
    code: 'EUR',
    symbol: '€',
  },
  {
    name: 'Japanese yen',
    code: 'JPY',
    symbol: '¥',
  },
  {
    name: 'Sterling',
    code: 'GBP',
    symbol: '£',
  },
  {
    name: 'Renminbi',
    code: 'CNY',
    symbol: '¥',
  },
  {
    name: 'Australian dollar',
    code: 'AUD',
    symbol: 'A$',
  },
  {
    name: 'Canadian dollar',
    code: 'CAD',
    symbol: 'C$',
  },
  {
    name: 'Swiss franc',
    code: 'CHF',
    symbol: 'CHF',
  },
  {
    name: 'Hong Kong dollar',
    code: 'HKD',
    symbol: 'HK$',
  },
  {
    name: 'Singapore dollar',
    code: 'SGD',
    symbol: 'S$',
  },
  {
    name: 'Swedish krona',
    code: 'SEK',
    symbol: 'kr',
  },
  {
    name: 'South Korean won',
    code: 'KRW',
    symbol: '₩',
  },
  {
    name: 'Norwegian krone',
    code: 'NOK',
    symbol: 'kr',
  },
  {
    name: 'New Zealand dollar',
    code: 'NZD',
    symbol: 'NZ$',
  },
  {
    name: 'Indian rupee',
    code: 'INR',
    symbol: '₹',
  },
  {
    name: 'Mexican peso',
    code: 'MXN',
    symbol: 'MX$',
  },
  {
    name: 'New Taiwan dollar',
    code: 'TWD',
    symbol: 'NT$',
  },
  {
    name: 'South African rand',
    code: 'ZAR',
    symbol: 'R',
  },
  {
    name: 'Brazilian real',
    code: 'BRL',
    symbol: 'R$',
  },
  {
    name: 'Danish krone',
    code: 'DKK',
    symbol: 'kr',
  },
  {
    name: 'Polish złoty',
    code: 'PLN',
    symbol: 'zł',
  },
  {
    name: 'Thai baht',
    code: 'THB',
    symbol: '฿',
  },
  {
    name: 'Israeli new shekel',
    code: 'ILS',
    symbol: '₪',
  },
  {
    name: 'Indonesian rupiah',
    code: 'IDR',
    symbol: 'Rp',
  },
  {
    name: 'Czech koruna',
    code: 'CZK',
    symbol: 'Kč',
  },
  {
    name: 'UAE dirham',
    code: 'AED',
    symbol: 'د.إ',
  },
  {
    name: 'Turkish lira',
    code: 'TRY',
    symbol: '₺',
  },
  {
    name: 'Hungarian forint',
    code: 'HUF',
    symbol: 'Ft',
  },
  {
    name: 'Chilean peso',
    code: 'CLP',
    symbol: 'CLP$',
  },
  {
    name: 'Saudi riyal',
    code: 'SAR',
    symbol: '﷼',
  },
  {
    name: 'Philippine peso',
    code: 'PHP',
    symbol: '₱',
  },
  {
    name: 'Malaysian ringgit',
    code: 'MYR',
    symbol: 'RM',
  },
  {
    name: 'Colombian peso',
    code: 'COP',
    symbol: 'COL$',
  },
  {
    name: 'Russian ruble',
    code: 'RUB',
    symbol: '₽',
  },
  {
    name: 'Romanian leu',
    code: 'RON',
    symbol: 'L',
  },
  {
    name: 'Peruvian sol',
    code: 'PEN',
    symbol: 'S/',
  },
  {
    name: 'Bahraini dinar',
    code: 'BHD',
    symbol: '.د.ب',
  },
  {
    name: 'Bulgarian lev',
    code: 'BGN',
    symbol: 'BGN',
  },
  {
    name: 'Argentine peso',
    code: 'ARS',
    symbol: 'ARG$',
  },
] as const;

export const CURRENCIES = currencies as unknown as CurrencyData[];

export type Currencies = (typeof currencies)[number]['code'];
export type CurrencyData = (typeof currencies)[number];
