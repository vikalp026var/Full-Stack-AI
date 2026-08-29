const langaugeProficiency = document.getElementsByName('langaugeProficiency');
console.log(langaugeProficiency);

for(let i = 0; i < langaugeProficiency.length; i++) {
    if(langaugeProficiency[i].checked) {
        console.log(langaugeProficiency[i].value);
    }
}

