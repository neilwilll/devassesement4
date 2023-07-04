module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment testing123
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => { 
        const fortunes =[
            "you will have a great day",
            "A beautiful, smart, and loving person will be coming into your life.",
            " A dubious friend may be an enemy in camouflage.",
            "A faithful friend is a strong defense.",
            "A feather in the hand is better than a bird in the air.",
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];

        res.status(200).send(randomFortunes)
    },

    getRich: (req,res) => {
        const rich = [
            "Warren Buffet",
            "Magic Johnson",
            "Wayne Brady",
            "Bill Gates",
            "Birdman",
        ]

        let randomIndex = Math.floor(Math.random() * rich.length);
        let randomRich = rich[randomIndex];

        res.status(200).send(randomRich)
    },

    getMotivation: (req, res) => { 
        const motivation =[
            "read 30 min a day",
            "Go workout.",
            "everyday is a new day.",
            "reach your goals.",
            "change mindset.",
        ]

        let randomIndex = Math.floor(Math.random() * motivation.length);
        let randomMotivation= motivation[randomIndex];

        res.status(200).send(randomMotivation)
    },

    
    getSacks: (req, res) => { 
        const Sacks =[
            "JJ Watt",
            "Deacon Jones.",
            "Tj Watt.",
            "Charles Haley",
            "Julius Peppers.",
        ]

        let randomIndex =  Math.floor(Math.random() * Sacks.length);
        let randomSacks= Sacks[randomIndex];

        res.status(200).send(randomSacks)

    },
}
