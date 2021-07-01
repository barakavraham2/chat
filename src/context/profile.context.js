import react, { useContext, useState, createContext, useEffect } from "react"
import { auth, database } from "../misc/firebase";


const ProfileContext = createContext();
export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        let userRef;
        const authOnSub = auth.onAuthStateChanged(authObj => {
            if (authObj) {
                let userRef = database.ref(`/profiles/${authObj.uid}`);
                userRef.on('value', (snap) => {
                    const { name, creatadAt } = snap.val()
                    const data = {
                        name,
                        creatadAt,
                        uid: authObj.uid,
                        email: authObj.email,


                    }
                    setProfile(data)
                    setIsLoading(false)
                })


            }
            else {
                if (userRef) {
                    userRef.off()
                }
                setProfile(null)
                setIsLoading(false)
            }
        })
        return () => {
            authOnSub()
            if (userRef) {
                userRef.off()
            }
        }
    }, [])
    return (
        <ProfileContext.Provider value={{ isLoading, profile }}>
            {children}
        </ProfileContext.Provider>
    )
}
export const useProfile = () => useContext(ProfileContext)