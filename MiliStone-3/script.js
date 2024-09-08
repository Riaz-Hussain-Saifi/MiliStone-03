document.getElementById("resume-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page
  
    // Fetch form values
    const title = document.getElementById("resume-title").value;
    const whatYouAre = document.getElementById("what-you-are").value;
    const summary = document.getElementById("summary").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    const schoolName = document.getElementById("schoolName").value;
    const degree = document.getElementById("degree").value;
    const graduationDate = document.getElementById("graduationDate").value;
    const educationDescription = document.getElementById("educationDescription").value;
  
    const designation = document.getElementById("designation").value;
    const companyName = document.getElementById("companyName").value;
    const position = document.getElementById("position").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
  
    const skills = document.getElementById("skills").value.split(',');
  
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const github = document.getElementById("github").value;
    const linkedin = document.getElementById("linkedin").value;
  
    // Update the resume output
    document.getElementById("output-title").innerText = title;
    document.getElementById("output-what-you-are").innerText = whatYouAre;
    document.getElementById("output-summary").innerText = summary;
    document.getElementById("output-contact").innerText = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`;
    
    document.getElementById("output-education").innerText = `School: ${schoolName}\nDegree: ${degree}\nGraduation: ${graduationDate}\n${educationDescription}`;
    document.getElementById("output-work-experience").innerText = `${designation} at ${companyName}\nPosition: ${position}\nFrom: ${startDate} To: ${endDate}`;
    document.getElementById("output-skills").innerText = skills.join(', ');
  
    document.getElementById("output-additional").innerText = `Location: ${city}, ${state}, ${country}\nGitHub: ${github}\nLinkedIn: ${linkedin}`;
  
    // Handle profile picture upload
    const profilePicInput = document.getElementById("profilePicInput");
    const profilePicOutput = document.getElementById("output-profilePic");
    if (profilePicInput.files && profilePicInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePicOutput.src = e.target.result;
      };
      reader.readAsDataURL(profilePicInput.files[0]);
    }
  
    // Show the resume output section
    document.getElementById("resumeOutput").style.display = "block";
  });
  