const HOME_DATA = {
    quote: "„Szczęśliwy człowiek, dzielący się szczęściem.”"
}

const ABOUT_DATA = {
    pretext: "Kim jestem:",
    text_one: `Cześć! Nazywam się Paweł Kowalski.
    Większość osób kojarzy mnie z social mediów, pod pseudonimem “najpierw ja”. W internecie oraz w życiu prywatnym, określam siebie jako osobę szczęśliwą i otwartą na rozmowę. To mój naturalny talent - potrafię każdego dnia poznać kogoś nowego i szczerze się nim zainteresować. Na tym też buduję swoją markę - uwielbiam poznawać drugiego człowieka takim, jakim jest, bez oceniania go, ponieważ rozumiem, że każdy ma swoje indywidualne wartości i potrzeby.\n
    
    Od kiedy założyłem profil @najpierw_ja, codziennie rozmawiam z ludźmi i dzielę się wiedzą na temat kochania siebie, relacji partnerskich, drogi do szczęścia, pewności siebie i spraw biznesowych - to moje główne tematy, w których rozwijam się od lat (nie tylko teoretycznie, ale przede wszystkim sprawdzam je w praktyce) i nie zamierzam przestać.\n
    
    Jak to się stało, że robię to, co robię? Czasem mam wrażenie, że to nie ja wybrałem tę ścieżkę życia, a to ta ścieżka życia wybrała mnie - bo wszystko co robię, jest związane z moimi pasjami. Zaczęło się lata temu, od zwykłych wyjść na kawę i szczerego dzielenia wnioskami o życiu, nie ukrywając ani pozytywnych, ani negatywnych myśli (dalej zdarza mi się tak spędzać czas). Ludzie, z którymi się spotykałem, mówili mi, że taka rozmowa bardzo im pomaga i powinienem pomyśleć o psychologii, coachingu lub jakiejś innej formie pracy, w której miałbym kontakt z klientem 1na1. Na początku przyjmowałem to jako komplement, lecz z czasem zacząłem rozumieć, że to jest coś, czym bardzo chcę się zajmować.
    
    Zatem najpierw spotykałem się z ludźmi twarzą w twarz, następnie przeniosłem się na instagram, gdzie rozmowy nie wyglądały tak samo, ponieważ najczęściej pisały do mnie osoby z jakimiś nierozwiązanymi sprawami, z prośbami o podpowiedź, albo bezpośrednio zadawały pytania typu: “jak pokochać siebie”, “jak stać się pewną siebie osobą?” lub “jak zwiększyć poczucie własnej wartości?”.
    
    Wraz z rozwojem profilu, kontaktowało się ze mną coraz więcej osób, a dzień nadal miał tylko 24 godziny. Mając pracę, pasję, znajomych - stanąłem przed ważnym wyborem: “albo ograniczam relacje z obserwatorami i zajmuję się rozwojem życia prywatnego, albo wchodzę w to całym sobą”. Jak się domyślasz – wybrałem opcję drugą, dlatego powstała ta strona. By bardziej rozwinąć swoje umiejętności komunikacyjne i nieść profesjonalną pomoc, ukończyłem kilka kursów w tym kierunku oraz zdobyłem tytuł: “Meritum Certified Coach”. Dzięki temu, na co dzień prowadzę sesje online, na których z pomocą narzędzi psychologicznych, przechodzę z klientami przez ważne dla nich tematy lub szkolę ich z wybranej dziedziny.
    
    W międzyczasie działam w branży pisarskiej - jestem autorem wspomnianego wyżej profilu na instagramie oraz ebooków:`,

    u_list:[
    "“5 warunków idealnego związku” (zdrowe relacje, rozwój osobisty)",
    "“Zrozum siebie” (filozofia, pewność siebie, rozwój osobisty)",
    "“30 nawyków szczęścia” (dobre samopoczucie, rozwój osobisty)",
    ],

    text_two:`
    … i nadchodzą kolejne tytuły! Nie spodziewam się, że przestanę kiedyś pisać, ponieważ jest to moja największa pasja, która od 2013 roku sprawia mi ogromną radość i pozwala mi dzielić się wiedzą w bardziej szczegółowy i zrozumiały sposób. Mogę to robić całymi dniami. Lubię dużo pracować, ponieważ robię to, co kocham - czy w takim razie jest to praca?
    
    A czym zajmowałem się wcześniej? Rozwijałem się w branży fitness. Prowadziłem treningi personalne oraz byłem koordynatorem trenerów i instruktorów. Jeszcze wcześniej pracowałem na stanowisku kierowniczym w salonie sprzedażowym i w wolnej chwili, z pasji do muzyki, występowałem ulicznie w Warszawie (tak, mam swoje piosenki, ale pisarstwo jest odrobinę większą pasją w tym momencie mojego życia, więc niczego muzycznego jeszcze nie wydam - c i e r p l i w o ś c i ).
    
    Moja prywatność jest bardzo połączona z moimi projektami, dlatego zawsze jestem sobą. Uważam, że bez autentyczności, nie można cieszyć się swoim życiem, ani pracą. A w naprawdę wolnych chwilach, ćwiczę na siłowni, spędzam czas w kawiarni z książką i bez przerwy słucham muzyki (mam wrażenie, że Spotify i producenci słuchawek utrzymują się głównie dzięki mnie). Dodatkowo uczę się grać na klawiszach oraz szlifuję Hiszpański.
    
    Często w swoim otoczeniu powtarzam to, jak ważnym elementem miłości do samego siebie jest pasja. Nie mógłbym rozwijać się w czymś, co mi się nie podoba, co sprawia że czuję się źle lub przez co sam zaczynam być dla innych toksycznym środowiskiem. Porzuciłem konfliktowe życie już dawno temu i zbudowałem swoje pozytywne środowisko od zera. Jestem szczęśliwym człowiekiem, który z każdym rokiem czuje się coraz młodziej - i tym pragnę dzielić się ze światem.
    
    Moje motto: “Mała szansa na osiągnięcie celu, nie powinna zniechęcać do podjęcia próby”.`
};

