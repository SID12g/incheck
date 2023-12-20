import { createContext, ReactNode, useContext, useState } from "react";

interface User {
    name: string;
    grade: number;
    class: number;
    number: number;
    email: string;
    subLocation: string;
    location: string;
    changeUserName: any;
    changeUserGrade: any;
    changeUserClass: any;
    changeUserNumber: any;
    changeUserEmail: any;
    changeUserLocation: any;
}

export const LoginUserContext = createContext({
    name: "조성민",
    grade: 1,
    class: 4,
    number: 27,
    email: "sid12g@naver.com",
    subLocation: '본관 3층',
    location: "104class",
    changeUserName: (name: string)=>{},
    changeUserGrade: (grade: number)=>{},
    changeUserClass: (userClass: number)=>{},
    changeUserNumber: (number: number)=>{},
    changeUserEmail: (email: string)=>{},
    changeUserLocation: (location: string)=>{},
});

function UserLoginContextProvider({ children }: any) {
    const [userName, setUserName] = useState('조성민')
    const [userGrade, setUserGrade] = useState(1)
    const [userClass, setUserClass] = useState(4)
    const [userNumber, setUserNumber] = useState(27)
    const [userEmail, setUserEmail] = useState('sid12g@naver.com')
    const [userSubLocation, setUserSubLocation] = useState('본관 3층')
    const [userLocation, setUserLocation] = useState('1학년 4반')

    function changeUserName(name: string) {
        setUserName(name)
    }
    function changeUserGrade(grade: number) {
        setUserGrade(grade)
    }
    function changeUserClass(userClass: number) {
        setUserClass(userClass)
    }
    function changeUserNumber(number: number) {
        setUserNumber(number)
    }
    function changeUserEmail(email: string) {
        setUserEmail(email)
    }
    function changeUserLocation(location: string) {
        setUserLocation(location)
    }

    const value: User = {
        name: userName,
        grade: userGrade,
        class: userClass,
        number: userNumber,
        email: userEmail,
        subLocation: userSubLocation,
        location: userLocation,
        changeUserName: changeUserName,
        changeUserGrade: changeUserGrade,
        changeUserClass: changeUserClass,
        changeUserNumber: changeUserNumber,
        changeUserEmail: changeUserEmail,
        changeUserLocation: changeUserLocation,
    }
    return <LoginUserContext.Provider value={value}>{children}</LoginUserContext.Provider>
}

export default UserLoginContextProvider
