// import the data form data.js
const tableData=data;

//Reference the HTML table using D3
var tbody = d3.select("tbody");

    // Build table
    function buildTable(data){
        //standard way to clear data, create a blank canvas.
        tbody.html("");

        //find the <tbody> tag within the HTML and add a table row ("tr")
        //(dataRow) that will represent each row of the data as we iterate through the array
        //*** for each one dataRow it will append a table row within the tbody tag.***
        data.forEach((dataRow) => {
            let row = tbody.append("tr");

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
            );
        });
    }

    function handleClick(){
        //.select it will return an array with the first matching element that includes the specified selector string.
        //D3 to look for the #datetime id in the HTML tags
        //By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable.
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;

        //row is the call back, which is each one of the rows (elements), which will filter the default data to show only the date entered.
        if (date){//(if a date is entered)
            filteredData = filteredData.filter(row => row.datetime === date);
        };
        // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
    };

        // Attach an event to listen for the form button
        //Our selector string contains the id for another HTML tag. 
        //(We'll assign a unique id to a button element in the HTML called "filter-btn".)
        d3.selectAll("#filter-btn").on("click", handleClick);

        // Build the table when the page loads
        buildTable(tableData);