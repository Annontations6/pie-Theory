var rho = new OmegaNum(0)

var getTheta = (level) => new OmegaNum(level * 2)

theta = new Theta();

function Theta() {
    this.level = 0;
    this.price = new OmegaNum(25)
}

document.getElementById("cost1").onclick = () => {
    if (rho.gte(theta.price) == true) {
        document.getElementById("cost1").innerHTML = "Cost:" + theta.price + "(&theta; = " + getTheta(theta.level) + ")"
    }
}

setInterval(() => {
    rho = rho.add(new OmegaNum(1).times(getTheta(theta.level).add(1)))
    document.getElementById("rho").innerHTML = "You Have " + rho + " Rho"
}, 100);