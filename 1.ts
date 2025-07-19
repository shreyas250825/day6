function Audit<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`Audit: ${constructor.name} instance created`);
    }
  };
}

@Audit
class AuditDrone {
  constructor(public id: string) {}
}

const drone = new AuditDrone("DR123"); // Logs on creation

