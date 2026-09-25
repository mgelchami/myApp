/**
 * Core content for the coffee encyclopedia: growing origins, botanical species,
 * post-harvest processing, roasting, brewing methods, history, and glossary.
 */

export type Origin = {
  id: string;
  country: string;
  continent: 'Africa' | 'Latin America' | 'Asia-Pacific' | 'Caribbean' | 'Middle East';
  tagline: string;
  altitude: string;
  harvest: string;
  primaryProcess: string;
  primarySpecies: string;
  notableRegions: string[];
  varieties: string[];
  tastingNotes: string[];
  overview: string;
  history: string;
  funFact: string;
};

export const origins: Origin[] = [
  {
    id: 'ethiopia',
    country: 'Ethiopia',
    continent: 'Africa',
    tagline: 'The birthplace of Coffea arabica',
    altitude: '1,500–2,200 m',
    harvest: 'October – December',
    primaryProcess: 'Washed & Natural',
    primarySpecies: 'Arabica (heirloom landraces)',
    notableRegions: ['Yirgacheffe', 'Sidamo', 'Guji', 'Harrar', 'Limu'],
    varieties: ['Heirloom (thousands of unnamed local landraces)', 'JARC selections (74110, 74112)'],
    tastingNotes: ['Jasmine', 'Bergamot', 'Blueberry', 'Stone fruit', 'Black tea'],
    overview:
      'Ethiopia is both the genetic home of Coffea arabica and its most biodiverse growing region — coffee still grows wild in the highland forests of the southwest. Most farms are smallholdings under two hectares, and trees are propagated from open-pollinated "heirloom" stock rather than the handful of named varieties grown elsewhere, giving Ethiopian lots an unmatched range of floral and fruit-driven flavors. Yirgacheffe and Guji washed lots are prized for jasmine and citrus clarity, while Harrar naturals lean into heavy blueberry and wine-like fruit.',
    history:
      'Ethiopian legend credits a 9th-century goat herder named Kaldi with discovering coffee after noticing his goats grew energetic eating red cherries from a wild shrub in the Kaffa region — a name many linguists tie to the word "coffee" itself. Coffee culture is woven into daily life through the Ethiopian coffee ceremony (buna), a multi-hour ritual of roasting green beans over charcoal, grinding by hand, and brewing in a clay jebena pot for family and guests.',
    funFact: 'Ethiopia still consumes roughly half of everything it produces domestically — coffee culture there predates coffee exports by centuries.',
  },
  {
    id: 'yemen',
    country: 'Yemen',
    continent: 'Middle East',
    tagline: 'Where cultivated coffee first left Africa',
    altitude: '1,500–2,400 m',
    harvest: 'June – December (varies by terrace)',
    primaryProcess: 'Natural (sun-dried)',
    primarySpecies: 'Arabica (ancient landraces: Udaini, Dawairi, Tuffahi)',
    notableRegions: ['Haraaz', 'Bani Matar', 'Yafi', 'Bura'],
    varieties: ['Udaini', 'Dawairi', 'Tuffahi', 'Bura\'i'],
    tastingNotes: ['Dried fruit', 'Baking spice', 'Wine', 'Dark chocolate', 'Tobacco'],
    overview:
      'Yemen was the first country outside Ethiopia to cultivate coffee as a crop, terracing steep, arid mountainsides above the Red Sea port of Mokha — the city that lent its name to "mocha." Trees are dry-farmed without irrigation, grown alongside qat and pomegranate on centuries-old stone terraces, and yields are tiny compared to any other origin. Ongoing conflict has made export logistics extremely difficult, but Yemeni coffee remains some of the most distinctive in the world: wild, winey, and spice-laden.',
    history:
      'Sufi monks in 15th-century Yemen were among the first to cultivate coffee deliberately and brew it to stay alert through night-long devotions. From the port of Mokha, Yemeni coffee was shipped to Europe throughout the 1600s, making Yemen the sole commercial source of coffee for roughly two centuries before the Dutch smuggled live plants out to Java and the French to the Caribbean.',
    funFact: 'Many Yemeni trees are genetically distinct from every other cultivated variety, having been isolated on their terraces for centuries — a genetic reservoir researchers now study for disease resistance.',
  },
  {
    id: 'kenya',
    country: 'Kenya',
    continent: 'Africa',
    tagline: 'Bright, blackcurrant-forward washed coffee',
    altitude: '1,400–2,100 m',
    harvest: 'October – December (main crop), June – August (fly crop)',
    primaryProcess: 'Double-fermented washed',
    primarySpecies: 'Arabica (SL28, SL34, Ruiru 11, Batian)',
    notableRegions: ['Nyeri', 'Kirinyaga', 'Murang\'a', 'Embu'],
    varieties: ['SL28', 'SL34', 'Ruiru 11', 'Batian'],
    tastingNotes: ['Blackcurrant', 'Tomato', 'Grapefruit', 'Brown sugar'],
    overview:
      'Kenyan coffee is grown on rich volcanic soil around Mount Kenya by smallholders who deliver ripe cherry to central "factories" (wet mills) for meticulous washed processing, often including a double fermentation and soak that heightens acidity and clarity. A transparent weekly auction system rewards quality with a numeric AA/AB/PB grading scale based on bean size, encouraging some of the most rigorous quality control of any origin.',
    history:
      'The British introduced coffee to Kenya in the early 1900s via colonial estates; the SL28 and SL34 varieties were selected in the 1930s by Scott Agricultural Laboratories for drought tolerance and cup quality and remain benchmark varieties worldwide. Independence in 1963 brought land reform that redistributed estates into the smallholder cooperative system that still defines Kenyan coffee today.',
    funFact: 'Kenya\'s grading system (AA, AB, PB, C) is based purely on bean size and density, not cup quality — the best-tasting lot at auction isn\'t always graded AA.',
  },
  {
    id: 'rwanda-burundi',
    country: 'Rwanda & Burundi',
    continent: 'Africa',
    tagline: 'Great Lakes coffee rebuilt around washing stations',
    altitude: '1,400–2,200 m',
    harvest: 'March – July',
    primaryProcess: 'Fully washed',
    primarySpecies: 'Arabica (Bourbon)',
    notableRegions: ['Lake Kivu (Rwanda)', 'Nyamasheke', 'Kayanza (Burundi)', 'Ngozi'],
    varieties: ['Red Bourbon', 'Jackson', 'Mibirizi'],
    tastingNotes: ['Red apple', 'Orange', 'Honey', 'Brown spice'],
    overview:
      'Both landlocked nations sit on the Central African Rift around Lake Kivu, with high altitude, rich volcanic soil, and Red Bourbon trees planted by Belgian colonists. Nearly all cherry passes through community washing stations that ferment and dry the coffee to a clean, sweet, citrus-driven cup. Rwanda in particular rebuilt its coffee sector into a specialty-quality export after the 1994 genocide, with washing-station investment central to that recovery.',
    history:
      'Coffee arrived with Belgian and German colonial administrations in the early 20th century, initially grown under compulsory cultivation policies for export revenue. Post-independence instability and, in Rwanda\'s case, the 1994 genocide devastated the sector; international development programs through the 2000s funded new washing stations and training that repositioned both countries as specialty origins.',
    funFact: 'A period of intense heat during Rwandan processing was once linked to a "potato defect" — a musty flavor taint caused by a specific bacterium in the cherry — that the industry spent years learning to sort out.',
  },
  {
    id: 'brazil',
    country: 'Brazil',
    continent: 'Latin America',
    tagline: 'The world\'s largest coffee producer, by far',
    altitude: '400–1,600 m',
    harvest: 'May – September',
    primaryProcess: 'Natural & Pulped Natural',
    primarySpecies: 'Arabica (Bourbon, Mundo Novo, Catuaí) and Robusta (Conilon)',
    notableRegions: ['Minas Gerais', 'Cerrado', 'Sul de Minas', 'Mogiana', 'Espírito Santo (Conilon)'],
    varieties: ['Bourbon', 'Mundo Novo', 'Catuaí', 'Icatu', 'Conilon (Robusta)'],
    tastingNotes: ['Chocolate', 'Nuts', 'Low acidity', 'Caramel', 'Full body'],
    overview:
      'Brazil produces roughly a third of the world\'s coffee — more than the next two producers combined — across vast, largely mechanized, flat-to-rolling farms that make it the only major origin where harvesting machines are common. Lower altitudes and drier climates favor natural and pulped-natural processing, producing sweet, low-acid, chocolatey cups that form the backbone of most commercial espresso blends. Brazil also grows more Robusta (locally "Conilon") than any country outside Vietnam.',
    history:
      'Coffee reached Brazil in 1727, legend has it smuggled in as seeds hidden inside a bouquet given to an officer by the wife of French Guiana\'s governor. Plantations expanded explosively through the 1800s on enslaved and later immigrant labor, making Brazil the dominant global supplier by the 1840s — a position it has never relinquished. Brazilian oversupply and price crashes repeatedly shaped world coffee economics, prompting the international agreements that governed coffee prices for much of the 20th century.',
    funFact: 'Brazil is the only top producing country large enough to meaningfully move the entire world market with a single frost or drought — a "Brazilian frost" is a standing worry for commodity traders.',
  },
  {
    id: 'colombia',
    country: 'Colombia',
    continent: 'Latin America',
    tagline: 'Washed Arabica grown on Andean slopes',
    altitude: '1,200–2,000 m',
    harvest: 'Two harvests: main (Oct–Dec) and mitaca (Apr–Jun)',
    primaryProcess: 'Fully washed',
    primarySpecies: 'Arabica (Caturra, Castillo, Typica, Bourbon)',
    notableRegions: ['Huila', 'Nariño', 'Tolima', 'Cauca', 'Antioquia (Eje Cafetero)'],
    varieties: ['Caturra', 'Castillo', 'Typica', 'Bourbon', 'Colombia (rust-resistant hybrid)'],
    tastingNotes: ['Red apple', 'Caramel', 'Citrus', 'Balanced sweetness'],
    overview:
      'Colombia\'s Andean geography gives it three mountain ranges of steep, well-drained slopes ideal for washed Arabica, and two harvests a year in many zones thanks to its equatorial rainfall pattern. Some 500,000 mostly small family farms grow coffee, coordinated by the century-old Federación Nacional de Cafeteros (FNC), which markets Colombian coffee under the "100% Colombian" and Juan Valdez branding and helped standardize washed processing quality nationwide.',
    history:
      'Jesuit priests are credited with bringing coffee to Colombia in the early 1700s, but commercial planting only took off in the late 19th century along the Andean slopes cleared for cultivation. The FNC, founded in 1927, built the roads, mills, and research infrastructure (including the disease-resistant Castillo and Colombia varieties bred at Cenicafé) that made Colombia the second-largest Arabica producer in the world.',
    funFact: 'The Colombia variety was bred specifically to resist coffee leaf rust while preserving traditional cup quality, and is now planted on a majority of the country\'s farms.',
  },
  {
    id: 'guatemala',
    country: 'Guatemala',
    continent: 'Latin America',
    tagline: 'Volcanic terroir, eight distinct growing regions',
    altitude: '1,300–2,000 m',
    harvest: 'December – March',
    primaryProcess: 'Fully washed',
    primarySpecies: 'Arabica (Bourbon, Caturra, Catuaí)',
    notableRegions: ['Antigua', 'Huehuetenango', 'Atitlán', 'Cobán', 'Fraijanes'],
    varieties: ['Bourbon', 'Caturra', 'Catuaí', 'Pache'],
    tastingNotes: ['Cocoa', 'Red fruit', 'Spice', 'Smoky sweetness (Antigua)'],
    overview:
      'A chain of volcanoes gives Guatemala mineral-rich soils and dramatic altitude swings that Anacafé, the national coffee association, divides into eight officially recognized regions each with its own character — from the classic smoky-sweet cup of Antigua, shielded by three volcanoes, to the high-grown, wine-like lots of Huehuetenango near the Mexican border. Most coffee is grown under shade on small to mid-size family farms.',
    history:
      'Jesuit missionaries introduced coffee for ornamental use in the mid-1700s, and it became a major export crop after synthetic dyes collapsed the market for Guatemala\'s previous cash crop, cochineal, in the 1860s. President Justo Rufino Barrios promoted coffee aggressively through land reform in the 1870s–80s, cementing plantation agriculture that still shapes the country\'s highland economy.',
    funFact: 'Huehuetenango sits too far north to be affected by Pacific hurricanes and is warmed by hot winds from Mexico, letting coffee there grow at unusually high altitudes for the latitude.',
  },
  {
    id: 'costa-rica',
    country: 'Costa Rica',
    continent: 'Latin America',
    tagline: 'Micro-mills and the honey-process pioneer',
    altitude: '1,200–1,900 m',
    harvest: 'November – March',
    primaryProcess: 'Honey & Washed',
    primarySpecies: 'Arabica only (Robusta cultivation is banned by law)',
    notableRegions: ['Tarrazú', 'Central Valley', 'West Valley', 'Tres Ríos'],
    varieties: ['Caturra', 'Catuaí', 'Villa Sarchí'],
    tastingNotes: ['Honeyed sweetness', 'Citrus', 'Clean acidity', 'Stone fruit'],
    overview:
      'Costa Rica legally requires 100% Arabica cultivation and has phased out the lowest export grades entirely, pushing the whole industry toward quality. Deregulation of the wet-milling business in the late 1990s spawned hundreds of small "micro-mills" on individual farms, giving growers direct control over processing for the first time and driving rapid experimentation with honey processing — where varying amounts of sticky mucilage are left on the parchment while it dries.',
    history:
      'Coffee arrived in the late 18th century and by the 1820s the government was giving away land and seedlings to encourage cultivation, making Costa Rica one of the first Central American economies built around coffee exports to Britain. The shift from large centralized mills (beneficios) to farmer-owned micro-mills after 1998 legislation is often credited with launching the honey-process movement now used worldwide.',
    funFact: 'Costa Rica\'s honey processing naming (white, yellow, red, black honey) roughly tracks how much mucilage is left on the bean and how long it dries — more mucilage and longer drying means a darker "honey" and a heavier, sweeter cup.',
  },
  {
    id: 'panama',
    country: 'Panama',
    continent: 'Latin America',
    tagline: 'Home of record-breaking Geisha coffee',
    altitude: '1,500–1,900 m',
    harvest: 'December – March',
    primaryProcess: 'Washed, Natural & Anaerobic',
    primarySpecies: 'Arabica (Geisha/Gesha, Caturra, Typica)',
    notableRegions: ['Boquete', 'Volcán'],
    varieties: ['Geisha (Gesha)', 'Caturra', 'Typica', 'Catuaí'],
    tastingNotes: ['Jasmine', 'Bergamot', 'Peach', 'Tropical fruit', 'Tea-like body'],
    overview:
      'Panama is a small producer by volume but an outsized influence on specialty coffee thanks to the Geisha variety, an Ethiopian landrace that arrived via Costa Rica in the 1960s and languished as an unremarkable filler crop for decades. Grown at high altitude around the volcano Barú near Boquete, Geisha exploded into fame after Hacienda La Esmeralda entered it in the Best of Panama competition in 2004, and lots now regularly set world-record auction prices.',
    history:
      'Geisha originated near the town of Gesha in southwestern Ethiopia and traveled — via Kenya, Tanzania, and Costa Rica\'s Tropical Agricultural Research Center (CATIE) — to Panama in 1963, planted mainly for its resistance to coffee leaf rust rather than its flavor. It sat unnoticed until La Esmeralda\'s 2004 entry produced a cup unlike anything judges had tasted, triggering a replanting boom across Central America and a permanent shift in how the industry values floral, tea-like Arabica.',
    funFact: 'Top-lot Panama Geisha has sold at auction for well over $100 per pound green — among the highest prices ever paid for unroasted coffee.',
  },
  {
    id: 'indonesia',
    country: 'Indonesia',
    continent: 'Asia-Pacific',
    tagline: 'Wet-hulled, earthy, low-acid coffee',
    altitude: '900–1,700 m',
    harvest: 'September – December (varies by island)',
    primaryProcess: 'Wet-hulled (Giling Basah)',
    primarySpecies: 'Arabica (Sumatra, Sulawesi) and Robusta (Java, Lampung)',
    notableRegions: ['Aceh & Lintong (Sumatra)', 'Toraja (Sulawesi)', 'Java', 'Flores', 'Bali'],
    varieties: ['Typica-derived Sumatra landraces', 'Jember', 'S-795'],
    tastingNotes: ['Earthy', 'Cedar', 'Dark chocolate', 'Herbal', 'Low acidity, heavy body'],
    overview:
      'Indonesia is the archipelago that gave coffee its name for a Dutch colony ("a cup of Java"), and its signature is wet-hulling: parchment coffee, still tacky with mucilage, is hulled at high moisture and finished drying as exposed green beans. The technique, born of humid harvest-season weather and smallholder logistics, produces the dense, syrupy, low-acid, earthy cup associated with Sumatra Mandheling and Sulawesi Toraja coffees.',
    history:
      'The Dutch East India Company planted the first coffee in Java around 1696 using cuttings smuggled from Yemen, and Java quickly became Europe\'s primary coffee source through the 1700s — common enough that "a cup of Java" entered English as slang for coffee itself. A leaf-rust epidemic devastated Arabica across the islands in the late 1800s, prompting large-scale replanting with rust-resistant Robusta that still dominates Java and Lampung today, while Arabica survives mainly in the highlands of Sumatra and Sulawesi.',
    funFact: 'Kopi Luwak, coffee cherries eaten and excreted by the Asian palm civet, originated in colonial-era Indonesia and remains the most famous (and controversial, given animal-welfare concerns around caged civets) specialty coffee from the region.',
  },
  {
    id: 'vietnam',
    country: 'Vietnam',
    continent: 'Asia-Pacific',
    tagline: 'The world\'s Robusta powerhouse',
    altitude: '500–1,000 m',
    harvest: 'October – January',
    primaryProcess: 'Natural (increasingly washed for Robusta; washed for Arabica)',
    primarySpecies: 'Robusta (~95% of production), some Arabica in the north',
    notableRegions: ['Dak Lak (Buon Ma Thuot)', 'Lam Dong', 'Gia Lai', 'Son La (Arabica)'],
    varieties: ['Robusta clonal selections', 'Catimor (Arabica)'],
    tastingNotes: ['Bold', 'Nutty', 'Chocolate', 'Heavy body', 'Higher caffeine, more bitterness'],
    overview:
      'Vietnam is the world\'s second-largest coffee producer overall and by far the largest producer of Robusta, grown across the red basalt soils of the Central Highlands. Most Robusta feeds instant coffee and espresso-blend crema, but it also anchors distinctly Vietnamese traditions: cà phê sữa đá (drip coffee over sweetened condensed milk and ice) and egg coffee (cà phê trứng), brewed strong through a small metal phin filter.',
    history:
      'French colonists introduced coffee to Vietnam in the 1850s, initially planting Arabica, but war, disease, and a state-planned economy suppressed the industry for much of the 20th century. Đổi Mới economic reforms from 1986 opened land to private cultivation and Robusta output surged through the 1990s and 2000s, propelling Vietnam past Colombia to become the world\'s number-two producer almost overnight by industry timescales.',
    funFact: 'A single province, Dak Lak, and its capital Buon Ma Thuot, produce a meaningful share of the entire world\'s Robusta supply.',
  },
  {
    id: 'papua-new-guinea',
    country: 'Papua New Guinea',
    continent: 'Asia-Pacific',
    tagline: 'Remote, smallholder-grown highland Arabica',
    altitude: '1,300–2,000 m',
    harvest: 'April – September',
    primaryProcess: 'Washed',
    primarySpecies: 'Arabica (Typica, Bourbon, Arusha)',
    notableRegions: ['Eastern Highlands', 'Western Highlands', 'Jiwaka'],
    varieties: ['Typica', 'Bourbon', 'Arusha', 'Mundo Novo'],
    tastingNotes: ['Tropical fruit', 'Molasses', 'Full body', 'Mild acidity'],
    overview:
      'Coffee in Papua New Guinea is grown almost entirely by smallholders farming steep, roadless highland terrain, with cherry often carried out by hand or small plane to distant mills. The isolation that makes logistics difficult also preserved old-growth Typica and Bourbon trees rarely found intact elsewhere, and the resulting cups combine tropical-fruit sweetness with a full, rounded body.',
    history:
      'Jamaican Blue Mountain seedlings were brought to PNG by Australian colonial administrators in the 1920s–30s and planted on highland plantations; independence in 1975 gradually shifted production toward the roughly 300,000 smallholder households who now grow most of the country\'s coffee. Fragmented land ownership and minimal road infrastructure keep the industry small but have also protected it from the large-scale replanting that erased heirloom varieties elsewhere.',
    funFact: 'Because so much PNG coffee moves by light aircraft between highland villages and coastal ports, harvest-season weather can ground the supply chain as easily as it can a flight.',
  },
  {
    id: 'jamaica',
    country: 'Jamaica',
    continent: 'Caribbean',
    tagline: 'The original luxury single-origin: Blue Mountain',
    altitude: '900–1,700 m',
    harvest: 'August – March',
    primaryProcess: 'Fully washed',
    primarySpecies: 'Arabica (Typica)',
    notableRegions: ['Blue Mountains (St. Andrew, St. Thomas, Portland, St. Mary)'],
    varieties: ['Typica'],
    tastingNotes: ['Mild', 'Balanced', 'Sweet', 'Soft acidity', 'No bitterness'],
    overview:
      'Jamaica Blue Mountain coffee is a legally protected geographical designation covering a small, cloud-shrouded, high-altitude zone where cool temperatures slow cherry maturation and produce an unusually mild, low-acid, balanced cup with little of Arabica\'s typical brightness. Strict grading, mandatory government cupping approval, and the traditional wooden export barrel have made it one of the most recognized — and expensive — named origins in the world, historically driven by strong demand from Japan.',
    history:
      'Coffee arrived in Jamaica in 1728, brought by the island\'s governor from Martinique using Typica stock that traces back to a single tree at the Jardin des Plantes in Paris. The Blue Mountain name became a protected designation in the 20th century, and a long-term supply agreement with Japanese trading houses from the 1980s onward cemented Japan as the coffee\'s dominant market.',
    funFact: 'Genuine Jamaica Blue Mountain must be grown between roughly 900 and 1,700 meters within the designated parishes and is certified by the Coffee Industry Board — coffee grown just outside the zone is legally sold only as "Jamaica High Mountain."',
  },
];

