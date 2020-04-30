let newPwd,p1,p2,p3,p4;
let p1Arr = [];
let p2Arr = [];
let p3Arr = [];

p1Arr = [0,1,2,3,4,5,6,7,8,9];
p2Arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
p3Arr = ['!','@','#','$','%','&','?',':',';'];
p4Arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generatePwd() {

  //Rotina que busca os valores para a senha de forma aleatória				
  p1 = '';
  p2 = '';
  p3 = '';
  p4 = '';

  for (let i=0; i<2;i++) {
	  p1 += p1Arr[Math.floor(Math.random()*9)];
  }
  for (let i=0; i<6;i++) {
	  p2 += p2Arr[Math.floor(Math.random()*25)];
  }
  for (let i=0; i<2;i++) {
	  p3 += p3Arr[Math.floor(Math.random()*8)];
  }
  for (let i=0; i<2;i++) {
	  p4 += p4Arr[Math.floor(Math.random()*25)];
  }

  newPwd = p1+p2+p3+p4;

  //Array criado para reservar os valores de cada posição da senha para que eles possam ser embaralhados
  let pwdArr = newPwd.split('');
  
		//Função para embaralhar os valores da senha
    function shuffle (pwdArr) {
			let currentIndex = pwdArr.length;
			let tempValue, randomIndex;
						
			while (currentIndex > 0) {
				randomIndex = Math.floor(Math.random()*currentIndex);
				currentIndex -=1;
        tempValue = pwdArr[currentIndex];
				pwdArr[currentIndex] = pwdArr[randomIndex];
				pwdArr[randomIndex] = tempValue;
      }

		}	
	
  //Chama a função de embaralhamento e dá o Array que contém a senha como parâmetro
	shuffle(pwdArr);
  
  //Transforma o Array com a senha em String e remove os espaços entre os caracteres
	newPwd = pwdArr.join('').trim();
	
  //Coloca no visor o valor da senha gerada, já embaralhada 
	document.getElementById('visor').textContent = newPwd;		
	}