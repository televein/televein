const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
const audioPlayer = document.getElementById('audioPlayer');
const header = document.getElementById('header');

const chatbotimage = 'images/chatbot-img.jpg';
const userimage = 'images/user.png';

const ms = new SpeechSynthesisUtterance();

inputForm.addEventListener('submit', function(event) {

  event.preventDefault();
  let input = inputField.value;
  
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

let message = document.createElement('div');
message.classList.add('chatbot-message', 'user-message');

message.innerHTML = `
<div class="chat-inp">
<p class="chatbot-input"  sentTime="${currentTime}">
<span class="input-text">${input}</span>
</p>
<img src="${userimage}" class="input-image">
</div>`;

conversation.appendChild(message);
message.scrollIntoView({ behavior: 'smooth' });


  let responses;

  const date = new Date();
  let currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  let text = input.toLowerCase();
  let i=100;

function college(){

    setTimeout(() => {btn("Engineering College","ecollege")}, i*1);
    // setTimeout(() => {btn("Medical College","mcollege")},  i*2);
  }
  function ecollege(){
    setTimeout(() => {btn("V.S.B Engineering College","vsb")}, i*1);
  }
function vsb(){
  setTimeout(() => {display("V.S.B. Educational Trust was founded in the year 2000 by Mr. V.S. Balsamy, the founder and correspondent of the V.S.B. Engineering College, with an interest in promoting, managing and administrating educational institutions with high academic standards, discipline and to take up and help other allied activities in the field of education. Under the Trust, V.S.B. Engineering College,Karur was established in the year 2002 and V.S.B College of Engineering Technical Campus,Coimbatore in the year 2012.")},i*1)

}
 function _12(){
  setTimeout(() => {btn("Text Book","book")}, i*1);
  setTimeout(() => {btn("Study Materials","material")},  i*2);
  setTimeout(() => {btn("Previous year Question paper","question")}, i*3);
}
function book(){
  setTimeout(() => {btn("Biology Group Books","biogbook")},  i*1);
  setTimeout(() => {btn("Computer Science Group Books","csgbook")},  i*2);
}
function biogbook(){
  setTimeout(() => {btn("Tamil Book","tambbook")},   i*1);
  setTimeout(() => {btn("English Book","engbbook")},   i*2);
  setTimeout(() => {btn("Maths  Book","matbbook")},   i*3);
  setTimeout(() => {btn("Physics Book","phybbook")},  i*4); 
  setTimeout(() => {btn("Chemistry Books","chebbook")},   i*5);
  setTimeout(() => {btn("Biology Books","biobbook")},   i*6);

}
function csgbook(){
  setTimeout(() => {btn("Tamil Book","tamcbook")},   i*1);
  setTimeout(() => {btn("English Book","engcbook")},   i*2);
  setTimeout(() => {btn("Maths  Book","matcbook")},   i*3);
  setTimeout(() => {btn("Physics Book","phycbook")},  i*4); 
  setTimeout(() => {btn("Chemistry Books","checbook")},i*5);
  setTimeout(() => {btn("Computer Science Books","cscbook")},   i*6);

}
function tambbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Tamil Book")},i*2)
  setTimeout(() => {btn("Go back","biogbook",)},  i*3);
}
function engbbook(){
  setTimeout(() => {pdf("https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S")}, i*1);
  setTimeout(() => {display("12th English Book")},i*2)
  setTimeout(() => {btn("Go back","biogbook",)},  i*3);
}
function matbbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Mathematics Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Mathematics Volume 2 Book")},i*4)
  setTimeout(() => {btn("Go back","biogbook",)},  i*5);
}
function phybbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Physics Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Physics Volume 2 Book")},i*4)
  setTimeout(() => {btn("Go back","biogbook",)},  i*5);
}
function chebbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Chemistry Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Chemistry Volume 2 Book")},i*4)
  setTimeout(() => {btn("Go back","biogbook",)},  i*5);
}
function biobbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Botany Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Zoology Book")},i*4)
  setTimeout(() => {btn("Go back","biogbook",)},  i*5);
}

function tamcbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Tamil Book")},i*2)
  setTimeout(() => {btn("Go back","csgbook",)},  i*3);
}
function engcbook(){
  setTimeout(() => {pdf("https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S")}, i*1);
  setTimeout(() => {display("12th English Book")},i*2)
  setTimeout(() => {btn("Go back","csgbook",)},  i*3);
}
function cscbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1TpdFoVkkcFFEP15CrAPWa6XOftWWIaoC/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Computer Science Book")},i*2)
  setTimeout(() => {btn("Go back","csgbook",)},  i*3);
}
function matcbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Mathematics Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Mathematics Volume 2 Book")},i*4)
  setTimeout(() => {btn("Go back","csgbook",)},  i*5);
}
function phycbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Physics Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Physics Volume 2 Book")},i*4)
  setTimeout(() => {btn("Go back","csgbook",)},  i*5);
}
function checbook(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Chemistry Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Chemistry Volume 2 Book")},i*4)
  setTimeout(() => {btn("Go back","csgbook",)},  i*5);
}
function material(){
  setTimeout(() => {btn("Biology Group Study Materials","biogmaterial")},  i*1);
  setTimeout(() => {btn("Computer Science Group Study Materials","csgmaterial")},  i*2);
}
function biogmaterial(){
    setTimeout(() => {btn("English Study Material","engbmaterial")},   i*2);
    setTimeout(() => {btn("Tamil Study Material","tambmaterial")},   i*1);
    setTimeout(() => {btn("Maths  Study Material","matbmaterial")},   i*3);
    setTimeout(() => {btn("Physics Study Material","phybmaterial")},  i*4); 
    setTimeout(() => {btn("Chemistry Study Materials","chebmaterial")},   i*5);
    setTimeout(() => {btn("Biology Study Materials","biobmaterial")},   i*6);

}
function csgmaterial(){
  setTimeout(() => {btn("Tamil Study Material","tamcmaterial")},   i*1);
  setTimeout(() => {btn("English Study Material","engcmaterial")},   i*2);
  setTimeout(() => {btn("Maths  Study Material","matcmaterial")},   i*3);
  setTimeout(() => {btn("Physics Study Material","phycmaterial")},  i*4); 
  setTimeout(() => {btn("Chemistry Study Materials","checmaterial")},   i*5);
  setTimeout(() => {btn("Computer Science Study Materials","cscmaterial")},   i*6);

}
function tambmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1VkSdU73CN8QSHYmBbiATLWN-16mOBdDk/view?usp=drive_link")}, i*1)
  setTimeout(() => {display("12th public Tamil Guide ")},i*2)
  setTimeout(() => {btn("Go back","biogmaterial",)},  i*3);
}
function engbmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ujB_1huRMdmlsueNVSsujj_FHgLE0fni/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public English Guide ")},i*2)
  setTimeout(() => {btn("Go back","biogmaterial",)},  i*3);
}
function matbmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1jtAlQDQ7v30aTCZ10sWb1honQ1C2FukZ/view?usp=drivesdk")},i*1)
  setTimeout(() => {display("12th public Maths Guide ")},i*2)
  setTimeout(() => {btn("Go back","biogmaterial",)},  i*3);
}
function phybmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/19YjCgBE2bqD6bsDJvi1EV7HTvvPWJbJT/view?usp=drivesdk")},i*1)
  setTimeout(() => {display("12th public Physics Guide ")},i*2)
  setTimeout(() => {btn("Go back","biogmaterial",)},  i*3);
}
function chebmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1GfUQyte4p1BQNJ7jHkjqDkl8flHVJEAb/view?usp=drivesdk")},i*1)
  setTimeout(() => {display("12th public Chemistry Guide ")},i*2)
  setTimeout(() => {btn("Go back","biogmaterial",)},  i*3)
}
function biobmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1NsC7i1Ku69OCf1bROQXyQCbZV1dbLmBG/view?usp=drivesdk ")},i*1)
  setTimeout(() => {display("12th public Botony Guide ")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1Hutozc_51ye4UENYbseImJl3tJiPwZWn/view?usp=drivesdk")},i*3)
  setTimeout(() => {display("12th public Zoology Guide ")},i*4)
  setTimeout(() => {btn("Go back","biogmaterial",)},  i*5);
}

function tamcmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1VkSdU73CN8QSHYmBbiATLWN-16mOBdDk/view?usp=drive_link")}, i*1)
  setTimeout(() => {display("12th public Tamil Guide ")},i*2)
  setTimeout(() => {btn("Go back","csgmaterial",)},  i*3);
}
function engcmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ujB_1huRMdmlsueNVSsujj_FHgLE0fni/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public English Guide ")},i*2)
  setTimeout(() => {btn("Go back","csgmaterial",)},  i*3);
}
function cscmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/10X2McWZ40-eqZ7vdgt0VGIpQF4lNpu5d/view?usp=drivesdk  ")},i*1)
  setTimeout(() => {display("12th public Computer Science Guide ")},i*2)
  setTimeout(() => {btn("Go back","csgmaterial",)},  i*3);
}
function matcmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1jtAlQDQ7v30aTCZ10sWb1honQ1C2FukZ/view?usp=drivesdk")},i*1)
  setTimeout(() => {display("12th public Maths Guide ")},i*2)
  setTimeout(() => {btn("Go back","csgmaterial",)},  i*3);
}
function phycmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/19YjCgBE2bqD6bsDJvi1EV7HTvvPWJbJT/view?usp=drivesdk")},i*1)
  setTimeout(() => {display("12th public Physics Guide ")},i*2)
  setTimeout(() => {btn("Go back","csgmaterial",)},  i*3);
}
function checmaterial(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1GfUQyte4p1BQNJ7jHkjqDkl8flHVJEAb/view?usp=drivesdk")},i*1)
  setTimeout(() => {display("12th public Chemistry Guide ")},i*2)
  setTimeout(() => {btn("Go back","csgmaterial",)},  i*3);
}
function question(){
  setTimeout(() => {btn("2023 Public Question paper and Answer","question2023")},  i*1);
  setTimeout(() => {btn("2022 Public Question paper and Answer","question2022")},  i*2);
  // setTimeout(() => {btn("2021 Public Question paper and Answer","question2021")},  i*3);
}
function question2023(){
  setTimeout(() => {btn(" 2023 Biology Group Questions","biogquestion23")},  i*1);
  setTimeout(() => {btn(" 2023 Computer Science Group Questions","csgquestion23")},  i*2);
}
function biogquestion23(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public Tamil Question 2023")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing")}, i*3)
  setTimeout(() => {display("12th public Tamil Answer 2023")},i*4)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk")}, i*5)
  setTimeout(() => {display("12th public English Question 2023")},i*6)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing")},i*7)
  setTimeout(() => {display("12th public English Answer 2023")},i*8)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*9)
  setTimeout(() => {display("12th public Maths Question 2023")},i*10)
  setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*11)
  setTimeout(() => {display("12th public Maths Answer 2023")},i*12)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*13)
  setTimeout(() => {display("12th public Physics Question 2023")},i*14)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*15)
  setTimeout(() => {display("12th public Physics Answer 2023")},i*16)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*17)
  setTimeout(() => {display("12th public Chemistry Question 2023")},i*18)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*19)
  setTimeout(() => {display("12th public Chemistry Answer 2023")},i*20)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk")}, i*21)
  setTimeout(() => {display("12th public Botony Question 2023")},i*22)
  setTimeout(() => {pdf("https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing")},i*23)
  setTimeout(() => {display("12th public Botony Answer 2023")},i*24)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk")}, i*25)
  setTimeout(() => {display("12th public Zoology Question 2023")},i*26)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing")},i*27)
  setTimeout(() => {display("12th public Zoology Answer 2023")},i*28)
  setTimeout(() => {btn("Go back","question2023",)},  i*29);
}
function csgquestion23(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public Tamil Question 2023")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing")}, i*3)
  setTimeout(() => {display("12th public Tamil Answer 2023")},i*4)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk")}, i*5)
  setTimeout(() => {display("12th public English Question 2023")},i*6)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing")},i*7)
  setTimeout(() => {display("12th public English Answer 2023")},i*8)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*9)
  setTimeout(() => {display("12th public Maths Question 2023")},i*10)
  setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*11)
  setTimeout(() => {display("12th public Maths Answer 2023")},i*12)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*13)
  setTimeout(() => {display("12th public Physics Question 2023")},i*14)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*15)
  setTimeout(() => {display("12th public Physics Answer 2023")},i*16)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*17)
  setTimeout(() => {display("12th public Chemistry Question 2023")},i*18)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*19)
  setTimeout(() => {display("12th public Chemistry Answer 2023")},i*20)
  setTimeout(() => {pdf("https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk")}, i*21)
  setTimeout(() => {display("12th public Computer Science Question 2023")},i*22)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing")},i*23)
  setTimeout(() => {display("12th public Computer Science Answer 2023")},i*24)
  setTimeout(() => {btn("Go back","question2023",)},  i*25);
  }
