# Automated CI/CD Deployment of Angular Application to Google Cloud Firebase

## Overview

This project demonstrates the design and implementation of an automated CI/CD pipeline for deploying a frontend web application to a cloud hosting platform using GitHub Actions and Google Cloud Firebase.

The goal was to create a reliable, repeatable deployment workflow that automatically builds and publishes application updates whenever changes are merged into the main branch, eliminating manual deployment steps and ensuring consistent production releases.

Live Application:  
https://jaychen-portfolio.web.app/

## Architecture

Developer → GitHub Repository → GitHub Actions CI/CD → Firebase Hosting → End Users

Key Components:

- Angular frontend application
- Git version control
- GitHub Actions automation pipeline
- Firebase Hosting (Google Cloud)
- Automated build and deployment workflow

---

## Objectives

- Implement automated deployment pipeline
- Eliminate manual release process
- Ensure consistent builds across environments
- Demonstrate cloud deployment practices
- Apply DevOps workflow principles in a real project

---

## CI/CD Pipeline Workflow

The pipeline is triggered automatically when code is pushed or merged into the main branch.

Pipeline stages include:

1. Source checkout
2. Node.js environment setup
3. Dependency installation
4. Application build
5. Deployment to Firebase Hosting

This ensures every change goes through the same deployment process, improving reliability and reducing human error.

---

## Technologies Used

- Angular
- TypeScript
- Git & GitHub
- GitHub Actions
- Google Cloud Firebase Hosting
- Node.js

---

## Key DevOps Practices Demonstrated

- Continuous Integration and Continuous Deployment (CI/CD)
- Version control workflow
- Infrastructure automation through pipelines
- Cloud-based hosting deployment
- Automated build process
- Production release discipline
- Remote-first engineering workflow

---

## Challenges & Lessons Learned

Some of the challenges encountered during the project included:

- Configuring Firebase deployment authentication securely in CI/CD
- Managing environment setup within GitHub Actions
- Correcting deployment paths and build output configuration
- Iterating deployment workflow through multiple pipeline runs

These challenges improved understanding of pipeline troubleshooting, automation reliability, and cloud deployment configuration.

---

## Screenshots

<img width="946" height="469" alt="image" src="https://github.com/user-attachments/assets/d283f396-1688-48e3-80a9-9e8d29798dd2" />

- GitHub Actions pipeline runs
- Firebase console deployment
- Live website
- Repository structure

---

## Future Improvements

- Containerized deployment using Docker
- Infrastructure as Code for hosting configuration
- Automated testing integration
- Multi-environment deployment (staging + production)
- Monitoring and uptime checks

---

## Author

James Chege  
DevOps Engineer | Cloud Infrastructure | Automation  

LinkedIn: https://www.linkedin.com/in/jaychen123/
