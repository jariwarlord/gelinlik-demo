export interface BusinessInfo {
  name: string;
  legalName: string;
  slogan: string;
  shortDescription: string;
  longDescription: string;
  establishedYear: number;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDefaultMessage: string;
  url: string;
  ogImage: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    full: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  social: {
    instagram: string;
    facebook: string;
    instagramHandle: string;
  };
  priceRange: string;
}

export const business: BusinessInfo = {
  name: 'Seçil Gelinlik',
  legalName: 'Seçil Gelinlik',
  slogan: 'Hayallerinizi süsleyen gelinlikler tasarlıyoruz.',
  shortDescription:
    "Keşan'da özel tasarım gelinlik, abiye ve nişan elbisesi üreten butik atölye. Trakya geneline hizmet verir.",
  longDescription:
    "Seçil Gelinlik, 2022'den beri Keşan'da özel tasarım gelinlik ve abiye modelleriyle kişiye özel hizmet sunar. Edirne, Tekirdağ, Çorlu, Kırklareli ve Lüleburgaz başta olmak üzere tüm Trakya bölgesindeki gelin adaylarına ulaşılabilir konumdayız.",
  establishedYear: 2022,
  email: 'secil.gelinlik@gmail.com',
  phone: '+905441786244',
  phoneDisplay: '+90 544 178 62 44',
  whatsapp: '905441786244',
  whatsappDefaultMessage: 'Merhaba randevu almak istiyorum',
  url: 'https://secilgelinlik.com',
  ogImage: 'https://secilgelinlik.com/images/og-image.jpg',
  address: {
    street: 'Büyük Cami, Hal Gç. Emek İş Merkezi no:10/d',
    locality: 'Keşan',
    region: 'Edirne',
    postalCode: '22800',
    country: 'TR',
    full: 'Büyük Cami, Hal Gç. Emek İş Merkezi no:10/d, 22800 Keşan/Edirne',
  },
  geo: {
    latitude: 40.8527,
    longitude: 26.6307,
  },
  openingHours: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '20:00',
  },
  social: {
    instagram: 'https://www.instagram.com/secil_gelinlik_kesan/',
    facebook: 'https://www.facebook.com/secilgelinlikkesan/',
    instagramHandle: '@secil_gelinlik_kesan',
  },
  priceRange: '$$',
};

export function whatsappLink(message: string = business.whatsappDefaultMessage): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function yearsActive(): number {
  return new Date().getFullYear() - business.establishedYear;
}
