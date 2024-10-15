// export default function MsgBox({ userName, textColor }) {
//   let styles = { color: textColor };
//   return <h1 style={styles}>Hello, {userName}</h1>;
// }

export default function MsgBox({ userName, textColor }) {
  return <h1 style={{ color: textColor }}>Hello, {userName}</h1>;
}
