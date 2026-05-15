import type { CityFaq } from './cities';

export interface Category {
  slug: string;
  category: 'abiye' | 'nisan';
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introHeadline: string;
  introBody: string;
  faq: CityFaq[];
  galleryImages: string[];
  relatedCitySlug: string;
  whatsappPrompt: string;
}

const defaultGallery = [
  '/images/2.jpg',
  '/images/5.jpg',
  '/images/8.jpg',
  '/images/11.jpg',
  '/images/14.jpg',
  '/images/19.jpg',
];

export const categories: Category[] = [
  {
    slug: 'abiye-edirne',
    category: 'abiye',
    cityName: 'Edirne',
    metaTitle: 'Edirne Abiye | Seçil Gelinlik — Özel Tasarım Abiye Modelleri',
    metaDescription:
      "Edirne'den ulaşılabilen Seçil Gelinlik atölyesinde özel tasarım abiye modelleri. Düğün, nişan ve özel davetler için kişiye özel uzun ve midi abiye.",
    h1: 'Edirne Abiye — Seçil Gelinlik Atölyesi',
    introHeadline: "Edirne'den Ulaşılabilen Butik Abiye Atölyesi",
    introBody:
      "Edirne'de abiye aramaya başladığınızda büyük çoğunlukla mağaza vitrinindeki standart koleksiyonlarla karşılaşıyorsunuz. Seçil Gelinlik, Edirne merkeze 50 dakika mesafedeki Keşan atölyesinde özel tasarım abiye modelleri üretiyor — düğün, nişan, kına ve özel davetler için size özel ölçüde dikim sunuyor. 2022'den beri Edirne'den gelen müşterilerimize uzun, midi ve kısa abiye seçeneklerinin tamamını sunuyor; özellikle anne ve gelin yakını adayları için zarif, yaşa uygun koleksiyonlar üretiyoruz. Provada revizyon ücretsizdir; kumaş, renk ve detay seçimini birlikte tamamlıyoruz.",
    faq: [
      {
        q: "Edirne'den abiye için randevu alabilir miyim?",
        a: "Evet. Atölyemiz Edirne merkeze 50 dakika uzaklıktadır. WhatsApp +90 544 178 62 44 üzerinden randevu alabilir, gün içinde rahatça gidip dönebilirsiniz.",
      },
      {
        q: 'Anne abiyesi koleksiyonunuz var mı?',
        a: "Evet, gelin annesi ve damat annesi için özel koleksiyonumuz mevcuttur. Klasik tonlardan modern renklere kadar geniş seçenek sunuyoruz.",
      },
      {
        q: 'Özel tasarım abiye süreci ne kadar sürer?',
        a: 'Tasarım onayından teslime kadar ortalama 3-5 hafta sürmektedir. Davet tarihinize göre süreci geriye doğru planlıyoruz.',
      },
      {
        q: "Kumaşı kendim seçebilir miyim?",
        a: 'Atölyemizde geniş bir kumaş arşivi mevcuttur. Beğendiğiniz modeli farklı kumaş ve renklerde değerlendirebilir, son kararı birlikte verebiliriz.',
      },
    ],
    galleryImages: defaultGallery,
    relatedCitySlug: 'gelinlik-edirne',
    whatsappPrompt: "Merhaba, Edirne'den abiye için randevu almak istiyorum.",
  },
  {
    slug: 'nisan-elbisesi-kesan',
    category: 'nisan',
    cityName: 'Keşan',
    metaTitle: 'Keşan Nişan Elbisesi | Seçil Gelinlik — Özel Tasarım',
    metaDescription:
      "Keşan'da nişan elbisesi için Seçil Gelinlik atölyesi. Klasik beyazdan modern şampanyaya kadar her renk ve kesimde özel tasarım nişan elbisesi.",
    h1: 'Keşan Nişan Elbisesi — Seçil Gelinlik Atölyesi',
    introHeadline: "Keşan'ın Butik Nişan Elbisesi Atölyesi",
    introBody:
      "Keşan'da nişan elbisesi denildiğinde en çok karşılaşılan soru renk ve kesim seçimidir. Seçil Gelinlik atölyesinde klasik beyaz ve pudra tonlarından modern şampanya, gül kurusu ve şarap rengine kadar geniş bir koleksiyon mevcut; ölçüye özel dikim ile her vücut tipine uyum sağlanır. 2022'den beri Keşan ve çevresinden gelen nişan adaylarına butik bir deneyim sunuyoruz: özel tasarım istiyorsanız modeli sıfırdan birlikte çiziyor, hazır koleksiyondan seçim yapıyorsanız aynı gün ölçü alıyoruz. Nişan günü öncesi son provada gerekli tüm rötuşları ücretsiz tamamlıyoruz.",
    faq: [
      {
        q: 'Nişan elbisesi için ne renk önerirsiniz?',
        a: 'Klasik beyaz ve pudra tonları her zaman güvenli; modern bir görünüm için şampanya, gül kurusu ve şarap rengini öneriyoruz. Cilt tonunuza ve mekan dekorasyonuna göre randevuda birlikte karar veriyoruz.',
      },
      {
        q: "Nişan elbisesi ne kadar önceden sipariş verilmeli?",
        a: 'Hazır koleksiyondan seçim yaparsanız 1-2 hafta yeterlidir. Özel tasarım için 3-5 hafta önceden başlamanızı öneriyoruz.',
      },
      {
        q: "Aksesuar ve takı da bulabilir miyim?",
        a: 'Atölyemizde nişan elbisenizle uyumlu aksesuar ve takı seçenekleri mevcuttur. Tüm tamamlayıcıları ana provada birlikte değerlendiriyoruz.',
      },
      {
        q: 'Nişan ve düğün gelinliğini birlikte tasarlayabilir miyiz?',
        a: 'Elbette. Her iki süreci paralel yürütmek hem zaman hem de bütçe açısından verimli olur. Randevu sırasında uzun vadeli planı birlikte oluşturabiliriz.',
      },
    ],
    galleryImages: defaultGallery,
    relatedCitySlug: 'gelinlik-kesan',
    whatsappPrompt: "Merhaba, Keşan'dan nişan elbisesi için randevu almak istiyorum.",
  },
];
