const texte = ['Oferim asistență juridică completă în tranzacții de tip fuziuni și achiziții, inclusiv structurarea operațiunilor și realizarea proceselor de due diligence. Sprijinim clienții în negocierea și redactarea documentației contractuale complexe. Abordarea noastră urmărește eficiența juridică și protejarea intereselor comerciale pe termen lung.', 'Asigurăm consultanță privind constituirea, reorganizarea și funcționarea societăților comerciale. Oferim suport juridic în procesul decizional al organelor de conducere și în implementarea normelor de guvernanță corporativă. Serviciile noastre vizează conformitatea legală și stabilitatea operațională a entităților asistate.', 'Acordăm consultanță în structurarea finanțărilor, contracte de credit și mecanisme de garantare a obligațiilor. Reprezentăm clienții în relațiile cu instituțiile financiare și autoritățile de reglementare. Soluțiile juridice propuse sunt adaptate cerințelor pieței financiare și cadrului normativ aplicabil.', 'Oferim asistență în materie de conformitate antitrust și evaluarea concentrărilor economice. Reprezentăm clienții în investigații și proceduri desfășurate în fața autorităților competente. Activitatea noastră urmărește prevenirea riscurilor juridice și protejarea mediului concurențial corect.', 'Furnizăm consultanță juridică pentru proiecte din domeniul energetic și al resurselor naturale. Asistăm clienții în proceduri de autorizare, concesionare și reglementare sectorială. Abordarea noastră integrează cerințele legale cu particularitățile tehnice și comerciale ale proiectelor.', 'Acordăm consultanță privind contractele tehnologice, serviciile digitale și reglementările din domeniul comunicațiilor. Oferim suport în implementarea normelor privind protecția datelor cu caracter personal și securitatea informației. Serviciile noastre vizează conformitatea juridică într-un mediu tehnologic în continuă evoluție.', 'Asistăm angajatorii în redactarea și implementarea documentației de muncă și a politicilor interne. Oferim consultanță în proceduri disciplinare, reorganizări și negocieri colective. Reprezentăm clienții în litigii de muncă și proceduri administrative specifice.', 'Furnizăm consultanță privind conformitatea fiscală și structurarea eficientă a operațiunilor comerciale. Asistăm clienții în relația cu autoritățile fiscale și în proceduri de contestare a actelor administrative. Abordarea noastră urmărește optimizarea riscurilor fiscale în limitele cadrului legal.', 'Oferim asistență juridică în tranzacții imobiliare, dezvoltări și proiecte de construcții. Sprijinim clienții în proceduri de autorizare, contracte de antrepriză și finanțări imobiliare. Serviciile noastre vizează securizarea juridică a investițiilor și proiectelor imobiliare.']



function removeTag() {
    pressedButton = document.querySelector('.arie-selected')
    if (pressedButton) {
        pressedButton.classList.remove('arie-selected')
    }
}

function schimbareArie(numar) {
    removeTag()
    butonApasat = document.querySelector('.btn-' + numar)
    butonApasat.classList.add('arie-selected')
    text = document.querySelector('.arie-text')
    text.classList.add('margin-add')
    text.innerHTML = texte[numar-1]
}