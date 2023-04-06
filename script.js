let topic_icons=document.querySelectorAll(".topic_name");
let jsproject=["assets/URLshortener.jpg","assets/clock.png","assets/todo.png","assets/tiktok.png","assets/password.png","assets/joblist.png","assets/calculator.png","assets/bmi.png"];
let projectitle=["Short Url","Clock App","Todo List","Tiktok Toe","Password Generator","joblist","calculator","Tip calculator",];
let discription=["In this project i used API.It's used to simpler to share a shorter link than a long","In this project i used API and javascript concept","This to-do list is used to improve productivity and reduce stress.","It is a two player game","This password generator is useful for creating strong and unique passwords","In this project I used basic JavaScript concepts.","In this project I used basic JavaScript concepts.","In this project I used basic JavaScript concepts."];

let htmlproject=["assets/html1.png","assets/html2.png","assets/html3.png","assets/html4.png","assets/audio.png"];
let htmlinks=["https://html-assignment-11.priyamani1.repl.co/","https://assignment-10.priyamani1.repl.co/","https://assignment-7.priyamani1.repl.co/","https://assignment-6.priyamani1.repl.co/","https://new-page.priyamani1.repl.co/"]
let projectlink=["https://strong-sunflower-ehttps://moonlit-naiad-0262c9.netlify.app/901fa.netlify.app/","https://cozy-genie-060880.netlify.app/","https://github.com/Priyamani2004/ToDo-list","https://js-assignment-9--priyamani1.repl.co/","https://curious-dasik-bfe741.netlify.app/","https://sensational-jalebi-5c3e7a.netlify.app/","https://js-assignment-5--priyamani1.repl.co/","https://js-assignment-4--priyamani1.repl.co/"];
let javalinkarray=["https://github.com/Priyamani2004/java-assignment/blob/master/inheritance","https://github.com/Priyamani2004/java-assignment/blob/master/java%20Abstract","https://github.com/Priyamani2004/java-assignment/blob/master/java%20Assignment","https://github.com/Priyamani2004/java-assignment/blob/master/string%2C%20builder%2Cbuffer"];
let javaimg=['assets/731_java.jpg','assets/731_java.jpg','assets/731_java.jpg','assets/731_java.jpg']
function createlements(element,num){
    console.log(typeof(num))
  for(let i=0; i<topic_icons.length; i++){
    if(i==num){
        topic_icons[i].style.backgroundColor="#0a0b0c";
        topic_icons[i].style.borderRadius="15px";
    }
    else{
        topic_icons[i].style.background="none";
    }
  }
  let project_div=document.querySelectorAll(".create_flexdiv");
  let wholediv=document.getElementById("project_div");
  if(num!=0 && num!=2){
    for(let j=0; j<project_div.length; j++){
      project_div[j].style.display="none";
    }
    let count;
    let imgarray;
    let description;
    let projectlinks;
    if(num==1){
      //set variables//
      count=8;
      imgarray=jsproject;
      headingarray=projectitle;
      description=discription;
      projectlinks=projectlink;

      wholediv.style.height="700px";
      wholediv.style.width="1400px";
    }
    else if(num==3){
      imgarray=htmlproject;
      projectlinks= htmlinks;
      wholediv.style.height="700px";
      wholediv.style.width="1200px";
      count=5
    }
    else if(num==4){
      count=4;
      imgarray=javaimg;
      projectlinks= javalinkarray;
      wholediv.style.height="700px";
      wholediv.style.width="1200px";
    }
    for(let i=0; i<count; i++){
       let create_flexdiv=document.createElement("div");
       wholediv.appendChild(create_flexdiv);

       let slidediv=document.createElement("div");
       create_flexdiv.appendChild(slidediv);
       //create appnames//
       let h3tag=document.createElement("h3");
       slidediv.appendChild(h3tag);
       if(num==1){
        h3tag.innerText=headingarray[i];
       }
       h3tag.setAttribute("class","headings");

       //create description//
       let paraghraph=document.createElement("p");
       paraghraph.setAttribute("class","creation_send");
       slidediv.appendChild(paraghraph);
       if(num==1){
        paraghraph.innerText=description[i];
       }
       else if(num==3) {
        paraghraph.innerText="When I started learning about Html,Css I create this Web page"
       }
       else if(num==4){
        paraghraph.innerText="I have create this assignment in java"
       }

       //create view btn//
       let viewbtn=document.createElement("button");
       slidediv.appendChild(viewbtn);
       viewbtn.setAttribute("id","view_project");

       //create link tag//
       let link = document.createElement('a');
       link.setAttribute('href',`${projectlinks[i]}` );
       link.setAttribute('target', '_blank');
       viewbtn.appendChild(link);
       link.innerHTML = 'view';

       slidediv.setAttribute("class","slidediv");
       create_flexdiv.setAttribute("class","create_flexdiv");
        create_flexdiv.style.backgroundImage=`url(${ imgarray[i]})`;
       create_flexdiv.style.backgroundSize="100% 100%";
       create_flexdiv.style.backgroundRepeat="no-repeat";
    }
  }
  else{
    for(let j=0; j<project_div.length; j++){
      project_div[j].style.display="none";
    }
      let create_repeat=document.querySelectorAll(".create_repeat");
      wholediv.style.width="1200px";
    for(let j=0; j<create_repeat.length; j++){
      create_repeat[j].style.display="flex";
    }
    if(num==2){
      let jizsawpuzzle=document.getElementById("setimg3");
      jizsawpuzzle.style.display="none";
    }
    }
  }
  
