(function(){
    var tree = [
        { 	text: "myproject", 
            nodes: [ 
                { 	text: "src",
                    nodes: [ 
                        { 	text: "js",
                            nodes: [
                                {text: "a.js"},
                                {text: "b.js"}
                            ] 
                        },
                        {
                            text: "c.js"
                        }
                    ]
                },
                {   text: "dist",
                    nodes: []
                }
            ]
        }
    ];
    setTimeout(()=>{
        //初始化第一个目录树
        $('#treeview1').treeview({
            data: tree, 
            collapseIcon: "glyphicon glyphicon-chevron-down",
            expandIcon: "glyphicon glyphicon-chevron-right",
            color : "#428bca"
        });

        //第二个
        tree[0].nodes.push({text:"gulpfile.js"});
        $('#treeview2').treeview({
            data: tree, 
            collapseIcon: "glyphicon glyphicon-chevron-down",
            expandIcon: "glyphicon glyphicon-chevron-right",
            color : "#428bca"
        });
        //第三个
        Object.assign(tree[0].nodes[1].nodes,  [{text: "js", nodes: [{text: "a.js"},{text: "b.js"}]},{text: "c.js"}]);

        $('#treeview3').treeview({
            data: tree, 
            collapseIcon: "glyphicon glyphicon-chevron-down",
            expandIcon: "glyphicon glyphicon-chevron-right",
            color : "#428bca"
        });
    }, 1000);
})();