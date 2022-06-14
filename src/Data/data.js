const HOME_DATA = {
    quote: "„Szczęśliwy człowiek, dzielący się szczęściem.”"
}

const ABOUT_DATA = {
    pretext: "Kim jestem:",
    text_list: [`Cześć! Nazywam się Paweł Kowalski.`,

    `Większość osób kojarzy mnie z social mediów, pod pseudonimem “najpierw ja”. W internecie oraz w życiu prywatnym, określam siebie jako osobę szczęśliwą i otwartą na rozmowę. To mój naturalny talent - potrafię każdego dnia poznać kogoś nowego, szczerze się nim zainteresować i przede wszystkim nie oceniać, ponieważ rozumiem, że każdy ma swoje indywidualne wartości i potrzeby.`,
    
    `Od kiedy założyłem profil <strong>@najpierw_ja</strong>, codziennie dzielę się wiedzą na temat kochania siebie, bliskich relacji, drogi do szczęścia, pewności siebie i spraw biznesowych - to moje główne tematy, w których edukuję się od lat (przede wszystkim w praktyce).`,
    
    `Jak to się stało, że robię to, co robię? Czasem mam wrażenie, że nie ja wybrałem tę ścieżkę życia, a to ta ścieżka wybrała mnie - ponieważ zawody które wykonuję, oparte są na moich naturalnych zdolnościach. Zaczęło się lata temu, od zwykłych wyjść na kawę i szczerego dzielenia wnioskami o życiu. Ludzie, z którymi się spotykałem, mówili mi, że taka rozmowa pomaga im poukładać swoje sprawy i powinienem pomyśleć o psychologii, coachingu lub jakiejś innej formie pracy, w której miałbym kontakt z klientem 1na1, bo na pewno się w niej spełnię. Na początku przyjmowałem to tylko jako komplement, lecz z czasem zacząłem rozumieć, że to naprawdę jest coś, czym chcę się zajmować.`,
    
    `Instagram stał się nowym miejscem spotkań, a wraz z rozwojem profilu kontaktowało się ze mną coraz więcej osób. Była to dla mnie dobra wiadomość, lecz dzień nadal miał tylko 24 godziny, więc zaczynało brakować czasu. Mając pracę, pasję, znajomych - stanąłem przed ważnym wyborem: “albo ograniczam relacje z obserwatorami i zajmuję się rozwojem życia dotychczasowego jako trener personalny w branży fitness, albo wchodzę w to całym sobą i rozwijam się profesjonalnie w coachingu”. Jak się domyślasz – wybrałem opcję drugą. Ukończyłem więc szkolenia w oparciu o standardy i kodeks etyczny ICF, uzyskując międzynarodowy tytuł: “Meritum Certified Coach”. Dzięki temu, na co dzień prowadzę sesje online, na których z pomocą narzędzi psychologicznych, przechodzę z klientami przez ważne dla nich tematy życiowe (tzw. life coaching).`,
    
    `W międzyczasie działam w branży pisarskiej - jestem autorem wspomnianego wyżej profilu na instagramie oraz ebooków:`,
    ]
};

const EBOOKS_DATA = {
    heading: "Moje",
    boldheading: "E-booki",

    u_list:[{
            key: 1,
            price: "59zł",
            title: "“5 warunków idealnego związku”",
            short_description: "<i>(zdrowe relacje, pewność siebie, typy osobowości)</i>",
            description:"Zdania na temat tego co w związku jest najważniejsze, są podzielone. W tej książce nie stosuję podziału na „gorsze/lepsze” warunki, lecz opisuję wszystkie dokładnie z taką samą wartością, by uświadomić czytelnikowi, że nawet połączenie pasującego charakteru z ładną twarzą, nie zawsze wystarcza do zbudowania szczęśliwej relacji. Spełnienie wszystkich 5 warunków sprawia, że relacja zdobywa najniższe prawdopodobieństwo zerwania, a para czuje się ze sobą spełniona.",
            img_name: "5_warunkow_idealnego_zwiazku"
        },{
            key: 2,
            price: "39zł",
            title: "“Zrozum siebie”",
            short_description: "<i>(filozofia, pewność siebie, rozwój osobisty)</i>",
            description:"Jesteśmy tym - co myślimy, mówimy, robimy i wszystkim innym, czego doświadczamy. Ta książka pomoże Ci uświadomić sobie, jak bardzo środowisko ma na nas wszystkich wpływ, jak ślepo powtarzamy niektóre czynności i co możemy zrobić, by przejąć nad tym kontrolę. Zrozumienie siebie jest nieodłącznym elementem szczęścia.",
            img_name: "zrozum_siebie"
        },{
            key: 3,
            price: "19zł",
            title: "“30 nawyków szczęścia”",
            short_description: "<i>(dobre samopoczucie, rozwój osobisty)</i>",
            description:"Zbiór podstawowych nawyków, które pomogą Ci stać się szczęśliwą osobą. Opanowanie ich poprawia asertywność, pewność siebie, jakość codziennego fukcjonowania i zachęca do spojrzenia na świat z innej perspektywy.",
            img_name: "30_nawykow_szczescia"
        },
    ],

    current_offer: "*promocyjna cena z okazji premiery obowiązuje do 30.06.2022",
    packet: "Pakiet 3 e-booków w cenie 99zł! - Po dodaniu do koszyka, rabat uwzględni się automatycznie."
};

