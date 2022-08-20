const apiService = {
  //DATA FETCHER
  async get(adress) {
    process.env.VUE_APP_API = 'https://menzel-fahrzeugtechnik.de'
    console.log(process.env.VUE_APP_API)
    const request = await fetch(`${process.env.VUE_APP_API}/${adress}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
    })
    return await request.json()
  },
}

export default apiService
