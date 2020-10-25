import customData from "~/store/data/customer-data";

export const state = () => ({
	customData
})

export const getters = {
	customers(state) {
      return state.customData
    }
}

// export const getters = {
// 	customlist(state) {
// 		return state.customers
// 	}
// }
