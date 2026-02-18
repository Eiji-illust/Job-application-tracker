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
        // Check for duplicates
        if (this.applications.some(existingApp => existingApp.company === app.company)) {
            console.log(`Application for ${app.company} already exists`);
            return;
        }
        
        this.applications.push(app);
        console.log(`Application for ${this.company} added`);
    }
    removeApplication(company) {
        // Check if application exists
        if (!this.applications.some(app => app.company === company)) {
            console.log(`Application for ${company} not found`);
            return;
        }
        this.applications = this.applications.filter(app => app.company !== company)
    }
    updateStatus(company, newStatus) {
        const app = this.applications.find(app => app.company === company);
        if (app) {
            app.status = newStatus;
            console.log(`Status for ${company} updated to ${newStatus}`);
        } else {
            console.log(`Application for ${company} not found`);
        }
    }
    getAverageSalary() {
        const validSalaries = this.applications
            .filter(app => app.salaryRange && app.salaryRange.length === 2)
            .map(app => (app.salaryRange[0] + app.salaryRange[1]) / 2);
    }
    getApplicationsByStatus(status) {
        return this.applications.filter(app => app.status === status);
    }
}

const tracker = new ApplicationTracker();