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
    if (document.querySelector(".input-currency").value !== "") {
        alert("Digite um valor válido")
    }
    return
}

    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const valueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 4.99
    const euroToday = 5.89
    const libraToday = 6.77
    const bitcoinToday = 373890.02



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

    if (currencySelect.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
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
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = 'Libra'
        currencyImg.src = './assets/libra 1.png'
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin 1.png'
    }
    
    const valueConverted = document.querySelector(".currency-value")
    valueConverted.innerHTML = formatCurrency(0, currencySelect.value)

    convertValues()
}

function formatCurrency(value, currency) {
    if (currency === "dolar") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value)
    }

    if (currency === "euro") {
        return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(value)
    }

    if (currency === "libra") {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(value)
    }

    if (currency === "bitcoin") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(value)
    }
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)
