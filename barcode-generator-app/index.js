const textarea = document.querySelector("#textarea");
const btn = document.querySelector(".btn");
const outField = document.querySelector(".out");
const body = document.querySelector('body');
let outArray = [];

btn.addEventListener("click", () => {
  outArray = textarea.value.split("\n");
  console.log(outArray);

  outArray.forEach((num, index) => {
    let svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");// SVG-элементы нельзя динамически создавать с помощью createElement так же, как HTML-элементы. Если вы хотите сгенерировать svg-файл, используйте функцию createElementNS
    svgElem.setAttribute('class', 'barcodeElem');
    svgElem.setAttribute('id', 'barcodeElem'+index);
    outField.appendChild(svgElem)

    JsBarcode('#barcodeElem'+index, num, {
      format: 'code128',
      displayValue: "true",
      lineColor: "#24292e",
      width: 2,
      height: 40,
      fontSize: 20,
    });

    console.log(num);
    console.log(index);
  });
});