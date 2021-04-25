class slavestolfo {
    constructor(name, aps, cost, ascension, amount) {
        this.name = name;
        this.aps = aps;
        this.cost = cost;
        this.ascension = ascension;
        this.amount = amount;
    }
    purchase() {
        if (astolfs.value > this.cost) {
            astolfps.value += this.aps;
            this.amount += 1;
            if (this.amount % 10 ==1) {
                this.cost *=  Math.pow(this.ascension ^ 2);
            }
        }
        
    }
}
class helptao {
    constructor(name, value) {
        this.name = name;
        this.value= value;
    }
    decrypt() {
        return window.atob(localStorage.getItem(this.name));
    }
    store() {
        localStorage.setItem(this.name, window.btoa(this.value));
    }
} 
var exptonext = new helptao("uwuwuwu", 50);
var ascension = new helptao("lmaoimaginereadingnames", 1);
var exp = new helptao("awmdkawa", 0);
var level = new helptao("awkmdkwad", 1);
var astolfs = new helptao("awdwadmkadw", 0);
var clickstr = new helptao("adawdiwad", 1);
var astolfps = new helptao("jjamwdakm", 0);

vars = [exptonext, ascension, exp, level, astolfs, clickstr, astolfps];

for (var obj in vars) {
    if (localStorage.getItem(vars[obj].name) == null) {
        vars[obj].store();
    } else {
        vars[obj].value = Number(vars[obj].decrypt());
    }
}

function didiask() {
    document.getElementById("tap").style.height = '290px';
    document.getElementById("tap").style.paddingLeft = "5px";
    document.getElementById("tap").style.paddingTop = "5px";
}
function when() {
    document.getElementById("tap").style.height = '300px';
    document.getElementById("tap").style.paddingLeft = "0px";
    document.getElementById("tap").style.paddingTop = "0px";
}
function clicky() {
    astolfs.value += clickstr.value;
    exp.value += clickstr.value;
    if (exp.value >= exptonext.value) {
        level.value += 1;
        exp.value = 0;
        exptonext.value = 50 * Math.pow(2.5*ascension.value, level.value);
        clickstr.value += 1 * Math.pow(ascension.value, 2);
    }
    document.getElementById("organs").style = "width: " + 100 * exp.value/exptonext.value + "%";
    update();
    
    
}
function update() {
    document.getElementById("apc").innerHTML = String(clickstr.value) + " Astolf Per Click";
    if (astolfs.value < 1000) {
        document.getElementById("con").innerHTML = String(Math.floor(astolfs.value)) + " Astolf";
    }
    document.getElementById("poop").innerHTML = "Level " + String(level.value);
    for (var obj in vars) {
        vars[obj].store()
    }
}