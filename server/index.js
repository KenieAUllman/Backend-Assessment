const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["The fortune you seek is in another cookie.!",
					 "A conclusion is simply the place where you got tired of thinking.",
					 "You will die alone and poorly dressed..", 
           "You will live long enough to open many fortune cookies.",
           "Do not mistake temptation for opportunity.",
  ];

  let randomIndex2 = Math.floor(Math.random() * fortunes.length);
  let randomfortunes = fortunes[randomIndex2];

  res.status(200).send(randomfortunes);
  
});

app.get("/api/horoscope", (req, res) => {
  const Zodiac = ["It might be skin cancer or it might just be some leftover BBQ sauce. Your aura is dim. Have it checked.",
					 "Step away from stress and spend some time in your happy place. You don't have to stay long, but you should change out the chocolate fountain and vacuum up the candy sprinkles. That's how you get ants",
					 "While others curse the storm, you’re out cruising for mud puddles. Jump in as many as you can, just remember to bring an inflatable duckie to keep yourself afloat in the deep end.",
            "Time for your musical talent to come through! If you can’t play an instrument, then write lyrics! People say “write what you know,” so now is your chance to bring a tune to: “My mom doesn’t miss me,” or “I love the smell of plastic.”",
           "You’re very earthy, which may mean that you don’t shower as often as most people",
  ];

  let randomIndex3 = Math.floor(Math.random() * Zodiac.length);
  let randomHoroscope = Zodiac[randomIndex3];

  res.status(200).send(randomHoroscope);
  
}); 


app.get('/api/fColor', (req, res) => {
  const faveColorResponse= ["What a great color!", 
  "Are you sure?",
   "Ew, gross! Why would you even say that?",
  "I don't think that is a real color..."]

  let randomIndex4 = Math.floor(Math.random() * faveColorResponse.length);
  let randomColors = faveColorResponse[randomIndex4]
  
  res.status(200).send(randomColors)
})

app.get('/api/quotes', (req, res) => {
  res.status(200).send('Great Choice!')
})

app.listen(4000, () => console.log("Server running on 4000"));
