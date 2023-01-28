let inp = document.querySelector(".text")
let btn=document.querySelector('.btn')
let num=document.querySelector('.num')
sccuss = document.querySelector('.sccuss')
fail = document.querySelector('.fail')
fin=document.querySelector('.fin')

let ronNum = Math.floor(Math.random() *10)
console.log(ronNum)
btn.addEventListener('click',()=>{

if(inp.value !=''){
    if(inp.value == ronNum){
        inp.value = ''
        console.log('dddd')
        sccuss.classList.add('active')
    }
    else{
       
        if(num.textContent ==0){
            fail.classList.remove('active')
            fin.classList.add('active')
            
        }
        else{
            inp.value = ''
            fail.classList.add('active')
            num.textContent--
        }
    }
}
})