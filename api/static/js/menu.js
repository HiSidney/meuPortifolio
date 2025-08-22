const btnOpenMenu = document.getElementById('btn-open-menu');
const menuMobal = document.getElementById('menu-mobal');
const overlayMenu = document.getElementById('overlay-menu');

btnOpenMenu.addEventListener('click', () => {
    menuMobal.classList.add('open-menu');
});

menuMobal.addEventListener('click', () => {
    menuMobal.classList.remove('open-menu');
});

overlayMenu.addEventListener('click', () => {
    menuMobal.classList.remove('open-menu');
});



// Função para manipular o envio do formulário via AJAX
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário
    
    // Obtém os dados do formulário
    var formData = new FormData(this);
    
    // Envia os dados via AJAX
    fetch('https://formspree.io/f/xdknjrbo', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            console.log('success');
            // Exibe uma mensagem de sucesso
            Swal.fire({
                title: "Sucesso!",
                text: "Mensagem enviada.",
                icon: "success"
              });

            document.getElementById('contact-form').reset();  // Limpa o formulário
        } else {
            console.log('error');

            // Exibe uma mensagem de erro
            Swal.fire({
                title: "Erro!",
                text: "Mensagem não enviada.",
                icon: "error"
              });
        }

    }).catch(function(error) {
        console.log('error2');

        // Exibe uma mensagem de erro em caso de falha na requisição
        Swal.fire({
                title: "Erro!",
                text: "Mensagem não enviada.",
                icon: "error"
              });
    });
});