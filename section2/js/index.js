//let textContent = document.querySelector("text-desc");
let boxContent = document.querySelector(".ct-l-top");
let data = [
  {
    id: 1,
    name: "Floral",
    desc: "The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
  },
  {
    id: 2,
    name: "Decor selection",
    desc: "The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
  },
  {
    id: 3,
    name: "Hair & makeup",
    desc: "The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
  },
  {
    id: 4,
    name: "Lighting & Sound",
    desc: "The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.",
  },
];
let inputData = "";
for (let i = 0; i < data.length; i++) {
  inputData += `<div> <div >
  <div class='l-text' > 
        <div class='text-title-l' >  ${data[i].name} </div>
              <div style='cursor: pointer;' onclick='onClickDesc(${data[i].id})' >
              <img class='icon-select' src="./img/down_7356260.png" >
        </div>
        </div >
        <div 
        class='text-descs${data[i].id}' >
        ${data[i].desc}
         </div>
         </div>

  `;
}

boxContent.innerHTML = inputData;

function onClickDesc(dataId) {
  let textContent = document.querySelector(".text-descs" + `${dataId}`);

  if (textContent.style.display === "none") {
    textContent.style.display = "block";
  } else {
    textContent.style.display = "none";
  }
}
//styleName: Body/15px/Subtle;
