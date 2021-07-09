INTRO_DIRECTORY =./introTopics/examples
APP_DIRECTORY = super-mega-app

install_intro:
	yarn --cwd ${INTRO_DIRECTORY}/whatIsAComponent/${APP_DIRECTORY} install
	yarn --cwd ${INTRO_DIRECTORY}/componentState/${APP_DIRECTORY} install
	yarn --cwd ${INTRO_DIRECTORY}/componentStyling/${APP_DIRECTORY} install
	yarn --cwd ${INTRO_DIRECTORY}/testingAComponent/${APP_DIRECTORY} install

run_intro_component:
	yarn --cwd ${INTRO_DIRECTORY}/whatIsAComponent/${APP_DIRECTORY} start

run_intro_state:
	yarn --cwd ${INTRO_DIRECTORY}/componentState/${APP_DIRECTORY} start

run_intro_styling:
	yarn --cwd ${INTRO_DIRECTORY}/componentStyling/${APP_DIRECTORY} start

run_intro_testing:
	yarn --cwd ${INTRO_DIRECTORY}/testingAComponent/${APP_DIRECTORY} start
