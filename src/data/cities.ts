export interface CityFaq {
  q: string;
  a: string;
}

export interface CityServices {
  gelinlik: string;
  abiye: string;
  nisan: string;
  ozelTasarim: string;
}

export interface City {
  slug: string;
  name: string;
  region: string;
  distanceFromKesan: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introHeadline: string;
  introBody: string;
  services: CityServices;
  faq: CityFaq[];
  galleryImages: string[];
  isHome?: boolean;
}

const defaultGallery = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/7.jpg',
];

const defaultServices: CityServices = {
  gelinlik:
    'Prenses, modern, sade ve dantelli kesimlerde özel tasarım gelinlik modelleri. Her bedene özel dikim ve provada ücretsiz revizyon.',
  abiye:
    'Düğün, nişan ve özel davetler için uzun ve midi abiye tasarımları. Annelere ve gelin yakınlarına özel koleksiyon.',
  nisan:
    'Nişan elbisesinde renk, kesim ve kumaş seçeneklerinin tamamı. Klasik beyaz ve pudra tonlarından modern şampanya ve gül kurusuna kadar.',
  ozelTasarim:
    'Hayalinizdeki modeli birlikte çiziyor, kendi ölçülerinize göre prova prova hayata geçiriyoruz. Süreç 4-8 hafta arası tamamlanır.',
};

