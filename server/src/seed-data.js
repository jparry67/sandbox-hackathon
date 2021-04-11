import models, { connectDb } from './models/index.js';

const seedData = async () => {
    await Promise.all([
        models.User.deleteMany({}),
        models.Company.deleteMany({}),
        models.Employee.deleteMany({}),
        models.Job.deleteMany({}),
        models.Appointment.deleteMany({}),
    ]);

    // USERS
    const ryanUser = await new models.User({
        name: 'Ryan Ham',
        email: 'ryan@college.edu',
        password: 'password',
        userType: 'student',
    }).save();
    const mariaUser = await new models.User({
        name: 'Maria Farias',
        email: 'maria@college.edu',
        password: 'password',
        userType: 'student',
    }).save();
    const samUser = await new models.User({
        name: 'Sam Hampton',
        email: 'sam@college.edu',
        password: 'password',
        userType: 'student',
    }).save();
    const benUser = await new models.User({
        name: 'Ben Arroyo',
        email: 'ben@company.com',
        password: 'password',
        userType: 'employee',
    }).save();
    const davidUser = await new models.User({
        name: 'David Johnson',
        email: 'david@company.com',
        password: 'password',
        userType: 'employee',
    }).save();
    const annaUser = await new models.User({
        name: 'Anna Velazquez',
        email: 'anna@company.com',
        password: 'password',
        userType: 'employee',
    }).save();
    
    // COMPANIES
    const google = await new models.Company({
        name: 'Google', 
        location: 'San Francisco, California',
        description: "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.", 
        logoUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1626307200&v=beta&t=taTFt053tib-ytVPUk3K_097MA7xYe4z4cFT9Tnua8o',
    }).save();
    const lucid = await new models.Company({
        name: 'Lucid',
        location: 'Lehi, Utah',
        description: "Lucid is a visual collaboration suite that helps teams see and build the future. Virtual whiteboarding, intelligent diagramming, and cloud visualization come together to empower organizations to take plans from initial ideas all the way to successful delivery. Together, they are utilized in over 180 countries by more than 25 million users. Ninety-six percent of the Fortune 500 use Lucidchart, and customers include Google, GE, NBC Universal and Johnson & Johnson. Lucid’s partners include industry leaders such as Google, Atlassian, Amazon Web Services, Salesforce, and Microsoft. Since the Utah-based company’s founding in 2010, it has received numerous awards for its business and workplace culture.",
        logoUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQH_d7ReWL46Kg/company-logo_200_200/0/1602001800829?e=1626307200&v=beta&t=itVXyv5bEmKXuhQJ5Bswolp690S6Qo7ypVsuEbMaTR8',
    }).save();
    const walmart = await new models.Company({
        name: 'Walmart',
        location: 'Bentonville, Arkansas',
        description: "Fifty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world’s biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we’re reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands (Sam's Club, Jet.com, Hayneedle, Modcloth, Moosejaw and many more!), you’ll play a crucial role in shaping the future of retail, improving millions of lives around the world.",
        logoUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEcTljsUeQp-A/company-logo_200_200/0/1594303665903?e=1626307200&v=beta&t=MT7N79Izh05Dk1uYoDzX-b7KCnTb5aNCjRsMN6ARG00',
    }).save();

    //JOBS
    const productManager = await new models.Job({
        title: 'Product Manager',
    }).save();
    const softwareEngineer = await new models.Job({
        title: 'Software Engineer',
    }).save();
    const uxDesigner = await new models.Job({
        title: 'UX Designer',
    }).save();
    
    // EMPLOYEES
    const benEmployee = await new models.Employee({
        description: 'Product Manager @ Google',
        profileUrl: 'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        linkedinUrl: 'linkedin.com/in/ben-arroyo',
        userId: benUser._id,
        companyId: google._id,
        jobId: productManager._id,
    }).save();
    const davidEmployee = await new models.Employee({
        description: 'UX Designer @ Lucid',
        profileUrl: 'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        linkedinUrl: 'linkedin.com/in/david-johnson',
        userId: davidUser._id,
        companyId: lucid._id,
        jobId: softwareEngineer._id,
    }).save();
    const annaEmployee = await new models.Employee({
        description: 'Software Engineer @ Walmart',
        profileUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBwcm9maWxlJTIwcGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        linkedinUrl: 'linkedin.com/in/ben-arroyo',
        userId: annaUser._id,
        companyId: walmart._id,
        jobId: uxDesigner._id,
    }).save();

    // EMPLOYEES
    //new Date(year, month, day, hours, minutes, seconds, milliseconds)
    const benAppointment1 = await new models.Appointment({
        startTime: new Date(2021, 3, 5, 12, 0, 0, 0),
        endTime: new Date(2021, 3, 5, 14, 0, 0, 0),
        employeeId: benUser._id,
        studentId: ryanUser._id,
    }).save();
    const benAppointment2 = await new models.Appointment({
        startTime: new Date(2021, 3, 7, 12, 0, 0, 0),
        endTime: new Date(2021, 3, 7, 14, 0, 0, 0),
        employeeId: benUser._id,
    }).save();
    const benAppointment3 = await new models.Appointment({
        startTime: new Date(2021, 3, 9, 12, 0, 0, 0),
        endTime: new Date(2021, 3, 9, 14, 0, 0, 0),
        employeeId: benUser._id,
    }).save();
    const benAppointment4 = await new models.Appointment({
        startTime: new Date(2021, 3, 12, 12, 0, 0, 0),
        endTime: new Date(2021, 3, 12, 14, 0, 0, 0),
        employeeId: benUser._id,
        studentId: mariaUser._id,
    }).save();
    const benAppointment5 = await new models.Appointment({
        startTime: new Date(2021, 3, 14, 12, 0, 0, 0),
        endTime: new Date(2021, 3, 14, 14, 0, 0, 0),
        employeeId: benUser._id,
    }).save();
    const annaAppointment6 = await new models.Appointment({
        startTime: new Date(2021, 3, 16, 12, 0, 0, 0),
        endTime: new Date(2021, 3, 16, 14, 0, 0, 0),
        employeeId: annaUser._id,
    }).save();
    const davidAppointment7 = await new models.Appointment({
        startTime: new Date(2021, 3, 12, 12, 0, 0, 0),
        endTime: new Date(2021, 3, 12, 14, 0, 0, 0),
        employeeId: davidUser._id,
        studentId: ryanUser._id,
    }).save();
}

export default seedData;