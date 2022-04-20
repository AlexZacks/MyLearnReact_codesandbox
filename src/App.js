import "./styles.css";
//import {word,Row,Cell} from './my';
export default function App() {
  const word = "Exchange";
  const Row = () => {
    return <tr></tr>;
  };
  const Cell = () => {
    return <td className="Cell"></td>;
  };
  return (
    <div>
      <h1 className="H1">{word}</h1>
      <table className="Tbl">
        <Row />
        <Cell />
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
        <Row />
        <Cell />
        <Cell />
      </table>
    </div>
  );
}
