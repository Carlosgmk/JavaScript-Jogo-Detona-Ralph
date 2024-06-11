const iniciar = document.getElementById('startButton')
const persoAnim = document.getElementById('perso-animation')


iniciar.addEventListener('click',(evt)=>{
     window.location.href = 'jogo.html'
})

function loadPage(){
     setTimeout(function(){
          document.body.classList.add('load')
          

     },100)
     
}

document.addEventListener('DOMContentLoaded', loadPage)

let ground = (evt)=>{
     let divE = document.createElement('div')
     let groundE = document.createElement('img')
     groundE.src = 'src/imagens/20483.jpg';
     groundE.classList.add('solo-e')
     
     
    
     let divD = document.createElement('div')    
     let groundD = document.createElement('img')
     groundD.src = 'src/imagens/20483.jpg';
     groundD.classList.add('solo-d')


     
     persoAnim.appendChild(divD)
     persoAnim.appendChild(divE)


     divE.appendChild(groundE)
     divD.appendChild(groundD)

     return {
          divE: divE,
          divD: divD
     }
}
let elementos = ground()

persoAnim.appendChild(elementos.divD)
persoAnim.appendChild(elementos.divE)