import { Background } from "./components/Background/Background";

function App() {
  const mouseEffect = (e) => {
    console.log(e.clientY, e.clientX);
    const $cursor = document.createElement("div");
    $cursor.classList.add("cursorEffect");
    $cursor.style.top = `${e.clientY - 38}px`;
    $cursor.style.left = `${e.clientX - 7}px`;

    const $cursor2 = document.createElement("div");
    $cursor2.classList.add("cursorEffect");
    $cursor2.style.top = `${e.clientY - 38}px`;
    $cursor2.style.left = `${e.clientX - 7}px`;

    const $cursor3 = document.createElement("div");
    $cursor3.classList.add("cursorEffect");
    $cursor3.style.top = `${e.clientY - 38}px`;
    $cursor3.style.left = `${e.clientX - 7}px`;

    const $cursor4 = document.createElement("div");
    $cursor4.classList.add("cursorEffect");
    $cursor4.style.top = `${e.clientY - 38}px`;
    $cursor4.style.left = `${e.clientX - 7}px`;
    document.querySelector("main").append($cursor);
    setTimeout(() => {
      document.querySelector("main").removeChild($cursor);
    }, 300);
    setTimeout(() => {
      document.querySelector("main").append($cursor2);
    }, 25);
    setTimeout(() => {
      document.querySelector("main").removeChild($cursor2);
    }, 325);
    setTimeout(() => {
      document.querySelector("main").append($cursor3);
    }, 50);
    setTimeout(() => {
      document.querySelector("main").removeChild($cursor3);
    }, 350);
    setTimeout(() => {
      document.querySelector("main").append($cursor4);
    }, 75);
    setTimeout(() => {
      document.querySelector("main").removeChild($cursor4);
    }, 375);
  };

  return (
    <main onClick={mouseEffect}>
      <Background />
      <h1>Hola peponasdhjasdkjhgasdkhj</h1>
    </main>
  );
}

export default App;
