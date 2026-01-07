## **Weeks 1-2: Frontend First (UI Ready for AI Integration)**

---

### **Day 1: Project Initialization**

- Create Next.js project with TypeScript.
- Install and configure Tailwind CSS.
- Install Shadcn UI components.
- Setup folder structure: `pages/`, `components/`, `lib/`.
- Run development server to ensure everything works.
- **Suggestion:** Organize VS Code workspace, install Tailwind and Shadcn extensions.

---

### **Day 2: Layout Skeleton**

- Create dashboard page.
- Add header with project name “AI Boilerplate Generator.”
- Create containers for input form and code display.
- Implement responsive layout with Tailwind (flex/grid).
- **Suggestion:** Plan layout for both mobile and desktop views; consider card-based structure for input/output areas.

---

### **Day 3: Input Form**

- Add input area for instructions (textarea or form).
- Add submit/generate button.
- Setup basic input state management.
- Implement simple validation (cannot submit empty input).
- **Suggestion:** Use a card or panel for the form to visually separate it from code output.

---

### **Day 4: Code Display Component**

- Add scrollable area to display generated code.
- Include basic styling to distinguish code from other content.
- Plan for syntax highlighting and long-code support.
- **Suggestion:** Test with dummy content to ensure scrolling and layout behave correctly.

---

### **Day 5: Basic Interaction**

- Connect submit button to dummy function returning sample code.
- Display returned code in the code display area.
- Test multiple instructions to ensure UI updates properly.
- Add basic error handling for empty submissions.
- **Suggestion:** Check layout consistency when code output grows large.

---

### **Day 6: Styling & Polish Part 1**

- Use Shadcn cards for form and code output.
- Add spacing, padding, and rounded corners.
- Style buttons with hover and active states.
- **Suggestion:** Prioritize mobile-first design and keep consistent spacing between elements.

---

### **Day 7: Styling & Polish Part 2**

- Apply background colors to cards.
- Adjust typography (font sizes, weights).
- Plan for syntax highlighting colors and themes.
- Add loading skeletons for future API calls.
- **Suggestion:** Preview UI on multiple screen sizes to verify responsiveness.

---

### **Day 8: Code Type Selection**

- Add dropdown to select code type (Backend, Frontend, Utility).
- Update UI to reflect different code types in output area.
- Style dropdown for visibility and ease of use.
- **Suggestion:** Keep the selection prominent; consider defaulting to the most common code type.

---

### **Day 9: Local State Management**

- Store last generated code in frontend state.
- Allow clearing previous code.
- Optional: Save last generated code in `localStorage` for persistence.
- **Suggestion:** Consider how users may want to recall multiple previous codes.

---

### **Day 10: Copy to Clipboard**

- Add “Copy” button to code display.
- Show confirmation message when code is copied.
- Style button and feedback message.
- **Suggestion:** Keep button visible at all times; consider small icon for minimal UI impact.

---

### **Day 11: Loading & Feedback**

- Add loading spinner or skeleton during code generation.
- Disable submit button while waiting.
- Add error message for invalid input.
- **Suggestion:** Make feedback noticeable but unobtrusive to maintain UX flow.

---

### **Day 12: UI Refinements**

- Add shadows to cards for depth.
- Add smooth transitions for hover and loading states.
- Adjust spacing and alignment for aesthetic balance.
- Test responsive layout again.
- **Suggestion:** Compare layout with reference dashboards for inspiration.

---

### **Day 13: Prep for Backend Integration**

- Replace dummy code generation function with async placeholder for API.
- Ensure loading, input, and output states are ready for real API responses.
- Test UI with mocked API responses.
- **Suggestion:** Prepare clear state flow so backend integration is seamless.

---

### **Day 14: Final Frontend Polish**

- Verify all UI components are consistent and responsive.
- Adjust typography, colors, and spacing.
- Update README or documentation with screenshots for portfolio.
- **Suggestion:** Make sure all interactive elements are visually clear and intuitive.

---

