const auto_sample = document.querySelector('.auto-sample');
const panel_sample = document.querySelector('.panel-sample');
const transport_sample = document.querySelector('.transport-sample');
        function xhr(url,place) {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = function () {
                if (this.status === 200) {
                    place.innerHTML = this.responseText;
                }
            };
            xhr.send();
        }
        xhr('../../pages/sample-work/ajax/automasion.html',auto_sample);
        xhr('../../pages/sample-work/ajax/switchboard.html',panel_sample);
        xhr('../../pages/sample-work/ajax/cctv.html',transport_sample);
        // xhr('../../pages/sample-work/ajax/automasion.html',auto_sample);