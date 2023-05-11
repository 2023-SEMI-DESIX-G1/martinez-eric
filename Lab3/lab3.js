(()=>{
    const app={
        htmlElements:{
          palindromoForm:document.getElementById('palindromo'),
          caracteresForm:document.getElementById('caracteres'),
          bisiestoForm:document.getElementById('Fbisiesto'),
          primosForm:document.getElementById('num-primos')
        },

        init(){
          let num;
          let cadena;
          //app.methods.funcion_cadena({cadena});
          
          
          //Handlers
          app.htmlElements.palindromoForm.addEventListener('submit',
          app.handlers.palindromoFormHandler);

          app.htmlElements.caracteresForm.addEventListener('submit',
          app.handlers.caracteresFormHandler);

          app.htmlElements.bisiestoForm.addEventListener('submit',
          app.handlers.bisiestoFormHandler);

          app.htmlElements.primosForm.addEventListener('submit',
          app.handlers.primoFormHandler);

        },
        handlers:{
          palindromoFormHandler(event){
            
            //problema1
            event.preventDefault();
            num=document.getElementById('num').value;
            //const response=app.methods.function_palindromo({num});
            //respuesta en pantalla
            //document.getElementById('palindrome-results').innerHTML=JSON.stringify(response);
          },
          caracteresFormHandler(event){  
            //problema 2
            event.preventDefault();
            cadena=document.getElementById('cadena').value;
            app.methods.function_cadena({cadena});
            //respuesta en pantalla
            //document.getElementById('cadena-res').innerHTML=JSON.stringify(response1);
          },
          bisiestoFormHandler(event){
            //problema 3
            event.preventDefault();
            año=document.getElementById('añob').value;
            app.methods.function_bisiesto({año});
          },
          primoFormHandler(event){
            //problema 4
            event.preventDefault();
            primo=document.getElementById('numero_primo').value;
            app.methods.function_primos({primo});
          }
        },
        methods:{
            function_palindromo(){
          
               
             const response=app.methods.function_palindromo({num});
             //respuesta en pantalla
             document.getElementById('palindrome-results').innerHTML=JSON.stringify(response);
            },
            function_cadena({cadena}){
             cadena=cadena.replace(/\s/g, "");
             final={};
             for(let char in cadena){
              if(cadena[char] in final){
                final[cadena[char]] = final[cadena[char]] + 1
              }else{
                final[cadena[char]] = 1
              }
             }
            
              document.getElementById('cadena-res').innerHTML=JSON.stringify(final[char]);
             
            //respuesta en pantalla
            
            },
            function_bisiesto({año}){
            if((año%400===0) || (año%4==0)){
                  respuesta="Es bisiesto";
                  }else{
                    respuesta="No es bisiesto";
                  }
              document.getElementById('bisiesto-res').innerHTML=JSON.stringify(respuesta); 
              },
            function_primos({primo}){
             let suma;
             let i;
              for ( i=2;i<primo;i++){
                
                if(primo%i==0){
                  console.log("no es un numero primo");
                }else
                suma=suma+i;
              }
               console.log("La suma de los numeros primos es:",suma);
             },
        } 
      }
    app.init();
})();