// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Opportunity Section Functionality
  const opportunitiesData = {
    societal: {
      title: "Societal Welfare Opportunities",
      content: `<div class="opportunity-card">
                  <h3>GreenLeafSGD</h3>
                  <p>"🌱 <strong>Join GreenLeafSGD</strong> to plant trees, cool rural areas, and build greener, more resilient communities. Work with local youth and make a real impact.</p>
                  <a href="https://chat.whatsapp.com/DQC8dDe7zMO2Guo0PgMrTj" class="apply-btn" target="_blank">Apply Now</a>
                </div>
                <div class="opportunity-card">
                  <h3>Social Impact.</h3>
                  <p>GET YOUR NGO FEATURED NOW FOR <strong>FREE!</p>
                  <a href="https://chat.whatsapp.com" class="apply-btn" target="_blank">Apply Now</a>
                </div>`
    },
    internships: {
      title: "Internship Opportunities",
      content: `<div class="opportunity-card">
                  <h3>Startup Internships</h3>
                  <p>Work with innovative startups. Gain hands-on experience in tech, marketing, and business development.</p>
                  <a href="https://chat.whatsapp.com/KrMTMmR8HEQ8WXvMtD26oM" class="apply-btn" target="_blank">Apply Now</a>
                </div>
                <div class="opportunity-card">
                  <h3>Corporate Internships</h3>
                  <p>Experience professional work environments with established companies in various industries.</p>
                  <a href="https://chat.whatsapp.com/KrMTMmR8HEQ8WXvMtD26oM" class="apply-btn" target="_blank">Apply Now</a>
                </div>`
    },
    workshops: {
      title: "Workshops & Training",
      content: `<div class="opportunity-card">
                  <h3>Skill Development Workshops</h3>
                  <p>Enhance your technical and soft skills through expert-led workshops and training sessions.</p>
                  <button class="register-btn">Register Now</button>
                </div>
                <div class="opportunity-card">
                  <h3>Career Preparation Sessions</h3>
                  <p>Learn resume building, interview techniques, and career planning from industry professionals.</p>
                  <button class="register-btn">Register Now</button>
                </div>`
    },
    events: {
      title: "Upcoming Events",
      content: `<div class="opportunity-card">
                  <h3>ANYEVENT.COM</h3>
                  <p>Book your slot.</p>
                  <p><strong>Date:</strong> MM DD, YYY</p>
                  <button class="rsvp-btn">Book Now</button>
                </div>
                <div class="opportunity-card">
                  <h3>ANYEVENT.COM</h3>
                  <p>Get featured.</p>
                  <p><strong>Date:</strong> MM DD, YYY</p>
                  <button class="rsvp-btn">Join Challenge</button>
                </div>`
    }
  };

  // Show opportunities based on category
  window.showOpportunities = function (category) {
    const contentDiv = document.getElementById('opportunity-content');
    const data = opportunitiesData[category];

    if (data) {
      contentDiv.innerHTML = `
        <h3>${data.title}</h3>
        <div class="opportunities-container">
          ${data.content}
        </div>
      `;

      // Add event listeners to dynamically created buttons
      document.querySelectorAll('.register-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          alert('Registration feature coming soon! In the meantime, join our WhatsApp group for updates.');
        });
      });

      document.querySelectorAll('.rsvp-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          alert('RSVP feature will be available soon. Check back later or join our WhatsApp group for event details.');
        });
      });
    }
  };

  // Initialize first opportunity category
  showOpportunities('societal');

  // Form Handling
  const networkForm = document.getElementById('network-form');
  const feedbackForm = document.getElementById('feedback-form');
  const donationForm = document.getElementById('donation-form');

  // Network Form Submission
  networkForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch('https://formspree.io/f/xnnvvqeo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  });

  if (response.ok) {
    document.getElementById('network-success').style.display = 'block';
    this.reset();
    setTimeout(() => {
      document.getElementById('network-success').style.display = 'none';
    }, 60000); // 60 seconds
  } else {
    alert('Something went wrong. Please try again.');
  }
});


  // Feedback Form Submission
 feedbackForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch('https://formspree.io/f/mwpbbpeo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  });

  if (response.ok) {
    document.getElementById('feedback-success').style.display = 'block';
    this.reset();
    setTimeout(() => {
      document.getElementById('feedback-success').style.display = 'none';
    }, 60000); // 60 seconds
  } else {
    alert('Something went wrong. Please try again.');
  }
});


  // Donation Form Submission
  donationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount)) {
      alert('Please enter a valid donation amount');
      return;
    }

    if (amount <= 0) {
      alert('Donation amount must be greater than 0');
      return;
    }

    const submitBtn = this.querySelector('.donate-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    setTimeout(() => {
      const isSuccess = 0;

      if (isSuccess) {
        document.getElementById('donation-success').style.display = 'block';
        document.getElementById('donation-failure').style.display = 'none';
        this.reset();
      } else {
        document.getElementById('donation-failure').style.display = 'block';
        document.getElementById('donation-success').style.display = 'none';
      }

      submitBtn.disabled = false;
      submitBtn.textContent = 'Help Us Grow';

      setTimeout(() => {
        document.getElementById('donation-success').style.display = 'none';
        document.getElementById('donation-failure').style.display = 'none';
      }, 60000);
    }, 2000);
  });

  // Email validation helper
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Tooltip functionality
  document.querySelectorAll('.info-icon').forEach(icon => {
    icon.addEventListener('click', function (e) {
      e.stopPropagation();
      const tooltip = this.querySelector('.tooltip');
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
    });
  });

  // Close tooltips when clicking anywhere else
  document.addEventListener('click', function () {
    document.querySelectorAll('.tooltip').forEach(tooltip => {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    });
  });
});
