const HOME_DATA = {
    quote: "„Szczęśliwy człowiek, dzielący się szczęściem.”"
}

const ABOUT_DATA = {
    heading: "O mnie",
    text_list: [`<strong>Paweł Kowalski</strong>`,

        `Jestem <strong>autorem profilu @najpierw_ja</strong> na instagramie, na którym obserwuje mnie ponad 70 tysięcy osób oraz podcastu “najpierw_podcast” na Spotify. Na co dzień prowadzę sesje indywidualne online - jestem <strong>wykwalifikowanym life coachem</strong> (ukończyłem szkolenia w oparciu o standardy i kodeks etyczny ICF, uzyskując międzynarodowy tytuł: “Meritum Certified Coach”), a także <strong>certyfikowanym trenerem personalnym</strong> (ze specjalizacją treningów medycznych). Mam doświadczenie w pomaganiu mentalnym i fizycznym. Mogę śmiało stwierdzić, że zawód jest moją pasją, a nawet że jestem swoim własnym zawodem, ponieważ umiejętności coachingowe mocno współgrają z moją osobowością i czuję, że inspirowanie innych, to moja życiowa droga. To wzmacnia efekty sesji, a samo spotkanie nie jest automatyczne i sztywne. Liczy się dla mnie indywidualne podejście, zaufanie i empatia.`,

        `Najważniejsze atrybuty mojej pracy to: <strong>poszerzanie świadomości</strong> (wyjdziesz z myślenia jednotorowego, otworzysz się na zupełnie nowe perspektywy oraz pozbędziesz się napięć), <strong>wydobywanie potencjału</strong> (zajrzysz w siebie, poznasz swoje mocne strony i nauczysz się nimi zarządzać) oraz <strong>skupianie się na rozwiązaniach</strong> (dobrze jest zrozumieć problem, ale jeszcze lepiej jest znaleźć na niego sposób). Wykorzystuję wiedzę z zakresu osobowości człowieka oraz wschodniego podejścia do życia - co potęguje efektywność zmian.`,

        `W międzyczasie działam w branży pisarskiej - jestem autorem wspomnianego wyżej profilu oraz ebooków:`,
    ]
};

const EBOOKS_DATA = {
    heading: "Moje",
    boldheading: "E-booki",
    u_list: [{
        key: 1,
        // old_price: "<s>/s> → ",
        price: "59zł",
        title: "“5 warunków idealnego związku”",
        short_description: "<i>(zdrowe relacje, pewność siebie, typy osobowości)</i>",
        description: "Związek idealny nie jest związkiem perfekcyjnym w każdym calu - ponieważ takie nie istnieją - tylko relacją odpowiednio dbających o siebie osób. Ludzie nie przygotowują się do bycia z drugą osobą, dlatego dochodzi do tak wielu rozstań. W książce opisuję pięć kluczowych elementów zdrowej relacji, których zastosowanie sprawia, że zdobywa ona najniższe prawdopodobieństwo zerwania, a para czuje się ze sobą spełniona. W rozdziale bonusowym zamieściłem opis typów osobowości oraz narzędzie, którym można sprawdzić siebie i partnera.",
        img_name: "5_warunkow_idealnego_zwiazku"
    }, {
        key: 2,
        // old_price: "",
        price: "49zł",
        title: "“Zrozum siebie”",
        short_description: "<i>(filozofia, pewność siebie, rozwój osobisty)</i>",
        description: "Jesteśmy tym - co myślimy, mówimy, robimy i wszystkim innym, czego doświadczamy. Ta książka pomoże Ci uświadomić sobie, jak bardzo środowisko ma na nas wszystkich wpływ, jak ślepo powtarzamy niektóre czynności oraz co możemy zrobić, by przejąć nad tym kontrolę. Zrozumienie siebie jest nieodłącznym elementem szczęścia.",
        img_name: "zrozum_siebie"
    }, {
        key: 3,
        // old_price: "",
        price: "39zł",
        title: "“30 nawyków szczęścia”",
        short_description: "<i>(dobre samopoczucie, asertywność, rozwój osobisty)</i>",
        description: "Autorski zbiór nawyków/zasad, do których polecam wrócić za każdym razem, kiedy odczujesz osłabienie wewnętrznej radości. Zazwyczaj wystarczy wtedy wyszukać odpowiedni temat i zastosować się do treści. Opanowanie wszystkich nawyków poprawia asertywność, pewność siebie, jakość codziennego funkcjonowania i zachęca do spojrzenia na świat z innej perspektywy.",
        img_name: "30_nawykow_szczescia"
    },
    ],

    current_offer: "Promocja ograniczona czasowo do 04.09.2022",
    packet: "Pakiet 3 e-booków w cenie 115zł! - Po dodaniu do koszyka, rabat uwzględni się automatycznie."
};

