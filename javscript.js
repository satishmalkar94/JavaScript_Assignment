function Calculator () {

var x;

    this.store =function(y){
            this.x=y.peaches;
            console.log("-------")
            console.log('peaches')
            }
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
            k = parseInt(a);
            j = parseInt(b);
            k<j? minimum=k:minimum=j;
            console.log('-----------------')
            console.log("minimum",minimum)
        }

        function max(a,b){

            a>b? maximum=a:maximum=b;
            console.log('-----------------')
            console.log("maximum",maximum)


        }
        function round(a){
            var m=Math.round(a)
            console.log('-----------------')
            console.log("round")
            console.log(m);
        }


    if(res[1] == '*')
        {
            l=res[0]
            m=res[2]

            multi(l,m)

        }
        else if(res[0]=='peaches')
        {
            m=parseInt(res[2])
            if(res[1]=='-'){
            console.log(this.x - m);
             }
             else if(res[1]== '>='){
                console.log('--------')
                console.log("condition")
                console.log(this.x >= m)
             }
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

        else if(res[0] == 'round')
        {

            round(res[1])

        }


    }
}
    calculator = new Calculator()
    calculator.evaluate('20 * 2')
    calculator.evaluate("20 - 2");
    calculator.evaluate("20 / 2");
    calculator.evaluate("20 + 2");
    calculator.evaluate('maximum 200 220');
    calculator.evaluate('minimum 100 20');
    calculator.evaluate('round 8.48')
    calculator.store({peaches: 15})
    calculator.evaluate('peaches - 5')
    calculator.evaluate('peaches >= 15')
















