import  firebase from './../Firebase'

const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider)
    .then((res) => {
        // console.log(res)
        return res.user
    })
    .catch((err) => {
        return err
    })
}

export default socialMediaAuth;