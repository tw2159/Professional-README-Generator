const fs = require("fs");

function renderLicenseBadge(license) {
  let badge = "[![badge]";

  switch(license) {
    case "Apache 2.0":
      badge += "(https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "Boost 1.0":
      badge += "(https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
      break;
    case "GNU AGPLv3":
      badge += "(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";
      break;
    case "GNU GPLv3":
      badge += "(https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";
      break;
    case "MIT":
      badge += "(https://img.shields.io/badge/License-MIT-red.svg)]";
      break;
    case "Unlicense":
      badge += "(https://img.shields.io/badge/License-Unlicense-blue.svg)]";
      break;
    default:
      break;
  }

  return badge;
}

function renderLicenseLink(license) {
  switch(license) {
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "Boost 1.0":
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    case "GNU AGPLv3":
      return "(https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU GPLv3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Unlicense":
      return "(http://unlicense.org)";
    default:
      break;
  }
}

function renderLicenseSection(license, name) {
  let currentDate = new Date();
  let contents = fs.readFileSync(`./licenses/${license}.txt`, 'utf8');

  contents = contents.replace("[yyyy]", currentDate.getFullYear());
  contents = contents.replace("[name of copyright owner]", name);

  return contents;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installations](#installations)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution)
* [Test](#test)

## Installations

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

\`\`\`md
${renderLicenseSection(data.license, data.name)}
\`\`\`

## Contribution Guidelines

${data.contribution}

## Tests

${data.test}


## Questions

Please visit my [GitHub site](https://github.com/${data.github}).

You can also contact me via e-mail (${data.email}) if you have additional questions.
`;
}

module.exports = generateMarkdown;
