export class Qualification{
    public diploma: string;
    public university: string;
    public startDate: Date;
    public endDate: Date;
    public address: string;
    public imgPath: string;
    constructor(diploma: string, university: string, startDate: Date, endDate: Date, address: string, imgPath: string){
        this.diploma=diploma;
        this.university=university;
        this.startDate=startDate;
        this.endDate=endDate;
        this.address=address;
        this.imgPath=imgPath;
    }
}