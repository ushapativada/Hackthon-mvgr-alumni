 const storiesData = [
      {
        name: 'Usha pativada',
        year: 2010,
        text: 'Started my own startup that now employs over 50 people worldwide!'
      },
      {
        name: 'Varshini neralla',
        year: 2016,
        text: 'Became a teamleader at my office'
      },
       {
        name: 'prahsanti moyyi',
        year: 2016,
        text: 'I have got a promotion as manager'
      }
    ];

    const storiesContainer = document.getElementById('stories');
    const storyForm = document.getElementById('storyForm');

    function renderStories() {
      storiesContainer.innerHTML = '';
      storiesData.forEach(({ name, year, text }) => {
        const storyEl = document.createElement('div');
        storyEl.classList.add('story');
        storyEl.innerHTML = `
          <div><span class="name">${name}</span><span class="year">(${year})</span></div>
          <div class="text">${text}</div>
        `;
        storiesContainer.appendChild(storyEl);
      });
    }

    storyForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = storyForm.name.value.trim();
      const year = storyForm.year.value.trim();
      const text = storyForm.story.value.trim();

      if (!name || !year || !text) {
        alert('Please fill out all fields.');
        return;
      }
      if (!/^\d{4}$/.test(year)) {
        alert('Please enter a valid 4-digit year.');
        return;
      }

      storiesData.push({ name, year, text });
      renderStories();

      storyForm.reset();
    });
