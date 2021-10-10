db.students.insertMany(
    [
        {name:"Mark",age:23, enrollementclass:"Math"},
        {name:"kime",age:20, enrollementclass:"PH"},
        {name:"Charl",age:22, enrollementclass:"Mec"},
        {name:"Daived",age:23, enrollementclass:"Math"},
        {name:"Sandy",age:19, enrollementclass:"PC"},
])

db.students.find(
    {age:{$gt:22}}
    )


db.students.find(
    {enrollementclass:'Math'}
    )

db.students.update(
    {"enrollementclass":"Math"},{$set:{"enrollementclass":"Computer Science"}},{multi:true}

)

db.students.remove({"name":"Mark"})

db.students.aggregate({"$group":{"_id":null,avreageAge:{$avg:"$age"}}})

db.students.aggregate({"$group":{"_id":null,students:{$push:"$name"}}})

//update studen
db.students.update({"name":"kime"},{$set:{"city":"New York"}})
db.students.update({"name":"Charl"},{$set:{"city":"New York"}})
db.students.update({"name":"Daived"},{$set:{"city":"New York"}})
db.students.update({"name":"Sandy"},{$set:{"city":"New York"}})

db.students.aggregate({"$group":{"_id":null,"studentsCities":{$addToSet:"$city"}}})
// create database

// use newDb
db.Animals.insert(
    
        {name:"Lion"}
        
)
//add user
db.createUser({
    user:"animaluser",
    pwd:"test",
    roles:["read"]
})
// show users
// {
//         "_id" : "newDB.animaluser",
//         "userId" : UUID("f0b141e1-89d0-4cab-b0f4-f9e60e3449c1"),
//         "user" : "animaluser",
//         "db" : "newDB",
//         "roles" : [
//                 {
//                         "role" : "read",
//                         "db" : "newDB"
//                 }
//         ],
//         "mechanisms" : [
//                 "SCRAM-SHA-1",
//                 "SCRAM-SHA-256"
//         ]
// }
//add admin user to admin db
db.createUser({
    user:"admin",
    pwd:"admin",
    roles:["userAdminAnyDatabase"]
})