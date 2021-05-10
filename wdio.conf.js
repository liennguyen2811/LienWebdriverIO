exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './src/TestCases/LoginTest.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        sessionName:        'Automation test session',
        sessionDescription: 'This is an example for Android web', 
        deviceOrientation:  'portrait',  
        captureScreenshots: true, 
        app:        '/Users/liennth7/Documents/Lien/Repository/myup-mobile-automation/src/test/app/android/B2B.apk',
        deviceName:         'Galaxy A10',
        udid:               'R9JN1003YDJ',
        platformName:       'Android',
        chromeOptions:      {w3c : false}
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://newtours.demoaut.com/mercurywelcome.php',
    framework: 'mocha',
    reporters: ['spec'],
    ui: 'bdd',
    timeout: 60000
}
