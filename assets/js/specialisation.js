
    const 
        specialisation = document.querySelector('.specialisation'),
        specialisationName = document.querySelector('.specialisationName h4'),
        bigname = document.querySelector('.nomPrenom')
        ;

        const insertSpecialisation = (text) => {
            const chars = text.split('');
            const elements = chars.map((char,index) => `<span style="--i : " ${index+1} >${char}</span>`);
            return elements.join('');
        };
        const lettresSpecialisaion = document.querySelectorAll('.specialisationName h4 span');
        specialisationName.innerHTML += `<div>${insertSpecialisation('Front-End')}</div>`;
        specialisationName.innerHTML += `<div>${insertSpecialisation('Developer')}</div>`;
        bigname.innerHTML += `<span class='nom'>${insertSpecialisation('ETTABAA')}</span>`;
        bigname.innerHTML += `<span class='nom'>${insertSpecialisation('Aomar')}</span>`;
        const bignamediv = document.querySelectorAll('.nomPrenom div');
        bignamediv[0].classList.add('nom');
        bignamediv[1].classList.add('prenom');

    //     const nom = document.querySelectorAll('.nom span');
    //     const prenom = document.querySelectorAll('.prenom span');
    //     const addlettreenboucle = (table)=>{
    //         let delai =0;
    //         table.forEach(element => {
    //             setTimeout(()=> element.style.display ='inline'
    //             ,delai);
    //             delai += 500;
    //         })
    //     }
    //     const nomDiv = document.querySelector('.nom');
    //     setInterval(() => {
    //         addlettreenboucle(nom);
    //       }, 1000);
        



