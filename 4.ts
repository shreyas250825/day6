interface IReport {
  body: string;
  type: string;
  url: string;
  toJSON(): object;
}

class PDFReport implements IReport {
  body: string;
  type: string;
  url: string;

  constructor() {
    this.body = "PDF content goes here";
    this.type = "application/pdf";
    this.url = "http://example.com/report.pdf";
  }

  toJSON(): object {
    return {
      body: this.body,
      type: this.type,
      url: this.url
    };
  }
}

class HTMLReport implements IReport {
  body: string;
  type: string;
  url: string;

  constructor() {
    this.body = "<h1>HTML Report</h1>";
    this.type = "text/html";
    this.url = "http://example.com/report.html";
  }

  toJSON(): object {
    return {
      body: this.body,
      type: this.type,
      url: this.url
    };
  }
}

function createReport(format: string): IReport {
  switch (format.toLowerCase()) {
    case "pdf":
      return new PDFReport();
    case "html":
      return new HTMLReport();
    default:
      throw new Error("Unknown format: " + format);
  }
}

// Example usage
const report = createReport("pdf");
console.log(report.toJSON());
