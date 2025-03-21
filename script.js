// Dati dei driver e recensioni
const drivers = {
  "Marco Rossi": [
    {
      reviewer: "Francesca",
      review: "Ottimo servizio! Marco è stato puntualissimo e molto gentile. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Luca",
      review: "Viaggio confortevole e sicuro. Lo consiglio! 4 stelle!",
      rating: 4
    }
  ],
  "Laura Bianchi": [
    {
      reviewer: "Giovanni",
      review: "Un viaggio perfetto, Laura è stata molto professionale. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Maria",
      review: "Semplicemente fantastica. Arrivata in orario e molto disponibile. 5 stelle!",
      rating: 5
    }
  ],
  "John Smith": [
    {
      reviewer: "Emily",
      review: "John è stato molto professionale e amichevole. Viaggio tranquillo, 5 stelle!",
      rating: 5
    },
    {
      reviewer: "David",
      review: "Perfetto, molto puntuale! 4 stelle.",
      rating: 4
    }
  ],
  "Ana Garcia": [
    {
      reviewer: "Carlos",
      review: "Ana è stata super gentile e il viaggio è stato comodo. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Lucia",
      review: "Servizio perfetto, la consiglio vivamente! 5 stelle!",
      rating: 5
    }
  ],
  "Chen Wei": [
    {
      reviewer: "Liu",
      review: "Viaggio molto piacevole, Chen è un ottimo autista. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Jin",
      review: "Molto cortese e puntuale. 4 stelle.",
      rating: 4
    }
  ],
  "Kumar Patel": [
    {
      reviewer: "Raj",
      review: "Kumar è stato fantastico! Molto cordiale e puntuale. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Priya",
      review: "Viaggio sicuro e veloce. 4 stelle.",
      rating: 4
    }
  ],
  "Fatima Zahra": [
    {
      reviewer: "Omar",
      review: "Fatima è stata incredibile. Puntuale e molto gentile. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Samira",
      review: "Molto professionale e disponibile. 5 stelle!",
      rating: 5
    }
  ],
  "Olga Ivanova": [
    {
      reviewer: "Anastasia",
      review: "Olga è stata molto gentile e il viaggio è stato piacevole. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Dmitry",
      review: "Viaggio confortevole, ma un po' lento. 4 stelle.",
      rating: 4
    }
  ],
  "Sofia Martins": [
    {
      reviewer: "Beatriz",
      review: "Sofia è stata fantastica. Viaggio perfetto. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Pedro",
      review: "Molto disponibile e puntuale, la consiglio! 4 stelle.",
      rating: 4
    }
  ],
  "Muhammed Ali": [
    {
      reviewer: "Ahmed",
      review: "Muhammed è stato fantastico. Viaggio molto confortevole. 5 stelle!",
      rating: 5
    },
    {
      reviewer: "Fatima",
      review: "Molto professionale e cortese. 5 stelle!",
      rating: 5
    }
  ]
};

// Funzione per visualizzare recensioni di un driver selezionato
function showReviews(driverName) {
  const driverReviews = drivers[driverName];
  const reviewContainer = document.getElementById('reviews-container');
  
  reviewContainer.innerHTML = ''; // Pulisce le recensioni precedenti
  
  driverReviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    
    const reviewer = document.createElement('p');
    reviewer.innerHTML = `<strong>${review.reviewer}:</strong> ${review.review}`;
    
    const rating = document.createElement('p');
    rating.innerHTML = '⭐'.repeat(review.rating);
    
    reviewElement.appendChild(reviewer);
    reviewElement.appendChild(rating);
    
    reviewContainer.appendChild(reviewElement);
  });
}

// Funzione per caricare i driver nella pagina
function loadDrivers() {
  const driverList = Object.keys(drivers);
  const driverSelect = document.getElementById('driver-select');

  driverList.forEach(driver => {
    const option = document.createElement('option');
    option.value = driver;
    option.innerText = driver;
    driverSelect.appendChild(option);
  });
}

// Event listener per caricare le recensioni del driver selezionato
document.getElementById('driver-select').addEventListener('change', function() {
  const selectedDriver = this.value;
  showReviews(selectedDriver);
});

// Carica i driver nella pagina
loadDrivers();
