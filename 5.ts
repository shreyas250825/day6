interface PaymentGateway {
  process(amount: number): boolean;
}

// 1. Real bank transfer gateway
class BankTransferGateway implements PaymentGateway {
  process(amount: number): boolean {
    console.log(`[BankTransferGateway] Processing payment of ₹${amount}...`);
    // Simulate success
    console.log(`[BankTransferGateway] Payment of ₹${amount} successful.`);
    return true;
  }
}

// 2. Mock gateway that simulates failure
class MockFailGateway implements PaymentGateway {
  process(amount: number): boolean {
    console.log(`[MockFailGateway] Simulating failure for ₹${amount}`);
    return false;
  }
}

// 3. Payment processor that uses the injected gateway
class PaymentProcessor {
  private gateway: PaymentGateway;

  constructor(gateway: PaymentGateway) {
    this.gateway = gateway;
  }

  makePayment(amount: number): void {
    console.log(`\n[PaymentProcessor] Initiating payment of ₹${amount}`);
    const success = this.gateway.process(amount);

    if (success) {
      console.log("[PaymentProcessor] Payment processed successfully.");
    } else {
      console.error("[PaymentProcessor] Payment failed. Please try again.");
    }
  }
}

// ✅ Example Usage
const realGateway = new BankTransferGateway();
const mockGateway = new MockFailGateway();

const processor1 = new PaymentProcessor(realGateway);
processor1.makePayment(1000);  // Simulate success

const processor2 = new PaymentProcessor(mockGateway);
processor2.makePayment(500);   // Simulate failure
