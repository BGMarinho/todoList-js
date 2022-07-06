function scope() {
  const bodyClass = document.body.classList.contains("ex-for");
  if (bodyClass === true) {
    const elementos = [
      {
        tag: "p",
        texto: "Frase 1",
      },
      {
        tag: "div",
        texto: "Frase 2",
      },
      {
        tag: "footer",
        texto: "Frase 3",
      },
      {
        tag: "section",
        texto: "Frase 4",
      },
    ];

    const container = document.querySelector(".container");
    const div = document.createElement("div");
    for (let i = 0; i < elementos.length; i++) {
      const { tag, texto } = elementos[i];
      const htmlElement = document.createElement(tag);
      const content = container.appendChild(div);
      content.appendChild(htmlElement).innerHTML = `${texto}`;
    }
  }
}
scope();

// switch (i) {
//   case 0:
//     const [{ tag: tag0, texto: texto0 }] = elementos;
//     console.log(tag0, texto0);
//     break;
//   case 1:
//     const [{ tag: tag1, texto: texto1 }] = elementos;
//     console.log(tag1, texto1);
//     break;
//   case 2:
//     const [{ tag: tag2, texto: texto2 }] = elementos;
//     console.log(tag2, texto2);
//     break;
//   case 3:
//     const [{ tag: tag3, texto: texto3 }] = elementos;
//     console.log(tag3, texto3);
//     break;
// }
