export default {
  googleFont: 'https://fonts.googleapis.com/css?family=Montserrat:400,800',
  fonts: {
    body: 'montserrat, system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
  fontSizes: [18, 23, 29, 36, 45, 56, 70, 88, 110],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "rgb(24, 24, 24);", // black-ish
    background: "rgba(222, 255, 242, 0.64)", // minty
    primary: "rgb(107, 255, 220)", // teal
    secondary: "rgb(255, 255, 0)", // yellow
    accent: "rgb(255, 68, 255)", // pink
    muted: "",
    
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      textTransform: "uppercase",
      textAlign: "center"
    },
  },
  styles: {
    em: {
      color: "accent",
      fontStyle: "normal",
    },
    strong: {
      color: "primary",
    },
    ul: {
      textAlign: "left",
    }
  }
}
