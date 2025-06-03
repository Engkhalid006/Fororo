console.log('For Watch قيد التحميل 🚀');

// تحديث كل 30 دقيقة
setInterval(() => {
  console.log('جارٍ التحديث التلقائي للمحتوى...');
}, 1800000);

// إشعار
window.addEventListener('load', () => {
  const bar = document.getElementById('notification-bar');
  setTimeout(() => {
    bar.style.display = 'block';
  }, 5000);
});

// مشغل الفيديو
function seek(seconds) {
  const player = document.getElementById('video-player');
  player.currentTime += seconds;
}

function toggleFullscreen() {
  const player = document.getElementById('video-player');
  if (player.requestFullscreen) {
    player.requestFullscreen();
  }
}

function nextEpisode() {
  alert('انتقل إلى الحلقة التالية');
}

// إدارة الملفات
function addProfile() {
  const name = document.getElementById('new-profile-name').value;
  let profiles = JSON.parse(localStorage.getItem('profiles') || '[]');
  if (profiles.length < 5) {
    profiles.push(name);
    localStorage.setItem('profiles', JSON.stringify(profiles));
    alert('تمت إضافة الملف بنجاح!');
  } else {
    alert('الحد الأقصى للملفات 5 فقط.');
  }
}

// استكمال المشاهدة
function saveProgress(id, time) {
  localStorage.setItem(`progress_${id}`, time);
}
function getProgress(id) {
  return localStorage.getItem(`progress_${id}`) || 0;
}
