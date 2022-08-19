

        function calc(){

            let h = +sumInput.value;
            let m = +termInput.value;

            let sum = m / (h * h);
            sum = sum * 100;
            sum = Math.round(sum);
            sum = sum / 100;
            

            
            resultPlace.innerHTML = sum;   
           
           if (sum<16){
            Otvet.innerHTML = "Выраженный дефицит массы тела";
       }else if(sum<18.5){
            Otvet.innerHTML = "Недостаточная (дефицит) масса тела";
       }else if(sum<25){
            Otvet.innerHTML = "Норма";
       }else if(sum<30){
            Otvet.innerHTML = "Избыточная масса тела (предожирение)";
       }else if(sum<35){
            Otvet.innerHTML = "Ожирение 1 степени";
       }else if(sum<40){
            Otvet.innerHTML = "Ожирение 2 степени";
       }else if(sum){
            Otvet.innerHTML = "Ожирение 3 степени";
       }

           
        }




        //let m = prompt("ведите массу тела в килограммах:");
//console.log(`маса ${m} `);

//let h = prompt("ведите рост в метрах: Например(1.70)");
//console.log(`маса ${h} `); 

//let sum = m / (h * h);
//sum = sum * 100;
//sum = Math.round(sum);
//sum = sum / 100;
//console.log(`Индекс масы тела ${sum} кг/м2`);
