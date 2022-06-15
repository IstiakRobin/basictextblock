const heading = document.querySelector('.heading');
const h1 = document.querySelector('h1')
const range = document.querySelector('.range');
const color = document.querySelector('.colors');
const select = document.querySelector('.select');
const align = document.querySelectorAll('input[name=align]');

heading.onkeyup =()=>{
    h1.innerHTML=heading.value
}
range.oninput = ()=>{
    h1.style.fontSize=range.value + 'px';
}
color.oninput = ()=>{
    h1.style.color=color.value;
}
select.onchange = ()=>{
    h1.style.fontFamily=select.value;
}
align.forEach((item) => {
    item.onchange = ()=>{
        h1.style.textAlign= item.value;
    }    
});
