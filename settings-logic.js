function exe() {
    console.log("Ive Been Clicked");

    const content = document.getElementById("mytext").value;
    console.log(content);

    const data = { content };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
    const response = fetch("/test", options);
};