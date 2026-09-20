// Application Logic for Cantantes Directory

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const singersBody = document.getElementById('singersBody');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const artistSelect = document.getElementById('artistSelect');
  const alphabetBar = document.getElementById('alphabetBar');
  const totalSingersEl = document.getElementById('totalSingers');
  const thSinger = document.getElementById('thSinger');
  const playerBar = document.getElementById('playerBar');
  const playerSinger = document.getElementById('playerSinger');
  const linkYoutube = document.getElementById('linkYoutube');
  const closePlayer = document.getElementById('closePlayer');

  // State Management
  const allSingers = typeof CANTANTES_DATA !== 'undefined' ? CANTANTES_DATA : [];
  let currentSearch = '';
  let currentArtist = '';
  let currentLetter = '';
  let sortDirection = 'asc';  // 'asc' or 'desc'
  let activeSinger = null;

  // Initialize App
  function init() {
    setupArtistSelect();
    setupAlphabetBar();
    renderStats();
    applyFiltersAndRender();
    bindEvents();
  }

  // Populate Artist Dropdown
  function setupArtistSelect() {
    const sortedSingers = [...allSingers].sort((a, b) => a.localeCompare(b, 'es'));
    
    artistSelect.innerHTML = '<option value="">Todos los Cantantes (' + sortedSingers.length + ')</option>';
    sortedSingers.forEach(artist => {
      const opt = document.createElement('option');
      opt.value = artist;
      opt.textContent = artist;
      artistSelect.appendChild(opt);
    });
  }

  // Setup Alphabet Filter Bar
  function setupAlphabetBar() {
    const letters = ['TODOS', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
    alphabetBar.innerHTML = '';

    letters.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = `alphabet-btn ${letter === 'TODOS' ? 'active' : ''}`;
      btn.textContent = letter;
      btn.setAttribute('data-letter', letter === 'TODOS' ? '' : letter);

      btn.addEventListener('click', () => {
        document.querySelectorAll('.alphabet-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLetter = letter === 'TODOS' ? '' : letter;
        applyFiltersAndRender();
      });

      alphabetBar.appendChild(btn);
    });
  }

  // Calculate and display totals
  function renderStats() {
    if (totalSingersEl) {
      totalSingersEl.textContent = allSingers.length;
    }
  }

  // Filter, Sort and Render Singers
  function applyFiltersAndRender() {
    let filtered = allSingers.filter(singer => {
      // Search text filter
      if (currentSearch) {
        const q = currentSearch.toLowerCase();
        if (!singer.toLowerCase().includes(q)) return false;
      }

      // Artist dropdown filter
      if (currentArtist && singer !== currentArtist) {
        return false;
      }

      // Alphabetical letter filter
      if (currentLetter) {
        const firstChar = singer.charAt(0).toUpperCase();
        if (firstChar !== currentLetter) return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      const comparison = a.localeCompare(b, 'es');
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    renderTableRows(filtered);
  }

  // Render Table Rows cleanly
  function renderTableRows(singers) {
    singersBody.innerHTML = '';

    if (singers.length === 0) {
      singersBody.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🎤</div>
          <div class="empty-title">No se encontraron cantantes</div>
          <div class="empty-desc">Intenta ajustar tu búsqueda o seleccionar otra letra.</div>
        </div>
      `;
      return;
    }

    const fragment = document.createDocumentFragment();

    singers.forEach((singer, index) => {
      const row = document.createElement('div');
      row.className = `table-row ${activeSinger === singer ? 'playing' : ''}`;
      row.setAttribute('data-singer', singer);

      const firstLetter = singer.charAt(0).toUpperCase();
      // Direccionamiento a YouTube únicamente por cantante
      const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(singer)}`;

      row.innerHTML = `
        <div class="col-singer" title="Cantante: ${escapeHtml(singer)}">
          <span class="singer-index">${index + 1}</span>
          <div class="singer-avatar">${firstLetter}</div>
          <span class="singer-name">${escapeHtml(singer)}</span>
        </div>
        <div class="col-actions">
          <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-btn" title="Buscar '${escapeHtml(singer)}' en YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
        </div>
      `;

      // YouTube button click
      const ytBtn = row.querySelector('.youtube-btn');
      if (ytBtn) {
        ytBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          activatePlayerBar(singer);
        });
      }

      // Row click activates bottom bar
      row.addEventListener('click', () => {
        activatePlayerBar(singer);
      });

      fragment.appendChild(row);
    });

    singersBody.appendChild(fragment);
  }

  // Activate Player Bar
  function activatePlayerBar(singer) {
    activeSinger = singer;
    
    // Highlight active row
    document.querySelectorAll('.table-row').forEach(r => {
      if (r.getAttribute('data-singer') === singer) {
        r.classList.add('playing');
      } else {
        r.classList.remove('playing');
      }
    });

    // Update Player Bar
    playerSinger.textContent = singer;
    linkYoutube.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(singer)}`;

    playerBar.classList.add('active');
  }

  // Event Listeners
  function bindEvents() {
    // Search input
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      searchClear.style.display = currentSearch ? 'flex' : 'none';
      applyFiltersAndRender();
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      searchClear.style.display = 'none';
      applyFiltersAndRender();
    });

    // Artist Select
    artistSelect.addEventListener('change', (e) => {
      currentArtist = e.target.value;
      applyFiltersAndRender();
    });

    // Table Header Sorting
    thSinger.addEventListener('click', () => {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      updateSortHeaderUI();
      applyFiltersAndRender();
    });

    // Close player
    closePlayer.addEventListener('click', () => {
      playerBar.classList.remove('active');
      activeSinger = null;
      document.querySelectorAll('.table-row').forEach(r => r.classList.remove('playing'));
    });
  }

  // Update Sort Icons in Header
  function updateSortHeaderUI() {
    const iconSinger = thSinger.querySelector('.sort-icon');
    if (iconSinger) {
      iconSinger.textContent = sortDirection === 'asc' ? '▲' : '▼';
    }
  }

  // Helper: HTML Escaping
  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Kickstart
  init();
});
