import React from 'react';
import Home from './Home';
import Users from './Users';
import Deposits from './Deposits';
import Transfers from './Transfers';
import Route from './Route';
import Header from './Header';
import axios from 'axios';
import './style.css';
import Spinner from './Spinner';

const Main = () => {
    // let idFoundArray = []
    const [users, setUsers] = React.useState(null);
    const [cars, setCars] = React.useState(null);
    const [carsToUsers, setCarsToUsers] = React.useState(null);

    React.useEffect(() => {
        getDataUsers();
    }, [])

    const getDataUsers = async () => {
        const response = await axios.get(`https://617c2bf2d842cf001711c288.mockapi.io/Clients`);
        setUsers(response.data);
        getCars(response.data)

    }
    const getCars = async (usersData) => {
        const response = await axios.get(`https://617c2bf2d842cf001711c288.mockapi.io/cars`);
        setCars(response.data);
        manage(usersData, response.data);
    }
    const manage = async (usersData, carsData) => {
        let arr = []
        // const found = carsData.find(element => (element.isAvailable === true) && (element.isGold === true));
        for (let i = 0; i < usersData.length; i++) {
        const found = carsData.find(element => (element.isAvailable === true) && (element.isGold === true));
        const found2 = carsData.find(element => (element.isAvailable === true) && (element.isGold === false));
            if (usersData[i].isActive) {
                // const response = await axios.get(`https://617c2bf2d842cf001711c288.mockapi.io/Clients/${i+1}/members`);
                if (usersData[i].isSenior) {
                    // const found = carsData.find(element => (element.isAvailable === true) && (element.isGold === true));
                    let ddaattaa = {
                        idUser: usersData[i].id,
                        nameUser: usersData[i].name,
                        idCar: found.id,
                        nameCar: found.name,
                        imgCar: found.avatar
                    }
                    arr.push(ddaattaa)
                    // found.isAvailable=false
                    // console.log("found",found);
                    // idFoundArray.push(found.id)
                    // const res = await axios.put(`https://617c2bf2d842cf001711c288.mockapi.io/cars/${found.id}`,{
                    //     "isAvailable": false
                    // });
                    // console.log(res);
                    // setCars(res)
                    // console.log("res", res);
                }else{
                    // const found = carsData.find(element => (element.isAvailable === true) && (element.isGold === false));
                    let ddaattaa = {
                        idUser: usersData[i].id,
                        nameUser: usersData[i].name,
                        idCar: found2.id,
                        nameCar: found2.name,
                        imgCar: found2.avatar
                    }
                    arr.push(ddaattaa)
                    // found2.isAvailable=false

                    // found2.isAvailable=false
                    // idFoundArray.push(found2.id)
                    //  const res = await axios.put(`https://617c2bf2d842cf001711c288.mockapi.io/cars/${found2.id}`,{
                    //     "isAvailable": false
                    // });
                }
            }
        }
        setCarsToUsers(arr)

    }
    // React.useEffect(() => {
    //     putCarsToUsers();
    // }, [carsToUsers])

    // const putCarsToUsers = async () => {
    //     // console.log(idFoundArray);
    //     // for (let i = 0; i < idFoundArray.length; i++) {
    //         const res = await axios.put(`https://617c2bf2d842cf001711c288.mockapi.io/cars/70`,{
    //           "isAvailable": true
    //     });
    // // }
    // }

    return (
        <div className="ui container ">
            <div className="ui segment">

                {/* main menu */}
                <Header />

                <div className="ui segment">
                    <Route path="/">
                        <Home />
                    </Route>

                    <Route path="/users">
                        <Users users={users} />
                    </Route>

                    <Route path="/deposits">
                        <Deposits cars={cars}
                        // idSenderHandler={idSenderHandler}
                        // cashHandler={cashHandler}
                        // adminChashToAccountHandler={adminChashToAccountHandler}
                        // wrongMessage={wrongMessage}
                        />
                    </Route>

                    <Route path="/transfers">
                        {
                            carsToUsers ? <Transfers carsToUsers={carsToUsers}/> : <Spinner/>
                        }
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default Main;