import { dots, future, highlight } from "mdx-deck/themes";


export default {
  ...highlight,
  ...dots,
  ...future,
  colors: {
    text: "rgb(24, 24, 24);", // black-ish
    background: "rgba(222, 255, 242, 0.64)", // minty
    primary: "rgb(255, 68, 255)", // pink
    secondary: "rgb(255, 255, 0)", // yellow
    accent: "rgb(107, 255, 220)", // teal
  },
  styles: {
    h1: {
        textTransform: "uppercase"
      },
  }
};
