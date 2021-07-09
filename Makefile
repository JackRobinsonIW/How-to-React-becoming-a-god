INTRO_DIRECTORY =./introTopics/examples

install_intro:
	yarn --cwd ${INTRO_DIRECTORY}/whatIsAComponent install
	yarn --cwd ${INTRO_DIRECTORY}/componentState install
	yarn --cwd ${INTRO_DIRECTORY}/componentStyling install
	yarn --cwd ${INTRO_DIRECTORY}/testingAComponent install

run_intro_component:
	yarn --cwd ${INTRO_DIRECTORY}/whatIsAComponent start

run_intro_state:
	yarn --cwd ${INTRO_DIRECTORY}/componentState start

run_intro_styling:
	yarn --cwd ${INTRO_DIRECTORY}/componentStyling start

run_intro_testing:
	yarn --cwd ${INTRO_DIRECTORY}/testingAComponent start
