class studnetController{
    static createDoc=(req,res)=>{
        res.redirect('/student')
    }

    static getAllDoc=(req,res) =>{
        res.render('index')
    }
    
    static updateDoc=(req,res) =>{
        res.render('/edit')
    }

    static updateDocbyId=(req,res) =>{
        res.redirect('/student')
    }

    static deleteDocbyId=(req,res) =>{
        res.redirect('/student')
    }

}