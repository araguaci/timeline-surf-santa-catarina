const header = 'Linha do Tempo de eventos importantes relacionados ao surfe em Santa Catarina <br />História da Evolução do Surfe no Estado e Escolas de Surf FECEESS / ACES';
const footer = 'F.E.C.E.E.S.S. ☆ A.C.E.S. SC - Unindo talentos e fortalecendo a educação e o esporte em Santa Catarina';
/* https://faicons.com/ 
    shield
    trophy
    safari
    rebel
    recycle
    globea
    anchor
    bolt
    https://surfguru.com.br/conteudo/costao-pro-2022-acontecera-nos-dias-11-a-13-de-marco-na-praia-do-santinho-2022-02-17-27642.html
    https://cbsurf.org.br/
    https://www.canalsurfstorm.com/
    https://maurioborges.blogspot.com/2011/05/teco-na-tela.html
    https://www.youtube.com/watch?v=sATEz4yR2X0

*/
const entries = [{
        id: 'surf',
        categories: ['surf', 'santinho'],
        color: 'violet',
        faicon: 'female',
        datetime: '2022-02-13',
        title: '2022 - Tainá Hinckel / Mateus Herdy',
        image: {
            link: 'https://www.instagram.com/p/CbEE3iPMlBA/',
            src: '/img/taina-hinckel.jpg',
            alt: 'A primeira campeã catarinense profissional da história',
            caption: 'Tainá Hinckel',
        },
        body: "<li>A primeira campeã catarinense profissional da história, Tainá Hinckel que é campeã sul-americana Pro Junior Sub-18 da WSL Latin America em 2016 e 2019, garante o inédito título catarinense profissional de 2021 aqui na Praia do Santinho.</li><li>MATEUS HERDY, vencedor do COSTÃO SURF PRO e novo Campeão Catarinense de Surf Profissional, temporada 2021</li>",
        links: [{
            href: 'https://www.instagram.com/p/CbEE3iPMlBA/',
            linkText: 'FECASURF - Tainá Hinckel, a primeira campeã catarinense profissional da história',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'joaquina'],
        color: 'grey',
        faicon: 'anchor',
        datetime: '2021-08-21',
        title: '2021 - Adeus ao Samurai',
        image: {
            link: 'https://www.waves.com.br/variedades/marcelo-tonon-luto-na-joaquina/',
            src: 'https://www.waves.com.br/wp-content/uploads/2021/07/mar.jpg',
            alt: 'Marcelo Tonon - Luto na Joaquina | Waves',
            caption: 'Samurai',
        },
        body: "Retrospectiva 2021 - Adeus ao Samurai | Waves<br />Amigos e familiares de Marcelo Tonon, surfista catarinense morto enquanto surfava, celebram a memória do Samurai da praia da Joaquina (SC)",
        links: [{
            href: 'https://www.waves.com.br/variedades/marcelo-tonon-luto-na-joaquina/',
            linkText: 'Marcelo Tonon - Luto na Joaquina | Waves',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2020-12-21',
        title: '2020 - Ian Gouveia',
        body: "CAMPEÃO PRO - Ian Gouveia (PE) em 1 etapa virtual pela internet",
        image: {
            link: 'https://www.canalsurfstorm.com/post/ian-gouveia-e-o-campeao-nacional-masculino-do-cbsurf-pro-tour',
            src: 'https://static.wixstatic.com/media/6e45c0_c7b7f8ec66af4a828969ee6232c8009a~mv2.jpg/v1/fill/w_360,h_249,al_c,q_90/6e45c0_c7b7f8ec66af4a828969ee6232c8009a~mv2.webp',
            alt: 'Ian Gouveia é campeão do circuito brasileiro de surf 2020',
            caption: 'Canal Surf Storm',
        },
        links: [{
            href: 'https://www.waves.com.br/videos/clips/ian-gouveia-altos-e-baixos-de-2020/',
            linkText: 'Altos e baixos de 2020'
        }, {
            href: 'https://www.canalsurfstorm.com/post/ian-gouveia-e-o-campeao-nacional-masculino-do-cbsurf-pro-tour',
            linkText: 'Ian Gouveia é campeão do circuito brasileiro de surf 2020',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'joaquina'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2019-03-24',
        title: '2019 - Luan Wood FECASURF',
        body: "CAMPEÃO PRO - Luan Wood (SC)",
        image: {
            link: 'https://www.waves.com.br/noticias/competicao/profissional/2019-wood-vence-na-joaca/',
            src: 'https://www.waves.com.br/wp-content/uploads/2019/03/Luan-Wood-campea%CC%83o-do-Floripa-Surf-Pro-2019.-Foto-Basilio-Ruy-P.P07-696x435.jpg',
            alt: 'Catarinense Profissional - Wood vence na Joaca',
            caption: 'Waves',
        },
        links: [{
            href: 'https://www.waves.com.br/noticias/competicao/profissional/2019-wood-vence-na-joaca/',
            linkText: 'Wood Vence Na Joaca',
        }, {
            href: 'https://surfguru.com.br/conteudo/luan-wood-vence-o-floripa-surf-pro-na-joaquina-2019-03-25-13533.html',
            linkText: 'Luan Wood vence o Floripa Surf Pro na Joaquina - Competições - Comunidade - Surfguru',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'joaquina'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2018-12-17',
        title: '2018 - Uriel Sposaro (SC) FECASURF',
        image: {
            link: 'https://www.nsctotal.com.br/noticias/uriel-sposaro-conquista-o-titulo-catarinense-de-surfe-profissional',
            src: 'https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/uriel_sposaro.jpg?m44faYg5Pfd4QNWy8q6CrNxsAZ__7HwX&itok=D6hCksH2',
            alt: 'Uriel Sposaro conquista o título catarinense de surfe profissional',
            caption: 'Uriel Sposaro',
        },
        body: "CAMPEÃO PRO - Uriel Sposaro (SC)",
        links: [{
            href: 'https://www.nsctotal.com.br/noticias/uriel-sposaro-conquista-o-titulo-catarinense-de-surfe-profissional',
            linkText: 'Surfista levou a melhor no Circuito ASJ Ocean Pacific, na Joaquina',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'matadeiro'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2017-12-12',
        title: '2017 - Caetano Vargas (PR) FECASURF',
        image: {
            link: 'https://www.diariodacidade.com.br/caetano-vargas-fatura-categoria-pro-no-circuito-asj-op-ocean-pacific-2017/',
            src: 'https://www.diariodacidade.com.br/wp-content/uploads/2017/12/Caetano-Vargas-fatura-categoria-Pro-no-Circuito-ASJ-OP-Ocean-Pacific-2017.jpg',
            alt: 'Caetano Vargas fatura categoria Pro no Circuito ASJ OP Ocean Pacific 2017',
            caption: 'Caetano Vargas',
        },
        body: "<li>BICAMPEÃO PRO - Caetano Vargas (PR)</li><li>WSL - Tomas Hermes é vice-campeão do QS 10000 US Open</li>",
        links: [{
            href: 'https://www.diariodacidade.com.br/caetano-vargas-fatura-categoria-pro-no-circuito-asj-op-ocean-pacific-2017/',
            linkText: 'Caetano Vargas fatura categoria Pro no Circuito ASJ OP Ocean Pacific 2017',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'matadeiro'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2016-12-22',
        title: '2016 - Caetano Vargas (PR) FECASURF',
        image: {
            link: 'https://surftoday.com.br/caetano-vargas-e-o-campeao-catarinense-profissional-de-2016/',
            src: 'https://surftoday.com.br/wp-content/uploads/2016/12/exibicao-302518-670815-caetanovargas1-felipecorbettacapa-2016-12-21-10-48-53.jpg',
            alt: 'Caetano Vargas é o campeão catarinense profissional de 2016',
            caption: 'Caetano Vargas',
        },
        body: "CAMPEÃO PRO - Caetano Vargas (PR)",
        links: [{
            href: 'https://surftoday.com.br/caetano-vargas-e-o-campeao-catarinense-profissional-de-2016/',
            linkText: 'Caetano Vargas é o campeão catarinense profissional de 2016',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'oceano'],
        color: 'green',
        faicon: 'leaf',
        datetime: '2015-12-12',
        title: '2015 - André Moi (SC) FECASURF',
        image: {
            link: 'https://www.oceano.joinville.br/keep-the-ocean-blue/o-projeto/',
            src: 'https://www.oceano.joinville.br/img/conteudos/11-kob-capa.jpg',
            alt: 'KEEP THE OCEAN BLUE',
            caption: 'KEEP THE OCEAN BLUE',
        },
        body: "<li>André Moi (SC) - CAMPEÃO PRO</li><li>Nasce o projeto KEEP THE OCEAN BLUE desenvolvido pela @OceanoSurfwear. O principal objetivo é preservar a natureza e a limpeza das nossas praias</li>",
        links: [{
            href: 'https://www.oceano.joinville.br/keep-the-ocean-blue/o-projeto/',
            linkText: 'Nós acreditamos e praticamos a preservação. Isso faz parte do nosso infinito. E é nessa vontade infinita de cada um que podemos ir mais fundo para fazer a diferença.',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'açores'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2013-12-15',
        title: '2013 - Tomas Hermes (SC) FECASURF',
        image: {
            link: 'http://surfbox.com.br/2013/09/acores-prime-tomas-hermes-vence-portugal/',
            src: 'http://surfbox.com.br/wp-content/uploads/2013/09/tomas_capa.jpg',
            alt: 'Açores Prime – Tomas Hermes vence em Portugal',
            caption: 'Tomas Hermes',
        },
        body: "<li>Tomas Hermes catarinensede Barra Velha, conquista o título , no Oakley Pro 2013</li><li>David do Carmo é campeão brasileiro de surfe</li>",
        links: [{
            href: 'http://surfbox.com.br/2013/09/acores-prime-tomas-hermes-vence-portugal/',
            linkText: 'Açores Prime – Tomas Hermes vence em Portugal',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'camboriu'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2012-12-08',
        title: '2012 - Yuri Gonçalves (SC) FECASURF',
        image: {
            link: 'https://www.youtube.com/watch?v=FElhOiRgGvg',
            src: 'https://i.ytimg.com/vi/FElhOiRgGvg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA47AUCK_R8koHnZj7KurBRa7YTXA',
            alt: 'Um filme da Trator Filmes. Dir. Alex Mirand',
            caption: 'Cut Back / Teco Padaratz',
        },
        body: "<li>Oakley Pro 2012 - Yuri Gonçalves é Campeão Catarinense de Surfe Profissional 2012</li><li>Lançado filme documentário: Cut Back / Teco Padaratz. Um filme da Trator Filmes. Dir. Alex Miranda</li>",
        links: [{
            href: 'http://www.portaldailha.com.br/noticias/lernoticia.php?id=15613',
            linkText: 'Praia Central de Balneário Camboriú',
        }, {
            href: 'https://www.youtube.com/watch?v=FElhOiRgGvg',
            linkText: 'Cut Back / Teco Padaratz. Um filme da Trator Filmes. Dir. Alex Miranda',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'imbituba'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2011-12-12',
        title: '2011 - Tiago Bianchini (SC) FECASURF',
        image: {
            link: 'http://www.pugasurfshop.com/blog/tiago-bianchini-vence-o-oakley-santa-catarina-surf-pro-na-praia-da-joaquina',
            src: 'http://www.pugasurfshop.com/blog/pugasurfshop/blog/wp-content/uploads/2011/03/177906_622x415-300x200.jpg',
            alt: 'Tiago Bianchini vence o OAKLEY SANTA CATARINA SURF PRO na Praia da Joaquina',
            caption: 'Tiago Bianchini',
        },
        body: "<li>Tiago Bianchini é o campeão Circuito Oakley Santa Catarina Surf Pro 2011</li><li>Comemoração da velha geração das ondas aos 35 anos do primeiro campeonato</li>",
        links: [{
            href: 'http://www.pugasurfshop.com/blog/tiago-bianchini-vence-o-oakley-santa-catarina-surf-pro-na-praia-da-joaquina',
            linkText: 'Tiago Bianchini vence o OAKLEY SANTA CATARINA SURF PRO na Praia da Joaquina',
        }, {
            href: 'https://ndmais.com.br/surfe/a-velha-geracao-das-ondas-comemora-os-35-anos-do-primeiro-campeonato/',
            linkText: 'A velha geração das ondas comemora os 35 anos do primeiro campeonato',
        }],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2010-12-12',
        title: '2010 - Tomas Hermes (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Tomas Hermes',
        },
        body: "<li>Tomas Hermes (SC) - CAMPEÃO FECASURF</li><li>Na última edição da etapa mundial em Santa Catarina, o potiguar Jadson André foi o campeão, derrotando Kelly Slater na final, na Praia da Vila, em Imbituba</li><li>Juliana Quint, vice-campeã brasileira em 2010</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2009-12-12',
        title: '2009 - Tânio Barreto (AL) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Tânio Barreto',
        },
        body: "<li>Tânio Barreto (AL) - CAMPEÃO FECASURF</li><li>Parceria ACES com Ilhas do Brasil ([site Ilhas do Brasil](http://www.ilhasdobrasil.org.br/))</li><li>UDESC [(portal UDESC](http://www.udesc.br/))</li><li>Título WCT - Neco Padaratz (SC-BRA)</li><li>Gabriel Medina, o fenômeno, vence, aos 15 anos, sua primeira competição profissional internacional, uma etapa do WQS na Praia Mole</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2008-12-12',
        title: '2008 - Marco Polo (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Marco Polo',
        },
        body: "<li>Marco Polo (SC) - CAMPEÃO FECASURF BICAMPEÃO</li><li>CREF Reconhece professores de surf ([portal CREF-SC](http://www.crefsc.org.br/))</li><li>Grande enchente em Santa Catarina</li><li>Jaqueline Silva campeã Surf ECO Festival</li><li>O 2º título catarinense de Marco Polo</li><li>Título WQS - Jean da Silva (SC-BRA)</li><li>Título WQS - William Cardoso (SC-BRA)</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2007-12-12',
        title: '2007 - Marco Polo (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Marco Polo',
        },
        body: "<li>Marco Polo (SC) - CAMPEÃO FECASURF</li><li>São Paulo fala de Floripa</li><li>Parceria da ACES com Empresas privadas (VIVO)</li><li>Escola da Barra e Tetra Campeã Surf Estudantil</li><li>Jaqueline Silva Bi Campeã Mundial WQS</li><li>Fabrício Caldas da Escola de Surf Costão do Santinho nomeado Coordenador do IIPDROG (Instituto Internacional de Prevenção as Drogas) em Santa Catarina</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2006-12-12',
        title: '2006 - Diego Rosa (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Diego Rosa',
        },
        body: "<li>Diego Rosa (SC) - CAMPEÃO FECASURF BICAMPEÃO</li><li>Primeiro Campeonato de Tow in no Brasil</li><li>Maya Gabeira Campeã Mundial</li><li>Escola da Barra e Tri Campeã Surf Estudantil</li><li>Título WQS - Alejo Muniz (SC-BRA)</li><li>Título WQS - Jean da Silva (SC-BRA)</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>Costão do Santinho recebe primeira etapa de um QS feminino no Brasil, vencido pela paraibana Diana Cristina, que na época, se tornou a mais jovem campeã de um evento do Circuito Mundial com apenas 15 anos</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2005-12-12',
        title: '2005 - Jean da Silva (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Jean da Silva',
        },
        body: "<li>Jean da Silva (SC) - CAMPEÃO FECASURF</li><li>Criação da Escola Paraiso do Surf (Praia dos Açores)</li><li>Escola da Barra e Bi Campeã Surf Estudantil</li><li>Início do Projeto Surf Social com convênio entre a Escola Pública Maria Tomázia Coelho e a Escola de Surf Costão do Santinho</li><li>A Diretoria de Marketing da ACES capta R$ 80.000.00 junto ao diretor de Mk Carlos Bonneto para realizar um mega evento intitulado Surf no Beiramar durante todo o verão no shopping Beiramar em Florianópolis, lançando a nova diretoria, propostas da ACES e divulgando as escolas de surf credenciadas.</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2004-12-12',
        title: '2004 - Diego Rosa (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Diego Rosa',
        },
        body: "<li>Diego Rosa (SC) - CAMPEÃO FECASURF</li><li>Furacão Catarina</li><li>De da Barra Surfa Maior Onda no Brasil em Santa Catarina (Praia do Cardoso, Laguna)</li><li>Escola da Barra Campea Surf Estudantil</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>Acontece a primeira Clínica de Surf realizada pela Escola de Surf Costão do Santinho no Costão do Santinho Resort (mega evento)</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2003-12-12',
        title: '2003 - Raphael Becker (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Raphael Becker',
        },
        body: "<li>Raphael Becker (SC) - CAMPEÃO FECASURF</li><li>Escola de Surf Itarare</li><li>Festival ACES - Primeiro encontro das Escolas de Surf (Josue e Valeria)</li><li>Primeiro apoio governamental - Projeto Social Escola da Barra da Lagoa</li><li>Primeiro Curso de Instrutores de Surf ACES</li><li>Volta do Mundial WCT para Santa Catarina</li><li>Fundação Escola de Surf Vilahine Surf Club - escola de Surf 100% Feminina na Praia da Vila em Imbituba</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>Título WQS - Neco Padaratz (SC-BRA)</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2002-12-12',
        title: '2002 - Neco Padaratz (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Neco Padaratz',
        },
        body: "<li>Neco Padaratz (SC) - CAMPEÃO FECASURF</li><li>1º. Guga Arruda (SC) - CAMPEÃO FECASURF / 3ª SuperTrials</li><li>2º. Guga Arruda (SC) - CAMPEÃO FECASURF / WQS</li><li>Criação da Escola de Surf da Barra da Lagoa</li><li>Nasce o Surf Estudantil</li><li>Jaqueline Silva Campeã Mundial WCT</li><li>Criação da ACES</li><li>5ª etapa do Super Surf</li><li>7ª etapa do Super Trials</li><li>Jaqueline Silva Campeã Eco Surf (SC-BRA)</li><li>Título WCT - Neco Padaratz (SC-BRA)</li><li>Título WQS Flávio Padaratz (SC-BRA)</li><li>WQS 02</li><li>Reef Brazil Classic</li><li>WQS 39</li><li>Petrobras Open Surf</li><li>WQS 43</li><li>Onbongo Pro Surfing</li><li>Escola de surf Costão do Santinho firma primeiro Intercâmbio Luso Brasileiro entre Escolas de Surf com o Surf Clube de Viana na cidade de Viana do Castelo ao norte de Portugal</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2001-12-12',
        title: '2001 - Fabio Carvalho (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Fabio Carvalho',
        },
        body: "<li>Fabio Carvalho (SC) - CAMPEÃO FECASURF BICAMPEÃO</li><li>Teco Bi Campeão Mundial WQS</li><li>Jaqueline Silva Campeã Mundial WQS</li><li>Brasil Campeão Mundial de surf por equipes</li><li>Projeto Social Surfando no Siri (Ingleses)</li><li>MARBRAS (Paulão) Começa em Floripa ([veja o projeto](https://docs.google.com/fileview?id=0B1BPIIId28AtZmQ3ZWNmZDgtZGQ0NC00MDNlLTlkNjktZDk5ZjgxZDQyMjY3&hl=pt_BR))</li><li>6ª etapa do Super Surf</li><li>Projeto Social Surfando no Siri / MARBRAS</li><li>Título WQS - James Santos (SC-BRA)</li><li>WQS 04</li><li>Reef Brazil Classic</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2000-12-12',
        title: '2000 - James Santos (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'James Santos',
        },
        body: "<li>James Santos (SC) - CAMPEÃO FECASURF BICAMPEÃO</li><li>Praia Mole Surf Clube</li><li>Onda Tropical</li><li>Ilha Surf Escola (Praia Brava)</li><li>Projeto Social Escola da Lagoa - Municipio</li><li>Santa Catarina Campeã Brasileira de surf por equipes</li><li>Campeonato Mundial de Longboard Oxbow na Praia do Rosa em Imbituba. Campeão Beau Young da Australia (filho do Nat Young)</li><li>WQS 02</li><li>Reef Brazil Classic</li><li>WQS 27</li><li>Maresia Surf Floripa</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1999-12-12',
        title: '1999 - James Santos (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'James Santos',
        },
        body: "<li>Guga Arruda (SC) -  BICAMPEÃO FECASURF</li><li>Campeonato No Fear de Ondas Grandes, na Praia da Vila. Quem venceu foi o Fabio Carvalho, 2o. Dê da Barra. 3o. Guilherme Ferreira e 4o. Pedro Muller.</li><li>Salva Surf Resgate</li><li>Escola de Surf dos Ingleses - Barriga</li><li>Santa Catarina é vice-campeã no Brasileiro de surf por equipes</li><li>Título WCT - Neco Padaratz (SC-BRA)</li><li>Título WQS - James Santos (SC-BRA)</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>[Projeto Marbras - Paulão](https://docs.google.com/fileview?id=0B1BPIIId28AtZmQ3ZWNmZDgtZGQ0NC00MDNlLTlkNjktZDk5ZjgxZDQyMjY3&hl=pt_BR)</li><li>WQS 03</li><li>Reef Brazil Classic</li><li>WQS 26</li><li>Maresia Surf Floripa</li><li>1a. Edição do OCEANO 100% SURF AMADOR - São Francisco</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1998-12-12',
        title: '1998 - Teco Padaratz (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Teco Padaratz',
        },
        body: "<li>Teco Padaratz (SC) - CAMPEÃO FECASURF</li><li>Fabio Gouveia - Campeão Mundial amador</li><li>Marreco Surf Escola</li><li>Protocolo de Kyoto</li><li>Desafio No Fear Imbituba com Carlos Burle</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>WQS 03</li><li>Reef Brazil Classic</li><li>WQS 27</li><li>Maresia Surf Floripa</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1997-12-12',
        title: '1997 - Luli Pereira (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Luli Pereira',
        },
        body: "<li>Luli Pereira (SC) - CAMPEÃO FECASURF</li><li>Projeto Pro-menor recebe prêmio do Ministro dos Esportes Pele</li><li>Primeiro Surf Treino Praia Mole</li><li>Escola de Surf Evandro Santos - Mole</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1996-12-12',
        title: '1996 - James Santos (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'James Santos',
        },
        body: "<li>James Santos (SC) - CAMPEÃO FECASURF</li><li>Jaqueline Campeã Brasileira Amadora</li><li>Título WQS - Flávio Padaratz (SC-BRA)</li><li>Título WQS - Neco Padaratz (SC-BRA)</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1995-12-12',
        title: '1995 - Guga Arruda (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Guga Arruda',
        },
        body: "<li>Guga Arruda (SC) - CAMPEÃO FECASURF</li><li>Escola de Surf Barra</li><li>Escola HD Projeto Surf na Casa da Liberdade</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>WQS 47</li><li>Nescau Surf Energy</li><li>Fundada por Wilson Neves a Escola de Surf Costão do Santinho junto ao Costão do Santinho Resort</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1994-12-12',
        title: '1994 - Junior Maciel (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Junior Maciel',
        },
        body: "<li>Junior Maciel (SC) - CAMPEÃO FECASURF</li><li>Andre Barcelos - Campeão Catarinense</li><li>OpPro 94 na Praia da VIla, com vitória de Tadeu Pereira</li><li>Título WCT - Flávio Padaratz (SC-BRA)</li><li>WQS 01</li><li>Op Pro Imbituba</li><li>WQS 43</li><li>Nescau Surf Energy</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1993-12-12',
        title: '1993 - Fabio Carvalho (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Fabio Carvalho',
        },
        body: "<li>Fabio Carvalho (SC) - CAMPEÃO FECASURF</li><li>Escola de Surf HD Campeões do Futuro - Bira Schauffert, Evandro Santos, André Barcelos e Matuzalém Gonzaga</li><li>Escola de Surf Praia Brava</li><li>Escola de Surf Barra Floripa</li><li>Desfile Tainha Fashion</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1992-12-12',
        title: '1992 - Carlos Santos (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Carlos Santos',
        },
        body: "<li>Carlos Santos (SC) - CAMPEÃO FECASURF</li><li>1 Etapa de WQS realizada no Brasil - Joaquina - Organizado por Bira Schauffert</li><li>Criação da Associação Brasileira de Surf Profissional ([portal ABRASP](http://www.abrasp.com.br/))</li><li>ECO 92 - Rio de Janeiro</li><li>Título WQS - Flávio Padaratz (SC-BRA)</li><li>WQS 03</li><li>Florianópolis Pro</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1990-12-12',
        title: '1990 - Saulo Lyra (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Saulo Lyra',
        },
        body: "<li>Saulo Lyra (SC) - CAMPEÃO FECASURF</li><li>Escola Surf Tours - 1a. Escola de Surf de Santa Catarina (Fred D'orey, Bira Schauffert, André Barcelos, Evandro Santos, Rafael Azevedo, Rossi)</li><li>4ª etapa do Circuito Brasileiro</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1989-12-12',
        title: '1989 - Ivan Junkes (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Ivan Junkes',
        },
        body: "<li>Ivan Junkes (SC) - CAMPEÃO FECASURF BICAMPEÃO</li><li>1ª etapa do Circuito Brasileiro - 5º Op Pro7ª etapa do Circuito Brasileiro - Sea Club</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1988-12-12',
        title: '1988 - Icaro Cavalheiro (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Icaro Cavalheiro',
        },
        body: "<li>Icaro Cavalheiro (SC) - CAMPEÃO FECASURF</li><li>ASP 15</li><li>Hang Loose Pro</li><li>Circuito ASJ - 2a. Etapa</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1987-12-12',
        title: '1987 - Ivan Junkes (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Ivan Junkes',
        },
        body: "<li>Ivan Junkes (SC) - CAMPEÃO FECASURF</li><li>Fundação da ABRASP</li><li>Transformação da Associação Catarinense de Surf em Federação Catarinense de Surf - FECASURF</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1986-12-12',
        title: '1986 - Luiz Neguinho (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Luiz Neguinho',
        },
        body: "<li>Luiz Neguinho (SC) - CAMPEÃO FECASURF</li><li>2º Op Pro</li><li>Estreia de Santa Catarina sediando uma etapa do mundial Hang Loose Pro Contest - Joaquina </li><li>Intercâmbio de Surf Brasil x Estados Unidos com alunos da equipe de surf da escola Edison High School de Huntington Beach, California, com atletas de Santa Catarina em idade escolar. Houve Surf Treinos na Joaquina e Silveira e a organização foi da Master Promoções, do Flavio Boabaid</li><li>ASP 08</li><li>1º Hang Loose Pro</li><li>ASP 11</li><li>2º Hang Loose Pro</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1985-12-12',
        title: '1985 - Waldemar “Bilo” Wetter (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Waldemar “Bilo” Wetter',
        },
        body: "<li>Waldemar “Bilo” Wetter (SC) - CAMPEÃO FECASURF</li><li>1º Op Pro</li><li>Fundação da ASI - Associação de Surf de Imbituba </li><li>3º Floripão de Surf</li><li>Taça Primo de Surf</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1984-12-12',
        title: '1984 - David Husadel (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'David Husadel',
        },
        body: "<li>David Husadel (SC) - CAMPEÃO FECASURF tricampeão</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1983-12-12',
        title: '1983 - David Husadel (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'David Husadel',
        },
        body: "<li>David Husadel (SC) - CAMPEÃO FECASURF BICAMPEÃO</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1982-12-12',
        title: '1982 - David Husadel (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'David Husadel',
        },
        body: "<li>David Husadel (SC) - CAMPEÃO FECASURF - Campeão FECASURF </li><li>Festival Olympicus</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1982-12-12',
        title: '1982 - Picuruta Salazar (SP) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Picuruta Salazar',
        },
        body: "<li>Picuruta Salazar (SP)</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', ''],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1980-12-12',
        title: '1980 - Roberto Lima (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Roberto Lima',
        },
        body: "<li>Roberto Lima (SC) - CAMPEÃO FECASURF - Campeão FECASURF </li><li>Criação da Associação Catarinense de Surf</li><li>Shaper Afonso cria OCEANO em Joinville, um surfista apaixonado resolve fabricar pranchas de surf</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: 'surf',
        categories: ['surf', 'Joaquina'],
        color: 'violet',
        faicon: 'music',
        datetime: '1976-12-12',
        title: '1976 - II Rock, Surf e Brotos',
        image: {
            link: 'https://blog.surfmappers.com/surf-na-praia-da-joaquina/',
            src: 'https://blog.surfmappers.com/wp-content/uploads/2020/08/hang-loose-pro-1986-surf-na-praia-da-joaquina.jpg',
            alt: 'II Rock, Surf e Brotos',
            caption: 'II Rock, Surf e Brotos',
        },
        body: "O primeiro campeonato de surf organizado no local foi em 1976 – o Piu Surfboards. Dois anos depois, aconteceu o primeiro festival – o II Rock, Surf e Brotos, organizado pelo jovem Cacau Menezes, atualmente uma figura conhecida nas colunas sociais e jornais catarinenses. A partir de 1978, os campeonatos tornaram-se freqüentes, reunindo grandes nomes do surf nacional e mundial. Na década de 80, os Festivais foram patrocinados pela Olimpikus em 82, 83 e 84 e pela OP em 85 e 86, abrindo caminho para o histórico Hang Loose Pro Contest de 1986.",
        links: [{
            href: 'https://blog.surfmappers.com/surf-na-praia-da-joaquina/',
            linkText: 'II Rock, Surf e Brotos',
        }, ],
    },
];

// Page details
const pageTitle = 'Linha do Tempo - Surf Santa Catarina'; // The title of the page that shows in the browser tab
const pageDescription = 'Linha do Tempo de eventos importantes relacionados ao surfe em Santa Catarina.<br />  História da evolução do surfe no estado e Escolas de Surf com o apoio da ACES.'; // The description of the page for search engines
const pageAuthor = 'FECEESS'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
    const filters = new Set();
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
            for (var j = 0; j < entry.categories.length; j++) {
                filters.add(entry.categories[j]);
            }
        }
    }
    var filtersArray = [...filters];
    filtersArray.sort();
    return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
    for (const entry of entries) {
        if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
            entry.categoriesString = entry.categories.join(',');
        }
    }
    return entries;
};

module.exports = {
    header,
    footer,
    entries: addCategoriesStringsToEntries(entries),
    filters: getFilters(entries),
    head: {
        title: pageTitle,
        description: pageDescription,
        author: pageAuthor,
    },
};