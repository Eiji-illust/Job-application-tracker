class JobApplication {
    constructor(
        company, 
        role, 
        status = "applied", 
        salaryRange = [min,max], 
        dateApplied = "today")
        {
        this.company = company;
        this.role = role;
        this.status = status;
        this.salaryRange = salaryRange;
        this.dateApplied = dateApplied;
    
    }


}

class ApplicationTracker extends JobApplication {
    constructor(company, role, status, salaryRange, dateApplied) {
        super(company, role, status, salaryRange, dateApplied);
        this.applications = [];
    }


    addApplication(app) {
        this.applications.push(app);
        console.log(`Application for ${this.company} added`);
    }
    removeApplication(company) {
        this.applications = this.applications.filter(app => app.company !== company)
    }
    updateStatus(company, newStatus) {}
    getAverageSalary() {}
    getApplicationsByStatus(status) {}
}

const tracker = new ApplicationTracker();