const user={
    name:'Keerthana',
    gender:'female',
    id:23,
    details(){
        console.log('Myself',this.name)
    }
}

user.details()

//user is an object and details function is used within that -note the syntax(won't work with arrows)