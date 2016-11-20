const bourbons = [
  {
    name: 'Basil Hayden\'s',
    distillery: `Jim Beam Distillery`,
    taste: [
      'Spicy', 'peppery', 'honey'
    ],
    website: 'http://www.basilhaydens.com/'
  }, {
    name: 'Bulleit Bourbon Frontier Whiskey',
    distillery: `Diageo, Bulleit Distilling Company`,
    taste: [
      'Oaky', 'smokey', 'vanilla'
    ],
    website: 'https://www.bulleit.com/'
  }, {
    name: 'Four Roses Limited Edition Small Batch',
    distillery: `Four Roses`,
    taste: [
      'Cherries', 'apricot', 'light spice', 'honey'
    ],
    website: 'http://fourrosesbourbon.com/'
  }, {
    name: 'Old Forester Kentucky Straight Bourbon Whisky',
    distillery: `Brown-Forman`,
    taste: [
      'Dry chocolate-cocoa', 'sappy oak', 'soft fruit medley', 'rich harvest corn', 'sun-dried hay'
    ],
    website: 'http://www.oldforester.com/age'
  }
];

const markup = `
  <div class="container">
    ${bourbons.map(bourbon => `<div class="measure-wide grow pa3 pt4 bb b--black-30 ">
        <h2 class="primary-font">${bourbon.name}</h2>
        <h3 class="primary-font">${bourbon.distillery}</h3>
        <p class="secondary-font"><strong>Notes:</strong> ${bourbon.taste.join(', ')}</p>
        <p class="primary-font"><a class="light-red dim" href="${bourbon.website}"" target="_blank">${bourbon.website || ''}</a></p>
      </div>
      `).join('')}
  </div>
`;

var main = document.getElementById('main');
main.innerHTML = markup;
