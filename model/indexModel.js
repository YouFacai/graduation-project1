class IndexModel {
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
}
export default IndexModel
