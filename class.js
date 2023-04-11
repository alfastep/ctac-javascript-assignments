class Job {
  constructor(name, industry, requiresDegree, field, level) {
    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.level = level;
  }

  getName() {
    return this.name;
  }

  getFieldAndIndustry() {
    return `The field and industry of this job are ${this.field} and ${this.industry}`;
  }

  getLevel() {
    return this.level;
  }
}

class SoftwareEngineer extends Job {
  constructor(name, industry, requiresDegree, field, location, programmingLanguage, yearsOfExperience) {
    super(name, industry, requiresDegree, field, location);
    this.programmingLanguage = programmingLanguage;
    this.yearsOfExperience = yearsOfExperience;
  }

  getProgrammingLanguage() {
    return this.programmingLanguage;
  }

  getYearsOfExperience() {
    return this.yearsOfExperience;
  }
}

const job = new Job("Nurse", "Hospital", true, "Medical", "Entry");

const job2 = new Job("Business Analyst", "Marketing and Advertising", true, "Business", "Entry");

const job3 = new Job("Lawyer", "Manufacturing", true, "Legal", "Senior");

console.log(`This is a ${job.getName()} role. ${job.getFieldAndIndustry()}.`);

console.log(`This is a ${job2.getName()} role. ${job2.getFieldAndIndustry()}.`);

console.log(`This is a ${job3.getName()} role. ${job3.getFieldAndIndustry()}.`);

const job4 = new SoftwareEngineer("Software Engineer", "Financial Services", true, "Engineering", "Mid-Senior", "Javascript", 4);

console.log(`This is a ${job4.getName()} role. The primary language used is ${job4.getProgrammingLanguage()}. A minimum of ${job4.getYearsOfExperience()} years of experience is required.`);