const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // displayMembers(data.members);
    console.log(data);

    data.members.forEach(member => {
        getMembers(member);
    });
}

function getMembers(member){
    let membershipLevel = member.membership_level;

    if (membershipLevel === "gold") {
        createGoldMember(member);
    }
}
function createGoldMember(member) {
    let goldMemberSpotlight = document.querySelector('#goldMember');

    let bizImage = document.createElement('img')
    bizImage.src = member.biz_image;
    let businessName = document.createElement('h4');
    businessName.textContent = member.businessName;

    let websitelink = document.createElement('a');
    websitelink.href = member.website;
    websitelink.textContent = 'Visit';

    goldMemberSpotlight.appendChild(bizImage);
    goldMemberSpotlight.appendChild(businessName);
    goldMemberSpotlight.appendChild(websitelink);
}

getMemberData();
