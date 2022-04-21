import "./styles.css";
//import {word,Row,Cell} from './my';
export default function App() {
  const word = "Exchange";
  const Row = () => {
    return <tr></tr>;
  };
  const Cell = (propos) => {
    return <td className="Cell">{propos.n}</td>;
  };
  return (
    <div>
      <h1 className="H1">{word}</h1>
      <table className="Tbl">
        <Row />
        <Cell n="USD/KZT" />
        <Cell />
        <Row />
        <Cell n="EU/KZT" />
        <Cell />
        <Row />
        <Cell />
        <Cell />
        <Row />
        <Cell />
        <Cell />
        <Row />
        <Cell />
        <Cell />
      </table>
    </div>
  );
}
