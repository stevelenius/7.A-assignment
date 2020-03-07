// 7.A-assignment-vue.js
//
// Collection
// 

// Record data stored as objects in array
let recordsArray = [
  {
  song: "Rhapsody in Blue",
  artist: "George Gershwin with Paul Whiteman and His Orchestra",
  label: "Victor",
  recordNo: "55225",
  year: "1924"
  },
  
  {
  song: "Jazz Me Blues",
  artist: "Bix Beiderbecke and his Gang",
  label: "Vocalion",
  recordNo: "3042",
  year: "1927"
  },
    
  {
  song: "Mood Indigo",
  artist: "Duke Ellington & His Famous Orchestra (vocal by Ivie Anderson)",
  label: "Columbia",
  recordNo: "35427",
  year: "1940"
  },
  
  {
  song: "More Than You Know",
  artist: "Billie Holiday",
  label: "Columbia",
  recordNo: "36117",
  year: "1941"
  },
  
  {
  song: "Down For Double",
  artist: "Count Basie and His Orchestra",
  label: "Okeh",
  recordNo: "6584",
  year: "1942"
  }  

];

// Vue object uses external array
var vm = new Vue({
  el: "#myRecords",
  data: {
    records: recordsArray
  }
});