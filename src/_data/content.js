const header = 'Linha do Tempo de eventos importantes relacionados ao surfe em Santa Catarina <br />História da Evolução do Surfe no Estado e Escolas de Surf FECEESS / ACES';
const footer = '<a href="https://escolasdesurf.org.br/"><img src="https://escolasdesurf.org.br/wp-content/uploads/2021/08/cropped-feceess-logo.png" style="height: 144px;"/><br />F.E.C.E.E.S.S. ☆ A.C.E.S. SC<br />Unindo talentos e fortalecendo a educação e o esporte em Santa Catarina</a>';
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
    https://surfedata.blogspot.com/2006/12/1985-1-op-pro.html
    http://www.datasurfe.com.br/2010/05/o-wqs-em-santa-catarina.html

*/
const entries = [
{
    id: '19400101',
    categories: ['laguna'],
    color: 'violet',
    faicon: 'location-crosshairs',
    datetime: '1940-01-01',
    title: 'História do surf brasileiro: Descobrimos a 1ª prancha catarinense (1940)',
    image: {
        link: 'https://hardcore.com.br/historia-do-surf-brasileiro-descobrimos-a-1-prancha-catarinense-1940/',
        src: 'https://hardcore.com.br/wp-content/uploads/sites/21/2022/07/historia-do-surf-brasileiro-01.jpg',
        alt: 'Francisco Perfeito da Silva (à dir.) e amigo em Laguna (SC) entre os anos 1940 e 1943. Foto: Arquivo pessoal Yohann Ivanoski',
        caption: 'Francisco Perfeito da Silva, Laguna',
    },
    body: "A história não é estática. Ao contrário, ela é dinâmica e muda à medida que novas descobertas são feitas e, dessa forma, a história do surf brasileiro não poderia ser diferente. Até agora, há um consenso de que o surf no Brasil começou na década de 1930, em Santos (SP), com os irmãos Thomas e Margot Rittscher, que passaram o bastão para a turma de Jua hafers e Osmar Gonçalves seguir surfando as ondas da praia do Gonzaga, nos anos 1940.",
    links: [{
        href: 'https://hardcore.com.br/historia-do-surf-brasileiro-descobrimos-a-1-prancha-catarinense-1940/',
        linkText: 'Francisco Perfeito da Silva (à dir.) e amigo em Laguna (SC) entre os anos 1940 e 1943. Foto: Arquivo pessoal Yohann Ivanoski',
    }, ],
    },
    {
    id: '19761212',
    categories: ['joaquina'],
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
    {
    id: '19801212',
    categories: ['joaquina', 'CAMPEÃO'],
    color: 'blue',
    faicon: 'flag-checkered',
    datetime: '1980-12-12',
    title: '1980 - Roberto Lima (SC) PRO SC',
    body: "<li>A abertura do primeiro Circuito Catarinense de Surfe Profissional foi na arena mais tradicional do esporte no Estado, a Joaquina</li><li>Roberto Lima (SC) - CAMPEÃO FECASURF </li><li>Criação da Associação Catarinense de Surf</li><li>Shaper Afonso cria OCEANO em Joinville, um surfista apaixonado resolve fabricar pranchas de surf</li>",
    links: [{
        href: 'https://surfedata.blogspot.com/2006/11/1980-1-etapa-do-circuito-estadual.html',
        linkText: '1ª etapa do Circuito Estadual',
    }, ],
    },
    {
    id: '19811101',
    categories: ['Florianópolis', 'Tropical'],
    color: 'blue',
    faicon: 'flag-checkered',
    datetime: '1981-11-01',
    title: '1981 - Tropical Brasil',
    image: {
        link: 'https://www.tropicalbrasil.com.br/nossa-historia/',
        src: 'https://www.tropicalbrasil.com.br/wp-content/uploads/2021/08/TB-1982.png',
        alt: '',
        caption: 'Tropical Brasil',
    },
    body: "A história da Tropical começa lá em novembro de 1981, com Avelino Bastos, que aos nove anos já tentava fabricar as suas próprias pranchas com tábuas de passar roupa e quilhas de latão.<br />Extremamente apaixonado pela vibe do mar, se tornou shaper profissional e fundou uma das maiores fábricas de Pranchas de Surf do Brasil, que hoje conta com mais de 100k pranchas vendidas em todo o território nacional.",
    links: [{
        href: 'https://www.tropicalbrasil.com.br/nossa-historia/',
        linkText: 'É inaugurada a primeira fábrica da Tropical Brasil em Florianópolis/SC.',
    }, ],
    },
    {
    id: '19820125',
    categories: ['joaquina', 'CAMPEÃO'],
    color: 'blue',
    faicon: 'flag-checkered',
    datetime: '1982-01-25',
    title: '1982 - 1º Festival Olympikus',
    image: {
        link: 'https://surfedata.blogspot.com/2006/11/1982-1-festival-olympikus.html',
        src: '/img/olimpikys82.jpg',
        alt: '21 a 25 de janeiro de 1982 - Joaquina',
        caption: '1º Festival Olympikus',
    },
    body: "<li>David Husadel (SC) - CAMPEÃO PRO SC</li><li>1º Festival Olympikus</li><li>Com os bons resultados das pranchas e da equipe de atletas montada pela Tropical Brasil no primeiro campeonato Olimpikus, e em tantos outros campeonatos que ocorreram na época, a marca recebe forte credibilidade e visibilidade em todo o país</li>",
    links: [{
        href: 'https://surfedata.blogspot.com/2006/11/1982-1-festival-olympikus.html',
        linkText: '1º Festival Olympikus - 21 a 25 de janeiro de 1982 - Joaquina',
    }, ],
    },
    {
    id: '19830119',
    categories: ['joaquina', 'CAMPEÃO'],
    color: 'blue',
    faicon: 'flag-checkered',
    datetime: '1983-01-19',
    title: '1983 - David Husadel (SC) BICAMPEÃO PRO',
    image: {
        link: 'https://surfedata.blogspot.com/2006/11/1983-2-festival-olimpykus.html',
        src: '/img/olimpikys83.jpg',
        alt: '',
        caption: '2º Festival Olimpykus',
    },
    body: "<li>David Husadel (SC) - CAMPEÃO BICAMPEÃO PRO</li><li>2º Festival Olimpykus - 3,5 milhões em prêmios. Passagem ida-e-volta para a Austrália, prancha Tropical Brasil e colete Mormaii para o campeão; passagem para o Hawaii, prancha TB e colete para o vice; Cr$ 100 mil, prancha e colete para os 3º. Cr$ 50 mil e colete para os 5º; Cr$ 20 mil e coletes para os 9º</li>",
    links: [{
        href: 'https://surfedata.blogspot.com/2006/11/1983-2-festival-olimpykus.html',
        linkText: '2º Festival Olimpykus',
    }, ],
    },
    {
    id: '19840118',
    categories: ['joaquina', 'CAMPEÃO'],
    color: 'blue',
    faicon: 'flag-checkered',
    datetime: '1984-01-18',
    title: '1984 - David Husadel (SC) FECASURF',
    image: {
        link: 'https://surfedata.blogspot.com/2006/11/1984-3-festival-olympikus.html',
        src: '/img/joaca84.jpg',
        alt: '',
        caption: '3º Festival Olympikus',
    },
    body: "<li>David Husadel (SC) - CAMPEÃO FECASURF tricampeão</li><li>3º Festival Olympikus</li><li>Avelino Bastos recebe o convite de levar a marca para as suas primeiras aparições em grandes revistas de surf, como Inside e Fluir</li><li>Teco Padaratz, mais tarde campeão mundial da World Qualifyng Series (WQS), entra para o time da Tropical Brasil no auge dos seus 13 anos</li>",
    links: [{
        href: 'https://surfedata.blogspot.com/2006/11/1984-3-festival-olympikus.html',
        linkText: '3º Festival Olympikus',
    }, ],
    },
    {
    id: '19850127',
    categories: ['joaquina', 'CAMPEÃO'],
    color: 'blue',
    faicon: 'flag-checkered',
    datetime: '1985-01-27',
    title: '1985 - Waldemar “Bilo” Wetter (SC) PRO',
    image: {
        link: 'https://surfedata.blogspot.com/2006/12/1985-1-op-pro.html',
        src: '/img/picuruta85.jpg',
        alt: '',
        caption: '1º Op Pro - Joaquina ',
    },
    body: "<li>Waldemar “Bilo” Wetter (SC) - CAMPEÃO PRO</li><li>1º Op Pro</li><li>Fundação da ASI - Associação de Surf de Imbituba </li><li>3º Floripão de Surf</li><li>Taça Primo de Surf</li>",
    links: [{
        href: 'https://surfedata.blogspot.com/2006/12/1985-1-op-pro.html',
        linkText: '1º Op Pro - Joaquina ',
    }, ],
    },
    {
    id: '19860906',
    categories: ['joaquina', 'CAMPEÃO', 'Escola'],
    color: 'green3',
    faicon: 'building-flag',
    datetime: '1986-09-06',
    title: '1986 - Luiz Neguinho (SC) PRO',
    image: {
        link: 'http://www.datasurfe.com.br/2006/12/1986-1-hang-loose-pro-contest.html',
        src: 'https://3.bp.blogspot.com/_Tpvtf-WNfoI/SqFpuC5_VqI/AAAAAAAACDg/frPIAf7RQ_Y/s200/hang-loose-pro-contest-300x138.jpg',
        alt: '',
        caption: '1º Hang Loose Pro',
    },
    body: "<li>Luiz Neguinho (SC) - CAMPEÃO PRO</li><li>2º Op Pro</li><li>Estreia de Santa Catarina sediando uma etapa do mundial Hang Loose Pro Contest - Joaquina </li><li>Intercâmbio de Surf Brasil x Estados Unidos com alunos da equipe de surf da escola Edison High School de Huntington Beach, California, com atletas de Santa Catarina em idade escolar. Houve Surf Treinos na Joaquina e Silveira e a organização foi da Master Promoções, do Flavio Boabaid</li><li>ASP 08</li><li>1º Hang Loose Pro</li><li>ASP 11</li><li>2º Hang Loose Pro</li>",
    links: [{
        href: 'http://www.datasurfe.com.br/2006/12/1986-1-hang-loose-pro-contest.html',
        linkText: '8ª etapa do Circuito Mundial da ASP',
    }, ],
    },
    {
    id: '19870909',
    categories: ['joaquina', 'CAMPEÃO'],
    color: 'blue',
    faicon: 'flag-checkered',
    datetime: '1987-09-09',
    title: '1987 - 2º Hang Loose Pro',
    image: {
        link: 'http://www.datasurfe.com.br/2007/10/1987-asp-11-2-hang-loose-pro.html',
        src: 'https://1.bp.blogspot.com/_Tpvtf-WNfoI/RydNAroBbvI/AAAAAAAAAHs/CoYsBU7krv4/s200/hnloose87_marcocesar.jpg',
        alt: '',
        caption: '11ª etapa do Circuito Mundial - nível 1A',
    },
    body: "<li>Ivan Junkes (SC) - CAMPEÃO PRO</li><li>Fundação da ABRASP</li><li>Transformação da Associação Catarinense de Surf em Federação Catarinense de Surf - FECASURF</li>",
    links: [{
        href: 'http://www.datasurfe.com.br/2007/10/1987-asp-11-2-hang-loose-pro.html',
        linkText: '11ª etapa do Circuito Mundial - nível 1A',
    }, ],
    },
    
    {
        id: '19881212',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1988-12-12',
        title: '1988 - Hang Loose Pro',
        body: "<li>Icaro Cavalheiro (SC) - CAMPEÃO PRO</li><li>ASP 15</li><li>Hang Loose Pro</li><li>Circuito ASJ - 2a. Etapa</li><li>Avelino Bastos projeta e constrói uma maquina de shape para as pranchas Tropical Brasil</li><li>Criada Maré Body Boards Ltda EPP para fabricação de Bodyboards</li>",
        links: [{
            href: 'http://www.datasurfe.com.br/2009/02/1988-asp-15-hang-loose-pro.html',
            linkText: '15ª etapa do Circuito Mundial ASP - nível 1A',
        },{
            href: 'https://www.youtube.com/watch?v=W_SKfAthydU',
            linkText: 'Hang Loose Pro Joaquina 1988 Martin Potter X Brad Gerlach 15ª etapa circuito ASP',
        }, ],
    },
    {
        id: '19870909',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1987-09-09',
        title: '1987 - 2º Hang Loose Pro',
        image: {
            link: 'http://www.datasurfe.com.br/2007/10/1987-asp-11-2-hang-loose-pro.html',
            src: 'https://1.bp.blogspot.com/_Tpvtf-WNfoI/RydNAroBbvI/AAAAAAAAAHs/CoYsBU7krv4/s200/hnloose87_marcocesar.jpg',
            alt: '',
            caption: '11ª etapa do Circuito Mundial - nível 1A',
        },
        body: "<li>Ivan Junkes (SC) - CAMPEÃO PRO</li><li>Fundação da ABRASP</li><li>Transformação da Associação Catarinense de Surf em Federação Catarinense de Surf - FECASURF</li>",
        links: [{
            href: 'http://www.datasurfe.com.br/2007/10/1987-asp-11-2-hang-loose-pro.html',
            linkText: '11ª etapa do Circuito Mundial - nível 1A',
        }, ],
    },
    {
        id: '19860906',
        categories: ['joaquina', 'CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
        datetime: '1986-09-06',
        title: '1986 - Luiz Neguinho (SC) PRO',
        image: {
            link: 'http://www.datasurfe.com.br/2006/12/1986-1-hang-loose-pro-contest.html',
            src: 'https://3.bp.blogspot.com/_Tpvtf-WNfoI/SqFpuC5_VqI/AAAAAAAACDg/frPIAf7RQ_Y/s200/hang-loose-pro-contest-300x138.jpg',
            alt: '',
            caption: '1º Hang Loose Pro',
        },
        body: "<li>Luiz Neguinho (SC) - CAMPEÃO PRO</li><li>2º Op Pro</li><li>Estreia de Santa Catarina sediando uma etapa do mundial Hang Loose Pro Contest - Joaquina </li><li>Intercâmbio de Surf Brasil x Estados Unidos com alunos da equipe de surf da escola Edison High School de Huntington Beach, California, com atletas de Santa Catarina em idade escolar. Houve Surf Treinos na Joaquina e Silveira e a organização foi da Master Promoções, do Flavio Boabaid</li><li>ASP 08</li><li>1º Hang Loose Pro</li><li>ASP 11</li><li>2º Hang Loose Pro</li>",
        links: [{
            href: 'http://www.datasurfe.com.br/2006/12/1986-1-hang-loose-pro-contest.html',
            linkText: '8ª etapa do Circuito Mundial da ASP',
        }, ],
    },
    {
        id: '19850127',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1985-01-27',
        title: '1985 - Waldemar “Bilo” Wetter (SC) PRO',
        image: {
            link: 'https://surfedata.blogspot.com/2006/12/1985-1-op-pro.html',
            src: '/img/picuruta85.jpg',
            alt: '',
            caption: '1º Op Pro - Joaquina ',
        },
        body: "<li>Waldemar “Bilo” Wetter (SC) - CAMPEÃO PRO</li><li>1º Op Pro</li><li>Fundação da ASI - Associação de Surf de Imbituba </li><li>3º Floripão de Surf</li><li>Taça Primo de Surf</li>",
        links: [{
            href: 'https://surfedata.blogspot.com/2006/12/1985-1-op-pro.html',
            linkText: '1º Op Pro - Joaquina ',
        }, ],
    },
    {
        id: '19840118',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1984-01-18',
        title: '1984 - David Husadel (SC) FECASURF',
        image: {
            link: 'https://surfedata.blogspot.com/2006/11/1984-3-festival-olympikus.html',
            src: '/img/joaca84.jpg',
            alt: '',
            caption: '3º Festival Olympikus',
        },
        body: "<li>David Husadel (SC) - CAMPEÃO FECASURF tricampeão</li><li>3º Festival Olympikus</li><li>Avelino Bastos recebe o convite de levar a marca para as suas primeiras aparições em grandes revistas de surf, como Inside e Fluir</li><li>Teco Padaratz, mais tarde campeão mundial da World Qualifyng Series (WQS), entra para o time da Tropical Brasil no auge dos seus 13 anos</li>",
        links: [{
            href: 'https://surfedata.blogspot.com/2006/11/1984-3-festival-olympikus.html',
            linkText: '3º Festival Olympikus',
        }, ],
    },
    {
        id: '19830119',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1983-01-19',
        title: '1983 - David Husadel (SC) BICAMPEÃO PRO',
        image: {
            link: 'https://surfedata.blogspot.com/2006/11/1983-2-festival-olimpykus.html',
            src: '/img/olimpikys83.jpg',
            alt: '',
            caption: '2º Festival Olimpykus',
        },
        body: "<li>David Husadel (SC) - CAMPEÃO BICAMPEÃO PRO</li><li>2º Festival Olimpykus - 3,5 milhões em prêmios. Passagem ida-e-volta para a Austrália, prancha Tropical Brasil e colete Mormaii para o campeão; passagem para o Hawaii, prancha TB e colete para o vice; Cr$ 100 mil, prancha e colete para os 3º. Cr$ 50 mil e colete para os 5º; Cr$ 20 mil e coletes para os 9º</li>",
        links: [{
            href: 'https://surfedata.blogspot.com/2006/11/1983-2-festival-olimpykus.html',
            linkText: '2º Festival Olimpykus',
        }, ],
    },
    {
        id: '19820125',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1982-01-25',
        title: '1982 - 1º Festival Olympikus',
        image: {
            link: 'https://surfedata.blogspot.com/2006/11/1982-1-festival-olympikus.html',
            src: '/img/olimpikys82.jpg',
            alt: '21 a 25 de janeiro de 1982 - Joaquina',
            caption: '1º Festival Olympikus',
        },
        body: "<li>David Husadel (SC) - CAMPEÃO PRO SC</li><li>1º Festival Olympikus</li><li>Com os bons resultados das pranchas e da equipe de atletas montada pela Tropical Brasil no primeiro campeonato Olimpikus, e em tantos outros campeonatos que ocorreram na época, a marca recebe forte credibilidade e visibilidade em todo o país</li>",
        links: [{
            href: 'https://surfedata.blogspot.com/2006/11/1982-1-festival-olympikus.html',
            linkText: '1º Festival Olympikus - 21 a 25 de janeiro de 1982 - Joaquina',
        }, ],
    },
    {
        id: '19811101',
        categories: ['Florianópolis', 'Tropical'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1981-11-01',
        title: '1981 - Tropical Brasil',
        image: {
            link: 'https://www.tropicalbrasil.com.br/nossa-historia/',
            src: 'https://www.tropicalbrasil.com.br/wp-content/uploads/2021/08/TB-1982.png',
            alt: '',
            caption: 'Tropical Brasil',
        },
        body: "A história da Tropical começa lá em novembro de 1981, com Avelino Bastos, que aos nove anos já tentava fabricar as suas próprias pranchas com tábuas de passar roupa e quilhas de latão.<br />Extremamente apaixonado pela vibe do mar, se tornou shaper profissional e fundou uma das maiores fábricas de Pranchas de Surf do Brasil, que hoje conta com mais de 100k pranchas vendidas em todo o território nacional.",
        links: [{
            href: 'https://www.tropicalbrasil.com.br/nossa-historia/',
            linkText: 'É inaugurada a primeira fábrica da Tropical Brasil em Florianópolis/SC.',
        }, ],
    },
    {
        id: '19801212',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1980-12-12',
        title: '1980 - Roberto Lima (SC) PRO SC',
        body: "<li>A abertura do primeiro Circuito Catarinense de Surfe Profissional foi na arena mais tradicional do esporte no Estado, a Joaquina</li><li>Roberto Lima (SC) - CAMPEÃO FECASURF </li><li>Criação da Associação Catarinense de Surf</li><li>Shaper Afonso cria OCEANO em Joinville, um surfista apaixonado resolve fabricar pranchas de surf</li>",
        links: [{
            href: 'https://surfedata.blogspot.com/2006/11/1980-1-etapa-do-circuito-estadual.html',
            linkText: '1ª etapa do Circuito Estadual',
        }, ],
    },
    {
        id: '19761212',
        categories: ['joaquina'],
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
    {
            id: '19891212',
            categories: ['CAMPEÃO'],
            color: 'blue',
            faicon: 'flag-checkered',
            datetime: '1989-12-12',
            title: '1989 - Ivan Junkes (SC) PRO',
            image: {
                link: '',
                src: '',
                alt: '',
                caption: 'Ivan Junkes',
            },
            body: "<li>Ivan Junkes (SC) - CAMPEÃO BICAMPEÃO PRO</li><li>1ª etapa do Circuito Brasileiro - 5º Op Pro7ª etapa do Circuito Brasileiro - Sea Club</li>",
            links: [{
                href: '',
                linkText: '<span class="dashicons dashicons-admin-links"></span>',
            }, ],
        },
        {
        id: '19901212',
        categories: ['CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
        datetime: '1990-12-12',
        title: '1990 - Saulo Lyra (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Saulo Lyra',
        },
        body: "<li>Saulo Lyra (SC) - CAMPEÃO PRO</li><li>Escola Surf Tours - 1a. Escola de Surf de Santa Catarina (Fred D'orey, Bira Schauffert, André Barcelos, Evandro Santos, Rafael Azevedo, Rossi)</li><li>4ª etapa do Circuito Brasileiro</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: '19920219',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '1992-02-19',
        title: '1992 - Carlos Santos (SC) FECASURF',
        body: "<li>Carlos Santos (SC) - CAMPEÃO PRO</li><li>1 Etapa de WQS realizada no Brasil - Joaquina - Organizado por Bira Schauffert</li><li>Criação da Associação Brasileira de Surf Profissional</li><li>ECO 92 - Rio de Janeiro</li><li>Título WQS - Flávio Padaratz (SC-BRA)</li><li>WQS 03</li><li>Florianópolis Pro</li><li>Avelino Bastos desenvolve uma nova versão de máquina se shape SIRAP(Sistema Replicante de Alta Performance)</li>",
        links: [{
            href: 'http://www.abrasp.com.br/',
            linkText: 'ABRASP - Associação Brasileira de Surf Profissional',
        }, {
            href: 'http://www.datasurfe.com.br/2007/06/1992-wqs-03-florianpolis-pro.html',
            linkText: 'WQS 03: Florianópolis Pro',}
        ],
    },
    {
        id: '19931212',
        categories: ['CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
        datetime: '1993-12-12',
        title: '1993 - Fabio Carvalho (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'Fabio Carvalho',
        },
        body: "<li>Fabio Carvalho (SC) - CAMPEÃO FECASURF</li><li>Escola de Surf HD Campeões do Futuro - Bira Schauffert, Evandro Santos, André Barcelos e Matuzalém Gonzaga</li><li>Escola de Surf Praia Brava</li><li>Escola de Surf Barra Floripa</li><li>Desfile Tainha Fashion</li><li>Avelino recebe o seu primeiro prêmio de melhor shaper (designer) do ano</li>",
        links: [{
            href: '',
            linkText: '',
        }, ],
    },
    {
        id: '19941212',
        categories: ['CAMPEÃO'],
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
        id: '19951212',
        categories: ['CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '19961212',
        categories: ['CAMPEÃO'],
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
        id: '19971212',
        categories: ['CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '19981212',
        categories: ['CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '19991212',
        categories: ['CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
        datetime: '1999-12-12',
        title: '1999 - James Santos (SC) FECASURF',
        image: {
            link: '',
            src: '',
            alt: '',
            caption: 'James Santos',
        },
        body: "<li>Guga Arruda (SC) -  BICAMPEÃO FECASURF</li><li>Campeonato No Fear de Ondas Grandes, na Praia da Vila. Quem venceu foi o Fabio Carvalho, 2o. Dê da Barra. 3o. Guilherme Ferreira e 4o. Pedro Muller.</li><li>Salva Surf Resgate</li><li>Escola de Surf dos Ingleses - Barriga</li><li>Santa Catarina é vice-campeã no Brasileiro de surf por equipes</li><li>Título WCT - Neco Padaratz (SC-BRA)</li><li>Título WQS - James Santos (SC-BRA)</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>WQS 03</li><li>Reef Brazil Classic</li><li>WQS 26</li><li>Maresia Surf Floripa</li><li>1a. Edição do OCEANO 100% SURF AMADOR - São Francisco</li>",
        links: [{
            href: 'https://docs.google.com/fileview?id=0B1BPIIId28AtZmQ3ZWNmZDgtZGQ0NC00MDNlLTlkNjktZDk5ZjgxZDQyMjY3&hl=pt_BR',
            linkText: 'Nasce Projeto Marbras - Paulão',
        }, ],
    },
    {
        id: '20001212',
        categories: ['CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '20011212',
        categories: ['CAMPEÃO'],
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
        body: "<li>Fabio Carvalho (SC) - CAMPEÃO FECASURF BICAMPEÃO</li><li>Teco Bi Campeão Mundial WQS</li><li>Jaqueline Silva Campeã Mundial WQS</li><li>Brasil Campeão Mundial de surf por equipes</li><li>Projeto Social Surfando no Siri (Ingleses)</li><li>MARBRAS (Paulão) Começa em Floripa</li><li>6ª etapa do Super Surf</li><li>Projeto Social Surfando no Siri / MARBRAS</li><li>Título WQS - James Santos (SC-BRA)</li><li>WQS 04</li><li>Reef Brazil Classic</li>",
        links: [{
            href: 'https://docs.google.com/fileview?id=0B1BPIIId28AtZmQ3ZWNmZDgtZGQ0NC00MDNlLTlkNjktZDk5ZjgxZDQyMjY3&hl=pt_BR',
            linkText: 'MARBRAS - Paulão',
        }, ],
    },
    {
        id: '20021212',
        categories: ['surf', 'CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '20031212',
        categories: ['surf', 'CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '20041212',
        categories: ['mole', 'CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
        datetime: '2004-12-12',
        title: '2004 - Diego Rosa (SC) FECASURF',
        image: {
            link: 'http://www.datasurfe.com.br/2007/02/2004-onbongo-pro-surfing.html',
            src: 'https://1.bp.blogspot.com/_Tpvtf-WNfoI/R_V7h1LQnxI/AAAAAAAAAfE/Weu85VhnCnc/s200/richardlovettl.jpg',
            alt: '',
            caption: 'WQS 36: Onbongo Pro Surfing',
        },
        body: "<li>Diego Rosa (SC) - CAMPEÃO PRO</li><li>Onbongo Pro Surfing</li><li>Furacão Catarina</li><li>De da Barra Surfa Maior Onda no Brasil em Santa Catarina (Praia do Cardoso, Laguna)</li><li>Escola da Barra Campea Surf Estudantil</li><li>Título WQS - Neco Padaratz (SC-BRA)</li><li>Acontece a primeira Clínica de Surf realizada pela Escola de Surf Costão do Santinho no Costão do Santinho Resort (mega evento)</li>",
        links: [{
            href: 'https://core.ac.uk/download/pdf/30368681.pdf',
            linkText: 'UFSC - Paulão - Projeto Marbras et Mundi - PÓS-GRADUAÇÃO EM ENGENHARIA AMBIENTAL',
        },{
            href: 'http://www.datasurfe.com.br/2007/02/2004-onbongo-pro-surfing.html',
            linkText: 'WQS 36: Onbongo Pro Surfing',
        }, ],
    },
    {
        id: '20051212',
        categories: ['surf', 'CAMPEÃO', 'Açores', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '20061212',
        categories: ['surf', 'CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '20071212',
        categories: ['santinho', 'CAMPEÃO', 'Escola'],
        color: 'green3',
        faicon: 'building-flag',
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
        id: '20080930',
        categories: ['cref', 'saochico', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2008-09-30',
        title: '2008 - Gatorade',
        image: {
            link: 'http://www.datasurfe.com.br/2008/09/2008-wqs-30-gatorade-surf-classic.html',
            src: 'https://1.bp.blogspot.com/_Tpvtf-WNfoI/SMVo6ebwQuI/AAAAAAAABZI/-Mb742DgNsY/s200/jadson.jpg',
            alt: '',
            caption: 'WQS 30: Gatorade Surf Classic',
        },
        body: "<li>Marco Polo (SC) - CAMPEÃO FECASURF BICAMPEÃO</li><li>CREF Reconhece professores de surf ([portal CREF-SC](http://www.crefsc.org.br/))</li><li>Grande enchente em Santa Catarina</li><li>Jaqueline Silva campeã Surf ECO Festival</li><li>O 2º título catarinense de Marco Polo</li><li>Título WQS - Jean da Silva (SC-BRA)</li><li>Título WQS - William Cardoso (SC-BRA)</li>",
        links: [{
            href: 'http://www.datasurfe.com.br/2008/09/2008-wqs-30-gatorade-surf-classic.html',
            linkText: 'WQS 30: Gatorade Surf Classic',
        }, ],
    },
    {
        id: '20091212',
        categories: ['mole', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2009-12-12',
        title: '2009 - Tânio Barreto (AL) FECASURF',
        image: {
            link: 'http://www.datasurfe.com.br/2009/07/2009-wqs-19-maresia-surf-international.html',
            src: 'https://2.bp.blogspot.com/_Tpvtf-WNfoI/SlpiukEvzMI/AAAAAAAAB94/UIbwX4-HIX0/s200/medina.bmp',
            alt: '',
            caption: 'WQS 19',
        },
        body: "<li>Tânio Barreto (AL) - CAMPEÃO FECASURF</li><li>Parceria ACES com Instituto Ilhas do Brasil</li><li>Parceria com UDESC</li><li>Título WCT - Neco Padaratz (SC-BRA)</li><li>Gabriel Medina, o fenômeno, vence, aos 15 anos, sua primeira competição profissional internacional, uma etapa do WQS na Praia Mole</li>",
        links: [{
            href: 'http://www.datasurfe.com.br/2009/07/2009-wqs-19-maresia-surf-international.html',
            linkText: 'Maresia Surf International',
        }, ],
    },
    {
        id: '20101212',
        categories: ['garopaba', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2010-12-12',
        title: '2010 - Tomas Hermes (SC) FECASURF',
        image: {
            link: 'https://surfguru.com.br/conteudo/tomas-hermes-fica-com-o-ultimo-titulo-brasileiro-da-temporada-2010-2010-12-22-25038.html',
            src: '/img/tomas-hermes.jpg',
            alt: '',
            caption: 'Tomas Hermes',
        },
        body: "<li>Tomas Hermes (SC) - CAMPEÃO FECASURF</li><li>Na última edição da etapa mundial em Santa Catarina, o potiguar Jadson André foi o campeão, derrotando Kelly Slater na final, na Praia da Vila, em Imbituba</li><li>Juliana Quint, vice-campeã brasileira em 2010</li>",
        links: [{
            href: 'https://www.nsctotal.com.br/noticias/tomas-hermes-e-o-campeao-catarinense-de-surfe',
            linkText: 'Tomas Hermes é o campeão catarinense de surfe',
        },{
            href: 'https://surfguru.com.br/conteudo/tomas-hermes-fica-com-o-ultimo-titulo-brasileiro-da-temporada-2010-2010-12-22-25038.html',
            linkText: 'Tomas Hermes fica com o último título brasileiro da temporada 2010 - Cultura - Comunidade - Surfguru',
        }, ],
    },
    {
        id: '20111212',
        categories: ['imbituba', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2011-12-12',
        title: '2011 - Tiago Bianchini (SC) FECASURF',
        image: {
            link: 'http://www.pugasurfshop.com/blog/tiago-bianchini-vence-o-oakley-santa-catarina-surf-pro-na-praia-da-joaquina',
            src: '/img/tiagobianchini.jpg',
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
        id: '20121208',
        categories: ['camboriu', 'CAMPEÃO'],
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
        id: '20131215',
        categories: ['açores', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2013-12-15',
        title: '2013 - Tomas Hermes (SC) FECASURF',
        image: {
            link: 'http://surfbox.com.br/2013/09/acores-prime-tomas-hermes-vence-portugal/',
            src: '/img/tomas_capa.jpg',
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
        id: '20151212',
        categories: ['oceano', 'CAMPEÃO'],
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
        id: '20161222',
        categories: ['matadeiro', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2016-12-22',
        title: '2016 - Caetano Vargas (PR) FECASURF',
        image: {
            link: 'https://www.fecasurf.com.br/caetano-vargas-e-o-campeao-catarinense-de-surf-profissional-2016/',
            src: 'https://www.fecasurf.com.br/wp-content/uploads/2016/12/432046_670x408.7.jpg',
            alt: 'Caetano Vargas é o campeão catarinense profissional de 2016',
            caption: 'Caetano Vargas',
        },
        body: "<li>CAMPEÃO PRO - Caetano Vargas (PR)</li><li>A Tropical Brasil ultrapassa a marca de 100.000 pranchas produzidas</li>",
        links: [{
            href: 'https://www.fecasurf.com.br/caetano-vargas-e-o-campeao-catarinense-de-surf-profissional-2016/',
            linkText: 'Caetano Vargas é o campeão catarinense profissional de 2016',
        }, ],
    },
    {
        id: '20171212',
        categories: ['matadeiro', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2017-12-12',
        title: '2017 - Caetano Vargas (PR) FECASURF',
        image: {
            link: 'https://www.fecasurf.com.br/campeoes-catarinense-de-surf-de-2017/',
            src: 'https://www.fecasurf.com.br/wp-content/uploads/2018/01/599970_387670761298231_736456222_n.jpg',
            alt: 'Caetano Vargas fatura categoria Pro no Circuito ASJ OP Ocean Pacific 2017',
            caption: 'Caetano Vargas',
        },
        body: "<li>BICAMPEÃO PRO - Caetano Vargas (PR)</li><li>WSL - Tomas Hermes é vice-campeão do QS 10000 US Open</li>",
        links: [{
            href: 'https://www.fecasurf.com.br/campeoes-catarinense-de-surf-de-2017/',
            linkText: 'Caetano Vargas fatura categoria Pro no Circuito ASJ OP Ocean Pacific 2017',
        }, ],
    },
    {
    id: '20181217',
        categories: ['joaquina', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2018-12-17',
        title: '2018 - Uriel Sposaro (SC) FECASURF',
        image: {
            link: 'https://surfguru.com.br/conteudo/campeoes-definidos-no-circuito-asj-2018-2018-12-17-13591.html',
            src: 'https://surfguru.space/2018/12/181217075651000000.jpg',
            alt: 'Uriel Sposaro conquista o título catarinense de surfe profissional',
            caption: 'Uriel Sposaro',
        },
        body: "CAMPEÃO PRO - Uriel Sposaro (SC)",
        links: [{
            href: 'https://surfguru.com.br/conteudo/campeoes-definidos-no-circuito-asj-2018-2018-12-17-13591.html',
            linkText: 'Surfista levou a melhor no Circuito ASJ Ocean Pacific, na Joaquina',
        }, ],
    },
    {
        id: '20190324',
        categories: ['joaquina'],
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
        id: '20201221',
        categories: ['surf', 'CAMPEÃO'],
        color: 'blue',
        faicon: 'flag-checkered',
        datetime: '2020-12-21',
        title: '2020 - Ian Gouveia',
        body: "<li>CAMPEÃO PRO - Ian Gouveia (PE) em 1 etapa virtual pela internet</li><li>Tropical Brasil lança tecnologia Hero, pranchas pensadas para atletas iniciantes, com excelente resposta de flexibilidade e resiliência. Além disso, a tecnologia proporciona bastante flutuação e estabilidade, ideal para quem está dando os seus primeiros passos no surf.</li>",
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
        id: '20210821',
        categories: ['joaquina'],
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
        id: '20220213',
        categories: ['santinho', 'CAMPEÃO'],
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
        id: '20230924',
        categories: ['santinho', 'CAMPEÃ'],
        color: 'violet',
        faicon: 'female',
        datetime: '2023-09-24',
        title: 'Tainá Hinckel e Peterson Crisanto vencem a 4ª etapa do Dream Tour Maceió',
        image: {
            link: 'https://hardcore.com.br/taina-hinckel-e-peterson-crisanto-vencem-a-4a-etapa-do-dream-tour-maceio/',
            src: 'https://hardcore.com.br/wp-content/uploads/sites/21/2023/09/unnamed-33-scaled-e1695600522864.jpg',
            alt: 'Atleta Tainá Hinckel garante o título brasileiro profissional por antecipação. Foto: Lima Júnior',
            caption: 'Tainá Hinckel',
        },
        body: "Decisão final da 4ª etapa do Vivo Dream Tour Maceió. Os atletas integrantes da Divisão Principal da Confederação Brasileira de Surf (CBSurf) competiram em um dia de muito sol na praia de Trapiche da Barra.",
        links: [{
            href: 'https://hardcore.com.br/taina-hinckel-e-peterson-crisanto-vencem-a-4a-etapa-do-dream-tour-maceio/',
            linkText: 'Atleta Tainá Hinckel garante o título brasileiro profissional',
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