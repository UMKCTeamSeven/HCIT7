module.exports = [{
          title:"Counterfiet Money",
          about: "Shows the security features in currency",
          link: {data:"testing"},
          bottom: 45,
          left: 38,
          tags: ["info","display"],
          grade: 3,
          pic: require("./assets/kiosks/CounterfeitMoney.jpg"),
          subSections:[
            { title: "WWII"},
            { title: "1920's",
              subSections:[
                { title: "abe lincon"},
                { title: "joe biden"}
              ]
            }
          ],
          path: "0",
          crumb: "fake money"
        },{
          title:"Coin Wall",
          about: "Coins from every president",
          link: {data:"testing"},
          bottom: 37,
          left: 69,
          tags: ["info","display"],
          grade: 1,
          pic: require("./assets/kiosks/CoinWall.jpg"),
          subSections:[
            { title: "Modern"},
            { title: "pre United States",
              subSections:[
                { title: "abe lincon"},
                { title: "joe biden"}
              ]
            },
            { title: "Other Countries"}
          ],
          path: "1",
          crumb: "coin wall"
        },{
          title:"map",
          about: "some things about a map",
          link: {data:"testing"},
          bottom: 26,
          left: 51,
          tags: ["interactive"],
          grade: 2,
          pic: require("./assets/location/20160407_110841.jpg"),
          path: "2",
          crumb: "map"
        },{
          title:"gold bar",
          about: "info on gold bar",
          link: {data:"testing"},
          bottom: 35,
          left: 30,
          tags: ["interactive","display"],
          grade: 1,
          pic: require("./assets/location/20160407_111202.jpg"),
          path: "3",
          crumb: "gold"
      }]