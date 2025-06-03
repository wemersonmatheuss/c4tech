// Mapeando o botão de serviços
const buttonServices = document.querySelector("#button-services")



// Abre o WhatsApp com o número e a mensagem pré-definidos
function openWhatsapp() {
    const phoneNumber = "5531983429640"; // Substitua pelo número de telefone desejado
    const message = "Olá, gostaria de mais informações sobre os serviços."; // Mensagem pré-definida
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
}


// Evento de clique que leva o botao de serviços para a seção de serviços
buttonServices.addEventListener("click", function() {   
    window.location.href = "#services"
})

