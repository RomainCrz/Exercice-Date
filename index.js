const prix = document.querySelector("#total");

function dateParser(chaine) {
    newDate = chaine.toISOString().split("T")[0];

    return newDate;
}

function calc() {
    let diffTime = Math.abs(
        new Date(end_date.value) - new Date(start_date.value)
    );
    console.log(diffTime / (3600 * 1000) / 24);
    return diffTime / (3600 * 1000) / 24;
}

let start = new Date();
start = dateParser(start);
start_date.value = start;
start_date.min = start;

let end = new Date();
end.setDate(end.getDate() + 1);

end = dateParser(end);
end_date.value = end;
end_date.min = end;

prix.textContent = 46 * calc();

start_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    console.log(day);

    if (end_date.value <= start_date.value) {
        end = new Date(day.setDate(day.getDate() + 1));
        end = dateParser(end);
        end_date.value = end;
    }

    prix.textContent = 46 * calc();
});

end_date.addEventListener("change", (e) => {
    end = new Date(e.target.value);
    console.log(end);

    if (end_date.value <= start_date.value) {
        let day = new Date(end.setDate(end.getDate() - 1));
        day = dateParser(day);
        start_date.value = day;
    }
    prix.textContent = 46 * calc();
});
