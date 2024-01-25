  let currentSection = 'A';

  function updateSectionInfo() {
    document.getElementById('sectionLabel').textContent = `${currentSection}`;
    document.getElementById('sectionName').textContent = getSectionName(currentSection);
  }

  function getSectionName(section) {
    switch (section) {
      case 'A':
        return '';
      case 'B':
        return 'Local';
      case 'C':
        return 'Sports';
      case 'D':
        return 'Technology';
      case 'E':
        return 'Economy';
      case 'F':
        return 'Politics';
  case 'G':
        return 'Art & Culture';
      default:
        return '';
    }
  }

  function prevSection() {
    switch (currentSection) {
      case 'A':
        currentSection = 'F';
        break;
      case 'B':
        currentSection = 'A';
        break;
      case 'C':
        currentSection = 'B';
        break;
      case 'D':
        currentSection = 'C';
        break;
      case 'E':
        currentSection = 'D';
        break;
      case 'F':
        currentSection = 'E';
        break;
 case 'G':
        currentSection = 'F';
        break;
    }
    updateSectionInfo();
    updateColumnContent();
  }

  function nextSection() {
    switch (currentSection) {
      case 'A':
        currentSection = 'B';
        break;
      case 'B':
        currentSection = 'C';
        break;
      case 'C':
        currentSection = 'D';
        break;
      case 'D':
        currentSection = 'E';
        break;
      case 'E':
        currentSection = 'F';
        break;
      case 'F':
        currentSection = 'G';
        break;

 case 'G':
        currentSection = 'A';
        break;
    }
    updateSectionInfo();
    updateColumnContent();
  }

  function updateColumnContent() {
    const columnContainer = document.getElementById('columnContainer');
    columnContainer.innerHTML = ''; // Clear existing columns

    // Add the headline article for the current section
    addHeadlineArticle();

    // Load content based on the current section
    switch (currentSection) {
      case 'A':
        loadSectionAContent();
        break;
      case 'B':
        loadLocalSectionContent();
        break;
      case 'C':
        loadSportsSectionContent();
        break;
      case 'D':
        loadTechnologySectionContent();
        break;
      case 'E':
        loadEconomySectionContent();
        break;
      case 'F':
        loadPoliticsSectionContent();
        break;
 case 'G':
        loadArtAndCultureSectionContent();
        break;
    }
  }

 
 function loadSectionAContent() {

    // Load International News content
    const columnContainer = document.getElementById('columnContainer');
    columnContainer.innerHTML = ''; // Clear existing columns

    // Left column (Global Headlines)
    const globalHeadlinesColumn = document.createElement('div');
    globalHeadlinesColumn.className = 'column';
    globalHeadlinesColumn.id = 'column1';

    // Create individual containers for each global headline
    const globalHeadlineContents = [
        { id: 'headline1', title: 'Global Breaking News', description: 'The latest breaking news from around the world.' },
        { id: 'headline2', title: 'International Politics Update', description: 'Key political developments on the global stage.' },
        { id: 'headline3', title: 'Worldwide Health Report', description: 'Insights into health-related issues affecting nations worldwide.' }
    ];

    globalHeadlineContents.forEach(headlineData => {
        const container = document.createElement('div');
        container.className = 'global-headline-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="headline-title">${headlineData.title}</h2>
                <div class="headline-description" onclick="showHeadlineDetails('${headlineData.id}')">${headlineData.description}</div>
                <img src="path/to/${headlineData.id}-image.jpg" alt="${headlineData.title} Image" class="headline-image" onclick="uploadImage('${headlineData.id}Image', 'column1Image', '${headlineData.id}Caption')">
                <div class="caption">Image Caption: ${headlineData.title}</div>
                <div class="credentials">Photo by John Doe / Associated Press</div>
                <div class="add-btn" onclick="addArticle('column1', 'column1Image', 'column1Caption')">+</div>
    </div>
        `;
        globalHeadlinesColumn.appendChild(container);
    });

    columnContainer.appendChild(globalHeadlinesColumn);

    // Middle column (Worldwide News Highlights)
    const worldwideNewsColumn = document.createElement('div');
    worldwideNewsColumn.className = 'column center-column';
    worldwideNewsColumn.id = 'column2';

    // Create individual containers for each worldwide news highlight
    const worldwideNewsContents = [
        { id: 'newsHighlight1', title: 'Global Economic Insights', highlights: 'Analyzing economic trends impacting countries globally.' },
        { id: 'newsHighlight2', title: 'International Sports Recap', highlights: 'Recapping major sports events from around the world.' },
        { id: 'newsHighlight3', title: 'Worldwide Environmental Updates', highlights: 'Covering environmental issues affecting the planet.' }
    ];

    worldwideNewsContents.forEach(newsHighlightData => {
        const container = document.createElement('div');
        container.className = 'worldwide-news-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="news-title">${newsHighlightData.title}</h2>
                <div class="news-highlights">${newsHighlightData.highlights}</div>
                <img src="path/to/${newsHighlightData.id}-image.jpg" alt="${newsHighlightData.title} Image" class="news-image" onclick="uploadImage('${newsHighlightData.id}Image', 'column2Image', '${newsHighlightData.id}Caption')">
                <div class="caption">Image Caption: ${newsHighlightData.title}</div>
                <div class="credentials">Photo by Jane Smith / Reuters</div>
               <div class="add-btn" onclick="addArticle('column2', 'column2Image', 'column2Caption')">+</div>
    </div>
        `;
        worldwideNewsColumn.appendChild(container);
    });

    columnContainer.appendChild(worldwideNewsColumn);

    // Right column (Global Feature Stories)
    const globalFeaturesColumn = document.createElement('div');
    globalFeaturesColumn.className = 'column';
    globalFeaturesColumn.id = 'column3';

    // Create individual containers for each global feature story
    const globalFeatureContents = [
        { id: 'feature1', title: 'Spotlight on International Culture', story: 'Exploring cultural richness across different continents.' },
        { id: 'feature2', title: 'Global Technology Trends', story: 'Highlighting technological advancements worldwide.' },
        { id: 'feature3', title: 'International Cuisine Journey', story: 'Discovering diverse culinary experiences from around the globe.' }
    ];

    globalFeatureContents.forEach(featureData => {
        const container = document.createElement('div');
        container.className = 'global-feature-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="feature-title">${featureData.title}</h2>
                <p>${featureData.story}</p>
                <img src="path/to/${featureData.id}-image.jpg" alt="${featureData.title} Image" class="feature-image" onclick="uploadImage('${featureData.id}Image', 'column3Image', '${featureData.id}Caption')">
                <div class="caption">Image Caption: ${featureData.title}</div>
                <div class="credentials">Photo by Alex Johnson / Getty Images</div>
                 <div class="add-btn" onclick="addArticle('column3', 'column3Image', 'column3Caption')">+</div>
    </div>
        `;
        globalFeaturesColumn.appendChild(container);
    });

    columnContainer.appendChild(globalFeaturesColumn);
}



  function loadLocalSectionContent() {
    // Load Local section content
    const columnContainer = document.getElementById('columnContainer');
    columnContainer.innerHTML = ''; // Clear existing columns

    // Left column (Weather Alerts)
    const weatherColumn = document.createElement('div');
    weatherColumn.className = 'column';
    weatherColumn.id = 'column1';
    weatherColumn.innerHTML = `
      <div class="article" draggable="true" ondragstart="handleDragStart(event)">
        <span class="close-btn" onclick="closeArticle(this)">X</span>
        <h2 contenteditable="true" id="leftTitle">Weather Alerts</h2>
        <div class="weather-alerts">
          <div class="weather-alert" onclick="showAlertDetails('alert1')">Alert 1: Thunderstorm</div>
          <div class="weather-alert" onclick="showAlertDetails('alert2')">Alert 2: Heavy Rainfall</div>
          <div class="weather-alert" onclick="showAlertDetails('alert3')">Alert 3: Snowfall</div>
        </div>
        <div class="add-btn" onclick="addArticle('column1', 'column1Image', 'column1Caption')">+</div>
      </div>
    `;
    columnContainer.appendChild(weatherColumn);

    // Middle column (Map)
    const mapColumn = document.createElement('div');
    mapColumn.className = 'column center-column';
    mapColumn.id = 'column2';
    mapColumn.innerHTML = `
      <div class="article" draggable="true" ondragstart="handleDragStart(event)">
        <span class="close-btn" onclick="closeArticle(this)">X</span>
        <h2 contenteditable="true" id="centerTitle">Local Map</h2>
        <img src="path/to/map-image.jpg" alt="Map Image" class="map-image" onclick="uploadImage('centerImage', 'column2Image', 'centerCaption')">
        <div class="caption">Map of Local Area</div>
   
        <div class="add-btn" onclick="addArticle('column2', 'column2Image', 'column2Caption')">+</div>
      </div>
    `;
    columnContainer.appendChild(mapColumn);

    // Right column (Traffic Alerts)
    const trafficColumn = document.createElement('div');
    trafficColumn.className = 'column';
    trafficColumn.id = 'column3';
    trafficColumn.innerHTML = `
      <div class="article" draggable="true" ondragstart="handleDragStart(event)">
        <span class="close-btn" onclick="closeArticle(this)">X</span>
        <h2 contenteditable="true" id="rightTitle">Traffic Alerts</h2>
        <div class="traffic-alerts">
          <div class="traffic-alert" onclick="showAlertDetails('trafficAlert1')">Alert 1: Road Closure</div>
          <div class="traffic-alert" onclick="showAlertDetails('trafficAlert2')">Alert 2: Accident</div>
          <div class="traffic-alert" onclick="showAlertDetails('trafficAlert3')">Alert 3: Construction</div>
        </div>
        <div class="add-btn" onclick="addArticle('column3', 'column3Image', 'column3Caption')">+</div>
      </div>
    `;
    columnContainer.appendChild(trafficColumn);
  }

  function loadSportsSectionContent() {
    // Load Sports section content
    const columnContainer = document.getElementById('columnContainer');
    columnContainer.innerHTML = ''; // Clear existing columns

    // Left column (Latest Sports News)
    const sportsColumn = document.createElement('div');
    sportsColumn.className = 'column';
    sportsColumn.id = 'column1';
    sportsColumn.innerHTML = `
      <div class="article" draggable="true" ondragstart="handleDragStart(event)">
        <span class="close-btn" onclick="closeArticle(this)">X</span>
        <h2 contenteditable="true" id="leftTitle">Latest Sports News</h2>
        <img src="path/to/sports-image.jpg" alt="Sports Image" class="sports-image" onclick="uploadImage('leftImage', 'column1Image', 'leftCaption')">
        <div class="caption">Photo by Sports Photographer</div>
        <h3>Top Headline</h3>
        <p contenteditable="true" id="leftContent">Brief description of the latest sports news...</p>
        <div class="add-btn" onclick="addArticle('column1', 'column1Image', 'column1Caption')">+</div>
      </div>
    `;
    columnContainer.appendChild(sportsColumn);

    // Middle column (Scores and Highlights)
    const scoresColumn = document.createElement('div');
    scoresColumn.className = 'column center-column';
    scoresColumn.id = 'column2';
    scoresColumn.innerHTML = `
      <div class="article" draggable="true" ondragstart="handleDragStart(event)">
        <span class="close-btn" onclick="closeArticle(this)">X</span>
        <h2 contenteditable="true" id="centerTitle">Scores and Highlights</h2>
        <div class="scores-highlights">
          <div class="game-result" onclick="showGameDetails('game1')">Game 1: Team A vs. Team B</div>
          <div class="game-result" onclick="showGameDetails('game2')">Game 2: Team C vs. Team D</div>
          <div class="game-result" onclick="showGameDetails('game3')">Game 3: Team E vs. Team F</div>
        </div>
        <div class="add-btn" onclick="addArticle('column2', 'column2Image', 'column2Caption')">+</div>
      </div>
    `;
    columnContainer.appendChild(scoresColumn);

    // Right column (Player Spotlight)
    const playerColumn = document.createElement('div');
    playerColumn.className = 'column';
    playerColumn.id = 'column3';
    playerColumn.innerHTML = `
      <div class="article" draggable="true" ondragstart="handleDragStart(event)">
        <span class="close-btn" onclick="closeArticle(this)">X</span>
        <h2 contenteditable="true" id="rightTitle">Player Spotlight</h2>
        <img src="path/to/player-image.jpg" alt="Player Image" class="player-image" onclick="uploadImage('rightImage', 'column3Image', 'rightCaption')">
        <div class="caption">Photo by Sports Photographer</div>
        <h3>Featured Player</h3>
        <p contenteditable="true" id="rightContent">Brief profile and achievements of the featured player...</p>
        <div class="add-btn" onclick="addArticle('column3', 'column3Image', 'column3Caption')">+</div>
      </div>
    `;
    columnContainer.appendChild(playerColumn);
  }

  function loadTechnologySectionContent() {
    // Load Technology section content
    const columnContainer = document  .getElementById('columnContainer');
  columnContainer.innerHTML = ''; // Clear existing columns

  // Left column (Gadget Reviews)
  const reviewsColumn = document.createElement('div');
  reviewsColumn.className = 'column';
  reviewsColumn.id = 'column1';
  reviewsColumn.innerHTML = `
    <div class="article" draggable="true" ondragstart="handleDragStart(event)">
      <span class="close-btn" onclick="closeArticle(this)">X</span>
      <h2 contenteditable="true" id="leftTitle">Gadget Reviews</h2>
      <img src="path/to/gadget-image.jpg" alt="Gadget Image" class="gadget-image" onclick="uploadImage('leftImage', 'column1Image', 'leftCaption')">
      <div class="caption">Photo by Gadget Enthusiast</div>
      <h3>Featured Gadget</h3>
      <p contenteditable="true" id="leftContent">Brief review and highlights of the featured gadget...</p>
      <div class="add-btn" onclick="addArticle('column1', 'column1Image', 'column1Caption')">+</div>
    </div>
  `;
  columnContainer.appendChild(reviewsColumn);

  // Middle column (Tech Updates)
  const updatesColumn = document.createElement('div');
  updatesColumn.className = 'column center-column';
  updatesColumn.id = 'column2';
  updatesColumn.innerHTML = `
    <div class="article" draggable="true" ondragstart="handleDragStart(event)">
      <span class="close-btn" onclick="closeArticle(this)">X</span>
      <h2 contenteditable="true" id="centerTitle">Tech Updates</h2>
      <p contenteditable="true" id="centerContent">Latest updates and news in the world of technology...</p>
      <div class="add-btn" onclick="addArticle('column2', 'column2Image', 'column2Caption')">+</div>
    </div>
  `;
  columnContainer.appendChild(updatesColumn);

  // Right column (Future Tech)
  const futureTechColumn = document.createElement('div');
  futureTechColumn.className = 'column';
  futureTechColumn.id = 'column3';
  futureTechColumn.innerHTML = `
    <div class="article" draggable="true" ondragstart="handleDragStart(event)">
      <span class="close-btn" onclick="closeArticle(this)">X</span>
      <h2 contenteditable="true" id="rightTitle">Future Tech</h2>
      <img src="path/to/future-tech-image.jpg" alt="Future Tech Image" class="future-tech-image" onclick="uploadImage('rightImage', 'column3Image', 'rightCaption')">
      <div class="caption">Photo by Tech Enthusiast</div>
      <h3>Upcoming Technologies</h3>
      <p contenteditable="true" id="rightContent">Exploration of upcoming technologies and innovations...</p>
      <div class="add-btn" onclick="addArticle('column3', 'column3Image', 'column3Caption')">+</div>
    </div>
  `;
  columnContainer.appendChild(futureTechColumn);
}

function loadEconomySectionContent() {
    // Load Economy section content
    const columnContainer = document.getElementById('columnContainer');
    columnContainer.innerHTML = ''; // Clear existing columns

    // Left column (Financial Insights)
    const financialInsightsColumn = document.createElement('div');
    financialInsightsColumn.className = 'column';
    financialInsightsColumn.id = 'column1';

    // Create individual containers for each financial insight
    const financialInsightContents = [
        { id: 'insight1', title: 'Market Trends Analysis', description: 'Analyzing current trends in financial markets.' },
        { id: 'insight2', title: 'Global Economic Outlook', description: 'Exploring the outlook for the global economy.' },
        { id: 'insight3', title: 'Investment Strategies', description: 'Insights into effective investment strategies.' }
    ];

    financialInsightContents.forEach(insightData => {
        const container = document.createElement('div');
        container.className = 'financial-insight-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="insight-title">${insightData.title}</h2>
                <div class="financial-insight" onclick="showInsightDetails('${insightData.id}')">${insightData.title}</div>
                <p>${insightData.description}</p>
                <div class="add-btn" onclick="addArticle('column1', 'column1Image', 'column1Caption')">+</div>
            </div>
        `;
        financialInsightsColumn.appendChild(container);
    });

    columnContainer.appendChild(financialInsightsColumn);

    // Middle column (Business Reports)
    const businessReportsColumn = document.createElement('div');
    businessReportsColumn.className = 'column center-column';
    businessReportsColumn.id = 'column2';

    // Create individual containers for each business report
    const businessReportContents = [
        { id: 'report1', title: 'Quarterly Financial Report', highlights: 'Key financial highlights for the quarter.' },
        { id: 'report2', title: 'Industry Analysis', highlights: 'Analyzing trends and developments in specific industries.' },
        { id: 'report3', title: 'Startup Success Stories', highlights: 'Highlighting successful startups and their journeys.' }
    ];

    businessReportContents.forEach(reportData => {
        const container = document.createElement('div');
        container.className = 'business-report-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="report-title">${reportData.title}</h2>
                <div class="report-highlights" onclick="showReportDetails('${reportData.id}')">${reportData.title}</div>
                <p>${reportData.highlights}</p>
                <div class="add-btn" onclick="addArticle('column2', 'column2Image', 'column2Caption')">+</div>
            </div>
        `;
        businessReportsColumn.appendChild(container);
    });

    columnContainer.appendChild(businessReportsColumn);

    // Right column (Financial News)
    const financialNewsColumn = document.createElement('div');
    financialNewsColumn.className = 'column';
    financialNewsColumn.id = 'column3';

    // Create individual containers for each financial news
    const newsContents = [
        { id: 'news1', title: 'Economic Policy Updates', highlights: 'Updates on economic policies and regulations.' },
        { id: 'news2', title: 'Market Insights', highlights: 'Insights into current market conditions and trends.' },
        { id: 'news3', title: 'Corporate Announcements', highlights: 'Announcements from major corporations affecting the economy.' }
    ];

    newsContents.forEach(newsData => {
        const container = document.createElement('div');
        container.className = 'financial-news-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="news-title">${newsData.title}</h2>
                <div class="news-highlight" onclick="showNewsDetails('${newsData.id}')">${newsData.title}</div>
                <p>${newsData.highlights}</p>
                <div class="add-btn" onclick="addArticle('column3', 'column3Image', 'column3Caption')">+</div>
            </div>
        `;
        financialNewsColumn.appendChild(container);
    });

    columnContainer.appendChild(financialNewsColumn);
}


