var mws398411 = {
    container: null,
    launchButton: null,
    puzzleTitle:"Value Integrity",
    body: document.getElementsByTagName('body')[0],
        construct:function(){
        //required for mobile safari
        document.addEventListener('touchstart', {});

        if(this.failed) {
            document.write('There was an error loading this puzzle.');
            return false;
        }
        if(!this.checkStyleSheet()) {
            // only load the stylesheet in once if there are multiple puzzles on the page
            document.write('<link id="mws-stylesheet" rel="stylesheet" href="https://mywordsearch.com/assets/css/iFrame.min.css">');
        }
        document.write('<div id="mws-398411" class="mws-container"></div>');
        setTimeout(function(){
            mws398411.container = document.getElementById('mws-398411');
            mws398411.createEmbed();
        }, 1000);
    },
    checkStyleSheet: function(){
        var stylesheet = document.getElementById('mws-stylesheet');
        if(stylesheet) {
            return true;
        } else {
            return false;
        }
    },
    createEmbed: function() {
        var title = document.createElement('div');
        title.className = 'mws-title';
        title.textContent = this.puzzleTitle;
        this.container.appendChild(title);

        this.launchButton = document.createElement('a');
                this.launchButton.addEventListener('click', function(){
            mws398411.launchPuzzle();

            setTimeout(function(){
                mws398411.launchButton.textContent = "Resume Puzzle";
            }, 2000); //give the iFrame time to load
        });
                this.launchButton.textContent = 'Get Started!';
        this.launchButton.className = 'mws-launch-button';
        this.container.appendChild(this.launchButton);

        var linkBackContainer = document.createElement('div');
        linkBackContainer.className = 'mws-link-back-container';
        linkBackContainer.textContent = 'Powered by ';

        var linkBack = document.createElement('a');
        linkBack.setAttribute('href', 'https://mywordsearch.com');
        linkBack.setAttribute('target', '_blank');
        linkBack.textContent = 'MyWordSearch.com';
        linkBack.className = 'mws-url';

        linkBackContainer.appendChild(linkBack);
        this.container.appendChild(linkBackContainer);

                    this.iframe = document.createElement('iframe');
            this.iframe.setAttribute('id', 'mws-iframe-398411');
            this.iframe.setAttribute('src', 'https://mywordsearch.com/mobile-puzzle/398411?iframe=1');
            this.iframe.className = 'mws-iframe';

            var modal = document.createElement('div');
            modal.setAttribute('id', 'mws-modal-398411');
            modal.className = 'mws-modal';

            var frameContainer = document.createElement('div');
            frameContainer.setAttribute('id', 'mws-modal-frame-container-398411');
            frameContainer.className = 'mws-frame-container';
            modal.appendChild(frameContainer); //append to the modal

            var closeButton = document.createElement('span');
            closeButton.className = 'mws-modal-close';
            closeButton.addEventListener('click', function(){
                mws398411.closePuzzle();
            })
            frameContainer.appendChild(closeButton);//append to the frameContainer

            document.body.insertBefore(modal, document.body.childNodes[0]);
            },
    launchPuzzle: function(){

        this.body.classList.toggle('mws-modal-open');

        this.modal = document.getElementById('mws-modal-398411');
        this.modal.classList.toggle('open');

        this.frameContainer = document.getElementById('mws-modal-frame-container-398411');

        var iFrameCheck = document.getElementById('mws-iframe-398411');
        if(!iFrameCheck) {
            this.frameContainer.appendChild(this.iframe);
        }
    },
    closePuzzle: function(){
        this.body.classList.toggle('mws-modal-open');
        this.modal.classList.toggle('open');
    }
    }
mws398411.construct();