export const cities: City[] = [
  {
    slug: 'gelinlik-kesan',
    name: 'Keşan',
    region: 'Edirne İli',
    distanceFromKesan: 'Atölyemiz Keşan merkezinde',
    metaTitle: 'Keşan Gelinlik | Seçil Gelinlik Atölyesi',
    metaDescription:
      "Keşan gelinlik denildiğinde akla gelen Seçil Gelinlik atölyesi. Özel tasarım gelinlik, abiye ve nişan elbisesi modelleri için ücretsiz deneme randevusu alın.",
    h1: 'Keşan Gelinlik — Seçil Gelinlik Atölyesi',
    introHeadline: "Keşan'ın Butik Gelinlik Atölyesi",
    introBody:
      "Keşan'da gelinlik arıyorsanız doğru yerdesiniz. Seçil Gelinlik 2022'den beri Keşan merkezinde, Büyük Cami yakınındaki atölyemizde özel tasarım gelinlik, abiye ve nişan elbisesi üretiyor. Hazır koleksiyondan seçim yapabileceğiniz gibi, hayal ettiğiniz modeli sıfırdan birlikte tasarlayabiliriz. Her gelin adayına özel ölçü alıp, tüm provaları atölyede tamamlıyoruz; teslime kadar ek ücret çıkmıyor. Keşan dışında Edirne, Tekirdağ ve tüm Trakya bölgesinden gelin adaylarımız da düzenli olarak ziyaretimize geliyor — şehir dışından geleceklere randevu öncesi telefonla bilgilendirme yapıyoruz.",
    services: defaultServices,
    faq: [
      {
        q: "Keşan'da gelinlik denemek için randevu gerekiyor mu?",
        a: "Atölyemizde her gelin adayına özel zaman ayırabilmek için randevu sistemiyle çalışıyoruz. Randevu ücretsizdir; WhatsApp +90 544 178 62 44 üzerinden ya da iletişim formundan kolayca alabilirsiniz.",
      },
      {
        q: 'Hazır gelinlik mi yoksa özel tasarım mı seçmeliyim?',
        a: "Hazır koleksiyonumuzdan seçim yaparsanız teslim süresi 1-2 hafta, özel tasarımda ise 4-8 hafta arasında değişiyor. Düğün tarihinize göre birlikte en uygun yolu belirliyoruz.",
      },
      {
        q: 'Provalar atölyede mi yapılıyor?',
        a: "Evet, tüm provalar Keşan'daki atölyemizde gerçekleşiyor. Şehir dışından gelen gelinlerimiz için provaları aynı güne yoğunlaştırarak ek seyahat gerektirmeyecek şekilde planlıyoruz.",
      },
      {
        q: 'Aksesuar, duvak ve ayakkabı da bulabilir miyim?',
        a: 'Atölyemizde duvak, taç, eldiven ve takı seçenekleri mevcuttur. Gelinlik provası sırasında tüm aksesuarları birlikte tamamlıyoruz.',
      },
    ],
    galleryImages: ['/images/1.jpg', '/images/4.jpg', '/images/7.jpg', '/images/12.jpg', '/images/16.jpg', '/images/22.jpg'],
    isHome: true,
  },
  {
    slug: 'gelinlik-edirne',
    name: 'Edirne',
    region: 'Edirne İli',
    distanceFromKesan: "Keşan'a yaklaşık 50 dakika",
    metaTitle: 'Edirne Gelinlik | Seçil Gelinlik — Özel Tasarım Atölye',
    metaDescription:
      "Edirne'den kolayca ulaşabileceğiniz Seçil Gelinlik atölyesinde özel tasarım gelinlik ve abiye modelleri. Keşan'a 50 dakikada ulaşın, ücretsiz deneme randevusu alın.",
    h1: 'Edirne Gelinlik — Seçil Gelinlik Atölyesi',
    introHeadline: "Edirne'nin Tercih Ettiği Butik Atölye",
    introBody:
      "Edirne'de gelinlik aramaya başladığınızda seçenekleriniz şehir merkezindeki birkaç mağazayla sınırlı kalabilir. Seçil Gelinlik, Edirne merkeze sadece 50 dakika uzaklıktaki Keşan atölyesinde özel tasarım gelinlik ve abiye sunuyor — Edirne içindeki vitrin mağazalarının çok ötesinde, bireysel atölye deneyimi yaşatıyoruz. 2022'den beri Edirne merkez, Karaağaç, Süloğlu ve Lalapaşa'dan gelin adaylarına hizmet veriyoruz; Keşan-Edirne yolu konforlu olduğu için tek bir günde hem gelinlik denemesi hem de ölçü alımı tamamlanabiliyor. Şehir dışından geldiğinizi belirttiğinizde randevunuzu boş gün ortasına denk getirip, tüm modelleri rahatça deneyebilmenizi sağlıyoruz.",
    services: defaultServices,
    faq: [
      {
        q: "Edirne'den randevu alabilir miyim?",
        a: "Evet. Keşan atölyemiz Edirne'ye yaklaşık 50 dakika uzaklıktadır. WhatsApp +90 544 178 62 44 üzerinden randevu alabilir, gün içinde rahatça gidip dönebilirsiniz.",
      },
      {
        q: "Edirne'den Keşan'a nasıl gelirim?",
        a: "Edirne-Keşan arası D550 karayolu üzerinden yaklaşık 75 km'dir; özel araçla 50-55 dakikada ulaşabilirsiniz. Keşan otogarına gelen otobüs seferleri de mevcuttur.",
      },
      {
        q: "Edirne'de provayı atölyenize gelmeden yapabilir miyim?",
        a: "Provalar atölyede yapılır çünkü dikim ve revizyon aynı gün uygulanır. Ancak şehir dışından gelen gelinlerimize tüm provaları arka arkaya planlayarak en az ziyaretle teslim sürecini tamamlıyoruz.",
      },
      {
        q: 'Özel tasarım gelinlik süreci ne kadar sürer?',
        a: 'Tasarım onayından teslime kadar genellikle 4-8 hafta sürmektedir. Düğün tarihinize göre süreci geriye doğru planlayıp en uygun başlangıç tarihini belirliyoruz.',
      },
    ],
    galleryImages: defaultGallery,
  },
  {
    slug: 'gelinlik-tekirdag',
    name: 'Tekirdağ',
    region: 'Tekirdağ İli',
    distanceFromKesan: "Keşan'a yaklaşık 1 saat 15 dakika",
    metaTitle: 'Tekirdağ Gelinlik | Seçil Gelinlik Atölyesi — Trakya',
    metaDescription:
      "Tekirdağ'dan ulaşabileceğiniz Seçil Gelinlik Keşan atölyesinde özel tasarım gelinlik, abiye ve nişan elbisesi. Ücretsiz deneme randevusu için arayın.",
    h1: 'Tekirdağ Gelinlik — Seçil Gelinlik Atölyesi',
    introHeadline: "Tekirdağ'dan Trakya'nın Butik Gelinlik Atölyesine",
    introBody:
      "Tekirdağ'da gelinlik denerken çoğu mağaza standart koleksiyonlarla karşınıza çıkıyor. Seçil Gelinlik ise Tekirdağ merkeze yaklaşık 1 saat 15 dakika mesafedeki Keşan atölyesinde özel tasarım gelinlik üretiyor — yani vitrin yerine atölye deneyimi yaşıyorsunuz. Süleymanpaşa, Çorlu, Çerkezköy ve Marmaraereğlisi'nden gelin adaylarımız, kendilerine özel gün içinde hem gelinlik denemesini hem de ölçü alımını tamamlayıp Tekirdağ'a aynı akşam dönüyor. 2022'den beri hayal ettiğiniz modeli sıfırdan tasarlayıp, prova süreçlerini Tekirdağ'dan en az ziyaretle yönetilebilecek şekilde planlıyoruz.",
    services: defaultServices,
    faq: [
      {
        q: "Tekirdağ'dan Keşan'a randevu için gelmeye değer mi?",
        a: 'Şehir merkezindeki standart koleksiyonların ötesinde özel tasarım gelinlik ve abiye için butik bir atölye arıyorsanız, ulaşımı kolay olduğu için kesinlikle değer. Randevumuz ücretsizdir, ön bilgi almak için iletişim formunu kullanabilirsiniz.',
      },
      {
        q: "Tekirdağ-Keşan arası ne kadar sürer?",
        a: "Özel araçla TEM ve D110 üzerinden yaklaşık 1 saat 15 dakika sürmektedir. Çorlu üzerinden gelirseniz mesafe biraz daha kısalır.",
      },
      {
        q: 'Birden fazla provada Tekirdağ-Keşan arası gidip gelmek zorunda mıyım?',
        a: 'Hayır. Şehir dışı gelinlerimize provaları yoğunlaştırılmış programla planlıyor, genellikle 2-3 ziyaretle tüm süreci tamamlıyoruz. Son provayı düğüne yakın bir tarihe alarak ekstra ziyareti minimize ediyoruz.',
      },
      {
        q: "Tekirdağ'a gelinliği teslim ediyor musunuz?",
        a: 'Talep edildiğinde anlaşmalı kargo veya kurye ile Tekirdağ adresine güvenli teslimat sağlıyoruz. Tercih ederseniz son provada teslim alarak da gidebilirsiniz.',
      },
    ],
    galleryImages: defaultGallery,
  },
  {
    slug: 'gelinlik-corlu',
    name: 'Çorlu',
    region: 'Tekirdağ İli',
    distanceFromKesan: "Keşan'a yaklaşık 1 saat 30 dakika",
    metaTitle: 'Çorlu Gelinlik | Seçil Gelinlik — Özel Tasarım Atölye',
    metaDescription:
      "Çorlu'dan ulaşılabilen Seçil Gelinlik Keşan atölyesinde butik gelinlik ve abiye deneyimi. Özel tasarım, ücretsiz deneme ve provada revizyon imkanı.",
    h1: 'Çorlu Gelinlik — Seçil Gelinlik Atölyesi',
    introHeadline: "Çorlu'lu Gelin Adaylarının Butik Tercihi",
    introBody:
      "Çorlu'da gelinlik aramaya başladığınızda büyük çoğunlukla zincir mağaza koleksiyonlarıyla karşılaşırsınız. Seçil Gelinlik, Çorlu'ya yaklaşık 1 saat 30 dakika mesafedeki Keşan atölyesinde özel tasarım gelinlik ve abiye üretiyor; gelin adayını seri üretim modelleriyle değil, kendi ölçüleri ve hayalleriyle uyumlu özel bir tasarımla buluşturuyor. Çorlu merkez, Velimeşe ve Çerkezköy'den düzenli olarak gelin adaylarımıza hizmet veriyor, randevuları gün ortasına denk getirerek aynı gün dönüş yapabileceğiniz şekilde planlıyoruz. Atölyemizde randevu sırasında deneyebileceğiniz hazır koleksiyon da mevcut olduğu için ilk ziyarette tarzınızı net olarak belirleyebiliyorsunuz.",
    services: defaultServices,
    faq: [
      {
        q: "Çorlu'dan Keşan'a ulaşım nasıl?",
        a: "Çorlu-Keşan arası D110 üzerinden yaklaşık 130 km, özel araçla 1 saat 30 dakika sürmektedir. TEM bağlantısı sayesinde yol konforludur.",
      },
      {
        q: "Çorlu'da gelinlik denerken atölyenize gelmeli miyim?",
        a: 'İlk denemeyi atölyede yapmanız hem hazır koleksiyonu hem de özel tasarım örneklerini görebilmeniz açısından çok daha verimli oluyor. WhatsApp üzerinden ön görüşme ile başlayıp randevu gününde tüm seçenekleri birlikte değerlendirebiliriz.',
      },
      {
        q: 'Düğünüm 2 ay sonra, özel tasarım gelinlik yetişir mi?',
        a: '2 ay süre özel tasarım için yeterlidir. Tasarım onayından sonra 4-6 hafta üretim, ardından 1-2 hafta prova ve son revizyonlarla teslim ediyoruz.',
      },
      {
        q: "Çorlu'dan kaç kez geliş yapmam gerekir?",
        a: 'Genellikle 2-3 ziyaret yeterlidir: ilk denemede tasarım ve ölçü, ikinci ziyarette ana prova, son ziyarette teslim. Şehir dışı gelinlerimize provaları yoğunlaştırılmış programla planlıyoruz.',
      },
    ],
    galleryImages: defaultGallery,
  },
  {
    slug: 'gelinlik-kirklareli',
    name: 'Kırklareli',
    region: 'Kırklareli İli',
    distanceFromKesan: "Keşan'a yaklaşık 2 saat",
    metaTitle: 'Kırklareli Gelinlik | Seçil Gelinlik Atölyesi',
    metaDescription:
      "Kırklareli'den gelen gelin adayları için Seçil Gelinlik Keşan atölyesinde butik özel tasarım gelinlik, abiye ve nişan elbisesi seçenekleri.",
    h1: 'Kırklareli Gelinlik — Seçil Gelinlik Atölyesi',
    introHeadline: "Kırklareli'den Trakya'nın Atölye Markasına",
    introBody:
      "Kırklareli'de butik gelinlik atölyesi seçenekleri sınırlıdır; çoğu gelin adayı standart koleksiyonların dışına çıkmak için İstanbul ya da Edirne'ye yönelir. Seçil Gelinlik, Kırklareli'ye yaklaşık 2 saat mesafedeki Keşan atölyesinde özel tasarım gelinlik ve abiye sunarak Trakya içinde alternatif bir adres oluyor. 2022'den beri Kırklareli merkez, Lüleburgaz, Babaeski ve Vize'den gelin adaylarımız atölyemizi tercih ediyor. Randevularınızı gün başına alıyor, hazır koleksiyon ve özel tasarım örneklerinin tamamını ilk ziyarette deneyebilmenizi sağlıyoruz.",
    services: defaultServices,
    faq: [
      {
        q: "Kırklareli-Keşan arası ulaşım uzun mu?",
        a: "Özel araçla yaklaşık 2 saat sürmektedir. Lüleburgaz ve Babaeski üzerinden geçen güzergâh konforludur. Şehir dışından geleceğinizi randevu sırasında belirtirseniz programı buna göre düzenliyoruz.",
      },
      {
        q: "Kırklareli'den ilk ziyarette neler yapılır?",
        a: 'İlk randevuda tarzınızı belirliyor, hazır koleksiyondan modelleri deniyor, özel tasarım istiyorsanız çizim sürecini başlatıyoruz. Aynı gün ölçü alımı da yapılabilir.',
      },
      {
        q: 'Düğünüme 3 ay var, gelinlik yetişir mi?',
        a: '3 aylık süre özel tasarım için oldukça rahattır. İlk ziyarette başlarsak provalar dahil tüm süreci konforla tamamlıyoruz.',
      },
      {
        q: 'Aksesuar ve duvağı da Kırklareli\'ye getirebilir miyim?',
        a: 'Atölyemizde gelinlik ile uyumlu duvak, taç ve aksesuar seçenekleri mevcuttur. Gelinliği aldığınızda tüm tamamlayıcıları birlikte teslim alabilirsiniz.',
      },
    ],
    galleryImages: defaultGallery,
  },
  {
    slug: 'gelinlik-luleburgaz',
    name: 'Lüleburgaz',
    region: 'Kırklareli İli',
    distanceFromKesan: "Keşan'a yaklaşık 1 saat 45 dakika",
    metaTitle: 'Lüleburgaz Gelinlik | Seçil Gelinlik Atölyesi',
    metaDescription:
      "Lüleburgaz'dan ulaşılabilir Seçil Gelinlik Keşan atölyesi: özel tasarım gelinlik, abiye ve nişan elbisesi modelleri. Ücretsiz deneme randevusu için arayın.",
    h1: 'Lüleburgaz Gelinlik — Seçil Gelinlik Atölyesi',
    introHeadline: "Lüleburgaz'dan Butik Atölye Deneyimine",
    introBody:
      "Lüleburgaz'da gelinlik aramaya çıktığınızda şehir merkezindeki seçenekler genellikle hazır koleksiyonlarla sınırlı kalır. Seçil Gelinlik, Lüleburgaz'a yaklaşık 1 saat 45 dakika mesafedeki Keşan atölyesinde özel tasarım gelinlik üretiyor — gelin adayı ile birebir çalışarak hayal ettiği modeli sıfırdan ortaya çıkarıyoruz. 2022'den beri Lüleburgaz, Babaeski ve çevre ilçelerden gelin adaylarımıza hizmet veriyor, randevuları aynı gün dönüş yapılabilecek şekilde planlıyoruz. Şehir dışından geldiğinizi belirttiğinizde, deneme süresini geniş tutarak tüm modellere zaman ayırıyoruz.",
    services: defaultServices,
    faq: [
      {
        q: "Lüleburgaz'dan Keşan'a nasıl ulaşırım?",
        a: 'Özel araçla D100 ve D110 üzerinden yaklaşık 1 saat 45 dakika sürmektedir. Babaeski ve Havsa üzerinden geçen güzergâh güvenli ve konforludur.',
      },
      {
        q: "Lüleburgaz'a gelinlik teslimi yapıyor musunuz?",
        a: 'Talep edildiğinde anlaşmalı kargo veya kurye ile Lüleburgaz adresinize güvenli teslimat sağlıyoruz. Çoğu gelin son provada teslim almayı tercih ediyor; bu sayede son rötuşları yerinde tamamlıyoruz.',
      },
      {
        q: 'Provalar için kaç kez gelmem gerekir?',
        a: 'Şehir dışı gelinlerimize provaları yoğunlaştırılmış programla planlıyor, ortalama 2-3 ziyaretle tüm süreci tamamlıyoruz.',
      },
      {
        q: 'Özel tasarım gelinlik daha pahalı mı?',
        a: 'Özel tasarım, kullanılan kumaş ve detay yoğunluğuna göre fiyatlanır; hazır koleksiyona göre çok daha geniş bir aralıkta seçenek vardır. Randevu sırasında bütçenize uygun çözümleri birlikte belirliyoruz.',
      },
    ],
    galleryImages: defaultGallery,
  },
];

export const cityServiceAreas: string[] = cities.map((c) => c.name);

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
