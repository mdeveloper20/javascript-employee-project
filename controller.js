const create_user = 'http://dummy.restapiexample.com/api/v1/create';
const get_all_users = 'http://dummy.restapiexample.com/api/v1/employees';
const get_user = 'http://dummy.restapiexample.com/api/v1/employee/';


const api_getAllEmployees = () => {
}

const api_getEmployee = (id) => {
}
const api_addNewEmployee = (jsonData) => {

}


window.onload = () => {
    const table = document.querySelector('#usersTable').getElementsByTagName('tbody')[0];
    const searchButton = document.querySelector('#searchButton');
    const searchQuery = document.querySelector('#searchQuery');
    const addForm = document.querySelector('#addForm');
    const spinner = document.querySelector('#spinner');
    const newItemId = document.querySelector('#newItemId');


    const addNewRow = (c1, c2, c3, c4) => {
        // add new item to the table rows

    }

    const loadAll = () => {
        // load all the employees
    }

    const onFormSubmitted = (event) => {
        // send post request to the api and get the new item id


    }

    loadAll();

    addForm.addEventListener('submit', onFormSubmitted);

    searchButton.onclick = () => {

        table.innerHTML = '';
        if (searchQuery.value) {
            // fetch one item from api 
        } else {
            loadAll();
        }

    }

}

