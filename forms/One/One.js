let req = [ ]
let query = " "
let results = [ ]
let pw = "gorams21"
let netID = "cjf07630"

first.onshow=function(){
    query = "SELECT state FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblEmployees.textContent = "There are no states in the database."
        else {
            drpStates.clear()
            for (i = 0; i < results.length; i++)
                drpStates.addItem(results[i])
        }
    } else
        lblEmployees.textContent = "Error code: " + req.status
}

drpStates.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else {  
        drpStates.value = s
        
        query = "SELECT name FROM customer WHERE `state` = '" + s + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (req.status == 200) { 
            results = JSON.parse(req.responseText)
            if (results.length == 0)
                lblEmployees.textContent = "There are no names in the database."
            else {        
                let message = ""
                for (i = 0; i < results.length; i++)
                    message = message + results[i][0] + "\n"
                lblEmployees.textContent = message
            }
        } else
            lblEmployees.textContent = "Error code: " + req.status
    }
}



