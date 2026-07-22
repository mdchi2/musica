// Application Logic for Music Database App

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const songsBody = document.getElementById('songsBody');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const artistSelect = document.getElementById('artistSelect');
  const genreSelect = document.getElementById('genreSelect');
  const alphabetBar = document.getElementById('alphabetBar');
  const totalCountEl = document.getElementById('totalCount');
  const totalSingersEl = document.getElementById('totalSingers');
  const totalGenresEl = document.getElementById('totalGenres');
  const thSinger = document.getElementById('thSinger');
  const thSong = document.getElementById('thSong');
  const playerBar = document.getElementById('playerBar');
  const playerSinger = document.getElementById('playerSinger');
  const playerSong = document.getElementById('playerSong');
  const linkYoutube = document.getElementById('linkYoutube');
  const closePlayer = document.getElementById('closePlayer');

  // State Management
  let allSongs = typeof SONGS_DATA !== 'undefined' ? SONGS_DATA : [];
  let currentSearch = '';
  let currentArtist = '';
  let currentGenre = '';
  let currentLetter = '';
  let sortField = 'cantante'; // 'cantante', 'cancion', or 'genero'
  let sortDirection = 'asc';  // 'asc' or 'desc'
  let playingSongId = null;

  // Initialize App
  function init() {
    setupArtistSelect();
    setupGenreSelect();
    setupAlphabetBar();
    renderStats();
    applyFiltersAndRender();
    bindEvents();
  }

  // Populate Artist Dropdown
  function setupArtistSelect() {
    const artistsSet = new Set(allSongs.map(s => s.cantante));
    const sortedArtists = Array.from(artistsSet).sort((a, b) => a.localeCompare(b, 'es'));
    
    artistSelect.innerHTML = '<option value="">Todos los Cantantes (' + sortedArtists.length + ')</option>';
    sortedArtists.forEach(artist => {
      const opt = document.createElement('option');
      opt.value = artist;
      opt.textContent = artist;
      artistSelect.appendChild(opt);
    });
  }

  // Populate Genre Dropdown
  function setupGenreSelect() {
    const genreCounts = {};
    allSongs.forEach(s => {
      const g = s.genero || 'Variado / Pop';
      genreCounts[g] = (genreCounts[g] || 0) + 1;
    });

    const sortedGenres = Object.keys(genreCounts).sort((a, b) => a.localeCompare(b, 'es'));

    genreSelect.innerHTML = '<option value="">Todos los Géneros (' + sortedGenres.length + ')</option>';
    sortedGenres.forEach(genre => {
      const opt = document.createElement('option');
      opt.value = genre;
      opt.textContent = `${genre} (${genreCounts[genre]})`;
      genreSelect.appendChild(opt);
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
    const totalSongs = allSongs.length;
    const uniqueSingers = new Set(allSongs.map(s => s.cantante.toLowerCase())).size;
    const uniqueGenres = new Set(allSongs.map(s => (s.genero || '').toLowerCase())).size;
    
    totalCountEl.textContent = totalSongs;
    totalSingersEl.textContent = uniqueSingers;
    if (totalGenresEl) totalGenresEl.textContent = uniqueGenres;
  }

  // Filter, Sort and Render Songs
  function applyFiltersAndRender() {
    let filtered = allSongs.filter(song => {
      // Search text filter (matches cantante, cancion, or genero)
      if (currentSearch) {
        const q = currentSearch.toLowerCase();
        const matchesSinger = song.cantante.toLowerCase().includes(q);
        const matchesSong = song.cancion.toLowerCase().includes(q);
        const matchesGenre = (song.genero || '').toLowerCase().includes(q);
        if (!matchesSinger && !matchesSong && !matchesGenre) return false;
      }

      // Artist dropdown filter
      if (currentArtist && song.cantante !== currentArtist) {
        return false;
      }

      // Genre dropdown filter
      if (currentGenre && song.genero !== currentGenre) {
        return false;
      }

      // Alphabetical letter filter (based on singer name)
      if (currentLetter) {
        const firstChar = song.cantante.charAt(0).toUpperCase();
        if (firstChar !== currentLetter) return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      const valA = (a[sortField] || '').toLowerCase();
      const valB = (b[sortField] || '').toLowerCase();
      let comparison = valA.localeCompare(valB, 'es');
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    renderTableRows(filtered);
  }

  // Render Table Rows cleanly
  function renderTableRows(songs) {
    songsBody.innerHTML = '';

    if (songs.length === 0) {
      songsBody.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🎵</div>
          <div class="empty-title">No se encontraron canciones</div>
          <div class="empty-desc">Intenta ajustar tu búsqueda o seleccionar otro género.</div>
        </div>
      `;
      return;
    }

    const fragment = document.createDocumentFragment();

    songs.forEach(song => {
      const row = document.createElement('div');
      row.className = `table-row ${playingSongId === song.id ? 'playing' : ''}`;
      row.setAttribute('data-id', song.id);

      const firstLetter = song.cantante.charAt(0).toUpperCase();
      const genreName = song.genero || 'Variado';
      const query = encodeURIComponent(`${song.cantante} ${song.cancion}`);
      const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`;

      row.innerHTML = `
        <div class="col-singer" title="Cantante: ${escapeHtml(song.cantante)}">
          <div class="singer-avatar">${firstLetter}</div>
          <span class="singer-name">${escapeHtml(song.cantante)}</span>
        </div>
        <div class="col-song" title="Canción: ${escapeHtml(song.cancion)}">
          <span class="song-icon">♫</span>
          <div class="song-info-wrapper">
            <span class="song-title">${escapeHtml(song.cancion)}</span>
            <span class="genre-pill" title="Filtrar por género: ${escapeHtml(genreName)}">${escapeHtml(genreName)}</span>
          </div>
        </div>
        <div class="col-actions">
          <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-btn" title="Buscar '${escapeHtml(song.cancion)}' en YouTube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
        </div>
      `;

      // Genre pill quick filter click
      const genrePill = row.querySelector('.genre-pill');
      genrePill.addEventListener('click', (e) => {
        e.stopPropagation();
        genreSelect.value = genreName;
        currentGenre = genreName;
        applyFiltersAndRender();
      });

      // YouTube button click
      const ytBtn = row.querySelector('.youtube-btn');
      ytBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        activatePlayerBar(song);
      });

      // Row click activates player bar
      row.addEventListener('click', () => {
        activatePlayerBar(song);
      });

      fragment.appendChild(row);
    });

    songsBody.appendChild(fragment);
  }

  // Activate Player Bar
  function activatePlayerBar(song) {
    playingSongId = song.id;
    
    // Highlight active row
    document.querySelectorAll('.table-row').forEach(r => {
      if (r.getAttribute('data-id') == song.id) {
        r.classList.add('playing');
      } else {
        r.classList.remove('playing');
      }
    });

    // Update Player Bar
    playerSinger.textContent = `${song.cantante} • ${song.genero || 'Música'}`;
    playerSong.textContent = song.cancion;

    const query = encodeURIComponent(`${song.cantante} ${song.cancion}`);
    linkYoutube.href = `https://www.youtube.com/results?search_query=${query}`;

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

    // Genre Select
    genreSelect.addEventListener('change', (e) => {
      currentGenre = e.target.value;
      applyFiltersAndRender();
    });

    // Table Header Sorting
    thSinger.addEventListener('click', () => {
      if (sortField === 'cantante') {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        sortField = 'cantante';
        sortDirection = 'asc';
      }
      updateSortHeaderUI();
      applyFiltersAndRender();
    });

    thSong.addEventListener('click', () => {
      if (sortField === 'cancion') {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        sortField = 'cancion';
        sortDirection = 'asc';
      }
      updateSortHeaderUI();
      applyFiltersAndRender();
    });

    // Close player
    closePlayer.addEventListener('click', () => {
      playerBar.classList.remove('active');
      playingSongId = null;
      document.querySelectorAll('.table-row').forEach(r => r.classList.remove('playing'));
    });
  }

  // Update Sort Icons in Header
  function updateSortHeaderUI() {
    thSinger.classList.toggle('active-sort', sortField === 'cantante');
    thSong.classList.toggle('active-sort', sortField === 'cancion');

    const iconSinger = thSinger.querySelector('.sort-icon');
    const iconSong = thSong.querySelector('.sort-icon');

    if (sortField === 'cantante') {
      iconSinger.textContent = sortDirection === 'asc' ? '▲' : '▼';
      iconSong.textContent = '↕';
    } else {
      iconSong.textContent = sortDirection === 'asc' ? '▲' : '▼';
      iconSinger.textContent = '↕';
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
