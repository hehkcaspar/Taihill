// Separate Functions for Generating Portfolio and Team Items

document.addEventListener('DOMContentLoaded', function () {
    function generatePortfolioItems(containerId, items) {
        const container = document.querySelector(containerId);
        container.innerHTML = ''; // Clear existing content

        items.forEach(item => {
            const itemHtml = `
                <div class="col-sm-6 col-md-4">
                    <div class="project-item">
                        <div class="project-image">
                            <a href="${item.link}" target="_blank">
                                <img src="${item.image}" alt="${item.title}" class="img-fluid">
                                <div class="overlay">
                                    <div class="details">
                                        <h2>${item.title}</h2>
                                        <p>${item.description.replace(/\n/g, '<br>')}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', itemHtml);
        });
    }

    function generateTeamItems(containerId, items) {
        const container = document.querySelector(containerId);
        container.innerHTML = ''; // Clear existing content

        items.forEach(item => {
            const itemHtml = `
                <div class="col-sm-6 col-md-4">
                    <div class="project-item">
                        <div class="project-image">
                            <a href="${item.link}" target="_blank">
                                <img src="${item.image}" alt="${item.name}" class="img-fluid">
                                <div class="overlay">
                                    <div class="details">
                                        <h2>${item.name}</h2>
                                        <h3>${item.title}</h3>
                                        <p>${item.description.replace(/\n/g, '<br>')}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', itemHtml);
        });
    }


    // Fetch Portfolio Items from JSON File
    fetch('json/portfolio.json')
        .then(response => response.json())
        .then(data => {
            generatePortfolioItems('#portfolio-items', data);
        })
        .catch(error => console.error('Error fetching portfolio items:', error));

    // Fetch Team Items from JSON File
    fetch('json/team.json')
        .then(response => response.json())
        .then(data => {
            generateTeamItems('#team-items', data);
        })
        .catch(error => console.error('Error fetching team items:', error));

/*
 //  local fallback test
    const portfolioItems = [
        {
          link: 'https://www.lightelligence.ai/',
          image: 'img/portfolio/lightelligence.png',
          title: 'Lightelligence',
          description: 'Optical chips that offer high speed, low latency, and low power consumption compared to traditional architectures.'
        }
        // Additional portfolio items here...
      ];

      const teamItems = [
        {
          link: 'https://www.linkedin.com/in/yu-tianyi-704924107/',
          image: 'img/team/sky.png',
          title: 'General Partner',
          name: 'Tianyi (Sky) Yu',
          description: 'General Partner at Taihill Venture with a focus on deeptech investments.'
        }
        // Additional team members here...
      ];

      generatePortfolioItems('#portfolio-items', portfolioItems);
      generateTeamItems('#team-items', teamItems);
*/
});

// Note: Items for portfolio and team are now stored in separate JSON files (portfolio.json and team.json) and fetched using the Fetch API
// for real-time dynamic generation. The functions `generatePortfolioItems` and `generateTeamItems` are adaptive to any list of contents provided.