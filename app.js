// let plus=document.querySelectorAll('.plus');
// let minus=document.querySelectorAll('.minus');
// flag=0;


// plus.forEach(function(btn){
//     btn.addEventListener("click",(e)=>{
//         const answer=e.currentTarget.parentNode.nextElementSibling;
//         answer.classList.toggle("show-text");
//         })
// })

let faqs=document.querySelectorAll("#faq");
let svgs=document.querySelectorAll('i');


faqs.forEach(faq=>{
    faq.addEventListener('click',(e)=>{
    faq.lastElementChild.classList.toggle("hide-text")
    svgs.forEach(svg=>{
        svg.classList.toggle("transfer")
    })
    })
})



