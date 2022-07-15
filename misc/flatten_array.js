// Flatten the data array to be a one dimensional array of all the objects (7)

const data = [ 
    {
        name: "Spleff Gorbinson",
        id: 3,
        title: "Janitor",
        directReports: [
            {
                name: "Al Gore",
                id: 1,
                title: "Developer",
                directReports: []
            },
            {
                name: "Amaria Crambles",
                id: 2,
                title: "Architect",
                directReports: []
            }
        ]
    },    
    {
        name: "John Deere",
        id: 4,
        title: "Developer",
        directReports: []
    },    
    {
        name: "John Doe",
        id: 5,
        title: "Developer",
        directReports: []
    },
    {
        name: "Jane Dimploop",
        id: 6,
        title: "Manager",
        directReports: [
            {
                name: "Samanthana Branthis",
                id: 7,
                title: "Developer",
                directReports: []
            }
        ]
    }
];

let flattened = [];
function flatten(data) {
    for (let i = 0; i < data.length; i++) {
        flattened.push(data[i]);
        if (data[i].directReports.length > 0) {
            flatten(data[i].directReports);
        }
    }
}

flatten(data);
console.log(flattened);
console.log(flattened.length);
console.log(1);