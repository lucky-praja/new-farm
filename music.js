const moodData = {
  happy: {
    quote: "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    song: {
      title: "Happy – Pharrell Williams",
      link: "https://youtu.be/qlzcHe_gusE?si=O9pKRR0yczz9b_yb"
    }
  },
  sad: {
    quote: "Tears come from the heart and not from the brain. – Leonardo da Vinci",
    song: {
      title: "Someone Like You – Adele",
      
      link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0"
    }
  },
  angry: {
    quote: "For every minute you remain angry, you give up sixty seconds of peace of mind. – Ralph Waldo Emerson",
    song: {
      title: "Breaking the Habit – Linkin Park",
      link: "https://youtu.be/zqGW6x_5N0k?si=jAfNQ2CJDnup5D4g"
    }
  },
  calm: {
    quote: "Peace comes from within. Do not seek it without. <br>press link below",
    song: {
      title:"Mood Swing – Linkin Park",
      
      link: "https://youtu.be/NbyHNASFi6U?si=5oa8ihHmOQgtTwKt"
    }
  },
  motivated: {
    quote: 'Don’t watch the clock; do what it does. Keep going. – Sam Levenson',
    song: {
      title: "Eye of the Tiger – Survivor",
      link: "https://youtu.be/TBP5kFOsqO8?si=3abNEVyv3hynjw8_"
    }
  },
  romantic:{
    quote:"Don’t You are my happily ever after. – lucky",
    song:{
      title:"Eye of the Tiger – Survivor",
      link:"https://youtu.be/PxJNNAezY0A?si=nosGLCjSUPBiIeZn"
    }

  }
};

function showMoodContent() {
  const mood = document.getElementById("moodSelector").value;
  const output = document.getElementById("outputArea");

  if (!mood) {
    output.innerHTML = `<p>Please select a mood.</p>`;
    return;
  }

  const moodContent = moodData[mood];

  output.innerHTML = `
    <p><strong>Quote:</strong> "${moodContent.quote}"</p>
    <p><strong>Song:</strong> <a href="${moodContent.song.link}" target="_blank">${moodContent.song.title}</a></p>
  `;
}
