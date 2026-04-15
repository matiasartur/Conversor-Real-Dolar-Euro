const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const valueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.99

    const convertedValue = inputCurrencyValue / dolarToday

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
}

convertButton.addEventListener("click", convertValues)
