const lengthSlider=document.querySelector('.pass-length input');
const passindicator=document.querySelector('.pass-indicator');
const passwordInput=document.querySelector('.input-box input');
const generateBtn=document.querySelector('.generate-btn');
const optionInputs=document.querySelectorAll(".option input");
const copyIcon=document.querySelector('.input-box span')

const characters={
    lowercase: 'qwertyuiopasdfghjklzxcvbnm',
    uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
    numbers: '0123456789',
    symbols:'!#$%^&*()_+=-?><";:~,.[]{}()|'
}

const generatebtn=()=>{
    let staticPassword='';
    let passLength=lengthSlider.value;
    let randomPassword='';
    let exculateDuplicate=false;
    optionInputs.forEach(opt => {
        if(opt.checked)
            if(opt.id!=='exc-duplicate' && opt.id!=='spaces')
                staticPassword+=characters[opt.id];
            else if( opt.id!=='spaces')
                staticPassword+='  ';
            else
                exculateDuplicate=true;
    });

    
    for (let i = 0; i<passLength; i++) {
        console.log(Math.random())
        let randomChar=staticPassword[Math.floor(Math.random()*staticPassword.length)]        
        
        if(exculateDuplicate){
            !randomPassword.includes(randomChar) || randomChar==" " ? randomPassword+=randomChar : i--;
        }
        else{
            randomPassword+=randomChar;
        }
        passwordInput.value=randomPassword
    }

}

const updatePassIndicator=()=>{
    passindicator.id=lengthSlider.value<=8 ?'weak':
    lengthSlider.value<=16? 'medium':
     'strong';
}

const updateSlider=()=>{
   document.querySelector('.pass-length span').innerText=(lengthSlider.value)
    generateBtn()
    updatePassIndicator()
}

const copyPassword=()=>{
    navigator.clipboard.writeText(passwordInput.value)
    copyIcon.innerHTML='<i class="fa-solid fa-check"></i>'
    setTimeout(()=>{
        copyIcon.innerHTML='<i class="fa-solid fa-clone"></i>'

    })
}

lengthSlider.addEventListener('input',updateSlider)
generateBtn.addEventListener('click',generatebtn)
copyIcon.addEventListener('click',copyPassword)