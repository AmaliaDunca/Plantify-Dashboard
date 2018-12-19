let donatorSeeds = 0;
let donatorCompost = 0;
let donatorTools = 0;
let moneyBuget = 0;

fetch("http://5c04b49cd5f2070013d58166.mockapi.io/users")
  .then(res => res.json())
  .then(user => {
    user.forEach(d => {
      //   donator seeds;
      for (let i = 0; i < d.donator.length; i++) {
        donatorSeeds += d.donator[i].seedsnumber;
      }
      document.querySelector(".donate_seeds").innerHTML = donatorSeeds;
      //   donator Compost;
      for (let i = 0; i < d.donator.length; i++) {
        donatorCompost += d.donator[i].fertilizernumber;
      }
      document.querySelector(".donate_compost").innerHTML = donatorCompost;

      //   donator Tools;
      for (let i = 0; i < d.donator.length; i++) {
        donatorTools += d.donator[i].toolsnumber;
      }
      document.querySelector(".donate_tools").innerHTML = donatorTools;

      //   Money Buget Donators;
      for (let i = 0; i < d.tree.length; i++) {
        moneyBuget = d.tree[i].id;
        moneyBuget++;
        console.log(moneyBuget);
      }
      console.log(moneyBuget);
      document.querySelector(".money_number").innerHTML = moneyBuget * 5;
    });
  });
