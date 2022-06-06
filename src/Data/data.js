const HOME_DATA = {
    quote: "„Szczęśliwy człowiek, dzielący się szczęściem.”"
}

const ABOUT_DATA = {
    pretext: "Kim jestem:",
    text_list: [`Cześć! Nazywam się Paweł Kowalski.`,

    `Większość osób kojarzy mnie z social mediów, pod pseudonimem “najpierw ja”. W internecie oraz w życiu prywatnym, określam siebie jako osobę szczęśliwą i otwartą na rozmowę. To mój naturalny talent - potrafię każdego dnia poznać kogoś nowego i szczerze się nim zainteresować. Na tym też buduję swoją markę - uwielbiam poznawać drugiego człowieka takim, jakim jest, bez oceniania go, ponieważ rozumiem, że każdy ma swoje indywidualne wartości i potrzeby.`,
    
    `Od kiedy założyłem profil <strong>@najpierw_ja</strong>, codziennie dzielę się wiedzą na temat kochania siebie, bliskich relacji, drogi do szczęścia, pewności siebie i spraw biznesowych - to moje główne tematy, w których edukuję się od lat (przede wszystkim w praktyce).`,
    
    `Jak to się stało, że robię to, co robię? Czasem mam wrażenie, że nie ja wybrałem tę ścieżkę życia, a to ta ścieżka życia wybrała mnie - ponieważ zawody które wykonuję, związane są z moimi pasjami. Zaczęło się lata temu, od zwykłych wyjść na kawę i szczerego dzielenia wnioskami o życiu. Ludzie, z którymi się spotykałem, mówili mi, że taka rozmowa bardzo pomaga im poukładać swoje sprawy i powinienem pomyśleć o psychologii, coachingu lub jakiejś innej formie pracy, w której miałbym kontakt z klientem 1na1, bo na pewno się w niej spełnię. Na początku przyjmowałem to tylko jako komplement, lecz z czasem zacząłem rozumieć, że to naprawdę jest coś, czym chcę się zajmować.`,
    
    `Instagram stał się nowym miejscem spotkań, a wraz z rozwojem profilu, kontaktowało się ze mną coraz więcej osób. Była to dla mnie dobra wiadomość, lecz dzień nadal miał tylko 24 godziny, więc zaczynało brakować czasu. Mając pracę, pasję, znajomych - stanąłem przed ważnym wyborem: “albo ograniczam relacje z obserwatorami i zajmuję się rozwojem życia dotychczasowego jako trener personalny w branży fitness, albo wchodzę w to całym sobą i rozwijam się profesjonalnie w coachingu”. Jak się domyślasz – wybrałem opcję drugą. Ukończyłem więc szkolenia w oparciu o standardy i kodeks etyczny ICF, uzyskując międzynarodowy tytuł: “Meritum Certified Coach”. Dzięki temu, na co dzień prowadzę sesje online, na których z pomocą narzędzi psychologicznych, przechodzę z klientami przez ważne dla nich tematy życiowe (tzw. life coaching).`,
    
    `W międzyczasie działam w branży pisarskiej - jestem autorem wspomnianego wyżej profilu na instagramie oraz ebooków:`,
    ]
};

