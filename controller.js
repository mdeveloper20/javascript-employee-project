const create_user = 'http://dummy.restapiexample.com/api/v1/create';
//{"name":"test","salary":"123","age":"23"}


const get_all_users = 'http://dummy.restapiexample.com/api/v1/employees';

const get_user = 'http://dummy.restapiexample.com/api/v1/employee/';

/*{
"status": "success",
"data": [
	{
	"id": "1",
	"employee_name": "Tiger Nixon",
	"employee_salary": "320800",
	"employee_age": "61",
	"profile_image": ""
	},
	....
	]
}*/


const api_getAllEmployees = () => {
    return fetch(get_all_users);
}

const api_getEmployee = (id) => {
    return fetch(get_user + id)
}
const api_addNewEmployee = (jsonData) => {
    const headers = new Headers();
    // headers.append('Accept', 'application/json');
    // headers.append('Content-Type', 'application/json');


    return fetch(create_user, {
        headers,
        method: 'POST',
        body: JSON.stringify(jsonData)
    });
}


// addNewEmployee({ "name": "test", "salary": "123", "age": "23" }).then(response => response.ok ? response.json() : console.log('error!')).then(console.log)
/*
<tr>
                                            <td>1</td>
                                            <td>James</td>
                                            <td>24</td>
                                            <td>40,000 usd</td>


                                        </tr>

                                        */
window.onload = () => {
    const table = document.querySelector('#usersTable').getElementsByTagName('tbody')[0];
    const searchButton = document.querySelector('#searchButton');
    const searchQuery = document.querySelector('#searchQuery');
    const addForm = document.querySelector('#addForm');
    const spinner = document.querySelector('#spinner');
    const newItemId = document.querySelector('#newItemId');


    const addNewRow = (c1, c2, c3, c4) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(2);

        cell1.innerHTML = c1;
        cell2.innerHTML = c2;
        cell3.innerHTML = c3;
        cell4.innerHTML = c4;

    }

    const loadAll = () => {
        api_getAllEmployees().then(res => res.json()).then(jsonData => {
            jsonData.data.forEach(user => {
                addNewRow(user.id, user.employee_name, user.employee_age, user.employee_salary)

            });


        })
    }

    const onFormSubmitted = (event) => {

        newItemId.innerHTML = "";
        spinner.classList.remove('d-none');
        event.preventDefault();

        const name = event.target[0].value;
        const salary = event.target[1].value;
        const age = event.target[2].value;

        api_addNewEmployee({ name, age, salary }).then(res => res.json()).then(json => {
            newItemId.innerHTML = "Done. #" + json.data.id;
            spinner.classList.add('d-none');
            addForm.reset()
        })


    }

    loadAll(table);

    addForm.addEventListener('submit', onFormSubmitted);

    searchButton.onclick = () => {

        table.innerHTML = '';
        if (searchQuery.value) {
            api_getEmployee(searchQuery.value).then(res => res.json()).then(json => {
                addNewRow(json.data.id, json.data.employee_name, json.data.employee_age, json.data.employee_salary)

            })
        } else {
            loadAll(table);
        }

    }

}

