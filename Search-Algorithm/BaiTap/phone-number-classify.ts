function classifyPhoneNumber(phoneNumber: string[]) {
    let viettel: string[] = [];
    let mobifone: string[] = [];
    let vinaphone: string[] = [];

    for (let i=0; i < phoneNumber.length; i++) {
        switch (phoneNumber[i].substring(0, 3)) {
            case '086':
            case '096':
            case '097':
            case '098':
            case '032':
            case '033':
            case '034':
            case '035':
            case '036':
            case '037':
            case '038':
            case '039':
                viettel.push(phoneNumber[i]);
                break;
        }
        switch (phoneNumber[i].substring(0, 3)) {
            case '088':
            case '091':
            case '094':
            case '083':
            case '084':
            case '085':
            case '081':
            case '082':
                vinaphone.push(phoneNumber[i]);
                break;
        }
        switch (phoneNumber[i].substring(0, 3)) {
            case '089':
            case '090':
            case '093':
            case '070':
            case '079':
            case '077':
            case '076':
            case '078':
                mobifone.push(phoneNumber[i]);
                break;
        }
    }
    console.log(`Số điên thoại Viettel: ${viettel}`);
    console.log(`Số điên thoại Vinaphone: ${vinaphone}`);
    console.log(`Số điên thoại Mobifone: ${mobifone}`);

}
let listPhoneNumber: string[] = ['0863125456', '0961939448', '0379263805', '0853980339', '0813695245', '0935678521', '0773950186'];
classifyPhoneNumber(listPhoneNumber);