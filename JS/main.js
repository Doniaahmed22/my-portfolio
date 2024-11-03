document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.hover-video');

    container.addEventListener('mouseover', () => {
        video.play();
    });

    container.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0; // إعادة الفيديو إلى البداية
    });
});


document.getElementById('toggleButton').addEventListener('click', function(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند الضغط على الرابط
    const projectDiv = document.getElementById('anotherProject');
    const toggleButton = document.getElementById('toggleButton');

    // التبديل بين الإظهار والإخفاء
    if (projectDiv.style.display === "none") {
        projectDiv.style.display = "block"; // يظهر الـ div
        toggleButton.textContent = "Less Projects"; // تغيير النص
    } else {
        projectDiv.style.display = "none"; // يخفي الـ div
        toggleButton.textContent = "More Projects"; // تغيير النص
    }
});
