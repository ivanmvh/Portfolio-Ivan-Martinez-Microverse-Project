const showMobileMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const crossDiv = document.querySelector('.close-menu');

showMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileMenu.style.display = 'block';
  mobileMenu.style.height = '100vh';
  showMobileMenu.style.visibility = 'hidden';
  crossDiv.style.visibility = 'visible';
});

crossDiv.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenu.style.height = '0';
  showMobileMenu.style.visibility = 'visible';
  crossDiv.style.visibility = 'hidden';
  mobileMenu.style.height = '0';
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    mobileMenu.classList.remove('open');
    mobileMenu.style.display = 'none';
    crossDiv.style.visibility = 'hidden';
    showMobileMenu.style.visibility = 'visible';
  } else {
    showMobileMenu.style.visibility = 'hidden';
    mobileMenu.style.height = 'auto';
  }
});

mobileMenu.addEventListener('click', () => {
  crossDiv.style.visibility = 'hidden';
  mobileMenu.style.display = 'none';
  mobileMenu.style.height = '0';
  showMobileMenu.style.visibility = 'visible';
  mobileMenu.classList.remove('open');
});

const projectsArray = [
  {
    id: '1',
    title: 'Tonic',
    titleDesktop: 'Tonic',
    mobileDescr:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopDescr:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescr:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    featuredDesktop: ['Canopy', 'Back End Dev', 2015],
    image: './images/work-sec-img/snapshot-1.svg',
    desktopImage: './images/work-sec-img/for-desktop/snapshoot-1.svg',
    side: 'left-side',
    technologies: ['html', 'css', 'javascript'],
    technologiesDesktop: ['html', 'css', 'ruby on rails', 'javascript'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstraps',
    ],
    liveURL: 'https://ivanmvh.github.io/Portfolio-Ivan-Martinez-Microverse-Project/',
    sourceURL: 'https://github.com/ivanmvh/Portfolio-Ivan-Martinez-Microverse-Project',
  },

  {
    id: '2',
    title: 'Multi-Post Stories',
    titleDesktop: 'Multi-Post Stories',
    mobileDescr:
      'A convenient way to keep track of their daily routine works.',
    desktopDescr:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDescr:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    featuredDesktop: ['Facebook', 'Full Stack Dev', 2015],
    image: './images/work-sec-img/snapshot-2.svg',
    desktopImage: './images/work-sec-img/for-desktop/snapshoot-2.svg',
    side: 'right-side',
    technologies: ['html', 'ruby on rails', 'css', 'javascript'],
    technologiesDesktop: ['html', 'css', 'ruby on rails', 'javascript'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstraps',
    ],
    liveURL: 'https://ivanmvh.github.io/Portfolio-Ivan-Martinez-Microverse-Project/',
    sourceURL: 'https://github.com/ivanmvh/Portfolio-Ivan-Martinez-Microverse-Project',
  },

  {
    id: '3',
    title: 'Tonic',
    titleDesktop: 'Facebook 360',
    mobileDescr:
      'This is a rocket booking and mission joining application.',
    desktopDescr:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    longDescr:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    featuredDesktop: ['Facebook', 'Full Stack Dev', 2015],
    image: './images/work-sec-img/snapshot-3.svg',
    desktopImage: './images/work-sec-img/for-desktop/snapshoot-3.svg',
    side: 'left-side',
    technologies: ['html', 'css', 'javascript'],
    technologiesDesktop: ['html', 'css', 'ruby on rails', 'javascript'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstraps',
    ],
    liveURL: 'https://ivanmvh.github.io/Portfolio-Ivan-Martinez-Microverse-Project/',
    sourceURL: 'https://github.com/ivanmvh/Portfolio-Ivan-Martinez-Microverse-Project',
  },

  {
    id: '4',
    title: 'Multi-Post Stories',
    titleDesktop: 'Uber navigation',
    mobileDescr: 'MyBudget is a budget manager application.',
    desktopDescr:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    longDescr:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    featuredDesktop: ['Uber', 'Lead developer', 2018],
    image: './images/work-sec-img/snapshot-4.svg',
    desktopImage: './images/work-sec-img/for-desktop/snapshoot-4.svg',
    side: 'right-side',
    technologies: ['html', 'css', 'javascript'],
    technologiesDesktop: ['html', 'css', 'ruby on rails', 'javascript'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstraps',
    ],
    liveURL: 'https://ivanmvh.github.io/Portfolio-Ivan-Martinez-Microverse-Project/',
    sourceURL: 'https://github.com/ivanmvh/Portfolio-Ivan-Martinez-Microverse-Project',
  },
];

const worksSection = document.querySelector('#works');

