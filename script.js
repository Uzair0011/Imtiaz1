var _a, _b, _c;
// Form and Preview Elements
var form = document.getElementById('cvForm');
var profilePicInput = document.getElementById('profile-pic');
var previewProfilePic = document.getElementById('preview-profile-pic');
var previewName = document.getElementById('preview-name');
var previewTitle = document.getElementById('preview-title');
var previewEmail = document.getElementById('preview-email');
var previewPhone = document.getElementById('preview-phone');
var previewLinkedIn = document.getElementById('preview-linkedin');
var previewGitHub = document.getElementById('preview-github');
var previewAbout = document.getElementById('preview-about');
var experienceSection = document.getElementById('preview-experience');
var skillsSection = document.getElementById('preview-skills');
var experiences = [];
var skills = [];
// Event Listeners for Adding Experience and Skill
(_a = document.getElementById('add-experience')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var jobTitle = prompt('Enter Job Title:');
    var company = prompt('Enter Company:');
    var duration = prompt('Enter Duration:');
    var description = prompt('Enter Description:');
    if (jobTitle && company && duration && description) {
        experiences.push({ jobTitle: jobTitle, company: company, duration: duration, description: description });
        updatePreview();
    }
});
(_b = document.getElementById('add-skill')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var skillName = prompt('Enter Skill:');
    if (skillName) {
        skills.push({ name: skillName });
        updatePreview();
    }
});
// Handle Profile Picture Upload
profilePicInput.addEventListener('change', function () {
    var _a;
    var file = (_a = this.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            previewProfilePic.src = reader_1.result;
            previewProfilePic.style.display = 'block';
        };
        reader_1.readAsDataURL(file);
    }
});
// Update Live Preview based on form inputs
form.addEventListener('input', updatePreview);
function updatePreview() {
    // Update text fields
    previewName.textContent = document.getElementById('name').value || "Your Name";
    previewTitle.textContent = document.getElementById('title').value || "Your Job Title";
    previewEmail.textContent = "Email: ".concat(document.getElementById('email').value);
    previewPhone.textContent = "Phone: ".concat(document.getElementById('phone').value);
    previewLinkedIn.textContent = "LinkedIn: ".concat(document.getElementById('linkedin').value);
    previewGitHub.textContent = "GitHub: ".concat(document.getElementById('github').value);
    previewAbout.textContent = document.getElementById('about').value;
    // Update Experience section
    experienceSection.innerHTML = experiences.map(function (experience) { return "\n        <li>\n            <strong>".concat(experience.jobTitle, "</strong> at ").concat(experience.company, " (").concat(experience.duration, ")\n            <p>").concat(experience.description, "</p>\n        </li>\n    "); }).join('');
    // Update Skills section
    skillsSection.innerHTML = skills.map(function (skill) { return "\n        <li>".concat(skill.name, "</li>\n    "); }).join('');
}
// Download CV as PDF (optional functionality)
(_c = document.getElementById('download-cv')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    // Implement PDF download logic here (optional)
    alert("Download as PDF functionality can be added!");
});
