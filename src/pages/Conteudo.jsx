import Cabecalho from '../components/Cabecalho/Cabecalho'
import Sobremim from '../components/Sobremim/Sobremim'
import Titulo from '../components/Titulo/Titulo'
import Imagem from '../components/Imagem/Imagem'
import Paragrafo from '../components/Paragrafo/Paragrafo'
import Rodape from '../components/Rodape/Rodape'
import './conteudo-style.css'

function Conteudo() {
  return(
        <>
            <Cabecalho title="Meu diário na Reprograma"/>
            <Sobremim
                link="https://media-exp1.licdn.com/dms/image/C4D03AQFt2IBTteXMmA/profile-displayphoto-shrink_800_800/0/1651254811384?e=1663804800&v=beta&t=6VrueFlgXRYK48fXjvutpqR3gkVMx1QXR4LWs7iwfRk"
                alt=""
                title="Silvana Oliveira" p="Aluna Front-End {Reprograma}"
            />
            <Titulo text="Git"/>
            <Imagem 
                link="https://i.gifer.com/Jdy.gif" 
                alt=""
            />
            <Paragrafo
            >O Git é um Sistema de Controle de Versionamento de código que evita que alterações realizadas em um projeto modifiquem o código-fonte. Logo, permite que os arquivos sejam alterados de forma simultânea, por inúmeras pessoas, sem a preocupação que essas alterações sejam sobrescritas umas pelas outras. É uma solução que está diretamente ligada à área de desenvolvimento e que foi criada para facilitar a vida dos profissionais da área tech.</Paragrafo>

            <Titulo text="Tags HTML"/>
            <Imagem 
                link="https://i.pinimg.com/originals/17/fb/2c/17fb2c462c979367341c3265d65a0952.gif" 
                alt="Imagem com gif de um boneco sapo marionete tomando uma xícara de chá"
            />
            <Paragrafo>As tags são usadas para informar ao navegador a estrutura do site, ou seja, quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página. A principal característica das tags é estarem sempre dentro dos sinais de chevron sinal de “maior que” e “menor que”. Além disso, uma mesma tag pode receber um ou mais atributos, que possuirá um valor que modifica sua estrutura ou funcionalidade.</Paragrafo>

            <Titulo text="Mobile First"/>
            <Imagem 
                link="https://64.media.tumblr.com/38412b4efcdef0e5c7214a07dc470dc9/71f3543937375db0-2a/s540x810/951cd0a0f238188582f90301c86de3d735e2888b.gifv" 
                alt="Gif animado com bonecos tipo marionetes sendo, sapinho, vaquinha e um boizinho felizes"
            />
            <Paragrafo>Mobile First é um conceito aplicado em projetos web onde o foco inicial da arquitetura e desenvolvimento é direcionado aos dispositivos móveis e em seguida para os desktops. Em projetos web de uma forma geral o foco precisa ser no usuário para que ele tenha a melhor experiência possível e cumpra sua missão no website.Quando projetamos primeiramente para mobile somos forçados a sermos sucintos e fazer uso da melhor maneira dos poucos espaços disponíveis nas telas dos dispositivos móveis e auxiliar os usuários a realizarem suas desejadas tarefas.</Paragrafo>

            <Titulo text="JavaScript"/>
            <Imagem 
                link="https://c.tenor.com/1tPeLb2e7sQAAAAC/kermit-frog.gif" 
                alt="A imagem é um gif com imagem de marionetes e um boneco sapinho triste"
            />
            <Paragrafo>JavaScript é uma linguagem de programação interpretada. Foi originalmente implementada como parte dos navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário sem a necessidade deste script passar pelo servidor, controlando o navegador, realizando comunicação assíncrona e alterando o conteúdo do documento exibido. Sendo assim, o código JavaScript nos permite tornar uma página mais dinâmica, respondendo a interações do usuário. A sintaxe, bastante parecida com outras linguagens e muito intuitiva, facilita o aprendizado e utilização.</Paragrafo>
            <Rodape title="Desenvolvido por: Silvana Oliveira"/>
        </>
   )
}

export default Conteudo