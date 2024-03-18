const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();

   // Filter gold members into an array
   const goldMembers = data.members.filter(member => member.membership_level === 'Gold');

   // Randomly select a gold member
   const randomGoldMember = Math.floor(Math.random() * goldMembers.length);
   const selectedGoldMember = goldMembers[randomGoldMember];

   // Update HTML div with selected gold member's information
   const goldMemberDiv = document.getElementById("goldMember");
   if (selectedGoldMember) {
       goldMemberDiv.innerHTML = `
           <h4>${selectedGoldMember.name}</h4>
           <p>${selectedGoldMember.description}</p>
           <p>Address: ${selectedGoldMember.address}, ${selectedGoldMember.city_state}</p>
           <p>Phone: ${selectedGoldMember.phone}</p>
           <p><a href="${selectedGoldMember.website}" target="_blank">${selectedGoldMember.website}</a></p>
       `;
   }

    // Filter silver members into an array
    const silverMembers = data.members.filter(member => member.membership_level === 'Silver');

    // Randomly select a silver member
    const randomSilverMember = Math.floor(Math.random() * silverMembers.length);
    const selectedSilverMember = silverMembers[randomSilverMember];

    // Update HTML div with selected silver member's information
    const silverMemberDiv = document.getElementById("silverMember");
    if (selectedSilverMember) {
        silverMemberDiv.innerHTML = `
            <h4>${selectedSilverMember.name}</h4>
            <p>${selectedSilverMember.description}</p>
            <p>Address: ${selectedSilverMember.address}, ${selectedSilverMember.city_state}</p>
            <p>Phone: ${selectedSilverMember.phone}</p>
            <p><a href="${selectedSilverMember.website}" target="_blank">${selectedSilverMember.website}</a></p>
        `;
    }

        // Filter bronze members into an array
        const bronzeMembers = data.members.filter(member => member.membership_level === 'Bronze');

        // Randomly select a bronze member
        const randomBronzeMember = Math.floor(Math.random() * bronzeMembers.length);
        const selectedBronzeMember = bronzeMembers[randomBronzeMember];
    
        // Update HTML div with selected bronze member's information
        const bronzeMemberDiv = document.getElementById("bronzeMember");
        if (selectedBronzeMember) {
            bronzeMemberDiv.innerHTML = `
                <h4>${selectedBronzeMember.name}</h4>
                <p>${selectedBronzeMember.description}</p>
                <p>Address: ${selectedBronzeMember.address}, ${selectedBronzeMember.city_state}</p>
                <p>Phone: ${selectedBronzeMember.phone}</p>
                <p><a href="${selectedBronzeMember.website}" target="_blank">${selectedBronzeMember.website}</a></p>
            `;
        }
}

getMemberData();