function question2022(){
  setTimeout(() => {btn(" 2022 Biology Group Questions","biogquestion22")},  i*1);
  setTimeout(() => {btn(" 2022 Computer Science Group Questions","csgquestion22")},  i*2);
}
function biogquestion22(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1whpsvDSvsYYi0CCWczb8PFyrcHdVlJxX/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public Tamil Question 2022")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1zrsm3bIWcZnwAq_bKivYGzWBg1pVNOrd/view?usp=drivesdk")}, i*3)
  setTimeout(() => {display("12th public Tamil Answer 2022")},i*4)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1z4QEWx6hQjKD-f3eF6wTmW7BY0L2YJJp/view?usp=drivesdk")}, i*5)
  setTimeout(() => {display("12th public English Question 2022")},i*6)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1xo9l-SSPPNapylF3W4CLFgC2n9syLyX3/view?usp=drivesdk")},i*7)
  setTimeout(() => {display("12th public English Answer 2022")},i*8)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*9)
  setTimeout(() => {display("12th public Maths Question 2022")},i*10)
  setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*11)
  setTimeout(() => {display("12th public Maths Answer 2022")},i*12)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*13)
  setTimeout(() => {display("12th public Physics Question 2022")},i*14)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*15)
  setTimeout(() => {display("12th public Physics Answer 2022")},i*16)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*17)
  setTimeout(() => {display("12th public Chemistry Question 2022")},i*18)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*19)
  setTimeout(() => {display("12th public Chemistry Answer 2022")},i*20)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk")}, i*21)
  setTimeout(() => {display("12th public Botony Question 2022")},i*22)
  setTimeout(() => {pdf("https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing")},i*23)
  setTimeout(() => {display("12th public Botony Answer 2022")},i*24)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk")}, i*25)
  setTimeout(() => {display("12th public Zoology Question 2022")},i*26)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing")},i*27)
  setTimeout(() => {display("12th public Zoology Answer 2022")},i*28)
  setTimeout(() => {btn("Go back","question2022",)},  i*29);
}
function csgquestion22(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1whpsvDSvsYYi0CCWczb8PFyrcHdVlJxX/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public Tamil Question 2022")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1zrsm3bIWcZnwAq_bKivYGzWBg1pVNOrd/view?usp=drivesdk")}, i*3)
  setTimeout(() => {display("12th public Tamil Answer 2022")},i*4)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1z4QEWx6hQjKD-f3eF6wTmW7BY0L2YJJp/view?usp=drivesdk")}, i*5)
  setTimeout(() => {display("12th public English Question 2022")},i*6)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1xo9l-SSPPNapylF3W4CLFgC2n9syLyX3/view?usp=drivesdk")},i*7)
  setTimeout(() => {display("12th public English Answer 2022")},i*8)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*9)
  setTimeout(() => {display("12th public Maths Question 2022")},i*10)
  setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*11)
  setTimeout(() => {display("12th public Maths Answer 2022")},i*12)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*13)
  setTimeout(() => {display("12th public Physics Question 2022")},i*14)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*15)
  setTimeout(() => {display("12th public Physics Answer 2022")},i*16)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*17)
  setTimeout(() => {display("12th public Chemistry Question 2022")},i*18)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*19)
  setTimeout(() => {display("12th public Chemistry Answer 2022")},i*20)
  setTimeout(() => {pdf("https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk")}, i*21)
  setTimeout(() => {display("12th public Computer Science Question 2022")},i*22)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing")},i*23)
  setTimeout(() => {display("12th public Computer Science Answer 2022")},i*24)
  setTimeout(() => {btn("Go back","question2022",)},  i*25);
}
function question2021(){
  setTimeout(() => {btn(" 2021 Biology Group Questions","biogquestion21")},  i*1);
  setTimeout(() => {btn(" 2021 Computer Science Group Questions","csgquestion21")},  i*2);
}
function biogquestion21(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public Tamil Question 2021")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing")}, i*3)
  setTimeout(() => {display("12th public Tamil Answer 2021")},i*4)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk")}, i*5)
  setTimeout(() => {display("12th public English Question 2021")},i*6)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing")},i*7)
  setTimeout(() => {display("12th public English Answer 2021")},i*8)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*9)
  setTimeout(() => {display("12th public Maths Question 2021")},i*10)
  setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*11)
  setTimeout(() => {display("12th public Maths Answer 2021")},i*12)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*13)
  setTimeout(() => {display("12th public Physics Question 2021")},i*14)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*15)
  setTimeout(() => {display("12th public Physics Answer 2021")},i*16)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*17)
  setTimeout(() => {display("12th public Chemistry Question 2021")},i*18)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*19)
  setTimeout(() => {display("12th public Chemistry Answer 2021")},i*20)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk")}, i*21)
  setTimeout(() => {display("12th public Botony Question 2021")},i*22)
  setTimeout(() => {pdf("https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing")},i*23)
  setTimeout(() => {display("12th public Botony Answer 2021")},i*24)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk")}, i*25)
  setTimeout(() => {display("12th public Zoology Question 2021")},i*26)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing")},i*27)
  setTimeout(() => {display("12th public Zoology Answer 2021")},i*28)
  setTimeout(() => {btn("Go back","question2021",)},  i*29);
}
function csgquestion21(){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk")}, i*1)
  setTimeout(() => {display("12th public Tamil Question 2021")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing")}, i*3)
  setTimeout(() => {display("12th public Tamil Answer 2021")},i*4)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk")}, i*5)
  setTimeout(() => {display("12th public English Question 2021")},i*6)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing")},i*7)
  setTimeout(() => {display("12th public English Answer 2021")},i*8)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*9)
  setTimeout(() => {display("12th public Maths Question 2021")},i*10)
  setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*11)
  setTimeout(() => {display("12th public Maths Answer 2021")},i*12)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*13)
  setTimeout(() => {display("12th public Physics Question 2021")},i*14)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*15)
  setTimeout(() => {display("12th public Physics Answer 2021")},i*16)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*17)
  setTimeout(() => {display("12th public Chemistry Question 2021")},i*18)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*19)
  setTimeout(() => {display("12th public Chemistry Answer 2021")},i*20)
  setTimeout(() => {pdf("https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk")}, i*21)
  setTimeout(() => {display("12th public Computer Science Question 2021")},i*22)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing")},i*23)
  setTimeout(() => {display("12th public Computer Science Answer 2021")},i*24)
  setTimeout(() => {btn("Go back","question2021",)},  i*25);
}
function cexam(){
  setTimeout(() => {btn("NEET","neetexam")},i*1)
  setTimeout(() => {btn("JEE","jeeexam")},i*2)
}
function neetexam(){
  setTimeout(() => {btn("Application Date","aneetexam")},i*1)
  setTimeout(() => {btn("Syllabus","sneetexam")},i*2) 
}
function aneetexam(){
  setTimeout(() => {display("NEET 2024 is held on may 5")},i*1)
  setTimeout(() => {display("The Application submission starts on March 2024")},i*2)
  setTimeout(() => {display("The Application submission ends on April 2024")},i*3)
  a = "<a href='https://neet.nta.nic.in' >nta.in</a>"
  setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :")},i*4)
  setTimeout(() => {link(a)},i*5)
}
function sneetexam(){
  setTimeout(() => {display("The syllabus is divided into three sections: Physics - 45 Questions, Chemistry - 45 Questions, Biology - 90 Questions (45 of Botany + 45 of Zoology). The total number of questions to be asked in the exam is 200, out of which 180 questions need to be answered. Each correct answer will fetch 4 marks, while 1 mark will be deducted for each wrong answer")},i*1)
  setTimeout(() => {btn("Physics","psneetexam")},i*13)
  setTimeout(() => {btn("Chemistry","csneetexam")},i*14) 
  setTimeout(() => {btn("Biology","bsneetexam")},i*15) 
}
function psneetexam(){
  setTimeout(() => {display("NEET Physics Syllabus\n\n1.Physical world and measurement\n2.Kinematics\n3.Laws of Motion\n4.Work, Energy, and Power\n5.Motion of System of Particles and Rigid Body\n6.Gravitation\n7.Properties of Bulk Matter\n8.Thermodynamics\n9.Behaviour of Perfect Gas and Kinetic Theory\n10.Oscillations and Waves\n11.Electrostatics\n12.Current Electricity\n13.Magnetic Effects of Current and Magnetism\n14.Electromagnetic Induction and Alternating Currents\n15.Electromagnetic Waves\n16.Optics\n17.Dual Nature of Matter and Radiation\n18.Atoms and Nuclei\n19.Electronic Devices")},i*1)
  setTimeout(() =>{display("DISCLAIMER:The Syllabus may change Please visite official NTA website for updates")},i*2)
  a = "<a href='https://neet.nta.nic.in' >nta.in</a>"
  setTimeout(() => {link(a)},i*3)
}
function csneetexam(){
  setTimeout(() => {display("NEET Chemistry Syllabus:\n\n1.Some Basic Concepts of Chemistry\n2.Structure of Atom\n3.Classification of Elements and Periodicity in Properties\n4.Chemical Bonding and Molecular Structure\n5.States of Matter: Gases and Liquids\n6.Thermodynamics\n7.Equilibrium\n8.Redox Reactions\n9.Hydrogen\n10.s-Block Elements\n11.Some p-Block Elements\n12.Organic Chemistry - Some Basic Principles and Techniques\n13.Hydrocarbons\n14.Environmental Chemistry\n15.Solid State\n16.Solutions\n17.Electrochemistry\n18.Chemical Kinetics\n19.Surface Chemistry\n20.General Principles and Processes of Isolation of Elements\n21.p-Block Elements\n22.d and f Block Elements\n23.Coordination Compounds\n24.Haloalkanes and Haloarenes\n25.Alcohols, Phenols, and Ethers\n26.Aldehydes, Ketones and Carboxylic Acids\n27.Organic Compounds Containing Nitrogen\n28.Biomolecules\n29.Polymers\n30.Chemistry in Everyday Life")},i*1)
  setTimeout(() =>{display("DISCLAIMER:The Syllabus may change Please visite official NTA website for updates")},i*20)
  a = "<a href='https://neet.nta.nic.in' >nta.in</a>"
  setTimeout(() => {link(a)},i*21)
}
function bsneetexam(){
  setTimeout(() => {display("NEET Biology Syllabus:\n\n1.Diversity in Living World\n2.Structural Organisation in Animals and Plants\n3.Cell Structure and Function\n4.Plant Physiology\n5.Human Physiology\n6.Reproduction\n7.Genetics and Evolution\n8.Biology and Human Welfare\n9.Biotechnology and Its Applications\n10.Ecology and Environment")},i*1)
  setTimeout(() =>{display("DISCLAIMER:The Syllabus may change Please visite official NTA website for updates")},i*12)
  a = "<a href='https://neet.nta.nic.in' >nta.in</a>"
  setTimeout(() => {link(a)},i*13)
}
function jeeexam(){
  setTimeout(() => {btn("Application Date","ajeeexam")},i*1)
  setTimeout(() => {btn("Syllabus","sjeeexam")},i*2)
}
function ajeeexam(){
  setTimeout(() =>{display("session 1")},i*1)
  setTimeout(() => {display("Registration Starts on 2nd week of December 2023")},i*2)
  setTimeout(() => {display("Registration Ends on 1st week of January 2024")},i*3)
  setTimeout(() => {display("session 2")},i*4)
  setTimeout(() => {display("Registration Starts on 2nd week of February 2024")},i*5)
  setTimeout(() => {display("Registration Ends on 2nd week of March 2024")},i*6)
  a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
  setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :")},i*7)
  setTimeout(() => {link(a)},i*8)
}
function sjeeexam(){
  setTimeout(() => {display("The syllabus is divided into two papers: Paper 1 (B.E./B.Tech.) and Paper 2 (B.Arch./B.Planning). The total number of questions to be asked in Paper 1 is 90, out of which 75 questions need to be answered. Each correct answer will fetch 4 marks, while 1 mark will be deducted for each wrong answer")},i*1)
  setTimeout(() => {btn("Physics","psjeeexam")}, i*10);
  setTimeout(() => {btn("Chemistry","csjeeexam")}, i*11);
  setTimeout(() => {btn("Maths","msjeeexam")}, i*12);
}
function psjeeexam(){
  setTimeout(() => {display("JEE Physics Syllabus:\n\n1.Physics and Measurement\n2.Kinematics\n3.Laws of Motion\n4.Work, Energy, and Power\n5.Rotational Motion\n6.Gravitation\n7.Properties of Solids and Liquids\n8.Thermodynamics\n8.Kinetic Theory of Gases\n9.Oscillations and Waves\n10.Electrostatics\n11.Current Electricity\n12.Magnetic Effects of Current and Magnetism\n13.Electromagnetic Induction and Alternating Currents\n14.Electromagnetic Waves\n15.Optics\n16.Dual Nature of Matter and Radiation\n17.Atoms and Nuclei\n18.Electronic Devices\n19.Communication Systems")},i*1)
  a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
  setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :")},i*22)
  setTimeout(() => {link(a)},i*23)
}
function csjeeexam(){
  setTimeout(() => {display("JEE Chemistry Syllabus:\n\n1.Some Basic Concepts in Chemistry\n2.States of Matter\n3.Atomic Structure\n4.Chemical Bonding and Molecular Structure\n5.Chemical Thermodynamics\n6.Solutions\n7.Equilibrium\n8.Redox Reactions and Electrochemistry\n9.Chemical Kinetics\n10.Surface Chemistry\n11.Classification of Elements and Periodicity in Properties\n12.General Principles and Processes of Isolation of Metals\n13.Hydrogen\n14.s-Block Elements\n15.p-Block Elements\n16.d- and f- Block Elements\n17.Co-ordination Compounds\n18.Environmental Chemistry\n19.Purification and Characterisation of Organic Compounds\n21.Some Basic Principles of Organic Chemistry\n22.Hydrocarbons\n23.Organic Compounds Containing Halogens\n24.Organic Compounds Containing Oxygen\n25.Organic Compounds Containing Nitrogen\n26.Polymers\n27.Biomolecules\n28.Chemistry in Everyday Life")},i*1)
  a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
  setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :")},i*40)
  setTimeout(() => {link(a)},i*41)
}
function msjeeexam(){
  setTimeout(() => {display("JEE Maths Syllabus:\n\n1.Sets, Relations, and Functions\n2.Complex Numbers and Quadratic Equations\n3.Matrices and Determinants\n4.Permutations and Combinations\n5.Mathematical Induction\n6.Binomial Theorem and its Simple Applications\n7.Sequences and Series\n8.Limit, Continuity, and Differentiability\n9.Integral Calculus\n10.Differential Equations\n11.Co-ordinate Geometry\n12.Three Dimensional Geometry\n13.Vector Algebra\n14.Statistics and Probability\n15.Trigonometry\n16.Mathematical Reasoning")},i*1)
  a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
  setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :")},i*20)
  setTimeout(() => {link(a)},i*21)
}



