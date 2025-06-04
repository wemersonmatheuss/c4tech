// Mapeando o botão de serviços
const buttonServices = document.querySelector("#button-services")

// Mapeando o input de enviar email
const sendEmail = document.querySelector("#send-email")

// numero de telefone do WhatsApp
const phoneNumber = "5531983429640"; 

// Mapeando o icone de menu no mobile
const iconMenu = document.querySelector(".icon-menu-mobile")

// Mapeando os links do menu
const menuLinks = document.querySelector(".social-links-mobile");

// Mapeando a imagem de fechar o menu
const closeMenu = document.querySelector(".x-mobile");

// MApeando cada link do menu
const menuLinkA = document.getElementsByClassName("link-mobile-clicado");



// Abre o WhatsApp com o número e a mensagem pré-definidos
function openWhatsapp() {
    const message = "Olá, gostaria de mais informações sobre os serviços."; // Mensagem pré-definida
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
}


// Evento de clique que leva o botao de serviços para a seção de serviços
buttonServices.addEventListener("click", function() {   
    window.location.href = "#services"
})

menuLinks.style.display = "none"; // Esconde os links do menu mobile inicialmente
iconMenu.addEventListener("click", function() {
    if (menuLinks.style.display === "none") {
        menuLinks.style.display = "block";
        iconMenu.style.display = "none"; // Esconde o ícone de menu
    }else {
        menuLinks.style.display = "none";
    }
})

// Evento de clique para fechar o menu mobile
closeMenu.addEventListener("click", function() {
   if(menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
        iconMenu.style.display = "block"; // Mostra o ícone de menu novamente
    }
})

// Adiciona o evento de clique para cada link do menu
for (let i = 0; i < menuLinkA.length; i++) {
        menuLinkA[i].addEventListener("click", function() {
            menuLinks.style.display = "none"; // Esconde o menu ao clicar no link
            iconMenu.style.display = "block"; // Mostra o ícone de menu novamente
        });
}