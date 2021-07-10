const mysql = require('mysql');

const databaseConnectionConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database :"worker"
}
const con = mysql.createConnection(databaseConnectionConfig);
con.connect(function (error){
    if(error){
        console.log("Connection Fail");
    }
    else{
        console.log("Connection Success");
        // InsertData(con);
        // deleteDataByPhoneNumber(con)
        updateData(con)
    }
});


function InsertData(con){
    let SQLQuery = "INSERT INTO `worker_list`(`Name`, `Age`, `Address`, `Phone_Number`) VALUES ('Md. Shahin Mia',22,'Bajitpur',01952216389),('Md. Halim Mia',22,'Kuliarchor',01950016389),('Md. Toukir Mia',22,'Bajitpur',01959996389),('Md. Basir Mia',21,'poilanpur',01958816389),('Md. Tipu Mia',22,'Kuliarchor',01950016323),('Md. Kawchar Mia',23,'Borkarchor',01770016389);"
    con.query(SQLQuery,function(err){
        if(err){
            console.log("Insert Data fail");
        }
        else{
            console.log("Insert Data success");
        }
    })
}

function deleteDataByPhoneNumber(con){
    let SQLQuery="DELETE FROM `worker_list` WHERE `Phone_Number`='-919872'"
    con.query(SQLQuery,function(err){
        if(err){
            console.log("delete Data fail");
        }
        else{
            console.log("delete Data success");
        }
    })
}

function updateData(con){
    let SQLQuery="UPDATE `worker_list` SET `Name`='Md. Nameem Mia',`Age`='30',`Address`='kuliarchor',`Phone_Number`=0222919133 WHERE `Phone_Number`='1959996389'";
    con.query(SQLQuery,function(err){
        if(err){
            console.log("update Data fail");
        }
        else{
            console.log("update Data success");
        }
    })

}