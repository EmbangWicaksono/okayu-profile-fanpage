const toggleButton = document.querySelector('.toggle-button');
const navbarMenu = document.querySelector('.navbar-menu');
const comradesMember = [{
    name: 'Inugami Korone',
    ytUrl: 'https://https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q',
    profile: '/assets/image/korone.jpg',
    phrase: 'oayoo~ yubi yubi'
},{
    name: 'Shirakami Fubuki',
    ytUrl: 'https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg',
    profile: '/assets/image/fubuki.jpg',
    phrase: 'konbankii~tsune'

}
,{
    name: 'Ookami Mio',
    ytUrl: 'https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg',
    profile: '/assets/image/mio.jpg',
    phrase: 'konbanmio~n'

}
]
toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active')
})

const renderData = () => {
    let comradesContainer = document.querySelector('.comrades-container')
    for (const member of comradesMember) {
        let a = document.createElement('a')
        a.href = member.ytUrl
        a.innerHTML = `
        <div class="card comrades">
        <img src="${member.profile}" alt="profile-pic">
        <p>${member.name}</p>
        <q>${member.phrase}</q>
        </div>
        `

        comradesContainer.appendChild(a)
    }
}
renderData()