(()=>{
    const app={
        HTMLElements:{
            fibonacciForm:document.getElementById('fibonacci')
        },

        init(){

            //Handlers
            app.HTMLElements.fibonacciForm.addEventListener('submit',
            app.handlers.fibonacciFormHandler);
            
        },

        handlers:{
            fibonacciFormHandler(event){
                event.preventDefault();
                let num=document.getElementById('num').value;
                app.methods.function_fibonacci({num});

            }
        },

        methods:{
            function_fibonacci({num}){
                var fibonacci=[];
                fibonacci[0] = 0;
                fibonacci[1] = 1;
                for (var i = 2; i < num; i++) {
                    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
                }
               document.getElementById('fibon-results').innerHTML=JSON.stringify(fibonacci);
            }
        }
    }
        app.init();
})();