const EBOOKS_DATA = {
    heading: "Moje",
    boldheading: "E-booki",

    u_list:[{
        key: 1,
        title: "“5 warunków idealnego związku”",
        description: "(zdrowe relacje, rozwój osobisty)",
        },{
        key: 2,
        title: "“Zrozum siebie”",
        description: "(filozofia, pewność siebie, rozwój osobisty)",
        },{
        key: 3,
        title: "“30 nawyków szczęścia”",
        description: "(dobre samopoczucie, rozwój osobisty)",
        },]
};

const COACHING_DATA = {
    questions: ["Czym jest coaching?", "Kto może skorzystać z coachingu?", "Dlaczego coaching i dlaczego akurat ja?"],
    answers: [{
        text: `Coaching jest przemyślanym procesem, bazującym na cyklu odpowiednio prowadzonych rozmów z osobą coachowaną, w celu stworzenia dla niej warunków do indywidualnego rozwoju, świadomych działań nastawionych na rezultaty i trwałych zmian w pożądanym kierunku. To proces auto przywództwa, który umożliwia ludziom uzyskanie świadomości kim są, co robią, dlaczego to robią i gdzie chcą dojść.

        Głównym celem coachingu, jest pomoc ludziom w obiektywnym ustaleniu, gdzie znajdują się w chwili obecnej, a gdzie chcą się znaleźć w przyszłości oraz stworzenie planu, który pozwoli im przejść z punktu A do punktu B.
        
        Coach nie podejmuje decyzji za osobę coachowaną, lecz korzystając z odpowiednich narzędzi psychologicznych, które pod każdego wybiera indywidualnie (na bazie tego, co usłyszał podczas rozmowy) - wyjmuje z niej to, co najlepsze, by dzięki jej własnym zasobom i wartościom, wypracować postawiony cel.
        
        Cechy charakterystyczne coachingu:`,

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
        text_one: `Każdy może zapisać się na taką sesję. Najczęściej jednak pracuję z osobami, które:`,
        text_two: `Coaching jest dosłownie dla każdej osoby, która pragnie choć najmniejszej zmiany w swoim życiu. Ty decydujesz o temacie sesji i tym, czego tak naprawdę chcesz dla siebie. Podczas sesji, w każdej chwili możesz przerwać temat lub go zmienić. Nawet jeśli nie wiesz o czym chcesz porozmawiać - coaching ma na to sposób (dzięki psychologicznym narzędziom, bardzo szybko pomogę Ci odnaleźć się w Twoich myślach).`,
        offer: `Dostępne są: sesje indywidualne (1na1), w parach (np. ze swoim partnerem) lub grupowe (dla firmy, pracowników, sportowców, grona rodzinnego i tak dalej…).`,
        u_list: [
        "mają jakieś bariery lub negatywne przekonania o sobie",
        "szukają rozwiązań na swoje sprawy",
        "nie potrafią podjąć decyzji",
        "chcą po prostu być szczęśliwe",
        "chcą zmienić coś w swoim życiu",
        "chcą na nowo zacząć żyć po rozstaniu z partnerem",
        "chcą poprawić relację z partnerem, rodziną lub pracownikami",
        "chcą poprawić jakość swojego życia lub rozwinąć się w jakiejś dziedzinie, na przykład rozwinąć w sobie pewność siebie, asertywność, miłość, cierpliwość i wiele innych…"
        ]
    },
    {
        text: `Podstawowa różnica między terapią a coachingiem jest taka, że terapia jest przejściem z dysfunkcji do normy, natomiast coaching jest przejściem z normy do skuteczności (w życiu, zawodzie, związku…). Praktyka to coś, co sobie bardzo cenię. Jestem człowiekiem nastawionym na rozwiązania, nie mam tendencji do rozpamiętywania przeszłości, jestem optymistą i znam swoje mocne strony. Mam naturalne predyspozycje do prowadzenia sesji coachingowych i skutecznie się w tym spełniam.

        Wybrałem ten system, dlatego że stosowałem jego narzędzia (na sobie i innych), zanim w ogóle poznałem, czym on jest. Narzędzia te pomogły mi w staniu się tym, kim jestem dzisiaj, dlatego wiem, że system działa i w połączeniu z moimi umiejętnościami, jestem w stanie pomóc też innym w ich drodze do spełnienia.
        
        Wyobraź sobie, że w Twoim życiu wszystko się układa, masz nad wszystkim kontrolę, czujesz się “pełny(a)” i akceptujesz to, kim jesteś oraz jak jest dookoła Ciebie. Każdego dnia budzisz się z uśmiechem i masz chęci do działania. Nawet jeśli jest kilka rzeczy do poprawy, to i tak czujesz, że żyjesz. Tak wygląda moje życie - i Twoje też tak może wyglądać.
        
        Według mnie, praca, która jakkolwiek wpływa na nas toksycznie, nie jest warta żadnego czasu. Nic też nie jest warty związek, w którym zamiast przyjaźni, występuje wrogość i częste kłótnie. Żadna minuta nie jest warta pesymizmu, który utrzymuje nas z dala od radości. By móc zbudować sobie lepsze życie, lepszą rzeczywistość, potrzebujemy uporządkować aktualne sprawy, wzmocnić poczucie własnej wartości, stać się asertywnym i pewnym siebie człowiekiem oraz nauczyć się życzliwości - to wszystko prezentuję w swoim życiu prywatnym, więc nie umawiasz się z teoretykiem, lecz kimś, kto w praktyce wyznaje wartości człowieka szczęśliwego. Poprawiając jedną sferę życia, wpływa ona na kilka innych - jestem kimś, kto doskonale rozumie tę regułę i pomagam wdrażać to w życie moich klientów. Z odpowiednim nastawieniem i cierpliwością w sercu, możesz zbudować swoje lepsze życie - a coaching jest do tego najlepszym narzędziem.
        
        Zapraszam Cię do skorzystania z mojej oferty - jestem pewny, że tak jak moi dotychczasowi klienci, już po dwóch-trzech spotkaniach dostrzeżesz znaczną różnicę (niektórzy nawet po jednej sesji osiągają swój cel). A jeśli nigdy nie pracowałeś/aś w coachingu i masz wątpliwości - skontaktuj się ze mną i skorzystaj ze wstępnej, całkowicie darmowej konsultacji. Porozmawiamy o Twoich potrzebach, oczekiwaniach i odpowiem na Twoje pytania.`,
    },
    ]
}