const EBOOKS_DATA = {
    heading: "Moje",
    boldheading: "E-booki",

    u_list:[{
            key: 1,
            price: "59zł *",
            title: "“5 warunków idealnego związku”",
            short_description: "<i>(zdrowe relacje, rozwój osobisty)</i>",
            description:"Zdania na temat tego co w związku jest najważniejsze, są podzielone. W tej książce nie stosuję podziału na „gorsze/lepsze” warunki, lecz opisuję wszystkie dokładnie z taką samą wartością, by uświadomić czytelnikowi, że nawet połączenie pasującego charakteru z ładną twarzą, nie zawsze wystarcza do zbudowania szczęśliwej relacji. Spełnienie wszystkich 5 warunków sprawia, że relacja zdobywa najniższe prawdopodobieństwo zerwania, a para czuje się ze sobą spełniona.",
            img_name: "5_warunkow_idealnego_zwiazku"
        },{
            key: 2,
            price: "39zł *",
            title: "“Zrozum siebie”",
            short_description: "<i>(filozofia, pewność siebie, rozwój osobisty)</i>",
            description:"Jesteśmy tym - co myślimy, mówimy, robimy i wszystkim innym, czego doświadczamy. Ta książka pomoże Ci uświadomić sobie, jak bardzo środowisko ma na nas wszystkich wpływ, jak ślepo powtarzamy niektóre czynności i co możemy zrobić, by przejąć nad tym kontrolę. Zrozumienie siebie jest nieodłącznym elementem szczęścia.",
            img_name: "zrozum_siebie"
        },{
            key: 3,
            price: "19zł *",
            title: "“30 nawyków szczęścia”",
            short_description: "<i>(dobre samopoczucie, rozwój osobisty)</i>",
            description:"Zbiór podstawowych nawyków, które pomogą Ci stać się szczęśliwą osobą. Opanowanie ich poprawia asertywność, pewność siebie, jakość codziennego fukcjonowania i zachęca do spojrzenia na świat z innej perspektywy.",
            img_name: "30_nawykow_szczescia"
        },
    ],

    current_offer: "*promocyjna cena z okazji premiery obowiązuje do 30.06.2022",
    packet: ""
};

