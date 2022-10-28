export default {
  addOne(state) {
    state.newCounter++;
  },
  sendCounterValue(state) {
    fetch("https://vue-demo-6d620-default-rtdb.firebaseio.com/counters.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        counter: state.newCounter,
      }),
    })
      .then(() => console.log("The value sent"))
      .catch(() => {
        console.log("Can't send the value");
      });
  },
  getCounterValue(state) {
    fetch("https://vue-demo-6d620-default-rtdb.firebaseio.com/counters.json")
      .then((res) => res.json())
      .then((data) => {
        let counters = [];
        for (let id in data) {
          counters.push(data[id].counter);
        }
        // Get the last (newest) counter value
        const lastCounterValue = counters[counters.length - 1];
        state.newCounter = lastCounterValue;
      })
      .catch(() => {
        console.log("Can't get the requested value");
      });
  },
};
