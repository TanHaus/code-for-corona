const moocList = [
  ['Princeton - Algorithms I', 'https://www.coursera.org/learn/algorithms-part1'],
  ['Princeton - Algorithms II', 'https://www.coursera.org/learn/algorithms-part2'],
  ['Princeton - Analysis of Algorithms', 'https://www.coursera.org/learn/analysis-of-algorithms'],
  ['CentraleSupélec - Build Android App', 'https://www.coursera.org/learn/android-app'],
  ['Vanderbilt - Mathlab', 'https://www.coursera.org/learn/matlab'],
  ['deeplearning.ai - Neural Networks and Deep Learning', 'https://www.coursera.org/learn/neural-networks-deep-learning'],
  ['Stanford - Machine Learning', 'https://www.coursera.org/learn/machine-learning']
]

function randomMooc() { 
  const rand = (Math.random()*moocList.length);
  return JSON.stringify(moocList[Math.floor(rand)]) 
}

const spotifyList = [
  '0pYacDCZuRhcrwGUA5nTBe',
  '1rgnBhdG2JDFTbYkYRZAku',
  '7DsX5K72fewVGb47qj7Tbg',
  '1iIhGHzzrzqQfuNkFI2qAn',
  '62aP9fBQKYKxi7PDXwcUAS',
  '6yb8ktQyg2mH4fOUeIYkd5',
  '7qEHsqek33rTcFNT9PFqLf',
  '2BgEsaKNfHUdlh97KmvFyo',
  '3CKCZ9pfwAfoMZlMncA1Nc',
  '5sZOGj6SfzD7lWpwKhF6oE',
  '7bdYqNFyijfCG3ziepQjcf',
  '41CgzGD7xlgnJe14R4cqkL',
]

function randomSpotify() { 
  const rand = (Math.random()*spotifyList.length);
  return JSON.stringify(spotifyList[Math.floor(rand)]) 
}

export { randomMooc, randomSpotify }