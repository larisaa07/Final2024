const teamMembers = [
    {
        name: 'Wooden Blocks',
        imageURL: 'block3.jpg',
        description: 'Little Bird\'s best-selling wooden blocks are a favorite among children for their vibrant colors and versatile design. Made from durable, non-toxic materials, these blocks allow for endless imaginative play. Kids can build everything from castles to vehicles, enhancing creativity and fine motor skills. ConstructoBlocks are a top choice for parents and educators.',
        price: '$35.99 USD || $49.20 CAD',
    },
    {
        name: 'Wooden Boat',
         imageURL: 'boat3.jpg',
        description: 'Little Bird\'s wooden boat is a timeless classic, made from high-quality, sustainably sourced wood. Its smooth, hand-painted finish and sturdy design offer endless hours of imaginative play. This charming toy not only sparks creativity but also helps develop fine motor skills. It\'s a beloved choice for parents seeking a durable, educational, and long loved toy.',
        price:  '$22.56 USD || $30.84 CAD',
    },
    {
        name: 'Wooden Car',
        imageURL: 'car2.jpg',
        description: 'ToyWorks\' wooden car is a timeless classic, made from high-quality, sustainably sourced wood. Its smooth, hand-painted finish and sturdy design offer endless hours of imaginative play. This charming toy not only sparks creativity but also helps develop fine motor skills. Parents appreciate its blend of durability, safety, and educational benefits. Parents and kids alike love this toy.',
        price:  '$19.99 USD || $27.41 CAD',
    },
    {
        name: 'Wooden Plane',
        imageURL: 'plane1.jpg',
        description: 'ToyWorks\' wooden plane is a timeless classic, crafted from high-quality, sustainably sourced wood. Its smooth, hand-painted finish and sturdy construction ensure endless hours of imaginative play. This delightful toy not only fuels creativity but also aids in developing fine motor skills. Parents value its durability, safety, and educational advantages.',
        price:  '$19.99 USD || $27.41 CAD',

    },
    {
        name: 'Wooden Train',
        imageURL: 'train3.jpg',

        description: 'ToyWorks\' wooden train is a timeless classic, crafted from high-quality, sustainably sourced wood. Its smooth, hand-painted finish and durable construction offer endless hours of imaginative play. This enchanting toy inspires creativity and helps develop fine motor skills. Parents appreciate its blend of durability, safety, and educational benefits.',
        price: '$19.99 USD || $27.41 CAD',

    },
    {
        name: 'Wooden Kitchen Set',
        imageURL: 'kitchen.jpg',

        description: 'ToyWorks\' wooden kitchen set is a timeless classic, made from high-quality, sustainably sourced wood. Its smooth, hand-painted finish and sturdy construction offer endless hours of imaginative play. This charming set encourages creativity while helping develop fine motor skills. Parents love its combination of durability.',
        price:  '$44.99 USD || $61.67 CAD',

    }
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');
    const backgroundColor = '#f8f9fa'; // Define the background color for the card body

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        card.innerHTML = `
            <div class="card">
             <img src="${member.imageURL}" class="img-fluid team-member-image" alt="${member.name}">
                
                <div class="card-header">
                    ${member.name}
                </div>
                <div class="card-body" style="background-color: ${backgroundColor};">
                    <p>${member.description}</p>
                    <p>Price: ${member.price}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards;