function loadPoliticsSectionContent() {
    // Load Politics section content
    const columnContainer = document.getElementById('columnContainer');
    columnContainer.innerHTML = ''; // Clear existing columns

    // Left column (Political Analysis)
    const politicalAnalysisColumn = document.createElement('div');
    politicalAnalysisColumn.className = 'column';
    politicalAnalysisColumn.id = 'column1';

    // Create individual containers for each political analysis
    const politicalAnalysisContents = [
        { id: 'analysis1', title: 'Current Political Landscape', description: 'Analyzing the current political scenario.' },
        { id: 'analysis2', title: 'Policy Debates', description: 'In-depth debates on major policy issues.' },
        { id: 'analysis3', title: 'Election Strategies', description: 'Strategies employed in recent elections.' }
    ];

    politicalAnalysisContents.forEach(analysisData => {
        const container = document.createElement('div');
        container.className = 'political-analysis-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="analysis-title">${analysisData.title}</h2>
                <div class="political-analysis" onclick="showAnalysisDetails('${analysisData.id}')">${analysisData.title}</div>
                <p>${analysisData.description}</p>
                <div class="add-btn" onclick="addArticle('column1', 'column1Image', 'column1Caption')">+</div>
            </div>
        `;
        politicalAnalysisColumn.appendChild(container);
    });

    columnContainer.appendChild(politicalAnalysisColumn);

    // Middle column (Legislative Updates)
    const legislativeUpdatesColumn = document.createElement('div');
    legislativeUpdatesColumn.className = 'column center-column';
    legislativeUpdatesColumn.id = 'column2';

    // Create individual containers for each legislative update
    const legislativeUpdateContents = [
        { id: 'update1', title: 'Recent Bills and Laws', highlights: 'Overview of recently passed bills and laws.' },
        { id: 'update2', title: 'Congressional Sessions', highlights: 'Highlights from recent congressional sessions.' },
        { id: 'update3', title: 'Political Reforms', highlights: 'Updates on political reform initiatives.' }
    ];

    legislativeUpdateContents.forEach(updateData => {
        const container = document.createElement('div');
        container.className = 'legislative-update-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="update-title">${updateData.title}</h2>
                <div class="update-highlights" onclick="showUpdateDetails('${updateData.id}')">${updateData.title}</div>
                <p>${updateData.highlights}</p>
                <div class="add-btn" onclick="addArticle('column2', 'column2Image', 'column2Caption')">+</div>
            </div>
        `;
        legislativeUpdatesColumn.appendChild(container);
    });

    columnContainer.appendChild(legislativeUpdatesColumn);

    // Right column (Political News)
    const politicalNewsColumn = document.createElement('div');
    politicalNewsColumn.className = 'column';
    politicalNewsColumn.id = 'column3';

    // Create individual containers for each political news
    const newsContents = [
        { id: 'news1', title: 'Government Announcements', highlights: 'Key announcements from the government.' },
        { id: 'news2', title: 'International Relations', highlights: 'Updates on diplomatic relations with other nations.' },
        { id: 'news3', title: 'Political Events Coverage', highlights: 'Covering major political events and gatherings.' }
    ];

    newsContents.forEach(newsData => {
        const container = document.createElement('div');
        container.className = 'political-news-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="news-title">${newsData.title}</h2>
                <div class="news-highlight" onclick="showNewsDetails('${newsData.id}')">${newsData.title}</div>
                <p>${newsData.highlights}</p>
                <div class="add-btn" onclick="addArticle('column3', 'column3Image', 'column3Caption')">+</div>
            </div>
        `;
        politicalNewsColumn.appendChild(container);
    });

    columnContainer.appendChild(politicalNewsColumn);
}

function loadArtAndCultureSectionContent() {
    // Load Art & Culture section content
    const columnContainer = document.getElementById('columnContainer');
    columnContainer.innerHTML = ''; // Clear existing columns

    // Left column (Featured Exhibitions)
    const exhibitionsColumn = document.createElement('div');
    exhibitionsColumn.className = 'column';
    exhibitionsColumn.id = 'column1';

    // Create individual containers for each exhibition
    const exhibitionContents = [
        { id: 'exhibition1', title: 'Art in Motion', description: 'Explore the dynamic world of art in motion.' },
        { id: 'exhibition2', title: 'Colors of Expression', description: 'Experience the vibrant colors of artistic expression.' },
        { id: 'exhibition3', title: 'Cultural Fusion', description: 'Witness the fusion of diverse cultures through art.' }
    ];

    exhibitionContents.forEach(exhibitionData => {
        const container = document.createElement('div');
        container.className = 'exhibition-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="exhibition-title">${exhibitionData.title}</h2>
                <div class="exhibition" onclick="showExhibitionDetails('${exhibitionData.id}')">${exhibitionData.title}</div>
                <p>${exhibitionData.description}</p>
                <div class="add-btn" onclick="addArticle('column1', 'column1Image', 'column1Caption')">+</div>
    </div>
        `;
        exhibitionsColumn.appendChild(container);
    });

    columnContainer.appendChild(exhibitionsColumn);

    // Middle column (Art Gallery Showcase)
    const galleryColumn = document.createElement('div');
    galleryColumn.className = 'column center-column';
    galleryColumn.id = 'column2';

    // Create individual containers for each gallery showcase
    const galleryContents = [
        { id: 'gallery1', title: 'Gallery Opening', artist: 'John Doe', spotlight: 'Discover the works of John Doe.' },
        { id: 'gallery2', title: 'Expressions in Art', artist: 'Jane Smith', spotlight: 'Exploring diverse expressions in art.' },
        { id: 'gallery3', title: 'Modern Masterpieces', artist: 'Alex Johnson', spotlight: 'Experience the modern art masterpieces.' }
    ];

    galleryContents.forEach(galleryData => {
        const container = document.createElement('div');
        container.className = 'gallery-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="gallery-title">${galleryData.title}</h2>
                <img src="path/to/${galleryData.id}-image.jpg" alt="${galleryData.title} Image" class="gallery-image" onclick="uploadImage('${galleryData.id}Image', 'column2Image', '${galleryData.id}Caption')">
                <div class="caption">${galleryData.title}: Captivating artworks from ${galleryData.artist}</div>
                <h3>Artist Spotlight</h3>
                <p>${galleryData.spotlight}</p>
                <div class="add-btn" onclick="addArticle('column2', 'column2Image', 'column2Caption')">+</div>
    </div>
        `;
        galleryColumn.appendChild(container);
    });

    columnContainer.appendChild(galleryColumn);

    // Right column (Cultural News)
    const culturalNewsColumn = document.createElement('div');
    culturalNewsColumn.className = 'column';
    culturalNewsColumn.id = 'column3';

    // Create individual containers for each cultural news
    const newsContents = [
        { id: 'news1', title: 'Artistic Milestones', highlights: 'Celebrating milestones in the world of art.' },
        { id: 'news2', title: 'Cultural Collaborations', highlights: 'Exploring collaborations between diverse cultures.' },
        { id: 'news3', title: 'Innovations in Art', highlights: 'Discovering the latest innovations in the art scene.' }
    ];

    newsContents.forEach(newsData => {
        const container = document.createElement('div');
        container.className = 'news-container';
        container.innerHTML = `
            <div class="article" draggable="true" ondragstart="handleDragStart(event)">
                <span class="close-btn" onclick="closeArticle(this)">X</span>
                <h2 contenteditable="true" class="news-title">${newsData.title}</h2>
                <div class="news-highlight" onclick="showNewsDetails('${newsData.id}')">${newsData.title}</div>
                <p>${newsData.highlights}</p>
                <div class="add-btn" onclick="addArticle('column3', 'column3Image', 'column3Caption')">+</div>
    </div>
        `;
        culturalNewsColumn.appendChild(container);
    });

    columnContainer.appendChild(culturalNewsColumn);
}


function closeArticle(closeBtn) {
  const article = closeBtn.parentNode;
  article.parentNode.removeChild(article);
}

function addArticle(targetId, imageId, captionId) {
    const targetElement = document.getElementById(targetId);

    // Check if the target element is a sidebar, column, or main headline container
    const isSidebar = targetElement.classList.contains('sidebar');
    const isColumn = targetElement.classList.contains('column');
    const isHeadlineContainer = targetElement.classList.contains('main-headline-container');

    let columnId;

    if (isSidebar || isColumn) {
        // Use the sidebar or column ID directly
        columnId = targetElement.id;
    } else if (isHeadlineContainer) {
        // If it's the main headline container, find the closest column
        const closestColumn = targetElement.closest('.column');
        if (closestColumn) {
            columnId = closestColumn.id;
        } else {
            // Default to a specific column ID if not found
            columnId = 'column1';
        }
    }

    const newArticle = document.createElement('div');
    newArticle.className = 'article';
    newArticle.draggable = true;
    newArticle.ondragstart = handleDragStart;

    newArticle.innerHTML = `
        <span class="close-btn" onclick="closeArticle(this)">X</span>
        <div class="image-container">
            <img src="path/to/placeholder-image.jpg" alt="Placeholder Image" class="headline-image" onclick="uploadImage('${imageId}', '${columnId}Image', '${captionId}')">
            <div class="caption">Photo by Placeholder</div>
        </div>
        <h2 contenteditable="true">New Article</h2>
        <div class="author">
            <img src="path/to/placeholder-author.jpg" alt="Placeholder Author" class="author-image" onclick="uploadImage('authorImage', '${columnId}AuthorImage', 'authorCaption')">
            <span contenteditable="true">Author: New Author</span>
        </div>
        <div class="editor">
            <img src="path/to/placeholder-editor.jpg" alt="Placeholder Editor" class="editor-image" onclick="uploadImage('editorImage', '${columnId}EditorImage', 'editorCaption')">
            <span contenteditable="true">Editor: New Editor</span>
        </div>
        <p contenteditable="true">Brief description of the new article...</p>
        <div class="continued">Continued on page <span contenteditable="true" class="page-number">8</span></div>
    `;

    targetElement.appendChild(newArticle);
}


function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function showAlertDetails(alertId) {
  // Function to show details of weather or traffic alerts
  // Implement as needed
  alert(`Details for alert: ${alertId}`);
}

function showGameDetails(gameId) {
  // Function to show details of sports game results
  // Implement as needed
  alert(`Details for game: ${gameId}`);
}

function uploadImage(inputId, imageId, captionId) {
  // Function to handle image uploads
  // Implement as needed
  alert(`Upload image for input: ${inputId}, image: ${imageId}, caption: ${captionId}`);
}
    function toggleFullscreen() {
      const elem = document.documentElement;
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
          alert(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }

 // Updated function to add full-sized photo to the main headline article
    function addHeadlineArticle() {
      const columnContainer = document.getElementById('columnContainer');
      const headlineArticle = document.createElement('div');
      headlineArticle.className = 'column';

      // Add full-sized photo to the main headline article
      headlineArticle.innerHTML = `
        <div class="article headline-article">
          <img src="path/to/full-sized-photo.jpg" alt="Full-sized Photo" class="full-sized-photo">
          <h2 contenteditable="true" id="headlineTitle">Main Headline</h2>
          <p contenteditable="true" id="headlineContent">Brief description of the main headline article...</p>
          <div class="add-btn" onclick="addArticle('column0', 'column0Image', 'column0Caption')">+</div>
        </div>
      `;

      // Insert the new headline article at the beginning
      
    }



