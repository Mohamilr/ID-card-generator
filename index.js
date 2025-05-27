document.getElementById("idForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const department = document.getElementById("department").value
    const skill = document.getElementById("skill").value
    const photoInput = document.getElementById("photo");
  
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const deptRegex = /^[a-zA-Z\s]{2,}$/;
    const skillRegex = /^[a-zA-Z,\s]+$/;
  
    if (
      !nameRegex.test(name) ||
      !emailRegex.test(email) ||
      !deptRegex.test(department) ||
      !skillRegex.test(skill)
    ) {
      alert("Please fill out the form with valid information.");
      return;
    }
  
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayDepartment").textContent = department;
    document.getElementById("displaySkill").textContent = skill;
  
    const file = photoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("displayPhoto").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  
    document.getElementById("idCard").style.display = "flex";

    document.getElementById("idForm").reset();
  });
  