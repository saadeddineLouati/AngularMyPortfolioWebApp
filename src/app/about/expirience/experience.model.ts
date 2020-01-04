export class Exerience{
    public position: string;
    public description: string;
    public company: string;
    public startDate: Date;
    public endDate: Date;
    public address: string;
    public imgPath: string;
    public technologies: string[];
    public companyAddress: string;

    constructor(position: string, description: string, company: string, startDate: Date, endDate: Date, address: string, imgPath: string, technologies: string[], companyAddress){
        this.position=position;
        this.description=description;
        this.company=company;
        this.startDate=startDate;
        this.endDate=endDate;
        this.address=address;
        this.imgPath=imgPath;
        this.technologies=technologies;
        this.companyAddress=companyAddress;
    }
}