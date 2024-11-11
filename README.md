<div align="center" >
  <br />
    <a href="https://spillthebeans.vercel.app/" >
    <img src="https://i.ibb.co/wBJ2fWX/Heading.png" width="45%" alt="Heading" border="0">
    <img src="https://i.ibb.co/prRHqBV/Heading-d.png" width="46%"alt="Heading-d" border="0">
    </a>
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=FFFFFF" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF&color=06B6D4" alt="Tailwind CSS" />
    <br />
    <img src="https://img.shields.io/badge/-shadcn-black?style=for-the-badge&logo=shadcn/ui&logoColor=FFFFFF&color=000000" alt="shadcn" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logo=sanity&logoColor=FFFFFF&color=F03E2F" alt="Sanity" />
    <img src="https://img.shields.io/badge/-🐻 Zustand-black?style=for-the-badge&logoColor=FFFFFF&color=343A40" alt="Zustand" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logo=stripe&logoColor=FFFFFF&color=635BFF" alt="Stripe" />

  </div>

  <h3 align="center">Spill the Beans</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ☕ [Introduction](#introduction)
2. 📋 [Features](#features)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🤸 [Quick Start](#quick-start)
5. 🚀 [How It Works](#usage)
6. 📸 [Screenshots](#screenshots)
7. 🔑 [Credentials Setup](#credentials)

## <a name="introduction">☕ Introduction</a>

**Spill the Beans** is a sleek and modern ecommerce platform designed for coffee enthusiasts. Our web app provides a seamless shopping experience with a responsive and intuitive user interface, allowing users to browse, select, and purchase a variety of premium coffee beans. Built with performance, security, and scalability in mind, Spill the Beans is the perfect solution for coffee lovers looking for a convenient, high-quality shopping experience.

## <a name="features">📋 Features</a>

- **Product Catalog:** Browse a collection of premium coffee products with detailed descriptions and pricing.
- **Sales Promotions:** Highlighted sections for promotions and discounts to boost customer engagement.

- **Product Details:** View product descriptions, prices, and related items with an easy-to-use interface.

- **Dark/Light Mode:** Toggle between light and dark themes for a customized viewing experience.

- **Shopping Cart:** Add, remove, and update item quantities in the cart with real-time total calculation.

- **CMS Integration:** Products and promotions managed dynamically through Sanity CMS for easy updates.

- **Responsive Design:** Mobile-friendly, ensuring a smooth shopping experience on any device.

## <a name="tech-stack">⚙️ Tech Stack</a>

### 🎨 Frontend

- **React**: Core library for building the user interface.
- **Next.js**: Framework for server-side rendering and building static websites with React.
- **TypeScript**: Adds type safety to the codebase for better maintainability.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive styling.
- **ShadCN**: Provides pre-built UI components that integrate with Tailwind CSS.

### 📦 State Management & Data Fetching

- **Zustand**: Lightweight state management for managing global state.
- **Sanity**: Headless CMS for managing product data and promotional content.

### 💳 Payment Integration

- **Stripe**: Payment processing with secure integration for handling transactions.

### 🌐 Deployment

- **Vercel**: Platform for frontend hosting and deployment

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Cloning the Repository**

```bash
git clone https://github.com/rafalin0/spillthebeans.git
cd spillthebeans
```

### **Installation**

Install the project dependencies using npm:

```bash
npm install
```

### **Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_TOKEN=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_STRIPE_SECRET_KEY=

NEXT_PUBLIC_URL="http://localhost:3000"

```

Place your actual [Sanity](https://www.sanity.io/) and [Stripe](https://stripe.com/) credentials. To obtain these credentials, you may refer to these [**step-by-step guides**](#credentials).

### **Running the Project**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 <a name="usage"> How It Works</a>

1. **Browse Products**: Users can view the coffee beans and accessories available for purchase.
2. **Add to Cart**: Select a product and add it to the shopping cart. Users can adjust quantities or remove items.
3. **Checkout**: When ready, users proceed to checkout, where they can securely enter payment details via Stripe.
4. **Order Confirmation**: After successful payment, users receive a confirmation screen.
5. **Light/Dark Mode Toggle**: Users can switch between light and dark modes using a toggle button, creating a personalized and comfortable browsing experience.

## 📸 <a name="screenshots">Screenshots</a>

Here are some sample screenshots of the Spill the Beans app:

<div align="center" >
<img src="https://i.ibb.co/VWGd1jj/Product-Page.png" width="22.5%" alt="Product-Page" border="0">
<img src="https://i.ibb.co/SQPgqXW/Homepage.png" width="22.5%" alt="Homepage" border="0">
<img src="https://i.ibb.co/VqJKV0P/Homepage-dark.png" width="22.5%"  alt="Homepage-dark" border="0">
<img src="https://i.ibb.co/T89SjDg/Product-Page-dark.png" width="22.5%"  alt="Product-Page-dark" border="0">
<img src="https://i.ibb.co/pKLRGgk/Products-Page.png" width="22.5%" alt="Products-Page" border="0">
<img src="https://i.ibb.co/nkS25QF/cart.png" width="22.5%" alt="cart" border="0">
<img src="https://i.ibb.co/S3VTyqT/Checkout-Page.png" width="22.5%" alt="Checkout-Page" border="0">
<img src="https://i.ibb.co/Gs96VjN/Successful-Payment.png" width="22.5%" alt="Successful-Payment" border="0">
</div>

## 🔑 <a name="credentials">Obtaining Credentials for Stripe and Sanity</a>

### 👉 [Sanity](https://www.sanity.io/)

Follow these steps to obtain your **Sanity** credentials:

1. **Create or Log in to a Sanity.io Account**

   - Visit [Sanity.io](https://www.sanity.io/) and sign up or log in to your account.

2. **Create a New Project (if not done already)**

   - After logging in, create a new project from the Sanity dashboard, where you can set up your project and define its settings.

3. **Find Your Project ID**

   - Go to your project’s dashboard on Sanity.io.
   - In the “Settings” section, you will find your **Project ID** listed under project details.

4. **Access the Dataset**

   - In your project’s dashboard, navigate to the “Datasets” section.
   - You will see the available datasets like `production` (default) or any custom ones you've created. Note down the dataset name you wish to use.

5. **Generate a Token**
   - From the project dashboard, go to **Settings** → **API**.
   - Under the **API** tab, click **Create New Token**.
   - Select the permissions (read or write) for your token, and then generate it.
   - Copy the token for use in your application.

---

### 👉 [Stripe](https://stripe.com/)

Follow these steps to obtain your **Stripe** credentials:

1. **Create or Log in to Your Stripe Account**

   - Go to [Stripe](https://stripe.com/) and sign up or log in to your existing account.

2. **Navigate to the Dashboard**

   - After logging in, you will be taken to your **Stripe Dashboard**.

3. **Go to the Developers Section**

   - On the left-hand side of the dashboard, find and click on the **Developers** link (under "Settings" or in the menu).

4. **Access API Keys**

   - Under the **Developers** section, click on **API keys**. This will show both your test and live keys.

5. **Get Your Test Publishable Key**

   - In the **API keys** section, you will see two types of keys: **Test** and **Live**.
   - Under **Test keys**, you will find the **Publishable Key**. Click the "Reveal" button next to the key to view it. This is the **test publishable key** that you will use in your frontend code.

6. **Get Your Test Secret Key**
   - Under **Test keys**, you will also find the **Secret Key**. Click the "Reveal" button to display it. This is the **test secret key** you will use in your backend code to authenticate API requests.