export type Species = {
  id: string;
  name: string;
  latinName: string;
  shareOfWorldProduction: string;
  caffeineContent: string;
  idealAltitude: string;
  chromosomes: string;
  overview: string;
  characteristics: string[];
  notableVarieties: { name: string; description: string }[];
};

export const speciesList: Species[] = [
  {
    id: 'arabica',
    name: 'Arabica',
    latinName: 'Coffea arabica',
    shareOfWorldProduction: '~60–65%',
    caffeineContent: 'Lower (roughly 1.2–1.5% of dry bean weight)',
    idealAltitude: '900–2,200 m',
    chromosomes: '44 (tetraploid — a natural hybrid of C. canephora and C. eugenioides)',
    overview:
      'Arabica is the species behind most specialty and premium coffee. It evolved in the highland forests of southwestern Ethiopia as a natural cross between Coffea canephora and Coffea eugenioides, giving it four sets of chromosomes instead of two and making it largely self-pollinating — which is also why its varieties stay relatively genetically stable compared to the outcrossing Robusta. That genetic narrowness is a double-edged sword: it produces the complex acidity and aromatics prized in specialty coffee, but leaves Arabica far more vulnerable to pests like coffee berry borer and diseases like coffee leaf rust than its hardier cousin.',
    characteristics: [
      'Flatter, more elongated bean with an S-shaped center crease',
      'Grows best at high altitude in cooler, more temperate microclimates',
      'Self-pollinating, so varieties breed relatively true',
      'More susceptible to disease and frost; lower yield per tree than Robusta',
      'Wider, more complex range of acidity, aroma, and sweetness in the cup',
    ],
    notableVarieties: [
      { name: 'Typica', description: 'The original variety spread from Yemen across the world; low yield, exceptional cup quality, parent of most other varieties.' },
      { name: 'Bourbon', description: 'A natural Typica mutation from Île Bourbon (Réunion); rounder beans, sweeter cup, still widely planted.' },
      { name: 'Caturra', description: 'A compact Bourbon mutation found in Brazil; higher yield and shorter trees at some cost to cup complexity.' },
      { name: 'Catuaí', description: 'A Caturra × Mundo Novo hybrid bred in Brazil for compact size, high yield, and wind/rain resistance.' },
      { name: 'SL28 / SL34', description: 'Kenyan selections from the 1930s prized for vivid acidity, blackcurrant notes, and drought tolerance (SL28).' },
      { name: 'Geisha (Gesha)', description: 'An Ethiopian landrace made famous in Panama for intensely floral, jasmine-and-bergamot cups and record auction prices.' },
      { name: 'Pacamara', description: 'A large-beaned Pacas × Maragogipe hybrid from El Salvador known for bold body and complexity.' },
      { name: 'Castillo / Colombia', description: 'Rust-resistant hybrids bred in Colombia at Cenicafé to protect yield without sacrificing cup quality.' },
    ],
  },
  {
    id: 'robusta',
    name: 'Robusta',
    latinName: 'Coffea canephora',
    shareOfWorldProduction: '~35–40%',
    caffeineContent: 'Higher (roughly 2.2–2.7% of dry bean weight)',
    idealAltitude: '200–800 m',
    chromosomes: '22 (diploid, cross-pollinating)',
    overview:
      'Robusta is native to the lowland forests of central and western Africa and, true to its name, tolerates heat, humidity, and disease far better than Arabica, including strong natural resistance to coffee leaf rust. Because it cross-pollinates, individual trees vary more than Arabica and breeders have used that diversity to develop high-yield clonal selections. Its higher caffeine content is itself a pest deterrent evolved by the plant, and it delivers a heavier-bodied, more bitter, earthier cup with less acidity — valued for crema and strength in espresso blends and as the backbone of most instant coffee.',
    characteristics: [
      'Rounder, smaller bean with a straighter center crease',
      'Thrives at low-to-mid altitude in hot, humid climates',
      'Cross-pollinating, so plants and cup profiles are more variable',
      'Naturally more resistant to leaf rust and many pests',
      'Higher caffeine, fuller body, lower acidity, more bitterness',
    ],
    notableVarieties: [
      { name: 'Conilon', description: 'The dominant Robusta cultivar group in Brazil (Espírito Santo), bred for drought tolerance and yield.' },
      { name: 'Nganda', description: 'A widely grown Ugandan/Central African Robusta type valued for vigor and yield.' },
      { name: 'Vietnamese clonal selections', description: 'High-yield clones developed through Vietnam\'s state agricultural programs that powered its rise to the world\'s top Robusta producer.' },
    ],
  },
  {
    id: 'liberica',
    name: 'Liberica',
    latinName: 'Coffea liberica',
    shareOfWorldProduction: '<1%',
    caffeineContent: 'Moderate',
    idealAltitude: 'Sea level – 600 m',
    chromosomes: '22 (diploid)',
    overview:
      'Liberica is a tall, hardy tree — trees can exceed 9 meters — native to West Africa (Liberia, hence the name) and grown commercially today mainly in the Philippines (where it is called Kapeng Barako) and parts of Malaysia. Its cherries and beans are notably large and irregularly shaped, its aroma leans floral and woody with a distinctive jackfruit-like sweetness, and it was briefly a major global crop in the late 1800s when it was planted to replace Arabica trees wiped out by leaf rust, particularly across Southeast Asia. It remains a niche specialty rather than a mainstream commodity, but is enjoying a small resurgence as growers look for climate-resilient species.',
    characteristics: [
      'Large, irregularly shaped, asymmetric beans',
      'Tall, vigorous trees that tolerate heat, humidity, and lower altitude',
      'Distinctive floral, woody, and jackfruit/tropical-fruit aroma',
      'Historically used to replace rust-devastated Arabica in the 1890s',
      'Grown almost entirely for local and niche specialty markets today',
    ],
    notableVarieties: [
      { name: 'Kapeng Barako', description: 'The Philippine Liberica tradition, prized locally for its strong, aromatic cup and cultural heritage status.' },
    ],
  },
  {
    id: 'excelsa',
    name: 'Excelsa',
    latinName: 'Coffea liberica var. dewevrei',
    shareOfWorldProduction: '<1%',
    caffeineContent: 'Moderate',
    idealAltitude: '200–800 m',
    chromosomes: '22 (diploid)',
    overview:
      'Long marketed as a fourth commercial species, Excelsa was reclassified by botanists as a variety of Liberica, but the trade still treats it as its own category because its cup is genuinely distinct: a strange, appealing mix of light, tart, almost dark-fruited acidity with the heavier, woodier body typical of the Liberica family. It is grown mainly in Southeast Asia (notably South Sudan and parts of Vietnam and the Philippines) on tall, hardy, drought-tolerant trees, and interest in it has grown as a genetic resource for climate resilience even though volumes remain tiny.',
    characteristics: [
      'Tall, hardy, drought-resistant trees similar to Liberica',
      'Cup combines tart, fruity acidity with a fuller, woodier body',
      'Botanically classified as a Liberica variety, marketed as its own type',
      'Very limited commercial cultivation, mostly Southeast Asia and South Sudan',
    ],
    notableVarieties: [],
  },
];

