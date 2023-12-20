import { createContext, ReactNode, useContext, useState } from "react";

interface User {
    name: string;
    studentId: string;
    phoneNumber: string;
    subLocation: string;
    location: string;
    token: string;
    favoriteLocation: string[];
    changeUserName: any;
    changeUserStudentId: any;
    changeUserPhoneNumber: any;
    changeUserSubLocation: any;
    changeUserLocation: any;
    changeUserToken: any;
    addUserFavoriteLocation: any;
    subtUserFavoriteLocation: any;
}

export const LoginUserContext = createContext({
    name: "조성민",
    studentId: '1427',
    phoneNumber: '01093563160',
    subLocation: '본관 3층',
    location: "104class",
    token: 'null',
    favoriteLocation: ['1학년 4반', '물 화장실'],
    changeUserName: (name: string) => { },
    changeUserStudentId: (stuId: string) => { },
    changeUserPhoneNumber: (num: string) => { },
    changeUserSubLocation: (location: string) => { },
    changeUserLocation: (location: string) => { },
    changeUserToken: (token: string) => { },
    addUserFavoriteLocation: (favoriteLocation: string) => { },
    subtUserFavoriteLocation: (favoriteLocation: string) => { },
});

function UserLoginContextProvider({ children }: any) {
    const [userName, setUserName] = useState('')
    const [userStudentId, setUserStudentId] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [userSubLocation, setUserSubLocation] = useState('본관 3층')
    const [userLocation, setUserLocation] = useState('1학년 4반')
    const [userToken, setUserToken] = useState('null')
    const [userFavoriteLocation, setUserFavoriteLocation] = useState(['1학년 4반', '물 화장실'])
    

    function changeUserName(name: string) {
        setUserName(name)
    }
    function changeUserStudentId(stuId: string) {
        setUserStudentId(stuId)
    }
    function changeUserPhoneNumber(num: string) {
        setUserPhoneNumber(num)
    }
    function changeUserSubLocation(location: string) {
        setUserSubLocation(location)
    }
    function changeUserLocation(location: string) {
        setUserLocation(location)
    }
    function changeUserToken(token: string){
        setUserToken(token)
    }
    function addUserFavoriteLocation(favoriteLocation: string) {
        setUserFavoriteLocation(
            (currentFavoriteLocation: string[]) => [...currentFavoriteLocation, favoriteLocation])
    }
    function subtUserFavoriteLocation(favoriteLocation: string) {
        setUserFavoriteLocation((currentFavoriteLocation: string[]) => currentFavoriteLocation.filter(inputFavLoc => inputFavLoc !== favoriteLocation))
    }

    const value: User = {
        name: userName,
        studentId: userStudentId,
        phoneNumber: userPhoneNumber,
        subLocation: userSubLocation,
        location: userLocation,
        token: userToken,
        favoriteLocation: userFavoriteLocation,
        changeUserName: changeUserName,
        changeUserStudentId: changeUserStudentId,
        changeUserPhoneNumber: changeUserPhoneNumber,
        changeUserSubLocation: changeUserSubLocation,
        changeUserLocation: changeUserLocation,
        changeUserToken: changeUserToken,
        addUserFavoriteLocation: addUserFavoriteLocation,
        subtUserFavoriteLocation: subtUserFavoriteLocation,
    }
    return <LoginUserContext.Provider value={value}>{children}</LoginUserContext.Provider>
}

export default UserLoginContextProvider
