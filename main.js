var rho = new OmegaNum(0)

var getTheta = (level) => new OmegaNum(level * 2)
var getDelta = (level) => new OmegaNum(level * 5)

theta = new Theta();
delta = new Delta();

function Theta() {
    this.level = 0;
    this.price = new OmegaNum(25)
}

function Delta() {
    this.level = 0;
    this.price = new OmegaNum(600)
}

document.getElementById("cost1").onclick = () => {
    if (rho.gte(theta.price) == true) {
        rho = rho.sub(theta.price)
        theta.price = theta.price.mul(1.3)
        theta.level += 1
        document.getElementById("cost1").innerHTML = "Cost:" + theta.price + "(&theta; = " + getTheta(theta.level) + ")"
    }
}

document.getElementById("cost2").onclick = () => {
    if (rho.gte(delta.price) == true) {
        rho = rho.sub(delta.price)
        delta.price = delta.price.mul(1.3)
        delta.level += 1
        document.getElementById("cost2").innerHTML = "Cost:" + theta.price + "(&delta; = " + getTheta(theta.level) + ")"
    }
}


setInterval(() => {
    rho = rho.add(new OmegaNum(1).times(getTheta(theta.level).times(getDelta(delta.level).add(1)).add(1)))
    document.getElementById("rho").innerHTML = "You Have " + rho + " Rho"
}, 100);