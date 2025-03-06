document.onreadystatechange = function(){
    var toggleMenu = function(){//função para abrir e fechar o menu
        var body = document.getElementsByTagName('body')[0];
        var listaDeClasses = body.classList;//obterlista de clases
        listaDeClasses.toggle('navAberto');//se tiver a classe navAberto tirar, caso contrario adicionar
    };
    document.getElementById('menu-btn').onclick = toggleMenu;//botao menu
    document.getElementById('auxiliar-menu').onclick = toggleMenu;//elemento auxiliar para fechar quando o usuario clickar fora da nav (mobile e telas de tamanho médio)
}
