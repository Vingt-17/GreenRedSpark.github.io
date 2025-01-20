import Header from "../components/Header";
import { repositoryItems } from "../repositoryData";

export default function Repository() {
  return (
    <>
      <Header />
      <main>
        <h1>Repository</h1>
        <ul>
          {repositoryItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}