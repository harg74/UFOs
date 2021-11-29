// import the data form data.js
const tableData=data;

//Reference the HTML table using D3
var tbody = d3.select('tbody');

    // Build table
    function buildTable(data){
        //standard way to clear data, create a blank canvas.
        tbody.html('');

        //find the <tbody> tag within the HTML and add a table row ("tr")
        //(dataRow) that will represent each row of the data as we iterate through the array
        //*** for each one dataRow it will append a table row within the tbody tag.***
        data.forEach((dataRow) => {
            let row = tbody.append('tr');

        //Object.values, to reference one object from the array of UFO sightings and get its values.
        //(dataRow) we want the values to go into the dataRow
        //forEach(val) to specify that we want one object per row.
        //val argument represents each item in the object, such as the location, shape, or duration
            // *** Get the object values of each row, and for each one of the values append a td tag within a tr tag (see row)***
            Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
                //extract the text whatever the value is in val
                cell.text(val);
                }
            ):
        });
    }