if(text.includes("hi")|text.includes("hello")|text.includes("hai")|text.includes("hey"))
{
  var name=localStorage.getItem("storageName");
  setTimeout(() => {display("Hello "+name.toUpperCase()+", How can I assist you today")}, i*1);
  setTimeout(() => {btn("12 content","_12")}, i*2);
  setTimeout(() => {btn("Colleges","college")},  i*3);
  setTimeout(() => {btn("Competative Exams","cexam")}, i*4);
}
// //  wait(5000).then(() => { 
  if(text.includes("")){
    speechSynthesis.cancel();
if(text.includes("hi")|text.includes("hello")|text.includes("hai")|text.includes("hey"))
{
  // setTimeout(() => {btn("Hello! How can I assist you today?"),h,i()}, i*1);
}
 else if(text.includes("televein")|text.includes("tele vein")){
  setTimeout(() => {display("Tele Vein is a technology oriented Company.")}, i*1);
  setTimeout(() => {display("For more about televein.I provide thier link below.")}, i*3);
  // a= "<a href=''>Tele Vein</a>";
  b="<a href='https://televein.netlify.app'id='li'target='_blank' >Televein</a>";
  // b.getElementById("li");
// b.addEventListener("click", hi());
//  a='<button onclick="hi();">click here </button>'
  setTimeout(() => {link(b)}, i*4);
}
else if(text.includes("your")&text.includes("name")){
  setTimeout(() => {display("My name is Tele Vein")}, i*1);
}
else if(text.includes("img")|text.includes("name")){
  setTimeout(() => {image("/images/qrcode.png")}, i*1);
}
else if(text.includes("team")|(text.includes("done by"))&(text.includes("televein")|text.includes("tele vein")|text.includes("chatbot")|text.includes("chat bot"))){
  setTimeout(() => {image("images/bharathan.jpg")}, i*1);
  setTimeout(() => {image("images/dinesh.jpg")}, i*3);
  setTimeout(() => {image("images/gokul.jpg")}, i*5);
  setTimeout(() => {image("images/bharath.jpg")}, i*7);
  setTimeout(() => {display("Bharathan R")}, i*2);
  setTimeout(() => {display("Dinesh S")}, i*4);
  setTimeout(() => {display("Gokula Kannan V")}, i*6);
  setTimeout(() => {display("BharathKumar D")}, i*8);
}
else if(text.includes("pdf")){
  setTimeout(() => {pdf("/chatbot/pdf/TELE VEIN licence.pdf")}, i*1);
  setTimeout(() => {display("Tele Vein licence")}, i*3);
}

else if(text.includes("doubt")|text.includes("q/a")|text.includes("need material")){
  // setTimeout(() => {display("Tele Vein is a technology oriented Company.")}, i*1);
  setTimeout(() => {display("For more update click the provided link below.")}, i*1);
  a = "<a href='mail/index.html' target='_blank'>Mail</a>";
  setTimeout(() => {link(a)}, i*3);
}

else if((text.includes("12")|text.includes("Twelfth"))&text.includes("group") ){
  setTimeout(() => {display("Computer Science")}, i*1); 
  setTimeout(() => {display("Biology")}, i*2); 
  setTimeout(() => {display("Arts")}, i*3); 
}
else if(text.includes("jee")){
  if(text.includes("jee")&(text.includes("stands")|text.includes("expand")|text.includes("full form"))){
    setTimeout(() => {display("JEE stands for Joint Entrance Examination (JEE)")},i*1)
  }
  else if(text.includes("jee")&(text.includes("apply")|text.includes("application")|text.includes("register"))&(text.includes("when")|text.includes("date"))){
    setTimeout(() =>{display("session 1")},i*1)
    setTimeout(() => {display("Registration Starts on 2nd week of December 2023")},i*2)
    setTimeout(() => {display("Registration Ends on 1st week of January 2024")},i*3)
    setTimeout(() => {display("session 2")},i*4)
    setTimeout(() => {display("Registration Starts on 2nd week of February 2024")},i*5)
    setTimeout(() => {display("Registration Ends on 2nd week of March 2024")},i*6)
    a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
    setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :")},i*7)
    setTimeout(() => {link(a)},i*8)
  }
  else if(text.includes("jee")&(text.includes("when")|text.includes("date"))|text.includes("exam")){
    setTimeout(() => {display("Session 1 - January 24 to February 1, 2024 \nSession 2 - April 1 to April 15, 2024")},i*1)
    a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
    setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :"+a)},i*2)
  }
  else if(text.includes("jee")&(text.includes("fee")|text.includes("cost"))){
    setTimeout(() =>{display("The Appilcation fee for JEE exam is divided into different category")},i*1)
    setTimeout(() => {display("For Indian Nationals\n\n1.Female Candidates (all categories) -₹ 1450.\n2.SC, ST, and PwD Candidates -₹ 1450.\n3.All Other Candidates -₹ 2900.")},i*2)
    setTimeout(() => {display("For OCI/PIO card holders\n\n1.Female Candidates (GEN and GEN-PwD)	-₹ 1450.\n2.OPEN (GEN-PwD) -₹ 1450.\n3.OPEN (GEN) -₹ 2900.")},i*3)
    setTimeout(() => {display("For Foreign Nationals\n\n1.Candidates Residing in SAARC Countries -$90.\n2.Candidates Residing in Non-SAARC Countries -$180")},i*4)
    a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
    setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :"+a)},i*5)
  }
  else if(text.includes("jee")&(text.includes("conduct")|text.includes("organize"))){
    setTimeout(() => {display("JEE is conducted by National Testing Agency(NTA)")},i*1)
    a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
    setTimeout(() => {display("Visit their Official web site for further queries :"+a)},i*2)
  }
  else if(text.includes("jee")&text.includes("subject")){
    setTimeout(() => {display("The subjects that are required for JEE exam")},i*1)
    setTimeout(() => {display("Physics")},i*2)
    setTimeout(() => {display("Chemistry")},i*3)
    setTimeout(() => {display("Mathematics")},i*4)
    setTimeout(() => {display("Language")},i*5)
  }
  else if(text.includes("jee")&(text.includes("application")|text.includes("apply")|text.includes("registration"))){
    setTimeout(() => {display("Candidates will be able to access the jeemain.nta.nic.in 2024 application form in online mode. Below are the steps to fill the application form of JEE Main.\n\n1.Visit the JEE Main official website - jeemain.nta.nic.in .\n2.Complete registration using details name, mobile number, and email address.\n3.Fill detailed in registration form with personal and educational details.\n4.Uploading scanned images of photograph and signature.\n5.Payment of JEE Main application fees.\n6.Download the confirmation page for future reference.")},i*1)
  }
  else if(text.includes("jee")){
    setTimeout(() => {display("JEE stands for Joint Entrance Exam and it is a national entrance exam held for candidates seeking to pursue an engineering course from various colleges across the country.")},i*1)
  }
}
else if(text.includes("neet")){
  if(text.includes("neet")&(text.includes("stands")|text.includes("expand")|text.includes("full form"))){
    setTimeout(() => {display("NEET stands for National Eligibility cum Entrance Test(NEET)")},i*1)
  }
  else if(text.includes("neet")&text.includes("subject")){
    setTimeout(() => {display("The subjects that are required for NEET exam")},i*1)
    setTimeout(() => {display("Physics")},i*2)
    setTimeout(() => {display("Chemistry")},i*3)
    setTimeout(() => {display("Biology/BioTechnology")},i*4)
  }
  else if(text.includes("neet")&(text.includes("course")|text.includes("degree"))){
    setTimeout(() => {display("MBBS")},i*1)
    setTimeout(() => {display("BDS")},i*2)
    setTimeout(() => {display("BAMS")},i*3)
    setTimeout(() => {display("BUMS")},i*4)
    setTimeout(() => {display("BHMS")},i*5)
    setTimeout(() => {display("BSMS")},i*6)
    setTimeout(() => {display("BVSc")},i*7)
    a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
    setTimeout(() => {display("Visit their Official web site for further queries :"+a)},i*8)
  }
  else if(text.includes("neet")&(text.includes("conduct")|text.includes("organize"))){
    setTimeout(() => {display("NEET is conducted by National Testing Agency(NTA)")},i*1)
    a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
    setTimeout(() => {display("Visit their Official web site for further queries :"+a)},i*2)
  }
  else if(text.includes("neet")&(text.includes("when")|text.includes("date"))|text.includes("exam")){
    setTimeout(() => {display("The National Testing Agency (NTA) is going to conduct the NEET-UG examination on May 5, 2024, all over India.\nNOTE :Exam date may change visit the official web site of NTA for further information.\nThe link for the web site is given below->")},i*1)
    a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
    setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :")},i*2)
    setTimeout(() => {link(a)},i*3)
  }
  else if(text.includes("neet")&(text.includes("apply")|text.includes("registration")|text.includes("application"))&(text.includes("when")|text.includes("date"))){
    setTimeout(() => {display("NEET 2024 is held on may 5")},i*1)
    setTimeout(() => {display("The Application submission starts on March 2024")},i*2)
    setTimeout(() => {display("The Application submission ends on April 2024")})
    a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
    setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :"+a)},i*2)
  }
  else if(text.includes("neet")&(text.includes("fee")|text.includes("cost"))){
    setTimeout(() => {display("The application fee of NEET exam is divided into three category\n\n1.General category candidates will be charged an examination fee of Rs. 1700/-\n2.General-EWS and OBC-NCL candidates are required to pay Rs. 1600/-.\n3.For SC, ST, PH, and Third gender candidates, the examination fee is only Rs. 1000/-.")},i*1)
    // a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
    // setTimeout(() => {display("DISCLAIMER:There may be change will occur , so please visit the official website for updates :"+a)},i*2)
  }
  else if(text.includes("neet")&(text.includes("duration")|text.includes("time"))){
    setTimeout(() => {display("The Exam duration of NEET is '3 Hours 20 Minutes' in offline mode")},i*1)
  }
  else if(text.includes("neet")){
    setTimeout(() => {display("NEET (UG) is one of the toughest medical entrance examinations conducted in India. National Eligibility cum Entrance Test (NEET)is conducted by the National Testing Agency (NTA) for admission to undergraduate (MBBS/BDS/Ayush Courses) every year. As per Government of India, it is a mandated requirement to qualify NEET Exam to study medical courses in India and abroad. The single national level undergraduate medical entrance exam, NEET held every year for admission to 542 medical, 313 dental, 914 AYUSH, and 47 BVSc and AH colleges in India.")},i*1)
  }
  else{
    setTimeout(() => {display("If,you want more information about NEET you cantact me.")}, i*1);
    setTimeout(() => {display("I provide the link below. ")}, i*3);
    a ="a href='/mail/index.html' target='_blank'>Contact</a>";
    setTimeout(() => {link(a)}, i*6);
  }
}
else if((text.includes("is")|text.includes("are"))&text.includes("you")&text.includes("human")){
  setTimeout(() => {display("NO,I'm just a programmed chatbot")},i*1)
}
else if(text.includes("who")&text.includes("made")&text.includes("you")){
  setTimeout(() => {display("I was made by a software and service providing company called 'Tele Vein'")},i*1)
}
else if(text.includes("language")&(text.includes("speak")|text.includes("spoke")|text.includes("spoken"))&text.includes("you")){
  setTimeout(() => {display("I can't speak any languages.But,I can write programmed English words.")},i*1)
}
else if(text.includes("language")&(text.includes("write")|text.includes("wrote")|text.includes("written"))&text.includes("you")){
  setTimeout(() => {display("I can write programmed English words.")},i*1)
}
else if(text.includes("course")|text.includes("degree")|text.includes("courses")|text.includes("degrees")){
  setTimeout(() => {display("Information Technology")}, i*1);
  setTimeout(() => {display("Computer Science Engineering")}, i*2);
  setTimeout(() => {display("Civil Engineering")}, i*3);
  setTimeout(() => {display("Mechanical Engineering")}, i*4);
  setTimeout(() => {display("Artificial Intelligence and Data Science")}, i*5);
  setTimeout(() => {display("Artificial Intelligence and Machine Learning")}, i*6);
  setTimeout(() => {display("Electrical and Electronical Engineering")}, i*7);
  setTimeout(() => {display("Electronics and Communication Engineering")}, i*8);
  setTimeout(() => {display("Bio-Medical Engineering")}, i*9);
  setTimeout(() => {display("Bio-Technology")}, i*10);
  setTimeout(() => {display("Computer Science and Business Systems")}, i*11);
  setTimeout(() => {display("Chemical Engineering")}, i*12);
  setTimeout(() => {display("Computer and Communication Engineering")}, i*13);
  setTimeout(() => {display("Science and Humanities")}, i*14);
}
else if(text.includes("why are you here")|text.includes("what can you do")|text.includes("how did you use for me")|text.includes("use of you")|text.includes("use of televvein chatbot")){
  let t=Math.round(Math.random())
  if(t==0){
    setTimeout(() => {display("I'm here to assist you with any questions or concerns you may have. 📩")},i*1);
  }
  else{
    setTimeout(() => {display("I'm here to assist you with any questions or problems you may have. How can I help you today? 💡")},i*1);
  }
}
else if(text.includes("it")|text.includes("information techonolgy")){

  if((text.includes("scope")|text.includes("value"))){
    setTimeout(() => {display("Software development")},i*1)
  setTimeout(() => {display("Networking")},i*2)
  setTimeout(() => {display("DataBase Management")},i*3)
  setTimeout(() => {display("CyberSecurity")},i*4)
  setTimeout(() => {display("Cloud Computing")},i*5)
  setTimeout(() => {display("IT services and Support")},i*6)
  setTimeout(() => {display("Artificial Intelligence")},i*7)
  setTimeout(() => {display("Virtualization")},i*8)
  setTimeout(() => {display("Mobile Computing")},i*9)
  setTimeout(() => {display("E-Commerce")},i*10)
  setTimeout(() => {display("Digital Education")},i*11)
  setTimeout(() => {display("Heathcare IT")},i*12)
  setTimeout(() => {display("Research and Development")},i*13)
  setTimeout(() => {display("Telecommunication")},i*14)
}
else{
  setTimeout(() => {display("Information technology (IT) refers to the use of computers, software, hardware, networks, and other technologies to store, process, transmit, and manage data and information. IT plays a crucial role in modern society and businesses, enabling them to streamline operations, improve efficiency, and enhance communication and decision-making.")},i*1)
}}
else if(text.includes("cse")|text.includes("computer science engineering")){

  if((text.includes("scope")|text.includes("value"))){
  setTimeout(() => {display("Software Development")},i*1)
  setTimeout(() => {display("Data Science and Big Data")},i*2)
  setTimeout(() => {display("Artificial Intelligence (AI) and Machine Learning (ML)")},i*3)
  setTimeout(() => {display("Cybersecurity")},i*4)
  setTimeout(() => {display("Cloud Computing")},i*5)
  setTimeout(() => {display("Mobile App Development")},i*5)
  setTimeout(() => {display("Web Development")},i*6)
  setTimeout(() => {display("Database Management")},i*7)
  setTimeout(() => {display("Computer Hardware")},i*8)
  setTimeout(() => {display("Gaming Industry")},i*9)
  setTimeout(() => {display("Robotics and Automation")},i*10)
  setTimeout(() => {display("Blockchain Technology")},i*11)
  setTimeout(() => {display("Academia and Research")},i*12)
  setTimeout(() => {display("Startups and Entrepreneurship")},i*13)
  setTimeout(() => {display("Consulting")},i*14)
}
else{
  setTimeout(() => {display("Computer Science, is a branch of engineering that focuses on the design, development, and application of computer systems and software. It encompasses a wide range of topics related to computing and technology, including programming, algorithms, data structures, computer hardware, networking, databases, artificial intelligence, machine learning, and more.")},i*1)
}}
else if(text.includes("eee")|text.includes("electrical and electronic engineering")){

  if((text.includes("scope")|text.includes("value"))){
  setTimeout(() => {display("Power Generation and Distribution")},i*1)
  setTimeout(() => {display("Renewable Energy")},i*2)
  setTimeout(() => {display("Electrical Machines and Motors")},i*3)
  setTimeout(() => {display("Electronics and Circuit Design")},i*4)
  setTimeout(() => {display("Control Systems")},i*5)
  setTimeout(() => {display("Telecommunications")},i*6)
  setTimeout(() => {display("Automation and Robotics")},i*7)
  setTimeout(() => {display("Embedded Systems")},i*8)
  setTimeout(() => {display("Power Electronics")},i*9)
  setTimeout(() => {display("Research and Development")},i*10)
  setTimeout(() => {display("Consulting and Project Management")},i*11)
  setTimeout(() => {display("Aerospace and Defense")},i*12)
  setTimeout(() => {display("Healthcare")},i*13)
  setTimeout(() => {display("Academia and Education")},i*14)
}
else{
  setTimeout(() => {display("EEE stands for Electrical and Electronic Engineering. It is a branch of engineering that focuses on the study of electrical systems, electronics, and electromagnetism. Electrical and Electronic Engineers work with various electrical and electronic devices, systems, and technologies.")},i*1)
}}
else if(input.includes("civil")|text.includes("civil engineering")){
  if((text.includes("scope")|text.includes("value"))){
  setTimeout(() => {display("Structural Engineering")},i*1)
  setTimeout(() => {display("Geotechnical Engineering")},i*2)
  setTimeout(() => {display("Transportation Engineering")},i*3)
  setTimeout(() => {display("Environmental Engineering")},i*4)
  setTimeout(() => {display("Water Resources Engineering")},i*5)
  setTimeout(() => {display("Construction Management")},i*6)
  setTimeout(() => {display("Urban and Regional Planning")},i*7)
  setTimeout(() => {display("Coastal and Ocean Engineering")},i*8)
  setTimeout(() => {display("Materials Engineering")},i*9)
  setTimeout(() => {display("Infrastructure Rehabilitation")},i*10)
}
else{
  setTimeout(() => {display("Civil Engineering is a branch of engineering that deals with the design, construction, maintenance, and infrastructure development of various physical structures and systems. Civil engineers play a crucial role in shaping the world's physical environment, from bridges and buildings to transportation systems and water supply networks.")},i*1)
}}
else if(input.includes("chemical Engineering")|input.includes("chemical")){
  if((text.includes("scope")|text.includes("value"))){
  setTimeout(() => {display("Petroleum and Petrochemical Engineering")},i*1)
  setTimeout(() => {display("Pharmaceutical Engineering")},i*2)
  setTimeout(() => {display("Bioprocess Engineering")},i*3)
  setTimeout(() => {display("Environmental Engineering")},i*4)
  setTimeout(() => {display("Materials Engineering")},i*5)
}
else{

  setTimeout(() => {display("Chemical engineering is a branch of engineering that combines principles of chemistry, physics, mathematics, biology, and economics to efficiently use, produce, design, transport, and transform energy and materials. Chemical engineers work in various industries to design and optimize processes for manufacturing chemicals, materials, pharmaceuticals, and a wide range of products")},i*1)
}}
else if(input.includes("ece")|text.includes("electrical and communication engineering")){
  if((text.includes("scope")|text.includes("value"))){
    setTimeout(() => {display("Integrated Circuit Design and Microelectronics")},i*1)
  setTimeout(() => {display("Communications and Networking")},i*2)
  setTimeout(() => {display("Embedded Systems and IoT")},i*3)
  setTimeout(() => {display("Signal Processing and Image/Video Processing")},i*4)
  setTimeout(() => {display("Control Systems and Automation")},i*5)
}
else
{
  setTimeout(() => {display("ECE can stand for different things depending on the context. In the context of education and engineering, ECE commonly refers to 'Electrical and Computer Engineering.' This is a branch of engineering that combines aspects of electrical engineering and computer science.")},i*1)
}}
else if(text.includes("ai")|text.includes("artificial intelligence")){
if((text.includes("scope")|text.includes("value"))){
  setTimeout(() => {display("Automation and Robotics")},i*1)
  setTimeout(() => {display("Machine Learning and Predictive Analytics")},i*2)
  setTimeout(() => {display("Natural Language Processing (NLP)")},i*4)
  setTimeout(() => {display("Computer Vision")},i*6)
  setTimeout(() => {display("Healthcare")},i*8)
  setTimeout(() => {display("Finance")},i*10)
  setTimeout(() => {display("Autonomous Vehicles")},i*12)
  setTimeout(() => {display("Entertainment")},i*14)
  setTimeout(() => {display("E-commerce")},i*16)
  setTimeout(() => {display("Cybersecurity")},i*18)
  setTimeout(() => {display("Education")},i*20)
  setTimeout(() => {display("Environmental Monitoring")},i*22)
  setTimeout(() => {display("Smart Cities")},i*24)
}
else {
  setTimeout(() => {display("AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think, learn, and problem-solve like a human. It encompasses a wide range of technologies and techniques that enable computers and machines to perform tasks that typically require human intelligence. These tasks include understanding natural language, recognizing patterns, making decisions, and adapting to new information.")},i*1)
}
}
else if(text.includes("book"))
{
if(text.includes("12")&text.includes("tamil")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Tamil Book")},i*2)
}
else if(text.includes("12")&text.includes("english")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S")}, i*1);
  setTimeout(() => {display("12th English Book")},i*2)
}
else if((text.includes("12")&text.includes("physics 1")&text.includes("book"))|(text.includes("12")&text.includes("physics1")&text.includes("book"))){
  setTimeout(() => {pdf("https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Physics Volume 1 Book")},i*2)
}
else if(((text.includes("12")&text.includes("physics 2")&text.includes("book")))|(text.includes("12")&text.includes("physics2")&text.includes("2")&text.includes("book"))){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Physics Volume 2 Book")},i*2)
}
else if(text.includes("12")&text.includes("physics")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Physics Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Physics Volume 2 Book")},i*4)
}
else if((text.includes("12")&text.includes("chemistry 1")&text.includes("book"))|(text.includes("12")&text.includes("chemistry1")&text.includes("book"))){
  setTimeout(() => {pdf("https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Chemistry Volume 1 Book")},i*2)
}
else if(((text.includes("12")&text.includes("chemistry 2")&text.includes("book")))|(text.includes("12")&text.includes("chemistry2")&text.includes("2")&text.includes("book"))){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Chemistry Volume 2 Book")},i*2)
}
else if(text.includes("12")&text.includes("chemistry")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Chemistry Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Chemistry Volume 2 Book")},i*4)
}
else if((text.includes("12")&(text.includes("mathematics 1")|text.includes("maths 1")||text.includes("mat 1"))&text.includes("book"))|(text.includes("12")&(text.includes("mathematics1")|text.includes("maths1")||text.includes("mat1"))&text.includes("book"))){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Mathematics Volume 1 Book")},i*2)
}
else if((text.includes("12")&(text.includes("mathematics 2")|text.includes("maths 2")||text.includes("mat 2"))&text.includes("book"))|(text.includes("12")&(text.includes("mathematics2")|text.includes("maths2")||text.includes("mat2"))&text.includes("book"))){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Mathematics Volume 2 Book")},i*2)
}
else if(text.includes("12")&text.includes("mat")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Mathematics Volume 1 Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Mathematics Volume 2 Book")},i*4)
}
else if((text.includes("12")&text.includes("cs")&text.includes("book"))|(text.includes("12")&text.includes("computer")&text.includes("science")&text.includes("book"))){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1TpdFoVkkcFFEP15CrAPWa6XOftWWIaoC/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Computer Science Book")},i*2)
}
// else if(text.includes("12")&text.includes("physics")&text.includes("book")){
//   setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*1);
//   setTimeout(() => {display("12th Physics Volume 2 Book")},i*2)
// }
else if(text.includes("12")&text.includes("botany")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Botany Book")},i*2)
}
else if(text.includes("12")&text.includes("zoology")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Zoology Book")},i*2)
}
else if(text.includes("12")&text.includes("biology")&text.includes("book")){
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Botany Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing")}, i*3);
  setTimeout(() => {display("12th Zoology Book")},i*4)
}
else{
  setTimeout(() => {pdf("https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing")}, i*1);
  setTimeout(() => {display("12th Tamil Book")},i*2)
  setTimeout(() => {pdf("https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S")}, i*3);
  setTimeout(() => {display("12th English Book")},i*4)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing")}, i*5);
  setTimeout(() => {display("12th Mathematics Volume 1 Book")},i*6)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing")}, i*7);
  setTimeout(() => {display("12th Mathematics Volume 2 Book")},i*8)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing")}, i*9);
  setTimeout(() => {display("12th Chemistry Volume 1 Book")},i*10)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*11);
  setTimeout(() => {display("12th Chemistry Volume 2 Book")},i*12)
  setTimeout(() => {pdf("https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing")}, i*13);
  setTimeout(() => {display("12th Physics Volume 1 Book")},i*14)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing")}, i*15);
  setTimeout(() => {display("12th Physics Volume 2 Book")},i*16)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1TpdFoVkkcFFEP15CrAPWa6XOftWWIaoC/view?usp=sharing")}, i*17);
  setTimeout(() => {display("12th Computer Science Book")},i*18)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing")}, i*19);
  setTimeout(() => {display("12th Botany Book")},i*20)
  setTimeout(() => {pdf("https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing")}, i*21);
  setTimeout(() => {display("12th Zoology Book")},i*22)
}
}
else if(text.includes("12")&(text.includes("question")|text.includes("exam")|text.includes("answer"))){
  if(text.includes("tamil")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Tamil Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing")}, i*3)
    setTimeout(() => {display("12th public Tamil Answer 2023")},i*4)
  }
  else if(text.includes("english")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public English Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public English Answer 2023")},i*4)
  }
  else if(text.includes("maths")|text.includes("mathematics")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Maths Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public Maths Answer 2023")},i*4)
  }
  else if(text.includes("physics")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Physics Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public Physics Answer 2023")},i*4)
  }
  else if(text.includes("chemistry")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Chemistry Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public Chemistry Answer 2023")},i*4)
  }
  else if(text.includes("biology")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Botony Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public Botony Answer 2023")},i*4)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk")}, i*5)
    setTimeout(() => {display("12th public Zoology Question 2023")},i*6)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing")},i*7)
    setTimeout(() => {display("12th public Zoology Answer 2023")},i*8)
  }
  else if(text.includes("botony")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Botony Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public Botony Answer 2023")},i*4)
  }
  else if(text.includes("zoology")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Zoology Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public Zoology Answer 2023")},i*4)
  }
  else if(text.includes("cs")|text.includes("computer science")){
    setTimeout(() => {pdf("https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Computer Science Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing")},i*3)
    setTimeout(() => {display("12th public Computer Science Answer 2023")},i*4)
  }
  else{
    setTimeout(() => {pdf("https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk")}, i*1)
    setTimeout(() => {display("12th public Tamil Question 2023")},i*2)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing")}, i*3)
    setTimeout(() => {display("12th public Tamil Answer 2023")},i*4)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk")}, i*5)
    setTimeout(() => {display("12th public English Question 2023")},i*6)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing")},i*7)
    setTimeout(() => {display("12th public English Answer 2023")},i*8)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk")}, i*9)
    setTimeout(() => {display("12th public Maths Question 2023")},i*10)
    setTimeout(() => {pdf("https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing")},i*11)
    setTimeout(() => {display("12th public Maths Answer 2023")},i*12)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk")}, i*13)
    setTimeout(() => {display("12th public Physics Question 2023")},i*14)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing")},i*15)
    setTimeout(() => {display("12th public Physics Answer 2023")},i*16)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk")}, i*17)
    setTimeout(() => {display("12th public Chemistry Question 2023")},i*18)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing")},i*19)
    setTimeout(() => {display("12th public Chemistry Answer 2023")},i*20)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk")}, i*21)
    setTimeout(() => {display("12th public Botony Question 2023")},i*22)
    setTimeout(() => {pdf("https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing")},i*23)
    setTimeout(() => {display("12th public Botony Answer 2023")},i*24)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk")}, i*25)
    setTimeout(() => {display("12th public Zoology Question 2023")},i*26)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing")},i*27)
    setTimeout(() => {display("12th public Zoology Answer 2023")},i*28)
    setTimeout(() => {pdf("https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk")}, i*29)
    setTimeout(() => {display("12th public Computer Science Question 2023")},i*30)
    setTimeout(() => {pdf("https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing")},i*31)
    setTimeout(() => {display("12th public Computer Science Answer 2023")},i*32)
  }
}
else  if((text.includes("12")|text.includes("public"))&((text.includes("prepare")|text.includes("preparation"))|((text.includes("good")|text.includes("more"))&text.includes("marks")))){
  if(text.includes("tamil")){
      setTimeout(() =>  {display("படிக்க திட்டம் உருவாக்குக:\n1.அனைத்து பாடங்களும் மற்றும் பாடகங்களை சேர்ந்த விரிவான படிக்க திட்டம் உருவாக்குக.\n2.நீங்கள் கடினமாகக் கணிக்கும் பாடங்களுக்கு அதிக நேரம் ஒதுக்கவும்.\n3.சேர்ந்த நேரங்களில் முகநூல் சூழ்நிலைகளை தடுக்க உத்தமமான நேர ஒதுக்கவும்.")},i*1)
      setTimeout(() =>  { display("பாடங்களை முன்னின்னும் பதிவிடுக:\n1.தேர்வுகளில் அதிக புரியும் பாடங்களை அதிக பதிவிடுக.\n2.நீங்கள் விசித்திரமாக கணிக்கும் பாடங்களுக்கு அதிக படிக்க நேரம் அளிக்கவும்.")},i*2)
      setTimeout(() =>  {display("குறிப்பாக்குகள் உள்ளன:\n1.ஒவ்வொரு படிக்க அமைக்கும் விரிவான, அதிசாரிய குறிப்புகளை அமைக்கும். உ஦ாகமாக, ஒரு குறிப்பு அல்லது பழைய வருடங்களின் கேள்விகளை பரிசோதிக்க.")},i*3)
      setTimeout(() =>  {display("பாடப் படிப்பை மொழியாக்குக:\n1.புரியும் அவதாரம் அமைத்து அதை சுட்டிக்காட்டுவதைக் குறைக்க அல்லது சக மாணவர்களுடன் விவாதிக்கும் வழிகளை பயன்படுத்த முயற்சிக்கவும்.")},i*4)
      setTimeout(() =>  {display("தானியங்கி கழிக்கவும்:\n1.செயற்கை கற்பிக்கும் முறைகள் புரிந்து படியை அமைத்து உள்ளிட்டு அறிந்து கொள்ள உத்தமமாகும்.\n2.கடைசியில் வருவாய் சேர்ந்த பரீட்சை கேள்விப் பேப்பர்கள் மற்றும் மாதிரி பேப்பர்களை பயிற்சிக்க தயாரிக்கவும்.")},i*5)
      setTimeout(() =>  {display("தவறு பண்ணாதிருக்க:\n1.படித்து அளிக்கும் நேரங்களை அறிந்து கொள்ளுங்கள் மற்றும் படிக்க பயன்படுத்த வாய்ப்புகளை குறைக்க உத்தமமாக நீங்கள் செய்ய முயற்சிக்கவும்.\n2.படிக்குழுக்களைத் தேர்வுச் செய்ய பரிசோதித்து அந்தக் கேள்விகளை வெளியிட விடாமல் செய்யுங்கள்.")},i*6)
      setTimeout(() =>  {display("நித்தியமாக உடைய:\n1.படிக்க தேர்வுகளுக்கு சரியாக உடைய, பலான உணவுகளை சேவிக்க உடையதாக்குங்கள்.\n2.உடையதாக்க மற்றும் சுவிசேஷமாக விரிக்கவும், அமைந்திருக்க உத்தமமாக குடிகாப்பது படிக்க மற்றும் அறிவு குதிக்க உத்தமமாக இருக்கும்.")},i*7)
      setTimeout(() =>  {display("தொழில்நுட்பம்:\n1.உற்சாகமாக போக்குக்கள், பணியாக்குக்கள், மற்றும் உணவை குறிக்க உத்தமமாக அளிக்குக உத்தமமான முயற்சியைச் செய்யுங்கள்.")},i*8)
      setTimeout(() =>  {display("அன்பை கேட்க போக:\n1.ஒரு குறிப்பை பார்த்து சிரிக்கும்போது, உங்கள் ஆசிரியர்கள் அல்லது வகுப்புப் பக்கங்கள் உங்கள் உத்தமமான அலைக்கு உத்தமமாக உத்தமமாக உத்தமமாக அனுப்புகின்றனர்.\n2.படிக்க குழுக்களுக்கு சேர்ந்து விவாதிக்க மற்றும் சந்தேகங்களை விளக்கவும்.")},i*9)
      setTimeout(() =>  {display("கோடித்துக்காட்டு:\n1.தடுத்த படிக்க நேரங்களில் சரியாக கோடித்துக்காட்டிகளை அநுப்பவும்.\n2.நீங்கள் சொல்வதில் அநிர்ணயம் இருக்கும்போது, அந்த கேள்வியை விடுங்கள், பின்னர் நேரம் அநுப்ப முடியும் படிக்க முடியும்.")},i*10)
      setTimeout(() =>  {display("சந்திப்புக்களை நிர்வகிக்க:\n1.உண்டாகின்ற தேர்வுகளில் நிர்வகிக்க போக்கிலும் கோடித்துக்காட்டுக்களை செய்ய வேண்டிய நேரம் உள்ளிட்டுக் கொள்ளுங்கள்.\n2.நீங்கள் ஒரு கேள்வியின் பரிசோதனையில் நம ்பிக்கை கொண்டிருக்கலாம், அதை நெருங்கி செய்யுங்கள்")},i*11)
      setTimeout(() =>  {display("செய்ய அந்தக் கடிதத்தில் அந்தக் கேள்வியிற்கு நம்பிக்கை கொண்டிருக்கவில்லை:\n1.உண்டாகின்ற தேர்வில், ஒவ்வொரு பிரிவு அல்லது கேள்விக்குக் கோடித்துக்காட்டுங்கள்.\n2.நீங்கள் அநிதிக்கு சொல்லாக இருக்காதீர்கள், பின்னர் அந்தக் கேள்விக்கு வரல் செய்ய வாய்ப்பு உள்ளிட்டு செய்யுங்கள்.")},i*12)
    }
  else{
    setTimeout(() =>  {display("Create a Study Schedule:\n1.Make a detailed study schedule that covers all subjects and topics.\n2.Allocate more time to subjects or topics you find challenging.\n3.Include breaks in your schedule to avoid burnout.\n\n\n Prioritize Subjects:\n1.Identify the subjects that carry more weight in the exams and focus on them first.\n2.Allocate more study time to subjects you are less confident in.\n\n\n Set Specific Goals:\n1.Set clear, achievable goals for each study session. For example, complete a specific chapter or solve a set of practice questions.\n\n\n Break Down the Syllabus:\n1.Divide the syllabus into manageable sections or chapters.\n2.Focus on completing one section before moving on to the next.\n\n\n Use Effective Study Techniques:\n1.Active learning techniques like summarizing, teaching, or discussing topics with peers can enhance understanding.\n2.Practice previous years' question papers and sample papers to get a sense of the exam pattern.\n\n\n Avoid Procrastination:\n1.Identify your most productive study times and schedule difficult subjects during these hours.\n2.Minimize distractions, such as turning off social media and mobile notifications while studying.\n\n\nTake Regular Breaks:\n1.Short breaks between study sessions can help improve focus and prevent burnout.\n2.Use techniques like the Pomodoro method (25 minutes of focused study followed by a 5-minute break).\n\n\nStay Healthy:\n1.Get enough sleep, eat balanced meals, and stay hydrated to ensure your mind and body are in optimal condition for studying.\n\n\nRevise Regularly:\n1.Plan time for revision in your schedule, as revision is essential for retention.\n2.Create flashcards or summary notes for quick revision\n\n\n Seek Help When Needed:\n1.If you're struggling with a particular topic, don't hesitate to ask your teachers or classmates for help.\n2.Consider joining study groups to discuss and clarify doubts.\n\n\n Practice Time Management During the Exam:\n1.During the actual exam, allocate time wisely to each section or question.\n2.If you're unsure about a question, move on and come back to it later if time permits.\n\n\nStay Positive and Manage Stress:\n1.Maintain a positive mindset and believe in your abilities.\n2.Practice relaxation techniques like deep breathing and meditation to manage exam-related stress.")},i*1)
    }
}
else if (text.includes("college")){
  if(text.includes("tn")){
    setTimeout(() => {pdf("/chatbot/pdf/Tamil Nadu Top College list.pdf")}, i*1);
    setTimeout(() => {display("Tamil Nadu Top College list")},i*2)
  }
  else if(text.includes("india")|text.includes("ind")){
    setTimeout(() => {pdf("/chatbot/pdf/India Top College list.pdf")}, i*1);
    setTimeout(() => {display("India Top College list")},i*2)
  }
  else {
    setTimeout(() => {display("which college do you prepare ?")}, i*1); 
    setTimeout(() => {display("Engineering College")}, i*2); 
    setTimeout(() => {display("Medical College")}, i*3); 
    setTimeout(() => {display("Arts and Science College")}, i*4); 
  }
}
else if(text.includes("vsb")|text.includes("v.s.b")){
  setTimeout(() => {display("V.S.B. Educational Trust was founded in the year 2000 by Mr. V.S. Balsamy, the founder and correspondent of the V.S.B. Engineering College, with an interest in promoting, managing and administrating educational institutions with high academic standards, discipline and to take up and help other allied activities in the field of education. Under the Trust, V.S.B. Engineering College,Karur was established in the year 2002 and V.S.B College of Engineering Technical Campus,Coimbatore in the year 2012.")},i*1)
}
else if((text.includes("kalam")|text.includes("a.p.j"))&text.includes("birth")&(text.includes("date")|text.includes("day"))){
  setTimeout(() => {display("15 October 1931")},i*1)
}
else if(text.includes("sachin")&text.includes("birth")&(text.includes("date")|text.includes("day"))){
  setTimeout(() => {display("24 April 1973")},i*1)
}
else if(text.includes("vijay")&text.includes("birth")&(text.includes("date")|text.includes("day"))){
  setTimeout(() => {display("22 June 1974")},i*1)
}
else if(text.includes("ajith")&text.includes("birth")&(text.includes("date")|text.includes("day"))){
  setTimeout(() => {display("1 May 1971")},i*1)
}
else if(text.includes("kamarajar")&text.includes("birth")&(text.includes("date")|text.includes("day"))){
  setTimeout(() => {display("15 July 1903")},i*1)
}
else if(text.includes("date")|(text.includes("today")&text.includes("date"))){
  setTimeout(() => {display(currentDate)},i*1)
}
else if(text.includes("time")|text.includes("currenttime")){
  setTimeout(() => {display(currentTime)},i*1)
}
else if(text.includes("day")){
  setTimeout(() => {switch(date.getDay()){
    case 1:
      display("Monday");
      break;
    case 2:
      display("Tuesday");
      break;
    case 3:
      display("Wednesday");
      break;
    case 4:
      display("Thursday");
      break;
    case 5:
      display("Friday");
      break;
    case 6:
      display("saturday");
      break;
    default:
      display("Sunday");
      break;
}},i*1)
}
else if(text.includes("month")){
  setTimeout(() => {display((date.getMonth()+1).toString())},i*1)
}
else if(text.includes("year")){
  setTimeout(() => {display((date.getFullYear()).toString())},i*1)
}
else if(text.includes("stop")){
  setTimeout(() => {stop()},i*1)
}
else if(text.includes("*")|text.includes("+")|text.includes("-")|text.includes("/")|text.includes("%")){
  const result = eval(text);
  setTimeout(() => {display(result.toString())},i*1)
}
else {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});
const axios = require('axios');
// Replace with the text you want to provide as input