const COACHING_DATA = {
    questions: ["Czym jest coaching?", "Kto może skorzystać z coachingu?", "Dlaczego coaching i dlaczego akurat ja?"],
    answers: [{
        text: [
        `Coaching jest przemyślanym procesem, bazującym na cyklu odpowiednio prowadzonych rozmów z osobą coachowaną, w celu stworzenia dla niej warunków do indywidualnego rozwoju, świadomych działań nastawionych na rezultaty i trwałych zmian w pożądanym kierunku. To proces auto przywództwa, który umożliwia ludziom uzyskanie świadomości kim są, co robią, dlaczego to robią i gdzie chcą dojść.`,

        `Głównym celem coachingu, jest pomoc ludziom w obiektywnym ustaleniu, gdzie znajdują się w chwili obecnej, a gdzie chcą się znaleźć w przyszłości oraz stworzenie planu, który pozwoli im przejść z punktu A do punktu B. Coach nie podejmuje decyzji za osobę coachowaną, lecz korzystając z odpowiednich narzędzi psychologicznych, które pod każdego wybiera indywidualnie (na bazie tego, co usłyszał podczas rozmowy) - wyjmuje z niej to, co najlepsze, by dzięki jej własnym zasobom i wartościom, wypracować postawiony cel.`,
        
        `Cechy charakterystyczne coachingu:`,
        ],

        u_list: [
        "dokonuje się w atmosferze szacunku i pełnej akceptacji dla wartości klienta",
        "pomaga ludziom uczyć się, a nie jest po to, by ich uczyć",
        "wyklucza jakąkolwiek dyrektywność ze strony coacha",
        "prowadzi do świadomego dokonywania zmian",
        "jest zbudowany na bazie pytań",
        "skupia się na osiąganiu celów",
        "pobudza do myślenia",
        "jest dobrowolny"
        ]
    },
    {
        text_one: `Coaching zaczyna się tam, gdzie pojawia się potrzeba zmiany. Zatem każdy może zapisać się na taką sesję. Najczęściej jednak pracuję z osobami, które:`,
        u_list: [
            "mają jakieś bariery lub negatywne przekonania o sobie",
            "szukają rozwiązań na swoje sprawy",
            "nie potrafią podjąć decyzji",
            "chcą po prostu być szczęśliwe",
            "chcą zmienić coś w swoim życiu",
            "chcą na nowo zacząć żyć po rozstaniu z partnerem",
            "chcą poprawić relację z partnerem, rodziną lub pracownikami",
            "chcą poprawić jakość swojego życia lub rozwinąć się w jakiejś dziedzinie, na przykład rozwinąć w sobie pewność siebie, asertywność, miłość, cierpliwość i wiele innych…"
            ],
        text_two: `Coaching jest dosłownie dla każdej osoby, która pragnie choć najmniejszej zmiany w swoim życiu. Ty decydujesz o temacie sesji i tym, czego tak naprawdę chcesz dla siebie. Podczas sesji, w każdej chwili możesz przerwać temat lub go zmienić. Nawet jeśli nie wiesz o czym chcesz porozmawiać - coaching ma na to sposób (dzięki psychologicznym narzędziom, bardzo szybko pomogę Ci odnaleźć się w Twoich myślach).`,
        offer_text: ["Dostępne są:", "Cennik sesji online:"],
        offer: {
            services: [`- sesje indywidualne (1na1)`, `- w parach (np. ze swoim partnerem)`],
            text_free: "<strong>Wstępna rozmowa - bezpłatna.</strong>",
            text_prices: ["- 1 (pojedyncza) - 150zł",
                "- 4x (pakiet 4) - 520zł",
                "- 10x (pakiet 10) - 1200zł"
            ],
        },
    },
    {
        u_list: [
        `Podstawowa różnica między terapią a coachingiem jest taka, że terapia jest przejściem z dysfunkcji do normy, natomiast coaching jest przejściem z normy do skuteczności (w życiu, zawodzie, związku…). Praktyka to coś, co sobie bardzo cenię. Jestem człowiekiem nastawionym na rozwiązania, nie mam tendencji do rozpamiętywania przeszłości, jestem optymistą i znam swoje mocne strony. Mam naturalne predyspozycje do prowadzenia sesji coachingowych i skutecznie się w tym spełniam.`,

        `Wybrałem ten system, dlatego że stosowałem jego narzędzia (na sobie i innych), zanim w ogóle poznałem, czym on jest. Narzędzia te pomogły mi w staniu się tym, kim jestem dzisiaj, dlatego wiem, że system działa i w połączeniu z moimi umiejętnościami, jestem w stanie pomóc też innym w ich drodze do spełnienia.`,
        
        `Wyobraź sobie, że w Twoim życiu wszystko się układa, masz nad wszystkim kontrolę, czujesz się “pełny(a)” i akceptujesz to, kim jesteś oraz jak jest dookoła Ciebie. Każdego dnia budzisz się z uśmiechem i masz chęci do działania. Nawet jeśli jest kilka rzeczy do poprawy, to i tak czujesz, że żyjesz. Tak widzę swoje życie - i Twoje też tak może wyglądać.`,
        
        `Według mnie, praca, która jakkolwiek wpływa na nas toksycznie, nie jest warta żadnego czasu. Nic też nie jest warty związek, w którym zamiast przyjaźni, występuje wrogość i częste kłótnie. Żadna minuta nie jest warta pesymizmu, który utrzymuje nas z dala od radości. By móc zbudować sobie lepsze życie, lepszą rzeczywistość, potrzebujemy uporządkować aktualne sprawy, wzmocnić poczucie własnej wartości, stać się asertywnym i pewnym siebie człowiekiem oraz nauczyć się życzliwości - to wszystko prezentuję w swoim życiu prywatnym, więc nie umawiasz się z teoretykiem, lecz kimś, kto w praktyce wyznaje wartości człowieka szczęśliwego. Poprawiając jedną sferę życia, wpływa ona na kilka innych - jestem kimś, kto doskonale rozumie tę regułę i pomagam wdrażać to w codzienność moich klientów. Z odpowiednim nastawieniem i cierpliwością w sercu, możesz zbudować swoją lepszą rzeczywistość - a coaching jest do tego najlepszym narzędziem.`,

        `<i>“Mała szansa na osiągnięcie celu, nie powinna zniechęcać do podjęcia próby”.</i>.`,
        
        `Zapraszam Cię do skorzystania z oferty - jestem pewny, że tak jak moi dotychczasowi klienci, już po dwóch-trzech spotkaniach dostrzeżesz znaczną różnicę (niektórzy nawet po jednej sesji osiągają swój cel). A jeśli nigdy nie pracowałeś/aś w coachingu i masz wątpliwości - skontaktuj się ze mną i skorzystaj ze wstępnej, całkowicie darmowej konsultacji. Porozmawiamy o Twoich potrzebach, oczekiwaniach i odpowiem na pytania.`,
        ],
    },
    ]
}

const CONTACT_DATA = {
    description: "Jestem dostępny tutaj:",
    email_address: "najpierwjakontakt@gmail.com",
    phone_nr: "690-939-066",
    instagram: "@najpierw_ja",
};


const MOCK_DATA = {
    HOME_DATA,
    ABOUT_DATA,
    EBOOKS_DATA,
    COACHING_DATA,
    CONTACT_DATA,
};

export default MOCK_DATA;