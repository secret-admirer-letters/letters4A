// Select relevant DOM elements
const audio = document.getElementById("audioPlayer");
const essayText = document.getElementById("essayText");
const essayBox = document.getElementById("essayBox");
const heading = document.querySelector(".heading");

const essayParts = [
    "The Girl Who Stole My Heart",
    "You are the most amazing girl I have ever met. You are beautiful, not just because of how you look, but because of who you are. From the moment I saw you, I knew you were special. Your smile can brighten anyone’s day, and your eyes seem to hold a million stories.",
    "When you talk, your voice is soft and kind, and every word you say feels important. You make even normal days feel special, like when you laugh at something simple or share a funny story. Just being around you makes everything better.",
    "But you’re not just beautiful—you have the kindest heart. You always listen when people talk, and you care about others in a way that not many people do. You notice the little things, like when someone is feeling sad, and you always try to cheer them up.",
    "You find joy in the smallest things—reading a good book, watching the sunset—and you remind me that happiness isn’t just about big things, but also about the little moments.",
    "You are also so strong. Even when things are tough, you keep going and don’t let anything bring you down. You never give up, and that’s something I really admire about you.",
    "You are the kind of person who makes others want to be better, just by being yourself.",
    "I didn’t choose to like you—it just happened. You took my heart with your kindness, your laugh, and the way you see the world. Being around you makes me happy, and I feel so lucky just to know you.",
    "You are more than just a pretty girl. You are special, kind, and strong. If I could spend every day with you, just watching you make the world a better place, I would be the happiest person ever.",
    "No matter what happens, I just want you to know that you will always have a special place in my heart.",
    "-End (Sorry if it's a little too bland)"
];

let currentPart = 0;

// Update the essay box content
function updateEssay() {
    essayBox.classList.remove("show");
    setTimeout(() => {
        essayText.innerText = essayParts[currentPart];
        essayBox.classList.add("show");
    }, 500);
}

// Play the audio
function playAudio() {
    audio.play();
    // Show the essay when play button is clicked
    updateEssay();
}

// Stop the audio and fade out
function stopAudio() {
    let fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
            audio.volume -= 0.05;
        } else {
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 1;
            clearInterval(fadeOut);
        }
    }, 100);
}

// Go back to the previous part of the essay
function goBack() {
    if (currentPart > 0) {
        currentPart--;
        updateEssay();
    }
}

// Go to the next part of the essay
function goNext() {
    if (currentPart < essayParts.length - 1) {
        currentPart++;
        updateEssay();
    }
}

// Initialize essay display
updateEssay();
