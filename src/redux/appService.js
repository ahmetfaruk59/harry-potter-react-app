import axios from 'axios'
const CHAR_API="https://hp-api.onrender.com/api/characters/"
const SPELL_API="https://hp-api.onrender.com/api/spells"

const getChars=async()=>{
    const response=await axios.get(CHAR_API);
    return response.data
}
const getSpells=async()=>{
    const response=await axios.get(SPELL_API);
    return response.data
}
const appService={
    getChars,
    getSpells
}
export default appService