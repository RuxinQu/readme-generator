// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  //generate badge link https://img.shields.io/github/license/<Github-Username>/<Repository>
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function generateTitle(title) {
  const result = '# ' + title
  return result;
}

function generateDescription(description) {
  const descriptionEl = '## Description';
  const result = `${descriptionEl}\n\n${description}`;
  return result;
}

function generateTableOfContents(credit) {

  const tableOfContents = '## Table of Contents';
  const tableList1 = '- [Installation](#installation)';
  const tableList2 = '- [Usage](#usage)';
  const tableList3 = '- [Credits](#credits)';
  const tableList4 = '- [License](#license)';
  return credit ? `${tableOfContents}\n\n${tableList1}\n${tableList2}\n${tableList3}\n${tableList4}` :
    `${tableOfContents}\n\n${tableList1}\n${tableList2}\n${tableList4}`;
}

function generateInstallation(installation) {
  const installationEl = '## Installation';
  const result = `${installationEl}\n\n${installation}`;
  return result;
}

function generateUsage(usage, screenshot) {
  const usageEl = '## Usage';
  const screenshotDescription = 'Here\'s a screenshot of the project';
  const screenshotPath = `![project screenshot](assets/images/${screenshot})`;
  const result = `${usageEl}\n\n${usage}\n\n${screenshotDescription}\n\n${screenshotPath}`;
  return result;
}

function generateCredit(credit) {
  if (credit) {
    const creditEl = '## Credit';
    const collaboratorArr = credit.split(',').map(ele => ele.trim());
    let collaboratorStr = [];
    for (let x = 0; x < collaboratorArr.length; x++) {
      if (collaboratorArr[x].length > 0) {
        collaboratorStr += `- ${collaboratorArr[x]}\n`
      }
    }
    const result = `${creditEl}\n\n${collaboratorStr}`;
    return result;
  } else {
    return
  }
}

function generateContribute(contribute) {
  if (contribute) {
    const contributeEl = '## Contribute';
    const result = `${contributeEl}\n\n${contribute}`;
    return result;
  }
}

function generateTest(test) {
  if (test) {
    const testEl = '## Tests';
    const result = `${testEl}\n\n${test}`;
    return result;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = [];
  markdown.push(generateTitle(data.title));
  markdown.push(generateDescription(data.description));
  markdown.push(generateTableOfContents(data.credit));
  markdown.push(generateInstallation(data.installation));
  markdown.push(generateUsage(data.usage, data.screenshot));
  markdown.push(generateCredit(data.credit));
  markdown.push(generateContribute(data.contribute));
  markdown.push(generateTest(data.test));
  return markdown.join('\n\n');
}

module.exports = generateMarkdown;
