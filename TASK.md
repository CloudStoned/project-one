## 🔹 Week 1 — Frontend Foundation (shadcn)

### **Day 1 – Project Setup**

- Create Next.js project (App Router)
- Install Tailwind CSS
- Initialize shadcn/ui
- Run app and verify setup

---

### **Day 2 – App Layout**

- Create base layout (Header + main container)
- Set spacing and max width
- Add simple navigation links

---

### **Day 3 – Shared UI Components**

- Create app-level wrappers using shadcn:

  - Button
  - Card
  - Input
  - Textarea
  - Select

- Create:

  - FeatureCard
  - ResultPanel
  - LoadingSkeleton

---

### **Day 4 – Image Analysis UI**

- Create `/image-analysis` page
- Image upload with preview
- Optional prompt input
- Submit button (disabled logic)
- Static result placeholder

---

### **Day 5 – Text Summary UI**

- Create `/text-summary` page
- Textarea input
- Summary length select
- Submit button
- Static result placeholder

---

### **Day 6 – UI Polish**

- Add loading skeletons
- Add error alert component
- Improve spacing and UX
- Keyboard / basic accessibility check

---

### **Day 7 – Frontend Cleanup**

- Refactor duplicated UI logic
- Ensure consistent shadcn usage
- Prepare frontend for API wiring

---

## 🔹 Week 2 — Backend + Wiring (No AI)

### **Day 8 – Backend Setup**

- Initialize FastAPI project
- Enable CORS
- Add health check endpoint

---

### **Day 9 – Image Analysis Endpoint**

- POST `/image-analysis`
- Accept image + optional prompt
- Validate input
- Return mock structured response

---

### **Day 10 – Text Summary Endpoint**

- POST `/text-summary`
- Accept text + length option
- Validate input
- Return mock summary response

---

### **Day 11 – Frontend → Backend (Image)**

- Connect image analysis UI to backend
- Handle loading + error states
- Render mock result

---

### **Day 12 – Frontend → Backend (Text)**

- Connect text summary UI to backend
- Handle loading + error states
- Render mock summary

---

### **Day 13 – Error Handling**

- Handle invalid inputs
- Handle backend failures
- Display shadcn Alert components

---

### **Day 14 – Refactor & Stabilize**

- Clean request/response schemas
- Remove unused code
- Confirm full frontend ↔ backend flow

---

## 🔹 Week 3 — AI Integration

### **Day 15 – AI Provider Setup**

- Add AI SDK / client
- Load environment variables
- Create shared AI service module

---

### **Day 16 – Image Analysis (AI Logic)**

- Send image to vision model
- Use fixed, opinionated prompt
- Return structured analysis

---

### **Day 17 – Image Analysis Integration**

- Replace mock response
- Ensure frontend renders AI output
- Handle model errors

---

### **Day 18 – Text Summary (AI Logic)**

- Send text to language model
- Generate summary based on length
- Clean and structured output

---

### **Day 19 – Text Summary Integration**

- Replace mock response
- Ensure frontend renders summary
- Handle empty or large inputs

---

### **Day 20 – AI Error & Cost Guards**

- Add basic timeouts
- Limit input size
- Prevent empty requests

---

### **Day 21 – End-to-End Testing**

- Test both features fully
- Verify UX states
- Fix edge cases

---

## 🔹 Week 4 — Plug-and-Play Conversion

### **Day 22 – Component Refactor**

- Convert pages into:

  - `<ImageAnalysis />`
  - `<TextSummary />`

- Extract logic into hooks

---

### **Day 23 – Component APIs**

- Add props:

  - defaultPrompt
  - onResult
  - disabled

- Ensure components are reusable

---

### **Day 24 – Backend Refactor**

- Organize backend by feature
- Centralize AI provider logic
- Add simple config file

---

### **Day 25 – Demo Pages**

- Create demo pages using components
- Ensure zero duplication
- Polish UI

---

### **Day 26 – Documentation**

- Write main README
- Add feature-level docs
- Document env vars and setup

---

### **Day 27 – Final Cleanup**

- Remove dead code
- Improve naming
- Final UX polish

---

### **Day 28 – Final Review**

- Full walkthrough
- README review
- Prep for portfolio / demo