const SERVICE_DATA = {
    heading: "Best",
    boldheading: "Services",
    description: "It is a long established fact that a reader will be of a page when established fact looking at its layout.",
    services_list: [{
        key: 1,
        label: "Digital Design",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: "ti-settings"
    },
    {
        key: 2,
        label: "Unlimited Colors",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: "ti-palette"
    },
    {
        key: 3,
        label: "Strategy Solutions",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: "ti-stats-up"
    },
    {
        key: 4,
        label: "Awesome Support",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: "ti-package"
    },
    {
        key: 5,
        label: "Truly Multipurpose",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: "ti-dashboard"
    },
    {
        key: 6,
        label: "Easy to customize",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: "ti-headphone"
    },
    ]
};

const FEATURES_DATA = {
    heading: "Our",
    boldheading: "Features",
    description: "It is a long established fact that a reader will be of a page when established fact looking at its layout.",
    feature_list: [
        {
            key: 1,
            img: 'assets/images/mockup2.png',
            title: "This is Improve Your Marketing business",
            subtitle: "business",
            type: "right",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quisnostrud ."
        },
        {
            key: 2,
            img: 'assets/images/mockup1.png',
            type: "left",
            title: "This Is Increase Your Marketing Performance",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quisnostrud ."
        },
    ]
};

