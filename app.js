let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 25000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 25000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

let userMessage = null; 

const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
      
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    
    return chatLi; // return chat <li> element
}
let a;
const generateResponse = (chatElement) => {
    // const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");
    let text = a.toLowerCase().replace(/[^a-z]/g, ''); 
    let now1 =text;

    // Define the properties and message for the API request
    // const requestOptions = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${API_KEY}`
    //     },
    //     body: JSON.stringify({
    //         model: "gpt-3.5-turbo",
    //         messages: [{role: "user", content: userMessage}],
    //     })
    // }

    // Send POST request to API, get response and set the reponse as paragraph text
    // fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    //     messageElement.textContent = data.choices[0].message.content.trim();
    // })  

    if((Boolean(now1.includes("hello"))==true)||(Boolean(now1.includes("hi"))==true)){anytime(ash);console.log(ash);}
    else if((Boolean(now1.includes("loveyou"))==true)){anytime(love);}
    else if((Boolean(now1.includes("hateyou"))==true)){anytime(hate);}
    else if((Boolean(now1.includes("baymax"))==true) || (Boolean(now1.includes("whoareyou"))) || (Boolean(now1.includes("aboutyou"))==true) ){anytime(bay);}
    else if((Boolean(now1.includes("museum"))==true||Boolean(now1.includes("louvre"))==true)){anytime(mue);} 
    else if(Boolean(now1.includes("howareyou"))==true){anytime("I'm fine");}
    else if(Boolean(now1.includes("anton"))==true){anytime(lead);}
    else if(Boolean(now1.includes("anitta"))==true){anytime(ani);}
    else if(Boolean(now1.includes("allan"))==true){anytime(allan);} 
    else if(Boolean(now1.includes("anusha"))==true){anytime(anuk);}   
    else if(Boolean(now1.includes("award"))==true ||(Boolean(now1.includes("awards"))==true)){anytime(nat);}
    else if(Boolean(now1.includes("devjith"))==true){anytime(dev);}
    else if(Boolean(now1.includes("beauty"))==true){anytime(one);}
    else if(Boolean(now1.includes("julio"))==true){anytime(onePhot);}       
    else if(Boolean(now1.includes("veins"))==true){anytime(two);}
    else if(Boolean(now1.includes("robert"))==true){anytime(twoPhot);}
    else if(Boolean(now1.includes("bears"))==true){anytime(three);}
    else if(Boolean(now1.includes("martin"))==true){anytime(threePhot);}
    else if(Boolean(now1.includes("torn"))==true){anytime(four);}
    else if(Boolean(now1.includes("junye"))==true){anytime(fourPhot);}
    else if(Boolean(now1.includes("survive"))==true){anytime(five);}
    else if(Boolean(now1.includes("stanley"))==true){anytime(fivePhot);}
    else if(Boolean(now1.includes("moonlight"))==true){anytime(six);}
    else if(Boolean(now1.includes("christiaan"))==true){anytime(sixPhot);}
    else if(Boolean(now1.includes("iceland"))==true){anytime(seven);}
    else if(Boolean(now1.includes("junea"))==true){anytime(sevenPhot);}
    else if(Boolean(now1.includes("galactic"))==true){anytime(eight);}
    else if(Boolean(now1.includes("pardo"))==true){anytime(onePhot);}
    else if(Boolean(now1.includes("venice"))==true){anytime(nine);}
    else if(Boolean(now1.includes("alexander"))==true){anytime(ninePhot);}
    else if(Boolean(now1.includes("thankyou"))==true ||(Boolean(now1.includes("thanks"))==true)){anytime(thank);}
    else if(Boolean(now1.includes("welcome"))==true){anytime(welcome);}
    else if(Boolean(now1.includes("loveanton"))==true){anytime(lvant);}
    else if(Boolean(now1.includes("members"))==true||(Boolean(now1.includes("team"))==true)){anytime(members);}
    else if(Boolean(now1.includes("bye"))==true ||(Boolean(now1.includes("goodbye"))==true)){anytime(bye);}
   
    else {console.log("try again...");}
    function anytime(vari) {
    messageElement.textContent=vari;
    console.log("Ok right?");}
     // catch(err){
    //     messageElement.classList.add("error");
    //     messageElement.textContent = "Oops! Something went wrong. Please try again.";
    // }
    chatbox.scrollTo(0, chatbox.scrollHeight)}


