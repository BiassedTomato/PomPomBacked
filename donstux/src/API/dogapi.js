export const getBreed = (breed) => `https://dog.ceo/api/breed/${breed}/images/random`

// 'all' HAS to be the first one and have index 0
export const BreedTypes = [
    "all",
    "germanshepherd",
    "pomeranian",
    "shiba",
    "akita",]

const CleanBreeds = [
    "germanshepherd",
    "pomeranian",
    "shiba",
    "akita",]

export const breedData = {
    "": {
        name: "",
        cost: ""

    },
    "shiba": {
        name: "Сиба-Ину",
        cost: "40 000 ₽"
    },
    "akita": {
        name: "Акита-Ину",
        cost: "30 000 ₽"
    },
    "pomeranian": {
        name: "Шпиц",
        cost: "10 000 ₽"
    },
    "germanshepherd": {
        name: "Овчарка",
        cost: "100 000 ₽"
    },
}

export const breedSizes = [
    CleanBreeds,
    ["pomeranian"],
    ["shiba"],
    ["germanshepherd", "akita"],
]

export const furLength = [
    CleanBreeds,
    ["shiba", "akita"],
    ["pomeranian", "germanshepherd"],
]


export const getImage = async (breed) => {
    if (breed == "all" || breed == null) {

        const request = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await request.json()

        return data
    }

    else {

        const request = await fetch(getBreed(breed))

        const data = await request.json()

        return data
    }
}

export const getDogByID = async (id) => {
    let data = null
    
    await fetch(`http://127.0.0.1:8000/api/dog/get?id=${id}`)
        .then(req => {data = req}, err => data = null)

    if (data == null)
        return Promise.reject("No dog with such ID.")

    const req_json = await data.json()

    console.log(req_json.photo_URL)
    return { 'breed': req_json.breed, 'url': req_json.photo_URL }
}

export const getRandomDog = async (breedToFetch = null, size = 0, fur = 0, age = 0) => {


    if (breedToFetch != null && breedToFetch != "all") {

        const arr = furLength[fur].filter(t => breedSizes[size].includes(t));

        if (!arr.includes(breedToFetch))
            return Promise.reject("Found nothing.")

        let data = await getImage(breedToFetch)
        return { "breed": breedToFetch, "url": data.message }
    }
    else {
        const arr = furLength[fur].filter(t => breedSizes[size].includes(t));

        if (arr.length < 1) {
            return Promise.reject("Found nothing.")
        }


        //const msg = arr.slice(1, BreedTypes.length)
        let fetchedBreed = arr[Math.floor(Math.random() * arr.length)]

        const req = await fetch("http://127.0.0.1:8000/api/dog/get?id=1&size=1&fur=3")

        req.json().then(data=>console.log(data.photo_URL))
        

        const imgRequest = await fetch(`https://dog.ceo/api/breed/${fetchedBreed}/images/random`)
        const imgData = await imgRequest.json()

        return { "breed": fetchedBreed, "url": imgData.message }

    }
}
// to get a list of all breeds: https://dog.ceo/api/breeds/list
// to get a random pic of a specified breed: https://dog.ceo/api/breed/%BREED_NAME%/images/random