(()=>{
    const app={
        htmlElements:{
            notasForm:document.getElementById('calc_notas'),
            cantidadForm:document.getElementById('numero'),
            inputsNotas:document.getElementById('results'),
        },
        
        init(){

            //Handlers
            app.htmlElements.notasForm.addEventListener('submit',
            app.handlers.notasFormHandler);

        },

        handlers:{
            notasFormHandler(event){
                event.preventDefault();

                
                const notas=app.htmlElements.cantidadForm.value;
                const resp=app.methods.agregarNotas({notas});

                const calculo=htmlElements.inputsNotas.value;
                const calculo2=app.methods.calcular({calculo});

            }
        },

        methods:{
            calcular({}){

            },
            
            agregarNotas({notas}){
                const lista_input=app.htmlElements.inputsNotas;
                const ident=app.htmlElements.inputsNotas;
                lista_input.innerHTML="";
                for(var cantidad=0;cantidad<notas;cantidad++){
                    var nuevanota=document.createElement('input');
                    nuevanota.type='number';
                    nuevanota.name='nota' + cantidad+1;
                    nuevanota.id='nota' + cantidad+1;
                    var label=document.createElement('label');
                    label.textContent= cantidad+1;
                    lista_input.appendChild(label);
                    lista_input.appendChild(nuevanota);
                    lista_input.appendChild(document.createElement('br'));    
                }  
            } 
        }
    }
    app.init();
})();