const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;
    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;
    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  a=userMessage.toString();
    chatbox.scrollTo(0, chatbox.scrollHeight);    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...","incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
        
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});
const ash="Hi, I'm Baymax, how can I help you?";
let one = "The Beauty Of The Earth was a landscape photo taken by Julio Castro Pardo, which won the first place in International Photography awards in 2021. He was trying to capture the marvelous nature of the Earth in it's untouched form. This photo was took in Netherlands";
let onePhot ="Julio Castro Pardo is an Professional Photgrapher from La Coruna, Spain.He has a great fondness for nature,hiking and especially astronomy, which fuels his great passion for night photography. He has won more than 200 international awards and he's been placed in front page of many magazines. By his words,'I love to travel the world to look for landscapes that fill my camera with emotion'";
let two ="The Veins of The Earth was a 8K landscape which won the 3rd place in Nature/Aerial/Drone International Photography Awards in 2023.It was took by Robert Bilos. This photo was trying to capture the 'The rivers of Iceland run from the glaciers to the oceans, creating paths across the volcanic earth which look like the veins of the land when seen from the air. Along the way, they transport vital nutrients for the ecosystem in the form of sediment, which are responsible for the sometimes very unusual colors of the water, sometimes looks like another planet. It is a true paradise'";
let twoPhot ="Robert Bilos is an  professional landscape photographer, living in Langen, near Frankfurt, Germany. Due to his passion for photography, he has went to various countries and places with epic natural backdrops of this planet. Each photo tells a story. He has won numerous international Allocades:Iconic International Photographer, Silver Camera Landscape Federation of European Photographers, Bronze in Nature FEP, Gold Tokyo International Photography Award (TIFA), World Photography Award, Zeiss Award.";
let three =" 33 Days Among The Bears was a landscape photo took by Martin Gregus which won 2nd Place In Nature/Aerial/Drone:";
let threePhot ="Martin Gregus Jr. is the youngest member of the Gregus Creactive Group, residing in Vancouver, Canada. Born in Bratislava, Slovakia.Martin has garnered international acclaim:His images and films being celebrated and published in renowned magazines and competitions such as Canadian Geographic and Photo Life Magazine";
let four ="The Torn Earth was a landscape photo took by Liu Junye which won 1st Place In Nature/Aerial/Drone";
let fourPhot ="Liu Junye is a full-time student studying in Xihua University. He is one of the young aspiring phototgraphers inspiring everyone to admire the nature Earth";
let five =" Survive is an 4K  landscape photo took by Stanley Leroux which won 2nd Place in One-shot:climate Change/Water in International Photography Awards";
let fivePhot ="Stanley Leroux focuses on portraying wild territories passed over in silence.Nominated for the Wildlife Photographer of The Year and winner of two medals of the National Society of Fine Arts, his photographs are exhibited in France and abroad, in art galleriesin France and at festivals.";
let six ="Moonlight over the Atlantic ws a photo took by Christiaan van Heijst which won 3rd Place / Oneshot : Movement/Technology / Machine in International Photography Awards 2023";
let sixPhot ="Chris is an amazing pilot with an 25,000 hours flying experience.Christiaan van Heijst, 'Full moon. About to cross 30 West, halfway a stormy Atlantic Ocean when the radiant moon ascents above the horizon. Blinding out most stars, the bright lunar spell adds a touch of magic to the world. Silver-painted clouds drift by capsule of the 747 cockpit, live and appreciate this alien-like landscape. Far beyond, the gently glowing horizon marks the delicate edge of space. Almost home.'"
let seven ="Icelandic earth is an photo took by Junea Lyra, which won 1st Place In Nature/Underwater in Sony Photography Awards";
let sevenPhot ="Junea Lyra, a Ukrainian-German devoted diver and photographer, highlights the beauty and human-induced distress of our World. Born in Kharkiv, Ukraine, he holds a diploma in rocket engineering and received photography education from the Kiev Photography School between 2019 and 2023.";
let eight ="Galactic Hoodos is an 8K landscape took by Julio Castro Pardo which won  2nd Place In Nature/Landscape in Travel Photographer of the Year ";
let nine ="Night in Venice is an photo took by Aleksandr Ivanov which won the 3rd place in Nature/Landscape/Dawn in Sony Phtotgraphy awards in 2022";
let ninePhot ="Alexander Ivanov is an full-time Nature photographer in Slovakia's most prestigious art gallery; he has given many presentations and speeches about photography in schools and museums, and even led a photography camp for the Royal BC Museum in Victoria, Canada. Today  Martin is a a full member of the ICG and drone pilotwith over five years experience in places across Canada, Europe, and the South Pacific";
let lead="Anton Wiclif is an aspiring software engineer, who is an Developer in C, JS and it's major frameworks, Java, React etc..who has many honors behind his name, is also who happens to be the lead on this project";
let ani="She is SUPER! Anitta is one of the members of this project. She is a skilled programmer specializing in C and Java, with a passion for blogging, content writing, and creative thinking.";
let allan="Allan is one of the member of this project. Alan is a professional graphic artist specializing in 3D and 2D animations, banner and poster design, and web development.";
let anuk="Anusha Sri is one of the member of this project. Anusha is a proficient C programmer who loves vlogging, content writing, and designing website logos.";
let dev="Devjith comes from a long-line of sea turtles🐢🐢🐢 that live on land for a shorter duration(like 4 years)";
let bay="I'm Baymax. I'm your personal AI Curator.My purpose is to guide you through this beautiful world of art. With access to vast collections and cutting-edge analysis tools, I'm here to assist you in uncovering the mystery behind each artwork.\n I was developed by the great Anton Wyck with his unhelpful friends😭, who I've been programmed not to name. ";
let mue ="The Louvre, or the Louvre Museum, is a national art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement and home to some of the most canonical works of Western art, including the Mona Lisa, Venus de Milo, and Winged Victory.";
let nat="INTERNATIONAL PHOTOGRAPHY AWARDS™  are annually awarded at Lucie Awards gala. The International Photography Awards™ conducts an annual competition for professional photographers globally, creating one of the most ambitious and comprehensive competitions in the photography world today.";
let love="Aww! Thank You! Wish I could say the same buddy!😍😍";
let hate="I'm sorry to hear it, wish I could help you more!😞😞😞 Can I help you with any other questions?";
let thank="You're welcome! If you need any more assistance, feel free to ask. Have a great day!";
let welcome="Thank you! It's nice to feel appreciated.If there's anything else you need, just let me know. Have a great day!";
let lvant="Aw, Thank you! I will give him your regards. He wishes the same to you";
let bye="Goodbye! Have a wonderful day! If you ever need assistance in the future, feel free to reach out";
let members="This project was created by a dedicated team led by Anton, the tech lead, along with his talented teammates Anitta, Alan and Anusha";


sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
