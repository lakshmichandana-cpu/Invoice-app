export class Invoice {
  constructor(
    public id: string,
    public createdAt: string,
    public paymentDue: string,
    public description: string,
    public paymentTerms: string,
    public partyName: string,
    public clientMobile: number,
    public status: string,
    public senderAddress: {
      street: string;
      city: string;
      postCode: string;
      country: string;
    },
    public clientAddress: {
      street: string;
      city: string;
      postCode: string;
      country: string;
    },
    public items: {
      name: string;
      quantity: number;
      price: number;
      gst: number;
      total: number;
    }[],
    public total: number
  ) {}
}
