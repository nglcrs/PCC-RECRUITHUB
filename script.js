// This function makes one carousel work.
// We give it the id of the carousel section: "jobs" or "academics".
function setupCarousel(id) {
  const slides = document.querySelectorAll("#" + id + " .slide");
  const nextButtons = document.querySelectorAll("#" + id + " .next");
  const prevButtons = document.querySelectorAll("#" + id + " .prev");
  let currentSlide = 0; // the slide we are showing right now (0 = first)

  // Show the slide with the given number
  function showSlide(number) {
    slides[currentSlide].classList.remove("active"); // hide the old slide

    // go back to the start / end if we go past the last / first slide
    if (number >= slides.length) {
      number = 0;
    }
    if (number < 0) {
      number = slides.length - 1;
    }

    currentSlide = number;
    slides[currentSlide].classList.add("active"); // show the new slide
  }

  // Go through each "next" button and make it show the next slide
  nextButtons.forEach(function (button) {
    button.onclick = function () {
      showSlide(currentSlide + 1);
    };
  });

  // Go through each "previous" button and make it show the previous slide
  prevButtons.forEach(function (button) {
    button.onclick = function () {
      showSlide(currentSlide - 1);
    };
  });
}

// Turn on both carousels
setupCarousel("jobs");
setupCarousel("academics");

