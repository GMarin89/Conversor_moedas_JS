const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const valorEmReal = parseFloat(document.querySelector(".input-currency").value.replace(/\./g, "").replace(",", "."));
    const valorASerConvertido = document.querySelector(".currency_value_to_convert");
    const valorConvertido = document.querySelector(".currency_value");

    const dolarHoje = 6.19; // Taxa de câmbio para o dólar
    const euroHoje = 6.46; // Taxa de câmbio para o euro

    const moedaDestino = currencySelect.value;

    let valorConvertidoFinal = 0;
    let simboloMoeda = "";

    if (moedaDestino === "dolar") {
        valorConvertidoFinal = valorEmReal / dolarHoje;
        simboloMoeda = "USD";
    } else if (moedaDestino === "euro") {
        valorConvertidoFinal = valorEmReal / euroHoje;
        simboloMoeda = "EUR";
    }

    valorASerConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(valorEmReal);

    valorConvertido.innerHTML = new Intl.NumberFormat(moedaDestino === "dolar" ? "en-US" : "de-DE", {
        style: "currency",
        currency: simboloMoeda,
    }).format(valorConvertidoFinal);
}

function changeCurrency() {
    const moedaDestino = currencySelect.value;
    const currencyName = document.querySelector("#currency-name");
    const currencyImg = document.querySelector("#currency-img");

    if (moedaDestino === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImg.src = "./assets/logo_eua.png";
        currencyImg.alt = "logo_EUA";
    }

    if (moedaDestino === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/logo_euro.png"; // Certifique-se de ter essa imagem no diretório correto
        currencyImg.alt = "logo_Euro";
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