const prompt = `Generate a response: ${text}`;

const apiKey = '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'; // Replace with your OpenAI API key

const searchResultsElement = document.getElementById('results');
generateGPT3Response(prompt);


//   var searchQuery = input;
//   console.log(searchQuery.trim());
//   let url = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch="+searchQuery;
//   console.log(url);
//   getData(searchQuery);
// async function getData(searchQuery)
// {
//   let url = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch="+searchQuery;
//   try{
//       response = await fetch(url);
//       data = await response.json();
//       console.log(data);
//       show(data);
//       console.log("success");
      
//   }
//   catch(error){
//       console.log(error);
//   }

// }

}
  }
  async function generateGPT3Response(prompt) {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        prompt: prompt,
        max_tokens: 50 // You can adjust this to control the response length
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
  
      const data = response.data.choices[0].text;
  
      const resultElement = document.createElement('div');
      resultElement.innerHTML = data;
  
      searchResultsElement.appendChild(resultElement);
    } catch (error) {
      console.log(error);
    }
  }
// function show(data)
// {
 
//     if(data.query.search.length== 0)
//     {
//         searchblk.insertAdjacentHTML('beforeend',`<div class="result-item-notFound">\
//             <h1>No results found</h1></div>`);
//     }
//     else
//     {
//     console.log(data.query.search.length);
//     data.query.search.forEach(data=> {
//         const url = `https://en.wikipedia.org/?curid=${data.pageid}`;
//         let txt = data.snippet;
//         var response = txt.replaceAll("<span class=\"searchmatch\">","");
//         response=response.replaceAll("</span>"," ");
//         console.log(response);
//         conversation.insertAdjacentHTML(
     
            
            
