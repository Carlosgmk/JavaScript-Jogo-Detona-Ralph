
const iniciar = document.getElementById('startButton')
const persoAnim = document.getElementById('perso-animation')

function confLoading(){
   
     iniciar.addEventListener('click',(evt)=>{
     window.location.href = 'jogo.html'
     })


     document.addEventListener('DOMContentLoaded', loadPage)
     function loadPage(){
     setTimeout(function(){
               document.body.classList.add('load')
          },100)
     
      }

let persoAndpGround = ()=>{
     const divE = document.createElement('div')
     const groundE = document.createElement('img')
     const persoE = document.createElement('img')
     groundE.src = 'src/imagens/20483.jpg';
     groundE.classList.add('solo-e')
     persoE.src = 'src/imagens/ralphPerso-esq.png';
     persoE.id= 'ralph-esq'
     
    
     const divD = document.createElement('div')    
     const groundD = document.createElement('img')
     const persoD = document.createElement('img')
     groundD.src = 'src/imagens/20483.jpg';
     groundD.classList.add('solo-d');
     persoD.src = 'src/imagens/ralphPerso-dir.png'
     persoD.id= 'ralph-dir'


     divE.appendChild(groundE)
     divE.appendChild(persoE)
     divD.appendChild(groundD)
     divE.appendChild(persoD)

     return {
          divE: divE,
          divD: divD
     }
}
  let elementos = persoAndpGround()

  persoAnim.appendChild(elementos.divD)
  persoAnim.appendChild(elementos.divE)
}
 confLoading()

 function fMeteor(){

     const meteorBackgorund = document.getElementById('meteor')
     let tamanho = window.innerWidth
     let largura = window.innerHeight
     let mf = 5
     let flakes = []
    
     for(let i = 0; i < mf; i++){
          let flake = document.createElement('div')
          flake.classList.add('flake')
          let imag = document.createElement('img')
          imag.src='src/imagens/r18.png'
          imag.classList.add ('flake')
          
          flake.style.left = Math.random() * tamanho + 'vw'
          flake.style.top = Math.random() * largura + 'vh'
          // flake.style.width =  (Math.random() * 7 + 2) + 'px'
          // flake.style.height = (Math.random() * 7 + 2) + 'px'
          flakes.push(flake)
          meteorBackgorund.appendChild(flake)
          flake.appendChild(imag)
     }
     const moveFlakes = () =>{
          for(let i = 0; i < mf; i++){
               let flake = flakes[i]

               let x = parseFloat(flake.style.left)
               let y = parseFloat(flake.style.top)

               x += (Math.random() - 1.5) * 2
               y += (Math.random() + 2.0) * 2

               if(x > tamanho || x < 0 || y > largura || y < 0){
                    x = Math.random() * tamanho
                    y = 0
               }
               flake.style.left = x + 'px'
               flake.style.top = y + 'px'

               
          }
          requestAnimationFrame(moveFlakes)
     }
     moveFlakes()
 }
 fMeteor()