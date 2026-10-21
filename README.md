# Portfolio u01

**Publicerad webbplats:** https://profound-fairy-b4f6c7.netlify.app

## Reflektion

### Från skiss till kod

Jag började med att gå igenom designen i Figma och skapade sedan `index.html`, `base.css` och `style.css`. Jag ville få HTML-strukturen på plats innan jag började med CSS, så att jag hade något tydligt att bygga vidare på.

Jag försökte följa skissen så noggrant som möjligt, men alla avstånd var inte självklara. Därför använde jag också ett eget spacing-system, främst med steg om 4 px. Det här var första gången jag byggde en större sida med bara HTML och CSS. Mycket handlade om att prova, upptäcka fel och förstå hur jag kunde lösa dem.

### HTML och semantik

Jag försökte använda rätt HTML-element för rätt innehåll redan från början. I `head` lade jag metadata och länkar till CSS och Google Fonts. Själva sidan delade jag upp i `header`, `main` och `footer`.

Inom dessa använde jag bland annat `nav` för navigationen och `section` för olika delar av sidan. Arbetslivserfarenheter och projektkort fick `article`, eftersom de är separata delar med eget innehåll. `div` använde jag när jag bara behövde gruppera saker för layouten, som ikoner och text. Jag fick också justera rubrikhierarkin i efterhand.

### CSS och responsivitet

Jag valde att arbeta mobile first och byggde sedan vidare med media queries för större skärmar. Flexbox passade bäst för exempelvis navigationen, hero-sektionen och arbetslivserfarenheterna, där innehållet skulle ligga i rader eller kolumner. Jag ville också öva på Grid och använde det på teknikstacken och projektkorten. På desktop gjorde Grid det enkelt att få tre jämna projektkolumner.

Brytpunkterna hamnade på 600 och 1200 px utifrån när jag såg att layouten behövde ändras. Det var först när jag testade fler skärmbredder som jag märkte att vissa lösningar inte höll hela vägen.

Jag skrev först nästan allt i pixlar, men ändrade mycket till `rem` efter att vi gått igenom det på lektionen. Med `font-size: 62.5%` blev det lättare att räkna, eftersom 1 rem motsvarar 10 px med standardinställningen i webbläsaren.

Jag samlade färger och grundstilar i `base.css`. När jag senare lade till dark mode med `prefers-color-scheme` upptäckte jag att vissa färger saknade variabler, så jag fick gå tillbaka och rätta en del.

Jag fick också göra om arbetet med ikonerna. Först använde jag Lucide via JavaScript, men eftersom uppgiften skulle göras med HTML och CSS laddade jag ner SVG-filer i stället. Jag föredrog vissa Lucide-ikoner framför dem i Figma, men bytet innebar att jag fick anpassa klasser och CSS i efterhand.

### Tillgänglighet och testning

Tillgängligheten krävde mer arbete än jag först trodde. När jag kontrollerade färgkontrasterna upptäckte jag att mycket text och flera ikoner var svåra att urskilja mot bakgrunden. Jag justerade färgerna för att komma närmare WCAG AA utan att ändra designen för mycket.

Sociala ikonerna i `social-nav` var särskilt kluriga i dark mode. Eftersom de ligger som bildfiler använde jag CSS-filter med `brightness()` och `invert()` för att göra dem ljusare mot den mörka bakgrunden. Jag lade även till `:focus-visible` och olika fokusfärger för ljust och mörkt läge så att tangentbordsfokus syns tydligt.

Jag kontrollerade HTML-koden i W3C Validator och rättade felen tills den visade 0 fel. Det var väldigt lärorikt att behöva klura och felsöka rad för rad som inte uppfyllde kraven.

### UX och användbarhet

Jag tycker att Pawans design skiss var tydlig och enkel att följa, men jag adderade lite extra margin och padding där jag ansåg att man kunde förbättra UX/UI, samt använde som minst 12px på text för bäst möjliga tillgänglighet.

Med tanke på att kravet var att hålla sig till `HTML` och `CSS` är jag väldigt nöjd UX och UI mässigt. Sedan hade man velat lägga till interaktion så hamburgare-menyn döljer länkarna och endast visar dem när man trycker på knappen.

### Styrkor och förbättringar

Jag är nöjd med att jag fick ihop hela sidan och kom nära skissen. Jag tycker att grundplaneringen fungerade bra, även om jag behövde göra ganska mycket justeringar när jag började testa responsivitet och dark mode.

Med mer tid hade jag städat upp i CSS-filen och minskat vissa upprepningar. Jag tar också med mig att det är smart att tänka igenom färgvariabler, ikoner och olika skärmstorlekar tidigare i arbetet.

### AI som hjälpmedel

Jag använde ChatGPT framför allt när jag fastnade eller behövde förstå varför något inte fungerade. Det kunde vara en felstavad klass, en CSS-selektor eller en egenskap jag missförstått. Jag testade lösningarna själv, ändrade det som behövdes och försökte förstå varför de fungerade. Det blev ett komplement till lektionerna, inte ett sätt att slippa skriva koden.

### Git och versionshantering

Den största missen var att jag inte gjorde commits löpande. Jag arbetade med sidan vid flera tillfällen, men var så fokuserad på HTML, CSS och att få designen att fungera att jag inte kom igång med Git under arbetets gång.

Det var först vid slutkontrollen av kraven, efter att jag gått igenom bland annat tillgänglighet och validering, som jag såg att flera commits efterfrågades. Det borde jag ha uppmärksammat tidigare. Jag förstår nyttan med att kunna följa ändringar och gå tillbaka till tidigare versioner. Nästa gång kommer jag använda Git som en naturlig del av arbetet från början.
