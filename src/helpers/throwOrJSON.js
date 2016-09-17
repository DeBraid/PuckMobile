const throwErrorOrReturnJSON = (res) => {
    if (res.status >= 400) {
      throw new Error("Bad server");
    }
    return res.json();
}

export default throwErrorOrReturnJSON;