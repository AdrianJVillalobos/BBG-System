import { projectAuth } from "../firebase/config"
import '../plugins/installCompositionApi'
import {ref} from "@vue/composition-api"

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password, displayName)
        if (!res) {
                throw new Error ('Could not complete signup')

        }
        await res.user.updateProfile ({ displayName })
        error.value = null

        return res

    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }

}

const useSignup = () => {
    return { error, signup }
}

export default useSignup 

