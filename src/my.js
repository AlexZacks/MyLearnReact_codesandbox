import "./styles.css";

const word = "Exchange";
const Row = () => {
  return <tr></tr>;
};
const Cell = (propos) => {
  return <td className={propos.c}>{propos.n}</td>;
};
export { word, Row, Cell };
