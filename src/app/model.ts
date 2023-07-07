export class SmallSubModel{
    twoDigitNumber: number | undefined | null = 10000;
    email: string | undefined | null = "example@domain.com";
}

export class HugeSubModel{
    hugeArray: string[]|null = null;
    constructor(size: number){
      console.warn(size);
        this.hugeArray = Array.from({length: size}, (x, i) => (i+size).toString());
    }
}

export class Model {
    small: SmallSubModel|null = null;
    big: HugeSubModel|null = null;

    public createSmall(){
        this.small = new SmallSubModel();
    }

    public createBig(size?: number | null){
        this.big = new HugeSubModel(size??this.small?.twoDigitNumber??10000);
    }


}
