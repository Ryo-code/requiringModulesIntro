module.exports = {
  two: 2,
  doubleMsg: function(number) {
    console.log("Your number has been doubled good sir, to " + (this.two * number) + "!" );
    console.log("Have a great meal.");
  }
};
