import DefaultTheme from "vitepress/theme";
import "./custom.styl";

// figlet -f big "Gxscay"
console.log(
  `%c
 _____
/ ____|
| |  ____  _____  ___ __ _ _   _
| | |_ \\ \\/ / __|/ __/ _\` | | | |
| |__| |>  <\\__ \\ (_| (_| | |_| |
\\______/_/\\_\\___/\\___\\__,_|\\__, |
                            __/ |
                          |____/
`,
  "color: #42b983"
);
console.log(`%c微信/微博, 可添加：%cGxscay`, "color: red", "color: #42b983");
export default DefaultTheme;
