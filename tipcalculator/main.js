function run(){
    const bill=5000;
    const tippercentage=5;
    const tip=bill*(tippercentage/100);
    const total=bill+tip;
    console.log("total bill is :", total);
}
run()