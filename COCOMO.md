# Constructive Cost Model (COCOMO) Estimation

This document provides an estimated project cost and schedule based on the Basic COCOMO (Constructive Cost Model) methodology for the **Cybernetics Decentral** website.

## 1. Project Characteristics
The project is a standard static web application consisting of HTML, CSS, and JavaScript. It falls under the **"Organic"** mode in the COCOMO model, which represents a relatively small, straightforward project developed by a small team with good prior experience.

**Assumptions:**
- Estimated Size: **1.5 KLOC** (1,500 Lines of Code) across HTML, CSS, and JS files.
- Project Type: **Organic**
- Average Monthly Salary per Developer: **$8,000**

## 2. COCOMO Constants for Organic Projects
- `a` = 2.4
- `b` = 1.05
- `c` = 2.5
- `d` = 0.38

## 3. Calculations

### Effort (E)
The effort is measured in Person-Months (PM).
Formula: `E = a * (KLOC)^b`
- `E = 2.4 * (1.5)^1.05`
- `E = 2.4 * 1.5307`
- **E ≈ 3.67 Person-Months**

### Development Time (T)
The total time to complete the project in Months.
Formula: `T = c * (E)^d`
- `T = 2.5 * (3.67)^0.38`
- `T = 2.5 * 1.637`
- **T ≈ 4.09 Months**

### Average Staffing (S)
The average number of developers needed.
Formula: `S = E / T`
- `S = 3.67 / 4.09`
- **S ≈ 0.9 Developers** (Effectively 1 Full-Time Equivalent Developer)

## 4. Final Cost Estimation

The total estimated price for developing this project is derived by multiplying the total Effort (Person-Months) by the assumed average salary.

Formula: `Cost = Effort * Salary per Month`
- `Cost = 3.67 * $8,000`
- **Estimated Price = $29,360**

---

*Note: This is an estimation based on the Basic COCOMO model and represents the core development cost. It does not account for domain hosting, continuous maintenance, or extensive marketing costs.*
