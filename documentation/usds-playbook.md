# Alignment to U.S. Digital Services Playbook
We used the U.S. Digital Services Playbook as a framework to guide the development of our prototype. 


# Play 1: Understand What People Need

![
](https://lh3.googleusercontent.com/yxZo4qcn_zfS-vgANblwkK8ypON12iC7hlNHSSkZ3HUTHwoVJOiIqctFvvXyvjpmtCV-BS8BFesW "USDA USDS Play 1")

To understand the needs of our users, we developed **user personas** and **user stories** to identify how our prototype and dashboard can make their lives easier. 

[User Personas](https://github.com/metrostarsystem/usda-dva/blob/master/documentation/user-personas.md)

[User Stories](https://github.com/metrostarsystem/usda-dva/blob/master/documentation/user-stories.md)
# Play 2: Make it Simple and Intuitive
![
](https://lh3.googleusercontent.com/u_uCFA-hHhTg9bwXamVGt76h6lwOsi-nPZ1MQIIoGSjodB4spcbCwy_zSPZP8PItDc2mymNuA-xB "USDA USDS Play 2")

We developed a **user journey map** To address how our users would find, interact with, and recommend the services available in our prototype. 

# Play 3 Make it Simple and Intuitive
![
](https://lh3.googleusercontent.com/N2hOtgFRhcggKRuvjlXgY9tBIg26mqH6lmKnvEcHAfUeqo68LlQKjdWteYAb3epQOgpePFZQA_lu "USDA USDS Play 3")

To build a prototype that enables our users to succeed the first time, we used the [U.S. Web Design System Components and Guidelines](https://designsystem.digital.gov/) as the foundation for our prototype.

# Play 4 Build the service using agile and iterative practices
![
](https://lh3.googleusercontent.com/085FUkWD6nqFKsuBRDySMWUIOipo3E1qtMT5Y7uRWbiLJinDsyArhG79dO3ULDqbuJuckjlA1yny "USDA USDS Play 4")

Developing a prototype in less than four weeks required an experienced agile team. We developed a war room, held daily standups, and used tools like **Slack**, **SharePoint Online**, **Kanban**, and **GitHub** to ensure incremental development and maintain a fast pace.

[HCD-Agile Artifacts](https://github.com/metrostarsystem/usda-dva/blob/master/documentation/hcd-agile.md)

# Play 5 Structure Budgets and Contracts to Support Delivery
Not applicable, as this prototype was developed as a response to the USDA and GSA IT Modernization IT Centers of Excellence Digital Visualization and Analytics BPA. 

# Play 6 Assign One Leader and Hold That Person Accountable
![
](https://lh3.googleusercontent.com/wxJqCgqlB148RyiQOME7IWXyYZGBSaDf2f6JQ7Z9wdH582caOXA_Eom6tPlTaXlalGDEsRD6-k6t "USDA USDS Play 6")

**Our Product Manager - Senior (Product Owner) is Jason Stoner.**

![
](https://lh3.googleusercontent.com/_pSAzpkz9dfifXkm_G4wBYNAU0QFq8NOynsUtuWQoiM3KS-YW4NsPk6u4Kd__NsIdXxYNDdkSxlD "Jason Stoner - Project Manager - Senior")

He unified the team by facilitating ideation and design activities that allowed us to identify the users and scope of the prototype. He also had the final authority when pivots needed to be made. 

Jason Stoner has 15+ years leading digital teams. His experience spans the entire UX process for web and mobile projects from client interaction and collaboration, data collection, user and task analysis, information architecture, visual design, metrics, and analysis based on targeted user research.

# Play 7 Bring in Experienced Teams
![
](https://lh3.googleusercontent.com/1kJSnLrQBwjH_HN6iZ9iqInlkKwq0i6AcnUzvmOzigdlK23FMJNE1GB6dAvIU6RXtRr_ttHApqH_ "USDA USDS Play 7")

Our prototype team has day-to-day responsibilities delivering superior digital projects to high-profile federal customers. Each member of the team has supported contracts, which required digital resources to design and develop web and mobile solution, data strategy, DevOps, automation, continuous integration, and compliance with federal mandates including Section 508. 

[Section 508 Artifacts](https://github.com/metrostarsystem/usda-dva/blob/master/documentation/section-508.md)

# Play 8 Choose a Modern Technology Stack
![
](https://lh3.googleusercontent.com/VZZ5rXfaU2mMsi4_izkIC37xo5IFYCoswMtXpWc5lsXCtEMAsji1QcDxdE5EtwlhNkv0YIkMwb39 "USDA USDS Play 9")

We used a modern application stack to build the prototype.  That stack includes: 
We developed SNAP-MAP with 9 modern, **open source** technologies most appropriate to implement the prototype: **angular-cli, angular, node, leaflet, esri-leaflet, ngx-smart-modal, uswds, typescript, expressjs**

# Play 9 Deploy in a Flexible Hosting Environment

Our hosting environment is **Amazon Web Services (AWS)**.

# Play 10 Automate Testing and Deployments
![
](https://lh3.googleusercontent.com/oOO7ALR8loNMvvtWLYtlOjiQe_yFPOeNIkx7hgrc27K5-2P2pedqf_HOHr6OkPNfa2zcK4fQkbLO "USDA USDS Play 10")

We assessed the logic behind our SNAP-MAP prototype and felt that unit testing and basic automation for deployment was the right economic/cost balance. As a team, we focused on understanding the BPA and Task Orders and our MVP prototype vs. what a production level solution would require in terms of an automated testing framework to help test automation code across: **Reusability, Maintainability, and Stability**. For example, asking what would the cost of a framework leveraging **Serenity** to act as the wrapper on top of **Selenium** would be for this MVP vs. Unit Testing. 

We also wrote **Windows Batch** scripts for deploying our prototype and leveraged others across our company to take our solution and test how fast they can deploy the solution in the same **AWS environment with over 95% success rate**. 

# Play 11 Manage Security and Privacy Through Reusable Processes
![
](https://lh3.googleusercontent.com/WaUCb3hrEWEpNivzQAXQzocS0Ru_zPFpno2Qi2Yd0x6pAJl6IF3-APMERAs7oQNiYWpGBbBm2SYY "USDA USDS Play 11")

We contacted and engaged our Director of Contracts and Legal Counsel and pitched our MVP solution, to include user stories to determine whether a System of Records Notice (SORN), Privacy Impact Assessment, and other internal requirements.

It was determined that the data collected, secured, and used did not contain any Personally identifiable information (PII). We leveraged our AWS hosting infrastructure (Availability Zone us-east) and AWS security features to comply with industry standards for this project. We also purchased a domain https://www.usdacoe.com and used a single-domain Standard SSL.

# Play 12 Use Data to Drive Decisions

Our approach for Play 12 is focused on learning, experimenting and testing other features and capabilities to enhance SNAP-MAP visitors for production ready environment. 

We leveraged AWS native to monitor system-level resource utilization in real time to measure activities (i.e., response time, latency, throughput, and error rates) to ensure monitoring can measure median, 95th percentile, and 98th percentile performance. We also created automated alerts with the ability to send Alarms via email on these monitoring activities. We use Google Analytics for real-time monitoring of user behaviors (Mobile Traffic, Site Speed, Tell Sonny Conversions, Benchmarking, Demographics, New vs. Returning, and Social Traffic) for aggregated determination on whether the service meets user experience needs. We did not publish these reports externally and will be using them internally only. 
# Play 13 Default to Open

For our prototype we used open source Visual Studio Code for debugging, and Built in Integration for Git. We used **Slack** for tracking issues and bugs vs. Git for bug tracking. Understanding that a production-ready environment would extend and leverage **GitHub** for bug tracking. We leveraged web services from USDA to consume selected data endpoints for our MVP prototype. 

For the production-ready, we would extend and develop **new APIs** to integrate 3rd Party Tools (i.e., **SpagoBI, PowerBI, or Tableau** for secure external use. We documented all data attributes for our MVP solution and plan to develop a new data dictionary and data schema for our production ready solution, with all the data generated being open source and made available to reuse with no cost associated.  