export type ProcessMethod = {
  id: string;
  name: string;
  alsoKnownAs?: string;
  summary: string;
  steps: string[];
  flavorImpact: string;
  duration: string;
  bestFor: string;
};

export const processMethods: ProcessMethod[] = [
  {
    id: 'washed',
    name: 'Washed (Wet) Process',
    alsoKnownAs: 'Fully washed',
    summary:
      'Ripe cherries are pulped to strip the skin and most fruit the same day they are picked, then the remaining sticky mucilage is broken down in fermentation tanks before the parchment coffee is rinsed clean and sun-dried.',
    steps: [
      'Sort and float cherries in water to remove underripes and defects',
      'Pulp cherries mechanically to remove skin and most of the fruit',
      'Ferment the mucilage-covered parchment in tanks (12–72 hours) to break down the sugars',
      'Wash the parchment thoroughly in clean water, often grading density in the channel',
      'Dry on raised beds or patios to roughly 11% moisture',
    ],
    flavorImpact:
      'Produces the cleanest, brightest, most acid-forward cup of the major processes, since almost none of the fruit sugars remain on the bean during drying — the variety and terroir come through with minimal interference.',
    duration: '1–4 days fermentation plus 1–3 weeks drying',
    bestFor: 'Origins with reliable access to clean water (Kenya, Colombia, Rwanda, Guatemala) and growers who want acidity and clarity to shine.',
  },
  {
    id: 'natural',
    name: 'Natural (Dry) Process',
    alsoKnownAs: 'Dry process, unwashed',
    summary:
      'The oldest and simplest method: whole ripe cherries are dried intact in the sun, with the skin and fruit left on the seed the entire time, then hulled once fully dry to reveal the green bean.',
    steps: [
      'Sort ripe cherries carefully, since underripes and overripes dry alongside the good fruit',
      'Spread whole cherries on raised beds or patios',
      'Rake and turn regularly over 2–5 weeks to dry evenly and prevent mold',
      'Rest the dried cherry ("cascara") before hulling to remove the dried fruit shell',
    ],
    flavorImpact:
      'Because the bean sits inside the fruit as it dries, sugars from the cherry migrate into the seed, producing heavy body, pronounced sweetness, and bold, often fermented or wine-like fruit notes — sometimes at the cost of consistency, since uneven drying can introduce defects.',
    duration: '2–5 weeks',
    bestFor: 'Drier climates with strong, consistent sun (Ethiopia, Brazil, Yemen) and growers targeting fruit-forward, heavy-bodied cups.',
  },
  {
    id: 'honey',
    name: 'Honey Process',
    alsoKnownAs: 'Pulped natural, miel',
    summary:
      'A middle path pioneered in Costa Rica: cherries are pulped like a washed coffee, but instead of fermenting and washing away the mucilage, some or all of it is left on the parchment to dry directly.',
    steps: [
      'Pulp cherries to remove the skin, leaving mucilage on the parchment',
      'Choose how much mucilage to retain (yellow, red, or black honey — more mucilage means a longer, riskier dry)',
      'Dry on raised beds, raking frequently since the sticky parchment clumps easily',
      'Rest and hull once moisture drops to target levels',
    ],
    flavorImpact:
      'Splits the difference between washed and natural: cleaner and more consistent than natural, sweeter and fuller-bodied than washed. "Black honey" (maximum mucilage, slowest dry) is the sweetest and riskiest; "yellow honey" (least mucilage) is closest to washed.',
    duration: '1–3 weeks, longer for darker honey grades',
    bestFor: 'Origins with micro-mill infrastructure and drying control (Costa Rica, El Salvador, Brazil) seeking sweetness without full natural risk.',
  },
  {
    id: 'wet-hulled',
    name: 'Wet-Hulled Process',
    alsoKnownAs: 'Giling Basah',
    summary:
      'A processing style unique to Indonesia, developed by smallholders to dry coffee quickly in a humid climate: parchment is hulled while still damp (around 30–50% moisture) rather than after full drying.',
    steps: [
      'Pulp cherries and ferment briefly, often overnight',
      'Partially dry the wet parchment to roughly 30–50% moisture, sometimes sold to a collector at this stage',
      'Hull the parchment while still damp, exposing the bare green bean early',
      'Finish drying the exposed green bean in the open air',
    ],
    flavorImpact:
      'The early hulling and exposure of the bean to humid air produces the heavy body, low acidity, and distinctive earthy, herbal, sometimes musty character associated with Sumatra and Sulawesi coffees — a flavor profile essentially unique to this method.',
    duration: '3–5 days total, much faster than sun-drying whole parchment',
    bestFor: 'Humid, rain-prone harvest climates (Sumatra, Sulawesi, Flores) where full sun-drying is impractical.',
  },
  {
    id: 'anaerobic',
    name: 'Anaerobic Fermentation',
    summary:
      'A newer, experimental technique borrowed from winemaking: cherries or pulped parchment ferment inside sealed, oxygen-free tanks — sometimes with added yeast cultures, fruit, or controlled temperature — before finishing as washed, natural, or honey coffee.',
    steps: [
      'Seal whole cherry or pulped parchment in an airtight tank, often with a CO2 valve',
      'Ferment for an extended, closely monitored period (24–150+ hours) without oxygen',
      'Optionally introduce specific yeast or bacterial cultures for a targeted flavor profile',
      'Release and dry as with a standard washed, honey, or natural process',
    ],
    flavorImpact:
      'The oxygen-free environment favors different microbial activity than open-air fermentation, often producing intense, unusual notes — tropical fruit, wine, funk, even notes reminiscent of candy or spice — that have made it a favorite in competition and barista-championship lots.',
    duration: 'Highly variable: 1–7+ days of sealed fermentation',
    bestFor: 'Experimental micro-lots and competition coffees where growers are chasing novel, high-intensity flavor profiles.',
  },
];