const COACHING_DATA = {
    questions: ["Czym jest coaching?", "Kto może skorzystać z sesji?", "Dlaczego coaching i dlaczego akurat ja?"],
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
        
        `Wyobraź sobie, że w Twoim życiu wszystko się układa, masz nad wszystkim kontrolę, czujesz się “pełny(a)” i akceptujesz to, kim jesteś oraz jak jest dookoła Ciebie. Każdego dnia budzisz się z uśmiechem i masz chęci do działania. Nawet jeśli jest kilka rzeczy do poprawy, to i tak czujesz, że żyjesz. Tak widzę swoje życie - i Twoje też tak może wyglądać.`,
        
        `Według mnie, praca, która jakkolwiek wpływa na nas toksycznie, nie jest warta żadnego czasu. Nic też nie jest warty związek, w którym zamiast przyjaźni, występuje wrogość i częste kłótnie. Żadna minuta nie jest warta pesymizmu, który utrzymuje nas z dala od radości. By móc zbudować sobie lepsze życie, lepszą rzeczywistość, potrzebujemy uporządkować aktualne sprawy, wzmocnić poczucie własnej wartości, stać się asertywnym i pewnym siebie człowiekiem oraz nauczyć się życzliwości - to wszystko prezentuję w swoim życiu prywatnym, więc nie umawiasz się z teoretykiem, lecz kimś, kto w praktyce wyznaje wartości człowieka szczęśliwego. Poprawiając jedną sferę życia, wpływa ona na kilka innych - jestem kimś, kto doskonale rozumie tę regułę i pomagam wdrażać to w codzienność moich klientów. Z odpowiednim nastawieniem i cierpliwością w sercu, możesz zbudować swoją lepszą rzeczywistość - a coaching jest do tego najlepszym narzędziem.`,

        `<i>“Mała szansa na osiągnięcie celu, nie powinna zniechęcać do podjęcia próby”.</i>`,
        
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

const TERMS_OF_USE = {
    definitions: {
        desc : "Przyjmuje się następujące znaczenia definicji, użytych na potrzeby niniejszego regulaminu:",
        list : [
            "Regulamin – zawarty w poniższej treści zbiór zasad dotyczących sprzedaży Usług Coachingowych oraz Produktów opisanych szczegółowo w pkt. 4 poniżej.",

            "Serwis – realizowanie przez Administratora transakcji online w zakresie świadczenia Usług Coachingowych stacjonarnych i online oraz Produktów udostępnionych odbiorcy na łamach strony internetowej dostępnej pod adresem https://najpierwja.pl/.",

            "Administrator – Paweł Kowalski, prowadzący działalność gospodarczą pod nazwą „NAJPIERW JA Paweł Kowalski” z siedzibą w Godzianowie, przy ul. Północnej 98, 96-126 Godzianów, NIP: 8361879874, Regon 522117940.",

            "Usługi Coachingowe i Produkty – sprzedawane i świadczone bezpośrednio przez Administratora usługi i produkty, w szczególności sesji coachingowe stacjonarne i online, pakiety sesji coachingowych oraz e-booki.",

            "Klient – osoba fizyczna, prawna albo jednostka organizacyjna nie posiadająca osobowości prawnej posiadająca pełną zdolność do czynności prawnych, przy zastrzeżeniu, iż Klient, mający zamiar korzystania z Serwisu w ramach prowadzonej działalności gospodarczej lub reprezentujący osobę prawną nie jest konsumentem w rozumieniu przepisów powszechnie obowiązującego prawa. Osoba reprezentująca osobę prawną przed rozpoczęciem korzystania z Serwisu jest także obowiązana przesłać na adres siedziby Operatora stosowne pełnomocnictwo do jej reprezentowania.",

            "Umowa – umowa cywilnoprawna, do zawarcia której dochodzi poprzez złożenie Zamówienia online, której przedmiotem jest nabycie Usług Coachingowych bądź Produktów.",

            "Zamówienie – zgłoszenie chęci zakupu Usług Coachingowych i/lub Produktów na warunkach określonych ofertą dostępną na stronie https://najpierwja.pl/ oraz niniejszym regulaminem, poprzez wypełnienie i wysłanie umieszczonego na stronie formularza zamówienia."
        ]
    },

    general_rules: {
        list: [
            "Regulamin określa warunki oraz zasady sprzedaży i świadczenia Usług Coachingowych i Produktów przez Administratora za pośrednictwem Serwisu.",

            "Każda osoba składająca Zamówienie w Serwisie jest zobowiązana zapoznać się z regulaminem.",

            "Poprzez złożenie zamówienia w Serwisie Klient potwierdza fakt zapoznania się z Regulaminem i potwierdza, że akceptuje go w obowiązującej formie.",

            "Sprzedaż odbywa się za pośrednictwem Serwisu poprzez zawarcie Umowy na odległość, zawartej pomiędzy Administratorem oraz Klientem.",

            "Wymagania techniczne niezbędne do współpracy z Serwisem to dowolna graficzna przeglądarka internetowa z włączoną obsługą JavaScript i plików cookies, oraz zainstalowanymi aplikacjami umożliwiającymi odtwarzanie plików Adobe PDF. Administrator nie ponosi odpowiedzialności za nieprawidłowe funkcjonowanie Serwisu, którego przyczyną są nieprawidłowości po stronie Klienta oraz brak spełnienia podstawowych wymagań technicznych.",

            "Wszelkie informacje o ewentualnych przerwach technicznych oraz brakach dostępu do Serwisu Administrator będzie publikował na stronie głównej Serwisu."
        ]
    },

    contract_and_delivery: {
        list: [
            "Po dokonaniu wyboru Produktu lub Usługi Coachingowej Klient składa zamówienie poprzez wypełnienie odpowiedniego formularza zamówienia, podanie wymaganych danych oraz kliknięcie przycisku „ZAPŁAĆ W PAYU”.",

            "Wysłanie zamówienia wymaga wcześniejszego zaznaczenia pola: „Akceptuję regulamin sklepu” i „Wyrażam zgodę na przetwarzanie danych osobowych w celu zakupu”.",

            "Klient ma możliwość dokonania płatności za swoje zamówienie poprzez autoryzowany system płatności online na zasadach tam opublikowanych.",

            "Po wypełnieniu formularza, wybraniu formy płatności i kliknięciu „ZAPŁAĆ W PAYU” Klient zostaje przekierowany do płatności. Po złożeniu zamówienia Klient otrzymuje automatyczne potwierdzenie za pomocą wiadomości e-mail, co oznacza prawidłowe złożenie Zamówienia.",

            "Po zaksięgowaniu płatności na koncie Administratora Klient uzyskuje dostęp do zamówionych materiałów w formie pliku pdf wysłanego mailowo i/lub dostępu do strony lub stron z materiałami."
        ],

        coaching_payment_info: "Płatności za usługi coachingowe można również dokonać poprzez przelew odpowiedniej kwoty na numer bankowy: 47 1140 2004 0000 3802 8169 7698 pod nazwą “Paweł Kowalski” i dowolnym tytułem przelewu (proponowany: “coaching” lub w przypadku pakietu: “coaching pakiet”) lub BLIK na numer telefonu 690939066 z tymi samymi danymi.",
        
        coaching_payment_addition: "W przypadku, gdy użytkownik dokonał płatności za usługi coachingowe, (sesję lub pakiet sesji), właściciel serwisu skontaktuje się z nim w ciągu 24h od momentu skutecznego dokonania płatności, w celu ustalenia terminu sesji, a w przypadku pakietu – w celu ustalenia terminu pierwszej sesji."
    },

    prices: "Wszystkie ceny podane w ramach oferty na stronie https://najpierwja.pl/  wyrażone są w złotych polskich (PLN) i są cenami brutto.",

    statements: [
        "Administrator oświadcza, że jest autorem wszystkich materiałów dostępnych w ramach Produktów oraz Usług Coachingowych i zastrzega, że wszelkie informacje, wskazówki  i sugestie zawarte na stronie https://najpierwja.pl/ oraz dostępnych tam Produktach powstały na bazie wiedzy autora z dziedziny coachingu oraz jego osobistych doświadczeń, nie stanowią jedynych słusznych rozwiązań i nie mogą być traktowane jako doradztwo.",

        "Mają one na celu skłonić osoby z nich korzystające do osobistej refleksji, a także stanowić inspirację, wskazówkę i motywację do pracy nad własnym rozwojem."
    ],

    complaint: "W przypadku problemów technicznych z produktem nabywca może zgłosić reklamację towaru na adres najpierwjakontakt@gmail.com. Wszelkie zgłoszenia będą rozpatrywane indywidualnie.",

    refund: [
        "Zgodnie z Ustawą o prawach konsumenta z dnia 30 maja 2014 r. (Dz.U. 2014 r. poz. 827 ze zm), Klient, który zawarł umowę na odległość, może w terminie 14 dni kalendarzowych odstąpić od niej bez podawania przyczyny.",

        "Aby skorzystać z prawa odstąpienia od umowy, użytkownik musi poinformować właściciela serwisu o swojej decyzji o odstąpieniu od umowy w drodze jednoznacznego oświadczenia (na przykład pismo wysłane pocztą elektroniczną).",

        "Zgodnie z prawem użytkownikowi nie przysługuje jednak prawo odstąpienia od umowy w przypadku, gdy rozpoczął on już korzystanie z zamówionych usług lub produktów."
    ],

    personal_data_and_cookies: [
        "Administrator gromadzi i przetwarza dane osobowe klientów na potrzeby realizacji oferty oraz w celu informowania o innych produktach i usługach. Zasady przetwarzania danych osobowych i wykorzystywania plików cookies zostały opisane w polityce prywatności dostępnej pod adresem https://najpierwja.pl/polityka_prywatnosci",

        "Podanie danych osobowych w formularzu zamówienia i/lub formularzu kontaktowym jest niezbędne do przeprowadzenia transakcji zakupu. Dane przesłane przez Klienta powinny umożliwić kontakt oraz skuteczną realizację zamówienia złożonego na https://najpierwja.pl/",

        "Administrator nie ponosi odpowiedzialności za wszelkie trudności bądź konsekwencje błędnie podanych danych osobowych oraz teleadresowych w formularzu zamówienia i/lub formularzu kontaktowym.",

        "Administrator zastrzega sobie prawo odstąpienia od realizacji zamówienia, w przypadku otrzymania od Klienta niekompletnych danych (brak imienia, nazwiska, adresu, numeru telefonu, adresu mailowego) lub gdy dane podane przez Klienta są błędne lub nieprawdziwe.",

        "Niewysłanie przez Klienta danych osobowych w zakresie niezbędnym do realizacji zamówienia, uniemożliwia jego realizację. Przesyłanie danych osobowych przez Klienta jest dobrowolne."
    ],

    future_changes: [
        "Administrator ma prawo do zmiany Regulaminu w każdym czasie i w dowolnym zakresie, z zastrzeżeniem obowiązującego prawa.",

        "Klienci mają prawo i obowiązek zapoznać się ze zmienionym Regulaminem.",

        "Zmiany regulaminu stają się skuteczne z dniem ich opublikowania, przy czym nie dotyczą Klientów, którzy zawarli umowę przed ich wprowadzeniem."
    ]
};

const PRIVACY_POLICY = {
    desc_list: [
        "Niniejsza polityka prywatności reguluje sposób gromadzenia, wykorzystywania, przechowywania i ujawniania przez najpierwja.pl gromadzonych informacji pochodzących od użytkowników (zwanych dalej zbiorowo „Użytkownikami”, a indywidualnie „Użytkownikiem”) strony internetowej najpierwja.pl (zwanej dalej „Stroną internetową”), a także zasady wykorzystywania plików cookies i innych technologii w ramach Strony internetowej. Niniejsza polityka prywatności ma zastosowanie w odniesieniu do Strony internetowej oraz wszystkich produktów i usług oferowanych przez najpierwja.pl.",

        "Administratorem Strony internetowej i administratorem danych osobowych Użytkowników jest Paweł Kowalski (zwany dalej „Administratorem”), prowadzący działalność gospodarczą pod firmą NAJPIERW JA Paweł Kowalski, ul. Północna 98, 96-126 Godzianów, NIP 8361879874, Regon 522117940. Kontakt z administratorem jest możliwy pod adresem e-mail: najpierwjakontakt@gmail.com."
    ],

    rodo: {
        desc: "RODO (Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych)  przyznaje Ci następujące uprawnienia związane z przetwarzaniem Twoich danych osobowych:",
        list: [
            "prawo dostępu do swoich danych oraz otrzymania ich kopii,",
            "prawo do sprostowania (poprawiania) swoich danych,",
            "prawo do usunięcia danych (jeżeli Twoim zdaniem nie ma podstaw, abyśmy przetwarzali Twoje dane, możesz żądać, abyśmy je usunęli),",
            "prawo do ograniczenia przetwarzania danych (możesz żądać ograniczenia przetwarzanie danych wyłącznie do ich przechowywania lub wykonywania uzgodnionych z Tobą działań),",
            "prawo do wniesienia sprzeciwu wobec przetwarzania danych (masz prawo do sprzeciwu wobec przetwarzania danych na podstawie prawnie uzasadnionego interesu; powinieneś wskazać szczególną sytuację, która Twoim zdaniem uzasadnia zaprzestanie przez nas przetwarzania objętego sprzeciwem. Przestaniemy przetwarzać Twoje dane w tych celach, chyba że wykażemy, że podstawy przetwarzania przez nas danych są nadrzędne wobec Twoich praw lub też, że Twoje dane są nam niezbędne do ustalenia, dochodzenia lub obrony roszczeń),",
            "prawo do przenoszenia danych (masz prawo otrzymać od nas w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego dane osobowe, które dostarczyłeś nam na podstawie umowy lub Twojej zgody; możesz nam zlecić przesłanie tych danych bezpośrednio innemu podmiotowi),",
            "prawo wniesienia skargi do organu nadzorczego (jeżeli stwierdzisz, że przetwarzamy dane niezgodnie z prawem, możesz złożyć w tej sprawie skargę do Prezesa Urzędu Ochrony Danych Osobowych lub innego właściwego organu nadzorczego)."
        ],
        summary: "Zasady związane z realizacją wskazanych powyżej uprawnień zostały opisane szczegółowo w art. 16 – 21 RODO. Pamiętaj, że możesz również zwrócić się do mnie z żądaniem udostępnienia Ci informacji o tym, jakie dane na Twój temat posiadam oraz w jakich celach je przetwarzam. Wystarczy, że wyślesz wiadomość na adres najpierwjakontakt@gmail.com."
    },

    identification_data: {
        list: [
            "Gromadzenie przez najpierwja.pl danych osobowych umożliwiających identyfikację może odbywać się poprzez pozostawianie komentarzy na blogu oraz za pomocą formularzy, takich jak formularz kontaktowy, a także formularz zamówienia usługi lub produktu elektronicznego. Administrator może gromadzić dane obejmujące imię i nazwisko, numer telefonu i adres e-mail osoby zamawiającej usługę lub produkt elektroniczny, jak i również zostawiającej wiadomość, czy kierującej zapytanie przez formularz zamieszczony na Stronie internetowej.",

            "Przekazanie danych jest dobrowolne, ale jednocześnie konieczne do działania serwisu, a Administrator będzie wykorzystywać uzyskane dane jedynie w celu nawiązania kontaktu z Użytkownikiem, przesyłania mu informacji handlowych, ewentualnie w celu realizacji umowy o dostarczenie usługi lub produktu elektronicznego, zawieranej poprzez złożenie zamówienia, w tym w celu wystawienia i przesłania użytkownikowi faktury VAT dokumentującej zakup. Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych i nie będzie ich udostępniać podmiotom trzecim.",

            "Administrator oświadcza, że dane osobowe gromadzone są z należytą starannością i odpowiednio chronione przed dostępem do nich osób do tego nieupoważnionych.",

            "Twoje dane osobowe mogą być przetwarzane przez podmioty, z których usług korzystamy. Mogą mieć dostęp do Twoich danych osobowych, jeżeli świadczone przez nich usługi wiążą się lub mogą wiązać z przetwarzaniem danych osobowych, jeżeli będą świadczyć usługi w zakresie związanym z takim dostępem. Chodzi w szczególności o podmioty takie jak hostingodawca, dostawcy usług poczty elektronicznej, podmiot świadczący usługi w zakresie obsługi technicznej strony internetowej, kancelarie prawne, podmioty świadczące usługi marketingowe, biura rachunkowe, dostawcy oprogramowania chmurowego itp. Pamiętaj, że Twoje dane są bezpieczne i przetwarzane jedynie w niezbędnym zakresie. Ponadto, w razie zaistnienia takiej konieczności, Twoje dane osobowe mogą być udostępniane podmiotom, organom lub instytucjom uprawnionym do uzyskania dostępu do danych na podstawie przepisów prawa, takim jak służby policyjne, bezpieczeństwa, sądy, prokuratury, a także urzędom skarbowym w zakresie niezbędnym do realizacji obowiązków podatkowo-rozliczeniowo-księgowych.",
        
            "Administrator informuje niniejszym Użytkownika, że powierza przetwarzanie danych osobowych następującym podmiotom:"
        ],

        subjects: [
            "PayU SA jest wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy Poznań-Nowe Miasto i Wilda w Poznaniu. VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod nr KRS: 00002743399, NIP: 7792308495, REGON: 300523444. Spółka ma siedzibę w Poznaniu przy ul. Grunwaldzkiej 186. - w zakresie niezbędnym do obsługi płatności za zamówienie.",

            "Infakt Sp. z o. o. z siedzibą w Krakowie, z adresem ul. Szlak 49, Kraków 31-153, wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla Krakowa – Śródmieścia Wydział XI Gospodarczy Krajowego Rejestru Sądowego pod numerem 0000325203, posiadającą NIP 9452121681 - w zakresie niezbędnym do świadczenia usług księgowych oraz aplikacji do wystawiania faktur."
        ],

    },

    future_changes: "Administrator zastrzega sobie prawo do aktualizowania niniejszej polityki prywatności w dowolnym momencie. Zachęca się Użytkowników do częstego odwiedzania niniejszej strony internetowej w celu pozyskania aktualnych informacji na temat tego, w jaki sposób najpierwja.pl pomaga chronić gromadzone dane osobowe. Użytkownik rozumie i akceptuje, iż to jego obowiązkiem jest regularne zapoznawanie się z treścią niniejszej polityki prywatności i każdorazowe powzięcie wiedzy o zmianach.",

    acceptation: "Korzystanie przez Użytkownika z niniejszej Strony internetowej oznacza akceptację niniejszej polityki. Użytkownik, który nie akceptuje niniejszej polityki, nie może korzystać z naszej Strony internetowej. Dalsze korzystanie ze Strony internetowej po zmianie treści niniejszej polityki prywatności zostanie uznane za tożsame z zaakceptowaniem zmian przez Użytkownika.",

    cookies: [
        "Niektóre obszary Strony internetowej mogą wykorzystywać cookies, czyli małe pliki tekstowe przechowywane na urządzeniu końcowym Użytkownika (np. komputerze, tablecie, smartfonie)  identyfikujące go w sposób potrzebny do uproszczenia lub umorzenia danej operacji.",

        "Administrator przechowuje pliki cookies na urządzeniu końcowym Użytkownika, a następnie uzyskuje dostęp do informacji w nich zawartych w celach statystycznych, w celach marketingowych (remarketing) raz w celu zapewnienia prawidłowego działania Strony.",

        "Cookies są nieszkodliwe dla urządzenia ani dla jego użytkownika ani jego danych. Warunkiem działania cookies jest ich akceptacja przez przeglądarkę i nieusuwanie ich z dysku.",

        "Administrator informuje niniejszym Użytkownika, że istnieje możliwość takiego skonfigurowania przeglądarki internetowej, która uniemożliwia przechowywanie plików cookies na urządzeniu końcowym Użytkownika. W takiej sytuacji, korzystanie ze Strony przez Użytkownika może być utrudnione.",

        "Administrator wskazuje niniejszym, że pliki cookies mogą być przez Użytkownika usunięte po ich zapisaniu przez Administratora, poprzez odpowiednie funkcje przeglądarki internetowej, programy służące w tym celu lub skorzystanie z odpowiednich narzędzi dostępnych w ramach systemu operacyjnego, z którego korzysta Użytkownik.",

        "Wszelkie pytania dotyczące niniejszej polityki prywatności, praktyk niniejszej strony internetowej lub korzystania ze strony internetowej należy kierować na adres: najpierwjakontakt@gmail.com"
    ]
};

const MOCK_DATA = {
    HOME_DATA,
    ABOUT_DATA,
    EBOOKS_DATA,
    COACHING_DATA,
    CONTACT_DATA,
    PRIVACY_POLICY,
    TERMS_OF_USE
};

export default MOCK_DATA;