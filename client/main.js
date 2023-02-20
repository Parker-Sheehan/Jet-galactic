const baseUrl = "http://localhost:4000/api/jetGalactic/"

const searchBtn = document.querySelector("#search-btn")


const bookTrip = (evt) =>{
    evt.preventDefault()
    const firstName = document.querySelector("#first-name").value
    const lasttName = document.querySelector("#last-name").value
    const passangers = document.querySelector("#passangers").value
    const departingFrom = document.querySelector("#departing-from").value
    const arrivingOn = document.querySelector("#arriving-on").value
    const date = document.querySelector("#date").value

    bodyObj = {
        first:firstName,
        last:lasttName,
        passangers:passangers,
        departingFrom:departingFrom,
        arrivingOn:arrivingOn,
        date:date
    }

    axios.post(baseUrl,bodyObj)
        .then(res =>{
            idPin = res.data
            window.location.href="./review.html";
        })
        .catch(err => console.log(err))
}

searchBtn.addEventListener("click", bookTrip)