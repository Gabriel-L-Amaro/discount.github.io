
    function Plan(name,price,space,transfer,pages,discountMonths)
    {
        this.name = name; 
        this.price = price;
        this.space = space;
        this.transfer = transfer;
        this.pages = pages;
        this.discountMonths = discountMonths;
        Plan.prototype.calcAnnual=function(percentIfDisc){
                var bestPrice = this.price;
                console.log("Price" + bestPrice);
                var currDate = new Date();
                console.log("Current Date " +currDate);
                var thisMo = currDate.getMonth();
                console.log("This Month " +thisMo);
                for (var i = 0; i < this.discountMonths.length; i++) {

                if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;}
                console.log("Best Price" +bestPrice);
                }
                return bestPrice * 12;
                }
    }

    var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [0, 7]);
    var p2 = new Plan("Professional", 5.99, 500, 5000, 50, [0, 7, 11]);
    var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [0, 7]);

    function plan1(){
        var annualPrice = p1.calcAnnual(.8);
        console.log(annualPrice);
        alert("Annual Price " + annualPrice);
    }
    
    function plan2(){
        var annualPrice = p2.calcAnnual(.8);
        console.log(annualPrice);
        alert("Annual Price " + annualPrice);
    }

    function plan3(){
        var annualPrice = p3.calcAnnual(.8);
        console.log(annualPrice);
        alert("Annual Price " + annualPrice);
    }