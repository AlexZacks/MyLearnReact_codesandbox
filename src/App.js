import "./styles.css";
import { word, Row, Cell } from "./my";

export default function App() {
  return (
    <div>
      <h1 className="H1">{word}</h1>
      <table className="Tbl">
        <Row />
        <Cell c="Cell" n="USD/KZT" />
        <Cell c="Cell1" n="s" />
        <Row />
        <Cell c="Cell" n="EU/KZT" />
        <Cell c="Cell1" n="s" />
        <Row />
        <Cell c="Cell" n="USD/RUB" />
        <Cell c="Cell1" n="s" />
        <Row />
        <Cell c="Cell" n="EU/RUB" />
        <Cell c="Cell1" n="s" />
        <Row />
        <Cell c="Cell" n="RUB/KZT" />
        <Cell c="Cell1" n="s" />
      </table>
    </div>
  );
}
