
# endpoints

'/todo/'    [GET]

'/todo/'    [POST]

'/todo/:id' [PUT]

'/todo/:id' [DELETE]

# datashape

    {
        "_id": "626845d50ef5e257fd8efdfc",
        "text": "Task text example",
        "isOpen": true,
        "createdAt": "2022-04-26T19:19:49.610Z",
        "updatedAt": "2022-04-26T19:19:49.610Z",
        "__v": 0
    }

# get all tasks

endpoint => '/todo/'
method => [GET]

# add a task

endpoint => '/todo/'
method => [POST]
BODY => {text : "Task text example"}

# update a task

endpoint => '/todo/:id'
id = _id
method => [PUT]
BODY => what u want to update as json


# delete a task

endpoint => '/todo/:id'
id = _id
method => [DELETE]


