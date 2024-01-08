export class Travel {
  constructor(data) {
    this.id = data.id || '';
    this.driverId = data.driverId || '';
    this.originCity = data.originCity || '';
    this.endCity = data.endCity || '';
    this.price = data.price;
    this.startTime = new Date(data.startTime) || '';
    this.endTime = new Date(data.endTime) || '';
    this.createdAt = new Date(data.createdAt) || '';
  }
}
