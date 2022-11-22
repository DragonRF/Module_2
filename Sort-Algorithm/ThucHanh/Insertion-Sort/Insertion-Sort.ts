export class InsertionSort{
    static list: number[] = [5.1,-6,7,8,1,2,12];

    public static insertionSort(list: number[]): void{
    for (let i = 1; i < list.length - 1;i++){
        let key = list[i];
        let j = i -1;
        while (j >= 0 && list[j] > key)
        {
            list[j + 1] = list[j];
            j = j - 1;
        }
        list[j + 1] = key;
    }
        for (let i = 0;i < list.length; i++){
            console.log(list[i] + ' ')
            console.log(' ')
        }
    }
    }