export type RoastLevel = {
  id: string;
  name: string;
  tempRange: string;
  description: string;
  flavorNotes: string[];
};

export const roastLevels: RoastLevel[] = [
  {
    id: 'light',
    name: 'Light Roast',
    tempRange: '~196–205°C internal bean temp, stopped shortly after first crack',
    description:
      'Roasting is stopped just after first crack, before much caramelization or oil migration occurs. Origin character, acidity, and floral or fruity aromatics are preserved at the expense of body and roast-driven sweetness. Beans stay dry and light brown (cinnamon to light city).',
    flavorNotes: ['Floral', 'Fruity', 'High acidity', 'Tea-like body', 'Distinct origin character'],
  },
  {
    id: 'medium',
    name: 'Medium Roast',
    tempRange: '~210–220°C internal bean temp, developed further into or past first crack',
    description:
      'The most common roast level for filter and everyday drip coffee, balancing origin character against roast-developed sweetness and body. Sugars caramelize more fully and acidity softens compared to light roast, without pushing into the bitterness of darker roasts.',
    flavorNotes: ['Balanced acidity', 'Caramel', 'Nutty', 'Rounded body', 'Moderate sweetness'],
  },
  {
    id: 'dark',
    name: 'Dark Roast',
    tempRange: '~225–240°C+ internal bean temp, into or past second crack',
    description:
      'Roasting continues through, or well into, second crack, when the bean\'s cell structure audibly fractures again and oils migrate to the surface, giving dark-roasted beans their characteristic sheen. Origin acidity is mostly roasted away in favor of bittersweet, smoky, roast-driven flavor — French and Italian roast are the far end of this range.',
    flavorNotes: ['Bittersweet', 'Smoky', 'Low acidity', 'Heavy body', 'Roasty/charred notes at the extreme'],
  },
];

