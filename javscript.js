function Calculator () {
    this.evaluate = function(string){
        var res = string.split(" ");

        function multi(a,b){
        multplication=a*b;
        console.log('-----------------')
        console.log("multplication",multplication)

        }

        function div(a,b){

            division=a/b;
            console.log('-----------------')
            console.log("division",division)


        }
        function add(a,b){

            addition=a+b;
            console.log('-----------------')
            console.log("addition",addition)


        }
        function sub(a,b){

            substraction=a-b;
            console.log('-----------------')
            console.log("substraction",substraction)

        }

        function min(a,b){

            a<b? minimum=a:minimum=b;
            console.log('-----------------')
            console.log("minimum",minimum)
        }

        function max(a,b){

            a>b? maximum=a:maximum=b;
            console.log('-----------------')
            console.log("maximum",maximum)

        }

        function round(values,decimals){
            return number(math.round(value+'e'+decimals)+'e-'+decimals);


        }
        // console.log(res)
        if(res[1] == '*')
        {
            l=res[0]
            m=res[2]

            multi(l,m)

        }
        else if(res[1] == '/')
        {
            l=res[0]
            m=res[2]

            div(l,m)
        }

         else if(res[1] == '+')
        {
            l=parseInt(res[0])
            m=parseInt(res[2])

            add(l,m)
        }
        else if(res[1] == '-')
        {
            l=res[0]
            m=res[2]

            sub(l,m)
        }
        else if(res[0] == 'minimum'){
            l=res[1]
            m=res[2]
            min(l,m)
        }
        else if(res[0] == 'maximum'){
            l=res[1]
            m=res[2]
            max(l,m)
        }
    }
    // else if(res[0]=='round')
    //     {
    //         l=res[1]
    //         m=res[2]
    //         round(l,m)
    //     }


}
    calculator = new Calculator()
    calculator.evaluate('20 * 2')
    calculator.evaluate("20 - 2");
    calculator.evaluate("20 / 2");
    calculator.evaluate("20 + 2");
    calculator.evaluate('maximum 20 2');
    calculator.evaluate('minimum 20 2');
    // calculator.evaluate("20 + 1 * 2");
    calculator.evaluate('round(8.2759, 2)')




















