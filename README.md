# Adjustable Quantum Coin Flip (H–RZ–H Circuit)

Bu proje, ayarlanabilir bir kuantum "yazı-tura" deneyini interaktif olarak gösteren tek sayfalık bir web uygulamasıdır.

## Kuantum Devresi
[www.mykucukkara.git](https://mykucukkara.github.io/quantum-coin-flip-h-rz-h/
)
Uygulama şu kuantum devresini simüle eder:

```
|0⟩ — H — RZ(φ) — H — Ölçüm
```

### Devre Açıklaması

1. **Başlangıç Durumu**: |0⟩ (klasik 0 durumu)
2. **İlk Hadamard (H)**: Süperpozisyon oluşturur: (|0⟩ + |1⟩) / √2
3. **RZ(φ) Rotasyonu**: Faz rotasyonu ekler, φ açısı ile kontrol edilir
4. **İkinci Hadamard (H)**: Faz farklarını ölçüm olasılıklarına dönüştürür
5. **Ölçüm**: 0 veya 1 sonucunu üretir

### Matematiksel Formüller

Ölçüm olasılıkları:

- **P(0) = cos²(φ / 2)**
- **P(1) = sin²(φ / 2)**

Bu devre, Rx(φ) rotasyonuna eşdeğerdir. φ açısı, kuantum yazı-turanın "bias"ını (eğilimini) kontrol eder:

- φ = 0° → P(0) = 1, P(1) = 0 (her zaman 0)
- φ = 180° → P(0) = P(1) = 0.5 (adil yazı-tura)
- φ = 360° → P(0) = 1, P(1) = 0 (tekrar her zaman 0)

## Özellikler

- **İnteraktif Kontrol**: φ açısını 0° ile 360° arasında slider ile ayarlayın
- **Gerçek Zamanlı Olasılık Gösterimi**: Teorik olasılıklar anlık olarak hesaplanır ve gösterilir
- **Simülasyon**: N sayıda ölçüm simüle ederek teorik ve deneysel sonuçları karşılaştırın
- **Görsel Karşılaştırma**: Teorik ve deneysel sonuçları bar chart ile görselleştirin

## Teknolojiler

- **React 18** - UI framework
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool ve dev server
- **Vanilla CSS** - Stil (herhangi bir UI framework kullanılmadı)

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**

```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

Uygulama genellikle `http://localhost:5173` adresinde açılacaktır.

3. **Production build oluşturun:**

```bash
npm run build
```

Build edilmiş dosyalar `dist` klasörüne yerleştirilir.

4. **Production build'i önizleyin:**

```bash
npm run preview
```

## Proje Yapısı

```
.
├── src/
│   ├── components/
│   │   ├── ControlPanel.tsx          # φ açısı ve shots kontrolü
│   │   ├── ProbabilityDisplay.tsx     # Teorik olasılık gösterimi
│   │   ├── SimulationResults.tsx      # Simülasyon sonuçları ve karşılaştırma
│   │   └── CircuitExplanation.tsx     # Devre ve formül açıklaması
│   ├── utils/
│   │   └── quantumMath.ts            # Kuantum hesaplama fonksiyonları
│   ├── App.tsx                        # Ana uygulama bileşeni
│   ├── main.tsx                       # React entry point
│   └── styles.css                     # Global stiller
├── index.html                          # HTML template
├── package.json                        # Proje bağımlılıkları
├── vite.config.ts                     # Vite yapılandırması
├── tsconfig.json                      # TypeScript yapılandırması
└── README.md                          # Bu dosya
```

## Kullanım

1. **φ Açısını Ayarlayın**: Slider'ı kullanarak veya doğrudan derece değeri girerek φ açısını değiştirin
2. **Olasılıkları İnceleyin**: Teorik olasılıkların gerçek zamanlı olarak nasıl değiştiğini görün
3. **Deney Çalıştırın**: "Deneyi Çalıştır" butonuna tıklayarak belirtilen sayıda ölçüm simüle edin
4. **Sonuçları Karşılaştırın**: Teorik ve deneysel sonuçları karşılaştırın ve görselleştirmeyi inceleyin

## Lisans

Bu proje eğitim amaçlıdır ve açık kaynak kodludur.

