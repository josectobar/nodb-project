let directoryArray = [{
        id: 0,
        firstName: "Karl",
        lastName: "Malone",
        phone: "(323) 555-3232",
        address: "1555 N 5111 E, Orem UT, 84057",
        email: "themalone@gmail.com"
    }, {
        id: 1,
        firstName: "John",
        lastName: "Stockton",
        phone: "(801) 180-5333",
        address: "2555 N 2111 E, SLC UT, 84098",
        email: "lttljohn2003@hotmail.com"
    },{
        id: 2,
        firstName: "Michael",
        lastName: "Jordan",
        phone: "(432) 332-4212",
        address: "1 Mvp Lane, Champions Way, Chicago IL, 5398",
        email: "iamjordan@jordan.com"
    }, {
        id: 3,
        firstName: "Scotty",
        lastName: "Pippen",
        phone: "(432) 332-4213",
        address: "2 Mvp Lane, Champions Way, Chicago IL, 53981",
        email: "iknowjordan@jordan.com"
    }
]

let id = 4

module.exports = {
    getDirectory: (req, res) => {
        res.status(200).send(directoryArray)
    },
    addToDirectory: (req, res) => {
        const { firstName, lastName, phone, address, email } = req.body
        directoryArray.push({
            id,
            firstName,
            lastName,
            phone,
            address,
            email
        })
        id++
        
        res.status(200).send(directoryArray)
    },
    editDirectory: (req, res) => {
        const { firstName, lastName, phone, address, email } = req.body
        const { id } = req.params
        const entryIndex = directoryArray.findIndex(entry => entry.id == id)
        if (entryIndex === -1) {
            res.status(404).send('Entry not found')
        }
        let foundEntry = directoryArray[entryIndex]
        foundEntry = {
            id: foundEntry.id,
            firstName: firstName || foundEntry.firstName,
            lastName: lastName || foundEntry.lastName,
            phone: phone || foundEntry.phone,
            address: address || foundEntry.address,
            email: email || foundEntry.email
        }
        directoryArray.splice(entryIndex, 1, foundEntry)
        res.status(200).send(directoryArray)
    },
    deleteEntry: (req, res) => {
        const { id } = req.params
        const entryIndex = directoryArray.findIndex(entry => entry.id == id)
        if (entryIndex === -1) {
            res.status(404).send('Entry not found')
        }
        directoryArray.splice(entryIndex, 1)
        res.status(200).send(directoryArray)
    }
}