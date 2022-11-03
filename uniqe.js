function uniq(S){
let obj={}
    for(let i=0;i<=S.length-1;i++){
        if(obj[S[i]]==undefined){
            obj[S[i]]=1
        }else{
            obj[S[i]]++
        }
    }
    // console.log(obj)
    let flag="Unique"
    for(let key in obj){
        if(obj[key]!=1){
            flag="No"
        }
    }
    console.log(flag)
}
uniq("masai")