//             display(response)
//         );
//     });
// }
// }
function scrollWin() {
  message.scrollBy(100, 0);
}
 function typeWriter(text, element, currentIndex = 0) {
  element.scrollIntoView({behavior: "smooth"});
    if (currentIndex < text.length) {
      element.innerHTML += text.charAt(currentIndex);
      currentIndex++;
      scrollWin();
      setTimeout(function () {
        typeWriter(text, element, currentIndex);
      }, 5);
       // Adjust the delay (in milliseconds) between each character
    }
  }

function display(responses) {

  // ms.text =  responses;
  // ms.rate = 1 ;
  // ms.voice = speechSynthesis.getVoices()[0];
  // speechSynthesis.speak(ms);

  // Create a new message element
  const message = document.createElement('div');
  message.classList.add('chatbot-message', 'chatbot');
  message.innerHTML=`<img src="${chatbotimage}" class="bot-image">`
  conversation.appendChild(message);

  // Create a paragraph element to display the text
  const textElement = document.createElement('p');
  textElement.setAttribute('sentTime', currentTime);
  textElement.classList.add('chatbot-text');
  message.appendChild(textElement);

  // Start typing effect for the responses


 message.scrollIntoView({behavior: "smooth"});
  // Scroll to the newly added message
    typeWriter(responses, textElement);

}

