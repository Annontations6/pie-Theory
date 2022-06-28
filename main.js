var rho = new OmegaNum(0)

var getTheta = (level) => new OmegaNum(level * 2)

theta = new Theta();

function Theta() {
    this.level = 0;
    this.price = new OmegaNum(25)
}

setInterval(() => {
    rho = rho.times(getTheta(theta.level)).add(1)
    document.getElementById("rho").innerHTML = "You Have " + rho + " Rho"
}, 100);