export const roastChemistryNotes: string[] = [
  'Drying phase: for the first several minutes, heat simply drives free moisture out of the green bean, which is roughly 8–12% water; little flavor development happens yet.',
  'Maillard reaction: starting around 140–165°C, sugars and amino acids react to build hundreds of new aromatic compounds — the same browning reaction responsible for seared meat and toasted bread, and the source of most roasted coffee\'s complexity.',
  'First crack: around 196°C, built-up steam and CO2 pressure inside the bean fractures its cell structure with an audible pop, roughly marking the transition from "under-roasted" to drinkable coffee.',
  'Development time: the period after first crack, before the roaster drops the beans, where the roaster fine-tunes sweetness, body, and acidity — usually 15–25% of total roast time for filter-style roasts.',
  'Second crack: around 224°C, a sharper, quieter fracturing sound as the bean\'s oils begin migrating to the surface, marking the start of dark-roast territory.',
  'Caffeine myth: roasting barely changes a bean\'s caffeine content — dark roast is not meaningfully "weaker" in caffeine than light roast, though dark-roasted beans are less dense, so a scoop of dark roast (measured by volume) has slightly less caffeine than the same scoop of light roast.',
];

export type BrewMethod = {
  id: string;
  name: string;
  category: 'Immersion' | 'Pour-Over' | 'Pressure' | 'Cold' | 'Boiled';
  invented: string;
  grind: string;
  ratio: string;
  waterTemp: string;
  brewTime: string;
  equipment: string[];
  overview: string;
  steps: string[];
  tips: string[];
};

