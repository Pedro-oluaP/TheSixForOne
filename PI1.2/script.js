
const cards = document.querySelectorAll('.card'); 
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup'); 


popup.style.display = 'none';


cards.forEach(card => {
    card.addEventListener('click', () => {
        const content = card.getAttribute('data-popup-content'); 
        popupText.textContent = content; 
        popup.style.display = 'flex'; 
    });
});


closePopup.addEventListener('click', (event) => {
    event.stopPropagation(); 
    popup.style.display = 'none'; 
});


window.addEventListener('click', event => {
    if (event.target === popup) { 
        popup.style.display = 'none'; 
    }
});


const cardInfos = {
    0: {
    title: 'Consultoria',
    text: 'Detalhes sobre Consultoria:',
    infor: 'Nossa consultoria digital é voltada para ajudar você a alcançar resultados concretos no mundo online. Trabalhamos juntos para entender suas necessidades, identificar oportunidades e criar estratégias personalizadas. O foco é melhorar sua presença digital, seja através de redes sociais, site, e-commerce ou ferramentas digitais.'
    },
    1: {
    title: 'Marketing Digital',
    text: 'Detalhes sobre Marketing Digital:',
    infor: 'Na era digital, a presença online é essencial para qualquer negócio. Nossa expertise em Marketing Digital Avançado ajuda empresas a aumentar sua visibilidade, atrair o público-alvo e converter leads em clientes fiéis. Utilizamos estratégias de SEO, marketing de conteúdo, gestão de redes sociais, campanhas de anúncios pagos e análise de dados para maximizar o retorno sobre o investimento (ROI) e acelerar o crescimento do seu negócio.'
    },
    2: {
    title: 'Gestão Financeira',
    text: 'Detalhes sobre Gestão Financeira:',
    infor: 'Acreditamos que uma  gestão financeira bem estruturado é a base para o sucesso de qualquer negócio. Desenvolvemos planos estratégicos sob medida que alinham os objetivos da empresa com as tendências do mercado, antecipando riscos e aproveitando oportunidades. Nossos especialistas colaboram com você para definir metas claras, estabelecer prioridades e criar um roteiro de crescimento que garante resultados sólidos a longo prazo.'
    }
};
const popupText = document.querySelector('#popupText');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
    const cardInfo = cardInfos[index];
    popupText.innerHTML = ` 
        <span style="font-size: 30px;">${cardInfo.text}</span>
        <p>${cardInfo.infor}</p>`;
    popup.classList.add('active');
    });
});