const TESATIMONIAL_DATA = {
    testimonial_list: [
        {
            profile: 'assets/images/testi/testi-1.jpg',
            description: "Risus cubilia etiam parturient augue nostra sodales sit aptent venenatis magna sapienante hendrerit ullamcorper tincidunt urna eget Ante feugiat.",
            name: 'John Litts, Globing'
        },
        {
            profile: 'assets/images/testi/testi-2.jpg',
            description: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sit amet semper justo.nature and its beauty.",
            name: 'Laurie Bell',
            text: 'Worcester'
        },
        {
            profile: 'assets/images/testi/testi-3.jpg',
            description: "I've learned that people will forget what you said, people will forget what you did,but people will never forget how donec in efficitur lectus, nec lobortis metus you made them feel.",
            name: 'Howard Kelley',
            text: 'Lynchburg'
        }
    ]
};

const TEAM_DATA = {
    heading: "Our",
    boldheading: "Team",
    description: "It is a long established fact that a reader will be of a page when established fact looking at its layout.",
    team_list: [
        {
            profile: 'assets/images/team/team-3.png',
            name: '@Donald Laughlin',
            designation: 'You want customer to your store. Easily your coupans and has Clooger.'
        },
        {
            profile: 'assets/images/team/team-2.png',
            name: '@Rigoberto Valenza',
            designation: 'You want customer to your store. Easily your coupans and has Clooger.'
        },
        {
            profile: 'assets/images/team/team-1.png',
            name: '@Venessa Smith',
            designation: 'You want customer to your store. Easily your coupans and has Clooger.'
        }
    ]
};

const FAQDATA = {
    heading: "Our",
    boldheading: "Support",
    description: "It is a long established fact that a reader will be of a page when established fact looking at its layout.",
    pricing_list: [
        {
            pricing1: [{
                title: 'What is Lorem Ipsum?',
                description: 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
            },
            {
                title: 'Why use Lorem Ipsum?',
                description: 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
            },
            {
                title: 'How many variations exist?',
                description: 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
            }]
        },
        {
            pricing1: [
                {
                    title: 'What is Lorem Ipsum?',
                    description: 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
                },
                {
                    title: 'Is safe use Lorem Ipsum?',
                    description: 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
                },
                {
                    title: 'When can be used?',
                    description: 'You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.'
                }]
        }

    ]
};

const CTA_SECTION = {
    title: 'You have another questions or need help?',
    buttontext: 'Contact Us'
};

const PRICING_DATA = {
    heading: "Our",
    boldheading: "Pricing",
    description: 'It is a long established fact that a reader will be of a page when established fact looking at its layout.',
    pricing_list: [
        {
            price: '$29',
            bandwidth: '1GB',
            onlinespace: '50MB',
            support: 'No',
            domain: 1,
            hiddenfees: 'No Hidden Fees'
        },
        {
            price: '$59',
            bandwidth: '2GB',
            onlinespace: '500MB',
            support: 'Yes',
            domain: 5,
            hiddenfees: 'No Hidden Fees'
        },
        {
            price: '$79',
            bandwidth: '4GB',
            onlinespace: '1 GB',
            support: 'Yes',
            domain: 10,
            hiddenfees: 'No Hidden Fees'
        }
    ]
};

const CONTACT_DATA = {
    description: "Jestem dostępny tutaj:",
    email_address: "najpierwjakontakt@gmail.com",
    phone_nr: "690939066",
    instagram: "@najpierw_ja",
};

const CONTACTDATA = {
    heading: "Get In",
    boldheading: "Touch",
    description: 'It is a long established fact that a reader will be of a page when established fact looking at its layout.',
    customercare: "+1 234 56 7894",
    officeaddress: "4461 Cedar Street Moro, AR 72368",
    emailaddress: "info@gmail.com",
    officetime: "+9:00AM To 6:00PM",
};

const MOCK_DATA = {
    HOME_DATA,
    ABOUT_DATA,
    EBOOKS_DATA,
    COACHING_DATA,
    CONTACT_DATA,
    SERVICE_DATA,
    FEATURES_DATA,
    TESATIMONIAL_DATA,
    TEAM_DATA,
    FAQDATA,
    CTA_SECTION,
    PRICING_DATA,
    CONTACTDATA
};

export default MOCK_DATA;