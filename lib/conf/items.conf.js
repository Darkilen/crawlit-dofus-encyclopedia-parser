const getEquipments = require('../item-crawler/getEquipments').getEquipments;
const getWeapons = require('../item-crawler/getWeapons').getWeapons;
const getSets = require('../item-crawler/getSets').getSets;
const getMounts = require('../item-crawler/getMounts').getMounts;
const getPets = require('../item-crawler/getPets').getPets;
const getResources = require('../item-crawler/getResources').getResources;
const getMonsters = require('../item-crawler/getMonsters').getMonsters;
const getConsumables = require('../item-crawler/getConsumables').getConsumables;
const getProfessions = require('../item-crawler/getProfessions').getProfessions;
const getHarnesses = require('../item-crawler/getHarnesses').getHarnesses;
const getClasses = require('../item-crawler/getClasses').getClasses;
const getIdols = require('../item-crawler/getIdols').getIdols;

// Only used here and in ../cli-view/modules/inquirer.js
const DEFAULT = module.exports.DEFAULT = 0;
const WEAPONS = module.exports.WEAPONS = 1;
const EQUIPMENTS = module.exports.EQUIPMENTS = 2;

module.exports.data = {
	'categories': [
		{
			'key': 'weapons',
			'lang': {
				'fr': 'armes',
				'en': 'weapons'
			},
			'function': getWeapons,
            'questionType': WEAPONS
		},
		{
			'key': 'equipments',
			'lang': {
				'fr': 'equipements',
				'en': 'equipment'
			},
			'function': getEquipments,
            'questionType': EQUIPMENTS
		},
		{
			'key': 'sets',
			'lang': {
				'fr': 'panoplies',
				'en': 'sets'
			},
			'function': getSets,
            'questionType': DEFAULT
		},
		{
			'key': 'mounts',
			'lang': {
				'fr': 'montures',
				'en': 'mounts'
			},
			'function': getMounts,
            'questionType': DEFAULT
		},
		{
			'key': 'pets',
			'lang': {
				'fr': 'familiers',
				'en': 'pets'
			},
			'function': getPets,
            'questionType': DEFAULT
		},
		{
			'key': 'resources',
			'lang': {
				'fr': 'ressources',
				'en': 'resources'
			},
			'function': getResources,
            'questionType': DEFAULT
		},
		{
			'key': 'consumables',
			'lang': {
				'fr': 'consommables',
				'en': 'consumables'
			},
			'function': getConsumables,
            'questionType': DEFAULT
		},
		{
			'key': 'professions',
			'lang': {
				'fr': 'metiers',
				'en': 'professions'
			},
			'function': getProfessions,
            'questionType': DEFAULT
		},
		{
			'key': 'monsters',
			'lang': {
				'fr': 'monstres',
				'en': 'monsters'
			},
			'function': getMonsters,
            'questionType': DEFAULT
		},
		{
			'key': 'harnesses',
			'lang': {
				'fr': 'harnachements',
				'en': 'harnesses'
			},
			'function': getHarnesses,
            'questionType': DEFAULT
		},
		{
			'key': 'classes',
			'lang': {
				'fr': 'classes',
				'en': 'classes'
			},
			'function': getClasses,
            'questionType': DEFAULT
		},
		{
			'key': 'idols',
			'lang': {
				'fr': 'idoles',
				'en': 'idols'
			},
			'function': getIdols,
            'questionType': DEFAULT
		}
	]
};
