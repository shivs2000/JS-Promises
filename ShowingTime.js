function ShowTime(){
    const DateTime=new Date();

    console.log(DateTime.toLocaleString("en-IN"));



    setTimeout(ShowTime,1000);
}
ShowTime();