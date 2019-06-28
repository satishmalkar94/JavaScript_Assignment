function Calculator () {
    this.evaluate = function(string){
        var res = string.split(" ");



        function multi(a,b){
        mul=a*b;
        console.log("mul",mul)

        }

        function divi(a,b){

            div=a/b;
            console.log("div",div)


        }
        function add(a,b){

            add=a+b;
            console.log("add",add)


        }
        function sub(a,b){

            sub=a-b;
            console.log("sub",sub)


        }

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

            divi(l,m)
        }

         else if (res[1] == '+')
        {
            l=res[0]
            m=res[2]

            add(l,m)
        }
        else(res[1] == '-')
        {
            l=res[0]
            m=res[2]

            sub(l,m)
        }

    }


}
    calculator = new Calculator()
    calculator.evaluate('10 + 2')


















