const baseUrl = "http://localhost:4000/api/jetGalactic/"

const searchBtn = document.querySelector("#search-btn")
let ticketInfoForm = document.querySelector('form')
let reset = ticketInfoForm.innerHTML

const bookTrip = (evt) =>{
    evt.preventDefault()
    const passangers = document.querySelector("#passangers").value
    const departingFrom = document.querySelector("#departing-from").value
    const arrivingOn = document.querySelector("#arriving-on").value
    const date = document.querySelector("#date").value

    for(let i = 0; i < passangers; i++){
        console.log(i)
    }

    bodyObj = {
        passangers,
        departingFrom,
        arrivingOn,
        date
    }

    for(let i =0; i<passangers ;i++){
        const firstName = document.querySelector(`#first-name-${i}`).value
        const lastName = document.querySelector(`#last-name-${i}`).value
        bodyObj[`firstName${i}`] = firstName
        bodyObj[`lastName${i}`] = lastName
    }
    console.log(bodyObj)

    axios.post(baseUrl,bodyObj)
        .then(res =>{
            idPin = res.data
            // window.location.href="./review.html"
        })
        .catch(err => console.log(err))
}

passangerInputs = (evt) => {
    console.log("woo!")
    console.log(evt.target.value)

    const namesDivDiv = document.querySelector("#names-div-div")
    const passangers = document.querySelector("#passangers").value

    namesDivDiv.innerHTML = ""

    for(let i = 0; i < passangers; i++){
        let newNamesDiv = document.createElement('div')
        let firstNameDiv = document.createElement('div')
        let lastNameDiv = document.createElement('div')
        let firstNameLable = document.createElement('label')
        let lastNameLable = document.createElement('label')
        let firstNameInput = document.createElement('input')
        let lastNameInput = document.createElement('input')

        newNamesDiv.classList = 'input-box'
        firstNameDiv.classList = 'selector-div'
        lastNameDiv.classList = 'selector-div'
        firstNameLable.textContent = 'First Name'
        lastNameLable.textContent = 'Last Name'
        firstNameInput.setAttribute('id',`first-name-${i}`)
        lastNameInput.setAttribute('id',`last-name-${i}`)
        firstNameInput.classList = 'selectors'
        lastNameInput.classList = 'selectors'
        firstNameInput.placeholder = 'First Name'
        lastNameInput.placeholder = 'Last Name'



        firstNameDiv.appendChild(firstNameLable)
        firstNameDiv.appendChild(firstNameInput)
        lastNameDiv.appendChild(lastNameLable)
        lastNameDiv.appendChild(lastNameInput)
        newNamesDiv.appendChild(firstNameDiv)
        newNamesDiv.appendChild(lastNameDiv)

        namesDivDiv.appendChild(newNamesDiv)

        console.log(namesDivDiv)

    }
}

searchBtn.addEventListener("click", bookTrip)

document.querySelector('#passangers').addEventListener('change',passangerInputs)