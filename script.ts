interface Experience {
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
}

interface Skill {
    name: string;
}

// Form and Preview Elements
const form = document.getElementById('cvForm') as HTMLFormElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const previewProfilePic = document.getElementById('preview-profile-pic') as HTMLImageElement;
const previewName = document.getElementById('preview-name') as HTMLElement;
const previewTitle = document.getElementById('preview-title') as HTMLElement;
const previewEmail = document.getElementById('preview-email') as HTMLElement;
const previewPhone = document.getElementById('preview-phone') as HTMLElement;
const previewLinkedIn = document.getElementById('preview-linkedin') as HTMLElement;
const previewGitHub = document.getElementById('preview-github') as HTMLElement;
const previewAbout = document.getElementById('preview-about') as HTMLElement;
const experienceSection = document.getElementById('preview-experience') as HTMLElement;
const skillsSection = document.getElementById('preview-skills') as HTMLElement;

let experiences: Experience[] = [];
let skills: Skill[] = [];

// Event Listeners for Adding Experience and Skill
document.getElementById('add-experience')?.addEventListener('click', () => {
    const jobTitle = prompt('Enter Job Title:');
    const company = prompt('Enter Company:');
    const duration = prompt('Enter Duration:');
    const description = prompt('Enter Description:');

    if (jobTitle && company && duration && description) {
        experiences.push({ jobTitle, company, duration, description });
        updatePreview();
    }
});

document.getElementById('add-skill')?.addEventListener('click', () => {
    const skillName = prompt('Enter Skill:');
    if (skillName) {
        skills.push({ name: skillName });
        updatePreview();
    }
});

// Handle Profile Picture Upload
profilePicInput.addEventListener('change', function () {
    const file = this.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            previewProfilePic.src = reader.result as string;
            previewProfilePic.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Update Live Preview based on form inputs
form.addEventListener('input', updatePreview);

function updatePreview() {
    // Update text fields
    previewName.textContent = (document.getElementById('name') as HTMLInputElement).value || "Your Name";
    previewTitle.textContent = (document.getElementById('title') as HTMLInputElement).value || "Your Job Title";
    previewEmail.textContent = `Email: ${(document.getElementById('email') as HTMLInputElement).value}`;
    previewPhone.textContent = `Phone: ${(document.getElementById('phone') as HTMLInputElement).value}`;
    previewLinkedIn.textContent = `LinkedIn: ${(document.getElementById('linkedin') as HTMLInputElement).value}`;
    previewGitHub.textContent = `GitHub: ${(document.getElementById('github') as HTMLInputElement).value}`;
    previewAbout.textContent = (document.getElementById('about') as HTMLTextAreaElement).value;

    // Update Experience section
    experienceSection.innerHTML = experiences.map(experience => `
        <li>
            <strong>${experience.jobTitle}</strong> at ${experience.company} (${experience.duration})
            <p>${experience.description}</p>
        </li>
    `).join('');

    // Update Skills section
    skillsSection.innerHTML = skills.map(skill => `
        <li>${skill.name}</li>
    `).join('');
}

// Download CV as PDF (optional functionality)
document.getElementById('download-cv')?.addEventListener('click', () => {
    // Implement PDF download logic here (optional)
    alert("Download as PDF functionality can be added!");
});
