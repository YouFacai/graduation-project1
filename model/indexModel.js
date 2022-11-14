import indexApi from '@/api/index.js'

class IndexModel {
	static current = 1
	static size = 8
	//扫码
	static async handleOpenScode() {
		try {
			const response = await uni.scanCode()

			uni.navigateTo({
				url: `/pages/scanCode/scanCode?url=${res.result}`
			})
		} catch (e) {
			console.log(e);
		}
	}

	//精选
	static async getOptionList(data = {}) {
		try {
			const response = await indexApi.getOptinos({
				current: IndexModel.current,
				size: IndexModel.size,
				...data
			})
			return response.records
		} catch (e) {
			console.log(e);
		}
	}
}
export default IndexModel
