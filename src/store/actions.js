export const setUser = ({commit}, user) => {
    // console.log(user)
    commit("userStatus", user)
}