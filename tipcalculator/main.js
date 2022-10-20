function run(){
    const bill=5000;
    const tippercentage=5;
    const discountpercent=2.5;
    const dis=bill*(discountpercent/100);
    const tip=bill*(tippercentage/100);
    
    const total=bill+tip-dis;
    console.log("total bill is :", total);
}
run()