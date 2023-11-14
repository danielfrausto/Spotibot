    playSecsBeforeSkip = 35;
    playerControls = document.getElementsByClassName('player-controls__right')[0];
    elapsedTime = document.getElementsByClassName('playback-bar__progress-time-elapsed')[0];
    skipButton = playerControls.getElementsByTagName('button')[0];
    setInterval(function() {

        //console.log(elapsedTime);
        time = elapsedTime.innerText.split(':');
        timeBlocks = time.length;
        //console.log(time.length);
        skip = false;

        switch (timeBlocks) {
            case 3:
                if (time[0] > 0) {
                    skip = true;
                }
                if (time[1] > 0) {
                    skip = true;
                }
                if (time[2] > playSecsBeforeSkip) {
                    skip = true;
                }
                break;
            case 2:
                if (time[0] > 0) {
                    skip = true;
                }
                if (time[1] > playSecsBeforeSkip) {
                    skip = true;
                }
                break;

            default:
                break;
        }


        if (skip == true) {
            console.log('skip');
            skipButton.click();
        }


    }, 1000)
