const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const valorEmReal = parseFloat(document.querySelector(".input-currency").value.replace(/\./g, "").replace(",", "."));
    const valorASerConvertido = document.querySelector(".currency_value_to_convert");
    const valorConvertido = document.querySelector(".currency_value");

    const dolarHoje = 6.19; // Taxa de câmbio para o dólar
    const euroHoje = 6.46; // Taxa de câmbio para o euro
    const librasHoje = 7.8; // Taxa de câmbio para libras
    const ienesHoje = 0.4; // Taxa de câmbio para ienes japonês

    const moedaDestino = currencySelect.value;

    let valorConvertidoFinal = 0;
    let simboloMoeda = "";

    if (moedaDestino === "dolar") {
        valorConvertidoFinal = valorEmReal / dolarHoje;
        simboloMoeda = "USD";

    } else if (moedaDestino === "euro") {
        valorConvertidoFinal = valorEmReal / euroHoje;
        simboloMoeda = "EUR";

    } else if (moedaDestino === "libras") {
        valorConvertidoFinal = valorEmReal / librasHoje;
        simboloMoeda = "GBP";

    } else if (moedaDestino === "ienes") {
        valorConvertidoFinal = valorEmReal / ienesHoje;
        simboloMoeda = "JPY";

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
        currencyImg.width = 50;
        currencyImg.height = 50;
    }

    if (moedaDestino === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/logo_euro.png";
        currencyImg.width = 50;
        currencyImg.height = 50;
    }

    if (moedaDestino === "libras") {
        currencyName.innerHTML = "Libras"; 
        currencyImg.src = "./assets/logo_libras.png"; 
        currencyImg.alt = "logo_Libras"; 
        currencyImg.width = 70;
        currencyImg.height = 60;

    }

        if (moedaDestino === "ienes") {
            currencyName.innerHTML = "ienes";
            currencyImg.src = "./assets/ienes_logo_.png"; // Certifique-se de ter essa imagem no diretório correto
            currencyImg.alt = "logo_Ienes";
            currencyImg.width = 60;
            currencyImg.height = 60;
        }

        convertValues()
    }

    currencySelect.addEventListener("change", changeCurrency);
    convertButton.addEventListener("click", convertValues);