// function autoScroll() {
//   // Calculate the new scroll position
//   const scrollHeight = conversation.scrollHeight;
//   const clientHeight = conversation.clientHeight;
//   const currentScrollTop = conversation.scrollTop;

//   // If we're not at the bottom, scroll down by a certain amount (adjust as needed)
//   const scrollAmount = 20;
//   const newScrollTop = currentScrollTop + scrollAmount;

//   if (currentScrollTop + clientHeight >= scrollHeight) {
//     // We're at the bottom, so wait for more content
//   } else {
//     conversation.scrollTop = newScrollTop;
//     conversation.scrollTop({behavior: "smooth"});
//   }
// }

// Set up the auto-scrolling interval (800 milliseconds)
// const scrollInterval = setInterval(autoScroll, 400);

 function btn(msg,a){
  // ms.text =  msg;

  // ms.rate = 1.5 ;
  // ms.voice = speechSynthesis.getVoices()[0];
  // speechSynthesis.speak(ms);
  const message = document.createElement('div');
  message.classList.add('chatbot-message', 'chatbot');
  
  conversation.appendChild(message);

  const bDiv = document.createElement('button');
  bDiv.addEventListener('click', function(){
    audioPlayer.play();
  });
  message.classList.add('btn');
  // bDiv.innerHTML = msg;
   if(a=="all"){ bDiv.addEventListener('click', function() {all();inp(msg);});}

   if(a=="_12"){ bDiv.addEventListener('click', function() {_12();inp(msg);});}
   if(a=="college"){ bDiv.addEventListener('click', function() {college();inp(msg);}); }
   if(a=="cexam"){ bDiv.addEventListener('click', function() {cexam();inp(msg);});}

   if(a=="ecollege"){ bDiv.addEventListener('click', function() {ecollege();inp(msg);}); }
   if(a=="mcollege"){ bDiv.addEventListener('click', function() {mcollege();inp(msg);}); }

   if(a=="vsb"){ bDiv.addEventListener('click', function() {vsb();inp(msg);}); }


    if(a=="book"){bDiv.addEventListener('click', function() {book();inp(msg);});}
    if(a=="material"){ bDiv.addEventListener('click', function() {material();inp(msg);}); }
    if(a=="question"){ bDiv.addEventListener('click', function() {question();inp(msg);});}

    if(a=="biogbook"){ bDiv.addEventListener('click', function() {biogbook();inp(msg);});}
    if(a=="csgbook"){ bDiv.addEventListener('click', function() {csgbook();inp(msg);});}

    if(a=="tambbook"){bDiv.addEventListener('click', function() {tambbook();inp(msg);});}
    if(a=="engbbook"){bDiv.addEventListener('click', function() {engbbook();inp(msg);});}
    if(a=="matbbook"){bDiv.addEventListener('click', function() {matbbook();inp(msg);});}
    if(a=="phybbook"){bDiv.addEventListener('click', function() {phybbook();inp(msg);});}
    if(a=="chebbook"){bDiv.addEventListener('click', function() {chebbook();inp(msg);});}
    if(a=="biobbook"){bDiv.addEventListener('click', function() {biobbook();inp(msg);});}

    if(a=="tamcbook"){bDiv.addEventListener('click', function() {tamcbook();inp(msg);});}
    if(a=="engcbook"){bDiv.addEventListener('click', function() {engcbook();inp(msg);});}
    if(a=="matcbook"){bDiv.addEventListener('click', function() {matcbook();inp(msg);});}
    if(a=="phycbook"){bDiv.addEventListener('click', function() {phycbook();inp(msg);});}
    if(a=="checbook"){bDiv.addEventListener('click', function() {checbook();inp(msg);});}
    if(a=="cscbook"){bDiv.addEventListener('click', function() {cscbook();inp(msg);});}
  
    if(a=="biogmaterial"){ bDiv.addEventListener('click', function() {biogmaterial();inp(msg);});}
    if(a=="csgmaterial"){ bDiv.addEventListener('click', function() {csgmaterial();inp(msg);});}
    if(a=="tambmaterial"){bDiv.addEventListener('click', function() {tambmaterial();inp(msg);});}
    if(a=="engbmaterial"){bDiv.addEventListener('click', function() {engbmaterial();inp(msg);});}
    if(a=="matbmaterial"){bDiv.addEventListener('click', function() {matbmaterial();inp(msg);});}
    if(a=="phybmaterial"){bDiv.addEventListener('click', function() {phybmaterial();inp(msg);});}
    if(a=="chebmaterial"){bDiv.addEventListener('click', function() {chebmaterial();inp(msg);});}
    if(a=="biobmaterial"){bDiv.addEventListener('click', function() {biobmaterial();inp(msg);});}

    if(a=="tamcmaterial"){bDiv.addEventListener('click', function() {tamcmaterial();inp(msg);});}
    if(a=="engcmaterial"){bDiv.addEventListener('click', function() {engcmaterial();inp(msg);});}
    if(a=="matcmaterial"){bDiv.addEventListener('click', function() {matcmaterial();inp(msg);});}
    if(a=="phycmaterial"){bDiv.addEventListener('click', function() {phycmaterial();inp(msg);});}
    if(a=="checmaterial"){bDiv.addEventListener('click', function() {checmaterial();inp(msg);});}
    if(a=="cscmaterial"){bDiv.addEventListener('click', function() {cscmaterial();inp(msg);});}

    if(a=="question2023"){bDiv.addEventListener('click', function() {question2023();inp(msg);});}
    if(a=="biogquestion23"){bDiv.addEventListener('click', function() {biogquestion23();inp(msg);});}
    if(a=="csgquestion23"){bDiv.addEventListener('click', function() {csgquestion23();inp(msg);});}
    
    if(a=="question2022"){bDiv.addEventListener('click', function() {question2022();inp(msg);});}
    if(a=="biogquestion22"){bDiv.addEventListener('click', function() {biogquestion22();inp(msg);});}
    if(a=="csgquestion22"){bDiv.addEventListener('click', function() {csgquestion22();inp(msg);});}
    
    if(a=="question2021"){bDiv.addEventListener('click', function() {question2021();inp(msg);});}
    if(a=="biogquestion21"){bDiv.addEventListener('click', function() {biogquestion21();inp(msg);});}
    if(a=="csgquestion21"){bDiv.addEventListener('click', function() {csgquestion21();inp(msg);});}

    if(a=="neetexam"){bDiv.addEventListener('click', function() {neetexam();inp(msg);});}
    if(a=="jeeexam"){bDiv.addEventListener('click', function() {jeeexam();inp(msg);});}

    if(a=="ajeeexam"){bDiv.addEventListener('click', function() {ajeeexam();inp(msg);});}
    if(a=="sjeeexam"){bDiv.addEventListener('click', function() {sjeeexam();inp(msg);});}

    if(a=="psjeeexam"){bDiv.addEventListener('click', function() {psjeeexam();inp(msg);});}
    if(a=="csjeeexam"){bDiv.addEventListener('click', function() {csjeeexam();inp(msg);});}
    if(a=="msjeeexam"){bDiv.addEventListener('click', function() {msjeeexam();inp(msg);});}

    if(a=="aneetexam"){bDiv.addEventListener('click', function() {aneetexam();inp(msg);});}
    if(a=="sneetexam"){bDiv.addEventListener('click', function() {sneetexam();inp(msg);});}

    if(a=="psneetexam"){bDiv.addEventListener('click', function() {psneetexam();inp(msg);});}
    if(a=="csneetexam"){bDiv.addEventListener('click', function() {csneetexam();inp(msg);});}
    if(a=="bsneetexam"){bDiv.addEventListener('click', function() {bsneetexam();inp(msg);});}

  message.scrollIntoView({behavior: "smooth"});
  message.appendChild(bDiv);
  typeWriter(msg,bDiv);

}
function inp(bDiv){
let mess = document.createElement('div');
mess.classList.add('chatbot-message', 'user-message');
mess.innerHTML = `<div class="chat-inp">
<p class="chatbot-input" sentTime="${currentTime}">
<span class="input-text">${bDiv}</span>
</p>
<img src="${userimage}" class="input-image">
</div>`;
conversation.appendChild(mess);
mess.scrollIntoView({behavior: "smooth"});}

