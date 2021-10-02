async function loadNewsPreview() {
    fetchdata("news");
    fetchdata("trade")
}

async function fetchdata(view) {
    
    const response = await fetch("/preview/" + view)
    const data = await response.json();

    console.log("data for preview: ")
    console.log(data)

    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] != null) {
            const div = document.createElement("div")
            div.setAttribute("class", "" + view + "-pre-view")
            document.getElementById("show-" + view + "-preview").append(div)

            const header = document.createElement("h4")
            header.textContent = data[i].content.header
            div.append(header)

            const image = document.createElement("img");
            if (image.getAttribute('src') != "undefined") {
                image.src = data[i].content.image;
                if (image.getAttribute('src') != "data:,") {
                    div.append(image);
                }
            }
        }
        else {
            count++;
        }
    }

    if (count == 3) {
        const div = document.createElement("div")
        div.setAttribute("class", "" + view + "-pre-view")
        document.getElementById("show-" + view + "-preview").append(div)

        const header = document.createElement("h4")
        header.textContent = "Es scheint einige Schwirigkeiten zu geben, wir arbeiten dran"
        div.append(header)
    }
}