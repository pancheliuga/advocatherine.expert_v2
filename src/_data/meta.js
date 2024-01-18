module.exports = {
	url: process.env.URL || 'https://advocatherine.expert',
	domain: 'advocatherine.expert',
	siteName: 'Адвокат Катерина Панчелюга',
	siteDescription: 'Персональний сайт адвоката Катерини Панчелюги',
	siteType: 'Person', // schema
	locale: 'uk_UA',
	lang: 'uk',
	skipContent: 'Перейти до контенту',
	author: 'Катерина Панчелюга',
	authorEmail: 'advocate.rivne@gmail.com',
	authorWebsite: '',
	themeColor: '#00373A', //  Manifest: defines the default theme color for the application
	themeBgColor: '#F5F5F5', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
	meta_data: {
		opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
		opengraph_default_alt: 'Персональний сайт адвоката Катерини Панчелюги', // alt text for default meta image
		facebookDomainVerification: '6oll7rjffmlz7di60wxutdq9xsbkms', // Facebook Domain Verification code
		twitterSite: '',
		twitterCreator: '',
		mastodonProfile: ''
	},
	blog: {
		// this is for the rss feed
		name: 'Блог Адвоката Катерини Панчелюги',
		description: 'Мої дописи, публікації та статті на правову тематику'
	},
	address: {
		// edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
		firma: 'Адвокат Панчелюга Катерина Миколаївна',
		street: 'Паркова,2',
		city: 'Рівне',
		region: 'Рівненська область',
		country: 'Україна',
		zip: '33028',
		addressDisplay: 'м. Рівне, вул Паркова, 2',
		mobileDisplay: '+38 068 37 40 7 40',
		mobileCall: ' +380683740740',
		email: 'advocate.rivne@gmail.com',
		cif: ''
	},
	menu: {
		closedText: 'Menu'
	},
	banner: {
		title: 'Розлучення під час війни',
		url: '/blog/rozluchennya-pid-chas-voyennogo-stanu-chi-mozhlivo-ta-chi-yakosь-vidriznyayetьsya-vid-mirnogo-chasu/'
	}
};
