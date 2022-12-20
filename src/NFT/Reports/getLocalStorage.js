function getLocalStorage() {
     return localStorage.getItem("nft") ? JSON.parse(localStorage.getItem("nft")) : [];
}

export default getLocalStorage;