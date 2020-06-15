//diferencia de años
export const years = year => new Date().getFullYear() - year ;

//total a pagar por tipo de auto
export const baseMarca = marca => {
    let incremento;

    switch(marca){

        case 'europeo':
            incremento = 1.30;
            break;

        case 'americano':
            incremento = 1.15;
            break;

        case 'asiatico':
            incremento = 1.05;
            break;

        default:
            break;
    }

    return incremento;
};

//incremento segun el tipo de plan
export const basePlan = plan => {
    let incremento;

    switch(plan) {

        case 'completo':
            incremento = 1.50;
            break;
        
        case 'basico':
            incremento = 1.20;
            break;
        
        default:
            break;
    }

    return incremento;

    //return (plan === 'basico) ? 1.20 : 1.50;
};