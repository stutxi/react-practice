import './App.css'
import React, { useState } from 'react';

const loremIpsum = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
  'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit',
  'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla',
  'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident',
  'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
];

// Function to generate a paragraph from Lorem Ipsum
const generateParagraph = (numWords) => {
  let para = '';
  for (let i = 0; i < numWords; i++) {
    const word = loremIpsum[Math.floor(Math.random() * loremIpsum.length)];
    para += word + ' ';
  }
  return para.trim();
};

const App = () => {
  const [wordCount, setWordCount] = useState('');
  const [paragraph, setParagraph] = useState('');


  // Function to generate random words
  // const generateRandomWord = () => {
  //   const letters = 'abcdefghijklmnopqrstuvwxyz';
  //   let word = '';
  //   const wordLength = Math.floor(Math.random() * 8) + 3; // Word length between 3 to 10
  //   for (let i = 0; i < wordLength; i++) {
  //     word += letters.charAt(Math.floor(Math.random() * letters.length));
  //   }
  //   return word;
  // };


  // Function to generate paragraph
  // const generateParagraph = (numWords) => {
  //   let para = '';
  //   for (let i = 0; i < numWords; i++) {
  //     para += generateRandomWord() + ' ';
  //   }
  //   return para.trim();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const words = parseInt(wordCount);
    if (words > 0) {
      const generatedPara = generateParagraph(words);
      setParagraph(generatedPara);
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div>
      <h1>Para Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Number of Words"
          value={wordCount}
          onChange={(e) => setWordCount(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default App;
