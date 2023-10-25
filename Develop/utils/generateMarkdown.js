// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if 
  (data.license === 'Apache 2.0') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  } else if
  (data.license === 'GPL 3.0') {
    return 'https://img.shields.io/badge/License-GPL%203.0-blue.svg'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if 
  (data.license === 'Apache 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if
  (data.license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'None') {
    return '';
  }
  const licenseBadge = renderLicenseBadge(data);
  const licenseLink = renderLicenseLink(data)
  return `This project is licensed under the [${licenseBadge}] (${licenseLink}) - see the [${licenseBadge}] License file for details.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ![Alt text](/${data.link})


  # Description
  ${data.motivation}
  ${data.build}  
  ${data.problem}
  ${data.learn}
  
  # Installation
  ${data.install}
  
  # Usage
  ${data.usage}
  
  # Credits
  ${data.credit}  
  
  # License
  ${renderLicenseSection(data)}.
  
  # Deployed link
  ${data.deploy} `
;
}

module.exports = generateMarkdown;
