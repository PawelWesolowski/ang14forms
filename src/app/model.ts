export class SmallSubModel{
    twoDigitNumber: number = 10;
    email: string = "example@domain.com";
}

export class HugeSubModel{
    hugeArray: string[] =  [...Array(1000_000)].map(x => x.toString());
}

export class Model {
    small: SmallSubModel = new SmallSubModel();
    big: HugeSubModel = new HugeSubModel()
}
