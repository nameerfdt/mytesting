
const baseURL = "https://nameerfdt.github.io/wdd230/chamber";
const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members2.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}
    getMemberData();

const memberCards = document.querySelector('.grid');

const displayMembers = (members) => {

    members.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('sections');

        
        member.image.forEach((image) => {
            const biz_image = document.createElement('img');
            biz_image.src = image.src;
            biz_image.alt = image.alt;
            biz_image.setAttribute('loading', 'lazy');
            biz_image.setAttribute('width', '150');
            biz_image.setAttribute('height', 'auto')
            card.appendChild(biz_image);
        });

        const businessName = document.createElement('h3');
        const address = document.createElement('p');
        const city_state = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const membership_level = document.createElement('p');
        const description = document.createElement('p');
        
        businessName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        city_state.textContent = `${member.city_state}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        website.setAttribute('href',member.website);
        website.setAttribute('target', '_blank');
        membership_level.textContent = `Membership Level: ${member.membership_level}`;
        description.textContent = `${member.description}`;
        
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(city_state);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership_level);
        card.appendChild(description);
        
        memberCards.appendChild(card);
    });
    
}

