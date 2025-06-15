
<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# RESUME-CRAFTED

<em>Elevate your career with optimized, standout resumes.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/jeevanba273/resume-crafted?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/jeevanba273/resume-crafted?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/jeevanba273/resume-crafted?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/TOML-9C4121.svg?style=flat&logo=TOML&logoColor=white" alt="TOML">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<br>
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=flat&logo=Zod&logoColor=white" alt="Zod">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/datefns-770C56.svg?style=flat&logo=date-fns&logoColor=white" alt="datefns">
<img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990.svg?style=flat&logo=React-Hook-Form&logoColor=white" alt="React%20Hook%20Form">

</div>
<br>

---

# Live Demo

> *Live Demo:*
> Check out the live app on [Railway App](https://resume-crafted.up.railway.app/).

---

## 📄 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
    - [Prerequisites](#-prerequisites)
    - [Installation](#%EF%B8%8F-installation)
    - [Usage](#-usage)
    - [Testing](#-testing)
- [Features](#-features)
- [Project Structure](#-project-structure)
    - [Project Index](#-project-index)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)

---

## ✨ Overview

Resume Crafted is a powerful developer tool designed to help job seekers create ATS-optimized resumes and cover letters tailored for the Indian job market. 

**Why Resume Crafted?**

This project empowers users to enhance their job application materials with ease and efficiency. The core features include:

- 🎯 **ATS Optimization:** Generate resumes that pass Applicant Tracking Systems, increasing interview chances.
- 🔗 **Supabase Integration:** Seamlessly manage user data and authentication for a smooth experience.
- 🌙 **Responsive Design:** Enjoy a user-friendly interface that adapts to both light and dark modes across devices.
- 📊 **Feedback Mechanism:** Receive actionable insights on resume content to improve job application success.
- ⚙️ **Modern Tech Stack:** Built with TypeScript, React, and Tailwind CSS for a robust and maintainable codebase.

---

## 📌 Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>React-based SPA</li><li>Next.js framework for server-side rendering</li><li>TypeScript for type safety</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>ESLint for linting</li><li>TypeScript for static type checking</li><li>Prettier for code formatting</li></ul> |
| 📄 | **Documentation** | <ul><li>README.md for project overview</li><li>Inline comments for code clarity</li><li>Configuration files documented (e.g., `config.toml`)</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Supabase for backend services</li><li>Radix UI for accessible components</li><li>React Router for navigation</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Component-based architecture</li><li>Reusable UI components (e.g., buttons, forms)</li><li>Separation of concerns with hooks and context</li></ul> |
| 🧪 | **Testing**       | <ul><li>Jest for unit testing</li><li>React Testing Library for component testing</li><li>TypeScript for type-safe tests</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Code splitting with Next.js</li><li>Optimized images and assets</li><li>Tailwind CSS for utility-first styling</li></ul> |
| 🛡️ | **Security**      | <ul><li>Environment variables for sensitive data</li><li>Supabase for secure authentication</li><li>Input validation with Zod</li></ul> |
| 📦 | **Dependencies**  | <ul><li>React, TypeScript, Tailwind CSS</li><li>Radix UI components for UI elements</li><li>Various utility libraries (e.g., date-fns, clsx)</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Next.js for scalable server-side rendering</li><li>React Query for efficient data fetching</li><li>Modular component design for easy expansion</li></ul> |

---

## 📁 Project Structure

```sh
└── resume-crafted/
    ├── README.md
    ├── bun.lockb
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── favicon.ico
    │   ├── placeholder.svg
    │   └── robots.txt
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── components
    │   ├── hooks
    │   ├── index.css
    │   ├── integrations
    │   ├── lib
    │   ├── main.tsx
    │   ├── pages
    │   └── vite-env.d.ts
    ├── supabase
    │   ├── config.toml
    │   ├── functions
    │   └── migrations
    ├── tailwind.config.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

### 📑 Project Index

<details open>
	<summary><b><code>RESUME-CRAFTED/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
					<td style='padding: 8px;'>- Configuration settings define the TypeScript compiler options for the project, ensuring compatibility with modern JavaScript features and enhancing code quality through strict linting rules<br>- By specifying module resolution and allowing TypeScript extensions, it facilitates seamless integration with the projects bundler<br>- This setup supports the overall architecture by promoting maintainability and adherence to best practices within the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures PostCSS to enhance the styling capabilities of the project by integrating Tailwind CSS for utility-first design and Autoprefixer for automatic vendor prefixing<br>- This setup streamlines the development process, ensuring that styles are both modern and compatible across various browsers, thereby contributing to a cohesive and responsive user interface within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Serves as the foundational entry point for the Resume Crafted application, designed to generate ATS-optimized resumes and cover letters specifically for the Indian job market<br>- It establishes the essential HTML structure, integrates necessary metadata for SEO and social sharing, and loads the main application script, enabling users to effectively navigate and utilize the platform for enhancing their job application materials.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures ESLint for a TypeScript project, ensuring adherence to best practices and coding standards<br>- It integrates recommended settings for JavaScript and TypeScript, while also incorporating plugins for React hooks and refresh functionality<br>- By establishing specific rules and global variables, it enhances code quality and consistency across the codebase, ultimately facilitating a smoother development experience.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/tailwind.config.ts'>tailwind.config.ts</a></b></td>
					<td style='padding: 8px;'>- Configures Tailwind CSS for a project, enabling a responsive design with a focus on dark mode support and custom theming<br>- It defines content sources for styling, establishes a centralized container layout, and extends the default theme with custom colors, animations, and background gradients<br>- This setup enhances the overall user interface, ensuring a visually appealing and cohesive experience across various components and pages within the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
					<td style='padding: 8px;'>- Configuration settings define the TypeScript compiler options for the project, ensuring compatibility with modern JavaScript features and React<br>- By specifying target environments and module resolution strategies, it facilitates seamless integration of TypeScript within the broader application architecture<br>- This setup enhances development efficiency while maintaining code quality through linting and strict type-checking practices, ultimately supporting a robust and scalable codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides an overview of the project, detailing its purpose, features, and usage instructions<br>- It serves as a guide for users and contributors, facilitating understanding of the codebase architecture and how different components interact<br>- The documentation aims to enhance user experience and streamline onboarding for new developers, ensuring clarity and accessibility throughout the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
					<td style='padding: 8px;'>- Configures the Vite development environment for a React application, optimizing the build process and enhancing developer experience<br>- It sets up a local server on port 8080, integrates essential plugins for React and component tagging, and establishes path aliases for streamlined imports<br>- This setup facilitates efficient development and testing, contributing to the overall architecture of the project by ensuring a smooth workflow.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Configuration settings define the TypeScript compilation environment for the project, establishing references to application and Node configurations<br>- It facilitates module resolution and path mapping, enhancing code organization and maintainability<br>- By allowing JavaScript files and relaxing certain strictness checks, it supports a flexible development approach, ensuring seamless integration within the broader codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/components.json'>components.json</a></b></td>
					<td style='padding: 8px;'>- Defines the configuration for component architecture within the project, establishing a structured approach to styling and component management<br>- It integrates Tailwind CSS for design consistency and sets up aliases for streamlined imports across the codebase<br>- This enhances maintainability and readability, facilitating a cohesive development experience while ensuring adherence to the projects design principles.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the project configuration and dependencies for a Vite-based React application utilizing TypeScript<br>- It establishes essential scripts for development, building, linting, and previewing the application<br>- The architecture integrates various UI components from Radix UI and other libraries, facilitating a robust and responsive user interface while ensuring efficient state management and form handling through React Query and React Hook Form.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- supabase Submodule -->
	<details>
		<summary><b>supabase</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ supabase</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/supabase/config.toml'>config.toml</a></b></td>
					<td style='padding: 8px;'>- Configuration settings define the operational parameters for the Supabase project, enabling essential services such as API access, database connectivity, authentication, and storage<br>- By specifying ports and enabling features like JWT verification for functions, these settings facilitate seamless integration and interaction within the overall architecture, ensuring a robust environment for application development and deployment.</td>
				</tr>
			</table>
			<!-- functions Submodule -->
			<details>
				<summary><b>functions</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ supabase.functions</b></code>
					<!-- optimize-resume Submodule -->
					<details>
						<summary><b>optimize-resume</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ supabase.functions.optimize-resume</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/supabase/functions/optimize-resume/index.ts'>index.ts</a></b></td>
									<td style='padding: 8px;'>- Optimize-resume serves as an edge function that enhances job seekers resumes by analyzing them against specific job descriptions<br>- It processes uploaded resumes, extracts relevant text, and utilizes OpenAIs API to evaluate ATS compatibility, providing users with a detailed analysis and actionable improvement suggestions<br>- The results are stored in a Supabase database, ensuring users receive tailored feedback to enhance their job application success.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
					<td style='padding: 8px;'>- Facilitates TypeScript integration with Vite by providing type definitions for Vites client-side features<br>- This enhances the development experience by enabling type checking and autocompletion, ensuring that developers can leverage Vites capabilities effectively within the broader project architecture<br>- This contributes to a more robust and maintainable codebase, streamlining the development process.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/main.tsx'>main.tsx</a></b></td>
					<td style='padding: 8px;'>- Initializes the React application by rendering the main App component into the designated root element of the HTML document<br>- This entry point serves as the foundation for the entire codebase, ensuring that the user interface is properly mounted and styled, thereby facilitating user interaction and enhancing the overall experience within the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/App.tsx'>App.tsx</a></b></td>
					<td style='padding: 8px;'>- App serves as the central component of the application, orchestrating the user interface and routing<br>- It manages dark mode preferences, ensuring a personalized experience, while integrating essential UI elements like toasters and tooltips<br>- By leveraging React Router, it facilitates seamless navigation across various pages, including authentication, pricing, and user dashboards, thereby enhancing overall user engagement and accessibility within the codebase architecture.</td>
				</tr>
			</table>
			<!-- pages Submodule -->
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.pages</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/NotFound.tsx'>NotFound.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a user-friendly 404 error page that enhances the overall navigation experience within the application<br>- It informs users when a requested page cannot be found, while offering a clear call-to-action to return to the homepage<br>- By integrating a consistent layout with the Navbar and Footer components, it maintains the applications aesthetic and functional coherence, contributing to a seamless user experience.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/ResumeOptimizer.tsx'>ResumeOptimizer.tsx</a></b></td>
							<td style='padding: 8px;'>- ResumeOptimizer serves as a central component of the application, enabling users to tailor their resumes to specific job descriptions, thereby enhancing their chances of passing Applicant Tracking Systems (ATS)<br>- It integrates user authentication, displays a user-friendly interface with tabs for uploading resumes and viewing resume history, and provides instant feedback on resume optimization, all while adapting to light and dark themes for improved user experience.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/HowItWorksPage.tsx'>HowItWorksPage.tsx</a></b></td>
							<td style='padding: 8px;'>- HowItWorksPage serves as an informative guide for users, outlining a straightforward six-step process to create ATS-optimized resumes and cover letters tailored for the Indian job market<br>- It enhances user engagement by detailing each step, from uploading a resume to generating optimized documents, ultimately encouraging users to start their journey with a clear call to action<br>- The page integrates seamlessly with the overall project architecture, providing essential user experience elements.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/Index.tsx'>Index.tsx</a></b></td>
							<td style='padding: 8px;'>- The Index component serves as the main entry point for the application, orchestrating the layout and structure of the user interface<br>- It integrates various essential sections, including navigation, hero content, features, testimonials, and a call to action, ensuring a cohesive user experience<br>- By organizing these components, it enhances the overall functionality and visual appeal of the application, guiding users through key information seamlessly.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/Auth.tsx'>Auth.tsx</a></b></td>
							<td style='padding: 8px;'>- Auth component facilitates user authentication by providing a seamless interface for login and signup processes<br>- It leverages form validation to ensure data integrity and integrates with Supabase for secure authentication<br>- By managing user sessions and displaying appropriate messages, it enhances user experience while navigating between login and signup states, ultimately directing authenticated users to the dashboard.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/Pricing.tsx'>Pricing.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a comprehensive pricing page for the Resume Crafted application, emphasizing its commitment to offering lifetime access at no cost<br>- It highlights key features available to users, addresses common questions regarding the services free nature, and encourages user engagement through a clear call to action<br>- The design integrates seamlessly with the overall application architecture, ensuring a cohesive user experience.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/Dashboard.tsx'>Dashboard.tsx</a></b></td>
							<td style='padding: 8px;'>- Dashboard component serves as the central hub for user interaction within the application, providing a personalized experience after authentication<br>- It displays user-specific information, facilitates navigation to key features such as resume optimization, history management, and account settings, and ensures a seamless user experience with loading states and authentication checks<br>- The integration of a responsive layout enhances usability, while the Navbar and Footer components maintain consistent site navigation.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/pages/Account.tsx'>Account.tsx</a></b></td>
							<td style='padding: 8px;'>- AccountPage facilitates user account management by allowing users to view and update their profile information, including their full name and email address, as well as change their password<br>- It integrates with Supabase for authentication and data management, ensuring a seamless experience<br>- The page also includes validation for user inputs and provides feedback through toast notifications, enhancing user interaction within the application.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- hooks Submodule -->
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.hooks</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/hooks/use-mobile.tsx'>use-mobile.tsx</a></b></td>
							<td style='padding: 8px;'>- Facilitates responsive design by determining if the user is on a mobile device based on screen width<br>- It leverages the browsers media query capabilities to dynamically update the mobile state, ensuring that components can adapt their rendering and behavior accordingly<br>- This enhances user experience across different devices within the overall project architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/hooks/use-toast.ts'>use-toast.ts</a></b></td>
							<td style='padding: 8px;'>- Provides a customizable toast notification system for the application, enabling users to display brief messages and alerts<br>- It manages the lifecycle of notifications, including adding, updating, dismissing, and removing them after a specified duration<br>- This functionality enhances user experience by delivering timely feedback and information in a visually appealing manner, seamlessly integrating with the overall architecture of the project.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- integrations Submodule -->
			<details>
				<summary><b>integrations</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.integrations</b></code>
					<!-- supabase Submodule -->
					<details>
						<summary><b>supabase</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.integrations.supabase</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/integrations/supabase/types.ts'>types.ts</a></b></td>
									<td style='padding: 8px;'>- Defines types and structures for managing database interactions within the Supabase integration of the project<br>- It establishes a clear schema for user profiles, resume history, and resume optimizations, facilitating data consistency and type safety across the application<br>- This enhances the overall architecture by ensuring that data handling adheres to predefined formats, thereby streamlining development and reducing potential errors.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/integrations/supabase/client.ts'>client.ts</a></b></td>
									<td style='padding: 8px;'>- Establishes a connection to the Supabase backend, enabling seamless interaction with the database<br>- By utilizing the Supabase client, it facilitates data operations within the application, ensuring efficient data retrieval and manipulation<br>- This integration plays a crucial role in the overall architecture, serving as a bridge between the frontend and the database, thereby enhancing the applications functionality and user experience.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- lib Submodule -->
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.lib</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/lib/utils.ts'>utils.ts</a></b></td>
							<td style='padding: 8px;'>- Utility functions streamline the process of combining and managing CSS class names within the project<br>- By leveraging the capabilities of clsx and tailwind-merge, the cn function enhances the flexibility and efficiency of styling components, ensuring that class names are merged correctly and without conflicts<br>- This contributes to a cleaner and more maintainable codebase, ultimately improving the overall user interface experience.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/Footer.tsx'>Footer.tsx</a></b></td>
							<td style='padding: 8px;'>- Footer component enhances the user experience by providing essential navigation links, legal information, and social media connections<br>- It serves as a consistent element across the application, reinforcing the brand identity of Resume Crafted while facilitating access to important resources<br>- The design incorporates responsive features and animations, contributing to an engaging interface that supports users in their job search journey.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/Navbar.tsx'>Navbar.tsx</a></b></td>
							<td style='padding: 8px;'>- Navbar component enhances user navigation by providing a responsive header that adapts to user authentication status and scroll behavior<br>- It integrates theme toggling for dark and light modes, displays relevant navigation links, and facilitates user actions such as login, logout, and accessing account settings<br>- This component plays a crucial role in the overall user experience, ensuring seamless interaction within the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/FAQ.tsx'>FAQ.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a user-friendly FAQ section for the Resume Crafted platform, addressing common inquiries about the service<br>- It enhances user experience by presenting essential information regarding ATS optimization, supported file formats, accuracy of ATS scoring, payment structure, and processing time in an interactive accordion format<br>- This component contributes to the overall architecture by ensuring users have quick access to vital details, fostering informed usage of the platform.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/HowItWorks.tsx'>HowItWorks.tsx</a></b></td>
							<td style='padding: 8px;'>- Showcasing the user journey, the HowItWorks component outlines the six-step process for creating an ATS-optimized resume and cover letter<br>- It guides users from uploading their resume to downloading tailored documents, enhancing their job application experience<br>- By presenting this structured approach, it effectively communicates the value of the project, encouraging users to engage with the platform and start their application process confidently.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/CTA.tsx'>CTA.tsx</a></b></td>
							<td style='padding: 8px;'>- CTA component serves as a dynamic call-to-action section within the application, designed to engage users and encourage them to register for the service<br>- It highlights key benefits of the platform, emphasizes a limited-time offer, and provides a visually appealing interface that guides users towards taking action<br>- By showcasing the value proposition, it aims to enhance user conversion and retention in the job search process.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/Testimonials.tsx'>Testimonials.tsx</a></b></td>
							<td style='padding: 8px;'>- Showcasing user success stories enhances the overall user experience by providing social proof for the Resume Crafted platform<br>- The Testimonials component presents curated feedback from satisfied users, highlighting their achievements after utilizing the service<br>- By featuring these testimonials, the project aims to build trust and encourage potential users to engage with the platform, ultimately driving conversions and user satisfaction.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ResumeUploader.tsx'>ResumeUploader.tsx</a></b></td>
							<td style='padding: 8px;'>- Users can easily upload their resumes through an intuitive interface.-<strong>Feedback MechanismOnce a resume is uploaded, the component triggers an optimization process that evaluates the document and returns actionable insights.-</strong>User NotificationsThe component integrates with a toast notification system to inform users about the status of their upload and any resulting feedback.-**Visual RepresentationIt includes a scorecard that visually represents the optimization results, making it easier for users to understand their resume's strengths and weaknesses.## Integration within the CodebaseThe <code>ResumeUploader</code> is a crucial part of the applications architecture, linking the user interface with backend services (like Supabase) for file storage and processing<br>- It enhances the overall user experience by providing immediate, actionable insights, thereby aligning with the project's goal of empowering users in their job search journey.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/Hero.tsx'>Hero.tsx</a></b></td>
							<td style='padding: 8px;'>- Hero component serves as a visually engaging introduction to the Resume Crafted application, emphasizing its core value proposition of helping users optimize their resumes to pass ATS filters and secure more interviews<br>- By showcasing key features, user testimonials, and a clear call to action, it effectively guides users towards utilizing the platforms free services, enhancing their job application success in the Indian job market.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/Features.tsx'>Features.tsx</a></b></td>
							<td style='padding: 8px;'>- Features component showcases a suite of tools designed to enhance job application processes<br>- It enables users to upload resumes, analyze job descriptions, check ATS compatibility, optimize resumes, generate personalized cover letters, and export documents<br>- This comprehensive toolkit empowers users to effectively tailor their applications, increasing their chances of landing interviews and securing job opportunities.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ResumeScoreCard.tsx'>ResumeScoreCard.tsx</a></b></td>
							<td style='padding: 8px;'>- ResumeScoreCard component visually represents a users resume evaluation, displaying a score alongside detailed metrics such as keyword match, format compliance, experience match, and skills relevance<br>- It also provides actionable improvement suggestions, enhancing user engagement and guiding them towards optimizing their resumes<br>- The component adapts to light and dark themes, ensuring a consistent user experience across different settings.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ResumeHistory.tsx'>ResumeHistory.tsx</a></b></td>
							<td style='padding: 8px;'>- ResumeHistory component manages the display and interaction with a users resume optimization history<br>- It retrieves and presents a list of resumes along with their optimization scores, allowing users to view detailed analysis, download resumes, and access analysis reports<br>- This functionality enhances user engagement by providing insights into resume performance and improvement suggestions, contributing to the overall goal of optimizing job application materials.</td>
						</tr>
					</table>
					<!-- ui Submodule -->
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.ui</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/card.tsx'>card.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of reusable React components for creating card interfaces within the application<br>- These components, including Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter, facilitate the consistent presentation of content, enhancing the user interface by allowing developers to easily structure and style card elements while maintaining a cohesive design throughout the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/input.tsx'>input.tsx</a></b></td>
									<td style='padding: 8px;'>- Input component serves as a customizable and reusable UI element within the project, designed to streamline the creation of input fields across the application<br>- By leveraging Reacts forwardRef, it enhances accessibility and flexibility, allowing developers to easily integrate various input types while maintaining consistent styling and behavior<br>- This component contributes to a cohesive user interface, ensuring a seamless user experience throughout the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/context-menu.tsx'>context-menu.tsx</a></b></td>
									<td style='padding: 8px;'>- ContextMenu provides a customizable and accessible context menu component for React applications<br>- It enhances user interaction by allowing developers to create context menus with various items, including checkboxes and radio buttons, while maintaining a consistent design<br>- This component integrates seamlessly into the overall project architecture, promoting a cohesive user experience across the UI by leveraging Radix UI primitives for robust functionality.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/aspect-ratio.tsx'>aspect-ratio.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a reusable AspectRatio component that simplifies the implementation of responsive design elements within the user interface<br>- By leveraging the Radix UI library, it ensures consistent aspect ratios for various media types, enhancing the overall layout and visual integrity of the application<br>- This component plays a crucial role in maintaining a cohesive and adaptable UI architecture throughout the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/popover.tsx'>popover.tsx</a></b></td>
									<td style='padding: 8px;'>- Popover components enhance user interfaces by providing contextual information in a visually appealing manner<br>- They facilitate interaction by displaying content that can be triggered by user actions, such as clicks or hovers<br>- This implementation leverages Radix UI for accessibility and animation, ensuring a seamless experience while maintaining design consistency across the application<br>- Overall, these components contribute to a more dynamic and engaging user experience within the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/toast.tsx'>toast.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable toast notification system for user feedback within the application<br>- It integrates with Radix UIs toast components, allowing for various notification types such as success and error messages<br>- The architecture supports flexible styling and behavior, enhancing user experience by delivering timely alerts in a visually appealing manner, while maintaining accessibility and responsiveness across different devices.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/button.tsx'>button.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a versatile button component designed for a user interface, enabling consistent styling and behavior across the application<br>- It supports various visual variants and sizes, enhancing the overall user experience<br>- By leveraging React and class-variance-authority, it allows for easy customization while maintaining accessibility and responsiveness, fitting seamlessly into the projects architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/select.tsx'>select.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable and accessible select component for user interfaces, enhancing the overall user experience within the project<br>- It integrates various elements such as triggers, content, items, and separators, allowing for a seamless selection process<br>- This component leverages Radix UI for robust functionality while ensuring a visually appealing design that aligns with the projects aesthetic and usability goals.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/chart.tsx'>chart.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a flexible and customizable charting component for React applications, enabling developers to easily integrate responsive charts with various themes and styles<br>- It facilitates the management of chart configurations, tooltips, and legends, enhancing the user experience through dynamic data visualization<br>- This component is designed to seamlessly fit within the broader architecture of the project, promoting consistency and reusability across the UI.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/table.tsx'>table.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of reusable React components for building accessible and styled tables within the user interface<br>- These components, including Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, and TableCaption, enhance the overall architecture by promoting consistency and modularity, allowing developers to easily integrate and customize table structures across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/input-otp.tsx'>input-otp.tsx</a></b></td>
									<td style='padding: 8px;'>- InputOTP provides a customizable and user-friendly interface for entering one-time passwords (OTPs) within the application<br>- It enhances user experience by allowing flexible styling and layout options through its components, including InputOTPGroup, InputOTPSlot, and InputOTPSeparator<br>- This modular approach integrates seamlessly into the overall project architecture, facilitating secure and efficient OTP input handling across various user interfaces.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/carousel.tsx'>carousel.tsx</a></b></td>
									<td style='padding: 8px;'>- Carousel component provides a flexible and interactive UI element for displaying a series of content items in a scrollable format<br>- It supports both horizontal and vertical orientations, allowing users to navigate through items using arrow buttons or keyboard controls<br>- By integrating with the Embla Carousel library, it enhances user experience through smooth transitions and accessibility features, making it a vital part of the projects user interface architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/collapsible.tsx'>collapsible.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of UI components for creating collapsible sections within the application<br>- By leveraging the Radix UI library, it enables developers to implement expandable and collapsible content areas, enhancing user experience through improved organization of information<br>- These components seamlessly integrate into the broader project architecture, promoting a cohesive and interactive interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/progress.tsx'>progress.tsx</a></b></td>
									<td style='padding: 8px;'>- Progress component enhances user experience by visually indicating the completion status of tasks within the application<br>- It integrates seamlessly with the Radix UI library, providing a customizable and accessible progress bar<br>- By utilizing this component, developers can effectively communicate progress to users, ensuring clarity and engagement throughout various workflows in the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/dialog.tsx'>dialog.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable dialog component for user interactions within the application<br>- It encapsulates various elements such as headers, footers, titles, and descriptions, allowing for a cohesive and accessible user experience<br>- By leveraging Radix UIs dialog primitives, it ensures smooth animations and responsive design, enhancing the overall architecture of the codebase by promoting modularity and reusability in UI components.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/label.tsx'>label.tsx</a></b></td>
									<td style='padding: 8px;'>- Label component serves as a customizable UI element within the project, enhancing accessibility and user experience<br>- By leveraging Radix UIs label functionality and applying consistent styling through class-variance-authority, it ensures a cohesive design across the application<br>- This component integrates seamlessly into forms, providing clear labeling for input elements while maintaining responsiveness and adaptability to various design requirements.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/alert-dialog.tsx'>alert-dialog.tsx</a></b></td>
									<td style='padding: 8px;'>- AlertDialog component provides a customizable and accessible dialog interface for user interactions within the application<br>- It enhances user experience by presenting critical information or actions in a focused manner, ensuring clarity and engagement<br>- By integrating with Radix UI, it leverages advanced features like animations and state management, contributing to a cohesive and visually appealing user interface across the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/resizable.tsx'>resizable.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of reusable components for creating resizable panels within a user interface<br>- These components enable flexible layout adjustments, enhancing user experience by allowing dynamic resizing of panel sections<br>- The integration with the <code>react-resizable-panels</code> library ensures smooth interactions, while customizable styles maintain visual consistency across the application<br>- This functionality is essential for applications requiring adaptable content organization.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/toaster.tsx'>toaster.tsx</a></b></td>
									<td style='padding: 8px;'>- Toaster component enhances user experience by providing a dynamic notification system within the application<br>- It utilizes a toast context to manage and display notifications, allowing for customizable messages and actions<br>- By integrating seamlessly with the ToastProvider, it ensures that notifications are presented in an organized manner, contributing to a cohesive user interface and improving overall interaction within the codebase architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/dropdown-menu.tsx'>dropdown-menu.tsx</a></b></td>
									<td style='padding: 8px;'>- Dropdown menu components enhance user interface interactions by providing a structured way to display options and actions<br>- These components facilitate the creation of customizable dropdown menus, including triggers, items, and submenus, while ensuring accessibility and responsiveness<br>- By integrating with Radix UI, the dropdown menu architecture promotes a consistent and visually appealing experience across applications, streamlining user navigation and selection processes.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/avatar.tsx'>avatar.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of customizable avatar components that enhance user interface consistency and visual appeal within the application<br>- By leveraging Radix UIs avatar primitives, these components facilitate the display of user images, fallback content, and styling options, ensuring a seamless integration into the overall codebase architecture while promoting a polished user experience across various contexts.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/drawer.tsx'>drawer.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable drawer component for a user interface, enhancing the overall user experience by allowing content to be displayed in an overlay format<br>- It includes various subcomponents such as headers, footers, and titles, enabling developers to create structured and visually appealing drawer interfaces<br>- This component integrates seamlessly into the broader architecture, promoting consistency and reusability across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/badge.tsx'>badge.tsx</a></b></td>
									<td style='padding: 8px;'>- Badge component enhances user interfaces by providing a visually distinct way to display status or notifications<br>- It supports multiple styling variants, allowing for consistent design across applications<br>- By integrating seamlessly with the overall project architecture, it promotes reusability and maintainability, ensuring that developers can easily implement badges with varying appearances while adhering to the projects design system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/separator.tsx'>separator.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable separator component that enhances the user interface by visually dividing content<br>- Utilizing Radix UIs separator primitives, it supports both horizontal and vertical orientations while allowing for decorative styling<br>- This component integrates seamlessly into the overall architecture, promoting consistency and reusability across the UI elements within the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/tooltip.tsx'>tooltip.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable tooltip component that enhances user interface interactions by displaying contextual information<br>- It leverages Radix UIs tooltip primitives to ensure accessibility and responsiveness, while allowing for easy styling and positioning<br>- This component integrates seamlessly into the overall project architecture, promoting a consistent and user-friendly experience across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/sheet.tsx'>sheet.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable sheet component for user interfaces, enabling modal-like interactions within applications<br>- It facilitates the display of content in a sliding panel format, enhancing user experience with smooth animations and accessibility features<br>- The component architecture supports various configurations, including headers, footers, and overlays, ensuring flexibility in design while maintaining a cohesive look and feel across the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/menubar.tsx'>menubar.tsx</a></b></td>
									<td style='padding: 8px;'>- Menubar component provides a flexible and accessible user interface element for navigation within the application<br>- It enables the creation of a structured menu system, allowing users to interact with various options seamlessly<br>- By leveraging Radix UI primitives, it enhances usability and visual consistency, contributing to a cohesive design across the codebase while ensuring a responsive and intuitive experience for end-users.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/tabs.tsx'>tabs.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of customizable tab components that enhance user interface navigation within the application<br>- By leveraging Radix UIs tab primitives, it facilitates the creation of accessible and visually appealing tab structures<br>- These components streamline the organization of content, allowing users to switch between different views seamlessly while maintaining a consistent design language throughout the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/calendar.tsx'>calendar.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable calendar component that enhances user interaction within the application<br>- By integrating the DayPicker library, it allows users to navigate through days and months seamlessly while displaying selected dates with distinct styles<br>- The components design is adaptable, ensuring it fits well within various UI contexts, contributing to a cohesive user experience across the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/scroll-area.tsx'>scroll-area.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable scroll area component that enhances user experience by enabling smooth scrolling within a defined viewport<br>- It integrates with Radix UIs scroll area primitives, allowing for both vertical and horizontal scrolling options<br>- This component is designed to be easily styled and extended, fitting seamlessly into the overall architecture of the project, which emphasizes modular and reusable UI elements.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/accordion.tsx'>accordion.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable accordion component for the user interface, enhancing the overall user experience by allowing content to be displayed or hidden interactively<br>- It leverages Radix UIs accordion primitives to ensure accessibility and responsiveness, while integrating smooth animations and styling options<br>- This component is essential for organizing information in a collapsible format, contributing to a clean and efficient layout within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/form.tsx'>form.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of reusable components for building forms within a React application, leveraging the React Hook Form library for state management<br>- It facilitates the creation of form fields, labels, controls, descriptions, and messages, ensuring a consistent and accessible user experience<br>- This architecture enhances form handling by encapsulating context and state management, promoting modularity and ease of integration across the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/sonner.tsx'>sonner.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable toast notification component that integrates seamlessly with the applications theme settings<br>- By leveraging the Sonner library, it enhances user experience through visually appealing notifications that adapt to light and dark modes<br>- This component plays a crucial role in the overall user interface, ensuring consistent feedback and interaction across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/toggle-group.tsx'>toggle-group.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable toggle group component that enhances user interface interactions by allowing users to select one or more options visually<br>- It leverages context to manage variant and size properties, ensuring consistent styling across toggle items<br>- This component integrates seamlessly with the broader architecture, promoting reusability and maintainability within the UI framework of the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/breadcrumb.tsx'>breadcrumb.tsx</a></b></td>
									<td style='padding: 8px;'>- Breadcrumb components provide a structured navigation aid within the user interface, enhancing user experience by visually indicating the current pages location within the site hierarchy<br>- This collection includes elements for the breadcrumb container, list, items, links, separators, and ellipses, ensuring a cohesive and accessible navigation system that aligns with the overall architecture of the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/textarea.tsx'>textarea.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable textarea component designed for use within a React application<br>- It enhances user input experiences by incorporating flexible styling options and accessibility features<br>- This component integrates seamlessly into the overall project architecture, promoting consistency and reusability across the user interface while adhering to best practices in component design.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/sidebar.tsx'>sidebar.tsx</a></b></td>
									<td style='padding: 8px;'>The sidebar adjusts its width based on the device type, ensuring usability on both mobile and desktop platforms.-<strong>State ManagementIt utilizes a context to manage its open/closed state, allowing for seamless interaction and integration with other components.-</strong>User-Friendly NavigationThe sidebar includes various UI elements such as buttons, inputs, and tooltips, which facilitate easy navigation and interaction for users.In summary, the Sidebar component is integral to the projects architecture, providing a structured and user-friendly interface that enhances navigation and accessibility across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/navigation-menu.tsx'>navigation-menu.tsx</a></b></td>
									<td style='padding: 8px;'>- NavigationMenu provides a flexible and visually appealing user interface component for navigation within the application<br>- It enhances user experience by allowing for dynamic menu interactions, including dropdowns and animated transitions<br>- By integrating with Radix UI, it ensures accessibility and responsiveness, making it a vital part of the overall codebase architecture that focuses on creating intuitive and engaging navigation solutions.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/use-toast.ts'>use-toast.ts</a></b></td>
									<td style='padding: 8px;'>- Facilitates the integration of toast notifications within the user interface by exporting essential hooks and functions<br>- This component serves as a bridge to the notification system, enabling developers to easily implement and manage toast messages throughout the application<br>- Its role enhances user experience by providing timely feedback and alerts in a consistent manner across the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/slider.tsx'>slider.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable slider component that enhances user interaction within the UI<br>- By leveraging Radix UIs slider primitives, it ensures accessibility and responsiveness while maintaining a consistent design language<br>- This component integrates seamlessly into the broader project architecture, facilitating intuitive value selection and enhancing the overall user experience across various applications.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/switch.tsx'>switch.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable switch component that enhances user interface interactions within the project<br>- Leveraging Radix UIs primitives, it ensures accessibility and responsiveness while maintaining a visually appealing design<br>- This component integrates seamlessly into the overall architecture, allowing developers to implement toggle functionality effortlessly, thereby improving user experience across various application contexts.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/command.tsx'>command.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a set of UI components for a command interface, enhancing user interaction within the application<br>- It includes elements such as a command dialog, input field, list, and various item types, all styled for a cohesive look<br>- These components facilitate efficient command execution and navigation, contributing to a streamlined user experience in the overall codebase architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/toggle.tsx'>toggle.tsx</a></b></td>
									<td style='padding: 8px;'>- Toggle component serves as a customizable user interface element that enhances interactivity within the application<br>- By leveraging Radix UIs toggle functionality, it provides a visually appealing and accessible way to switch between states<br>- The component supports various styles and sizes, ensuring consistency across the codebase while allowing for flexibility in design, ultimately contributing to a cohesive user experience.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/alert.tsx'>alert.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable alert component for user notifications within the UI framework<br>- It supports various visual styles, including default, destructive, warning, success, and info, enhancing user experience by clearly communicating different types of messages<br>- The component is designed for flexibility and ease of integration, allowing developers to implement alerts consistently across the application while maintaining a cohesive design.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/hover-card.tsx'>hover-card.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable hover card component that enhances user interaction within the UI<br>- By leveraging Radix UIs hover card primitives, it allows for the display of contextual information when users hover over specific elements<br>- This component integrates seamlessly into the overall project architecture, promoting a consistent and engaging user experience while maintaining accessibility and responsiveness.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/skeleton.tsx'>skeleton.tsx</a></b></td>
									<td style='padding: 8px;'>- Skeleton serves as a reusable UI component that provides a placeholder for loading content, enhancing user experience by indicating that data is being fetched<br>- It features a pulsing animation and customizable styling, seamlessly integrating into the broader project architecture to maintain a consistent design language across the application while improving perceived performance during asynchronous operations.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/pagination.tsx'>pagination.tsx</a></b></td>
									<td style='padding: 8px;'>- Pagination components provide a flexible and accessible way to navigate through paginated content within the application<br>- By offering various elements such as previous and next buttons, ellipsis indicators, and customizable links, these components enhance user experience and ensure seamless interaction with large datasets<br>- Their integration into the broader codebase architecture supports efficient content management and improves overall usability.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/radio-group.tsx'>radio-group.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides a customizable radio group component that enhances user interaction within the UI<br>- It leverages Radix UIs radio group primitives to ensure accessibility and responsiveness while allowing for easy styling and integration<br>- The component includes individual radio items, each featuring a visual indicator, promoting a cohesive design and improving the overall user experience in the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jeevanba273/resume-crafted/blob/master/src/components/ui/checkbox.tsx'>checkbox.tsx</a></b></td>
									<td style='padding: 8px;'>- Checkbox component serves as a customizable user interface element within the project, enabling users to select options seamlessly<br>- Built on Radix UIs checkbox primitives, it enhances accessibility and visual consistency across the application<br>- By integrating with utility functions for styling, it ensures a cohesive design while providing essential feedback through visual indicators, contributing to an intuitive user experience in the overall codebase architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### ⚙️ Installation

Build resume-crafted from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/jeevanba273/resume-crafted
    ```

2. **Navigate to the project directory:**

    ```sh
    cd resume-crafted
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
npm install
```

### 💻 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### 🧪 Testing

Resume-crafted uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## 📈 Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## 🤝 Contributing

- **💬 [Join the Discussions](https://github.com/jeevanba273/resume-crafted/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/jeevanba273/resume-crafted/issues)**: Submit bugs found or log feature requests for the `resume-crafted` project.
- **💡 [Submit Pull Requests](https://github.com/jeevanba273/resume-crafted/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/jeevanba273/resume-crafted
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/jeevanba273/resume-crafted/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=jeevanba273/resume-crafted">
   </a>
</p>
</details>

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
