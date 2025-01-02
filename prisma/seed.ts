import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'ed105551-1f0d-5a9f-tc41-r559c8a17256',
      name: 'Austrotherm EPS 100',
      price: 77,
      description_title:
        'Biały styropian o dużej wytrzymałości na obciążanie CS(10) 100 kPa.',
      description_first_paragraph:
        'Płyty o bardzo dobrej wytrzymałości mechanicznej. Charakteryzują się doskonałym współczynnikiem przewodzenia ciepła. Chętnie stosowane przez specjalistów jako izolacja cieplna ścian piwnic oraz ścian zewnętrznych.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,036 W/mK. Naprężenia ściskające przy 10% odkształceniu: CS(10)≥100 kPa. Wytrzymałość na zginanie: BS≥150 kPa. Minimalna waga wyrobu: 18,0 kg/m3. Klasa reakcji na ogień: E.',
      category: 'podloga',
      main_img: 'austrotherm_eps_100_1.jpg',
      gallery:
        'austrotherm_eps_100_2.jpg,austrotherm_eps_100_3.jpg,austrotherm_eps_100_4.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 18,
    },
    {
      id: 'm920c7b9-b67d-7edb-9ce7-f3c9f3889e56',
      name: 'Austrotherm EXPERT',
      price: 117,
      description_title: 'Zielony styropian o dużej wytrzymałości na wilgoć i obciążenia CS(10) 120 kPa.',
      description_first_paragraph:
        'Perymetryczne płyty styropianowe produkowane z polistyrenu ekspandowanego w technologii agregatowej. Stosowane do izolacji cieplnej elementów konstrukcji budynków przede wszystkim tych stykających się z gruntem, np. cokołów, ścian fundamentowych, ścian piwnic.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,035 W/mK. Naprężenia ściskające przy 10% odkształceniu: CS(10)≥120 kPa. Wytrzymałość na zginanie: BS≥170 kPa. Nasiąkliwość wodą przy długotrwałym zanurzeniu: WL(T)≤4%. Klasa reakcji na ogień: E.',
      category: 'fundament',
      main_img: 'austrotherm_eps_expert_1.jpg',
      gallery:
        'austrotherm_eps_expert_2.jpg,austrotherm_eps_expert_3.jpg,austrotherm_eps_expert_4.jpg',
      volume: 0.35,
      width: 1.2,
      length: 0.6,
      height: 0.45,
      weight: 19.5,
    },
    {
      id: 'ed105551-1f0d-7a9f-ac41-b559c8a17258',
      name: 'Austrotherm EPS 040 FASSADA',
      price: 49,
      description_title: 'Biały styropian o lambdzie EPS 040 idealny na fasadę budynku.',
      description_first_paragraph:
        'Docenione przez inwestorów klasyczne płyty izolacyjne o współczynniku przewodzenia ciepła na poziomie 0,040 W/mK. Przede wszystkim zalecane do termoizolacji ścian.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,040 W/mK. Wytrzymałość na zginanie: BS≥100 kPa. Wytrzymałość na rozciąganie do powierzchni czołowych: TR≥100 kPa. Minimalna waga wyrobu: 12,5 kg/m3. Klasa reakcji na ogień: E.',
      category: 'fasada',
      main_img: 'austrotherm_eps_fasada_1.jpg',
      gallery:
        'austrotherm_eps_fasada_2.jpg,austrotherm_eps_fasada_3.jpg,austrotherm_eps_fasada_4.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 12.5,
    },
    {
      id: 'fc105551-1f0d-5a9f-ac41-b559c8a17259',
      name: 'Austrotherm EPS 038 FASADA SUPER',
      price: 53,
      description_title:
        'Biały styropian o lambdzie EPS 038 idealny na fasadę budynku.',
      description_first_paragraph:
        'Klasyczny styropian o bardzo wysokich właściwościach termoizolacyjnych. Zalecany do termoizolacji ścian. Ponadto charakteryzuje się podwyższoną wytrzymałością mechaniczną. Przeznaczony dla wymagającego użytkownika.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,038 W/mK. Naprężenia ściskające przy 10% odkształceniu: CS(10)≥70 kPa. Wytrzymałość na zginanie: BS≥115 kPa. Wytrzymałość na rozciąganie prostopadłedo powierzchni czołowych: TR≥100 kPa. Minimalna waga wyrobu: 13,5 kg/m3. Klasa reakcji na ogień: E.',
      category: 'fasada',
      main_img: 'austrotherm_eps_fasada_super_1.jpg',
      gallery:
        'austrotherm_eps_fasada_super_2.jpg,austrotherm_eps_fasada_super_3.jpg,austrotherm_eps_fasada_super_4.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 13.5,
    },
    {
      id: '21c7599d-418b-5b9f-aaf7-61f3a936a2d4',
      name: 'Austrotherm EPS 035 PARKING',
      price: 110,
      description_title:
        'Biały styropian o dużej wytrzymałości na obciążanie CS(10) 150 kPa.',
      description_first_paragraph:
        'Płyty charakteryzują się wysoką wytrzymałością mechaniczną na ściskanie oraz jednym z lepszych współczynników przewodzenia ciepła. Chętnie stosowane jako izolacja cieplna garaży, stropów nad pomieszczeniami nieogrzewanymi, fundamentami oraz stropodachów w technologii tradycyjnej.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,035 W/mK. Naprężenia ściskające przy 10% odkształceniu: CS(10)≥150 kPa. Wytrzymałość na zginanie: BS≥200 kPa. Minimalna waga wyrobu: 24,0 kg/m3. Klasa reakcji na ogień: E.',
      category: 'podloga',
      main_img: 'austrotherm_eps_parking_1.jpg',
      gallery:
        'austrotherm_eps_parking_2.jpg,austrotherm_eps_parking_3.jpg,austrotherm_eps_parking_4.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 24,
    },
    {
      id: '11c7599d-418b-5b9f-caf7-61f3a936a2d5',
      name: 'Austrotherm EPS 100 PREMIUM HYDRO',
      price: 97,
      description_title:
        'Grafitowy styropian o dużej wytrzymałości na obciążanie CS(10) 100 kPa.',
      description_first_paragraph:
        'Płyty ze styropianu grafitowego o bardzo dobrej wytrzymałości mechanicznej. Charakteryzują się doskonałym współczynnikiem przewodzenia ciepła. Chętnie stosowane przez specjalistów jako izolacja cieplna ścian piwnic oraz ścian zewnętrznych.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,031 W/mK. Naprężenia ściskające przy 10% odkształceniu: CS(10)≥100 kPa. Wytrzymałość na zginanie: BS≥150 kPa. Minimalna waga wyrobu: 18,0 kg/m3. Klasa reakcji na ogień: E.',
      category: 'podloga',
      main_img: 'austrotherm_eps_premium_100_1.jpg',
      gallery: 'austrotherm_eps_premium_100_1.jpg,austrotherm_eps_premium_100_1.jpg,austrotherm_eps_premium_100_1.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 18,
    },
    {
      id: '21c7599d-418b-3b9f-caf7-41f3a936a2d6',
      name: 'Austrotherm EPS FASSADA PREMIUM',
      price: 66,
      description_title:
        'Grafitowy styropian o niskiej lambdzie EPS 031.',
      description_first_paragraph:
        'Przeznaczone do termoizolacji ścian oraz miejsc, gdzie ze względów technicznych lub estetycznych należy stosować niską grubość ocieplenia (loggie, ościeża drzwi i okien, etc.). Idealne do termoizolacji budynków energooszczędnych i pasywnych. Posiadają jeden z najlepszych na rynku współczynników przewodzenia ciepła 0,031 W/mK.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,031 W/mK. Wytrzymałość na zginanie: BS≥115 kPa. Wytrzymałość na rozciąganie do powierzchni czołowych: TR≥100 kPa. Minimalna waga wyrobu: 13,5 kg/m3. Klasa reakcji na ogień: E.',
      category: 'fasada',
      main_img: 'austrotherm_eps_premium_fasada_1.jpg',
      gallery:
        'austrotherm_eps_premium_fasada_2.jpg,austrotherm_eps_premium_fasada_3.jpg,austrotherm_eps_premium_fasada_4.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 13.5,
    },
    {
      id: '11c7599d-218b-3b9f-aaf7-61f3a936a2d7',
      name: 'Austrotherm EPS FASSADA PREMIUM REFLEX',
      price: 78,
      description_title:
        'Grafitowy styropian o niskiej lambdzie EPS 031.',
      description_first_paragraph:
        'Produkt Austrotherm EPS FASSADA PREMIUM REFLEX stosowany jest przez profesjonalistów do izolacji budynków pasywnych oraz miejsc, gdzie należy użyć cieńszej warstwy ocieplenia. Specjalnie opracowana formuła powłoki REFLEX ułatwia bezpieczny montaż i zapewnia dobrą przyczepność kolejnych warstw systemu ETICS, nie obniżając przy tym walorów termicznych ocieplenia. Bazę produktu stanowią cenione przez inwestorów płyty szarego styropianu Austrotherm EPS FASSADA PREMIUM, których zewnętrzna płaszczyna czołowa pokryta została białą powłoką ochronną REFLEX.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'doskonałe właściwości termoizolacyjne λD≤0,031 W/mK, nawet o ponad 30% lepsza termoizolacja od konwencjonalnego styropianu,powłoka ochronna REFLEX organicza procesy starzeniowe, chroni przed odpadaniem, wpływa pozytywnie na trwałość systemu ETICS,powłoka ochronna REFLEX wpływa na obniżenie temperatury na powierzchni płyty,możliwość znacznej redukcji grubości ocieplenia w stosunku do białych płyt styropianowych,polecany przez fachowców do domów budowanych w technologii pasywnej i niskoenergetycznej.',
      category: 'fasada',
      main_img: 'austrotherm_eps_reflex_fasada_1.jpg',
      gallery:
        'austrotherm_eps_reflex_fasada_2.jpg,austrotherm_eps_reflex_fasada_3.jpg,austrotherm_eps_reflex_fasada_4.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 13.5,
    },
    {
      id: '11c7599d-418b-5b9f-caf7-61f3a936a2d8',
      name: 'Austrotherm EPS FASSADA THERMA',
      price: 55,
      description_title:
        'Grafitowy styropian o niskiej lambdzie EPS 031.',
      description_first_paragraph:
        'Szare płyty styropianowe, szczególnie polecane do ocieplania ścian obiektów energooszczędnych oraz dla każdego, kto chce maksymalnie zredukować wydatki na ogrzewanie swojego domu. Odznaczają się wysoką gęstością i spoistością.',
      description_subtitle: 'Szukasz styropianu dla wymagających?',
      description_second_paragraph:
        'Deklarowany współczynnik przewodzenia ciepła: λD≤0,033 W/mK. Wytrzymałość na zginanie: BS≥75 kPa. Wytrzymałość na rozciąganie do powierzchni czołowych: TR≥80 kPa. Minimalna waga wyrobu: 12,0 kg/m3. Klasa reakcji na ogień: E',
      category: 'fasada',
      main_img: 'austrotherm_eps_therma_fasada_1.jpg',
      gallery: 'austrotherm_eps_therma_fasada_2.jpg,austrotherm_eps_therma_fasada_3.jpg,austrotherm_eps_therma_fasada_4.jpg',
      volume: 0.3,
      width: 1,
      length: 0.5,
      height: 0.6,
      weight: 12,
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();