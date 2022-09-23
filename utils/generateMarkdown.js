// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = [];
  markdown.push('# ' + data.title);

  const description = '## Description';
  markdown.push(`${description}\n\n${data.description}`);

  const tableOfContents = '## Table of Contents';
  const tableList1 = '- [Installation](#installation)';
  const tableList2 = '- [Usage](#usage)';
  const tableList3 = '- [Credits](#credits)';
  const tableList4 = '- [License](#license)';
  markdown.push(`${tableOfContents}\n\n${tableList1}\n${tableList2}\n${tableList3}\n${tableList4}`);

  const installation = '## Installation'
  markdown.push(`${installation}\n\n${data.installation}`)

  const usage = '## Usage';
  const usageText = data.usage;
  const screenshotDescription = 'Here\'s a screenshot of the project'
  const screenshot = `![project screenshot](assets/images/${data.screenshot})`;
  markdown.push(`${usage}\n\n${usageText}\n\n${screenshotDescription}\n\n${screenshot}`)

  if (data.credit) {
    const credit = '## Credit';
    markdown.push(`${credit}\n\n${data.credit}`);
  }

  //license + bages
  if (data.contribute) {
    const contribute = '## Contribute';
    markdown.push(`${contribute}\n\n${data.contribute}`);
  }

  if (data.test) {
    const test = '## Tests';
    markdown.push(`${test}\n\n${data.test}`);
  }

  return markdown.join('\n\n');
}

module.exports = generateMarkdown;
