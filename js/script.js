//swiper slide

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', ''],
      datasets: [
        {
          label: '',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        },
        {
          label: '',
          data: [15, 19, 8, 6, 9, 7],
          borderColor: "blue",
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });