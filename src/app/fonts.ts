import localFont from 'next/font/local'

export const leadwayFont = localFont({
  src: [
    { path: '../../public/fonts/LeadwayThin-Regular.otf',        weight: '100', style: 'normal' },
    { path: '../../public/fonts/LeadwayThinItalic-Italic.otf',   weight: '100', style: 'italic' },
    { path: '../../public/fonts/LeadwayLight-Regular.otf',       weight: '200', style: 'normal' },
    { path: '../../public/fonts/LeadwayLightItalic-Italic.otf',  weight: '200', style: 'italic' },
    { path: '../../public/fonts/LeadwayBook.otf',                weight: '300', style: 'normal' },
    { path: '../../public/fonts/LeadwayBookItalic-Italic.otf',   weight: '300', style: 'italic' },
    { path: '../../public/fonts/LeadwayRegular.otf',             weight: '400', style: 'normal' },
    { path: '../../public/fonts/LeadwayRegularItalic-Italic.otf',weight: '400', style: 'italic' },
    { path: '../../public/fonts/LeadwayBold-Regular.otf',        weight: '700', style: 'normal' },
    { path: '../../public/fonts/LeadwayBoldItalic-Italic.otf',   weight: '700', style: 'italic' },
    { path: '../../public/fonts/LeadwayHeavy-Regular.otf',       weight: '800', style: 'normal' },
    { path: '../../public/fonts/LeadwayHeavyItalic-Italic.otf',  weight: '800', style: 'italic' },
    { path: '../../public/fonts/LeadwayBlack-Regular.otf',       weight: '900', style: 'normal' },
  ],
  variable: '--font-leadway',
  display: 'swap',
})
