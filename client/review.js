const baseUrl = "http://localhost:4000/api/jetGalactic/"

const checkInId = document.querySelector("#check-in-pin")

console.log(checkInId)

checkInId.textContent = 'yya'

const loadId = () =>{
    axios.get(baseUrl)
        .then(res => {
            console.log(res.data)
            let {first, last, passangers, departingFrom, arravingOn, date, checkIn} = (res.data)
            checkInId.textContent = checkIn
        })
}

loadId()