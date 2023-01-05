const buttons=document.querySelectorAll(".btn");
const boxes=document.querySelectorAll(".box");
const searchBox=document.querySelector("#search");

searchBox.addEventListener("keyup",(event)=>{
    searchText=event.target.value.toLowerCase().trim();
        boxes.forEach((box)=>{
            const data=box.dataset.item;
            if(data.includes(searchText)){
                box.style.display="block";
            }else{
                box.style.display="none";
            }
        });
        buttons.forEach((button)=>{
            button.classList.remove("btn-clicked");
        });
            buttons[0].classList.add("btn-clicked");
});

buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        event.preventDefault();
        setActiveBtn(event);
        const btnFilter=event.target.dataset.filter;

        boxes.forEach((box=>{
            if(btnFilter=="all"){
                box.style.display="block";
            }else{
                const boxFilter = box.dataset.item;
                if(btnFilter===boxFilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
             }
        }));
    }); 
});

function setActiveBtn(event){
    buttons.forEach((button)=>{
        button.classList.remove("btn-clicked");
    });
    event.target.classList.add("btn-clicked");
}