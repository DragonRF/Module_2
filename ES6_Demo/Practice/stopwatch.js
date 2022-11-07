class StopWatch{
    constructor(startTime,endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
    start(){
        let currentStartTime = new Date()
        this.startTime = currentStartTime.getSeconds()*1000 + currentStartTime.getMilliseconds();
        return this.startTime;
    }
    stop(){
        let currentEndTime = new Date()
        this.endTime = currentEndTime.getSeconds()*1000 + currentEndTime.getMilliseconds();
        return this.endTime;
    }
    getElapsedTime(){
        return (this.endTime-this.startTime );
    }
}
function randomUniqueNum(range, outputCount) {
    let arr = []
    for (let i = 1; i <= range; i++) {
        arr.push(i);
    }
    let result = [];
    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }
    return result;
}

let stopWatch = new StopWatch();
stopWatch.start()
let a = randomUniqueNum(1000000, 1000000);
a.sort(function(a, b){return a-b})
stopWatch.stop()
console.log(stopWatch.startTime)
console.log(stopWatch.endTime)
console.log(stopWatch.getElapsedTime())
console.log(a);
