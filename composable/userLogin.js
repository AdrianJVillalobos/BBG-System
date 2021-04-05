import { projectAuth } from "../firebase/config"
import '../plugins/installCompositionApi'
import {ref} from "@vue/composition-api"

const loginError = ref(null)
const response = ref(null)

const signin = async (email, password) => {
      loginError.value = null
      response.value = false

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        if (!res) {
                throw new Error ('Could not complete signin')
        }
        loginError.value = null
        response.value = true
        return res

    } catch(err) {
        console.log(err.message)
        loginError.value = err.message
    }

}

const userLogin = () => {
    return { loginError, response, signin }
}

export default userLogin 
