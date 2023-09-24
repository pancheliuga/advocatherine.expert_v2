module.exports = {
	url: process.env.URL || 'https://advocatherine.expert',
	domain: 'advocatherine.expert',
	siteName: 'Адвокат Панчелюга Катерина',
	siteDescription: 'Персональний сайт адвоката Панчелюги Катерини Миколаївни',
	siteType: 'Person', // schema
	locale: 'uk_UA',
	lang: 'uk',
	skipContent: 'Перейти до контенту',
	author: 'Панчелюга Катерина Миколаївна',
	authorEmail: 'advocate.rivne@gmail.com',
	authorWebsite: '',
	themeColor: '#00373A', //  Manifest: defines the default theme color for the application
	themeBgColor: '#F5F5F5', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
	meta_data: {
		opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
		opengraph_default_alt: 'Персональний сайт адвоката Панчелюги Катерини Миколаївни', // alt text for default meta image
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
		mobileDisplay: '+38 097 133 68 51',
		mobileCall: ' +380976450174',
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
