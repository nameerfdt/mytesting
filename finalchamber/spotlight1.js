const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();

   // Filter gold members
   const goldMembers = data.members.filter(member => member.membership_level === 'Gold');

   // Randomly select a gold member
   const randomGoldIndex = Math.floor(Math.random() * goldMembers.length);
   const selectedGoldMember = goldMembers[randomGoldIndex];

   // Update HTML div with selected gold member's information
   const goldMemberDiv = document.getElementById("goldMember");
   if (selectedGoldMember) {
       goldMemberDiv.innerHTML = `
           <h2>${selectedGoldMember.name}</h2>
           <p>${selectedGoldMember.description}</p>
           <p>Address: ${selectedGoldMember.address}, ${selectedGoldMember.city_state}</p>
           <p>Phone: ${selectedGoldMember.phone}</p>
           <p><a href="${selectedGoldMember.website}" target="_blank">${selectedGoldMember.website}</a></p>

       `;
   }

    // Filter silver members
    const silverMembers = data.members.filter(member => member.membership_level === 'Silver');

    // Randomly select a silver member
    const randomSilverIndex = Math.floor(Math.random() * silverMembers.length);
    const selectedSilverMember = silverMembers[randomSilverIndex];

    // Update HTML div with selected silver member's information
    const silverMemberDiv = document.getElementById("silverMember");
    if (selectedSilverMember) {
        silverMemberDiv.innerHTML = `
            <h2>${selectedSilverMember.name}</h2>
            <p>${selectedSilverMember.description}</p>
            <p>Address: ${selectedSilverMember.address}, ${selectedSilverMember.city_state}</p>
            <p>Phone: ${selectedSilverMember.phone}</p>
            <p><a href="${selectedSilverMember.website}" target="_blank">${selectedSilverMember.website}</a></p>
        `;
    }

        // Filter bronze members
        const brozeMembers = data.members.filter(member => member.membership_level === 'Silver');

        // Randomly select a silver member
        const randomBronzeIndex = Math.floor(Math.random() * silverMembers.length);
        const selectedBronzeMember = silverMembers[randomBronzeIndex];
    
        // Update HTML div with selected silver member's information
        const bronzeMemberDiv = document.getElementById("bronzeMember");
        if (selectedBronzeMember) {
            bronzeMemberDiv.innerHTML = `
                <h2>${selectedBronzeMember.name}</h2>
                <p>${selectedBronzeMember.description}</p>
                <p>Address: ${selectedBronzeMember.address}, ${selectedBronzeMember.city_state}</p>
                <p>Phone: ${selectedBronzeMember.phone}</p>
                <p><a href="${selectedBronzeMember.website}" target="_blank">${selectedBronzeMember.website}</a></p>
            `;
        }
}

getMemberData();