## **Weeks 3-4: Backend + AI Integration (FastAPI / Node)**

---

### **Day 15: Backend Project Setup**

- Initialize backend project (FastAPI or Node).
- Setup folder structure: `app/`, `routers/`, `models/`.
- Install required dependencies.
- Setup environment variables for API keys.
- **Suggestion:** Plan endpoints based on frontend needs.

---

### **Day 16: Basic API Endpoint**

- Create `/generate` endpoint.
- Accept JSON input `{ instruction, type }`.
- Return dummy code for testing.
- Test endpoint with Postman or similar tool.
- **Suggestion:** Keep endpoint simple; focus on correct request/response structure.

---

### **Day 17: AI Integration Setup**

- Configure OpenAI API key.
- Implement function to send instructions to GPT-4/5 and receive code.
- Test simple instruction → code output.
- Handle basic errors.
- **Suggestion:** Keep AI calls modular for easy future adjustments.

---

### **Day 18: AI Prompt Engineering Part 1**

- Design prompts for backend CRUD generation.
- Design prompts for React component generation.
- Test output formatting for readability.
- **Suggestion:** Keep prompts short and specific to avoid messy outputs.

---

### **Day 19: AI Prompt Engineering Part 2**

- Design prompts for utility/helper functions.
- Add structured output `{ code, language }`.
- Test multi-line and complex code generation.
- **Suggestion:** Experiment with system prompts to get cleaner code.

---

### **Day 20: Endpoint Integration**

- Connect AI function to `/generate` endpoint.
- Return structured JSON to frontend.
- Test multiple instructions and code types.
- **Suggestion:** Include error handling for API failures or rate limits.

---

### **Day 21: Optional Database Setup**

- Choose DB (SQLite for MVP).
- Create table `GeneratedCode` with fields: `id, instruction, code, type, created_at`.
- Add endpoint to save generated code.
- Test saving and retrieving code.
- **Suggestion:** Use ORM for easy query management.

---

### **Day 22: API Testing & Refinement**

- Test endpoint with long or complex instructions.
- Handle invalid inputs and errors.
- Ensure consistent JSON structure.
- **Suggestion:** Include logging for easier debugging.

---

### **Day 23: Frontend-Backend Integration**

- Connect frontend submit button to backend `/generate` endpoint.
- Render AI response in code display component.
- Test loading, success, and error states.
- Test multiple code types.
- **Suggestion:** Verify smooth transitions between loading, error, and success.

---

### **Day 24: Loading & UX Enhancements**

- Improve loading UI (spinner or skeleton).
- Disable submit button during AI call.
- Display user-friendly error messages for failed API calls.
- **Suggestion:** Consider small animations for better user feedback.

---

### **Day 25: Optional Features**

- Save generated code to backend database.
- Display previously generated code on dashboard.
- Add filter or search by code type.
- **Suggestion:** Keep UI simple; avoid overwhelming the user with too many previous results.

---

### **Day 26: Security & Rate Limiting**

- Add basic rate limiting to AI endpoint.
- Sanitize inputs to prevent injections.
- Handle OpenAI API errors gracefully.
- **Suggestion:** Keep backend secure while still allowing flexible instruction input.

---

### **Day 27: Deployment Prep**

- Prepare backend for deployment (Render, Heroku, or similar).
- Prepare frontend for deployment (Vercel).
- Test environment variables and API keys in production setup.
- **Suggestion:** Ensure deployment mirrors development environment for fewer surprises.

---

### **Day 28: Final Testing & Polish**

- Test full flow: instruction → AI → display → copy.
- Check mobile and desktop responsiveness.
- Fix UI/UX bugs.
- Update README and portfolio screenshots.
- **Suggestion:** Verify performance and responsiveness before considering the project “complete.”

---

✅ **Deliverables by end of month:**

- Polished frontend dashboard (Next.js + Tailwind + Shadcn).
- Fully functional AI code generator backend endpoint.
- Optional database for saving generated code.
- Portfolio-ready MVP.

---
