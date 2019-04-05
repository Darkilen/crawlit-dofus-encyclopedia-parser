const inquirer = require('./modules/inquirer');
const commander = require('./modules/commander');

/**
 * 
 * @param ifResume {Boolean}
 * @return {Promise<any>}
 */
function getCategory(ifResume = false) {
	if (ifResume) {
	    return inquirer.resume(getCategory);
	}
	else {
		return commander() || inquirer.initial()
	}
}

exports.getCategory = getCategory;