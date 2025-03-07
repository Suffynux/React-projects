    const root = document.querySelector(".root");

    function createElement(element , container) {
        // const domElement = document.createElement(element.type);
        // domElement.innerHTML = element.childern;
        // domElement.setAttribute("href" , element.url.href);
        // domElement.setAttribute("target" , element.url.target);
        // container.appendChild(domElement);

        const domElement = document.querySelector(".root");
        domElement.innerHTML = element.childern;
    } 

    const reactElement = {
        type : "a",
        url : {
            href : "google.com",
            target : "_blank"
        },
        childern : "Click me to visit google"
    }

    createElement(reactElement , root)