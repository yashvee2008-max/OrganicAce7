const topicIds = [
  'topic1','topic2','topic3','topic4','topic5',
  'topic6','topic7','topic8','topic9','topic10'
];

function updateProgress() {
  let done = 0;
  topicIds.forEach(id => {
    if (document.getElementById(id).checked) done++;
    localStorage.setItem(id, document.getElementById(id).checked);
  });
  const percent = Math.round((done / topicIds.length) * 100);
  document.getElementById('progressBar').style.width = percent + '%';
  document.getElementById('percentage').innerText = percent + '% Complete';
}

function loadProgress() {
  topicIds.forEach(id => {
    const val = localStorage.getItem(id);
    if (val === 'true') {
      document.getElementById(id).checked = true;
    }
  });
  updateProgress();
}

function resetProgress() {
  topicIds.forEach(id => {
    document.getElementById(id).checked = false;
    localStorage.removeItem(id);
  });
  updateProgress();
}

// Initialize on load
window.onload = loadProgress;
