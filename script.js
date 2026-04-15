const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const input = document.querySelector(".input-currency")

input.addEventListener("input", function (e) {
    let value = e.target.value
    value = value.replace(/\D/g, "")
    value = Number(value) / 100
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    e.target.value = value
})

function convertValues() {
    let inputCurrencyValue = document.querySelector(".input-currency").value

    inputCurrencyValue = inputCurrencyValue
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim()

    inputCurrencyValue = parseFloat(inputCurrencyValue)

    if (isNaN(inputCurrencyValue)) {
    alert("Digite um valor válido")
    return
    }

    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const valueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 4.99
    const euroToday = 5.89



    if (currencySelect.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/usa.png'
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }
    
    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)