export const brewMethods: BrewMethod[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'Pressure',
    invented: 'Italy, early 1900s (Bezzera 1901, Gaggia\'s piston machine 1938)',
    grind: 'Very fine (like table salt)',
    ratio: '1:2 (e.g. 18g grounds → ~36g liquid)',
    waterTemp: '90–96°C',
    brewTime: '25–30 seconds',
    equipment: ['Espresso machine', 'Portafilter', 'Tamper', 'Scale'],
    overview:
      'Espresso forces hot water through a compacted, finely ground puck of coffee at roughly 9 bars of pressure, extracting a concentrated shot topped with crema — the reddish-brown foam formed by emulsified CO2 and oils. It is both a drink in its own right and the base for milk drinks like cappuccino, latte, and flat white.',
    steps: [
      'Grind fine and dose accurately (typically 18–20g for a double shot)',
      'Distribute grounds evenly and tamp level with firm, consistent pressure',
      'Lock the portafilter into the group head and start the shot promptly',
      'Target a 25–30 second extraction into roughly double the dose by weight',
      'Adjust grind finer (slow) or coarser (speed up) to hit the target time and yield',
    ],
    tips: [
      'Channeling (water punching through a weak spot in the puck) is the most common fault — even distribution and tamping fix it.',
      'Freshly roasted beans (rested 5–14 days off roast) pull far more consistent shots than very fresh or stale beans.',
      'Judge the shot by taste, not just time — sour usually means under-extracted, bitter usually means over-extracted.',
    ],
  },
  {
    id: 'pour-over',
    name: 'Pour-Over (V60 / Kalita / Chemex)',
    category: 'Pour-Over',
    invented: 'Germany, 1908 (Melitta Bentz\'s paper filter); modern cone drippers popularized in Japan',
    grind: 'Medium-fine',
    ratio: '1:15 to 1:17',
    waterTemp: '92–96°C',
    brewTime: '2:30–3:30',
    equipment: ['Dripper (V60, Kalita Wave, Chemex)', 'Paper filter', 'Gooseneck kettle', 'Scale', 'Server'],
    overview:
      'Manually poured hot water filters through a bed of ground coffee in a paper-lined cone, giving the brewer direct control over pour rate, agitation, and total contact time. The paper filter traps most oils and fine sediment, producing a clean, tea-like cup that highlights acidity and clarity.',
    steps: [
      'Rinse the paper filter to remove papery taste and preheat the dripper',
      'Add grounds and level the bed, then start a timer',
      'Bloom with roughly 2x the coffee weight in water for 30–45 seconds to release CO2',
      'Pour in slow, controlled stages (or one continuous pour) to the target total water',
      'Aim for total drawdown to finish around 2:30–3:30',
    ],
    tips: [
      'The bloom stage matters most for freshly roasted coffee, which releases more CO2 and needs time to degas evenly.',
      'A V60\'s fast flow rewards a finer grind; a Chemex\'s thick filter and flatter bed usually wants slightly coarser.',
      'Pouring in a slow spiral from the center out keeps the coffee bed evenly saturated.',
    ],
  },
  {
    id: 'french-press',
    name: 'French Press',
    category: 'Immersion',
    invented: 'France/Italy, patented in various forms from the 1850s–1929',
    grind: 'Coarse',
    ratio: '1:15',
    waterTemp: '93–96°C',
    brewTime: '4 minutes',
    equipment: ['French press (plunger pot)', 'Kettle', 'Scale'],
    overview:
      'A full-immersion method where coarsely ground coffee steeps directly in hot water before a mesh plunger separates the grounds from the brewed coffee. Because the metal mesh filter lets fine particles and oils pass through (unlike paper), French press produces a heavier-bodied, fuller-flavored, slightly textured cup.',
    steps: [
      'Add coarse grounds to the empty press and pour in all the water at once',
      'Stir gently to make sure all grounds are saturated',
      'Place the lid on with the plunger pulled up, and steep for 4 minutes',
      'Press the plunger down slowly and evenly',
      'Decant immediately into a separate vessel to stop extraction',
    ],
    tips: [
      'Leaving brewed coffee sitting on the grounds after pressing keeps extracting and turns bitter — pour it off right away.',
      'A coarser grind than most methods prevents excessive sediment from passing the mesh filter.',
      'Skimming the crust of grounds off the top before pressing (a "French press break") reduces sediment further.',
    ],
  },
  {
    id: 'aeropress',
    name: 'AeroPress',
    category: 'Pressure',
    invented: 'USA, 2005 (Alan Adler)',
    grind: 'Medium-fine to fine',
    ratio: '1:12 to 1:16 (often brewed strong, then diluted)',
    waterTemp: '80–94°C',
    brewTime: '1:00–2:00',
    equipment: ['AeroPress', 'Paper or metal filter', 'Kettle', 'Scale'],
    overview:
      'A hybrid immersion-and-pressure device: coffee steeps briefly in a cylindrical chamber before being pushed through a paper filter with hand pressure on a plunger, like a small syringe. It brews fast, travels well, and is flexible enough to mimic espresso-like intensity or a clean filter-style cup depending on recipe.',
    steps: [
      'Insert a filter, rinse it, and attach the cap to the chamber',
      'Add grounds and pour in water, stirring to saturate evenly',
      'Steep for 30 seconds to 2 minutes depending on recipe',
      'Insert the plunger and press down steadily over 20–30 seconds',
      'Dilute with hot water if brewing a concentrated "espresso-style" recipe',
    ],
    tips: [
      'The inverted method (brewing upside down, then flipping to press) prevents early dripping and allows longer steeps.',
      'Because recipes vary hugely — from near-espresso concentration to filter strength — dial in ratio and time to taste rather than following one fixed recipe.',
      'Metal filters let more body and oils through than paper, closer to a French press cup.',
    ],
  },
  {
    id: 'moka-pot',
    name: 'Moka Pot',
    category: 'Pressure',
    invented: 'Italy, 1933 (Alfonso Bialetti)',
    grind: 'Fine (finer than drip, coarser than espresso)',
    ratio: 'Fills the basket fully; roughly 1:7–1:10 by output',
    waterTemp: 'Boiling (generated by stovetop heat)',
    brewTime: '4–5 minutes',
    equipment: ['Moka pot', 'Stovetop or heat source'],
    overview:
      'A stovetop brewer in three chambers: water boils in the bottom chamber, steam pressure pushes it up through a coffee-filled basket in the middle, and the brewed coffee collects in the top chamber. It produces a strong, concentrated cup often described as "stovetop espresso," though the pressure (around 1–2 bar) is much lower than true espresso.',
    steps: [
      'Fill the bottom chamber with water up to the safety valve',
      'Fill the basket with fine grounds and level, without tamping',
      'Assemble and place on medium-low heat with the lid open',
      'Remove from heat as soon as coffee begins sputtering out, just before the flow turns pale and hissy',
      'Cool the base briefly under water to halt extraction if it seems to be over-brewing',
    ],
    tips: [
      'Using water that\'s already hot (from a kettle) in the bottom chamber reduces the time metal parts spend overheating the grounds.',
      'Medium-low heat, not high, prevents a scorched, bitter cup.',
      'Pulling it off the heat right when flow changes sound and color is the single biggest factor in avoiding bitterness.',
    ],
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    category: 'Cold',
    invented: 'Long steeping traditions trace to 17th-century Kyoto-style dripper and Dutch "koffie hollandaise"; modern cold brew popularized in Japan and the U.S. mid-20th century onward',
    grind: 'Coarse',
    ratio: '1:8 concentrate (diluted to taste after steeping)',
    waterTemp: 'Room temperature or cold',
    brewTime: '12–24 hours',
    equipment: ['Large jar or dedicated cold-brew maker', 'Filter (paper, cloth, or fine mesh)'],
    overview:
      'Coarse grounds steep in room-temperature or cold water for half a day or more, rather than being extracted quickly with hot water. The slow, cold extraction pulls far less of the bitter and acidic compounds that require heat to dissolve efficiently, yielding a naturally sweet, low-acid, smooth concentrate usually diluted with water or milk before drinking.',
    steps: [
      'Combine coarse grounds and cold or room-temperature water at roughly a 1:8 ratio',
      'Stir to saturate and let steep, covered, for 12–24 hours (longer and cooler = milder)',
      'Filter out the grounds through a paper filter, cloth, or fine mesh',
      'Dilute the resulting concentrate with water, milk, or ice to taste before serving',
    ],
    tips: [
      'Cold brew is not simply iced hot coffee — the different extraction chemistry is what gives it lower acidity, not just temperature at serving.',
      'Refrigerated concentrate keeps well for 1–2 weeks, making it convenient to batch-brew.',
      'A darker roast is a common (though optional) choice for cold brew, since its lower acidity pairs well with the method\'s naturally smooth profile.',
    ],
  },
  {
    id: 'turkish',
    name: 'Turkish / Ibrik Coffee',
    category: 'Boiled',
    invented: 'Ottoman Empire, 16th century',
    grind: 'Extremely fine (powder-like)',
    ratio: '1:8 to 1:10',
    waterTemp: 'Starts cold, brought to a controlled near-boil',
    brewTime: '3–5 minutes',
    equipment: ['Cezve/ibrik (small long-handled pot)', 'Heat source'],
    overview:
      'The oldest brewing method still in common use: powder-fine grounds (often with sugar) are combined with cold water directly in a small pot and heated slowly, never quite reaching a rolling boil, until a foam cap rises. The coffee is served unfiltered, grounds and all, in a small cup, and settles at the bottom as it is drunk.',
    steps: [
      'Add extremely fine grounds, cold water, and optional sugar to the cezve',
      'Heat slowly over low heat, stirring once at the start',
      'Watch closely as foam rises just before boiling; remove from heat right as it crests',
      'Optionally spoon a little foam into each cup first, then pour the rest',
      'Let grounds settle for a minute before drinking, leaving the last sip unfinished',
    ],
    tips: [
      'Sugar is traditionally added during brewing, not after, and quantity ("sade" none, "az şekerli" a little, "şekerli" sweet) is typically chosen up front.',
      'Foam is a mark of quality — pulling the pot off heat right as it rises, two or three times, builds a thicker cap.',
      'Because it\'s unfiltered, an extremely fine, consistent grind is essential to keep the texture pleasant rather than gritty.',
    ],
  },
  {
    id: 'siphon',
    name: 'Siphon (Vacuum Pot)',
    category: 'Immersion',
    invented: 'Germany/France, 1830s–1840s; refined and popularized in Japan through the 20th century',
    grind: 'Medium',
    ratio: '1:15',
    waterTemp: 'Reaches near-boiling during brewing',
    brewTime: '1:30–2:30 once brewing starts',
    equipment: ['Siphon brewer (upper and lower glass chambers)', 'Heat source (butane burner or halogen)', 'Cloth or paper filter'],
    overview:
      'A theatrical, full-immersion method using vapor pressure: water in the lower glass chamber is heated until pressure pushes it up a tube into the upper chamber holding the grounds; once heat is removed, the brewed coffee is drawn back down through a filter as vapor pressure releases. The sealed, consistent heat and immersion produce a clean yet full-bodied cup.',
    steps: [
      'Fill the lower chamber with water and attach the filter inside the upper chamber',
      'Apply heat; once water rises fully into the upper chamber, add grounds and stir',
      'Steep with occasional gentle stirring for roughly 60–90 seconds',
      'Remove heat and let vacuum pressure pull the brewed coffee back down through the filter',
      'Detach the upper chamber and serve directly from the lower one',
    ],
    tips: [
      'Consistent, even heat is critical — a stable flame or halogen beam gives more repeatable results than an uneven burner.',
      'Stirring technique and timing during the steep phase are the main levers for adjusting strength and clarity.',
      'The dramatic brewing process makes siphon popular for tableside service in cafés as much as for the cup itself.',
    ],
  },
];

