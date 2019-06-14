$('#submitBtn').on('click', function(event) {
    event.preventDefault();

    // Capture the form data
    let year = $('#year').val().trim();
    let yearTo = $('#yearTo').val().trim();
    let category = $('#category').val().trim();
    let numberOfLaureates = $('#numberOfLaureates').val().trim();


    // Nobel Prize URL
    let queryURL = `http://api.nobelprize.org/v1/prize.json?year=${year}&yearTo=${yearTo}&category=${category}&numberOfLaureates=${numberOfLaureates}`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response.prizes);
        for (let i = 0; i < response.prizes.length; i++) {
            let category = 'Category: ' + response.prizes[i].category;
            for (let j = 0; j < response.prizes[i].laureates.length; j++) {
                let firstName = response.prizes[i].laureates[j].firstname;
                let surname = response.prizes[i].laureates[j].surname;
                let motivation = response.prizes[i].laureates[j].motivation;
                let numberOfLaureates = 'Number of Laureates: ' + response.prizes[i].laureates[j].share;

                let divContainer = $('<div>').attr('class', 'persInfo');
                let h5first = $('<h5>').text(`First Name: ${firstName}`);
                let h5Surname = $('<h5>').text(`Surname: ${surname}`);
                let pMotivation = $('<p>').text(`Motivation: ${motivation}`);
                let pNumberOfLaureates = $('<p>').text(`Number of Laureates: ${numberOfLaureates}`);

                divContainer.append(h5first);
                divContainer.append(h5Surname);
                divContainer.append(pMotivation);
                divContainer.append(pNumberOfLaureates);

                console.log($('#category-div').append(divContainer));

                trans(motivation);
            }
        }
    });

});


// translator
function trans(motivation) {
    $('#para').text(motivation);
    let queryURL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190611T014436Z.15adeca0a3de4446.460dd96ea222fa02e8e812ef75e3e76a15a3a4ed&text=${motivation}&lang=fr&format=plain&options=1`;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        let para = $('#para');
        let pTrans = $('<div>').attr('class', 'textTraslated');
        para.append(pTrans);
        let pText = $('<p>').text(response.text)
        para.append(pText);
    });
}