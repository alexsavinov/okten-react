import './App.css';
import {useEffect, useState} from "react";

// есть API от SpaceX
// https://api.spacexdata.com/v3/launches/
// нужно вывести все запуски кораблей кроме 2020 года.
// информация нужна не вся, только mission_name, launch_year  и mission_patch_small:
function App() {
    return (
        <div className="App">
            <Users/>

        </div>
    );
}

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            // .then(value => setUsers(value))
            .then(value => setUsers(value.filter(val => val.launch_year != '2020')));
    }, [])

    return (
        <div className="users">
            <h3>Users</h3>
            {users.map(value =>
                <div>key={value.flight_number} flight_number={value.flight_number} launch_year={value.launch_year}</div>)}
            {/*{users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username}*/}
            {/*                          email={value.email} street={value.address.street}/>)}*/}
        </div>
    );
};

export default App;
