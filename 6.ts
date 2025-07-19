interface EmailService {
  sendEmail(to: string, message: string): void;
}

class SmtpEmailService implements EmailService {
  sendEmail(to: string, message: string): void {
    console.log(`SMTP Email to ${to}: ${message}`);
  }
}

class MockEmailService implements EmailService {
  sendEmail(to: string, message: string): void {
    console.log(`Mock email (not sent) to ${to}: ${message}`);
  }
}

class NotificationSender {
  constructor(private emailService: EmailService) {}

  notifyUser(email: string, msg: string) {
    this.emailService.sendEmail(email, msg);
  }
}

const smtpSender = new NotificationSender(new SmtpEmailService());
smtpSender.notifyUser("user@example.com", "Welcome!");

const mockSender = new NotificationSender(new MockEmailService());
mockSender.notifyUser("fake@example.com", "This is a test.");
