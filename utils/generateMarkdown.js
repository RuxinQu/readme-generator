// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    markdown.push(`![badge](https://img.shields.io/badge/License-${license}-green.svg)`);
  }
  else {
    return '';
  }
}
function generateBadge(data) {
  const badge = `![badge](https://img.shields.io/github/languages/top/${data.username}/${data.reponame})`
  markdown.push(badge)
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return ''
  }
  else {
    if (license == 'MIT') {
      markdown.push('[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)');
    } else if (license == 'Apache_2.0') {
      markdown.push('[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)');
    } else{
      markdown.push('[https://www.gnu.org/licenses/gpl-3.0.txt](https://www.gnu.org/licenses/gpl-3.0.txt)');
    }
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const tableArr = []
function renderLicenseSection(license) {
  if (license !== 'None') {
    tableArr.push('- [License](#license)')
  } else {
    return '';
  }
}

function generateTitle(title) {
  markdown.push('# ' + title);
}

function generateDescription(description) {
  const descriptionEl = '## Description';
  markdown.push(`${descriptionEl}\n\n${description}`);
}

function generateTableOfContents(data) {
  const tableOfContents = '## Table of Contents';
  tableArr.push(tableOfContents)
  if (data.installation) {
    tableArr.push('- [Installation](#installation)')
  }
  tableArr.push('- [Usage](#usage)');
  if (data.credit) {
    tableArr.push('- [Credits](#credits)');
  }
  renderLicenseSection(data.license);
  if (data.contribute) {
    tableArr.push('- [Contributing Guidelines](#contributing-guidelines)')
  }
  if (data.test) {
    tableArr.push('- [Tests](#tests)')
  }
  tableArr.push('- [Questions](#questions)')
  markdown.push(tableArr.join('\n'))
}

function generateInstallation(installation) {
  if (installation) {
    const installationEl = '## Installation';
    markdown.push(`${installationEl}\n\n${installation}`);
  }
  else { return '' }
}

function generateUsage(usage) {
  const usageEl = '## Usage';
  // const screenshotDescription = 'Here\'s a screenshot of the project';
  // const screenshotPath = `![project screenshot](assets/images/${screenshot})`;
  markdown.push(`${usageEl}\n\n${usage}`);
}

function generateCredit(credit) {
  if (credit) {
    const creditEl = '## Credits';
    const collaboratorArr = credit.split(',').map(ele => ele.trim());
    let collaboratorStr = [];
    for (let x = 0; x < collaboratorArr.length; x++) {
      if (collaboratorArr[x].length > 0) {
        collaboratorStr += `- ${collaboratorArr[x]}\n`
      }
    }
    markdown.push(`${creditEl}\n\n${collaboratorStr}`);
  } else {
    return ''
  }
}

function generateLicense(license) {
  if (license !== 'None') {
    const licenseEl = '## License';
    markdown.push(`${licenseEl}\n\nThis project is under ${license} license`);
  } else {
    return ''
  }
}

function generateContribute(contribute) {
  if (contribute) {
    const contributeEl = '## Contributing guidelines';
    markdown.push(`${contributeEl}\n\n${contribute}`);
  }
}

function generateTest(test) {
  if (test) {
    const testEl = '## Tests';
    markdown.push(`${testEl}\n\n${test}`);
  }
}

function generateQuestion(username, email){
  const questionEl = `## Question
  My github profile: https://github.com/${username}\n
  Contact me via: ${email} if you have addition questions.`
  markdown.push(questionEl)
}

// TODO: Create a function to generate markdown for README
let markdown = [];
function generateMarkdown(data) {
  generateTitle(data.title);
  renderLicenseBadge(data.license);
  generateBadge(data);
  generateDescription(data.description);
  generateTableOfContents(data);
  generateInstallation(data.installation);
  generateUsage(data.usage);
  generateCredit(data.credit);
  generateLicense(data.license);
  renderLicenseLink(data.license)
  generateContribute(data.contribute);
  generateTest(data.test);
  generateQuestion(data.username,data.email)
  return markdown.join('\n\n');
}

module.exports = generateMarkdown;
