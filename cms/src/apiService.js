const apiService = {
  //DATA FETCHER
  async get(adress) {
    const request = await fetch(`${process.env.VUE_APP_API}/${adress}`, {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "GET",
      mode: "cors",
      redirect: "follow",
    });
    return await this.tryJson(request);
  },
  async post(adress, payload) {
    const request = await fetch(`${process.env.VUE_APP_API}/${adress}`, {
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
    });
    return await this.tryJson(request);
  },
  async put(adress, payload) {
    const request = await fetch(`${process.env.VUE_APP_API}/${adress}`, {
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "PUT",
      mode: "cors",
      redirect: "follow",
    });
    return await this.tryJson(request);
  },
  async patch(adress, payload) {
    const request = await fetch(`${process.env.VUE_APP_API}/${adress}`, {
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      mode: "cors",
      redirect: "follow",
    });
    return await this.tryJson(request);
  },
  async delete(adress, payload) {
    const request = await fetch(`${process.env.VUE_APP_API}/${adress}`, {
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      mode: "cors",
      redirect: "follow",
    });
    return await this.tryJson(request);
  },
  async uploadFile(adress, payload) {
    const request = await fetch(`${process.env.VUE_APP_API}/${adress}`, {
      body: new FormData(payload),
      credentials: "include",
      method: "POST",
      mode: "cors",
      redirect: "follow",
    });
    return await this.tryJson(request);
  },
  
  async tryJson(payload) {
    try {
      return await payload.json();
    } catch (error) {
      return payload;
    }
  },
};

export default apiService;
