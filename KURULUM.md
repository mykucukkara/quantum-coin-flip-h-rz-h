# Node.js ve npm Kurulum Kılavuzu

Bu projeyi çalıştırmak için önce **Node.js** ve **npm** (Node Package Manager) yüklemeniz gerekiyor.

## Adım 1: Node.js İndirme ve Yükleme

### Windows için:

1. **Node.js resmi web sitesine gidin:**
   - https://nodejs.org/ adresini ziyaret edin

2. **LTS (Long Term Support) sürümünü indirin:**
   - "LTS" etiketli yeşil butona tıklayın (örneğin: v20.x.x)
   - Bu sürüm daha kararlı ve önerilendir

3. **İndirilen .msi dosyasını çalıştırın:**
   - Kurulum sihirbazını takip edin
   - Varsayılan ayarları kabul edebilirsiniz
   - **ÖNEMLİ:** Kurulum sırasında "Add to PATH" seçeneğinin işaretli olduğundan emin olun

4. **Kurulumu tamamlayın ve bilgisayarı yeniden başlatın** (gerekirse)

### Alternatif: Chocolatey ile Kurulum

Eğer Chocolatey paket yöneticiniz varsa:

```powershell
choco install nodejs-lts
```

## Adım 2: Kurulumu Doğrulama

Yeni bir PowerShell veya Command Prompt penceresi açın ve şu komutları çalıştırın:

```powershell
node --version
npm --version
```

Her iki komut da bir versiyon numarası göstermelidir (örneğin: `v20.11.0` ve `10.2.4`).

## Adım 3: Projeyi Çalıştırma

Node.js kurulduktan sonra, proje klasöründe şu komutları çalıştırın:

```powershell
npm install
npm run dev
```

## Sorun Giderme

### "npm is not recognized" Hatası

Eğer Node.js'i yükledikten sonra hala bu hatayı alıyorsanız:

1. **Bilgisayarı yeniden başlatın** - PATH değişikliklerinin etkili olması için gerekli olabilir

2. **PATH'i manuel kontrol edin:**
   - Windows tuşu + R → `sysdm.cpl` yazın → Enter
   - "Gelişmiş" sekmesi → "Ortam Değişkenleri"
   - "Path" değişkeninde şunların olduğundan emin olun:
     - `C:\Program Files\nodejs\`
     - `C:\Users\[KullanıcıAdınız]\AppData\Roaming\npm`

3. **Yeni bir terminal penceresi açın** - Eski pencereler eski PATH'i kullanıyor olabilir

### Klasör Yolu Sorunları (Türkçe Karakterler)

Eğer klasör yolunda Türkçe karakterler varsa ve sorun yaşıyorsanız:

- Projeyi Türkçe karakter içermeyen bir yola taşıyın (örneğin: `C:\Projects\quantum-coin-flip`)

## Yardım

Daha fazla yardım için:
- Node.js dokümantasyonu: https://nodejs.org/docs/
- npm dokümantasyonu: https://docs.npmjs.com/


