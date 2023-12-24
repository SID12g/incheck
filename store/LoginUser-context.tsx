import { createContext, ReactNode, useContext, useState } from "react";

interface User {
    name: string;
    studentId: string;
    phoneNumber: string;
    subLocation: string;
    location: string;
    token: string;
    googleInformation: any;
    favoriteLocation: string[];
    favoriteSubLocation: string[];
    changeUserName: any;
    changeUserStudentId: any;
    changeUserPhoneNumber: any;
    changeUserSubLocation: any;
    changeUserLocation: any;
    changeUserToken: any;
    changeUserGoogleInformation: any;
    addUserFavoriteLocation: any;
    subtUserFavoriteLocation: any;
    addUserFavoriteSubLocation: any;
    subtUserFavoriteSubLocation: any;
}

export const LoginUserContext = createContext({
    name: "조성민",
    studentId: '1427',
    phoneNumber: '01093563160',
    subLocation: '본관 3층',
    location: "104class",
    token: 'null',
    googleInformation: {},
    favoriteLocation: ['1학년 4반', '물 화장실'],
    favoriteSubLocation: [''],
    changeUserName: (name: string) => { },
    changeUserStudentId: (stuId: string) => { },
    changeUserPhoneNumber: (num: string) => { },
    changeUserSubLocation: (location: string) => { },
    changeUserLocation: (location: string) => { },
    changeUserToken: (token: string) => { },
    changeUserGoogleInformation: (user: any) => { },
    addUserFavoriteLocation: (favoriteLocation: string) => { },
    subtUserFavoriteLocation: (favoriteLocation: string) => { },
    addUserFavoriteSubLocation: (favoriteLocation: string) => { },
    subtUserFavoriteSubLocation: (favoriteLocation: string) => { },
});

function UserLoginContextProvider({ children }: any) {
    const [userName, setUserName] = useState('')
    const [userStudentId, setUserStudentId] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [userSubLocation, setUserSubLocation] = useState('본관 3층')
    const [userLocation, setUserLocation] = useState('1학년 4반')
    const [userToken, setUserToken] = useState('null')
    const [userGoogleInformation, setUserGoogleInformation] = useState({})
    const [userFavoriteLocation, setUserFavoriteLocation] = useState<string[]>([])
    const [userFavoriteSubLocation, setUserFavoriteSubLocation] = useState<string[]>([])
    

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
    function changeUserGoogleInformation(user: any){
        setUserGoogleInformation(user)
    }
    function addUserFavoriteLocation(favoriteLocation: string) {
        setUserFavoriteLocation(
            (currentFavoriteLocation: string[]) => [...currentFavoriteLocation, favoriteLocation])
    }
    function subtUserFavoriteLocation(favoriteLocation: string) {
        setUserFavoriteLocation((currentFavoriteLocation: string[]) => currentFavoriteLocation.filter(inputFavLoc => inputFavLoc !== favoriteLocation))
    }
    function addUserFavoriteSubLocation(favoriteSubLocation: string) {
        setUserFavoriteSubLocation(
            (currentFavoriteSubLocation: string[]) => [...currentFavoriteSubLocation, favoriteSubLocation])
    }
    function subtUserFavoriteSubLocation(favoriteSubLocation: string) {
        setUserFavoriteSubLocation((currentFavoriteSubLocation: string[]) => currentFavoriteSubLocation.filter(inputFavLoc => inputFavLoc !== favoriteSubLocation))
    }
    

    const value: User = {
        name: userName,
        studentId: userStudentId,
        phoneNumber: userPhoneNumber,
        subLocation: userSubLocation,
        location: userLocation,
        token: userToken,
        googleInformation: userGoogleInformation,
        favoriteLocation: userFavoriteLocation,
        favoriteSubLocation: userFavoriteSubLocation,
        changeUserName: changeUserName,
        changeUserStudentId: changeUserStudentId,
        changeUserPhoneNumber: changeUserPhoneNumber,
        changeUserSubLocation: changeUserSubLocation,
        changeUserLocation: changeUserLocation,
        changeUserToken: changeUserToken,
        changeUserGoogleInformation: changeUserGoogleInformation,
        addUserFavoriteLocation: addUserFavoriteLocation,
        subtUserFavoriteLocation: subtUserFavoriteLocation,
        addUserFavoriteSubLocation: addUserFavoriteSubLocation,
        subtUserFavoriteSubLocation: subtUserFavoriteSubLocation,
    }
    return <LoginUserContext.Provider value={value}>{children}</LoginUserContext.Provider>
}

export default UserLoginContextProvider
