const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();

    // Filter silver members
    const silverMembers = data.members.filter(member => member.membership_level === 'Silver');

    // Randomly select a silver member
    const randomIndex = Math.floor(Math.random() * silverMembers.length);
    const selectedSilverMember = silverMembers[randomIndex];

    // Update HTML div with selected silver member's information
    const silverMemberDiv = document.getElementById("silverMember");
    if (selectedSilverMember) {
        silverMemberDiv.innerHTML = `
            <h2>${selectedSilverMember.name}</h2>
            <p>${selectedSilverMember.description}</p>
            <p>Address: ${selectedSilverMember.address}, ${selectedSilverMember.city_state}</p>
            <p>Phone: ${selectedSilverMember.phone}</p>
            <p><a href="${selectedSilverMember.website}" target="_blank">Website</a></p>
        `;
    }
}

getMemberData();
