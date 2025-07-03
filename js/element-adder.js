window.onload = function () {
    const codesToLoad = ["my-header", "my-footer", "my-section_shipping"];

    codesToLoad.forEach(function (elementId) {
        const filePath = "../" + elementId + ".html";

        fetch(filePath)
            .then(function (response) {
                return response.text();
            })
            .then(function (htmlContent) {
                document.getElementById(elementId).innerHTML = htmlContent;
                //header-scripts_start
                if (elementId === "my-header") {
                    const scriptPath = ["js/drop-down_menu_opener.js", "js/timer_counter.js"]
                    scriptPath.forEach(function (path) {
                        const headerScript = document.createElement("script");
                        headerScript.src = path;
                        document.body.appendChild(headerScript);
                    });
                }//header-scripts_end
                //footer-scripts_start 
                else if(elementId === "my-footer"){
                    const footerScript = document.createElement("script");
                    footerScript.src = "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js";
                    footerScript.onload = function(){
                        AOS.init();
                    };

                    document.body.appendChild(footerScript);
                }//footer-scripts_end
            });
    });
};