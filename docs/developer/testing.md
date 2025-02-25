---
id: testing
title: Testing
sidebar_position: 4
---

# Testing

## Introduction
This document provides an overview of the testing architecture for [INSERT PROJECT NAME HERE]. It encompasses continuous testing concepts such as testing across the software development lifecycle as well as automated execution of tests through automation. 

---

## Testing Categories

The below list of test categories are included in our testing setup. Further details are provided below.

- [ ] **Static Code Analysis:** checks code for syntax, style, vulnerabilities, and bugs
- [ ] **Unit Tests:** tests functions or components to verify that they perform as intended
- [ ] **Security Tests:** identifies potential security vulnerabilities
- [ ] **Build Tests:** checks if the code builds into binaries or packages successfully
- [ ] **Acceptance Tests:** validates against end-user & stakeholder requirements
- [ ] **Integration Tests**
- [ ] **System Tests**
- [ ] **Performance Tests**
- [ ] **Security Tests**
- [ ] **Usability Tests**
- [ ] **Regression Tests**
- [ ] **Smoke Tests**

### [INSERT TESTING CATEGORY HERE] Tests

- Location: `[INSERT RELATIVE PATH TO SUB-FOLDER / FILE / FILE PATTERN HERE]`
- Purpose: [INSERT A 1-SENTENCE PURPOSE STATEMENT FOR TEST HERE]
- Running Tests:
  - Manually:
    1. [INSERT STEP 1]
    2. [INSERT STEP 2]
    3. [INSERT WHERE TO VIEW RESULTS]
  - Automatically:
    - Frequency:
      - [INSERT TRIGGER OF WHAT KICKS OFF YOUR TESTS, E.G. CODE CHANGES, COMMITS, ETC.]
      - [INSERT TIMING OF WHEN YOUR TESTS KICK OFF, E.G. NIGHTLY, EVERY WEEK, ETC.]
    - Results Location: `[INSERT PATH OR LOCATION WHERE RESULTS WILL RESIDE]`
- Contributing:
  - Framework Used: [INSERT YOUR TESTING FRAMEWORK OF CHOICE]
  - Tips:
    - [INSERT TIPS ON CONTRIBUTING TESTS HERE]