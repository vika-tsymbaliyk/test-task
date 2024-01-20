export const theme =Object.freeze({
    colors: {
        primary: '#7986cb',
        secondary: '#2b2b2b',
        success: '#4caf50',
        danger: '#f44336 ',
        
        bg: 'linear-gradient(0deg, rgba(129,199,140,1) 0%, rgba(255,255,255,1) 100%)',
        bgTop: '#6f9071' ,
        light: '#f4f9f5',
        dark:  '#212522' ,
        bord: 'ffffff',
      },
      media: {
        tablet: '(min-width: 768px)',
        laptop: '(min-width: 1200px)',
      },
      spacing: value => `${4 * value}px`,
      shadows: {
        small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
        regular: '0px 4px 10px 4px #9e9e9e',
        medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
      },
      fontSizes:{
        large: '32px',
        medium: '18px',
        small: '14px',
      },
      animation: {
        cubicBezier:'0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
      },
       

})