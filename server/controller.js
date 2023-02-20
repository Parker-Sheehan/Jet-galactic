arr = []

module.exports = {
    bookTrip : (req,res) => {
        function makeCheckIn(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
              counter += 1;
            }
            return result
        }
        checkInKey = (makeCheckIn(5))

        newTicket = {...req.body, checkIn:checkInKey}
        arr.unshift(newTicket)
        console.log(arr)
        res.status(200).send(checkInKey)
    },
    ticketInfo: (req,res) => {
        res.status(200).send(arr[0])
    }
}