function goToLogin() {
      document.getElementById('homePage').style.display = 'none';
      document.getElementById('loginWrapper').style.display = 'flex';
      document.querySelector('.left-bg').style.display = 'block';
      document.querySelector('.right-overlay').style.display = 'flex';
      document.getElementById('selectionScreen').style.display = 'flex';
      document.getElementById('applicantFormScreen').style.display = 'none';
      document.getElementById('adminFormScreen').style.display = 'none';
      document.getElementById('forgotPasswordScreen').style.display = 'none';
      document.getElementById('changePasswordScreen').style.display = 'none';
    }
    function showAdminForm() {
      document.getElementById('selectionScreen').style.display = 'none';
      document.getElementById('applicantFormScreen').style.display = 'none';
      document.getElementById('adminFormScreen').style.display = 'flex';
      document.getElementById('forgotPasswordScreen').style.display = 'none';
      document.getElementById('changePasswordScreen').style.display = 'none';
    }
    function showApplicantForm() {
      document.getElementById('selectionScreen').style.display = 'none';
      document.getElementById('applicantFormScreen').style.display = 'flex';
      document.getElementById('adminFormScreen').style.display = 'none';
      document.getElementById('forgotPasswordScreen').style.display = 'none';
      document.getElementById('changePasswordScreen').style.display = 'none';
    }
    function goBack() {
      document.getElementById('selectionScreen').style.display = 'flex';
      document.getElementById('applicantFormScreen').style.display = 'none';
      document.getElementById('adminFormScreen').style.display = 'none';
      document.getElementById('forgotPasswordScreen').style.display = 'none';
      document.getElementById('changePasswordScreen').style.display = 'none';
    }
    function applicantLogout() {
      document.getElementById('applicantDashboard').style.display = 'none';
      document.getElementById('loginWrapper').style.display = 'flex';
      goBack();
    }
    function adminLogout() {
      document.getElementById('adminDashboard').style.display = 'none';
      document.getElementById('loginWrapper').style.display = 'flex';
      goBack();
    }
    const valid_admin = "admin";
    const valid_admin_email = "admin@gmail.com";
    const valid_password = "admin123";
    
    function LoginAdmin() {
      const fullname = document.getElementById('admin-fullname').value;
      const email = document.getElementById('admin-email').value;
      const password = document.getElementById('admin-password').value;
      if (fullname === valid_admin && email === valid_admin_email && password === valid_password) {
        alert("Admin login successful!");
        document.getElementById('loginWrapper').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'flex';
        showAdminTab('dashboard');
      } else {
        alert("Invalid admin credentials. Please try again.");
      }
    }
    const valid_applicant = "participant";
    const valid_applicant_email = "participant@gmail.com";
    const valid_applicant_password = "applicant123";
    
    function LoginApplicant() {
      const fullname = document.getElementById('applicant-fullname').value;
      const email = document.getElementById('applicant-email').value;
      const password = document.getElementById('applicant-password').value;
      if (fullname === valid_applicant && email === valid_applicant_email && password === valid_applicant_password) {
        alert("Applicant login successful!");
        document.getElementById('loginWrapper').style.display = 'none';
        document.getElementById('applicantDashboard').style.display = 'flex';
      } else {
        alert("Invalid applicant credentials. Please try again.");
      }
    }
    function ForgotPassword() {
      document.getElementById('selectionScreen').style.display = 'none';
      document.getElementById('applicantFormScreen').style.display = 'none';
      document.getElementById('adminFormScreen').style.display = 'none';
      document.getElementById('forgotPasswordScreen').style.display = 'flex';
      document.getElementById('changePasswordScreen').style.display = 'none';
    }
    
    const valid_emails = [valid_admin_email, valid_applicant_email];
    
    function SendResetLink() {
      const email = document.getElementById('forgot-email').value;
      if (valid_emails.includes(email)) {
        alert("Password reset link sent! Please check your email.");
        document.getElementById('forgotPasswordScreen').style.display = 'none';
        document.getElementById('changePasswordScreen').style.display = 'flex';
      } else {
        alert("This email is not registered.");
      }
    }
    
    function ChangePassword() {
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      if (newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
          alert("Password changed successfully!");
          goBack();
        } else {
          alert("Passwords do not match. Please try again.");
        }
      } else {
        alert("Please fill in both password fields.");
      }
    }
    function showApplicantTab(tabName) {
      document.getElementById('applicant-tab-home').style.display = 'none';
      document.getElementById('applicant-tab-vacancies').style.display = 'none';
      document.getElementById('applicant-tab-applications').style.display = 'none';
      document.getElementById('applicant-tab-documents').style.display = 'none';
      document.getElementById('applicant-tab-notifications').style.display = 'none';
      document.getElementById('applicant-tab-profile').style.display = 'none';
      document.getElementById('applicant-nav-home').classList.remove('active');
      document.getElementById('applicant-nav-vacancies').classList.remove('active');
      document.getElementById('applicant-nav-applications').classList.remove('active');
      document.getElementById('applicant-nav-documents').classList.remove('active');
      document.getElementById('applicant-nav-notifications').classList.remove('active');
      document.getElementById('applicant-nav-profile').classList.remove('active');
      document.getElementById('applicant-tab-' + tabName).style.display = 'block';
      document.getElementById('applicant-nav-' + tabName).classList.add('active');
    }
    function showAdminTab(tabName) {
      document.getElementById('admin-tab-dashboard').style.display = 'none';
      document.getElementById('admin-tab-management').style.display = 'none';
      document.getElementById('admin-tab-applicants').style.display = 'none';
      document.getElementById('admin-tab-interviews').style.display = 'none';
      document.getElementById('admin-tab-notifications').style.display = 'none';
      document.getElementById('admin-tab-profile').style.display = 'none';
      document.getElementById('admin-nav-dashboard').classList.remove('active');
      document.getElementById('admin-nav-management').classList.remove('active');
      document.getElementById('admin-nav-applicants').classList.remove('active');
      document.getElementById('admin-nav-interviews').classList.remove('active');
      document.getElementById('admin-nav-notifications').classList.remove('active');
      document.getElementById('admin-nav-profile').classList.remove('active');
      document.getElementById('admin-tab-' + tabName).style.display = 'block';
      document.getElementById('admin-nav-' + tabName).classList.add('active');
      
      if (tabName === 'management') {
        displayPositions();
        displayArchived();
      }
      if (tabName === 'applicants') {
        displayApplicants();
      }
    }
    
    var savedPositions = localStorage.getItem("pcc_positions_db");
    var positions;
    if (savedPositions == null) {
      positions = [
        {
          title: "Payroll Clerk",
          department: "Finance",
          status: "Active",
          description: "Manages daily employee payment processes and payroll records.",
          requirements: "Resume, Application Letter, BSA/Accounting Diploma",
          deadline: "2026-11-15"
        },
        {
          title: "Administrative Assistant",
          department: "Admin",
          status: "Active",
          description: "Supports daily office operations and schedules.",
          requirements: "Resume, Application Letter",
          deadline: "2026-11-18"
        },
        {
          title: "HR Supervisor",
          department: "HR",
          status: "Active",
          description: "Oversees hiring, onboarding, and staff management.",
          requirements: "Resume, Application Letter, HR Experience Certificate",
          deadline: "2026-11-20"
        },
        {
          title: "Training Manager",
          department: "Training",
          status: "Active",
          description: "Plans, organizes, and leads staff training programs.",
          requirements: "Resume, Application Letter, Training Portfolio",
          deadline: "2026-11-22"
        },
        {
          title: "HR Information System Analyst",
          department: "IT",
          status: "Active",
          description: "Manages and maintains HR digital systems and databases.",
          requirements: "Resume, Application Letter, IT/CS Diploma",
          deadline: "2026-11-25"
        }
      ];
      localStorage.setItem("pcc_positions_db", JSON.stringify(positions));
    } else {
      positions = JSON.parse(savedPositions);
    }
    var editIndex = -1;
    
    function displayPositions() {
      var table = "";
      for (var i = 0; i < positions.length; i++) {
        table += "<tr>";
        table += "<td>" + positions[i].title + "</td>";
        table += "<td><button class='btn-status-active'>" + positions[i].status + "</button></td>";
        table += "<td><button class='btn-edit' onclick='editPosition(" + i + ")'>Edit</button></td>";
        table += "<td><button class='btn-delete' onclick='deletePosition(" + i + ")'>Delete</button></td>";
        table += "<td><button class='btn-archive' onclick='archivePosition(" + i + ")'>Archive</button></td>";
        table += "</tr>";
      }
      document.getElementById("posTableBody").innerHTML = table;
    }
    
    function openAddForm() {
      editIndex = -1;
      clearForm();
    }
    
    function editPosition(index) {
      editIndex = index;
      
      document.getElementById("formJobTitle").value = positions[index].title;
      document.getElementById("formDept").value = positions[index].department;
      document.getElementById("formDesc").value = positions[index].description || "";
      document.getElementById("formReq").value = positions[index].requirements || "";
      document.getElementById("deadlineInput").value = positions[index].deadline || "";
    }
    
    function savePosition() {
      var title = document.getElementById("formJobTitle").value;
      var dept = document.getElementById("formDept").value;
      var desc = document.getElementById("formDesc").value;
      var req = document.getElementById("formReq").value;
      var deadline = document.getElementById("deadlineInput").value;
      
      if (!title || !dept || !desc || !req) {
        alert("Please fill in all fields.");
        return;
      }
      
      if (editIndex === -1) {
        positions.push({
          title: title,
          department: dept,
          description: desc,
          requirements: req,
          status: "Active",
          deadline: deadline
        });
      } else {
        positions[editIndex].title = title;
        positions[editIndex].department = dept;
        positions[editIndex].description = desc;
        positions[editIndex].requirements = req;
        positions[editIndex].deadline = deadline;
        editIndex = -1;
      }
      
      localStorage.setItem("pcc_positions_db", JSON.stringify(positions));
      displayPositions();
      clearForm();
      alert("Position saved successfully! ✅");
    }
    
    function clearForm() {
      editIndex = -1;
      document.getElementById("formJobTitle").value = "";
      document.getElementById("formDept").value = "";
      document.getElementById("formDesc").value = "";
      document.getElementById("formReq").value = "";
      document.getElementById("deadlineInput").value = "";
    }
    
    function deletePosition(index) {
      if (confirm("Are you sure you want to delete this position?")) {
        positions.splice(index, 1);
        localStorage.setItem("pcc_positions_db", JSON.stringify(positions));
        displayPositions();
      }
    }
    
    var savedArchived = localStorage.getItem("pcc_archived_db");
    var archived = [];
    if (savedArchived != null) {
      archived = JSON.parse(savedArchived);
    }
    
    function archivePosition(index) {
      archived.push(positions[index]);
      positions.splice(index, 1);
      
      localStorage.setItem("pcc_positions_db", JSON.stringify(positions));
      localStorage.setItem("pcc_archived_db", JSON.stringify(archived));
      
      displayPositions();
      displayArchived();
    }
    
    function displayArchived() {
      var list = "";
      for (var i = 0; i < archived.length; i++) {
        list += "<p style='padding:0.5rem 0; border-bottom:1px solid #eee;'>";
        list += "<strong>" + archived[i].title + "</strong> — " + (archived[i].department || "No Department");
        list += " <button class='btn-unarchive' onclick='unarchivePosition(" + i + ")'>Unarchive</button>";
        list += "</p>";
      }
      var archivedDiv = document.getElementById("history-archived");
      if (archivedDiv) {
        archivedDiv.innerHTML = list || "<p style='color:#888;'>No archived positions yet.</p>";
      }
    }
    
    function unarchivePosition(index) {
      positions.push(archived[index]);
      archived.splice(index, 1);
      
      localStorage.setItem("pcc_positions_db", JSON.stringify(positions));
      localStorage.setItem("pcc_archived_db", JSON.stringify(archived));
      
      displayPositions();
      displayArchived();
    }

    function showHistoryTab(tabName) {
      var tabs = document.querySelectorAll('.hist-tab');
      tabs.forEach(tab => tab.classList.remove('active'));
      
      event.target.classList.add('active');
      
      document.getElementById('history-all').style.display = 'none';
      document.getElementById('history-archived').style.display = 'none';
      
      if (tabName === 'all') {
        document.getElementById('history-all').style.display = 'block';
      } else {
        displayArchived();
        document.getElementById('history-archived').style.display = 'block';
      }
    }
    
    var savedApplicants = localStorage.getItem("pcc_applicants_db");
    var applicants;
    if (savedApplicants == null) {
      applicants = [
        {id: "067", name: "Sophia Salamila", position: "Admissions Officer", date: "Oct 8, 2025", status: "Pending"},
        {id: "135", name: "Maria Lovindino", position: "School Nurse", date: "Aug 27, 2025", status: "Pending"},
        {id: "162", name: "Niekaella Gumbila", position: "College Professor", date: "Dec 27, 2026", status: "Pending"},
        {id: "107", name: "Camille Camilo", position: "Registrar Staff", date: "May 22, 2024", status: "Pending"},
        {id: "143", name: "Genevieve Maniac", position: "Cashier", date: "Mar 17, 2025", status: "Pending"},
        {id: "101", name: "Elene Velez", position: "Accounting Staff", date: "Jan 20, 2025", status: "Pending"},
        {id: "094", name: "Jovic Romero", position: "Guidance Counselor", date: "Oct 23, 2024", status: "Pending"},
        {id: "151", name: "Steffy Gumbila", position: "JHS Teacher", date: "Apr 01, 2024", status: "Pending"},
        {id: "102", name: "Kyree Pangantion", position: "Student Nurse", date: "Jul 06, 2026", status: "Pending"},
        {id: "109", name: "Princess Arandia", position: "MAPEH Teacher", date: "Nov 11, 2025", status: "Pending"},
        {id: "156", name: "Anne Capistrano", position: "College Professor", date: "Feb 18, 2026", status: "Pending"},
        {id: "199", name: "Angelica Rose", position: "IT Staff", date: "June 5, 2025", status: "Pending"},
        {id: "078", name: "Myles Esgana", position: "Psychometrician", date: "Sept 19, 2025", status: "Pending"}
      ];
      localStorage.setItem("pcc_applicants_db", JSON.stringify(applicants));
    } else {
      applicants = JSON.parse(savedApplicants);
    }
    
    function displayApplicants() {
      var table = "";
      for (var i = 0; i < applicants.length; i++) {
        table += "<tr>";
        table += "<td>" + applicants[i].id + "</td>";
        table += "<td>" + applicants[i].name + "</td>";
        table += "<td>" + applicants[i].position + "</td>";
        table += "<td class='date-col'>" + applicants[i].date + "</td>";
        table += "<td class='status-buttons-col'>";
        table += "<button class='btn-edit-yellow'>Edit</button>";
        table += "<button class='btn-details-green' onclick='showDetails(" + i + ")'>View Details</button>";
        table += "</td>";
        table += "</tr>";
      }
      document.getElementById("applicantTableBody").innerHTML = table;
    }
    
    function showDetails(index) {
      var app = applicants[index];
      document.getElementById("selectedName").innerText = app.name;
      document.getElementById("selectedId").innerText = "Applicant ID: " + app.id;
    }
    
    showAdminTab('dashboard');