const COACHING_DATA = {
    titles: ["Czym jest?", "Dla kogo?", "Cennik:"],
    descriptions: [{
        text: [
            `Zgodnie z definicją międzynarodowej instytucji International Coaching Federation, jest to <i>“interaktywny proces, który pomaga pojedynczym osobom lub organizacjom w przyspieszeniu tempa rozwoju i polepszeniu efektów działania. Dzięki coachingowi, klienci ustalają konkretniejsze cele, optymalizują swoje działania, podejmują trafniejsze decyzje i pełniej korzystają ze swoich naturalnych umiejętności.”</i>`,

            `<strong>Podstawowa różnica między terapią a coachingiem jest taka, że terapia jest przejściem z dysfunkcji do normy, natomiast coaching jest przejściem z normy do skuteczności (w życiu, zawodzie, związku…).</strong> Proces skupia się na rozwiązaniach, a nie na wyszukiwaniu i analizowaniu problemów przeszłości. Głównym celem jest pomoc ludziom w obiektywnym ustaleniu, gdzie znajdują się w chwili obecnej, a gdzie chcą się znaleźć w przyszłości oraz stworzenie planu, który pozwoli im przejść z punktu A do punktu B.`,

            `Wykwalifikowany coach słucha, obserwuje i indywidualnie dopasowuje swoje podejście do poszczególnych potrzeb klienta, wydobywając z niego potencjał, zwalniając blokady i wzmacniając mocne strony - by na jego osobistych wartościach, pomóc wypracować drogę do wyznaczonego celu.`,
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
        text_two: `Teoria i praktyka pokazały mi, że ludzie doskonale wiedzą czego potrzebują, lecz przez różne bariery i konflikty wewnętrzne, nie są w stanie usłyszeć swojej intuicji. Dysponuję narzędziami, które pomagają rozwiązać to nieporozumienie.`,
        offer_text: `<strong>Skontaktuj się ze mną</strong> i skorzystaj z darmowej konsultacji, na której opowiesz mi dlaczego się do mnie zgłaszasz, jaki efekt chciałbyś/chciałabyś uzyskać podczas współpracy, a następnie odpowiem na Twoje pytania i ustalimy plan działania. Rozmowa trwa 15-20 minut, odbywa się przez telefon/whatsappa.`,
    },
    {
        offer: {
            services: [`- Wstępna konsultacja: <i>bezpłatna</i>`, `- Sesja indywidualna: 150-200zł`],
            for_businesses: [`<strong>Dla firm:</strong>`, `Oferta coachingu indywidualnego / grupowego dopasowana do potrzeb firmy, po uprzednim kontakcie ze mną`],
        },
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
        desc: "Przyjmuje się następujące znaczenia definicji, użytych na potrzeby niniejszego regulaminu:",
        list: [
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
            "Gromadzenie przez najpierwja.pl danych osobowych umożliwiających identyfikację może odbywać się poprzez pozostawianie komentarzy na blogu oraz za pomocą formularzy, takich jak formularz kontaktowy, a także formularz zamówienia usługi lub produktu elektronicznego. Administrator może gromadzić dane obejmujące imię i nazwisko, numer telefonu, adres rozliczeniowy i adres e-mail osoby zamawiającej usługę lub produkt elektroniczny, jak i również zostawiającej wiadomość, czy kierującej zapytanie przez formularz zamieszczony na Stronie internetowej.",

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
