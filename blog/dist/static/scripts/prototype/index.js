
  function Node(name, value){
    this.name = name;
    this.value = value;
    this.next = null;
  }

  let n1 = new Node("a", 100);
  n1.next = new Node("b", 100);
  n1.next.next = new Node("c", 100);
  n1.next.next.next = new Node("4", 100);



  let obj = new Object();
  console.log(obj);

  console.log(obj.__proto__);  //通过实例对象访问
  console.log(Object.prototype);  //通过构造函数访问

  console.log(obj.__proto__ === Object.prototype); //true



  let arr = [];
  console.log(arr.push)
  console.log(arr.shift)
  console.log(arr.sort)
  console.log(arr.indexOf)

  function Phone(){
    this.price = 1000;
    this.playmusic = function(){
      console.log("播放mp3");
    }
  }
  // Phone.prototype.price = 999;
  // Phone.prototype.color = "red";
  // Phone.prototype.playmusic = function(){
  //   console.log("播放音乐");
  // };

  let p1 = new Phone();
  //自身属性和原型属性冲突
  // p1.playmusic();         // 播放mp3
  // console.log(p1.price);  // 1000
  // //自身没有这个属性
  // console.log(p1.color);  // red






  function Act(){ }
  let a1 = new Act();
  let a2 = new Act();

  //因为
  console.log( a1.__proto__ === Act.prototype ); //true
  //又因为
  console.log( a2.__proto__ === Act.prototype ); //true
  //所以
  console.log( a1.__proto__ === a2.__proto__ ); //true


  Array.prototype.distinct = function(){
    //去重
  }
  //于是,接下来所有的数组对象都具备去重的能力
  let arr = [1,2,3,1,2,3,4].distinct();
  console.log(arr);  // [1,2,3,4];

  Date.prototype.format = function(pattern) {
    //格式化
  }
  //于是,接下来所有的日期对象都具备格式化的能力
  let now = new Date();
  console.log( now.format("yyyy-MM-dd") ); //2020-08-15

