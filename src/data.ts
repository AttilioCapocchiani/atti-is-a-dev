import type {Profile} from "./models.ts";

export const atti: Profile = {
    firstName: "Attilio",
    lastName: "Capocchiani",
    email: "attilio.capocchiani@gmail.com",
    phone: "+39 3472511041",
    jobTitle: "Senior Consultant",
    company: "Deloitte Digital",
    country: "Italy",
    links: {
        linkedIn: "https://www.linkedin.com/in/%E2%98%81%EF%B8%8F-attilio-capocchiani-ba02117b/",
        trailhead: "https://www.salesforce.com/trailblazer/realatti"
    },

    education: `Earned a Bachelor’s Degree in Computer Science and Technologies for Software Production from the University of Bari “Aldo Moro”, with a final project that designed and implemented an ontology-based recommender system for cooking recipes, delivering highly accurate and personalized suggestions.`,
    description: `Solution Architect with 10 years of experience in consulting and 8 with Salesforce. I influence stakeholders in choosing solutions that embrace standard and custom and that are as scalable as possible. An expert in the Automotive industry, I have led the implementation of CRM and dealer portals for several automotive vendors. Curious and proactive, I try to learn about any new technology, even those not related to the Salesforce world. Native italian speaker, fluent in English thanks to experience with clients from London (UK)`,

    certifications: [
        {name: "Salesforce Certified Platform Developer I", issuer: "Salesforce"},
        {name: "Salesforce Certified Administrator", issuer: "Salesforce"},
        {name: "Salesforce Certified Service Cloud Consultant", issuer: "Salesforce"},
        {name: "Salesforce Certified App Builder", issuer: "Salesforce"},
        {name: "Salesforce Certified Associate", issuer: "Salesforce"},
        {name: "Salesforce Certified JavaScript Developer I", issuer: "Salesforce"},
        {name: "Salesforce Certified Mulesoft Associate", issuer: "Salesforce"},
        {name: "Salesforce Certified Development Lifecycle and Deployment Architect", issuer: "Salesforce"},
        {name: "Salesforce Certified Integration Architect", issuer: "Salesforce"},
        {name: "Salesforce Certified Identity and Access Management Architect", issuer: "Salesforce"},
        {name: "Salesforce Certified System Architect", issuer: "Salesforce"},
        {name: "Salesforce Certified Sharing and Visibility Architect", issuer: "Salesforce"},
        {name: "Salesforce Certified Data Architect", issuer: "Salesforce"},
        {name: "Salesforce Certified Application Architect", issuer: "Salesforce"},
        {name: "Salesforce Certified AI Associate", issuer: "Salesforce"},
        {name: "Mulesoft Associate", issuer: "Salesforce"},
        {name: "Scrum Master", issuer: "APMG International"}
    ],

    jobHistory: [
        {
            "role": "Senior Consultant",
            "company": "Deloitte Digital",
            "period": "September 2017 - current",
            "description": "Applying standard and custom solutions for various customers in different industries (Automotive, Energy, Banking). Leading teams for the development of complex solutions. Pre-sales activities for new potential customers.",
            "expanded": false,
            "details": [
                {
                    "client": "Automotive Client",
                    "expanded": true,
                    "details": [
                        {
                            "role": "Solution Lead – Tech Advisor",
                            "expanded": false,
                            "content": [
                                "Solution design to satisfy business requirements using best practices",
                                "Cross-country Development team management",
                                "End-to-end solution design",
                                "Training sessions to final users of the platform",
                                "Support in pre-sales",
                                "Build POC (incl. Agentforce)"
                            ]
                        },
                        {
                            "role": "Technical Leader – Release Manager",
                            "expanded": false,
                            "content": [
                                "Technical solution design to satisfy business requirements using best practices",
                                "Cross-country Development team management",
                                "Code review",
                                "Release management",
                                "Solution presentation to the customer",
                                "Agile management of deploys for sprints"
                            ]
                        }
                    ]
                },
                {
                    "client": "Automotive Client",
                    "expanded": true,
                    "details": [
                        {
                            "role": "Developer",
                            "expanded": false,
                            "content": [
                                "Development of a full B2C portal that aims to onboard new clients",
                                "Development and maintenance of custom features for Service Cloud"
                            ]
                        }
                    ]
                },
                {
                    "client": "Automotive Client",
                    "expanded": true,
                    "details": [
                        {
                            "role": "Developer",
                            "expanded": false,
                            "content": [
                                "Technical and functional analysis for different project stream in automotive industry",
                                "Development and maintenance of custom features for Service Cloud",
                                "User training"
                            ]
                        }
                    ]
                },
                {
                    "client": "Automotive Client",
                    "expanded": true,
                    "details": [
                        {
                            "role": "Developer",
                            "expanded": false,
                            "content": [
                                "Custom Vue + NodeJS application development on Heroku platform",
                                "Integration with Salesforce Marketing Cloud standard and custom web services"
                            ]
                        }
                    ]
                },
                {
                    "client": "Energy Client",
                    "expanded": true,
                    "details": [
                        {
                            "role": "Technical Leader",
                            "expanded": false,
                            "content": [
                                "Technical solution design in order to satify business requirements using best practices",
                                "Development team management",
                                "Code review",
                                "Release management",
                                "Solution presentation to the customer",
                                "Training sessions to final users of the platform"
                            ]
                        }
                    ]
                },
                {
                    "client": "Banking Client",
                    "expanded": true,
                    "details": [
                        {
                            "role": "Technical Leader",
                            "expanded": false,
                            "content": [
                                "Technical solution design in order to satify business requirements using best practices",
                                "Development team management",
                                "Code review",
                                "Release management",
                                "Solution presentation to the customer",
                                "Training sessions to final users of the platform"
                            ]
                        },
                        {
                            "role": "Junior Developer",
                            "expanded": false,
                            "content": [
                                "Migration to Lightning Experience of 1500+ user with a rework of the Account page, completely custom made with Lightning Components",
                                "Migration of some business processes to Salesforce",
                                "Integration with legacy systems via custom API calls"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "role": "Java Developer",
            "company": "Advancia Technologies",
            "period": "September 2015 - September 2017",
            "description": "Collaborated within a development team to maintain and implement minor enhancements for an application enabling bank employees to efficiently manage automotive and real estate leasing processes, ensuring system reliability and continuous improvement.",
            "expanded": false,
            "details": [
                {
                    "client": "Banking Client",
                    "expanded": true,
                    "details": [
                        {
                            "role": "Java Developer",
                            "expanded": false,
                            "content": [
                                "Frontend development",
                                "Backend development",
                                "Integration with legacy systems (AS/400)",
                                "Release Management"
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    lookingForJob: false
}