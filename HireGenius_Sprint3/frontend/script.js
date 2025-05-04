function showLogin() {
    document.getElementById("output").innerText = "Login form goes here...";
  }
  
  function showSignup() {
    document.getElementById("output").innerText = "Signup form goes here...";
  }
  
  function loadJobs() {
    fetch("http://localhost:5000/jobs")
      .then(response => response.json())
      .then(data => {
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
      })
      .catch(err => {
        document.getElementById("output").innerText = "Could not load jobs.";
        console.error(err);
      });
  }
  