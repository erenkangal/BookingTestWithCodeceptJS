import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://localhost:8000/',
      browser: 'chrome',
      windowSize: "1920x1200",
      desiredCapabilities: {
        acceptInsecureCerts: true,
        chromeOptions: {
          args: [
            '--ignore-certificate-errors',
            '--ignore-ssl-errors',
            //'--headless=new',
            '--disable-background-timer-throttling',
            '--disable-renderer-backgrounding',
            '--disable-backgrounding-occluded-windows',
          ]
        },
        'ms:edgeOptions': {
          args: [
            '--ignore-certificate-errors',
            '--ignore-ssl-errors',
            //'--headless=new',
            '--disable-background-timer-throttling',
            '--disable-renderer-backgrounding',
            '--disable-backgrounding-occluded-windows',
          ]
        }
      }
    }
  },
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['chrome', 'edge'],
    },
  },
  plugins: {
    stepByStepReport: {
      enabled: true
    },
    tryTo: {
      enabled: true,
    },
    autoDelay: {
      enabled: true
    },
  },
  include: {
    I: './steps_file'
  },
  name: 'webDriver'
}