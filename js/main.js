var arrayOfQuotes = [
  {
    name: "Jim Rohn",
    quotes: "Beware of what you become in pursuit of what you want.",
    url: "./image/Jim Rohn.jpg",
  },
  {
    name: "Epictetus",
    quotes:
      "It's not what happens to you, but how you react to it that matters.",
    url: "./image/Epictetus.jpg",
  },

  {
    name: "Wayne Gretzy",
    quotes: "You miss 100% of the shots you don't take.",
    url: "./image/Wayne Gretzy.jpg",
  },
  {
    name: "Nelson Mandela",
    quotes:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    url: "./image/Nelson_Mandela.jpg",
  },
  {
    name: "Elbert Hubbard",
    quotes: "Do not take life too seriously. You will not get out alive.",
    url: "./image/Elbert Hubbard.jpg",
  },
  {
    name: "عيسي الوزان",
    quotes: `يلا بينا
    باي من غير سلااام`,
    url: "./image/wazan.jpg",
  },
  {
    name: "مصطفي ابو سريع",
    quotes: "المال الحلال اهووو",
    url: "./image/mostafa.jpg",
  },
  {
    name: "Lieo Messi",
    quotes: "Alargenteni howaaa El Babaaaa",
    url: "./image/ليووووو.jpg",
  },
  { name: "عمي شكشك", 
    quotes: "ده انا محدش يتوقعني",
     url: "./image/شكشك.jpg" },
  { name: "محمد ثروت", 
    quotes: "هاااا معانا ولا تونس مغاورييي",
    url: "../image/ثروت.jpg" },
  { name: " عمرو عبدالجليل", 
    quotes: "دعونا ننسي اخطاء الماضي ونعمل اخطاء جديده",
    url: "../image/عمرو.jpg" 
  },
     
];
var lastIndex;
function generateQuote() {
  var random = Math.floor(Math.random() * arrayOfQuotes.length);

  while (random == lastIndex) {
    random = Math.floor(Math.random() * arrayOfQuotes.length);
  }
  document.querySelector('.test').innerHTML=`
             <div class="overflow-hidden">
        <img  class="rounded-2 mt-2 animate__animated animate__zoomInUp " src='${arrayOfQuotes[random].url}' style='width:150px; height=150px' id="imgOutbut" alt="" />
            <p class='animate__animated animate__backInRight ' id="quoteOutput">${arrayOfQuotes[random].quotes}</p>
            <p class='animate__animated animate__backInLeft ' id="authorOutput">${arrayOfQuotes[random].name}</p>
          </div>
  `
  document.querySelector("#quoteOutput").classList.add("ooso");
  document.querySelector("#authorOutput").classList.add("ooso");

  lastIndex = random;
}

window.addEventListener("load", () => {
  var semsm = document.querySelector(".semsm");
  semsm.classList.add("loader-hidden");

  setTimeout(()=>{
    document.querySelector('h1').classList.add('animate__animated','animate__backInRight');
    document.querySelector('p').classList.add('animate__animated','animate__backInLeft');
    document.querySelector('button').classList.add('animate__animated','animate__flip');
  },2300)
});
