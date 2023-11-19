

document.getElementById('myButton').addEventListener('click', function() {
    this.style.cursor = 'pointer';
});


function swapColumns() {
    const row = document.getElementById('trcontroller');
  
    let rows = Array.from(row.children);
    
      const firstColumn = rows[0];
      const secondColumn = rows[1];

      const thirdColumn = rows[2];

      let newPosition = new Array();
      newPosition[0] = thirdColumn;
      newPosition[1] = secondColumn;
      newPosition[2] = firstColumn;

      row.innerHTML = "";
      row.append(newPosition[0]);
      row.append(newPosition[1]);
      row.append(newPosition[2]);
    
  }





document.addEventListener("DOMContentLoaded", function () {
var toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(toggleButton => {
toggleButton.addEventListener("click", function () {
    var toggleId = toggleButton.getAttribute('data-toggle-id');
    var sublist = document.querySelector('.sublist-' + toggleId);
    if (sublist) {
        sublist.classList.toggle('hidden');
    }
});
});

var deleteButtons = document.querySelectorAll('.toggleable button[id="specificButtonID"]');

deleteButtons.forEach(deleteButton => {
deleteButton.addEventListener("click", function () {
    deleteButton.parentNode.remove();
});
});
});


function insertRow(position, elementId) {
    var selectedElement = document.getElementById(elementId);
    var newItemText = prompt("Enter the text for the new element.");

    if (newItemText !== null) {
        var newItem = document.createElement('li');
        newItem.textContent = newItemText;
        newItem.classList.add('newItem');

        var subList = document.createElement('ol');
        subList.type = 'I';
        newItem.appendChild(subList);

        var beforeButton = createButton('⊷', function () {
            insertRow('before', elementId);
        });

        var deleteButton = createButton('⌫ Delete', function () {
            deleteRow(elementId);
        });

        var afterButton = createButton('⊶', function () {
            insertRow('after', elementId);
        });

        newItem.appendChild(beforeButton);
        newItem.appendChild(deleteButton);
        newItem.appendChild(afterButton);

        if (position === 'before') {
            selectedElement.parentNode.insertBefore(newItem, selectedElement);
        } else if (position === 'after') {
            var nextSibling = selectedElement.nextSibling;
            if (nextSibling) {
                selectedElement.parentNode.insertBefore(newItem, nextSibling);
            } else {
                selectedElement.parentNode.appendChild(newItem);
            }
        }
    }
}

function createButton(text, onClickFunction) {
    var button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClickFunction;
    return button;
}