for (let i = 0; i < projectsArray.length; i += 1) {
  worksSection.innerHTML += `<div class="project">
  
  <img src="${projectsArray[i].image}" alt="Project image" class="project-image for-mobile" loading="lazy" width="641.2" height="478.183">
  <img src="${projectsArray[i].desktopImage}" alt="Project image" class="project-image for-desktop side-${projectsArray[i].id % 2}" loading="lazy" width="969" height="797">
  
  <div class="text-content">  
    <h3 class="project-title for-mobile">${projectsArray[i].title}</h3>
    <h3 class="project-title for-desktop">${projectsArray[i].titleDesktop}</h3>
    
    <div class="project-data">
      <!--for-mobile-->
      <p class="bold for-mobile">${projectsArray[i].featured[0]}</p>
      <p class="middot for-mobile">&bull;</p>
      <p class="for-mobile">${projectsArray[i].featured[1]}</p>
      <p class="middot for-mobile">&bull;</p>
      <p class="for-mobile">${projectsArray[i].featured[2]}</p>

      <!--for-desktop-->
      <p class="bold for-desktop">${projectsArray[i].featuredDesktop[0]}</p>
      <p class="middot for-desktop">&bull;</p>
      <p class="for-desktop">${projectsArray[i].featuredDesktop[1]}</p>
      <p class="middot for-desktop">&bull;</p>
      <p class="for-desktop">${projectsArray[i].featuredDesktop[2]}</p>
    </div>
    
    <p class="parrafo project-descr for-mobile">${projectsArray[i].mobileDescr}</p>
    <p class="parrafo project-descr for-desktop">${projectsArray[i].desktopDescr}</p>
    
    <ul class="buttons-flex">
      <!--for-mobile-->
      <li class="li-btn for-mobile">${projectsArray[i].technologies[0]}</li>
      <li class="li-btn for-mobile">${projectsArray[i].technologies[1]}</li>
      <li class="li-btn for-mobile">${projectsArray[i].technologies[2]}</li>

      <!--for-desktop-->
      <li class="li-btn for-desktop">${projectsArray[i].technologiesDesktop[0]}</li>
      <li class="li-btn for-desktop">${projectsArray[i].technologiesDesktop[1]}</li>
      <li class="li-btn for-desktop">${projectsArray[i].technologiesDesktop[2]}</li>
      <li class="li-btn for-desktop">${projectsArray[i].technologiesDesktop[3]}</li>
    </ul>
    <button id=${projectsArray[i].id - 1} class="project-btn">See Project</button>
  </div>
</div> 
  `;
}

const modalButton = document.querySelectorAll('.project-btn');
const modal = document.querySelector('.modal-container');

function close() {
  modal.style.display = 'none';
}

for (let index = 0; index < modalButton.length; index += 1) {
  modalButton[index].addEventListener('click', (e) => {
    const pos = e.target.getAttribute('id');

    modal.style.display = 'block';

    modal.innerHTML = `
    <div class="modal-box">
          <div class="modal-dialog">
            <div class="modal-header">
              <div>
                <h3 class="modal-title">${projectsArray[pos].title}</h3>
                <div class="project-data" style="margin-bottom= 150px;">
                  <p class="bold for-mobile">${projectsArray[pos].featured[0]}</p>
                  <p class="middot for-mobile">•</p>
                  <p class="for-mobile">${projectsArray[pos].featured[1]}</p>
                  <p class="middot for-mobile">•</p>
                  <p class="for-mobile">${projectsArray[pos].featured[2]}</p>

                  <p class="bold for-desktop">${projectsArray[pos].featuredDesktop[0]}</p>
                  <p class="middot for-desktop">•</p>
                  <p class="for-desktop">${projectsArray[pos].featuredDesktop[1]}</p>
                  <p class="middot for-desktop">•</p>
                  <p class="for-desktop">${projectsArray[pos].featuredDesktop[2]}</p>
                </div>
              </div>
              <img src="./images/popup-img/close-popup.svg" alt="close modal image" class="close-modal" onclick="close()" width="20" height="20">
            </div>
            <div class="modal-content">
              <div class="img-container">
                <img class="for-mobile" src="${projectsArray[pos].image}" alt="project image" loading="lazy" width="641.2" height="478.183">
                <img class="for-desktop" src="${projectsArray[pos].desktopImage}" alt="project image" loading="lazy" width="969" height="797">
              </div>
              <div class="description">
                <p class="desc for-mobile">${projectsArray[pos].mobileDescription}</p>
                <p class="desc for-desktop">${projectsArray[pos].longDescription}</p>
                <div class="tech-box">
                  <div class="tech">
                    <ul class="buttons-flex" style="margin-bottom:30px">
                      <li class="li-button">${projectsArray[pos].technologiesModal[0]}</li>
                      <li class="li-button">${projectsArray[pos].technologiesModal[1]}</li>
                      <li class="li-button">${projectsArray[pos].technologiesModal[2]}</li>
                      <li class="li-button">${projectsArray[pos].technologiesModal[3]}</li>
                      <li class="li-button">${projectsArray[pos].technologiesModal[4]}</li>
                      <li class="li-button">${projectsArray[pos].technologiesModal[5]}</li>
                    </ul>
                  </div>
                  <div class="source-box">
                    <a class="btn-modal live" href="${projectsArray[pos].liveURL}">See Live
                      <img src="./images/popup-img/live-link.svg" alt="live image">
                    </a>
                    <a class="btn-modal source" href="${projectsArray[pos].sourceURL}">See Source
                      <img src="./images/popup-img/source-link.svg" alt="source image">
                    </a>
                  </div> <!-- source-box -->
                </div> <!-- tech-box -->
              </div> <!-- description -->
            </div> <!-- modal-content -->
          </div> <!-- modal-dialog -->
        </div>  <!-- modal-box--> 
        `;
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', close);
    modal.addEventListener('click', close);
  });
}
