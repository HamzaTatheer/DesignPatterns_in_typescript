class MusicStore{
    private static instance:MusicStore;
    private ownerName:string = "Hamza";
    private location:string = "dha";

    private constructor(){
    }


    public static getInstance():MusicStore{
        if(!this.instance){
            this.instance = new MusicStore();
        }

        return this.instance;
    }

};



let a = MusicStore.getInstance();
let b = MusicStore.getInstance();

if(a === b){
    console.log("Both variables have same instance");
}
else {
    console.log("Variables have different instances");
}