const definitions = {
    'Développement Web': {
        definition: "Le développement web fait référence à la création, la conception et la maintenance d'applications et de sites web pour l'internet ou un intranet. Cela englobe un large éventail d'activités, de la création de pages web simples à des applications web complexes.",
        image: "https://tryengineering.org/wp-content/uploads/bigstock-Software-Developer-Freelancer-321565021-1024x683.jpg"
    },
    'Coté client': {
        definition: 'Côté client fait référence à l\'exécution de scripts et de logique directement dans le navigateur Web de l\'utilisateur.',
        image: 'https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Screenshots_2022/Schema-du-server-side-rendering.png',
    },
    'Html': {
        definition: 'Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png',
    },
    'Css': {
        definition: 'Cascading Style Sheets (CSS) est un langage utilisé pour décrire la présentation d\'un document écrit en HTML ou XML.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    'Coté serveur': {
        definition: "L'expression server-side (côté serveur) fait référence à des opérations qui sont effectuées par le serveur dans la communication entre client et serveur dans un réseau informatique1,2,3,4. Il ne faut pas confondre cette expression avec le nom de la nouvelle licence de MongoDB (depuis octobre 2018).",
        image: 'https://user.oc-static.com/upload/2020/04/03/15859248268203_compo_comprendre_le_web_revemp-06.png',
    },
    
    'Php': {
        definition: "PHP (Hypertext Preprocessor), plus connu sous son sigle PHP, est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur web, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
    },
    'Conception':{
        definition:"La notion de conception en modélisation UML (Unified Modeling Language) se réfère à la phase du processus de développement logiciel où les concepteurs utilisent des diagrammes UML pour représenter visuellement et détailler la structure et le comportement d'un système logiciel. La conception UML intervient après la phase d'analyse, où les besoins du système sont identifiés, et avant la phase d'implémentation, où le code réel est écrit.",
        image:'https://marcautran.developpez.com/tutoriels/uml/conception-uml/images/fig16.png',
    },
    ' UML':
    {
        definition:"La modélisation UML (Unified Modeling Language) est une technique standardisée utilisée pour représenter visuellement les systèmes logiciels. Elle offre un ensemble de notations graphiques et de conventions pour décrire la structure et le comportement d'un système. Voici quelques éléments de base que vous pouvez utiliser dans UML pour définir la conception d'un système : Diagramme d'Activité, Diagramme d'État, Diagramme d'Objets, Diagramme de Classes…",
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UML_logo.svg/640px-UML_logo.svg.png',
    },
    'Base de données':
    {
        definition:"Les bases de données (BD) sont des systèmes organisés de stockage et de gestion de l'information. Elles sont constituées de plusieurs éléments essentiels.",
        image:'https://img-0.journaldunet.com/tB5WGMctFqcp8nVdMVxX0A17b5E=/1500x/smart/45bc2a84133a4f1fb79d71c63a91a65f/ccmcms-jdn/10909845.jpg',

    },
    'SQL':
    {
        definition:"SQL (Structured Query Language) est un langage standardisé utilisé pour gérer et manipuler des bases de données relationnelles. MySQL et MongoDB sont deux types de systèmes de gestion de bases de données (SGBD) qui utilisent des approches différentes pour stocker et organiser les données.",
        image:"https://e7.pngegg.com/pngimages/354/683/png-clipart-logo-mysql-database-phpmyadmin-oracle-sql-logo-blue-text.png",
    },
    'Réseaux Informatiques': {
        definition: `Un réseau informatique est un ensemble d'appareils reliés entre eux pour partager des informations.
    
            Les nœuds sont les points d'intersection entre les connexions du réseau.`,
        image: "https://www.eds.fr/wp-content/uploads/2016/05/cartographie-audit-informatique.jpg",
    },
    'Modèle OSI (Open Systems Interconnection)':{
        definition:"Le Modèle OSI (Open Systems Interconnection) est un cadre conceptuel qui standardise les fonctions d'un système de communication ou d'un réseau informatique en décomposant ces fonctions en sept couches distinctes. Chaque couche du modèle OSI a une fonction spécifique et interagit avec les couches adjacentes pour assurer une communication efficace entre les systèmes.",
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/OSI_Model_v1.svg/langfr-330px-OSI_Model_v1.svg.png',
    },
    'Ses Sept Couches':{
        definition:"Chaque couche du modèle OSI a un ensemble spécifique de fonctions et d'attributions, et elles sont conçues pour fonctionner de manière indépendante des couches adjacentes.",
        image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/6ZH2Etm3LlFHTgmkjLmkxp/59ff240fb3ebdc7794ffaa6e1d69b7c2/osi_model_7_layers.png",
    },
    
    

};

function changeColor() {
    var element = document.getElementById("rElementId");
    var computedStyle = window.getComputedStyle(element);

    if (computedStyle.color === "rgb(0, 0, 0)" || computedStyle.color === "black") {
        element.style.color = "red";
    } else {
        element.style.color = "black";
    }
}   


function showDescription(key) {
    const definitionColumn = document.getElementById('definitionColumn');
    const trimmedKey = key.trim(); // Trim any extra whitespace
    if (definitions[trimmedKey]) {
        const { definition, image } = definitions[trimmedKey];

        const styleAttributes = 'width: 200px; height: auto; display: block; margin: 0 auto;'; // Adjust the size as needed

        definitionColumn.innerHTML = `<p>${definition}</p><img src="${image}" alt="${trimmedKey} Logo" style="${styleAttributes}">`;
    } else {
        definitionColumn.innerHTML = 'Pas de description disponible';
    }
}

// Add event listener to your existing entries (assuming these entries have the class 'toggleable')
document.addEventListener('DOMContentLoaded', function () {
    const toggleableElements = document.querySelectorAll('.toggleable');
    toggleableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            const entryText = element.getAttribute('data-langage');
            showDescription(entryText);
        });
    });
});




function updateWordCount() {
    const wordCountElement = document.getElementById('word-count');
    const categoryCountElement = document.getElementById('category-count');
    const categoryAverageElement = document.getElementById('category-average');

    //  we Get the content of the entire webpage
    const webpageContent = document.body.textContent || document.body.innerText;

    // I Used the function trim to remove leading and trailing spaces
    const trimmedContent = webpageContent.trim();

    // I  Split the content into words and categories
    const words = trimmedContent.split(/\s+/);
    const categories = words.filter(word => /[A-Za-z]+\.[A-Za-z]+/g.test(word));
    const categoryCount = categories.length;

    //  I Calculate the average words per category
    const categoryAverage = categoryCount > 0 ? Math.floor(words.length / categoryCount) : 0;

    // I  Update the HTML elements with the new information
    wordCountElement.textContent = words.length;
    categoryCountElement.textContent = categoryCount;
    categoryAverageElement.textContent = categoryAverage;
}

//  I Listen for the input event on the textarea to update the word count
document.getElementById('text').addEventListener('input', updateWordCount);

// Initial update on page load
updateWordCount();