export type HistoryEvent = {
  id: string;
  era: string;
  title: string;
  description: string;
};

export const historyTimeline: HistoryEvent[] = [
  {
    id: 'kaldi',
    era: 'c. 850 CE (legend)',
    title: 'The legend of Kaldi',
    description:
      'Ethiopian folklore tells of a goat herder named Kaldi who noticed his goats became unusually energetic after eating red cherries from a certain shrub. He brought the cherries to a local monastery, where — in most versions of the story — the monks were skeptical and threw them into a fire, releasing the aroma of the first roasted coffee. The tale isn\'t historical record, but it reflects coffee\'s genuine origin in Ethiopia\'s highland forests.',
  },
  {
    id: 'yemen-cultivation',
    era: '15th century',
    title: 'Sufi monasteries cultivate coffee in Yemen',
    description:
      'Coffee crossed the Red Sea from Ethiopia to Yemen, where Sufi monks began cultivating it deliberately and brewing it to stay awake through night-long devotional practices. Yemen became the first place coffee was grown as an agricultural crop rather than simply foraged.',
  },
  {
    id: 'ottoman-coffeehouses',
    era: '16th century',
    title: 'Coffeehouses spread across the Ottoman Empire',
    description:
      'Qahveh khaneh (coffeehouses) opened across Mecca, Cairo, Damascus, and Istanbul, becoming centers of conversation, music, chess, and news — so influential that some rulers periodically banned them, fearing they fostered political dissent.',
  },
  {
    id: 'europe-arrival',
    era: 'Early-to-mid 1600s',
    title: 'Coffee reaches Europe',
    description:
      'Venetian traders brought coffee to Italy around 1600, and it spread to England, France, Germany, and the Netherlands over the following decades despite religious controversy — resolved, as legend has it, when Pope Clement VIII tasted and approved of it. Europe\'s coffeehouses soon became hubs of commerce and ideas: Lloyd\'s of London and the Paris Stock Exchange both trace roots to coffeehouse meeting places.',
  },
  {
    id: 'penny-universities',
    era: '1650s–1700s',
    title: '"Penny universities" in England',
    description:
      'English coffeehouses charged a penny for entry and a cup, offering access to newspapers, debate, and business networking regardless of social class — earning the nickname "penny universities" for the ideas exchanged inside them.',
  },
  {
    id: 'dutch-java',
    era: '1690s–1700s',
    title: 'The Dutch break Yemen\'s monopoly',
    description:
      'The Dutch East India Company smuggled live coffee plants out of Yemen and successfully cultivated them in Java (Indonesia) and later distributed seedlings to botanical gardens across Europe — ending nearly two centuries during which Yemen was essentially the world\'s sole coffee supplier.',
  },
  {
    id: 'caribbean-americas',
    era: '1720s–1730s',
    title: 'Coffee reaches the Americas',
    description:
      'A single coffee plant descended from Amsterdam\'s botanical garden was carried to Martinique by French naval officer Gabriel de Clieu around 1720 and is credited as the ancestor of much of the Caribbean and Latin American coffee crop. Brazil received its first plants via French Guiana around 1727 and would go on to dominate world production.',
  },
  {
    id: 'brazil-dominance',
    era: '1800s',
    title: 'Brazil becomes the world\'s top producer',
    description:
      'Vast plantation expansion through the 19th century, first on enslaved labor and later immigrant labor, made Brazil the dominant global coffee supplier by the 1840s — a position it has held for nearly two centuries and one that continues to shape world coffee prices.',
  },
  {
    id: 'espresso-invention',
    era: '1901–1905',
    title: 'The espresso machine is invented',
    description:
      'Luigi Bezzera patented an early steam-driven espresso machine in Milan in 1901, and Desiderio Pavoni commercialized it from 1905, aiming to brew coffee faster for busy customers. True high-pressure espresso as we know it arrived later, when Achille Gaggia introduced a spring-piston lever machine in 1938 (commercialized after WWII) capable of generating enough pressure to produce crema for the first time.',
  },
  {
    id: 'instant-coffee',
    era: '1901–1938',
    title: 'Instant coffee is developed',
    description:
      'Japanese-American chemist Satori Kato developed an early soluble coffee process around 1901, and George Constant Washington commercialized instant coffee in the 1900s–10s. Nestlé launched Nescafé in 1938 after years of research commissioned by Brazil to use up coffee surpluses, and instant coffee\'s convenience made it a wartime staple for soldiers, cementing its global popularity.',
  },
  {
    id: 'second-wave',
    era: '1960s–1980s',
    title: '"Second wave" coffee culture',
    description:
      'Companies like Peet\'s Coffee (1966) and Starbucks (1971) popularized darker roasts, espresso-based drinks, and café culture in the United States, moving coffee beyond the can and instant-jar and turning it into more of a lifestyle product and daily ritual.',
  },
  {
    id: 'third-wave',
    era: '1990s–2000s',
    title: '"Third wave" specialty coffee',
    description:
      'A new generation of roasters and cafés began treating coffee more like wine — emphasizing single-origin traceability, lighter roasting to showcase terroir, direct trade relationships with farmers, and precise brewing science. The Specialty Coffee Association\'s cupping standards and the rise of independent roasters worldwide defined this shift.',
  },
];

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  { term: 'Arabica', definition: 'Coffea arabica, the species responsible for most specialty and premium coffee; grown at high altitude and prized for complex acidity and aroma.' },
  { term: 'Robusta', definition: 'Coffea canephora, a hardier, higher-caffeine, lower-acid species grown at lower altitude and widely used in espresso blends and instant coffee.' },
  { term: 'Cherry', definition: 'The fruit of the coffee plant; the seeds inside (usually two per cherry) are processed and roasted to become the coffee beans we brew.' },
  { term: 'Green coffee', definition: 'Coffee beans after processing and hulling but before roasting — still pale green and shelf-stable for long periods.' },
  { term: 'Parchment', definition: 'The papery endocarp layer that remains on the bean after pulping and before hulling; parchment coffee is the form in which coffee is typically dried and stored before export prep.' },
  { term: 'Cupping', definition: 'The standardized method professionals use to evaluate coffee: ground coffee is steeped in hot water in individual cups, then tasted (often slurped) for aroma, flavor, body, acidity, and defects.' },
  { term: 'Terroir', definition: 'A term borrowed from wine describing how soil, altitude, climate, and surrounding flora shape a coffee\'s flavor, independent of variety or processing.' },
  { term: 'Crema', definition: 'The reddish-brown foam layer on top of a fresh espresso shot, formed by emulsified CO2 and oils forced out under pressure.' },
  { term: 'Single-origin', definition: 'Coffee sourced from one specific place — a country, region, or even a single farm or lot — rather than blended across origins.' },
  { term: 'Blend', definition: 'Coffee combining beans from multiple origins, varieties, or processing methods, usually to balance flavor, cost, or consistency.' },
  { term: 'Q Grader', definition: 'A coffee professional certified by the Coffee Quality Institute to evaluate green and roasted coffee against standardized specialty-grade criteria.' },
  { term: 'SCA', definition: 'The Specialty Coffee Association, the industry body that sets widely used cupping protocols, grading standards, and brewing guidelines.' },
  { term: 'Extraction', definition: 'The process of dissolving flavor compounds out of ground coffee into water; under-extraction tastes sour and thin, over-extraction tastes bitter and harsh.' },
  { term: 'Bloom', definition: 'The initial rapid release of CO2 gas when hot water first hits freshly roasted, freshly ground coffee, causing it to visibly puff up — especially pronounced in pour-over brewing.' },
  { term: 'Body', definition: 'The tactile weight and texture of coffee in the mouth, ranging from thin and tea-like to thick and syrupy.' },
  { term: 'Acidity', definition: 'The bright, tangy, lively quality in coffee (distinct from sourness caused by under-extraction) contributed by organic acids like citric and malic acid.' },
  { term: 'Varietal / Variety', definition: 'A specific cultivated subtype within a coffee species, such as Bourbon or Caturra within Arabica, bred or selected for traits like yield, disease resistance, or cup quality.' },
  { term: 'Wet mill', definition: 'The facility where freshly picked cherry is pulped, fermented, washed, and dried into parchment coffee — called a "beneficio" in much of Latin America.' },
  { term: 'Dry mill', definition: 'The facility where dried parchment or natural coffee is hulled, sorted by size and density, and prepared for export as green coffee.' },
  { term: 'Cascara', definition: 'The dried skin and fruit removed during processing, traditionally a waste product but increasingly brewed on its own as a fruity, tea-like beverage.' },
  { term: 'Cupping score', definition: 'A numeric score (typically out of 100) assigned during cupping across categories like aroma, flavor, aftertaste, acidity, body, and balance; 80+ generally denotes "specialty" grade.' },
  { term: 'Direct trade', definition: 'A sourcing relationship where roasters buy coffee directly from producers or exporters, bypassing some intermediaries, often to pay premiums for quality and traceability.' },
  { term: 'Fair Trade', definition: 'A certification system guaranteeing a minimum price and additional social premium to producer cooperatives, intended to protect farmers from volatile commodity prices.' },
  { term: 'Peaberry', definition: 'A naturally occurring bean mutation where a cherry develops only one round seed instead of the usual two flat-sided seeds; often sorted and sold separately.' },
  { term: 'Coffee leaf rust', definition: 'Hemileia vastatrix, a fungal disease that attacks Arabica leaves and has caused repeated regional crop devastation, including the 1869 Sri Lankan epidemic and 2012–13 Central American outbreak.' },
];
