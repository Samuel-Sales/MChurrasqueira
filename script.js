document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();

    const homens = parseInt(document.getElementById('homens').value.trim());
    const mulheres = parseInt(document.getElementById('mulheres').value.trim());
    const criancas = parseInt(document.getElementById('criancas').value.trim());

    let carneBovinaHomens = 500;
    let carneBovinaMulheres = 300;
    let carneBovinacriancas = 200;

    let frangoHomens = 200;
    let frangoMulheres = 200;
    let frangoCriancas = 100;

    let LinguicaHomens = 200;
    let LinguicaMulheres = 200;
    let LinguicaCriancas = 200;

    let refrigeranteHomens = 300;
    let refrigeranteMulheres = 400;
    let refrigeranteCriancas = 200;

    let cervejaHomens = 800;
    let cervejaMulheres = 500;
    let cervejaCriancas = 0;

    
    let totalCarneBovina = (homens * carneBovinaHomens) + (mulheres * carneBovinaMulheres) + (criancas * carneBovinacriancas);
    let totalDeFrango = (homens * frangoHomens) + (mulheres * frangoMulheres) + (criancas * frangoCriancas);
    let totalDeLinguica = (homens * LinguicaHomens) + (mulheres * LinguicaMulheres) + (criancas * LinguicaCriancas);
    let totalDeRefrigerante = (homens * refrigeranteHomens) + (mulheres * refrigeranteMulheres) + (criancas * refrigeranteCriancas);
    let totalDeCerveja = (homens * cervejaHomens) + (mulheres * cervejaMulheres) + (criancas * cervejaCriancas);

    if (!isNaN(homens) && !isNaN(mulheres) && !isNaN(criancas)) {
        const carneBovina = document.createElement('li');
        carneBovina.textContent = `${totalCarneBovina}kg de carne bovina`;

        const frango = document.createElement('li');
        frango.textContent = `${totalDeFrango}kg de frango`;

        const linguica = document.createElement('li');
        linguica.textContent = `${totalDeLinguica}kg de linguiça`;

        const refrigerante = document.createElement('li');
        refrigerante.textContent = `${totalDeRefrigerante}L de refrigerante`;

        const cerveja = document.createElement('li');
        cerveja.textContent = `${totalDeCerveja}L de cerveja`;

        document.getElementById('lista').appendChild(carneBovina);
        document.getElementById('lista').appendChild(frango);
        document.getElementById('lista').appendChild(linguica);
        document.getElementById('lista').appendChild(refrigerante);
        document.getElementById('lista').appendChild(cerveja);

        document.getElementById('homens').value = '';
        document.getElementById('mulheres').value = '';
        document.getElementById('criancas').value = '';
    }else {
        alert('Por favor, preencha todos os campos.');
    }

});

// `Homens: ${homens}, Mulheres: ${mulheres}, Criancas: ${criancas}`