function link(responses){
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text1" sentTime="${currentTime}">${responses}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
}
function image(img){
  var x = document.createElement("IMG");
  x.setAttribute("src", img);
  x.setAttribute("width", "200");
  x.setAttribute("height", "200");

  x.setAttribute("alt", "Image");
  // x.classList.add('chatbot-message','chatbot');
  conversation.appendChild(x);
  x.scrollIntoView({behavior: "smooth"});
  x.style.padding = "20px"; 
  x.style.borderRadius = "25px";
  // x.style.backgroundColor="black"; 
}
function pdf(pd){
  var linkElement = document.createElement("a");
  linkElement.href = pd;
  linkElement.classList.add("pdf");
  linkElement.target="_blank";
  var x = document.createElement("IMG");
  x.setAttribute("src","images/pdf.png");
  x.setAttribute("width", "200");
  x.setAttribute("height", "200");
  x.setAttribute("alt", "Image");
  linkElement.appendChild(x);
  // x.classList.add('chatbot-message','chatbot');
  conversation.appendChild(linkElement);
  linkElement.scrollIntoView({behavior: "smooth"});
  // linkElement.style.padding = "20px";  
//   var linkElement = document.createElement("a");
// linkElement.href = pd; 
// var x = document.createElement("IMG");
// x.setAttribute("src","chatbot/image/pdf.png" );
// x.setAttribute("width", "200");
// x.setAttribute("height", "200");
// x.setAttribute("alt", "Image");
// linkElement.appendChild(x);
// // x.classList.add('chatbot-message','chatbot');
// linkElement.appendChild(x);
// linkElement.scrollIntoView({behavior: "smooth"});
// linkElement.style.padding = "20px"; 
// // Create an anchor element
// var d = document.createElement("a");
// d.href = p; // Set the URL you want to link to

// // Create an image element
// ZZZZZZZZZZZZZZZZZZZZzz
// var image = document.createElement("img");
// image.src = "images/bharath.jpg"; // Set the image source
// image.alt = "Image Alt Text"; // Set the image alt text

// // Append the image element to the anchor element
// d.appendChild(image);

// // // Get the container element by its ID
// // var container = document.getElementById("imageContainer");

// // // Append the anchor element to the container
// // container.appendChild(link);
// conversation.appendChild(d);
// d.scrollIntoView({behavior: "smooth"});
// d.style.padding = "20px";  
}
// Add chatbot response to conversation

});

// Generate chatbot response function
// function generateResponse(input) {
//   let responses;
//     // Add chatbot logic here
//     // const responses = [
//     //   "Hello, how can I help you today? 😊",
//     //   "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
//     //   "I'm here to assist you with any questions or concerns you may have. 📩",
//     //   "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
//     //   "What would you like to know? 🤔",
//     //   "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
//     //   "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
//     //   "Is there anything specific you'd like to talk about? 💬",
//     //   "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
//     //   "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
//     //   "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
//     //   "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
//     // ];
//    let text = input.toLowerCase();
//   if(text.includes("hi")|text.includes("hello")|text.includes("hey"))
// {
//   responses="Welcome,TO televein chat bot";
// }
//     // Return a random response
//     return responses;
//   }
function myFunction(x) {
  if (x.matches) { // If media query matches
    ms.rate = 1.1 ;
  } else {
    ms.rate = 1.5 ;
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes