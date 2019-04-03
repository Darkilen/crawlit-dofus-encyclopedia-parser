const inquirer = require('inquirer');
const fs = require('fs');
const {firstCategory, page, weapon, equipment, resumeQuestion} = require('../conf/questions');

/**
 * @param getCategory {Function} [Required]
 */
function resume(getCategory) {
    return inquirer.prompt(resumeQuestion).then(answers => {
        if (answers.resume === 'yes') return answers.resume;
        else fs.unlinkSync('./data/links/resume.json');
        return getCategory(false);
    });
}

function initial() {
    return inquirer.prompt(firstCategory).then(answers => {
        return switchCategory(answers);
    })
}

/**
 * @param language {String} [Required]
 * @param game {String} [Required]
 * @param category {String} [Required]
 */
function switchCategory({language, game, category}) {
    switch (category) {
        case 'equipment':
            return standardCategory(language, game, equipment);
        case 'weapon':
            return standardCategory(language, game, weapon);
        default:
            return standardCategory(language, game, page, category);
    }
}

/**
 * @param language {String} [Required]
 * @param game {String} [Required]
 * @param prompt {Array} [Required]
 * @param category {String}
 */
function standardCategory(language, game, prompt, category = undefined) {
    return inquirer.prompt(prompt).then(answers => {
        answers.language = language;
        answers.game = game;
        if (category) answers.category = category; // override answers.category when category is provide
        return JSON.stringify(answers, null, '  ');
    });
}


module.exports = { resume, initial };